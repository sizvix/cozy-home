/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"intents": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors","app~intents"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("201c");
module.exports = __webpack_require__("d/w2");


/***/ }),

/***/ "8EAv":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"spin":"spin--1tM1P"};

/***/ }),

/***/ "Go3M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XOpu");
/* harmony import */ var _containers_AccountConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wiYS");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/MKj");
/* harmony import */ var _ducks_connections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4YEU");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cokx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var CreateAccountService =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CreateAccountService, _React$Component);

  function CreateAccountService(props, context) {
    var _this;

    _classCallCheck(this, CreateAccountService);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CreateAccountService).call(this, props, context));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSuccess", function (account) {
      _this.props.endCreation();

      _this.props.onSuccess(account);
    });

    var t = props.t,
        konnector = props.konnector;
    var values = {};

    if (konnector.fields && konnector.fields.advancedFields && konnector.fields.advancedFields.folderPath || konnector.fields && konnector.folderPath) {
      values.folderPath = t('account.config.default_folder', {
        name: konnector.name
      });
    }

    _this.setState({
      values: values
    });

    _this.props.startCreation(_this.props.konnector);

    return _this;
  }

  _createClass(CreateAccountService, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          konnector = _this$props.konnector,
          t = _this$props.t;
      var values = this.state.values;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "coz-service-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_AccountConnection__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        connector: konnector,
        onDone: this.onSuccess,
        successButtonLabel: t('intent.service.success.button.label'),
        values: values
      }, this.props)));
    }
  }]);

  return CreateAccountService;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  // infos from route parameters
  var konnector = ownProps.konnector;
  var createdAccount = Object(_reducers__WEBPACK_IMPORTED_MODULE_5__["getCreatedConnectionAccount"])(state);
  var trigger = Object(_reducers__WEBPACK_IMPORTED_MODULE_5__["getTriggerByKonnectorAndAccount"])(state, konnector, createdAccount);
  return {
    createdAccount: createdAccount,
    isCreating: Object(_ducks_connections__WEBPACK_IMPORTED_MODULE_4__["isCreatingConnection"])(state.connections),
    isRunning: Object(_ducks_connections__WEBPACK_IMPORTED_MODULE_4__["isConnectionRunning"])(state.connections, trigger),
    trigger: trigger
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    startCreation: function startCreation() {
      return dispatch(Object(_ducks_connections__WEBPACK_IMPORTED_MODULE_4__["startConnectionCreation"])(ownProps.konnector));
    },
    endCreation: function endCreation() {
      return dispatch(Object(_ducks_connections__WEBPACK_IMPORTED_MODULE_4__["endConnectionCreation"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__["translate"])()(CreateAccountService)));

/***/ }),

/***/ "XSRU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/MKj");
/* harmony import */ var _components_intents_CreateAccountIntent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zlKK");
/* harmony import */ var _ducks_konnectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uZd2");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var IntentService =
/*#__PURE__*/
function (_Component) {
  _inherits(IntentService, _Component);

  function IntentService() {
    _classCallCheck(this, IntentService);

    return _possibleConstructorReturn(this, _getPrototypeOf(IntentService).apply(this, arguments));
  }

  _createClass(IntentService, [{
    key: "handleInstallationSuccess",
    value: function handleInstallationSuccess(konnector) {
      this.props.receiveKonnector(konnector);
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this$props, data, konnector, receiveKonnector, service, installedKonnector;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, data = _this$props.data, konnector = _this$props.konnector, receiveKonnector = _this$props.receiveKonnector, service = _this$props.service;

                if (!(service && !konnector)) {
                  _context.next = 8;
                  break;
                }

                _context.next = 4;
                return service.compose('INSTALL', 'io.cozy.apps', data);

              case 4:
                installedKonnector = _context.sent;

                if (installedKonnector) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", service.cancel());

              case 7:
                receiveKonnector(installedKonnector);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "onError",
    value: function onError(error) {
      this.setState({
        error: error
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          appData = _this$props2.appData,
          konnector = _this$props2.konnector,
          onCancel = _this$props2.onCancel,
          service = _this$props2.service;
      var error = this.state.error;
      var t = this.context.t;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "coz-service"
      }, error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "coz-error coz-service-error"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, t(error.message)), error.reason && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, t('intent.service.error.cause', {
        error: error.reason
      }))), !error && konnector && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_intents_CreateAccountIntent__WEBPACK_IMPORTED_MODULE_3__["default"], {
        appData: appData,
        konnector: konnector,
        onCancel: onCancel,
        onTerminate: service.terminate
      }));
    }
  }]);

  return IntentService;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    receiveKonnector: function receiveKonnector(konnector) {
      return dispatch(Object(_ducks_konnectors__WEBPACK_IMPORTED_MODULE_4__["receiveInstalledKonnector"])(konnector));
    }
  };
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var data = ownProps.data;
  var slug = data.slug;
  return {
    konnector: slug && Object(_ducks_konnectors__WEBPACK_IMPORTED_MODULE_4__["getKonnector"])(state.cozy, slug)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(IntentService));

/***/ }),

/***/ "d/w2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eO8H");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XOpu");
/* harmony import */ var store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cXEB");
/* harmony import */ var redux_cozy_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("m+TH");
/* harmony import */ var containers_IntentHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("jpY6");
/* harmony import */ var styles_intents_styl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("8EAv");
/* harmony import */ var styles_intents_styl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_intents_styl__WEBPACK_IMPORTED_MODULE_6__);








var lang = document.documentElement.getAttribute('lang') || 'en';
var context = window.context || 'cozy';
document.addEventListener('DOMContentLoaded', function () {
  var root = document.querySelector('[role=application]');
  var appData = root.dataset;
  var client = new redux_cozy_client__WEBPACK_IMPORTED_MODULE_4__["CozyClient"]({
    cozyURL: "//".concat(appData.cozyDomain),
    token: appData.cozyToken
  }); // store

  var store = Object(store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"])(client, context, {
    lang: lang
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_cozy_client__WEBPACK_IMPORTED_MODULE_4__["CozyProvider"], {
    store: store,
    client: client
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__["I18n"], {
    lang: lang,
    dictRequire: function dictRequire(lang) {
      return __webpack_require__("/KVF")("./".concat(lang));
    },
    context: context
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(containers_IntentHandler__WEBPACK_IMPORTED_MODULE_5__["default"], {
    appData: appData
  })))), document.querySelector('[role=application]'));
});

/***/ }),

/***/ "jpY6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_appEntryPoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mD6Q");
/* harmony import */ var _IntentService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XSRU");
/* harmony import */ var cozy_ui_react_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zGKU");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var IntentHandler =
/*#__PURE__*/
function (_Component) {
  _inherits(IntentHandler, _Component);

  function IntentHandler(props, context) {
    var _this;

    _classCallCheck(this, IntentHandler);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IntentHandler).call(this, props, context));
    _this.store = context.store;
    _this.state = {
      isInitializing: true
    };

    _this.store.createIntentService().then(function (service) {
      _this.setState({
        isInitializing: false,
        service: service
      });
    }).catch(function (error) {
      _this.setState({
        isInitializing: false,
        error: {
          message: 'intent.service.error.initialization',
          reason: error.message
        }
      });
    });

    return _this;
  }

  _createClass(IntentHandler, [{
    key: "terminate",
    value: function terminate(account) {
      var service = this.state.service;
      service.terminate(account);
    }
  }, {
    key: "cancel",
    value: function cancel() {
      var service = this.state.service;
      service.cancel();
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      this.setState({
        error: {
          message: 'intent.service.error.creation',
          reason: error.message
        }
      });
      throw error;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // const { data } = this.props
      var _this$props = this.props,
          appData = _this$props.appData,
          accounts = _this$props.accounts,
          konnectors = _this$props.konnectors,
          triggers = _this$props.triggers;
      var _this$state = this.state,
          error = _this$state.error,
          service = _this$state.service;
      var t = this.context.t;
      var isInitializing = this.state.isInitializing;
      isInitializing = isInitializing || [accounts, konnectors, triggers].find(function (collection) {
        return ['pending', 'loading'].includes(collection.fetchStatus);
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "coz-service"
      }, isInitializing && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "coz-service-loading"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Spinner__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: "xxlarge"
      })), error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "coz-error coz-service-error"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, t(error.message)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, t('intent.service.error.cause', {
        error: error.reason
      }))), !isInitializing && !error && // Here we should render a component based on the intent action.
      // For now, our action is only CREATE on io.cozy.accounts. So here
      // we should render a component named CreateAccountService.
      // IntentService is just here for legacy reason and should
      // disappear.
      // In the future we may test the intent action and render a
      // specific component for every action.
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IntentService__WEBPACK_IMPORTED_MODULE_2__["default"], {
        appData: appData,
        data: service.getData(),
        onTerminate: function onTerminate(account) {
          return _this2.terminate(account);
        },
        onCancel: function onCancel() {
          return _this2.cancel();
        },
        service: service
      }));
    }
  }]);

  return IntentHandler;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_appEntryPoint__WEBPACK_IMPORTED_MODULE_1__["default"])(IntentHandler));

/***/ }),

/***/ "zlKK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_services_CreateAccountService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Go3M");
/* harmony import */ var components_KonnectorHeaderIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("gAos");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var CreateAccountIntent =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateAccountIntent, _Component);

  function CreateAccountIntent(props, context) {
    var _this;

    _classCallCheck(this, CreateAccountIntent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CreateAccountIntent).call(this, props, context));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleConnectionSuccess", function () {
      _this.setState({
        isSuccess: true
      });
    });

    _this.store = _this.context.store;
    _this.state = {
      isSuccess: false
    };

    _this.store.fetchUrls();

    return _this;
  }

  _createClass(CreateAccountIntent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          konnector = _this$props.konnector,
          _onCancel = _this$props.onCancel,
          onTerminate = _this$props.onTerminate;
      var isSuccess = this.state.isSuccess;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-create-account-intent"
      }, !isSuccess && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_KonnectorHeaderIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        konnector: konnector,
        center: true
      }), konnector && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_services_CreateAccountService__WEBPACK_IMPORTED_MODULE_1__["default"], {
        konnector: konnector,
        onCancel: function onCancel() {
          return _onCancel();
        },
        onSuccess: onTerminate,
        closeModal: function closeModal() {
          return _onCancel();
        },
        handleConnectionSuccess: this.handleConnectionSuccess
      }));
    }
  }]);

  return CreateAccountIntent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateAccountIntent);

/***/ })

/******/ });
//# sourceMappingURL=home.intents.js.map