import { Chart, registerables } from "chart.js/auto";
import { bindable } from 'aurelia';
import { topojson, ChoroplethController, GeoFeature, ProjectionScale, ColorScale } from "chartjs-chart-geo";
import { whereNumeric,whereAlpha2 } from 'iso-3166-1'
// 
@customElement('sv-chartjs-geo')
export class ChartjsGeo {
    @bindable datasrc = 'g/National_Initiatives_Figure_Data.csv';
    @bindable countriessrc = 'https://unpkg.com/world-atlas/countries-50m.json'
    geochart;
    countryDataDesc = {};
    // Helper function to parse CSV
    parseCSV(csv) {
        const rows = csv.split('\n').map((row) => row.split(','));
        const headers = rows.shift(); // Extract header row
        return rows.map((row) =>
            headers.reduce((acc, header, index) => {
                acc[header] = row[index];
                return acc;
            }, {})
        );
    }
    
    showSelected(selectedid){
        console.log('showselected',selectedid)
        this.selected = this.countryDataDesc[selectedid];
        console.log(this.selected)
    }

    attached() {
        
        Chart.register(ChoroplethController, GeoFeature, ProjectionScale, ColorScale, ...registerables);
        Promise.all([
            fetch(this.countriessrc).then((res) => res.json()),
            fetch(this.datasrc).then((res) => res.text()), // Fetch the CSV file
        ]).then(([topoData, csvData]) => {
            let that = this;
            const countries = topojson.feature(topoData, topoData.objects.countries).features;
            // Parse the CSV
            const parsedCSV = this.parseCSV(csvData);
            // Create a lookup for ISO country codes to project status (number)
            let countryDataMap = {}
            this.countryDataDesc = {}
            for (let row of parsedCSV) {
                let countryid = whereAlpha2(row['ISO 3166-1 alpha-2 Code']);
                if (countryid) {
                    countryDataMap[countryid.numeric]=row['project status (number)'];
                    this.countryDataDesc[countryid.numeric]=row;
                }
            }
            let myData = []
            for (let country of countries) {
                //let isocountry = whereNumeric(country.id)
                let myValue = 0;
                //if (isocountry) {
                  //let isocountryalpha2 = isocountry.alpha2
                  //let countryvalue = countryDataMap[isocountryalpha2]
                  //myValue = parseFloat(countryvalue);
                //} else {
                    //console.warn('cannot find alpha code for country with id'+ country.id+ ' name:' + country.properties.name);
                //}
                let rawValue = countryDataMap[country.id];
                if (rawValue) {
                    myValue = parseFloat(rawValue)
                } else console.warn('no data for country with id'+ country.id+ ' name:' + country.properties.name);
                myData.push({
                    feature: country,
                    value: myValue
                })
            }

            //console.log('countries',countries);
            
            const chart = new Chart(this.geochart.getContext("2d"), {
                type: 'choropleth',
                data: {
                    labels: countries.map((d) => d.id +':'+d.properties.name),
                    datasets: [{
                        label: 'Countries',
                        //data: countries.map((d) => ({ feature: d, value: Math.random() })),
                        data:myData,
                        outline: countries
                    }]
                },
                options: {
                    showOutline: true,
                    showGraticule: true,
                    plugins: {
                        legend: {
                            display: false
                        },

                    },
                    scales: {
                        projection: {
                            axis: 'x',
                            projection: 'equalEarth'
                        },
                        color: {
                            axis: 'x',
                            interpolate: 'oranges',
                            legend: {
                                position: 'bottom-right',
                                align: 'right',
                            }
                        }
                    },
                    onClick: (evt, elems) => {
                        let myitem = elems.map((elem) => elem.element.feature.id)
                        console.log('selected item + this + that', myitem,this,that);
                        that.showSelected(myitem[0])

                    },
                }
            });
        });
    }
}