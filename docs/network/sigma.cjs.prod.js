'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./index-4cdce1d5.cjs.prod.js');
var inherits = require('./inherits-bddcfb5f.cjs.prod.js');
var types_dist_sigmaTypes = require('../types/dist/sigma-types.cjs.prod.js');
var normalization = require('./normalization-402741ca.cjs.prod.js');
var settings_dist_sigmaSettings = require('../settings/dist/sigma-settings.cjs.prod.js');
var colors = require('./colors-ee2e2828.cjs.prod.js');
var data = require('./data-7e3d4a4a.cjs.prod.js');
require('events');
require('graphology-utils/is-graph');

/**
 * Defaults.
 */
var DEFAULT_ZOOMING_RATIO = 1.5;

/**
 * Event types.
 */
/**
 * Camera class
 */
var Camera = /*#__PURE__*/function (_TypedEventEmitter) {
  inherits._inherits(Camera, _TypedEventEmitter);
  function Camera() {
    var _this;
    inherits._classCallCheck(this, Camera);
    _this = inherits._callSuper(this, Camera);

    // State
    index._defineProperty(inherits._assertThisInitialized(_this), "x", 0.5);
    index._defineProperty(inherits._assertThisInitialized(_this), "y", 0.5);
    index._defineProperty(inherits._assertThisInitialized(_this), "angle", 0);
    index._defineProperty(inherits._assertThisInitialized(_this), "ratio", 1);
    index._defineProperty(inherits._assertThisInitialized(_this), "minRatio", null);
    index._defineProperty(inherits._assertThisInitialized(_this), "maxRatio", null);
    index._defineProperty(inherits._assertThisInitialized(_this), "enabledRotation", true);
    index._defineProperty(inherits._assertThisInitialized(_this), "nextFrame", null);
    index._defineProperty(inherits._assertThisInitialized(_this), "previousState", null);
    index._defineProperty(inherits._assertThisInitialized(_this), "enabled", true);
    _this.previousState = _this.getState();
    return _this;
  }

  /**
   * Static method used to create a Camera object with a given state.
   */
  inherits._createClass(Camera, [{
    key: "enable",
    value:
    /**
     * Method used to enable the camera.
     */
    function enable() {
      this.enabled = true;
      return this;
    }

    /**
     * Method used to disable the camera.
     */
  }, {
    key: "disable",
    value: function disable() {
      this.enabled = false;
      return this;
    }

    /**
     * Method used to retrieve the camera's current state.
     */
  }, {
    key: "getState",
    value: function getState() {
      return {
        x: this.x,
        y: this.y,
        angle: this.angle,
        ratio: this.ratio
      };
    }

    /**
     * Method used to check whether the camera has the given state.
     */
  }, {
    key: "hasState",
    value: function hasState(state) {
      return this.x === state.x && this.y === state.y && this.ratio === state.ratio && this.angle === state.angle;
    }

    /**
     * Method used to retrieve the camera's previous state.
     */
  }, {
    key: "getPreviousState",
    value: function getPreviousState() {
      var state = this.previousState;
      if (!state) return null;
      return {
        x: state.x,
        y: state.y,
        angle: state.angle,
        ratio: state.ratio
      };
    }

    /**
     * Method used to check minRatio and maxRatio values.
     */
  }, {
    key: "getBoundedRatio",
    value: function getBoundedRatio(ratio) {
      var r = ratio;
      if (typeof this.minRatio === "number") r = Math.max(r, this.minRatio);
      if (typeof this.maxRatio === "number") r = Math.min(r, this.maxRatio);
      return r;
    }

    /**
     * Method used to check various things to return a legit state candidate.
     */
  }, {
    key: "validateState",
    value: function validateState(state) {
      var validatedState = {};
      if (typeof state.x === "number") validatedState.x = state.x;
      if (typeof state.y === "number") validatedState.y = state.y;
      if (this.enabledRotation && typeof state.angle === "number") validatedState.angle = state.angle;
      if (typeof state.ratio === "number") validatedState.ratio = this.getBoundedRatio(state.ratio);
      return validatedState;
    }

    /**
     * Method used to check whether the camera is currently being animated.
     */
  }, {
    key: "isAnimated",
    value: function isAnimated() {
      return !!this.nextFrame;
    }

    /**
     * Method used to set the camera's state.
     */
  }, {
    key: "setState",
    value: function setState(state) {
      if (!this.enabled) return this;

      // Keeping track of last state
      this.previousState = this.getState();
      var validState = this.validateState(state);
      if (typeof validState.x === "number") this.x = validState.x;
      if (typeof validState.y === "number") this.y = validState.y;
      if (this.enabledRotation && typeof validState.angle === "number") this.angle = validState.angle;
      if (typeof validState.ratio === "number") this.ratio = validState.ratio;

      // Emitting
      if (!this.hasState(this.previousState)) this.emit("updated", this.getState());
      return this;
    }

    /**
     * Method used to update the camera's state using a function.
     */
  }, {
    key: "updateState",
    value: function updateState(updater) {
      this.setState(updater(this.getState()));
      return this;
    }

    /**
     * Method used to animate the camera.
     */
  }, {
    key: "animate",
    value: function animate(state) {
      var _this2 = this;
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var callback = arguments.length > 2 ? arguments[2] : undefined;
      if (!callback) return new Promise(function (resolve) {
        return _this2.animate(state, opts, resolve);
      });
      if (!this.enabled) return;
      var options = index._objectSpread2(index._objectSpread2({}, normalization.ANIMATE_DEFAULTS), opts);
      var validState = this.validateState(state);
      var easing = typeof options.easing === "function" ? options.easing : normalization.easings[options.easing];

      // State
      var start = Date.now(),
        initialState = this.getState();

      // Function performing the animation
      var fn = function fn() {
        var t = (Date.now() - start) / options.duration;

        // The animation is over:
        if (t >= 1) {
          _this2.nextFrame = null;
          _this2.setState(validState);
          if (_this2.animationCallback) {
            _this2.animationCallback.call(null);
            _this2.animationCallback = undefined;
          }
          return;
        }
        var coefficient = easing(t);
        var newState = {};
        if (typeof validState.x === "number") newState.x = initialState.x + (validState.x - initialState.x) * coefficient;
        if (typeof validState.y === "number") newState.y = initialState.y + (validState.y - initialState.y) * coefficient;
        if (_this2.enabledRotation && typeof validState.angle === "number") newState.angle = initialState.angle + (validState.angle - initialState.angle) * coefficient;
        if (typeof validState.ratio === "number") newState.ratio = initialState.ratio + (validState.ratio - initialState.ratio) * coefficient;
        _this2.setState(newState);
        _this2.nextFrame = requestAnimationFrame(fn);
      };
      if (this.nextFrame) {
        cancelAnimationFrame(this.nextFrame);
        if (this.animationCallback) this.animationCallback.call(null);
        this.nextFrame = requestAnimationFrame(fn);
      } else {
        fn();
      }
      this.animationCallback = callback;
    }

    /**
     * Method used to zoom the camera.
     */
  }, {
    key: "animatedZoom",
    value: function animatedZoom(factorOrOptions) {
      if (!factorOrOptions) return this.animate({
        ratio: this.ratio / DEFAULT_ZOOMING_RATIO
      });
      if (typeof factorOrOptions === "number") return this.animate({
        ratio: this.ratio / factorOrOptions
      });
      return this.animate({
        ratio: this.ratio / (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
      }, factorOrOptions);
    }

    /**
     * Method used to unzoom the camera.
     */
  }, {
    key: "animatedUnzoom",
    value: function animatedUnzoom(factorOrOptions) {
      if (!factorOrOptions) return this.animate({
        ratio: this.ratio * DEFAULT_ZOOMING_RATIO
      });
      if (typeof factorOrOptions === "number") return this.animate({
        ratio: this.ratio * factorOrOptions
      });
      return this.animate({
        ratio: this.ratio * (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
      }, factorOrOptions);
    }

    /**
     * Method used to reset the camera.
     */
  }, {
    key: "animatedReset",
    value: function animatedReset(options) {
      return this.animate({
        x: 0.5,
        y: 0.5,
        ratio: 1,
        angle: 0
      }, options);
    }

    /**
     * Returns a new Camera instance, with the same state as the current camera.
     */
  }, {
    key: "copy",
    value: function copy() {
      return Camera.from(this.getState());
    }
  }], [{
    key: "from",
    value: function from(state) {
      var camera = new Camera();
      return camera.setState(state);
    }
  }]);
  return Camera;
}(types_dist_sigmaTypes.TypedEventEmitter);

/**
 * Captor utils functions
 * ======================
 */

/**
 * Extract the local X and Y coordinates from a mouse event or touch object. If
 * a DOM element is given, it uses this element's offset to compute the position
 * (this allows using events that are not bound to the container itself and
 * still have a proper position).
 *
 * @param  {event}       e - A mouse event or touch object.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {number}      The local Y value of the mouse.
 */
function getPosition(e, dom) {
  var bbox = dom.getBoundingClientRect();
  return {
    x: e.clientX - bbox.left,
    y: e.clientY - bbox.top
  };
}

/**
 * Convert mouse coords to sigma coords.
 *
 * @param  {event}       e   - A mouse event or touch object.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {object}
 */
function getMouseCoords(e, dom) {
  var res = index._objectSpread2(index._objectSpread2({}, getPosition(e, dom)), {}, {
    sigmaDefaultPrevented: false,
    preventSigmaDefault: function preventSigmaDefault() {
      res.sigmaDefaultPrevented = true;
    },
    original: e
  });
  return res;
}

/**
 * Takes a touch coords or a mouse coords, and always returns a clean mouse coords object.
 */
function cleanMouseCoords(e) {
  var res = "x" in e ? e : index._objectSpread2(index._objectSpread2({}, e.touches[0] || e.previousTouches[0]), {}, {
    original: e.original,
    sigmaDefaultPrevented: e.sigmaDefaultPrevented,
    preventSigmaDefault: function preventSigmaDefault() {
      e.sigmaDefaultPrevented = true;
      res.sigmaDefaultPrevented = true;
    }
  });
  return res;
}

/**
 * Convert mouse wheel event coords to sigma coords.
 *
 * @param  {event}       e   - A wheel mouse event.
 * @param  {HTMLElement} dom - A DOM element to compute offset relatively to.
 * @return {object}
 */
function getWheelCoords(e, dom) {
  return index._objectSpread2(index._objectSpread2({}, getMouseCoords(e, dom)), {}, {
    delta: getWheelDelta(e)
  });
}
var MAX_TOUCHES = 2;
function getTouchesArray(touches) {
  var arr = [];
  for (var i = 0, l = Math.min(touches.length, MAX_TOUCHES); i < l; i++) arr.push(touches[i]);
  return arr;
}

/**
 * Convert touch coords to sigma coords.
 *
 * @param  {event}       e               - A touch event.
 * @param  {Touch[]}     previousTouches - An array of the previously stored touches.
 * @param  {HTMLElement} dom             - A DOM element to compute offset relatively to.
 * @return {object}
 */
function getTouchCoords(e, previousTouches, dom) {
  var res = {
    touches: getTouchesArray(e.touches).map(function (touch) {
      return getPosition(touch, dom);
    }),
    previousTouches: previousTouches.map(function (touch) {
      return getPosition(touch, dom);
    }),
    sigmaDefaultPrevented: false,
    preventSigmaDefault: function preventSigmaDefault() {
      res.sigmaDefaultPrevented = true;
    },
    original: e
  };
  return res;
}

/**
 * Extract the wheel delta from a mouse event or touch object.
 *
 * @param  {event}  e - A mouse event or touch object.
 * @return {number}     The wheel delta of the mouse.
 */
function getWheelDelta(e) {
  // TODO: check those ratios again to ensure a clean Chrome/Firefox compat
  if (typeof e.deltaY !== "undefined") return e.deltaY * -3 / 360;
  if (typeof e.detail !== "undefined") return e.detail / -9;
  throw new Error("Captor: could not extract delta from event.");
}

/**
 * Abstract class representing a captor like the user's mouse or touch controls.
 */
var Captor = /*#__PURE__*/function (_TypedEventEmitter) {
  inherits._inherits(Captor, _TypedEventEmitter);
  function Captor(container, renderer) {
    var _this;
    inherits._classCallCheck(this, Captor);
    _this = inherits._callSuper(this, Captor);
    // Properties
    _this.container = container;
    _this.renderer = renderer;
    return _this;
  }
  return inherits._createClass(Captor);
}(types_dist_sigmaTypes.TypedEventEmitter);

var MOUSE_SETTINGS_KEYS = ["doubleClickTimeout", "doubleClickZoomingDuration", "doubleClickZoomingRatio", "dragTimeout", "draggedEventsTolerance", "inertiaDuration", "inertiaRatio", "zoomDuration", "zoomingRatio"];
var DEFAULT_MOUSE_SETTINGS = MOUSE_SETTINGS_KEYS.reduce(function (iter, key) {
  return index._objectSpread2(index._objectSpread2({}, iter), {}, index._defineProperty({}, key, settings_dist_sigmaSettings.DEFAULT_SETTINGS[key]));
}, {});

/**
 * Event types.
 */
/**
 * Mouse captor class.
 *
 * @constructor
 */
var MouseCaptor = /*#__PURE__*/function (_Captor) {
  inherits._inherits(MouseCaptor, _Captor);
  function MouseCaptor(container, renderer) {
    var _this;
    inherits._classCallCheck(this, MouseCaptor);
    _this = inherits._callSuper(this, MouseCaptor, [container, renderer]);

    // Binding methods
    // State
    index._defineProperty(inherits._assertThisInitialized(_this), "enabled", true);
    index._defineProperty(inherits._assertThisInitialized(_this), "draggedEvents", 0);
    index._defineProperty(inherits._assertThisInitialized(_this), "downStartTime", null);
    index._defineProperty(inherits._assertThisInitialized(_this), "lastMouseX", null);
    index._defineProperty(inherits._assertThisInitialized(_this), "lastMouseY", null);
    index._defineProperty(inherits._assertThisInitialized(_this), "isMouseDown", false);
    index._defineProperty(inherits._assertThisInitialized(_this), "isMoving", false);
    index._defineProperty(inherits._assertThisInitialized(_this), "movingTimeout", null);
    index._defineProperty(inherits._assertThisInitialized(_this), "startCameraState", null);
    index._defineProperty(inherits._assertThisInitialized(_this), "clicks", 0);
    index._defineProperty(inherits._assertThisInitialized(_this), "doubleClickTimeout", null);
    index._defineProperty(inherits._assertThisInitialized(_this), "currentWheelDirection", 0);
    index._defineProperty(inherits._assertThisInitialized(_this), "settings", DEFAULT_MOUSE_SETTINGS);
    _this.handleClick = _this.handleClick.bind(inherits._assertThisInitialized(_this));
    _this.handleRightClick = _this.handleRightClick.bind(inherits._assertThisInitialized(_this));
    _this.handleDown = _this.handleDown.bind(inherits._assertThisInitialized(_this));
    _this.handleUp = _this.handleUp.bind(inherits._assertThisInitialized(_this));
    _this.handleMove = _this.handleMove.bind(inherits._assertThisInitialized(_this));
    _this.handleWheel = _this.handleWheel.bind(inherits._assertThisInitialized(_this));
    _this.handleLeave = _this.handleLeave.bind(inherits._assertThisInitialized(_this));
    _this.handleEnter = _this.handleEnter.bind(inherits._assertThisInitialized(_this));

    // Binding events
    container.addEventListener("click", _this.handleClick, {
      capture: false
    });
    container.addEventListener("contextmenu", _this.handleRightClick, {
      capture: false
    });
    container.addEventListener("mousedown", _this.handleDown, {
      capture: false
    });
    container.addEventListener("wheel", _this.handleWheel, {
      capture: false
    });
    container.addEventListener("mouseleave", _this.handleLeave, {
      capture: false
    });
    container.addEventListener("mouseenter", _this.handleEnter, {
      capture: false
    });
    document.addEventListener("mousemove", _this.handleMove, {
      capture: false
    });
    document.addEventListener("mouseup", _this.handleUp, {
      capture: false
    });
    return _this;
  }
  inherits._createClass(MouseCaptor, [{
    key: "kill",
    value: function kill() {
      var container = this.container;
      container.removeEventListener("click", this.handleClick);
      container.removeEventListener("contextmenu", this.handleRightClick);
      container.removeEventListener("mousedown", this.handleDown);
      container.removeEventListener("wheel", this.handleWheel);
      container.removeEventListener("mouseleave", this.handleLeave);
      container.removeEventListener("mouseenter", this.handleEnter);
      document.removeEventListener("mousemove", this.handleMove);
      document.removeEventListener("mouseup", this.handleUp);
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var _this2 = this;
      if (!this.enabled) return;
      this.clicks++;
      if (this.clicks === 2) {
        this.clicks = 0;
        if (typeof this.doubleClickTimeout === "number") {
          clearTimeout(this.doubleClickTimeout);
          this.doubleClickTimeout = null;
        }
        return this.handleDoubleClick(e);
      }
      setTimeout(function () {
        _this2.clicks = 0;
        _this2.doubleClickTimeout = null;
      }, this.settings.doubleClickTimeout);

      // NOTE: this is here to prevent click events on drag
      if (this.draggedEvents < this.settings.draggedEventsTolerance) this.emit("click", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleRightClick",
    value: function handleRightClick(e) {
      if (!this.enabled) return;
      this.emit("rightClick", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleDoubleClick",
    value: function handleDoubleClick(e) {
      if (!this.enabled) return;
      e.preventDefault();
      e.stopPropagation();
      var mouseCoords = getMouseCoords(e, this.container);
      this.emit("doubleClick", mouseCoords);
      if (mouseCoords.sigmaDefaultPrevented) return;

      // default behavior
      var camera = this.renderer.getCamera();
      var newRatio = camera.getBoundedRatio(camera.getState().ratio / this.settings.doubleClickZoomingRatio);
      camera.animate(this.renderer.getViewportZoomedState(getPosition(e, this.container), newRatio), {
        easing: "quadraticInOut",
        duration: this.settings.doubleClickZoomingDuration
      });
    }
  }, {
    key: "handleDown",
    value: function handleDown(e) {
      if (!this.enabled) return;

      // We only start dragging on left button
      if (e.button === 0) {
        this.startCameraState = this.renderer.getCamera().getState();
        var _getPosition = getPosition(e, this.container),
          x = _getPosition.x,
          y = _getPosition.y;
        this.lastMouseX = x;
        this.lastMouseY = y;
        this.draggedEvents = 0;
        this.downStartTime = Date.now();
        this.isMouseDown = true;
      }
      this.emit("mousedown", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleUp",
    value: function handleUp(e) {
      var _this3 = this;
      if (!this.enabled || !this.isMouseDown) return;
      var camera = this.renderer.getCamera();
      this.isMouseDown = false;
      if (typeof this.movingTimeout === "number") {
        clearTimeout(this.movingTimeout);
        this.movingTimeout = null;
      }
      var _getPosition2 = getPosition(e, this.container),
        x = _getPosition2.x,
        y = _getPosition2.y;
      var cameraState = camera.getState(),
        previousCameraState = camera.getPreviousState() || {
          x: 0,
          y: 0
        };
      if (this.isMoving) {
        camera.animate({
          x: cameraState.x + this.settings.inertiaRatio * (cameraState.x - previousCameraState.x),
          y: cameraState.y + this.settings.inertiaRatio * (cameraState.y - previousCameraState.y)
        }, {
          duration: this.settings.inertiaDuration,
          easing: "quadraticOut"
        });
      } else if (this.lastMouseX !== x || this.lastMouseY !== y) {
        camera.setState({
          x: cameraState.x,
          y: cameraState.y
        });
      }
      this.isMoving = false;
      setTimeout(function () {
        var shouldRefresh = _this3.draggedEvents > 0;
        _this3.draggedEvents = 0;

        // NOTE: this refresh is here to make sure `hideEdgesOnMove` can work
        // when someone releases camera pan drag after having stopped moving.
        // See commit: https://github.com/jacomyal/sigma.js/commit/cfd9197f70319109db6b675dd7c82be493ca95a2
        // See also issue: https://github.com/jacomyal/sigma.js/issues/1290
        // It could be possible to render instead of scheduling a refresh but for
        // now it seems good enough.
        if (shouldRefresh) _this3.renderer.refresh();
      }, 0);
      this.emit("mouseup", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleMove",
    value: function handleMove(e) {
      var _this4 = this;
      if (!this.enabled) return;
      var mouseCoords = getMouseCoords(e, this.container);

      // Always trigger a "mousemovebody" event, so that it is possible to develop
      // a drag-and-drop effect that works even when the mouse is out of the
      // container:
      this.emit("mousemovebody", mouseCoords);

      // Only trigger the "mousemove" event when the mouse is actually hovering
      // the container, to avoid weirdly hovering nodes and/or edges when the
      // mouse is not hover the container:
      if (e.target === this.container || e.composedPath()[0] === this.container) {
        this.emit("mousemove", mouseCoords);
      }
      if (mouseCoords.sigmaDefaultPrevented) return;

      // Handle the case when "isMouseDown" all the time, to allow dragging the
      // stage while the mouse is not hover the container:
      if (this.isMouseDown) {
        this.isMoving = true;
        this.draggedEvents++;
        if (typeof this.movingTimeout === "number") {
          clearTimeout(this.movingTimeout);
        }
        this.movingTimeout = window.setTimeout(function () {
          _this4.movingTimeout = null;
          _this4.isMoving = false;
        }, this.settings.dragTimeout);
        var camera = this.renderer.getCamera();
        var _getPosition3 = getPosition(e, this.container),
          eX = _getPosition3.x,
          eY = _getPosition3.y;
        var lastMouse = this.renderer.viewportToFramedGraph({
          x: this.lastMouseX,
          y: this.lastMouseY
        });
        var mouse = this.renderer.viewportToFramedGraph({
          x: eX,
          y: eY
        });
        var offsetX = lastMouse.x - mouse.x,
          offsetY = lastMouse.y - mouse.y;
        var cameraState = camera.getState();
        var x = cameraState.x + offsetX,
          y = cameraState.y + offsetY;
        camera.setState({
          x: x,
          y: y
        });
        this.lastMouseX = eX;
        this.lastMouseY = eY;
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }, {
    key: "handleLeave",
    value: function handleLeave(e) {
      this.emit("mouseleave", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleEnter",
    value: function handleEnter(e) {
      this.emit("mouseenter", getMouseCoords(e, this.container));
    }
  }, {
    key: "handleWheel",
    value: function handleWheel(e) {
      var _this5 = this;
      if (!this.enabled) return;
      e.preventDefault();
      e.stopPropagation();
      var delta = getWheelDelta(e);
      if (!delta) return;
      var wheelCoords = getWheelCoords(e, this.container);
      this.emit("wheel", wheelCoords);
      if (wheelCoords.sigmaDefaultPrevented) return;

      // Default behavior
      var ratioDiff = delta > 0 ? 1 / this.settings.zoomingRatio : this.settings.zoomingRatio;
      var camera = this.renderer.getCamera();
      var newRatio = camera.getBoundedRatio(camera.getState().ratio * ratioDiff);
      var wheelDirection = delta > 0 ? 1 : -1;
      var now = Date.now();

      // Cancel events that are too close too each other and in the same direction:
      if (this.currentWheelDirection === wheelDirection && this.lastWheelTriggerTime && now - this.lastWheelTriggerTime < this.settings.zoomDuration / 5) {
        return;
      }
      camera.animate(this.renderer.getViewportZoomedState(getPosition(e, this.container), newRatio), {
        easing: "quadraticOut",
        duration: this.settings.zoomDuration
      }, function () {
        _this5.currentWheelDirection = 0;
      });
      this.currentWheelDirection = wheelDirection;
      this.lastWheelTriggerTime = now;
    }
  }, {
    key: "setSettings",
    value: function setSettings(settings) {
      this.settings = settings;
    }
  }]);
  return MouseCaptor;
}(Captor);

var TOUCH_SETTINGS_KEYS = ["dragTimeout", "inertiaDuration", "inertiaRatio", "doubleClickTimeout", "doubleClickZoomingRatio", "doubleClickZoomingDuration", "tapMoveTolerance"];
var DEFAULT_TOUCH_SETTINGS = TOUCH_SETTINGS_KEYS.reduce(function (iter, key) {
  return index._objectSpread2(index._objectSpread2({}, iter), {}, index._defineProperty({}, key, settings_dist_sigmaSettings.DEFAULT_SETTINGS[key]));
}, {});

/**
 * Event types.
 */
/**
 * Touch captor class.
 *
 * @constructor
 */
var TouchCaptor = /*#__PURE__*/function (_Captor) {
  inherits._inherits(TouchCaptor, _Captor);
  function TouchCaptor(container, renderer) {
    var _this;
    inherits._classCallCheck(this, TouchCaptor);
    _this = inherits._callSuper(this, TouchCaptor, [container, renderer]);

    // Binding methods:
    index._defineProperty(inherits._assertThisInitialized(_this), "enabled", true);
    index._defineProperty(inherits._assertThisInitialized(_this), "isMoving", false);
    index._defineProperty(inherits._assertThisInitialized(_this), "hasMoved", false);
    index._defineProperty(inherits._assertThisInitialized(_this), "touchMode", 0);
    index._defineProperty(inherits._assertThisInitialized(_this), "startTouchesPositions", []);
    index._defineProperty(inherits._assertThisInitialized(_this), "lastTouches", []);
    index._defineProperty(inherits._assertThisInitialized(_this), "lastTap", null);
    index._defineProperty(inherits._assertThisInitialized(_this), "settings", DEFAULT_TOUCH_SETTINGS);
    _this.handleStart = _this.handleStart.bind(inherits._assertThisInitialized(_this));
    _this.handleLeave = _this.handleLeave.bind(inherits._assertThisInitialized(_this));
    _this.handleMove = _this.handleMove.bind(inherits._assertThisInitialized(_this));

    // Binding events
    container.addEventListener("touchstart", _this.handleStart, {
      capture: false
    });
    container.addEventListener("touchcancel", _this.handleLeave, {
      capture: false
    });
    document.addEventListener("touchend", _this.handleLeave, {
      capture: false,
      passive: false
    });
    document.addEventListener("touchmove", _this.handleMove, {
      capture: false,
      passive: false
    });
    return _this;
  }
  inherits._createClass(TouchCaptor, [{
    key: "kill",
    value: function kill() {
      var container = this.container;
      container.removeEventListener("touchstart", this.handleStart);
      container.removeEventListener("touchcancel", this.handleLeave);
      document.removeEventListener("touchend", this.handleLeave);
      document.removeEventListener("touchmove", this.handleMove);
    }
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      return {
        width: this.container.offsetWidth,
        height: this.container.offsetHeight
      };
    }
  }, {
    key: "handleStart",
    value: function handleStart(e) {
      var _this2 = this;
      if (!this.enabled) return;
      e.preventDefault();
      var touches = getTouchesArray(e.touches);
      this.touchMode = touches.length;
      this.startCameraState = this.renderer.getCamera().getState();
      this.startTouchesPositions = touches.map(function (touch) {
        return getPosition(touch, _this2.container);
      });

      // When there are two touches down, let's record distance and angle as well:
      if (this.touchMode === 2) {
        var _this$startTouchesPos = colors._slicedToArray(this.startTouchesPositions, 2),
          _this$startTouchesPos2 = _this$startTouchesPos[0],
          x0 = _this$startTouchesPos2.x,
          y0 = _this$startTouchesPos2.y,
          _this$startTouchesPos3 = _this$startTouchesPos[1],
          x1 = _this$startTouchesPos3.x,
          y1 = _this$startTouchesPos3.y;
        this.startTouchesAngle = Math.atan2(y1 - y0, x1 - x0);
        this.startTouchesDistance = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
      }
      this.emit("touchdown", getTouchCoords(e, this.lastTouches, this.container));
      this.lastTouches = touches;
      this.lastTouchesPositions = this.startTouchesPositions;
    }
  }, {
    key: "handleLeave",
    value: function handleLeave(e) {
      if (!this.enabled || !this.startTouchesPositions.length) return;
      if (e.cancelable) e.preventDefault();
      if (this.movingTimeout) {
        this.isMoving = false;
        clearTimeout(this.movingTimeout);
      }
      switch (this.touchMode) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        case 2:
          if (e.touches.length === 1) {
            this.handleStart(e);
            e.preventDefault();
            break;
          }
        /* falls through */
        case 1:
          if (this.isMoving) {
            var camera = this.renderer.getCamera();
            var cameraState = camera.getState(),
              previousCameraState = camera.getPreviousState() || {
                x: 0,
                y: 0
              };
            camera.animate({
              x: cameraState.x + this.settings.inertiaRatio * (cameraState.x - previousCameraState.x),
              y: cameraState.y + this.settings.inertiaRatio * (cameraState.y - previousCameraState.y)
            }, {
              duration: this.settings.inertiaDuration,
              easing: "quadraticOut"
            });
          }
          this.hasMoved = false;
          this.isMoving = false;
          this.touchMode = 0;
          break;
      }
      this.emit("touchup", getTouchCoords(e, this.lastTouches, this.container));

      // When the last touch ends and there hasn't been too much movement, trigger a "tap" or "doubletap" event:
      if (!e.touches.length) {
        var position = getPosition(this.lastTouches[0], this.container);
        var downPosition = this.startTouchesPositions[0];
        var dSquare = Math.pow(position.x - downPosition.x, 2) + Math.pow(position.y - downPosition.y, 2);
        if (!e.touches.length && dSquare < Math.pow(this.settings.tapMoveTolerance, 2)) {
          // Only trigger "doubletap" when the last tap is recent enough:
          if (this.lastTap && Date.now() - this.lastTap.time < this.settings.doubleClickTimeout) {
            var touchCoords = getTouchCoords(e, this.lastTouches, this.container);
            this.emit("doubletap", touchCoords);
            this.lastTap = null;
            if (!touchCoords.sigmaDefaultPrevented) {
              var _camera = this.renderer.getCamera();
              var newRatio = _camera.getBoundedRatio(_camera.getState().ratio / this.settings.doubleClickZoomingRatio);
              _camera.animate(this.renderer.getViewportZoomedState(position, newRatio), {
                easing: "quadraticInOut",
                duration: this.settings.doubleClickZoomingDuration
              });
            }
          }
          // Else, trigger a normal "tap" event:
          else {
            var _touchCoords = getTouchCoords(e, this.lastTouches, this.container);
            this.emit("tap", _touchCoords);
            this.lastTap = {
              time: Date.now(),
              position: _touchCoords.touches[0] || _touchCoords.previousTouches[0]
            };
          }
        }
      }
      this.lastTouches = getTouchesArray(e.touches);
      this.startTouchesPositions = [];
    }
  }, {
    key: "handleMove",
    value: function handleMove(e) {
      var _this3 = this;
      if (!this.enabled || !this.startTouchesPositions.length) return;
      e.preventDefault();
      var touches = getTouchesArray(e.touches);
      var touchesPositions = touches.map(function (touch) {
        return getPosition(touch, _this3.container);
      });
      var lastTouches = this.lastTouches;
      this.lastTouches = touches;
      this.lastTouchesPositions = touchesPositions;
      var touchCoords = getTouchCoords(e, lastTouches, this.container);
      this.emit("touchmove", touchCoords);
      if (touchCoords.sigmaDefaultPrevented) return;

      // If a move was initiated at some point, and we get back to start point,
      // we should still consider that we did move (which also happens after a
      // multiple touch when only one touch remains in which case handleStart
      // is recalled within handleLeave).
      // Now, some mobile browsers report zero-distance moves so we also check that
      // one of the touches did actually move from the origin position.
      this.hasMoved || (this.hasMoved = touchesPositions.some(function (position, idx) {
        var startPosition = _this3.startTouchesPositions[idx];
        return startPosition && (position.x !== startPosition.x || position.y !== startPosition.y);
      }));

      // If there was no move, do not trigger touch moves behavior
      if (!this.hasMoved) {
        return;
      }
      this.isMoving = true;
      if (this.movingTimeout) clearTimeout(this.movingTimeout);
      this.movingTimeout = window.setTimeout(function () {
        _this3.isMoving = false;
      }, this.settings.dragTimeout);
      var camera = this.renderer.getCamera();
      var startCameraState = this.startCameraState;
      var padding = this.renderer.getSetting("stagePadding");
      switch (this.touchMode) {
        case 1:
          {
            var _this$renderer$viewpo = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0]),
              xStart = _this$renderer$viewpo.x,
              yStart = _this$renderer$viewpo.y;
            var _this$renderer$viewpo2 = this.renderer.viewportToFramedGraph(touchesPositions[0]),
              x = _this$renderer$viewpo2.x,
              y = _this$renderer$viewpo2.y;
            camera.setState({
              x: startCameraState.x + xStart - x,
              y: startCameraState.y + yStart - y
            });
            break;
          }
        case 2:
          {
            /**
             * Here is the thinking here:
             *
             * 1. We can find the new angle and ratio, by comparing the vector from "touch one" to "touch two" at the start
             *    of the d'n'd and now
             *
             * 2. We can use `Camera#viewportToGraph` inside formula to retrieve the new camera position, using the graph
             *    position of a touch at the beginning of the d'n'd (using `startCamera.viewportToGraph`) and the viewport
             *    position of this same touch now
             */
            var newCameraState = {
              x: 0.5,
              y: 0.5,
              angle: 0,
              ratio: 1
            };
            var _touchesPositions$ = touchesPositions[0],
              x0 = _touchesPositions$.x,
              y0 = _touchesPositions$.y;
            var _touchesPositions$2 = touchesPositions[1],
              x1 = _touchesPositions$2.x,
              y1 = _touchesPositions$2.y;
            var angleDiff = Math.atan2(y1 - y0, x1 - x0) - this.startTouchesAngle;
            var ratioDiff = Math.hypot(y1 - y0, x1 - x0) / this.startTouchesDistance;

            // 1.
            var newRatio = camera.getBoundedRatio(startCameraState.ratio / ratioDiff);
            newCameraState.ratio = newRatio;
            newCameraState.angle = startCameraState.angle + angleDiff;

            // 2.
            var dimensions = this.getDimensions();
            var touchGraphPosition = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0], {
              cameraState: startCameraState
            });
            var smallestDimension = Math.min(dimensions.width, dimensions.height) - 2 * padding;
            var dx = smallestDimension / dimensions.width;
            var dy = smallestDimension / dimensions.height;
            var ratio = newRatio / smallestDimension;

            // Align with center of the graph:
            var _x = x0 - smallestDimension / 2 / dx;
            var _y = y0 - smallestDimension / 2 / dy;

            // Rotate:
            var _ref = [_x * Math.cos(-newCameraState.angle) - _y * Math.sin(-newCameraState.angle), _y * Math.cos(-newCameraState.angle) + _x * Math.sin(-newCameraState.angle)];
            _x = _ref[0];
            _y = _ref[1];
            newCameraState.x = touchGraphPosition.x - _x * ratio;
            newCameraState.y = touchGraphPosition.y + _y * ratio;
            camera.setState(newCameraState);
            break;
          }
      }
    }
  }, {
    key: "setSettings",
    value: function setSettings(settings) {
      this.settings = settings;
    }
  }]);
  return TouchCaptor;
}(Captor);

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return colors._arrayLikeToArray(r);
}

function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || colors._unsupportedIterableToArray(r) || _nonIterableSpread();
}

function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}

function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}

/**
 * Sigma.js Labels Heuristics
 * ===========================
 *
 * Miscellaneous heuristics related to label display.
 * @module
 */
/**
 * Class representing a single candidate for the label grid selection.
 *
 * It also describes a deterministic way to compare two candidates to assess
 * which one is better.
 */
var LabelCandidate = /*#__PURE__*/function () {
  function LabelCandidate(key, size) {
    inherits._classCallCheck(this, LabelCandidate);
    this.key = key;
    this.size = size;
  }
  inherits._createClass(LabelCandidate, null, [{
    key: "compare",
    value: function compare(first, second) {
      // First we compare by size
      if (first.size > second.size) return -1;
      if (first.size < second.size) return 1;

      // Then since no two nodes can have the same key, we use it to
      // deterministically tie-break by key
      if (first.key > second.key) return 1;

      // NOTE: this comparator cannot return 0
      return -1;
    }
  }]);
  return LabelCandidate;
}();
/**
 * Class representing a 2D spatial grid divided into constant-size cells.
 */
var LabelGrid = /*#__PURE__*/function () {
  function LabelGrid() {
    inherits._classCallCheck(this, LabelGrid);
    index._defineProperty(this, "width", 0);
    index._defineProperty(this, "height", 0);
    index._defineProperty(this, "cellSize", 0);
    index._defineProperty(this, "columns", 0);
    index._defineProperty(this, "rows", 0);
    index._defineProperty(this, "cells", {});
  }
  inherits._createClass(LabelGrid, [{
    key: "resizeAndClear",
    value: function resizeAndClear(dimensions, cellSize) {
      this.width = dimensions.width;
      this.height = dimensions.height;
      this.cellSize = cellSize;
      this.columns = Math.ceil(dimensions.width / cellSize);
      this.rows = Math.ceil(dimensions.height / cellSize);
      this.cells = {};
    }
  }, {
    key: "getIndex",
    value: function getIndex(pos) {
      var xIndex = Math.floor(pos.x / this.cellSize);
      var yIndex = Math.floor(pos.y / this.cellSize);
      return yIndex * this.columns + xIndex;
    }
  }, {
    key: "add",
    value: function add(key, size, pos) {
      var candidate = new LabelCandidate(key, size);
      var index = this.getIndex(pos);
      var cell = this.cells[index];
      if (!cell) {
        cell = [];
        this.cells[index] = cell;
      }
      cell.push(candidate);
    }
  }, {
    key: "organize",
    value: function organize() {
      for (var k in this.cells) {
        var cell = this.cells[k];
        cell.sort(LabelCandidate.compare);
      }
    }
  }, {
    key: "getLabelsToDisplay",
    value: function getLabelsToDisplay(ratio, density) {
      // TODO: work on visible nodes to optimize? ^ -> threshold outside so that memoization works?
      // TODO: adjust threshold lower, but increase cells a bit?
      // TODO: hunt for geom issue in disguise
      // TODO: memoize while ratio does not move. method to force recompute
      var cellArea = this.cellSize * this.cellSize;
      var scaledCellArea = cellArea / ratio / ratio;
      var scaledDensity = scaledCellArea * density / cellArea;
      var labelsToDisplayPerCell = Math.ceil(scaledDensity);
      var labels = [];
      for (var k in this.cells) {
        var cell = this.cells[k];
        for (var i = 0; i < Math.min(labelsToDisplayPerCell, cell.length); i++) {
          labels.push(cell[i].key);
        }
      }
      return labels;
    }
  }]);
  return LabelGrid;
}();

/**
 * Label heuristic selecting edge labels to display, based on displayed node
 * labels
 *
 * @param  {object} params                 - Parameters:
 * @param  {Set}      displayedNodeLabels  - Currently displayed node labels.
 * @param  {Set}      highlightedNodes     - Highlighted nodes.
 * @param  {Graph}    graph                - The rendered graph.
 * @param  {string}   hoveredNode          - Hovered node (optional)
 * @return {Array}                         - The selected labels.
 */
function edgeLabelsToDisplayFromNodes(params) {
  var graph = params.graph,
    hoveredNode = params.hoveredNode,
    highlightedNodes = params.highlightedNodes,
    displayedNodeLabels = params.displayedNodeLabels;
  var worthyEdges = [];

  // TODO: the code below can be optimized using #.forEach and batching the code per adj

  // We should display an edge's label if:
  //   - Any of its extremities is highlighted or hovered
  //   - Both of its extremities has its label shown
  graph.forEachEdge(function (edge, _, source, target) {
    if (source === hoveredNode || target === hoveredNode || highlightedNodes.has(source) || highlightedNodes.has(target) || displayedNodeLabels.has(source) && displayedNodeLabels.has(target)) {
      worthyEdges.push(edge);
    }
  });
  return worthyEdges;
}

/**
 * Constants.
 */
var X_LABEL_MARGIN = 150;
var Y_LABEL_MARGIN = 50;
var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Important functions.
 */
function applyNodeDefaults(settings, key, data) {
  if (!hasOwnProperty.call(data, "x") || !hasOwnProperty.call(data, "y")) throw new Error("Sigma: could not find a valid position (x, y) for node \"".concat(key, "\". All your nodes must have a number \"x\" and \"y\". Maybe your forgot to apply a layout or your \"nodeReducer\" is not returning the correct data?"));
  if (!data.color) data.color = settings.defaultNodeColor;
  if (!data.label && data.label !== "") data.label = null;
  if (data.label !== undefined && data.label !== null) data.label = "" + data.label;else data.label = null;
  if (!data.size) data.size = 2;
  if (!hasOwnProperty.call(data, "hidden")) data.hidden = false;
  if (!hasOwnProperty.call(data, "highlighted")) data.highlighted = false;
  if (!hasOwnProperty.call(data, "forceLabel")) data.forceLabel = false;
  if (!data.type || data.type === "") data.type = settings.defaultNodeType;
  if (!data.zIndex) data.zIndex = 0;
  return data;
}
function applyEdgeDefaults(settings, _key, data) {
  if (!data.color) data.color = settings.defaultEdgeColor;
  if (!data.label) data.label = "";
  if (!data.size) data.size = 0.5;
  if (!hasOwnProperty.call(data, "hidden")) data.hidden = false;
  if (!hasOwnProperty.call(data, "forceLabel")) data.forceLabel = false;
  if (!data.type || data.type === "") data.type = settings.defaultEdgeType;
  if (!data.zIndex) data.zIndex = 0;
  return data;
}

/**
 * Main class.
 *
 * @constructor
 * @param {Graph}       graph     - Graph to render.
 * @param {HTMLElement} container - DOM container in which to render.
 * @param {object}      settings  - Optional settings.
 */
var Sigma$1 = /*#__PURE__*/function (_TypedEventEmitter) {
  inherits._inherits(Sigma, _TypedEventEmitter);
  function Sigma(graph, container) {
    var _this;
    var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    inherits._classCallCheck(this, Sigma);
    _this = inherits._callSuper(this, Sigma);

    // Resolving settings
    index._defineProperty(inherits._assertThisInitialized(_this), "elements", {});
    index._defineProperty(inherits._assertThisInitialized(_this), "canvasContexts", {});
    index._defineProperty(inherits._assertThisInitialized(_this), "webGLContexts", {});
    index._defineProperty(inherits._assertThisInitialized(_this), "pickingLayers", new Set());
    index._defineProperty(inherits._assertThisInitialized(_this), "textures", {});
    index._defineProperty(inherits._assertThisInitialized(_this), "frameBuffers", {});
    index._defineProperty(inherits._assertThisInitialized(_this), "activeListeners", {});
    index._defineProperty(inherits._assertThisInitialized(_this), "labelGrid", new LabelGrid());
    index._defineProperty(inherits._assertThisInitialized(_this), "nodeDataCache", {});
    index._defineProperty(inherits._assertThisInitialized(_this), "edgeDataCache", {});
    // Indices to keep track of the index of the item inside programs
    index._defineProperty(inherits._assertThisInitialized(_this), "nodeProgramIndex", {});
    index._defineProperty(inherits._assertThisInitialized(_this), "edgeProgramIndex", {});
    index._defineProperty(inherits._assertThisInitialized(_this), "nodesWithForcedLabels", new Set());
    index._defineProperty(inherits._assertThisInitialized(_this), "edgesWithForcedLabels", new Set());
    index._defineProperty(inherits._assertThisInitialized(_this), "nodeExtent", {
      x: [0, 1],
      y: [0, 1]
    });
    index._defineProperty(inherits._assertThisInitialized(_this), "nodeZExtent", [Infinity, -Infinity]);
    index._defineProperty(inherits._assertThisInitialized(_this), "edgeZExtent", [Infinity, -Infinity]);
    index._defineProperty(inherits._assertThisInitialized(_this), "matrix", normalization.identity());
    index._defineProperty(inherits._assertThisInitialized(_this), "invMatrix", normalization.identity());
    index._defineProperty(inherits._assertThisInitialized(_this), "correctionRatio", 1);
    index._defineProperty(inherits._assertThisInitialized(_this), "customBBox", null);
    index._defineProperty(inherits._assertThisInitialized(_this), "normalizationFunction", normalization.createNormalizationFunction({
      x: [0, 1],
      y: [0, 1]
    }));
    // Cache:
    index._defineProperty(inherits._assertThisInitialized(_this), "graphToViewportRatio", 1);
    index._defineProperty(inherits._assertThisInitialized(_this), "itemIDsIndex", {});
    index._defineProperty(inherits._assertThisInitialized(_this), "nodeIndices", {});
    index._defineProperty(inherits._assertThisInitialized(_this), "edgeIndices", {});
    // Starting dimensions and pixel ratio
    index._defineProperty(inherits._assertThisInitialized(_this), "width", 0);
    index._defineProperty(inherits._assertThisInitialized(_this), "height", 0);
    index._defineProperty(inherits._assertThisInitialized(_this), "pixelRatio", normalization.getPixelRatio());
    index._defineProperty(inherits._assertThisInitialized(_this), "pickingDownSizingRatio", 2 * _this.pixelRatio);
    // Graph State
    index._defineProperty(inherits._assertThisInitialized(_this), "displayedNodeLabels", new Set());
    index._defineProperty(inherits._assertThisInitialized(_this), "displayedEdgeLabels", new Set());
    index._defineProperty(inherits._assertThisInitialized(_this), "highlightedNodes", new Set());
    index._defineProperty(inherits._assertThisInitialized(_this), "hoveredNode", null);
    index._defineProperty(inherits._assertThisInitialized(_this), "hoveredEdge", null);
    // Internal states
    index._defineProperty(inherits._assertThisInitialized(_this), "renderFrame", null);
    index._defineProperty(inherits._assertThisInitialized(_this), "renderHighlightedNodesFrame", null);
    index._defineProperty(inherits._assertThisInitialized(_this), "needToProcess", false);
    index._defineProperty(inherits._assertThisInitialized(_this), "checkEdgesEventsFrame", null);
    // Programs
    index._defineProperty(inherits._assertThisInitialized(_this), "nodePrograms", {});
    index._defineProperty(inherits._assertThisInitialized(_this), "nodeHoverPrograms", {});
    index._defineProperty(inherits._assertThisInitialized(_this), "edgePrograms", {});
    _this.settings = settings_dist_sigmaSettings.resolveSettings(settings);

    // Validating
    settings_dist_sigmaSettings.validateSettings(_this.settings);
    normalization.validateGraph(graph);
    if (!(container instanceof HTMLElement)) throw new Error("Sigma: container should be an html element.");

    // Properties
    _this.graph = graph;
    _this.container = container;

    // Initializing contexts
    _this.createWebGLContext("edges", {
      picking: settings.enableEdgeEvents
    });
    _this.createCanvasContext("edgeLabels");
    _this.createWebGLContext("nodes", {
      picking: true
    });
    _this.createCanvasContext("labels");
    _this.createCanvasContext("hovers");
    _this.createWebGLContext("hoverNodes");
    _this.createCanvasContext("mouse", {
      style: {
        touchAction: "none",
        userSelect: "none"
      }
    });

    // Initial resize
    _this.resize();

    // Loading programs
    for (var type in _this.settings.nodeProgramClasses) {
      _this.registerNodeProgram(type, _this.settings.nodeProgramClasses[type], _this.settings.nodeHoverProgramClasses[type]);
    }
    for (var _type in _this.settings.edgeProgramClasses) {
      _this.registerEdgeProgram(_type, _this.settings.edgeProgramClasses[_type]);
    }

    // Initializing the camera
    _this.camera = new Camera();

    // Binding camera events
    _this.bindCameraHandlers();

    // Initializing captors
    _this.mouseCaptor = new MouseCaptor(_this.elements.mouse, inherits._assertThisInitialized(_this));
    _this.mouseCaptor.setSettings(_this.settings);
    _this.touchCaptor = new TouchCaptor(_this.elements.mouse, inherits._assertThisInitialized(_this));
    _this.touchCaptor.setSettings(_this.settings);

    // Binding event handlers
    _this.bindEventHandlers();

    // Binding graph handlers
    _this.bindGraphHandlers();

    // Trigger eventual settings-related things
    _this.handleSettingsUpdate();

    // Processing data for the first time & render
    _this.refresh();
    return _this;
  }

  /**---------------------------------------------------------------------------
   * Internal methods.
   **---------------------------------------------------------------------------
   */

  /**
   * Internal function used to register a node program
   *
   * @param  {string}           key              - The program's key, matching the related nodes "type" values.
   * @param  {NodeProgramType}  NodeProgramClass - A nodes program class.
   * @param  {NodeProgramType?} NodeHoverProgram - A nodes program class to render hovered nodes (optional).
   * @return {Sigma}
   */
  inherits._createClass(Sigma, [{
    key: "registerNodeProgram",
    value: function registerNodeProgram(key, NodeProgramClass, NodeHoverProgram) {
      if (this.nodePrograms[key]) this.nodePrograms[key].kill();
      if (this.nodeHoverPrograms[key]) this.nodeHoverPrograms[key].kill();
      this.nodePrograms[key] = new NodeProgramClass(this.webGLContexts.nodes, this.frameBuffers.nodes, this);
      this.nodeHoverPrograms[key] = new (NodeHoverProgram || NodeProgramClass)(this.webGLContexts.hoverNodes, null, this);
      return this;
    }

    /**
     * Internal function used to register an edge program
     *
     * @param  {string}          key              - The program's key, matching the related edges "type" values.
     * @param  {EdgeProgramType} EdgeProgramClass - An edges program class.
     * @return {Sigma}
     */
  }, {
    key: "registerEdgeProgram",
    value: function registerEdgeProgram(key, EdgeProgramClass) {
      if (this.edgePrograms[key]) this.edgePrograms[key].kill();
      this.edgePrograms[key] = new EdgeProgramClass(this.webGLContexts.edges, this.frameBuffers.edges, this);
      return this;
    }

    /**
     * Internal function used to unregister a node program
     *
     * @param  {string} key - The program's key, matching the related nodes "type" values.
     * @return {Sigma}
     */
  }, {
    key: "unregisterNodeProgram",
    value: function unregisterNodeProgram(key) {
      if (this.nodePrograms[key]) {
        var _this$nodePrograms = this.nodePrograms,
          program = _this$nodePrograms[key],
          programs = _objectWithoutProperties(_this$nodePrograms, [key].map(inherits._toPropertyKey));
        program.kill();
        this.nodePrograms = programs;
      }
      if (this.nodeHoverPrograms[key]) {
        var _this$nodeHoverProgra = this.nodeHoverPrograms,
          _program = _this$nodeHoverProgra[key],
          _programs = _objectWithoutProperties(_this$nodeHoverProgra, [key].map(inherits._toPropertyKey));
        _program.kill();
        this.nodePrograms = _programs;
      }
      return this;
    }

    /**
     * Internal function used to unregister an edge program
     *
     * @param  {string} key - The program's key, matching the related edges "type" values.
     * @return {Sigma}
     */
  }, {
    key: "unregisterEdgeProgram",
    value: function unregisterEdgeProgram(key) {
      if (this.edgePrograms[key]) {
        var _this$edgePrograms = this.edgePrograms,
          program = _this$edgePrograms[key],
          programs = _objectWithoutProperties(_this$edgePrograms, [key].map(inherits._toPropertyKey));
        program.kill();
        this.edgePrograms = programs;
      }
      return this;
    }

    /**
     * Method (re)binding WebGL texture (for picking).
     *
     * @return {Sigma}
     */
  }, {
    key: "resetWebGLTexture",
    value: function resetWebGLTexture(id) {
      var gl = this.webGLContexts[id];
      var frameBuffer = this.frameBuffers[id];
      var currentTexture = this.textures[id];
      if (currentTexture) gl.deleteTexture(currentTexture);
      var pickingTexture = gl.createTexture();
      gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
      gl.bindTexture(gl.TEXTURE_2D, pickingTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pickingTexture, 0);
      this.textures[id] = pickingTexture;
      return this;
    }

    /**
     * Method binding camera handlers.
     *
     * @return {Sigma}
     */
  }, {
    key: "bindCameraHandlers",
    value: function bindCameraHandlers() {
      var _this2 = this;
      this.activeListeners.camera = function () {
        _this2.scheduleRender();
      };
      this.camera.on("updated", this.activeListeners.camera);
      return this;
    }

    /**
     * Method unbinding camera handlers.
     *
     * @return {Sigma}
     */
  }, {
    key: "unbindCameraHandlers",
    value: function unbindCameraHandlers() {
      this.camera.removeListener("updated", this.activeListeners.camera);
      return this;
    }

    /**
     * Method that returns the closest node to a given position.
     */
  }, {
    key: "getNodeAtPosition",
    value: function getNodeAtPosition(position) {
      var x = position.x,
        y = position.y;
      var color = colors.getPixelColor(this.webGLContexts.nodes, this.frameBuffers.nodes, x, y, this.pixelRatio, this.pickingDownSizingRatio);
      var index = colors.colorToIndex.apply(void 0, _toConsumableArray(color));
      var itemAt = this.itemIDsIndex[index];
      return itemAt && itemAt.type === "node" ? itemAt.id : null;
    }

    /**
     * Method binding event handlers.
     *
     * @return {Sigma}
     */
  }, {
    key: "bindEventHandlers",
    value: function bindEventHandlers() {
      var _this3 = this;
      // Handling window resize
      this.activeListeners.handleResize = function () {
        // need to call a refresh to rebuild the labelgrid
        _this3.scheduleRefresh();
      };
      window.addEventListener("resize", this.activeListeners.handleResize);

      // Handling mouse move
      this.activeListeners.handleMove = function (e) {
        var event = cleanMouseCoords(e);
        var baseEvent = {
          event: event,
          preventSigmaDefault: function preventSigmaDefault() {
            event.preventSigmaDefault();
          }
        };
        var nodeToHover = _this3.getNodeAtPosition(event);
        if (nodeToHover && _this3.hoveredNode !== nodeToHover && !_this3.nodeDataCache[nodeToHover].hidden) {
          // Handling passing from one node to the other directly
          if (_this3.hoveredNode) _this3.emit("leaveNode", index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
            node: _this3.hoveredNode
          }));
          _this3.hoveredNode = nodeToHover;
          _this3.emit("enterNode", index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
            node: nodeToHover
          }));
          _this3.scheduleHighlightedNodesRender();
          return;
        }

        // Checking if the hovered node is still hovered
        if (_this3.hoveredNode) {
          if (_this3.getNodeAtPosition(event) !== _this3.hoveredNode) {
            var node = _this3.hoveredNode;
            _this3.hoveredNode = null;
            _this3.emit("leaveNode", index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
              node: node
            }));
            _this3.scheduleHighlightedNodesRender();
            return;
          }
        }
        if (_this3.settings.enableEdgeEvents) {
          var edgeToHover = _this3.hoveredNode ? null : _this3.getEdgeAtPoint(baseEvent.event.x, baseEvent.event.y);
          if (edgeToHover !== _this3.hoveredEdge) {
            if (_this3.hoveredEdge) _this3.emit("leaveEdge", index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
              edge: _this3.hoveredEdge
            }));
            if (edgeToHover) _this3.emit("enterEdge", index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
              edge: edgeToHover
            }));
            _this3.hoveredEdge = edgeToHover;
          }
        }
      };

      // Handling mouse move over body (only to dispatch the proper event):
      this.activeListeners.handleMoveBody = function (e) {
        var event = cleanMouseCoords(e);
        _this3.emit("moveBody", {
          event: event,
          preventSigmaDefault: function preventSigmaDefault() {
            event.preventSigmaDefault();
          }
        });
      };

      // Handling mouse leave stage:
      this.activeListeners.handleLeave = function (e) {
        var event = cleanMouseCoords(e);
        var baseEvent = {
          event: event,
          preventSigmaDefault: function preventSigmaDefault() {
            event.preventSigmaDefault();
          }
        };
        if (_this3.hoveredNode) {
          _this3.emit("leaveNode", index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
            node: _this3.hoveredNode
          }));
          _this3.scheduleHighlightedNodesRender();
        }
        if (_this3.settings.enableEdgeEvents && _this3.hoveredEdge) {
          _this3.emit("leaveEdge", index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
            edge: _this3.hoveredEdge
          }));
          _this3.scheduleHighlightedNodesRender();
        }
        _this3.emit("leaveStage", index._objectSpread2({}, baseEvent));
      };

      // Handling mouse enter stage:
      this.activeListeners.handleEnter = function (e) {
        var event = cleanMouseCoords(e);
        var baseEvent = {
          event: event,
          preventSigmaDefault: function preventSigmaDefault() {
            event.preventSigmaDefault();
          }
        };
        _this3.emit("enterStage", index._objectSpread2({}, baseEvent));
      };

      // Handling click
      var createInteractionListener = function createInteractionListener(eventType) {
        return function (e) {
          var event = cleanMouseCoords(e);
          var baseEvent = {
            event: event,
            preventSigmaDefault: function preventSigmaDefault() {
              event.preventSigmaDefault();
            }
          };
          var nodeAtPosition = _this3.getNodeAtPosition(event);
          if (nodeAtPosition) return _this3.emit("".concat(eventType, "Node"), index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
            node: nodeAtPosition
          }));
          if (_this3.settings.enableEdgeEvents) {
            var edge = _this3.getEdgeAtPoint(event.x, event.y);
            if (edge) return _this3.emit("".concat(eventType, "Edge"), index._objectSpread2(index._objectSpread2({}, baseEvent), {}, {
              edge: edge
            }));
          }
          return _this3.emit("".concat(eventType, "Stage"), baseEvent);
        };
      };
      this.activeListeners.handleClick = createInteractionListener("click");
      this.activeListeners.handleRightClick = createInteractionListener("rightClick");
      this.activeListeners.handleDoubleClick = createInteractionListener("doubleClick");
      this.activeListeners.handleWheel = createInteractionListener("wheel");
      this.activeListeners.handleDown = createInteractionListener("down");
      this.activeListeners.handleUp = createInteractionListener("up");
      this.mouseCaptor.on("mousemove", this.activeListeners.handleMove);
      this.mouseCaptor.on("mousemovebody", this.activeListeners.handleMoveBody);
      this.mouseCaptor.on("click", this.activeListeners.handleClick);
      this.mouseCaptor.on("rightClick", this.activeListeners.handleRightClick);
      this.mouseCaptor.on("doubleClick", this.activeListeners.handleDoubleClick);
      this.mouseCaptor.on("wheel", this.activeListeners.handleWheel);
      this.mouseCaptor.on("mousedown", this.activeListeners.handleDown);
      this.mouseCaptor.on("mouseup", this.activeListeners.handleUp);
      this.mouseCaptor.on("mouseleave", this.activeListeners.handleLeave);
      this.mouseCaptor.on("mouseenter", this.activeListeners.handleEnter);
      this.touchCaptor.on("touchdown", this.activeListeners.handleDown);
      this.touchCaptor.on("touchdown", this.activeListeners.handleMove);
      this.touchCaptor.on("touchup", this.activeListeners.handleUp);
      this.touchCaptor.on("touchmove", this.activeListeners.handleMove);
      this.touchCaptor.on("tap", this.activeListeners.handleClick);
      this.touchCaptor.on("doubletap", this.activeListeners.handleDoubleClick);
      this.touchCaptor.on("touchmove", this.activeListeners.handleMoveBody);
      return this;
    }

    /**
     * Method binding graph handlers
     *
     * @return {Sigma}
     */
  }, {
    key: "bindGraphHandlers",
    value: function bindGraphHandlers() {
      var _this4 = this;
      var graph = this.graph;
      var LAYOUT_IMPACTING_FIELDS = new Set(["x", "y", "zIndex", "type"]);
      this.activeListeners.eachNodeAttributesUpdatedGraphUpdate = function (e) {
        var _e$hints;
        var updatedFields = (_e$hints = e.hints) === null || _e$hints === void 0 ? void 0 : _e$hints.attributes;
        // we process all nodes
        _this4.graph.forEachNode(function (node) {
          return _this4.updateNode(node);
        });

        // if coord, type or zIndex have changed, we need to schedule a render
        // (zIndex for the programIndex)
        var layoutChanged = !updatedFields || updatedFields.some(function (f) {
          return LAYOUT_IMPACTING_FIELDS.has(f);
        });
        _this4.refresh({
          partialGraph: {
            nodes: graph.nodes()
          },
          skipIndexation: !layoutChanged,
          schedule: true
        });
      };
      this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate = function (e) {
        var _e$hints2;
        var updatedFields = (_e$hints2 = e.hints) === null || _e$hints2 === void 0 ? void 0 : _e$hints2.attributes;
        // we process all edges
        _this4.graph.forEachEdge(function (edge) {
          return _this4.updateEdge(edge);
        });
        var layoutChanged = updatedFields && ["zIndex", "type"].some(function (f) {
          return updatedFields === null || updatedFields === void 0 ? void 0 : updatedFields.includes(f);
        });
        _this4.refresh({
          partialGraph: {
            edges: graph.edges()
          },
          skipIndexation: !layoutChanged,
          schedule: true
        });
      };

      // On add node, we add the node in indices and then call for a render
      this.activeListeners.addNodeGraphUpdate = function (payload) {
        var node = payload.key;
        // we process the node
        _this4.addNode(node);
        // schedule a render for the node
        _this4.refresh({
          partialGraph: {
            nodes: [node]
          },
          skipIndexation: false,
          schedule: true
        });
      };

      // On update node, we update indices and then call for a render
      this.activeListeners.updateNodeGraphUpdate = function (payload) {
        var node = payload.key;
        // schedule a render for the node
        _this4.refresh({
          partialGraph: {
            nodes: [node]
          },
          skipIndexation: false,
          schedule: true
        });
      };

      // On drop node, we remove the node from indices and then call for a refresh
      this.activeListeners.dropNodeGraphUpdate = function (payload) {
        var node = payload.key;
        // we process the node
        _this4.removeNode(node);
        // schedule a render for everything
        _this4.refresh({
          schedule: true
        });
      };

      // On add edge, we remove the edge from indices and then call for a refresh
      this.activeListeners.addEdgeGraphUpdate = function (payload) {
        var edge = payload.key;
        // we process the edge
        _this4.addEdge(edge);
        // schedule a render for the edge
        _this4.refresh({
          partialGraph: {
            edges: [edge]
          },
          schedule: true
        });
      };

      // On update edge, we update indices and then call for a refresh
      this.activeListeners.updateEdgeGraphUpdate = function (payload) {
        var edge = payload.key;
        // schedule a repaint for the edge
        _this4.refresh({
          partialGraph: {
            edges: [edge]
          },
          skipIndexation: false,
          schedule: true
        });
      };

      // On drop edge, we remove the edge from indices and then call for a refresh
      this.activeListeners.dropEdgeGraphUpdate = function (payload) {
        var edge = payload.key;
        // we process the edge
        _this4.removeEdge(edge);
        // schedule a render for all edges
        _this4.refresh({
          schedule: true
        });
      };

      // On clear edges, we clear the edge indices and then call for a refresh
      this.activeListeners.clearEdgesGraphUpdate = function () {
        // we clear the edge data structures
        _this4.clearEdgeState();
        _this4.clearEdgeIndices();
        // schedule a render for all edges
        _this4.refresh({
          schedule: true
        });
      };

      // On graph clear, we clear indices and then call for a refresh
      this.activeListeners.clearGraphUpdate = function () {
        // clear graph state
        _this4.clearEdgeState();
        _this4.clearNodeState();

        // clear graph indices
        _this4.clearEdgeIndices();
        _this4.clearNodeIndices();

        // schedule a render for all
        _this4.refresh({
          schedule: true
        });
      };
      graph.on("nodeAdded", this.activeListeners.addNodeGraphUpdate);
      graph.on("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
      graph.on("nodeAttributesUpdated", this.activeListeners.updateNodeGraphUpdate);
      graph.on("eachNodeAttributesUpdated", this.activeListeners.eachNodeAttributesUpdatedGraphUpdate);
      graph.on("edgeAdded", this.activeListeners.addEdgeGraphUpdate);
      graph.on("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
      graph.on("edgeAttributesUpdated", this.activeListeners.updateEdgeGraphUpdate);
      graph.on("eachEdgeAttributesUpdated", this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate);
      graph.on("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
      graph.on("cleared", this.activeListeners.clearGraphUpdate);
      return this;
    }

    /**
     * Method used to unbind handlers from the graph.
     *
     * @return {undefined}
     */
  }, {
    key: "unbindGraphHandlers",
    value: function unbindGraphHandlers() {
      var graph = this.graph;
      graph.removeListener("nodeAdded", this.activeListeners.addNodeGraphUpdate);
      graph.removeListener("nodeDropped", this.activeListeners.dropNodeGraphUpdate);
      graph.removeListener("nodeAttributesUpdated", this.activeListeners.updateNodeGraphUpdate);
      graph.removeListener("eachNodeAttributesUpdated", this.activeListeners.eachNodeAttributesUpdatedGraphUpdate);
      graph.removeListener("edgeAdded", this.activeListeners.addEdgeGraphUpdate);
      graph.removeListener("edgeDropped", this.activeListeners.dropEdgeGraphUpdate);
      graph.removeListener("edgeAttributesUpdated", this.activeListeners.updateEdgeGraphUpdate);
      graph.removeListener("eachEdgeAttributesUpdated", this.activeListeners.eachEdgeAttributesUpdatedGraphUpdate);
      graph.removeListener("edgesCleared", this.activeListeners.clearEdgesGraphUpdate);
      graph.removeListener("cleared", this.activeListeners.clearGraphUpdate);
    }

    /**
     * Method looking for an edge colliding with a given point at (x, y). Returns
     * the key of the edge if any, or null else.
     */
  }, {
    key: "getEdgeAtPoint",
    value: function getEdgeAtPoint(x, y) {
      var color = colors.getPixelColor(this.webGLContexts.edges, this.frameBuffers.edges, x, y, this.pixelRatio, this.pickingDownSizingRatio);
      var index = colors.colorToIndex.apply(void 0, _toConsumableArray(color));
      var itemAt = this.itemIDsIndex[index];
      return itemAt && itemAt.type === "edge" ? itemAt.id : null;
    }

    /**
     * Method used to process the whole graph's data.
     *  - extent
     *  - normalizationFunction
     *  - compute node's coordinate
     *  - labelgrid
     *  - program data allocation
     * @return {Sigma}
     */
  }, {
    key: "process",
    value: function process() {
      var _this5 = this;
      this.emit("beforeProcess");
      var graph = this.graph;
      var settings = this.settings;
      var dimensions = this.getDimensions();

      //
      // NODES
      //
      this.nodeExtent = normalization.graphExtent(this.graph);
      if (!this.settings.autoRescale) {
        var width = dimensions.width,
          height = dimensions.height;
        var _this$nodeExtent = this.nodeExtent,
          x = _this$nodeExtent.x,
          y = _this$nodeExtent.y;
        this.nodeExtent = {
          x: [(x[0] + x[1]) / 2 - width / 2, (x[0] + x[1]) / 2 + width / 2],
          y: [(y[0] + y[1]) / 2 - height / 2, (y[0] + y[1]) / 2 + height / 2]
        };
      }
      this.normalizationFunction = normalization.createNormalizationFunction(this.customBBox || this.nodeExtent);

      // NOTE: it is important to compute this matrix after computing the node's extent
      // because #.getGraphDimensions relies on it
      var nullCamera = new Camera();
      var nullCameraMatrix = normalization.matrixFromCamera(nullCamera.getState(), dimensions, this.getGraphDimensions(), this.getStagePadding());
      // Resetting the label grid
      // TODO: it's probably better to do this explicitly or on resizes for layout and anims
      this.labelGrid.resizeAndClear(dimensions, settings.labelGridCellSize);
      var nodesPerPrograms = {};
      var nodeIndices = {};
      var edgeIndices = {};
      var itemIDsIndex = {};
      var incrID = 1;
      var nodes = graph.nodes();

      // Do some indexation on the whole graph
      for (var i = 0, l = nodes.length; i < l; i++) {
        var node = nodes[i];
        var data = this.nodeDataCache[node];

        // Get initial coordinates
        var attrs = graph.getNodeAttributes(node);
        data.x = attrs.x;
        data.y = attrs.y;
        this.normalizationFunction.applyTo(data);

        // labelgrid
        if (typeof data.label === "string" && !data.hidden) this.labelGrid.add(node, data.size, this.framedGraphToViewport(data, {
          matrix: nullCameraMatrix
        }));

        // update count per program
        nodesPerPrograms[data.type] = (nodesPerPrograms[data.type] || 0) + 1;
      }
      this.labelGrid.organize();

      // Allocate memory to programs
      for (var type in this.nodePrograms) {
        if (!hasOwnProperty.call(this.nodePrograms, type)) {
          throw new Error("Sigma: could not find a suitable program for node type \"".concat(type, "\"!"));
        }
        this.nodePrograms[type].reallocate(nodesPerPrograms[type] || 0);
        // We reset that count here, so that we can reuse it while calling the Program#process methods:
        nodesPerPrograms[type] = 0;
      }

      // Order nodes by zIndex before to add them to program
      if (this.settings.zIndex && this.nodeZExtent[0] !== this.nodeZExtent[1]) nodes = normalization.zIndexOrdering(this.nodeZExtent, function (node) {
        return _this5.nodeDataCache[node].zIndex;
      }, nodes);

      // Add data to programs
      for (var _i = 0, _l = nodes.length; _i < _l; _i++) {
        var _node = nodes[_i];
        nodeIndices[_node] = incrID;
        itemIDsIndex[nodeIndices[_node]] = {
          type: "node",
          id: _node
        };
        incrID++;
        var _data = this.nodeDataCache[_node];
        this.addNodeToProgram(_node, nodeIndices[_node], nodesPerPrograms[_data.type]++);
      }

      //
      // EDGES
      //

      var edgesPerPrograms = {};
      var edges = graph.edges();

      // Allocate memory to programs
      for (var _i2 = 0, _l2 = edges.length; _i2 < _l2; _i2++) {
        var edge = edges[_i2];
        var _data2 = this.edgeDataCache[edge];
        edgesPerPrograms[_data2.type] = (edgesPerPrograms[_data2.type] || 0) + 1;
      }

      // Order edges by zIndex before to add them to program
      if (this.settings.zIndex && this.edgeZExtent[0] !== this.edgeZExtent[1]) edges = normalization.zIndexOrdering(this.edgeZExtent, function (edge) {
        return _this5.edgeDataCache[edge].zIndex;
      }, edges);
      for (var _type2 in this.edgePrograms) {
        if (!hasOwnProperty.call(this.edgePrograms, _type2)) {
          throw new Error("Sigma: could not find a suitable program for edge type \"".concat(_type2, "\"!"));
        }
        this.edgePrograms[_type2].reallocate(edgesPerPrograms[_type2] || 0);
        // We reset that count here, so that we can reuse it while calling the Program#process methods:
        edgesPerPrograms[_type2] = 0;
      }

      // Add data to programs
      for (var _i3 = 0, _l3 = edges.length; _i3 < _l3; _i3++) {
        var _edge = edges[_i3];
        edgeIndices[_edge] = incrID;
        itemIDsIndex[edgeIndices[_edge]] = {
          type: "edge",
          id: _edge
        };
        incrID++;
        var _data3 = this.edgeDataCache[_edge];
        this.addEdgeToProgram(_edge, edgeIndices[_edge], edgesPerPrograms[_data3.type]++);
      }
      this.itemIDsIndex = itemIDsIndex;
      this.nodeIndices = nodeIndices;
      this.edgeIndices = edgeIndices;
      this.emit("afterProcess");
      return this;
    }

    /**
     * Method that backports potential settings updates where it's needed.
     * @private
     */
  }, {
    key: "handleSettingsUpdate",
    value: function handleSettingsUpdate(oldSettings) {
      var settings = this.settings;
      this.camera.minRatio = settings.minCameraRatio;
      this.camera.maxRatio = settings.maxCameraRatio;
      this.camera.enabledRotation = settings.enableCameraRotation;
      this.camera.setState(this.camera.validateState(this.camera.getState()));
      if (oldSettings) {
        // Check edge programs:
        if (oldSettings.edgeProgramClasses !== settings.edgeProgramClasses) {
          for (var type in settings.edgeProgramClasses) {
            if (settings.edgeProgramClasses[type] !== oldSettings.edgeProgramClasses[type]) {
              this.registerEdgeProgram(type, settings.edgeProgramClasses[type]);
            }
          }
          for (var _type3 in oldSettings.edgeProgramClasses) {
            if (!settings.edgeProgramClasses[_type3]) this.unregisterEdgeProgram(_type3);
          }
        }

        // Check node programs:
        if (oldSettings.nodeProgramClasses !== settings.nodeProgramClasses || oldSettings.nodeHoverProgramClasses !== settings.nodeHoverProgramClasses) {
          for (var _type4 in settings.nodeProgramClasses) {
            if (settings.nodeProgramClasses[_type4] !== oldSettings.nodeProgramClasses[_type4] || settings.nodeHoverProgramClasses[_type4] !== oldSettings.nodeHoverProgramClasses[_type4]) {
              this.registerNodeProgram(_type4, settings.nodeProgramClasses[_type4], settings.nodeHoverProgramClasses[_type4]);
            }
          }
          for (var _type5 in oldSettings.nodeProgramClasses) {
            if (!settings.nodeProgramClasses[_type5]) this.unregisterNodeProgram(_type5);
          }
        }
      }

      // Update captors settings:
      this.mouseCaptor.setSettings(this.settings);
      this.touchCaptor.setSettings(this.settings);
      return this;
    }

    /**
     * Method used to render labels.
     *
     * @return {Sigma}
     */
  }, {
    key: "renderLabels",
    value: function renderLabels() {
      if (!this.settings.renderLabels) return this;
      var cameraState = this.camera.getState();

      // Selecting labels to draw
      var labelsToDisplay = this.labelGrid.getLabelsToDisplay(cameraState.ratio, this.settings.labelDensity);
      data.extend(labelsToDisplay, this.nodesWithForcedLabels);
      this.displayedNodeLabels = new Set();

      // Drawing labels
      var context = this.canvasContexts.labels;
      for (var i = 0, l = labelsToDisplay.length; i < l; i++) {
        var node = labelsToDisplay[i];
        var data$1 = this.nodeDataCache[node];

        // If the node was already drawn (like if it is eligible AND has
        // `forceLabel`), we don't want to draw it again
        // NOTE: we can do better probably
        if (this.displayedNodeLabels.has(node)) continue;

        // If the node is hidden, we don't need to display its label obviously
        if (data$1.hidden) continue;
        var _this$framedGraphToVi = this.framedGraphToViewport(data$1),
          x = _this$framedGraphToVi.x,
          y = _this$framedGraphToVi.y;

        // NOTE: we can cache the labels we need to render until the camera's ratio changes
        var size = this.scaleSize(data$1.size);

        // Is node big enough?
        if (!data$1.forceLabel && size < this.settings.labelRenderedSizeThreshold) continue;

        // Is node actually on screen (with some margin)
        // NOTE: we used to rely on the quadtree for this, but the coordinates
        // conversion make it unreliable and at that point we already converted
        // to viewport coordinates and since the label grid already culls the
        // number of potential labels to display this looks like a good
        // performance compromise.
        // NOTE: labelGrid.getLabelsToDisplay could probably optimize by not
        // considering cells obviously outside of the range of the current
        // view rectangle.
        if (x < -X_LABEL_MARGIN || x > this.width + X_LABEL_MARGIN || y < -Y_LABEL_MARGIN || y > this.height + Y_LABEL_MARGIN) continue;

        // Because displayed edge labels depend directly on actually rendered node
        // labels, we need to only add to this.displayedNodeLabels nodes whose label
        // is rendered.
        // This makes this.displayedNodeLabels depend on viewport, which might become
        // an issue once we start memoizing getLabelsToDisplay.
        this.displayedNodeLabels.add(node);
        var defaultDrawNodeLabel = this.settings.defaultDrawNodeLabel;
        var nodeProgram = this.nodePrograms[data$1.type];
        var drawLabel = (nodeProgram === null || nodeProgram === void 0 ? void 0 : nodeProgram.drawLabel) || defaultDrawNodeLabel;
        drawLabel(context, index._objectSpread2(index._objectSpread2({
          key: node
        }, data$1), {}, {
          size: size,
          x: x,
          y: y
        }), this.settings);
      }
      return this;
    }

    /**
     * Method used to render edge labels, based on which node labels were
     * rendered.
     *
     * @return {Sigma}
     */
  }, {
    key: "renderEdgeLabels",
    value: function renderEdgeLabels() {
      if (!this.settings.renderEdgeLabels) return this;
      var context = this.canvasContexts.edgeLabels;

      // Clearing
      context.clearRect(0, 0, this.width, this.height);
      var edgeLabelsToDisplay = edgeLabelsToDisplayFromNodes({
        graph: this.graph,
        hoveredNode: this.hoveredNode,
        displayedNodeLabels: this.displayedNodeLabels,
        highlightedNodes: this.highlightedNodes
      });
      data.extend(edgeLabelsToDisplay, this.edgesWithForcedLabels);
      var displayedLabels = new Set();
      for (var i = 0, l = edgeLabelsToDisplay.length; i < l; i++) {
        var edge = edgeLabelsToDisplay[i],
          extremities = this.graph.extremities(edge),
          sourceData = this.nodeDataCache[extremities[0]],
          targetData = this.nodeDataCache[extremities[1]],
          edgeData = this.edgeDataCache[edge];

        // If the edge was already drawn (like if it is eligible AND has
        // `forceLabel`), we don't want to draw it again
        if (displayedLabels.has(edge)) continue;

        // If the edge is hidden we don't need to display its label
        // NOTE: the test on sourceData & targetData is probably paranoid at this point?
        if (edgeData.hidden || sourceData.hidden || targetData.hidden) {
          continue;
        }
        var defaultDrawEdgeLabel = this.settings.defaultDrawEdgeLabel;
        var edgeProgram = this.edgePrograms[edgeData.type];
        var drawLabel = (edgeProgram === null || edgeProgram === void 0 ? void 0 : edgeProgram.drawLabel) || defaultDrawEdgeLabel;
        drawLabel(context, index._objectSpread2(index._objectSpread2({
          key: edge
        }, edgeData), {}, {
          size: this.scaleSize(edgeData.size)
        }), index._objectSpread2(index._objectSpread2(index._objectSpread2({
          key: extremities[0]
        }, sourceData), this.framedGraphToViewport(sourceData)), {}, {
          size: this.scaleSize(sourceData.size)
        }), index._objectSpread2(index._objectSpread2(index._objectSpread2({
          key: extremities[1]
        }, targetData), this.framedGraphToViewport(targetData)), {}, {
          size: this.scaleSize(targetData.size)
        }), this.settings);
        displayedLabels.add(edge);
      }
      this.displayedEdgeLabels = displayedLabels;
      return this;
    }

    /**
     * Method used to render the highlighted nodes.
     *
     * @return {Sigma}
     */
  }, {
    key: "renderHighlightedNodes",
    value: function renderHighlightedNodes() {
      var _this6 = this;
      var context = this.canvasContexts.hovers;

      // Clearing
      context.clearRect(0, 0, this.width, this.height);

      // Rendering
      var render = function render(node) {
        var data = _this6.nodeDataCache[node];
        var _this6$framedGraphToV = _this6.framedGraphToViewport(data),
          x = _this6$framedGraphToV.x,
          y = _this6$framedGraphToV.y;
        var size = _this6.scaleSize(data.size);
        var defaultDrawNodeHover = _this6.settings.defaultDrawNodeHover;
        var nodeProgram = _this6.nodePrograms[data.type];
        var drawHover = (nodeProgram === null || nodeProgram === void 0 ? void 0 : nodeProgram.drawHover) || defaultDrawNodeHover;
        drawHover(context, index._objectSpread2(index._objectSpread2({
          key: node
        }, data), {}, {
          size: size,
          x: x,
          y: y
        }), _this6.settings);
      };
      var nodesToRender = [];
      if (this.hoveredNode && !this.nodeDataCache[this.hoveredNode].hidden) {
        nodesToRender.push(this.hoveredNode);
      }
      this.highlightedNodes.forEach(function (node) {
        // The hovered node has already been highlighted
        if (node !== _this6.hoveredNode) nodesToRender.push(node);
      });

      // Draw labels:
      nodesToRender.forEach(function (node) {
        return render(node);
      });

      // Draw WebGL nodes on top of the labels:
      var nodesPerPrograms = {};

      // 1. Count nodes per type:
      nodesToRender.forEach(function (node) {
        var type = _this6.nodeDataCache[node].type;
        nodesPerPrograms[type] = (nodesPerPrograms[type] || 0) + 1;
      });
      // 2. Allocate for each type for the proper number of nodes
      for (var type in this.nodeHoverPrograms) {
        this.nodeHoverPrograms[type].reallocate(nodesPerPrograms[type] || 0);
        // Also reset count, to use when rendering:
        nodesPerPrograms[type] = 0;
      }
      // 3. Process all nodes to render:
      nodesToRender.forEach(function (node) {
        var data = _this6.nodeDataCache[node];
        _this6.nodeHoverPrograms[data.type].process(0, nodesPerPrograms[data.type]++, data);
      });
      // 4. Clear hovered nodes layer:
      this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT);
      // 5. Render:
      var renderParams = this.getRenderParams();
      for (var _type6 in this.nodeHoverPrograms) {
        var program = this.nodeHoverPrograms[_type6];
        program.render(renderParams);
      }
    }

    /**
     * Method used to schedule a hover render.
     *
     */
  }, {
    key: "scheduleHighlightedNodesRender",
    value: function scheduleHighlightedNodesRender() {
      var _this7 = this;
      if (this.renderHighlightedNodesFrame || this.renderFrame) return;
      this.renderHighlightedNodesFrame = requestAnimationFrame(function () {
        // Resetting state
        _this7.renderHighlightedNodesFrame = null;

        // Rendering
        _this7.renderHighlightedNodes();
        _this7.renderEdgeLabels();
      });
    }

    /**
     * Method used to render.
     *
     * @return {Sigma}
     */
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;
      this.emit("beforeRender");
      var exitRender = function exitRender() {
        _this8.emit("afterRender");
        return _this8;
      };

      // If a render was scheduled, we cancel it
      if (this.renderFrame) {
        cancelAnimationFrame(this.renderFrame);
        this.renderFrame = null;
      }

      // First we need to resize
      this.resize();

      // Do we need to reprocess data?
      if (this.needToProcess) this.process();
      this.needToProcess = false;

      // Clearing the canvases
      this.clear();

      // Prepare the textures
      this.pickingLayers.forEach(function (layer) {
        return _this8.resetWebGLTexture(layer);
      });

      // If we have no nodes we can stop right there
      if (!this.graph.order) return exitRender();

      // TODO: improve this heuristic or move to the captor itself?
      // TODO: deal with the touch captor here as well
      var mouseCaptor = this.mouseCaptor;
      var moving = this.camera.isAnimated() || mouseCaptor.isMoving || mouseCaptor.draggedEvents || mouseCaptor.currentWheelDirection;

      // Then we need to extract a matrix from the camera
      var cameraState = this.camera.getState();
      var viewportDimensions = this.getDimensions();
      var graphDimensions = this.getGraphDimensions();
      var padding = this.getStagePadding();
      this.matrix = normalization.matrixFromCamera(cameraState, viewportDimensions, graphDimensions, padding);
      this.invMatrix = normalization.matrixFromCamera(cameraState, viewportDimensions, graphDimensions, padding, true);
      this.correctionRatio = normalization.getMatrixImpact(this.matrix, cameraState, viewportDimensions);
      this.graphToViewportRatio = this.getGraphToViewportRatio();

      // [jacomyal]
      // This comment is related to the one above the `getMatrixImpact` definition:
      // - `this.correctionRatio` is somehow not completely explained
      // - `this.graphToViewportRatio` is the ratio of a distance in the viewport divided by the same distance in the
      //   graph
      // - `this.normalizationFunction.ratio` is basically `Math.max(graphDX, graphDY)`
      // And now, I observe that if I multiply these three ratios, I have something constant, which value remains 2, even
      // when I change the graph, the viewport or the camera. It might be useful later, so I prefer to let this comment:
      // console.log(this.graphToViewportRatio * this.correctionRatio * this.normalizationFunction.ratio * 2);

      var params = this.getRenderParams();

      // Drawing nodes
      for (var type in this.nodePrograms) {
        var program = this.nodePrograms[type];
        program.render(params);
      }

      // Drawing edges
      if (!this.settings.hideEdgesOnMove || !moving) {
        for (var _type7 in this.edgePrograms) {
          var _program2 = this.edgePrograms[_type7];
          _program2.render(params);
        }
      }

      // Do not display labels on move per setting
      if (this.settings.hideLabelsOnMove && moving) return exitRender();
      this.renderLabels();
      this.renderEdgeLabels();
      this.renderHighlightedNodes();
      return exitRender();
    }

    /**
     * Add a node in the internal data structures.
     * @private
     * @param key The node's graphology ID
     */
  }, {
    key: "addNode",
    value: function addNode(key) {
      // Node display data resolution:
      //  1. First we get the node's attributes
      //  2. We optionally reduce them using the function provided by the user
      //     Note that this function must return a total object and won't be merged
      //  3. We apply our defaults, while running some vital checks
      //  4. We apply the normalization function
      // We shallow copy node data to avoid dangerous behaviors from reducers
      var attr = Object.assign({}, this.graph.getNodeAttributes(key));
      if (this.settings.nodeReducer) attr = this.settings.nodeReducer(key, attr);
      var data = applyNodeDefaults(this.settings, key, attr);
      this.nodeDataCache[key] = data;

      // Label:
      // We delete and add if needed because this function is also used from
      // update
      this.nodesWithForcedLabels["delete"](key);
      if (data.forceLabel && !data.hidden) this.nodesWithForcedLabels.add(key);

      // Highlighted:
      // We remove and re add if needed because this function is also used from
      // update
      this.highlightedNodes["delete"](key);
      if (data.highlighted && !data.hidden) this.highlightedNodes.add(key);

      // zIndex
      if (this.settings.zIndex) {
        if (data.zIndex < this.nodeZExtent[0]) this.nodeZExtent[0] = data.zIndex;
        if (data.zIndex > this.nodeZExtent[1]) this.nodeZExtent[1] = data.zIndex;
      }
    }

    /**
     * Update a node the internal data structures.
     * @private
     * @param key The node's graphology ID
     */
  }, {
    key: "updateNode",
    value: function updateNode(key) {
      this.addNode(key);

      // Re-apply normalization on the node
      var data = this.nodeDataCache[key];
      this.normalizationFunction.applyTo(data);
    }

    /**
     * Remove a node from the internal data structures.
     * @private
     * @param key The node's graphology ID
     */
  }, {
    key: "removeNode",
    value: function removeNode(key) {
      // Remove from node cache
      delete this.nodeDataCache[key];
      // Remove from node program index
      delete this.nodeProgramIndex[key];
      // Remove from higlighted nodes
      this.highlightedNodes["delete"](key);
      // Remove from hovered
      if (this.hoveredNode === key) this.hoveredNode = null;
      // Remove from forced label
      this.nodesWithForcedLabels["delete"](key);
    }

    /**
     * Add an edge into the internal data structures.
     * @private
     * @param key The edge's graphology ID
     */
  }, {
    key: "addEdge",
    value: function addEdge(key) {
      // Edge display data resolution:
      //  1. First we get the edge's attributes
      //  2. We optionally reduce them using the function provided by the user
      //  3. Note that this function must return a total object and won't be merged
      //  4. We apply our defaults, while running some vital checks
      // We shallow copy edge data to avoid dangerous behaviors from reducers
      var attr = Object.assign({}, this.graph.getEdgeAttributes(key));
      if (this.settings.edgeReducer) attr = this.settings.edgeReducer(key, attr);
      var data = applyEdgeDefaults(this.settings, key, attr);
      this.edgeDataCache[key] = data;

      // Forced label
      // we filter and re push if needed because this function is also used from
      // update
      this.edgesWithForcedLabels["delete"](key);
      if (data.forceLabel && !data.hidden) this.edgesWithForcedLabels.add(key);

      // Check zIndex
      if (this.settings.zIndex) {
        if (data.zIndex < this.edgeZExtent[0]) this.edgeZExtent[0] = data.zIndex;
        if (data.zIndex > this.edgeZExtent[1]) this.edgeZExtent[1] = data.zIndex;
      }
    }

    /**
     * Update an edge in the internal data structures.
     * @private
     * @param key The edge's graphology ID
     */
  }, {
    key: "updateEdge",
    value: function updateEdge(key) {
      this.addEdge(key);
    }

    /**
     * Remove an edge from the internal data structures.
     * @private
     * @param key The edge's graphology ID
     */
  }, {
    key: "removeEdge",
    value: function removeEdge(key) {
      // Remove from edge cache
      delete this.edgeDataCache[key];
      // Remove from programId index
      delete this.edgeProgramIndex[key];
      // Remove from hovered
      if (this.hoveredEdge === key) this.hoveredEdge = null;
      // Remove from forced label
      this.edgesWithForcedLabels["delete"](key);
    }

    /**
     * Clear all indices related to nodes.
     * @private
     */
  }, {
    key: "clearNodeIndices",
    value: function clearNodeIndices() {
      // LabelGrid & nodeExtent are only manage/populated in the process function
      this.labelGrid = new LabelGrid();
      this.nodeExtent = {
        x: [0, 1],
        y: [0, 1]
      };
      this.nodeDataCache = {};
      this.edgeProgramIndex = {};
      this.nodesWithForcedLabels = new Set();
      this.nodeZExtent = [Infinity, -Infinity];
    }

    /**
     * Clear all indices related to edges.
     * @private
     */
  }, {
    key: "clearEdgeIndices",
    value: function clearEdgeIndices() {
      this.edgeDataCache = {};
      this.edgeProgramIndex = {};
      this.edgesWithForcedLabels = new Set();
      this.edgeZExtent = [Infinity, -Infinity];
    }

    /**
     * Clear all indices.
     * @private
     */
  }, {
    key: "clearIndices",
    value: function clearIndices() {
      this.clearEdgeIndices();
      this.clearNodeIndices();
    }

    /**
     * Clear all graph state related to nodes.
     * @private
     */
  }, {
    key: "clearNodeState",
    value: function clearNodeState() {
      this.displayedNodeLabels = new Set();
      this.highlightedNodes = new Set();
      this.hoveredNode = null;
    }

    /**
     * Clear all graph state related to edges.
     * @private
     */
  }, {
    key: "clearEdgeState",
    value: function clearEdgeState() {
      this.displayedEdgeLabels = new Set();
      this.highlightedNodes = new Set();
      this.hoveredEdge = null;
    }

    /**
     * Clear all graph state.
     * @private
     */
  }, {
    key: "clearState",
    value: function clearState() {
      this.clearEdgeState();
      this.clearNodeState();
    }

    /**
     * Add the node data to its program.
     * @private
     * @param node The node's graphology ID
     * @param fingerprint A fingerprint used to identity the node with picking
     * @param position The index where to place the node in the program
     */
  }, {
    key: "addNodeToProgram",
    value: function addNodeToProgram(node, fingerprint, position) {
      var data = this.nodeDataCache[node];
      var nodeProgram = this.nodePrograms[data.type];
      if (!nodeProgram) throw new Error("Sigma: could not find a suitable program for node type \"".concat(data.type, "\"!"));
      nodeProgram.process(fingerprint, position, data);
      // Saving program index
      this.nodeProgramIndex[node] = position;
    }

    /**
     * Add the edge data to its program.
     * @private
     * @param edge The edge's graphology ID
     * @param fingerprint A fingerprint used to identity the edge with picking
     * @param position The index where to place the edge in the program
     */
  }, {
    key: "addEdgeToProgram",
    value: function addEdgeToProgram(edge, fingerprint, position) {
      var data = this.edgeDataCache[edge];
      var edgeProgram = this.edgePrograms[data.type];
      if (!edgeProgram) throw new Error("Sigma: could not find a suitable program for edge type \"".concat(data.type, "\"!"));
      var extremities = this.graph.extremities(edge),
        sourceData = this.nodeDataCache[extremities[0]],
        targetData = this.nodeDataCache[extremities[1]];
      edgeProgram.process(fingerprint, position, sourceData, targetData, data);
      // Saving program index
      this.edgeProgramIndex[edge] = position;
    }

    /**---------------------------------------------------------------------------
     * Public API.
     **---------------------------------------------------------------------------
     */

    /**
     * Function used to get the render params.
     *
     * @return {RenderParams}
     */
  }, {
    key: "getRenderParams",
    value: function getRenderParams() {
      return {
        matrix: this.matrix,
        invMatrix: this.invMatrix,
        width: this.width,
        height: this.height,
        pixelRatio: this.pixelRatio,
        zoomRatio: this.camera.ratio,
        cameraAngle: this.camera.angle,
        sizeRatio: 1 / this.scaleSize(),
        correctionRatio: this.correctionRatio,
        downSizingRatio: this.pickingDownSizingRatio,
        minEdgeThickness: this.settings.minEdgeThickness,
        antiAliasingFeather: this.settings.antiAliasingFeather
      };
    }

    /**
     * Function used to retrieve the actual stage padding value.
     *
     * @return {number}
     */
  }, {
    key: "getStagePadding",
    value: function getStagePadding() {
      var _this$settings = this.settings,
        stagePadding = _this$settings.stagePadding,
        autoRescale = _this$settings.autoRescale;
      return autoRescale ? stagePadding || 0 : 0;
    }

    /**
     * Function used to create a layer element.
     *
     * @param {string} id - Context's id.
     * @param {string} tag - The HTML tag to use.
     * @param options
     * @return {Sigma}
     */
  }, {
    key: "createLayer",
    value: function createLayer(id, tag) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (this.elements[id]) throw new Error("Sigma: a layer named \"".concat(id, "\" already exists"));
      var element = normalization.createElement(tag, {
        position: "absolute"
      }, {
        "class": "sigma-".concat(id)
      });
      if (options.style) Object.assign(element.style, options.style);
      this.elements[id] = element;
      if ("beforeLayer" in options && options.beforeLayer) {
        this.elements[options.beforeLayer].before(element);
      } else if ("afterLayer" in options && options.afterLayer) {
        this.elements[options.afterLayer].after(element);
      } else {
        this.container.appendChild(element);
      }
      return element;
    }

    /**
     * Function used to create a canvas element.
     *
     * @param {string} id - Context's id.
     * @param options
     * @return {Sigma}
     */
  }, {
    key: "createCanvas",
    value: function createCanvas(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.createLayer(id, "canvas", options);
    }

    /**
     * Function used to create a canvas context and add the relevant DOM elements.
     *
     * @param  {string} id - Context's id.
     * @return {Sigma}
     */
  }, {
    key: "createCanvasContext",
    value: function createCanvasContext(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var canvas = this.createCanvas(id, options);
      var contextOptions = {
        preserveDrawingBuffer: false,
        antialias: false
      };
      this.canvasContexts[id] = canvas.getContext("2d", contextOptions);
      return this;
    }

    /**
     * Function used to create a WebGL context and add the relevant DOM
     * elements.
     *
     * @param  {string}  id      - Context's id.
     * @param  {object?} options - #getContext params to override (optional)
     * @return {WebGLRenderingContext}
     */
  }, {
    key: "createWebGLContext",
    value: function createWebGLContext(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var canvas = (options === null || options === void 0 ? void 0 : options.canvas) || this.createCanvas(id, options);
      if (options.hidden) canvas.remove();
      var contextOptions = index._objectSpread2({
        preserveDrawingBuffer: false,
        antialias: false
      }, options);
      var context;

      // First we try webgl2 for an easy performance boost
      context = canvas.getContext("webgl2", contextOptions);

      // Else we fall back to webgl
      if (!context) context = canvas.getContext("webgl", contextOptions);

      // Edge, I am looking right at you...
      if (!context) context = canvas.getContext("experimental-webgl", contextOptions);
      var gl = context;
      this.webGLContexts[id] = gl;

      // Blending:
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

      // Prepare frame buffer for picking layers:
      if (options.picking) {
        this.pickingLayers.add(id);
        var newFrameBuffer = gl.createFramebuffer();
        if (!newFrameBuffer) throw new Error("Sigma: cannot create a new frame buffer for layer ".concat(id));
        this.frameBuffers[id] = newFrameBuffer;
      }
      return gl;
    }

    /**
     * Function used to properly kill a layer.
     *
     * @param  {string} id - Layer id.
     * @return {Sigma}
     */
  }, {
    key: "killLayer",
    value: function killLayer(id) {
      var element = this.elements[id];
      if (!element) throw new Error("Sigma: cannot kill layer ".concat(id, ", which does not exist"));
      if (this.webGLContexts[id]) {
        var _gl$getExtension;
        var gl = this.webGLContexts[id];
        (_gl$getExtension = gl.getExtension("WEBGL_lose_context")) === null || _gl$getExtension === void 0 || _gl$getExtension.loseContext();
        delete this.webGLContexts[id];
      } else if (this.canvasContexts[id]) {
        delete this.canvasContexts[id];
      }

      // Delete layer element
      element.remove();
      delete this.elements[id];
      return this;
    }

    /**
     * Method returning the renderer's camera.
     *
     * @return {Camera}
     */
  }, {
    key: "getCamera",
    value: function getCamera() {
      return this.camera;
    }

    /**
     * Method setting the renderer's camera.
     *
     * @param  {Camera} camera - New camera.
     * @return {Sigma}
     */
  }, {
    key: "setCamera",
    value: function setCamera(camera) {
      this.unbindCameraHandlers();
      this.camera = camera;
      this.bindCameraHandlers();
    }

    /**
     * Method returning the container DOM element.
     *
     * @return {HTMLElement}
     */
  }, {
    key: "getContainer",
    value: function getContainer() {
      return this.container;
    }

    /**
     * Method returning the renderer's graph.
     *
     * @return {Graph}
     */
  }, {
    key: "getGraph",
    value: function getGraph() {
      return this.graph;
    }

    /**
     * Method used to set the renderer's graph.
     *
     * @return {Graph}
     */
  }, {
    key: "setGraph",
    value: function setGraph(graph) {
      if (graph === this.graph) return;

      // Unbinding handlers on the current graph
      this.unbindGraphHandlers();
      if (this.checkEdgesEventsFrame !== null) {
        cancelAnimationFrame(this.checkEdgesEventsFrame);
        this.checkEdgesEventsFrame = null;
      }

      // Installing new graph
      this.graph = graph;

      // Binding new handlers
      this.bindGraphHandlers();

      // Re-rendering now to avoid discrepancies from now to next frame
      this.refresh();
    }

    /**
     * Method returning the mouse captor.
     *
     * @return {MouseCaptor}
     */
  }, {
    key: "getMouseCaptor",
    value: function getMouseCaptor() {
      return this.mouseCaptor;
    }

    /**
     * Method returning the touch captor.
     *
     * @return {TouchCaptor}
     */
  }, {
    key: "getTouchCaptor",
    value: function getTouchCaptor() {
      return this.touchCaptor;
    }

    /**
     * Method returning the current renderer's dimensions.
     *
     * @return {Dimensions}
     */
  }, {
    key: "getDimensions",
    value: function getDimensions() {
      return {
        width: this.width,
        height: this.height
      };
    }

    /**
     * Method returning the current graph's dimensions.
     *
     * @return {Dimensions}
     */
  }, {
    key: "getGraphDimensions",
    value: function getGraphDimensions() {
      var extent = this.customBBox || this.nodeExtent;
      return {
        width: extent.x[1] - extent.x[0] || 1,
        height: extent.y[1] - extent.y[0] || 1
      };
    }

    /**
     * Method used to get all the sigma node attributes.
     * It's useful for example to get the position of a node
     * and to get values that are set by the nodeReducer
     *
     * @param  {string} key - The node's key.
     * @return {NodeDisplayData | undefined} A copy of the desired node's attribute or undefined if not found
     */
  }, {
    key: "getNodeDisplayData",
    value: function getNodeDisplayData(key) {
      var node = this.nodeDataCache[key];
      return node ? Object.assign({}, node) : undefined;
    }

    /**
     * Method used to get all the sigma edge attributes.
     * It's useful for example to get values that are set by the edgeReducer.
     *
     * @param  {string} key - The edge's key.
     * @return {EdgeDisplayData | undefined} A copy of the desired edge's attribute or undefined if not found
     */
  }, {
    key: "getEdgeDisplayData",
    value: function getEdgeDisplayData(key) {
      var edge = this.edgeDataCache[key];
      return edge ? Object.assign({}, edge) : undefined;
    }

    /**
     * Method used to get the set of currently displayed node labels.
     *
     * @return {Set<string>} A set of node keys whose label is displayed.
     */
  }, {
    key: "getNodeDisplayedLabels",
    value: function getNodeDisplayedLabels() {
      return new Set(this.displayedNodeLabels);
    }

    /**
     * Method used to get the set of currently displayed edge labels.
     *
     * @return {Set<string>} A set of edge keys whose label is displayed.
     */
  }, {
    key: "getEdgeDisplayedLabels",
    value: function getEdgeDisplayedLabels() {
      return new Set(this.displayedEdgeLabels);
    }

    /**
     * Method returning a copy of the settings collection.
     *
     * @return {Settings} A copy of the settings collection.
     */
  }, {
    key: "getSettings",
    value: function getSettings() {
      return index._objectSpread2({}, this.settings);
    }

    /**
     * Method returning the current value for a given setting key.
     *
     * @param  {string} key - The setting key to get.
     * @return {any} The value attached to this setting key or undefined if not found
     */
  }, {
    key: "getSetting",
    value: function getSetting(key) {
      return this.settings[key];
    }

    /**
     * Method setting the value of a given setting key. Note that this will schedule
     * a new render next frame.
     *
     * @param  {string} key - The setting key to set.
     * @param  {any}    value - The value to set.
     * @return {Sigma}
     */
  }, {
    key: "setSetting",
    value: function setSetting(key, value) {
      var oldValues = index._objectSpread2({}, this.settings);
      this.settings[key] = value;
      settings_dist_sigmaSettings.validateSettings(this.settings);
      this.handleSettingsUpdate(oldValues);
      this.scheduleRefresh();
      return this;
    }

    /**
     * Method updating the value of a given setting key using the provided function.
     * Note that this will schedule a new render next frame.
     *
     * @param  {string}   key     - The setting key to set.
     * @param  {function} updater - The update function.
     * @return {Sigma}
     */
  }, {
    key: "updateSetting",
    value: function updateSetting(key, updater) {
      this.setSetting(key, updater(this.settings[key]));
      return this;
    }

    /**
     * Method used to resize the renderer.
     *
     * @param  {boolean} force - If true, then resize is processed even if size is unchanged (optional).
     * @return {Sigma}
     */
  }, {
    key: "resize",
    value: function resize(force) {
      var previousWidth = this.width,
        previousHeight = this.height;
      this.width = this.container.offsetWidth;
      this.height = this.container.offsetHeight;
      this.pixelRatio = normalization.getPixelRatio();
      if (this.width === 0) {
        if (this.settings.allowInvalidContainer) this.width = 1;else throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");
      }
      if (this.height === 0) {
        if (this.settings.allowInvalidContainer) this.height = 1;else throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");
      }

      // If nothing has changed, we can stop right here
      if (!force && previousWidth === this.width && previousHeight === this.height) return this;

      // Sizing dom elements
      for (var id in this.elements) {
        var element = this.elements[id];
        element.style.width = this.width + "px";
        element.style.height = this.height + "px";
      }

      // Sizing canvas contexts
      for (var _id in this.canvasContexts) {
        this.elements[_id].setAttribute("width", this.width * this.pixelRatio + "px");
        this.elements[_id].setAttribute("height", this.height * this.pixelRatio + "px");
        if (this.pixelRatio !== 1) this.canvasContexts[_id].scale(this.pixelRatio, this.pixelRatio);
      }

      // Sizing WebGL contexts
      for (var _id2 in this.webGLContexts) {
        this.elements[_id2].setAttribute("width", this.width * this.pixelRatio + "px");
        this.elements[_id2].setAttribute("height", this.height * this.pixelRatio + "px");
        var gl = this.webGLContexts[_id2];
        gl.viewport(0, 0, this.width * this.pixelRatio, this.height * this.pixelRatio);

        // Clear picking texture if needed
        if (this.pickingLayers.has(_id2)) {
          var currentTexture = this.textures[_id2];
          if (currentTexture) gl.deleteTexture(currentTexture);
        }
      }
      this.emit("resize");
      return this;
    }

    /**
     * Method used to clear all the canvases.
     *
     * @return {Sigma}
     */
  }, {
    key: "clear",
    value: function clear() {
      this.emit("beforeClear");
      this.webGLContexts.nodes.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
      this.webGLContexts.nodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
      this.webGLContexts.edges.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
      this.webGLContexts.edges.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
      this.webGLContexts.hoverNodes.clear(WebGLRenderingContext.COLOR_BUFFER_BIT);
      this.canvasContexts.labels.clearRect(0, 0, this.width, this.height);
      this.canvasContexts.hovers.clearRect(0, 0, this.width, this.height);
      this.canvasContexts.edgeLabels.clearRect(0, 0, this.width, this.height);
      this.emit("afterClear");
      return this;
    }

    /**
     * Method used to refresh, i.e. force the renderer to reprocess graph
     * data and render, but keep the state.
     * - if a partialGraph is provided, we only reprocess those nodes & edges.
     * - if schedule is TRUE, we schedule a render instead of sync render
     * - if skipIndexation is TRUE, then labelGrid & program indexation are skipped (can be used if you haven't modify x, y, zIndex & size)
     *
     * @return {Sigma}
     */
  }, {
    key: "refresh",
    value: function refresh(opts) {
      var _this9 = this;
      var skipIndexation = (opts === null || opts === void 0 ? void 0 : opts.skipIndexation) !== undefined ? opts === null || opts === void 0 ? void 0 : opts.skipIndexation : false;
      var schedule = (opts === null || opts === void 0 ? void 0 : opts.schedule) !== undefined ? opts.schedule : false;
      var fullRefresh = !opts || !opts.partialGraph;
      if (fullRefresh) {
        // Re-index graph data
        this.clearEdgeIndices();
        this.clearNodeIndices();
        this.graph.forEachNode(function (node) {
          return _this9.addNode(node);
        });
        this.graph.forEachEdge(function (edge) {
          return _this9.addEdge(edge);
        });
      } else {
        var _opts$partialGraph, _opts$partialGraph2;
        var nodes = ((_opts$partialGraph = opts.partialGraph) === null || _opts$partialGraph === void 0 ? void 0 : _opts$partialGraph.nodes) || [];
        for (var i = 0, l = (nodes === null || nodes === void 0 ? void 0 : nodes.length) || 0; i < l; i++) {
          var node = nodes[i];
          // Recompute node's data (ie. apply reducer)
          this.updateNode(node);
          // Add node to the program if layout is unchanged.
          // otherwise it will be done in the process function
          if (skipIndexation) {
            var programIndex = this.nodeProgramIndex[node];
            if (programIndex === undefined) throw new Error("Sigma: node \"".concat(node, "\" can't be repaint"));
            this.addNodeToProgram(node, this.nodeIndices[node], programIndex);
          }
        }
        var edges = (opts === null || opts === void 0 || (_opts$partialGraph2 = opts.partialGraph) === null || _opts$partialGraph2 === void 0 ? void 0 : _opts$partialGraph2.edges) || [];
        for (var _i4 = 0, _l4 = edges.length; _i4 < _l4; _i4++) {
          var edge = edges[_i4];
          // Recompute edge's data (ie. apply reducer)
          this.updateEdge(edge);
          // Add edge to the program
          // otherwise it will be done in the process function
          if (skipIndexation) {
            var _programIndex = this.edgeProgramIndex[edge];
            if (_programIndex === undefined) throw new Error("Sigma: edge \"".concat(edge, "\" can't be repaint"));
            this.addEdgeToProgram(edge, this.edgeIndices[edge], _programIndex);
          }
        }
      }

      // Do we need to call the process function ?
      if (fullRefresh || !skipIndexation) this.needToProcess = true;
      if (schedule) this.scheduleRender();else this.render();
      return this;
    }

    /**
     * Method used to schedule a render at the next available frame.
     * This method can be safely called on a same frame because it basically
     * debounces refresh to the next frame.
     *
     * @return {Sigma}
     */
  }, {
    key: "scheduleRender",
    value: function scheduleRender() {
      var _this10 = this;
      if (!this.renderFrame) {
        this.renderFrame = requestAnimationFrame(function () {
          _this10.render();
        });
      }
      return this;
    }

    /**
     * Method used to schedule a refresh (i.e. fully reprocess graph data and render)
     * at the next available frame.
     * This method can be safely called on a same frame because it basically
     * debounces refresh to the next frame.
     *
     * @return {Sigma}
     */
  }, {
    key: "scheduleRefresh",
    value: function scheduleRefresh(opts) {
      return this.refresh(index._objectSpread2(index._objectSpread2({}, opts), {}, {
        schedule: true
      }));
    }

    /**
     * Method used to (un)zoom, while preserving the position of a viewport point.
     * Used for instance to zoom "on the mouse cursor".
     *
     * @param viewportTarget
     * @param newRatio
     * @return {CameraState}
     */
  }, {
    key: "getViewportZoomedState",
    value: function getViewportZoomedState(viewportTarget, newRatio) {
      var _this$camera$getState = this.camera.getState(),
        ratio = _this$camera$getState.ratio,
        angle = _this$camera$getState.angle,
        x = _this$camera$getState.x,
        y = _this$camera$getState.y;
      var _this$settings2 = this.settings,
        minCameraRatio = _this$settings2.minCameraRatio,
        maxCameraRatio = _this$settings2.maxCameraRatio;
      if (typeof maxCameraRatio === "number") newRatio = Math.min(newRatio, maxCameraRatio);
      if (typeof minCameraRatio === "number") newRatio = Math.max(newRatio, minCameraRatio);
      var ratioDiff = newRatio / ratio;
      var center = {
        x: this.width / 2,
        y: this.height / 2
      };
      var graphMousePosition = this.viewportToFramedGraph(viewportTarget);
      var graphCenterPosition = this.viewportToFramedGraph(center);
      return {
        angle: angle,
        x: (graphMousePosition.x - graphCenterPosition.x) * (1 - ratioDiff) + x,
        y: (graphMousePosition.y - graphCenterPosition.y) * (1 - ratioDiff) + y,
        ratio: newRatio
      };
    }

    /**
     * Method returning the abstract rectangle containing the graph according
     * to the camera's state.
     *
     * @return {object} - The view's rectangle.
     */
  }, {
    key: "viewRectangle",
    value: function viewRectangle() {
      var p1 = this.viewportToFramedGraph({
          x: 0,
          y: 0
        }),
        p2 = this.viewportToFramedGraph({
          x: this.width,
          y: 0
        }),
        h = this.viewportToFramedGraph({
          x: 0,
          y: this.height
        });
      return {
        x1: p1.x,
        y1: p1.y,
        x2: p2.x,
        y2: p2.y,
        height: p2.y - h.y
      };
    }

    /**
     * Method returning the coordinates of a point from the framed graph system to the viewport system. It allows
     * overriding anything that is used to get the translation matrix, or even the matrix itself.
     *
     * Be careful if overriding dimensions, padding or cameraState, as the computation of the matrix is not the lightest
     * of computations.
     */
  }, {
    key: "framedGraphToViewport",
    value: function framedGraphToViewport(coordinates) {
      var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !!override.graphDimensions;
      var matrix = override.matrix ? override.matrix : recomputeMatrix ? normalization.matrixFromCamera(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getStagePadding()) : this.matrix;
      var viewportPos = normalization.multiplyVec2(matrix, coordinates);
      return {
        x: (1 + viewportPos.x) * this.width / 2,
        y: (1 - viewportPos.y) * this.height / 2
      };
    }

    /**
     * Method returning the coordinates of a point from the viewport system to the framed graph system. It allows
     * overriding anything that is used to get the translation matrix, or even the matrix itself.
     *
     * Be careful if overriding dimensions, padding or cameraState, as the computation of the matrix is not the lightest
     * of computations.
     */
  }, {
    key: "viewportToFramedGraph",
    value: function viewportToFramedGraph(coordinates) {
      var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !override.graphDimensions;
      var invMatrix = override.matrix ? override.matrix : recomputeMatrix ? normalization.matrixFromCamera(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getStagePadding(), true) : this.invMatrix;
      var res = normalization.multiplyVec2(invMatrix, {
        x: coordinates.x / this.width * 2 - 1,
        y: 1 - coordinates.y / this.height * 2
      });
      if (isNaN(res.x)) res.x = 0;
      if (isNaN(res.y)) res.y = 0;
      return res;
    }

    /**
     * Method used to translate a point's coordinates from the viewport system (pixel distance from the top-left of the
     * stage) to the graph system (the reference system of data as they are in the given graph instance).
     *
     * This method accepts an optional camera which can be useful if you need to translate coordinates
     * based on a different view than the one being currently being displayed on screen.
     *
     * @param {Coordinates}                  viewportPoint
     * @param {CoordinateConversionOverride} override
     */
  }, {
    key: "viewportToGraph",
    value: function viewportToGraph(viewportPoint) {
      var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.normalizationFunction.inverse(this.viewportToFramedGraph(viewportPoint, override));
    }

    /**
     * Method used to translate a point's coordinates from the graph system (the reference system of data as they are in
     * the given graph instance) to the viewport system (pixel distance from the top-left of the stage).
     *
     * This method accepts an optional camera which can be useful if you need to translate coordinates
     * based on a different view than the one being currently being displayed on screen.
     *
     * @param {Coordinates}                  graphPoint
     * @param {CoordinateConversionOverride} override
     */
  }, {
    key: "graphToViewport",
    value: function graphToViewport(graphPoint) {
      var override = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.framedGraphToViewport(this.normalizationFunction(graphPoint), override);
    }

    /**
     * Method returning the distance multiplier between the graph system and the
     * viewport system.
     */
  }, {
    key: "getGraphToViewportRatio",
    value: function getGraphToViewportRatio() {
      var graphP1 = {
        x: 0,
        y: 0
      };
      var graphP2 = {
        x: 1,
        y: 1
      };
      var graphD = Math.sqrt(Math.pow(graphP1.x - graphP2.x, 2) + Math.pow(graphP1.y - graphP2.y, 2));
      var viewportP1 = this.graphToViewport(graphP1);
      var viewportP2 = this.graphToViewport(graphP2);
      var viewportD = Math.sqrt(Math.pow(viewportP1.x - viewportP2.x, 2) + Math.pow(viewportP1.y - viewportP2.y, 2));
      return viewportD / graphD;
    }

    /**
     * Method returning the graph's bounding box.
     *
     * @return {{ x: Extent, y: Extent }}
     */
  }, {
    key: "getBBox",
    value: function getBBox() {
      return this.nodeExtent;
    }

    /**
     * Method returning the graph's custom bounding box, if any.
     *
     * @return {{ x: Extent, y: Extent } | null}
     */
  }, {
    key: "getCustomBBox",
    value: function getCustomBBox() {
      return this.customBBox;
    }

    /**
     * Method used to override the graph's bounding box with a custom one. Give `null` as the argument to stop overriding.
     *
     * @return {Sigma}
     */
  }, {
    key: "setCustomBBox",
    value: function setCustomBBox(customBBox) {
      this.customBBox = customBBox;
      this.scheduleRender();
      return this;
    }

    /**
     * Method used to shut the container & release event listeners.
     *
     * @return {undefined}
     */
  }, {
    key: "kill",
    value: function kill() {
      // Emitting "kill" events so that plugins and such can cleanup
      this.emit("kill");

      // Releasing events
      this.removeAllListeners();

      // Releasing camera handlers
      this.unbindCameraHandlers();

      // Releasing DOM events & captors
      window.removeEventListener("resize", this.activeListeners.handleResize);
      this.mouseCaptor.kill();
      this.touchCaptor.kill();

      // Releasing graph handlers
      this.unbindGraphHandlers();

      // Releasing cache & state
      this.clearIndices();
      this.clearState();
      this.nodeDataCache = {};
      this.edgeDataCache = {};
      this.highlightedNodes.clear();

      // Clearing frames
      if (this.renderFrame) {
        cancelAnimationFrame(this.renderFrame);
        this.renderFrame = null;
      }
      if (this.renderHighlightedNodesFrame) {
        cancelAnimationFrame(this.renderHighlightedNodesFrame);
        this.renderHighlightedNodesFrame = null;
      }

      // Destroying canvases
      var container = this.container;
      while (container.firstChild) container.removeChild(container.firstChild);

      // Destroying remaining collections
      this.canvasContexts = {};
      this.webGLContexts = {};
      this.elements = {};

      // Kill programs:
      for (var type in this.nodePrograms) {
        this.nodePrograms[type].kill();
      }
      for (var _type8 in this.nodeHoverPrograms) {
        this.nodeHoverPrograms[_type8].kill();
      }
      for (var _type9 in this.edgePrograms) {
        this.edgePrograms[_type9].kill();
      }
      this.nodePrograms = {};
      this.nodeHoverPrograms = {};
      this.edgePrograms = {};

      // Kill all canvas/WebGL contexts
      for (var id in this.elements) {
        this.killLayer(id);
      }
    }

    /**
     * Method used to scale the given size according to the camera's ratio, i.e.
     * zooming state.
     *
     * @param  {number?} size -        The size to scale (node size, edge thickness etc.).
     * @param  {number?} cameraRatio - A camera ratio (defaults to the actual camera ratio).
     * @return {number}              - The scaled size.
     */
  }, {
    key: "scaleSize",
    value: function scaleSize() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var cameraRatio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.camera.ratio;
      return size / this.settings.zoomToSizeRatioFunction(cameraRatio) * (this.getSetting("itemSizesReference") === "positions" ? cameraRatio * this.graphToViewportRatio : 1);
    }

    /**
     * Method that returns the collection of all used canvases.
     * At the moment, the instantiated canvases are the following, and in the
     * following order in the DOM:
     * - `edges`
     * - `nodes`
     * - `edgeLabels`
     * - `labels`
     * - `hovers`
     * - `hoverNodes`
     * - `mouse`
     *
     * @return {PlainObject<HTMLCanvasElement>} - The collection of canvases.
     */
  }, {
    key: "getCanvases",
    value: function getCanvases() {
      var res = {};
      for (var layer in this.elements) if (this.elements[layer] instanceof HTMLCanvasElement) res[layer] = this.elements[layer];
      return res;
    }
  }]);
  return Sigma;
}(types_dist_sigmaTypes.TypedEventEmitter);

/**
 * Sigma.js Library Endpoint
 * =========================
 *
 * The library endpoint.
 * @module
 */
var Sigma = Sigma$1;

exports.Camera = Camera;
exports.MouseCaptor = MouseCaptor;
exports.Sigma = Sigma$1;
exports.TouchCaptor = TouchCaptor;
exports["default"] = Sigma;
