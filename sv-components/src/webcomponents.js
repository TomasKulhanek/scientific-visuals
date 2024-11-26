import { WcCustomElementRegistry } from '@aurelia/web-components'; // Import your registry implementation

import { DI, Registration  } from '@aurelia/kernel';
import { Aurelia, CustomElement, StandardConfiguration, IPlatform, IContainer} from '@aurelia/runtime-html';
//import { IPlatform } from '@aurelia/runtime-html';

//import { Aurelia, IWcElementRegistry } from 'aurelia';
import { Chartjs } from './components/chartjs';
import { ChartjsScatter } from './components/chartjs-scatter';


// Create the Aurelia container
const container = DI.createContainer();
const platform = window;
container.register(Registration.instance(IPlatform, platform));
// Register the StandardConfiguration
container.register(StandardConfiguration); // This registers core services like IExpressionParser

// Provide a dummy app root to avoid AUR0770
const dummyApp = CustomElement.define({
  name: 'dummy-app',
  template: '',
});
// Start Aurelia with a dummy app root
const aurelia = new Aurelia(container);
aurelia.app({ host: document.createElement('div'), component: dummyApp });
aurelia.start();

// Define the web components
//const registry = new WcCustomElementRegistry(); // Instantiate the registry
// Provide the container to WcCustomElementRegistry
const registry = container.get(WcCustomElementRegistry);

registry.define('sv-chartjs', Chartjs);
registry.define('sv-chartjs-scatter', ChartjsScatter);

// Optionally, export the registry for further use
export { registry };
/*
import { WcCustomElementRegistry } from '@aurelia/web-components';
import { DI, Registration } from '@aurelia/kernel';
import { Aurelia, CustomElement } from '@aurelia/runtime-html';
import { IPlatform } from '@aurelia/runtime-html';

import { Chartjs } from './components/chartjs';
import { Chartjs2 } from './components/chartjs2';

// Create the Aurelia container
const container = DI.createContainer();
const platform = window;
container.register(Registration.instance(IPlatform, platform));

// Provide a dummy app root to avoid AUR0770
const dummyApp = CustomElement.define({
  name: 'dummy-app',
  template: '',
});

// Start Aurelia with a dummy app root
const aurelia = new Aurelia(container);
aurelia.app({ host: document.createElement('div'), component: dummyApp });
aurelia.start();

// Initialize the custom element registry
const registry = new WcCustomElementRegistry();

// Define web components
registry.define('sv-chartjs', Chartjs);
registry.define('sv-chartjs-scatter', Chartjs2);

export { registry };
*/