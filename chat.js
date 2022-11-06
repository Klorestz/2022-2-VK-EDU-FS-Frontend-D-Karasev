/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./chat/js/chat.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./chat/css/chat.css":
/*!***************************!*\
  !*** ./chat/css/chat.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./chat/css/chat.css?");

/***/ }),

/***/ "./chat/css/header_chat.css":
/*!**********************************!*\
  !*** ./chat/css/header_chat.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./chat/css/header_chat.css?");

/***/ }),

/***/ "./chat/css/messages_chat.css":
/*!************************************!*\
  !*** ./chat/css/messages_chat.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./chat/css/messages_chat.css?");

/***/ }),

/***/ "./chat/js/back_to_list_chat.js":
/*!**************************************!*\
  !*** ./chat/js/back_to_list_chat.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var back_to_list_chat = document.querySelector('.back-to-list-chat');\nback_to_list_chat.addEventListener(\"click\", GoToListOfChat);\nfunction GoToListOfChat() {\n  window.location.href = \"./index.html\";\n}\n\n//# sourceURL=webpack:///./chat/js/back_to_list_chat.js?");

/***/ }),

/***/ "./chat/js/chat.js":
/*!*************************!*\
  !*** ./chat/js/chat.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_chat_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/chat.css */ \"./chat/css/chat.css\");\n/* harmony import */ var _css_chat_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_chat_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_header_chat_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/header_chat.css */ \"./chat/css/header_chat.css\");\n/* harmony import */ var _css_header_chat_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_header_chat_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_messages_chat_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/messages_chat.css */ \"./chat/css/messages_chat.css\");\n/* harmony import */ var _css_messages_chat_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_messages_chat_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local_storage.js */ \"./chat/js/local_storage.js\");\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_local_storage_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _back_to_list_chat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./back_to_list_chat.js */ \"./chat/js/back_to_list_chat.js\");\n/* harmony import */ var _back_to_list_chat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_back_to_list_chat_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./chat/js/chat.js?");

/***/ }),

/***/ "./chat/js/local_storage.js":
/*!**********************************!*\
  !*** ./chat/js/local_storage.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nvar form = document.querySelector('form');\nvar input = document.querySelector('.form-input');\nvar messages = document.querySelector('.messages');\ndocument.addEventListener(\"DOMContentLoaded\", MessageFromLocalStorage);\nform.addEventListener('submit', handleSubmit);\nfunction MessageFromLocalStorage() {\n  var existingMessages = JSON.parse(localStorage.getItem(\"messages\"));\n  if (existingMessages == null) return;\n  var _iterator = _createForOfIteratorHelper(existingMessages),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var message = _step.value;\n      CreateMessage(message);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\nfunction CreateMessage(message) {\n  var message_block = document.createElement(\"div\");\n  message_block.className = \"message_block\";\n  var message_text = document.createElement(\"div\");\n  var message_time = document.createElement(\"div\");\n  message_time.className = \"message_date\";\n  message_text.innerText = message.text;\n  message_time.innerText = message.date;\n  message_block.appendChild(message_text);\n  message_block.appendChild(message_time);\n  document.getElementById(\"messages\").appendChild(message_block);\n}\nfunction handleSubmit(event) {\n  event.preventDefault();\n  var existingMessages = JSON.parse(localStorage.getItem(\"messages\"));\n  if (existingMessages == null) existingMessages = [];\n  var text = input.value;\n  if (!text) return;\n  var template = {\n    \"date\": new Date().toLocaleTimeString(),\n    \"text\": text,\n    \"sender\": 'Danila'\n  };\n  localStorage.setItem(\"message\", JSON.stringify(template));\n  existingMessages.push(template);\n  localStorage.setItem(\"messages\", JSON.stringify(existingMessages));\n  CreateMessage(template);\n  input.value = '';\n}\n\n//# sourceURL=webpack:///./chat/js/local_storage.js?");

/***/ })

/******/ });