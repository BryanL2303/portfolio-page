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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/NavBar.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/NavBar.jsx":
/*!*****************************************!*\
  !*** ./app/javascript/packs/NavBar.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\app\\javascript\\packs\\NavBar.jsx: Unexpected token, expected \"{\" (3:19)\n\n  1 | import React, {usestate} from 'react'\n  2 |\n> 3 | function NavBar () => {\n    |                    ^\n  4 | \treturn(\n  5 | \t\t<nav>\n  6 | \t\t</nav>\n    at instantiate (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:72:32)\n    at constructor (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:366:12)\n    at JSXParserMixin.raise (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:3453:19)\n    at JSXParserMixin.unexpected (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:3491:16)\n    at JSXParserMixin.expect (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:4128:28)\n    at JSXParserMixin.parseBlock (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:15389:10)\n    at JSXParserMixin.parseFunctionBody (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:14085:24)\n    at JSXParserMixin.parseFunctionBodyAndFinish (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:14069:10)\n    at C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:15570:12\n    at JSXParserMixin.withSmartMixTopicForbiddingContext (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:14457:14)");

/***/ })

/******/ });
//# sourceMappingURL=NavBar-34f2136d5f623c4f96e7.js.map