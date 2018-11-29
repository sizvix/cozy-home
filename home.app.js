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
/******/ 		"app": 0
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
/******/ 	deferredModules.push([1,"vendors","app~intents"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "/kYV":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"spin":"spin--2iFLV"};

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("201c");
__webpack_require__("Q+3J");
module.exports = __webpack_require__("LiWt");


/***/ }),

/***/ "1HPX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_connected_accounts_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("GuAq");
/* harmony import */ var _assets_images_connected_accounts_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_connected_accounts_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_fillWithGhostItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("r4jv");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/MKj");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("eO8H");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cokx");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("XOpu");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("xweI");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _KonnectorTile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("EoZk");
/* harmony import */ var _AddServiceTile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("9a/K");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var Services =
/*#__PURE__*/
function (_Component) {
  _inherits(Services, _Component);

  function Services() {
    _classCallCheck(this, Services);

    return _possibleConstructorReturn(this, _getPrototypeOf(Services).apply(this, arguments));
  }

  _createClass(Services, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          t = _this$props.t,
          installedKonnectors = _this$props.installedKonnectors;
      var hasConnections = !!installedKonnectors.length;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('services-list-wrapper', {
          'services-list-wrapper--empty': !hasConnections
        })
      }, hasConnections ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "list connector-list",
        "data-tutorial": "home-services"
      }, installedKonnectors.map(function (konnector, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_KonnectorTile__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: index,
          konnector: konnector,
          route: "connected/".concat(konnector.slug)
        });
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddServiceTile__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: t('add_service')
      }), Object(_helpers_fillWithGhostItems__WEBPACK_IMPORTED_MODULE_3__["default"])(6)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "connector-list col-empty-list"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-empty-list--img"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _assets_images_connected_accounts_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
        "data-tutorial": "home-services",
        alt: t('connector.empty')
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-empty-list--text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, t('connector.no-connectors-connected')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, t('connector.get-info')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
        to: "/providers/all",
        className: "col-button"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, t('connector.connect-account'))))));
    }
  }]);

  return Services;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    installedKonnectors: lodash_sortBy__WEBPACK_IMPORTED_MODULE_8___default()(Object(_reducers__WEBPACK_IMPORTED_MODULE_6__["getInstalledKonnectors"])(state), function (konnector) {
      return konnector.name;
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_7__["translate"])()(Services)));

/***/ }),

/***/ "2gMI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Failure", function() { return Failure; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XOpu");
/* harmony import */ var cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("VPDz");
/* harmony import */ var cozy_ui_react_Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sKMY");
/* harmony import */ var _assets_icons_color_default_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vBg4");






var reload = function reload() {
  window.location.reload();
};

var Failure = function Failure(_ref) {
  var t = _ref.t,
      errorType = _ref.errorType;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Empty__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: t("error.".concat(errorType)),
    icon: _assets_icons_color_default_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: t('error.button.reload'),
    onClick: reload
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__["translate"])()(Failure));

/***/ }),

/***/ "7e/N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPicker", function() { return AccountPicker; });
/* harmony import */ var _styles_accountPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dcof");
/* harmony import */ var _styles_accountPicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_accountPicker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/MKj");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XOpu");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cokx");
/* harmony import */ var _ducks_konnectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("uZd2");
/* harmony import */ var cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("B7OX");
/* harmony import */ var cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("WrkV");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("eO8H");
/* harmony import */ var _AccountPickerItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("WUx7");
/* harmony import */ var _KonnectorHeaderIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("gAos");
/* harmony import */ var _assets_sprites_icon_arrow_left_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("30Td");













var AccountPicker = function AccountPicker(_ref) {
  var t = _ref.t,
      connections = _ref.connections,
      history = _ref.history,
      konnector = _ref.konnector,
      match = _ref.match;
  var konnectorSlug = match.params.konnectorSlug;
  if (!connections.length) return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Redirect"], {
    to: "/connected/".concat(konnector.slug, "/new")
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    dismissAction: function dismissAction() {
      return history.push('/connected');
    },
    mobileFullscreen: true
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_8__["ModalHeader"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-account-connection-header"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["NavLink"], {
    to: "/connected",
    className: "col-account-connection-back"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    icon: _assets_sprites_icon_arrow_left_svg__WEBPACK_IMPORTED_MODULE_12__["default"]
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_KonnectorHeaderIcon__WEBPACK_IMPORTED_MODULE_11__["default"], {
    konnector: konnector
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_8__["ModalContent"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: _styles_accountPicker__WEBPACK_IMPORTED_MODULE_0___default.a[classnames__WEBPACK_IMPORTED_MODULE_1___default()('col-account-picker')]
  }, connections.map(function (connection, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_AccountPickerItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
      konnectorSlug: konnectorSlug,
      connection: connection
    }));
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["NavLink"], {
    to: "/connected/".concat(konnectorSlug, "/new"),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_accountPicker__WEBPACK_IMPORTED_MODULE_0___default.a['col-account-picker-button'], _styles_accountPicker__WEBPACK_IMPORTED_MODULE_0___default.a['col-account-picker-button-add'])
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
    icon: "plus"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, t('account_picker.add_account_button.label'))))))));
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var konnectorSlug = ownProps.match.params.konnectorSlug;
  return {
    connections: Object(_reducers__WEBPACK_IMPORTED_MODULE_5__["getConnectionsByKonnector"])(state, konnectorSlug),
    konnector: Object(_ducks_konnectors__WEBPACK_IMPORTED_MODULE_6__["getKonnector"])(state.cozy, konnectorSlug)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_4__["translate"])()(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(AccountPicker))));

/***/ }),

/***/ "9a/K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServiceTile", function() { return AddServiceTile; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("B7OX");
/* harmony import */ var _assets_icons_icon_plus_add_service_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Whkz");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/* global cozy */



var AddServiceTile =
/*#__PURE__*/
function (_Component) {
  _inherits(AddServiceTile, _Component);

  function AddServiceTile(props) {
    var _this;

    _classCallCheck(this, AddServiceTile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddServiceTile).call(this, props));
    _this.state = {
      redirecting: false
    };
    _this.toggleRedirect = _this.toggleRedirect.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(AddServiceTile, [{
    key: "toggleRedirect",
    value: function () {
      var _toggleRedirect = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.state.redirecting) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                // don't toggle twice
                this.setState(function () {
                  return {
                    redirecting: true
                  };
                });
                _context.prev = 3;
                _context.next = 6;
                return cozy.client.intents.redirect('io.cozy.apps', {
                  type: 'konnector'
                });

              case 6:
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](3);
                // eslint-disable-next-line no-console
                console.error(_context.t0);
                this.setState({
                  redirecting: false
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 8]]);
      }));

      return function toggleRedirect() {
        return _toggleRedirect.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var label = this.props.label;
      var redirecting = this.state.redirecting;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "aria-busy": redirecting,
        className: "item-wrapper --add-service",
        onClick: this.toggleRedirect
      }, redirecting ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        icon: "spinner",
        className: "item-icon",
        color: "grey",
        spin: true
      }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-icon"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        icon: _assets_icons_icon_plus_add_service_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "item-title"
      }, label));
    }
  }]);

  return AddServiceTile;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (AddServiceTile);

/***/ }),

/***/ "BQC9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Notifier; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var createStore = function createStore() {
  var notifications = [];
  var listeners = [];

  var dispatch = function dispatch(notification) {
    notification.id = notifications.length;
    notifications.push(notification);
    listeners.forEach(function (listener) {
      return listener(notification);
    });
  };

  var subscribe = function subscribe(listener) {
    listeners.push(listener);
  };

  return {
    dispatch: dispatch,
    subscribe: subscribe
  };
};

var store = createStore();

var Notification =
/*#__PURE__*/
function (_Component) {
  _inherits(Notification, _Component);

  function Notification() {
    _classCallCheck(this, Notification);

    return _possibleConstructorReturn(this, _getPrototypeOf(Notification).apply(this, arguments));
  }

  _createClass(Notification, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      this.close = this.close.bind(this);
      this.closeTimer = setTimeout(function () {
        _this.beginClosing();
      }, 2000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.base.removeEventListener('transitionend', this.close, false);
      this.base.classList.remove('coz-notification--closing');

      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
      }
    }
  }, {
    key: "beginClosing",
    value: function beginClosing() {
      this.base.addEventListener('transitionend', this.close, false);
      this.base.classList.add('coz-notification--closing');
    }
  }, {
    key: "close",
    value: function close() {
      this.props.onClose();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          message = _this$props.message,
          details = _this$props.details,
          type = _this$props.type;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: ['coz-notification', 'coz-notification--' + type].join(' ')
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "coz-notification-title"
      }, message), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "coz-notification-details"
      }, details));
    }
  }]);

  return Notification;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Notifier =
/*#__PURE__*/
function (_Component2) {
  _inherits(Notifier, _Component2);

  function Notifier(props, context) {
    var _this2;

    _classCallCheck(this, Notifier);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Notifier).call(this, props, context));
    _this2.state = {
      notifications: []
    };
    return _this2;
  }

  _createClass(Notifier, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      store.subscribe(this.notify.bind(this));
    }
  }, {
    key: "notify",
    value: function notify(notification) {
      this.setState({
        notifications: _toConsumableArray(this.state.notifications).concat([notification])
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose(id) {
      var idx = this.state.notifications.findIndex(function (n) {
        return n.id === id;
      });
      this.setState({
        notifications: _toConsumableArray(this.state.notifications.slice(0, idx)).concat(_toConsumableArray(this.state.notifications.slice(idx + 1)))
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "coz-notifier"
      }, this.state.notifications.map(function (notif, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Notification, {
          key: index,
          type: notif.type,
          message: notif.msg,
          details: notif.details,
          onClose: function onClose() {
            return _this3.handleClose(notif.id);
          }
        });
      }));
    }
  }], [{
    key: "info",
    value: function info(msg, details) {
      store.dispatch({
        type: 'info',
        msg: msg,
        details: details
      });
    }
  }, {
    key: "warning",
    value: function warning(msg) {
      store.dispatch({
        type: 'warning',
        msg: msg
      });
    }
  }, {
    key: "error",
    value: function error(msg) {
      store.dispatch({
        type: 'error',
        msg: msg
      });
    }
  }]);

  return Notifier;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "Dcof":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"col-account-picker-button":"col-account-picker-button--ybID4","spin":"spin--Ip5NT","u-visuallyhidden":"u-visuallyhidden--3j3b-","u-hide":"u-hide--3LpV3","u-hide--mob":"u-hide--mob--SiTiX","u-hide--tablet":"u-hide--tablet--1yMOp","u-hide--desk":"u-hide--desk--8f5Pj","u-error":"u-error--38aWA","u-error--warning":"u-error--warning--jzl_A","u-valid":"u-valid--3QN49","u-warn":"u-warn--2jhVk","u-black":"u-black--3MYsQ","u-white":"u-white--tsP8v","u-paleGrey":"u-paleGrey--1PGUH","u-silver":"u-silver--bakfl","u-coolGrey":"u-coolGrey--3LwQh","u-slateGrey":"u-slateGrey--2wCEx","u-charcoalGrey":"u-charcoalGrey--pErDv","u-overlay":"u-overlay--3-O5R","u-zircon":"u-zircon--P8V-b","u-frenchPass":"u-frenchPass--1LaRU","u-dodgerBlue":"u-dodgerBlue--22y6-","u-scienceBlue":"u-scienceBlue--kYUJu","u-puertoRico":"u-puertoRico--3s_5h","u-emerald":"u-emerald--3rJ-4","u-malachite":"u-malachite--gM1zx","u-texasRose":"u-texasRose--3TW3K","u-chablis":"u-chablis--2z0dY","u-yourPink":"u-yourPink--25Npi","u-pomegranate":"u-pomegranate--3fhpL","u-monza":"u-monza--3jPCO","u-portage":"u-portage--3-tMx","u-azure":"u-azure--34TS2","u-melon":"u-melon--NYrUk","u-blazeOrange":"u-blazeOrange--1CdME","u-mango":"u-mango--36-ts","u-pumpkinOrange":"u-pumpkinOrange--2yprU","u-darkPeriwinkle":"u-darkPeriwinkle--2G_Qk","u-purpley":"u-purpley--7j64C","u-lightishPurple":"u-lightishPurple--3we8f","u-barney":"u-barney--2Yak1","u-weirdGreen":"u-weirdGreen--33SZV","u-ellipsis":"u-ellipsis--1JFZi","u-midellipsis":"u-midellipsis--2uYVA","col-account-picker-header-image":"col-account-picker-header-image--3QwvT","col-account-picker":"col-account-picker--1LNiV","col-account-picker-button-account":"col-account-picker-button-account--EE-0p","col-account-picker-button-infos":"col-account-picker-button-infos--1dKhM","col-account-picker-button-error":"col-account-picker-button-error--3QnvX","col-account-picker-button-add":"col-account-picker-button-add--S2dkR"};

/***/ }),

/***/ "EoZk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/MKj");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XOpu");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cozy_ui_react_AppIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ArIv");
/* harmony import */ var cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("B7OX");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("eO8H");
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("OSTS");
/* harmony import */ var _lib_konnectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("8CvS");
/* harmony import */ var _ducks_connections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4YEU");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("cokx");
/* harmony import */ var _assets_icons_broken_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("tc/c");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














var getKonnectorError = function getKonnectorError(_ref) {
  var error = _ref.error,
      t = _ref.t;
  return error ? Object(_lib_konnectors__WEBPACK_IMPORTED_MODULE_8__["getErrorTitle"])(t, error, function (key) {
    return "connection.error.".concat(key, ".title");
  }) : null;
};

var getErrorClass = function getErrorClass(_ref2) {
  var accountsCount = _ref2.accountsCount,
      error = _ref2.error,
      hide = _ref2.hide,
      userError = _ref2.userError;
  if (hide) return ''; // userError must be checked first as it is also an error.

  if (userError) {
    return 'konnector-error konnector-error--connection';
  }

  if (error) {
    return 'konnector-error konnector-error--blocked';
  }

  if (!accountsCount) {
    return 'konnector-error konnector-error--no-accounts';
  }

  return null;
};

var KonnectorTile =
/*#__PURE__*/
function (_Component) {
  _inherits(KonnectorTile, _Component);

  function KonnectorTile() {
    _classCallCheck(this, KonnectorTile);

    return _possibleConstructorReturn(this, _getPrototypeOf(KonnectorTile).apply(this, arguments));
  }

  _createClass(KonnectorTile, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          accountsCount = _this$props.accountsCount,
          error = _this$props.error,
          userError = _this$props.userError,
          konnector = _this$props.konnector,
          route = _this$props.route,
          t = _this$props.t;
      var features = this.context.features;
      var hideKonnectorErrors = features && features.includes('hide_konnector_errors');
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
        className: "item-wrapper",
        to: route,
        title: getKonnectorError({
          error: error,
          t: t
        })
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('item-icon', getErrorClass({
          accountsCount: accountsCount,
          error: error,
          hide: hideKonnectorErrors,
          userError: userError
        }))
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_AppIcon__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
        alt: t('app.logo.alt', {
          name: konnector.name
        }),
        app: konnector
      }, _lib_icons__WEBPACK_IMPORTED_MODULE_7__["appIconProps"])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        icon: _assets_icons_broken_svg__WEBPACK_IMPORTED_MODULE_11__["default"],
        className: "konnector-state"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "item-title"
      }, konnector.name));
    }
  }]);

  return KonnectorTile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state, props) {
  var konnector = props.konnector;
  return {
    // /!\ error can also be a userError.
    error: Object(_ducks_connections__WEBPACK_IMPORTED_MODULE_9__["getFirstError"])(state.connections, konnector.slug),
    userError: Object(_ducks_connections__WEBPACK_IMPORTED_MODULE_9__["getFirstUserError"])(state.connections, konnector.slug),
    lastSyncDate: Object(_ducks_connections__WEBPACK_IMPORTED_MODULE_9__["getLastSyncDate"])(state.connections, konnector.slug),
    accountsCount: Object(_reducers__WEBPACK_IMPORTED_MODULE_10__["getKonnectorTriggersCount"])(state, konnector)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__["translate"])()(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(KonnectorTile))));

/***/ }),

/***/ "Fea+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XOpu");


var Loading = function Loading(_ref) {
  var t = _ref.t,
      loadingType = _ref.loadingType,
      noMargin = _ref.noMargin;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: noMargin ? 'coz-loading--no-margin' : 'coz-loading'
  }, loadingType && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, t("loading.".concat(loadingType))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__["translate"])()(Loading));

/***/ }),

/***/ "FwS1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"queue-item":"queue-item--2nmo3","item-ongoing":"item-ongoing--2I0wt","item-canceled":"item-canceled--66_hi","item-error":"item-error--2_nJo","item-conflict":"item-conflict--3fN_6","item-done":"item-done--3Ytt9","spin":"spin--2Rrql","queue":"queue--E5doD","queue--visible":"queue--visible--3kodM","queue-header":"queue-header--1xuYz","queue-header-inner":"queue-header-inner--2hQ34","btn-close":"btn-close--1_NjM","queue-progress":"queue-progress--3kjuG","queue-content":"queue-content--3aNvV","queue--collapsed":"queue--collapsed--aksIJ","queue-list":"queue-list--3gpgx","queue-item--error":"queue-item--error--11w-V","queue-item--done":"queue-item--done--fE0KV","queue-item-progress-bar":"queue-item-progress-bar--2-yvo","item-label":"item-label--1Q26g","item-ext":"item-ext--3RUut","item-status":"item-status--qmrpq","item-icon":"item-icon--2Q7Zb","item-icon-img":"item-icon-img--7qiT6","item-pending":"item-pending--1lCQW"};

/***/ }),

/***/ "GuAq":
/***/ (function(module, exports) {

module.exports = "/img/connected-accounts.svg";

/***/ }),

/***/ "IRSH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTutorial", function() { return isTutorial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "display", function() { return display; });
/* harmony import */ var intro_js_fix_cozy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xB5U");
/* harmony import */ var intro_js_fix_cozy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(intro_js_fix_cozy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_react_helpers_tracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZHai");


function isTutorial() {
  return window.location.pathname.endsWith('/intro');
}
function display(t) {
  var appsPanel = document.querySelectorAll('[data-tutorial=home-apps]')[0];
  var servicesPanel = document.querySelectorAll('[data-tutorial=home-services]')[0];

  for (var element in [appsPanel, servicesPanel]) {
    if (!element) throw new Error('Missing tutorial element.');
  }

  var trackerInstance = Object(cozy_ui_react_helpers_tracker__WEBPACK_IMPORTED_MODULE_1__["getTracker"])();
  var shouldTrackTutorial = Object(cozy_ui_react_helpers_tracker__WEBPACK_IMPORTED_MODULE_1__["shouldEnableTracking"])() && trackerInstance;
  var pageURLsForTracking = ['tutorial/automate', 'tutorial/apps', 'tutorial/complete'];
  var tutorial = Object(intro_js_fix_cozy__WEBPACK_IMPORTED_MODULE_0__["introJs"])();
  tutorial.setOptions({
    overlayOpacity: 0.75,
    showBullets: false,
    hidePrev: true,
    hideNext: true,
    exitOnEsc: false,
    exitOnOverlayClick: false,
    disableInteraction: true,
    doneLabel: "".concat(t('tutorial.home.services.button')),
    nextLabel: "".concat(t('tutorial.home.apps.button')),
    steps: [{
      element: appsPanel,
      intro: "<h1>".concat(t('tutorial.home.apps.title'), "</h1><div>").concat(t('tutorial.home.apps.text'), "</div>"),
      tooltipClass: 'tooltipApps',
      position: 'bottom'
    }, {
      element: servicesPanel,
      intro: "<h1>".concat(t('tutorial.home.services.title'), "</h1><div>").concat(t('tutorial.home.services.text'), "</div>"),
      position: 'bottom'
    }]
  }).onafterchange(function (targetElement) {
    if (shouldTrackTutorial) {
      var stepIndex;
      var steps = tutorial._options.steps;

      for (var i = 0, l = steps.length; i < l; ++i) {
        if (steps[i].element === targetElement) {
          stepIndex = i;
          break;
        }
      }

      var trackingURL = pageURLsForTracking[stepIndex];
      trackerInstance.push(['setCustomUrl', trackingURL]);
      trackerInstance.push(['trackPageView']);
    } // The intro.js button for the last step is hidden, so we need to show it when we arrive on it


    var doneButton = document.querySelectorAll('.introjs-donebutton')[0];
    if (!doneButton) return; // step 1, no done button yet

    if (targetElement.className === servicesPanel.className) {
      doneButton.classList.remove('introjs-skipbutton');
    } else {
      doneButton.classList.add('introjs-skipbutton');
    }
  }).oncomplete(function () {
    if (shouldTrackTutorial) {
      trackerInstance.push(['setCustomUrl', pageURLsForTracking[pageURLsForTracking.length - 1]]);
      trackerInstance.push(['trackPageView']);
    } // When a click occurs on the last tutorial button, it seems that there
    // is some kind of conflict or event capture that block the click() call
    // on cozyBarMenuButton. So we must delay a little bit this call. It is
    // really dirty and hackish and we should instead call directly a method
    // on the Cozy-Bar to show the app panel.


    setTimeout(function () {
      return servicesPanel.click();
    }, 10);
    window.location.hash = '#/connected';
  }).start();
  var clickZone = '.introjs-disableInteraction, .introjs-overlay, .introjs-tooltiptext, .introjs-tooltipbuttons';

  var clickAction = function clickAction(e) {
    if (e.target.tagName !== 'A') {
      e.stopPropagation();
      tutorial.nextStep();
    }
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = document.querySelectorAll(clickZone)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var elem = _step.value;
      elem.onclick = clickAction;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/***/ }),

/***/ "IiGW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTile", function() { return AppTile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("XOpu");
/* harmony import */ var cozy_ui_react_AppIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ArIv");
/* harmony import */ var lib_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("OSTS");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var AppTile =
/*#__PURE__*/
function (_Component) {
  _inherits(AppTile, _Component);

  function AppTile() {
    _classCallCheck(this, AppTile);

    return _possibleConstructorReturn(this, _getPrototypeOf(AppTile).apply(this, arguments));
  }

  _createClass(AppTile, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          app = _this$props.app,
          t = _this$props.t;
      var displayName = app.name_prefix ? "".concat(app.name_prefix, " ").concat(app.name) : app.name;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "item-wrapper",
        href: app.links && app.links.related
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-icon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_AppIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        alt: t('app.logo.alt', {
          name: displayName
        }),
        app: app
      }, lib_icons__WEBPACK_IMPORTED_MODULE_3__["appIconProps"]))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "item-title"
      }, displayName));
    }
  }]);

  return AppTile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_1__["translate"])()(AppTile));

/***/ }),

/***/ "LiWt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dasq");
/* harmony import */ var url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_search_params_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_cozy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("m+TH");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("SH7X");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XOpu");
/* harmony import */ var lib_PiwikHashRouter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ygPf");
/* harmony import */ var config_collect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("qgiu");
var config_collect__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t("qgiu", 1);
/* harmony import */ var store_configureStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cXEB");
/* harmony import */ var intro_js_fix_cozy_minified_introjs_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("MkRj");
/* harmony import */ var intro_js_fix_cozy_minified_introjs_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(intro_js_fix_cozy_minified_introjs_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styles_index_styl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("/kYV");
/* harmony import */ var styles_index_styl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styles_index_styl__WEBPACK_IMPORTED_MODULE_9__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global cozy */











var lang = document.documentElement.getAttribute('lang') || 'en';
var context = window.context || 'cozy';

var handleOAuthResponse = function handleOAuthResponse() {
  /* global URLSearchParams */
  var queryParams = new URLSearchParams(window.location.search);

  if (queryParams.get('account')) {
    var opener = window.opener;
    var accountKey = queryParams.get('account');
    var OAuthStateKey = queryParams.get('state');
    var targetOrigin = window.location.origin || "".concat(window.location.protocol, "//").concat(window.location.hostname).concat(window.location.port ? ':' + window.location.port : '');
    opener.postMessage({
      key: accountKey,
      OAuthStateKey: OAuthStateKey
    }, targetOrigin);
    window.close();
  }
};

document.addEventListener('DOMContentLoaded', function () {
  handleOAuthResponse();
  var root = document.querySelector('[role=application]');
  var data = root.dataset;
  var client = new redux_cozy_client__WEBPACK_IMPORTED_MODULE_2__["CozyClient"]({
    cozyURL: "//".concat(data.cozyDomain),
    token: data.cozyToken
  }); // New improvements must be done with CozyClient

  var cozyClient = new cozy_client__WEBPACK_IMPORTED_MODULE_3___default.a({
    uri: "//".concat(data.cozyDomain),
    token: data.cozyToken
  });
  cozy.bar.init({
    appEditor: data.cozyAppEditor,
    appName: data.cozyAppName,
    iconPath: data.cozyIconPath,
    lang: data.cozyLocale,
    replaceTitleOnMobile: false
  }); // store

  var store = Object(store_configureStore__WEBPACK_IMPORTED_MODULE_7__["default"])(client, context, _objectSpread({
    lang: lang
  }, config_collect__WEBPACK_IMPORTED_MODULE_6__));

  var dictRequire = function dictRequire(lang) {
    return __webpack_require__("/KVF")("./".concat(lang));
  };

  var App = __webpack_require__("bRzR").default;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_client__WEBPACK_IMPORTED_MODULE_3__["CozyProvider"], {
    client: cozyClient
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(redux_cozy_client__WEBPACK_IMPORTED_MODULE_2__["CozyProvider"], {
    store: store,
    client: cozyClient
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_4__["default"], {
    lang: lang,
    dictRequire: dictRequire,
    context: context
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(lib_PiwikHashRouter__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, config_collect__WEBPACK_IMPORTED_MODULE_6__))))), document.querySelector('[role=application]'));
});

/***/ }),

/***/ "NfqR":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"coz-loading-placeholder":"coz-loading-placeholder--iKREi","placeHolderShimmer":"placeHolderShimmer--25Y66"};

/***/ }),

/***/ "RJDI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_connectionManagement_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aEcG");
/* harmony import */ var _styles_connectionManagement_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_connectionManagement_styl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_cozy_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("m+TH");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/MKj");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("eO8H");
/* harmony import */ var _ducks_accounts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3dAU");
/* harmony import */ var _ducks_connections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4YEU");
/* harmony import */ var _ducks_konnectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("uZd2");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cokx");
/* harmony import */ var cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("B7OX");
/* harmony import */ var cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("WrkV");
/* harmony import */ var _AccountConnection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("wiYS");
/* harmony import */ var _components_KonnectorHeaderIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("gAos");
/* harmony import */ var _components_Notifier__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("BQC9");
/* harmony import */ var _assets_sprites_icon_arrow_left_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("30Td");
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

















var ConnectionManagement =
/*#__PURE__*/
function (_Component) {
  _inherits(ConnectionManagement, _Component);

  function ConnectionManagement(props, context) {
    var _this;

    _classCallCheck(this, ConnectionManagement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConnectionManagement).call(this, props, context));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onEnd", function () {
      var _this$props = _this.props,
          endCreation = _this$props.endCreation,
          isCreating = _this$props.isCreating;

      if (isCreating) {
        typeof endCreation === 'function' && endCreation();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleConnectionSuccess", function () {
      _this.setState({
        isSuccess: true
      });
    });

    _this.store = _this.context.store;
    var existingAccount = props.existingAccount,
        createdAccount = props.createdAccount,
        konnector = props.konnector;
    var account = existingAccount || createdAccount; // Set values

    var values = account && Object.assign({}, account.auth) || {}; // Split the actual folderPath account to get namePath & folderPath values

    if (account && values.folderPath) {
      values.folderPath = account.auth.folderPath.substring(0, account.auth.folderPath.lastIndexOf('/'));
      values.namePath = account.auth.namePath;
    } else if (!account && konnector && konnector.fields && konnector.fields.advancedFields && konnector.fields.advancedFields.folderPath || !account && konnector && konnector.fields && konnector.folderPath) {
      values.folderPath = _this.context.t('account.config.default_folder', {
        name: konnector.name
      });
    }

    _this.state = {
      isClosing: false,
      isSuccess: false,
      values: values
    };

    if (konnector) {
      _this.store.fetchUrls();

      if (!_this.props.existingAccount) {
        if (_this.props.isCreating) {
          // eslint-disable-next-line no-console
          console.warn('Unexpected state: connection creation already in progress');
        } else {
          _this.props.startCreation();
        }
      }
    } else {
      return _possibleConstructorReturn(_this, _this.gotoParent());
    }

    return _this;
  }

  _createClass(ConnectionManagement, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.UNSAFE_componentWillReceiveProps(props);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var isInvalidKonnectorSlug = nextProps.match && nextProps.match.params.konnectorSlug && !nextProps.konnector;

      if (isInvalidKonnectorSlug) {
        // eslint-disable-next-line no-console
        console.warn('Invalid konnector slug');
        return this.gotoParent();
      }

      var isInvalidAccountId = nextProps.match && nextProps.match.params.accountId && !nextProps.existingAccount;

      if (isInvalidAccountId) {
        // eslint-disable-next-line no-console
        console.warn('Invalid account id');
        return this.gotoParent();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          connections = _this$props2.connections,
          createdAccount = _this$props2.createdAccount,
          existingAccount = _this$props2.existingAccount,
          konnector = _this$props2.konnector; // Do not even render if there is no konnector (in case of wrong URL)

      if (!konnector) return;
      var _this$state = this.state,
          isClosing = _this$state.isClosing,
          values = _this$state.values,
          isSuccess = _this$state.isSuccess;
      var backRoute = connections.length ? "/connected/".concat(konnector.slug) : '/connected';
      var editing = existingAccount && !createdAccount;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_10__["default"], {
        dismissAction: function dismissAction() {
          return _this2.gotoParent();
        },
        mobileFullscreen: true,
        size: "large",
        className: _styles_connectionManagement_styl__WEBPACK_IMPORTED_MODULE_0___default.a['col-account-modal']
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_10__["ModalHeader"], {
        className: isSuccess ? _styles_connectionManagement_styl__WEBPACK_IMPORTED_MODULE_0___default.a['col-account-success-header'] : ''
      }, !isSuccess && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-account-connection-header"
      }, backRoute && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
        to: backRoute,
        className: "col-account-connection-back",
        onClick: this.onEnd
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], {
        icon: _assets_sprites_icon_arrow_left_svg__WEBPACK_IMPORTED_MODULE_14__["default"]
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_KonnectorHeaderIcon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        konnector: konnector,
        center: !editing
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Modal__WEBPACK_IMPORTED_MODULE_10__["ModalContent"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AccountConnection__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({
        alertDeleteSuccess: function alertDeleteSuccess(messages) {
          return _this2.alertDeleteSuccess(messages);
        },
        displayAccountsCount: true,
        editing: editing,
        onDone: function onDone() {
          return _this2.gotoParent();
        },
        onCancel: function onCancel() {
          return _this2.gotoParent();
        },
        isUnloading: isClosing,
        values: values,
        closeModal: function closeModal() {
          return _this2.gotoParent();
        },
        isClosing: isClosing,
        handleConnectionSuccess: this.handleConnectionSuccess
      }, this.props, this.context))));
    }
  }, {
    key: "alertDeleteSuccess",
    value: function alertDeleteSuccess(messages) {
      var t = this.context.t;
      _components_Notifier__WEBPACK_IMPORTED_MODULE_13__["default"].info([messages.map(function (item) {
        return t(item.message, item.params);
      }).join('.\n')]);
      this.gotoParent();
    }
  }, {
    key: "gotoParent",
    value: function gotoParent() {
      var _this3 = this;

      this.setState({
        isClosing: true,
        isSuccess: false
      }); // The setTimeout allows React to perform setState related actions

      setTimeout(function () {
        var router = _this3.context.router;
        var originPath = _this3.props.originPath;

        if (originPath) {
          var params = _this3.props.match.params;
          var resolvedOriginPath = Object.keys(params).filter(function (param) {
            return typeof params[param] === 'string';
          }) // Sort params from longest string to shortest string to avoid
          // unexpected replacements like :test in :test2.
          .sort(function (a, b) {
            return a.length === b.length ? 0 : a.length > b.length ? -1 : 1;
          }).reduce(function (path, param) {
            return path.replace(":".concat(param), params[param]);
          }, originPath);
          router.history.push(resolvedOriginPath);
        } else {
          var url = router.history.location.pathname;
          router.history.push(url.substring(0, url.lastIndexOf('/')));
        }

        if (_this3.props.isCreating) {
          _this3.props.endCreation();
        }
      }, 0);
    }
  }]);

  return ConnectionManagement;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapActionsToProps = function mapActionsToProps() {
  return {};
}; // Accéder au state depuis ici ?


var mapDocumentsToProps = function mapDocumentsToProps() {
  return {// konnector: fetchRegistryKonnectorBySlug(ownProps.params.connectorSlug)
    // existingAccount: fetchAccount(ownProps.accountId)
  };
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  // infos from route parameters
  var _ref = ownProps.match && ownProps.match.params,
      accountId = _ref.accountId,
      konnectorSlug = _ref.konnectorSlug;

  var konnector = Object(_ducks_konnectors__WEBPACK_IMPORTED_MODULE_7__["getKonnector"])(state.cozy, konnectorSlug);
  var existingAccount = Object(_ducks_accounts__WEBPACK_IMPORTED_MODULE_5__["getAccount"])(state.cozy, accountId);
  var createdAccount = Object(_reducers__WEBPACK_IMPORTED_MODULE_8__["getCreatedConnectionAccount"])(state);
  var trigger = Object(_reducers__WEBPACK_IMPORTED_MODULE_8__["getTriggerByKonnectorAndAccount"])(state, konnector, existingAccount || createdAccount);
  var maintenance = Object(_reducers__WEBPACK_IMPORTED_MODULE_8__["getKonnectorsInMaintenance"])();
  return {
    connections: Object(_reducers__WEBPACK_IMPORTED_MODULE_8__["getConnectionsByKonnector"])(state, konnectorSlug),
    createdAccount: createdAccount,
    existingAccount: existingAccount,
    isCreating: Object(_ducks_connections__WEBPACK_IMPORTED_MODULE_6__["isCreatingConnection"])(state.connections),
    konnector: konnector,
    isRunning: Object(_ducks_connections__WEBPACK_IMPORTED_MODULE_6__["isConnectionRunning"])(state.connections, trigger),
    lastSuccess: Object(_ducks_connections__WEBPACK_IMPORTED_MODULE_6__["getTriggerLastSuccess"])(state.cozy, trigger),
    trigger: trigger,
    maintenance: maintenance
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    startCreation: function startCreation() {
      return dispatch(Object(_ducks_connections__WEBPACK_IMPORTED_MODULE_6__["startConnectionCreation"])(ownProps.konnector));
    },
    endCreation: function endCreation() {
      return dispatch(Object(_ducks_connections__WEBPACK_IMPORTED_MODULE_6__["endConnectionCreation"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Object(redux_cozy_client__WEBPACK_IMPORTED_MODULE_2__["cozyConnect"])(mapDocumentsToProps, mapActionsToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(ConnectionManagement))));

/***/ }),

/***/ "Uedh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eO8H");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cozy_ui_react_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("e2oC");
/* harmony import */ var _lib_tutorial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("IRSH");
/* harmony import */ var _Applications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("zvYt");
/* harmony import */ var _containers_ConnectionManagement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("RJDI");
/* harmony import */ var _ScrollToTopOnMount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("YVnf");
/* harmony import */ var _AccountPicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("7e/N");
/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("1HPX");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("XOpu");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.launchTutorial();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.UNSAFE_componentWillReceiveProps(props);
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps() {
      this.launchTutorial();
    }
  }, {
    key: "launchTutorial",
    value: function launchTutorial() {
      var _this = this;

      if (Object(_lib_tutorial__WEBPACK_IMPORTED_MODULE_4__["isTutorial"])()) {
        window.history.pushState({}, '', "/".concat(window.location.hash));
        setTimeout(function () {
          Object(_lib_tutorial__WEBPACK_IMPORTED_MODULE_4__["display"])(_this.props.t);
        }, 1000);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var wrapper = this.props.wrapper;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Layout__WEBPACK_IMPORTED_MODULE_3__["Main"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScrollToTopOnMount__WEBPACK_IMPORTED_MODULE_7__["default"], {
        target: wrapper
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Layout__WEBPACK_IMPORTED_MODULE_3__["Content"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('col-content', {
          'has-custom-background': false
        })
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Applications__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services__WEBPACK_IMPORTED_MODULE_9__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/connected/:konnectorSlug",
        component: _AccountPicker__WEBPACK_IMPORTED_MODULE_8__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/connected/:konnectorSlug/new",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_ConnectionManagement__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
            originPath: "/connected"
          }, props));
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/connected/:konnectorSlug/accounts/:accountId",
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_ConnectionManagement__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
            originPath: "/connected"
          }, props));
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        from: "/connected/*",
        to: "/connected"
      })));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_10__["translate"])()(Home)));

/***/ }),

/***/ "WUx7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPickerItem", function() { return AccountPickerItem; });
/* harmony import */ var _styles_accountPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dcof");
/* harmony import */ var _styles_accountPicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_accountPicker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/MKj");
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XOpu");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("eO8H");
/* harmony import */ var cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("B7OX");
/* harmony import */ var cozy_ui_react_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("zGKU");
/* harmony import */ var _ducks_accounts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("3dAU");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("e0hG");
/* harmony import */ var _lib_konnectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("8CvS");











var AccountPickerItem = function AccountPickerItem(_ref) {
  var t = _ref.t,
      connection = _ref.connection,
      konnectorSlug = _ref.konnectorSlug,
      account = _ref.account;
  var error = connection.error,
      hasError = connection.hasError,
      isRunning = connection.isRunning,
      isConnected = connection.isConnected;
  var accountName = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_9__["getAccountName"])(account);
  var accountLogin = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_9__["getAccountLogin"])(account);
  var nameAndLoginDiffer = accountName !== accountLogin;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["NavLink"], {
    to: "/connected/".concat(konnectorSlug, "/accounts/").concat(account._id),
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_accountPicker__WEBPACK_IMPORTED_MODULE_0___default.a['col-account-picker-button'], _styles_accountPicker__WEBPACK_IMPORTED_MODULE_0___default.a['col-account-picker-button-account'])
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _styles_accountPicker__WEBPACK_IMPORTED_MODULE_0___default.a['col-account-picker-button-infos']
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, accountName), nameAndLoginDiffer && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", null, accountLogin)), hasError && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _styles_accountPicker__WEBPACK_IMPORTED_MODULE_0___default.a['col-account-picker-button-error']
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, Object(_lib_konnectors__WEBPACK_IMPORTED_MODULE_10__["getErrorTitle"])(t, error, function (key) {
    return "connection.error.".concat(key, ".title");
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: "warning"
  })), isConnected && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_react_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    icon: "check-circleless",
    color: "#2BBA40"
  }), isRunning && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(cozy_ui_react_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    account: Object(_ducks_accounts__WEBPACK_IMPORTED_MODULE_8__["getAccount"])(state.cozy, ownProps.connection && ownProps.connection.account)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_4__["translate"])()(AccountPickerItem)));

/***/ }),

/***/ "Whkz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icon-plus-add-service_68a756d0bf7531bb9a93fac1220bef28",
  "use": "icon-plus-add-service_68a756d0bf7531bb9a93fac1220bef28-usage",
  "viewBox": "0 0 56 56",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 56 56\" id=\"icon-plus-add-service_68a756d0bf7531bb9a93fac1220bef28\">\n<style type=\"text/css\">\n\t#icon-plus-add-service_68a756d0bf7531bb9a93fac1220bef28 .st0{fill:none;stroke:#000000;stroke-width:5;stroke-linecap:round;stroke-miterlimit:10;stroke-dasharray:9.7713,9.7713;}\n</style>\n<title>Group</title>\n<desc>Created with Sketch.</desc>\n<g id=\"icon-plus-add-service_68a756d0bf7531bb9a93fac1220bef28_icons_x2F_32_x2F_icon-plus\" transform=\"translate(14.000000, 14.000000)\">\n\t<g id=\"icon-plus-add-service_68a756d0bf7531bb9a93fac1220bef28_Mask\">\n\t\t<path id=\"icon-plus-add-service_68a756d0bf7531bb9a93fac1220bef28_path-3_1_\" d=\"M12.3,1.7c0,0-0.1-1.7,1.7-1.7s1.8,1.7,1.8,1.7v10.5h10.5c0,0,1.8,0,1.8,1.8s-1.8,1.8-1.8,1.8H15.7v10.5\n\t\t\tc0,0,0,1.8-1.8,1.8s-1.8-1.8-1.8-1.8V15.8H1.8c0,0-1.8,0-1.8-1.8s1.8-1.7,1.8-1.7h10.5V1.7L12.3,1.7z\" />\n\t</g>\n</g>\n<path d=\"M23.5,55.8c-0.1,0-0.2,0-0.2,0c-3.2-0.6-6.3-1.7-9.1-3.3c-0.3-0.2-0.5-0.5-0.6-0.8c-0.1-0.3,0-0.7,0.1-1\n\tc0.2-0.4,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.7,0.2c2.6,1.5,5.4,2.5,8.3,3c0.7,0.1,1.2,0.8,1.1,1.6C24.7,55.3,24.1,55.8,23.5,55.8z\n\t M32.7,55.8c-0.7,0-1.2-0.5-1.3-1.1c-0.1-0.7,0.4-1.4,1.1-1.6c2.9-0.5,5.7-1.5,8.2-3c0.2-0.1,0.4-0.2,0.7-0.2c0.5,0,0.9,0.3,1.2,0.7\n\tc0.2,0.3,0.2,0.7,0.1,1c-0.1,0.3-0.3,0.6-0.6,0.8c-2.8,1.6-5.9,2.8-9.1,3.4C32.9,55.8,32.8,55.8,32.7,55.8z M7.6,46.7\n\tc-0.4,0-0.8-0.2-1-0.5c-2.1-2.5-3.8-5.3-4.9-8.4c-0.1-0.3-0.1-0.7,0-1c0.1-0.3,0.4-0.6,0.8-0.7c0.2-0.1,0.3-0.1,0.5-0.1\n\tc0.6,0,1.1,0.4,1.3,0.9c1,2.8,2.5,5.3,4.4,7.6c0.2,0.3,0.3,0.6,0.3,1s-0.2,0.7-0.5,0.9C8.3,46.6,8,46.7,7.6,46.7z M48.5,46.6\n\tc-0.2,0-0.6-0.1-0.9-0.3c-0.3-0.2-0.4-0.6-0.5-0.9c0-0.4,0.1-0.7,0.3-1c1.9-2.3,3.4-4.8,4.4-7.6c0.2-0.5,0.7-0.9,1.3-0.9\n\tc0.2,0,0.3,0,0.5,0.1c0.3,0.1,0.6,0.4,0.8,0.7c0.2,0.3,0.2,0.7,0,1c-1.1,3.1-2.7,5.9-4.8,8.4C49.2,46.4,48.9,46.6,48.5,46.6z\n\t M1.3,29.6C0.6,29.6,0,29,0,28.3v-0.1c0-3.3,0.6-6.5,1.7-9.6c0.2-0.5,0.7-0.9,1.3-0.9c0.2,0,0.3,0,0.5,0.1c0.7,0.3,1.1,1,0.8,1.7\n\tc-1,2.8-1.5,5.7-1.5,8.7v0.1C2.7,29,2.1,29.6,1.3,29.6z M54.7,29.5c-0.7,0-1.3-0.6-1.3-1.3c0-3-0.5-5.9-1.5-8.7\n\tc-0.1-0.3-0.1-0.7,0-1c0.2-0.3,0.4-0.6,0.8-0.7c0.1-0.1,0.3-0.1,0.5-0.1c0.6,0,1.1,0.4,1.3,0.9c1.1,3.1,1.7,6.3,1.7,9.6\n\tC56,28.9,55.4,29.5,54.7,29.5L54.7,29.5z M7.6,12.4c-0.2,0-0.6-0.1-0.9-0.3c-0.6-0.5-0.6-1.3-0.2-1.9c2.1-2.5,4.6-4.6,7.4-6.3\n\tc0.2-0.1,0.4-0.2,0.7-0.2c0.5,0,0.9,0.3,1.2,0.7c0.4,0.6,0.2,1.5-0.5,1.8c-2.6,1.5-4.8,3.4-6.7,5.7C8.3,12.2,8,12.4,7.6,12.4z\n\t M48.4,12.4c-0.4,0-0.8-0.2-1-0.5c-1.9-2.3-4.2-4.2-6.7-5.6c-0.3-0.2-0.5-0.5-0.6-0.8c-0.1-0.3,0-0.7,0.1-1c0.2-0.4,0.7-0.7,1.2-0.7\n\tc0.2,0,0.5,0.1,0.7,0.2c2.8,1.6,5.3,3.7,7.5,6.2c0.5,0.6,0.4,1.4-0.2,1.9C49,12.3,48.7,12.4,48.4,12.4z M23.3,3.3\n\tc-0.7,0-1.2-0.5-1.3-1.1c-0.1-0.4,0-0.7,0.2-1c0.2-0.3,0.5-0.5,0.9-0.6c1.6-0.3,3.2-0.4,4.9-0.4c1.6,0,3.3,0.1,4.8,0.4\n\tc0.4,0.1,0.7,0.3,0.9,0.5s0.3,0.6,0.2,1c-0.1,0.6-0.7,1.1-1.3,1.1c-0.1,0-0.2,0-0.2,0C30.9,3,29.5,2.9,28,2.9c-1.5,0-3,0.1-4.4,0.4\n\tC23.5,3.3,23.4,3.3,23.3,3.3z\" />\n<g>\n\t<circle class=\"st0\" cx=\"157.7\" cy=\"33.5\" r=\"28\" />\n</g>\n</symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "YVnf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToTopOnMount", function() { return ScrollToTopOnMount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // a component to automatically reset the scroll
// on mount (see https://reacttraining.com/react-router/web/guides/scroll-restoration/scroll-to-top)

var ScrollToTopOnMount =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollToTopOnMount, _Component);

  function ScrollToTopOnMount() {
    _classCallCheck(this, ScrollToTopOnMount);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScrollToTopOnMount).apply(this, arguments));
  }

  _createClass(ScrollToTopOnMount, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var target = this.props && this.props.target;
      target && typeof target.scrollTo === 'function' && target.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ScrollToTopOnMount;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (ScrollToTopOnMount);

/***/ }),

/***/ "aEcG":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"installing-spinner":"installing-spinner--3DCw7","spin":"spin--1KhGc","installing":"installing--1Gu5-","col-account-success-header":"col-account-success-header--1U_I1"};

/***/ }),

/***/ "bRzR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_proptypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nlwj");
/* harmony import */ var react_proptypes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_proptypes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("eO8H");
/* harmony import */ var _components_appEntryPoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mD6Q");
/* harmony import */ var _components_Notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("BQC9");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Fea+");
/* harmony import */ var _components_Failure__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("2gMI");
/* harmony import */ var _ducks_connections_components_queue_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("rwEa");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Uedh");
/* harmony import */ var _components_IntentRedirect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("e0eU");
/* harmony import */ var _components_StoreRedirection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("mLPk");
/* harmony import */ var cozy_ui_react_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("e2oC");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global cozy */












var IDLE = 'idle';
var FETCHING_CONTEXT = 'FETCHING_CONTEXT';

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props, context) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props, context));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      context: {},
      error: null,
      status: IDLE
    });

    _this.store = _this.context.store;

    _this.fetchContext();

    return _this;
  }

  _createClass(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      var context = this.state.context;
      return context && context.attributes;
    }
  }, {
    key: "fetchContext",
    value: function () {
      var _fetchContext = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var context;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  status: FETCHING_CONTEXT
                });
                _context.next = 3;
                return cozy.client.fetchJSON('GET', '/settings/context').catch(function (error) {
                  _this2.setState({
                    error: error,
                    status: IDLE
                  });
                });

              case 3:
                context = _context.sent;
                this.setState({
                  context: context,
                  status: IDLE
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function fetchContext() {
        return _fetchContext.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          accounts = _this$props.accounts,
          konnectors = _this$props.konnectors,
          triggers = _this$props.triggers;
      var isFetching = [accounts, konnectors, triggers].find(function (collection) {
        return ['pending', 'loading'].includes(collection.fetchStatus);
      });
      var hasError = [accounts, konnectors, triggers].find(function (collection) {
        return collection.fetchStatus === 'failed';
      });
      var status = this.state.status;
      var isFetchingContext = status === FETCHING_CONTEXT;
      var isReady = !hasError && !isFetching && !isFetchingContext;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Layout__WEBPACK_IMPORTED_MODULE_12__["Layout"], {
        monoColumn: true,
        ref: isReady && function (div) {
          _this3.contentWrapper = div;
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "ho-background"
      }), hasError || isFetching && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Layout__WEBPACK_IMPORTED_MODULE_12__["Main"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(cozy_ui_react_Layout__WEBPACK_IMPORTED_MODULE_12__["Content"], {
        className: hasError ? 'col-initial-error' : 'col-initial-loading'
      }, hasError && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Failure__WEBPACK_IMPORTED_MODULE_7__["default"], {
        errorType: "initial"
      }), isFetching && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {
        loadingType: "initial"
      }))), isReady && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: "/redirect",
        component: _components_IntentRedirect__WEBPACK_IMPORTED_MODULE_10__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: "/connected",
        render: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_9__["default"], {
            base: "/connected",
            wrapper: _this3.contentWrapper
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        exact: true,
        path: "/providers",
        component: _components_StoreRedirection__WEBPACK_IMPORTED_MODULE_11__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
        path: "/providers/:category",
        component: _components_StoreRedirection__WEBPACK_IMPORTED_MODULE_11__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        exact: true,
        from: "/",
        to: "/connected"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        from: "*",
        to: "/connected"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Notifier__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ducks_connections_components_queue_index__WEBPACK_IMPORTED_MODULE_8__["default"], null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

App.childContextTypes = {
  features: react_proptypes__WEBPACK_IMPORTED_MODULE_2___default.a.array
  /*
  withRouter is necessary here to deal with redux
  https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
  */

};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(_components_appEntryPoint__WEBPACK_IMPORTED_MODULE_4__["default"])(App)));

/***/ }),

/***/ "e0eU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eO8H");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/MKj");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cokx");
/* global cozy */





var IntentRedirect = function IntentRedirect(_ref) {
  var installedKonnectors = _ref.installedKonnectors,
      location = _ref.location;
  var queryString = !!location && location.search;
  var query = queryString && queryString.substring(1).split('&').reduce(function (accumulator, keyValue) {
    var splitted = keyValue.split('=');
    accumulator[splitted[0]] = splitted[1] || true;
    return accumulator;
  }, {});

  if (query.konnector) {
    if (installedKonnectors.find(function (konnector) {
      return konnector.slug === query.konnector;
    })) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: "/connected/".concat(query.konnector)
      });
    } else {
      cozy.client.intents.redirect('io.cozy.apps', {
        slug: query.konnector
      });
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/connected"
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    installedKonnectors: Object(_reducers__WEBPACK_IMPORTED_MODULE_3__["getInstalledKonnectors"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(IntentRedirect));

/***/ }),

/***/ "gpBY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPlaceholder", function() { return LoadingPlaceholder; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_placeholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("NfqR");
/* harmony import */ var _styles_placeholder__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_placeholder__WEBPACK_IMPORTED_MODULE_1__);


var LoadingPlaceholder = function LoadingPlaceholder() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_placeholder__WEBPACK_IMPORTED_MODULE_1___default.a['coz-loading-placeholder']
  });
};
/* harmony default export */ __webpack_exports__["default"] = (LoadingPlaceholder);

/***/ }),

/***/ "mLPk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreRedirection", function() { return StoreRedirection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cozy_ui_react_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zGKU");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* global cozy */


var StoreRedirection =
/*#__PURE__*/
function (_Component) {
  _inherits(StoreRedirection, _Component);

  function StoreRedirection(props) {
    var _this;

    _classCallCheck(this, StoreRedirection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StoreRedirection).call(this, props));
    var category = props.match && props.match.params.category;
    var options = {
      type: 'konnector'
    };

    if (category && category !== 'all') {
      options.category = props.match.params.category;
    }

    cozy.client.intents.redirect('io.cozy.apps', options);
    return _this;
  }

  _createClass(StoreRedirection, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_Spinner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        size: "xxlarge",
        middle: true
      });
    }
  }]);

  return StoreRedirection;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (StoreRedirection);

/***/ }),

/***/ "r4jv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var fillWithGhostItems = function fillWithGhostItems(num) {
  var elements = [];

  for (var i = 0; i < num; i++) {
    elements.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item-wrapper--ghost"
    }));
  }

  return elements;
};

/* harmony default export */ __webpack_exports__["default"] = (fillWithGhostItems);

/***/ }),

/***/ "rwEa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zAkM");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/MKj");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cokx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4YEU");





var mapStateToProps = function mapStateToProps(state) {
  var queue = Object(_reducers__WEBPACK_IMPORTED_MODULE_2__["getConnectionsQueue"])(state);
  return {
    queue: queue,
    visible: !!queue.length
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    purgeQueue: function purgeQueue() {
      return dispatch(Object(___WEBPACK_IMPORTED_MODULE_3__["purgeQueue"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_queue__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "tc/c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "broken_829dad2f6520184c0e8c56afb73136d1",
  "use": "broken_829dad2f6520184c0e8c56afb73136d1-usage",
  "viewBox": "0 0 64 19",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 64 19\" id=\"broken_829dad2f6520184c0e8c56afb73136d1\">\n<path fill=\"currentColor\" d=\"M45.6,0.5c-0.9-0.6-2.1-0.6-3.1-0.1L21.2,11.9c-0.6,0.3-1.4,0.3-2-0.1L1.6,0.5C1.1,0.2,0.6,0,0,0v6.6l18.4,11.9\n\tc0.9,0.6,2.1,0.6,3.1,0.1L42.8,7.1c0.6-0.3,1.4-0.3,2,0.1l17.5,11.4c0.5,0.3,1.1,0.5,1.6,0.5l0,0v-6.6L45.6,0.5z\" />\n</symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "vBg4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4BeY");
/* harmony import */ var svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IaFt");
/* harmony import */ var svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new svg_baker_runtime_browser_symbol__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "default_e8acf04a531f51e2591973ab13ba63d7",
  "use": "default_e8acf04a531f51e2591973ab13ba63d7-usage",
  "viewBox": "0 0 64 64",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\" id=\"default_e8acf04a531f51e2591973ab13ba63d7\">\n  <g fill=\"none\" fill-rule=\"evenodd\">\n    <path fill=\"#855CEA\" fill-rule=\"nonzero\" d=\"M32,17.3818748 C38.4788008,17.3818748 43.7310547,22.7384047 43.7310547,29.3455954 C43.7310547,35.9527861 38.4788008,41.3093161 32,41.3093161 C25.5211992,41.3093161 20.2689453,35.9527861 20.2689453,29.3455954 C20.2689453,22.7384047 25.5211992,17.3818748 32,17.3818748 Z M32,58.9450016 C24.97375,58.9450016 18.6050907,56.0787139 14,51.4547232 C17.8412687,47.7235961 24.4673594,45.2587711 32,45.2587711 C39.5326406,45.2587711 46.1587313,47.7235961 50,51.4547232 C45.3949093,56.0787139 39.02625,58.9450016 32,58.9450016 Z\" />\n    <g transform=\"translate(3)\">\n      <circle cx=\"29\" cy=\"32\" r=\"27\" stroke=\"#C2ADF4\" stroke-width=\"4\" />\n      <circle cx=\"29\" cy=\"6\" r=\"6\" fill=\"#C2ADF4\" />\n      <circle cx=\"29\" cy=\"58\" r=\"6\" fill=\"#C2ADF4\" />\n      <circle cx=\"52\" cy=\"47\" r=\"6\" fill=\"#C2ADF4\" />\n      <circle cx=\"6\" cy=\"47\" r=\"6\" fill=\"#C2ADF4\" />\n      <circle cx=\"52\" cy=\"18\" r=\"6\" fill=\"#C2ADF4\" />\n      <circle cx=\"6\" cy=\"18\" r=\"6\" fill=\"#C2ADF4\" />\n    </g>\n  </g>\n</symbol>"
});
var result = svg_sprite_loader_runtime_browser_sprite_build__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "ygPf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PiwikHashRouter; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eO8H");
/* harmony import */ var cozy_ui_react_helpers_tracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZHai");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var addPiwik = function addPiwik(history) {
  if (Object(cozy_ui_react_helpers_tracker__WEBPACK_IMPORTED_MODULE_1__["shouldEnableTracking"])() && Object(cozy_ui_react_helpers_tracker__WEBPACK_IMPORTED_MODULE_1__["getTracker"])()) {
    var trackerInstance = Object(cozy_ui_react_helpers_tracker__WEBPACK_IMPORTED_MODULE_1__["getTracker"])();
    history = trackerInstance.connectToHistory(history); // when using a hash history, the initial visit is not tracked by piwik react router

    trackerInstance.track(history.location);
  }

  return history;
};

var PiwikHashRouter =
/*#__PURE__*/
function (_HashRouter) {
  _inherits(PiwikHashRouter, _HashRouter);

  function PiwikHashRouter(props) {
    var _this;

    _classCallCheck(this, PiwikHashRouter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PiwikHashRouter).call(this, props));
    _this.history = addPiwik(_this.history);
    return _this;
  }

  return PiwikHashRouter;
}(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["HashRouter"]);



/***/ }),

/***/ "zAkM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XOpu");
/* harmony import */ var cozy_ui_react_AppIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ArIv");
/* harmony import */ var lib_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("OSTS");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("FwS1");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_5__);
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







var Pending = Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__["translate"])()(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles__WEBPACK_IMPORTED_MODULE_5___default.a['item-pending']
  }, props.t('Queue.item.pending'));
});

var Item =
/*#__PURE__*/
function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Item);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Item)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      progress: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidUpdate", function () {
      // If the status of the konnector is not 'ongoing', we remove the progressBar
      var updatedStatus = _this.props.status;

      if (updatedStatus !== 'ongoing') {
        clearInterval(_this.myInterval);

        _this.progressBar.remove();
      }
    });

    return _this;
  }

  _createClass(Item, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var elapsedTime = 0;
      this.myInterval = setInterval(function () {
        elapsedTime += 10;
        var progress = Math.atan(elapsedTime / 3e3) / (Math.PI / 2) * 90;

        _this2.setState({
          progress: progress
        });
      }, 25);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _this3 = this;

      var _this$props = this.props,
          konnector = _this$props.konnector,
          label = _this$props.label,
          status = _this$props.status,
          t = _this$props.t;
      var progress = this.state.progress;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles__WEBPACK_IMPORTED_MODULE_5___default.a['queue-item'], (_classNames = {}, _defineProperty(_classNames, _styles__WEBPACK_IMPORTED_MODULE_5___default.a['queue-item--done'], status === 'done'), _defineProperty(_classNames, _styles__WEBPACK_IMPORTED_MODULE_5___default.a['queue-item--error'], status === 'error'), _classNames))
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles__WEBPACK_IMPORTED_MODULE_5___default.a['item-icon'])
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_ui_react_AppIcon__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
        alt: t('app.logo.alt', {
          name: konnector.name
        }),
        className: "c-",
        app: konnector
      }, lib_icons__WEBPACK_IMPORTED_MODULE_4__["appIconProps"]))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles__WEBPACK_IMPORTED_MODULE_5___default.a['item-label'])
      }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles__WEBPACK_IMPORTED_MODULE_5___default.a['item-status']
      }, status === 'pending' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Pending, null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles__WEBPACK_IMPORTED_MODULE_5___default.a["item-".concat(status)]
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        role: "progressbar",
        "aria-valuenow": progress,
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles__WEBPACK_IMPORTED_MODULE_5___default.a['queue-item-progress-bar']),
        style: {
          width: "".concat(progress, "%")
        },
        ref: function ref(progressBar) {
          return _this3.progressBar = progressBar;
        }
      }));
    }
  }]);

  return Item;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Queue =
/*#__PURE__*/
function (_Component2) {
  _inherits(Queue, _Component2);

  function Queue() {
    var _getPrototypeOf3;

    var _this4;

    _classCallCheck(this, Queue);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this4 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(Queue)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "state", {
      collapsed: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "toggleCollapsed", function () {
      _this4.setState(function (state) {
        return {
          collapsed: !state.collapsed
        };
      });
    });

    return _this4;
  }

  _createClass(Queue, [{
    key: "render",
    value: function render() {
      var _classNames2;

      var _this$props2 = this.props,
          t = _this$props2.t,
          _this$props2$visible = _this$props2.visible,
          visible = _this$props2$visible === void 0 ? false : _this$props2$visible,
          _this$props2$queue = _this$props2.queue,
          queue = _this$props2$queue === void 0 ? [] : _this$props2$queue,
          purgeQueue = _this$props2.purgeQueue;
      var collapsed = this.state.collapsed;
      var doneCount = queue.filter(function (connection) {
        return connection.status !== 'ongoing';
      }).length;
      var successCount = queue.filter(function (connection) {
        return connection.status === 'done';
      }).length;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles__WEBPACK_IMPORTED_MODULE_5___default.a['queue'], (_classNames2 = {}, _defineProperty(_classNames2, _styles__WEBPACK_IMPORTED_MODULE_5___default.a['queue--visible'], visible), _defineProperty(_classNames2, _styles__WEBPACK_IMPORTED_MODULE_5___default.a['queue--collapsed'], collapsed), _classNames2))
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: _styles__WEBPACK_IMPORTED_MODULE_5___default.a['queue-header'],
        onDoubleClick: this.toggleCollapsed
      }, doneCount < queue.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles__WEBPACK_IMPORTED_MODULE_5___default.a['queue-header-inner']
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "coz-desktop"
      }, t('Queue.header')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "coz-mobile"
      }, t('Queue.header_mobile', {
        done: doneCount,
        total: queue.length
      }))), doneCount >= queue.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles__WEBPACK_IMPORTED_MODULE_5___default.a['queue-header-inner']
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, t('Queue.header_done', {
        done: successCount,
        total: queue.length
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles__WEBPACK_IMPORTED_MODULE_5___default.a['btn-close']),
        onClick: purgeQueue
      }, t('Queue.close')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("progress", {
        className: _styles__WEBPACK_IMPORTED_MODULE_5___default.a['queue-progress'],
        value: doneCount,
        max: queue.length
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles__WEBPACK_IMPORTED_MODULE_5___default.a['queue-content']
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles__WEBPACK_IMPORTED_MODULE_5___default.a['queue-list']
      }, queue.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {
          key: index,
          konnector: item.konnector,
          label: item.label,
          status: item.status,
          t: t
        });
      }))));
    }
  }]);

  return Queue;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_2__["translate"])()(Queue));

/***/ }),

/***/ "zvYt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Applications", function() { return Applications; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mz5Q");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppTile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IiGW");
/* harmony import */ var _LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("gpBY");
/* harmony import */ var _helpers_fillWithGhostItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("r4jv");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("SH7X");
/* harmony import */ var cozy_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("XOpu");







var LoadingAppTiles = function LoadingAppTiles(_ref) {
  var num = _ref.num;
  var tiles = [];

  for (var i = 0; i < num; i++) {
    tiles.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item-wrapper"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      className: "item-header"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item-icon"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_2__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "item-title"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list app-list"
  }, tiles, Object(_helpers_fillWithGhostItems__WEBPACK_IMPORTED_MODULE_3__["default"])(6));
};

var Applications = function Applications() {
  var ignoredAppSlugs = ['home', 'onboarding', 'settings'];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app-list-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(cozy_client__WEBPACK_IMPORTED_MODULE_4__["Query"], {
    query: function query(client) {
      return client.all('io.cozy.apps');
    }
  }, function (_ref2) {
    var data = _ref2.data,
        fetchStatus = _ref2.fetchStatus;
    return fetchStatus !== 'loaded' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoadingAppTiles, {
      num: "3"
    }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "list app-list",
      "data-tutorial": "home-apps"
    }, data.filter(function (app) {
      return app.state !== 'hidden' && !ignoredAppSlugs.includes(app.slug);
    }).map(function (app, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AppTile__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: index,
        app: app
      });
    }), Object(_helpers_fillWithGhostItems__WEBPACK_IMPORTED_MODULE_3__["default"])(6));
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(cozy_ui_react_I18n__WEBPACK_IMPORTED_MODULE_5__["translate"])()(Applications));

/***/ })

/******/ });
//# sourceMappingURL=home.app.js.map