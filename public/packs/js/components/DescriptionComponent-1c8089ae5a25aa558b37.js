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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/components/DescriptionComponent.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/components/DescriptionComponent.jsx":
/*!******************************************************************!*\
  !*** ./app/javascript/packs/components/DescriptionComponent.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\app\\javascript\\packs\\components\\DescriptionComponent.jsx: Expected corresponding JSX closing tag for <p>. (27:3)\n\n  25 | \t\t\t<h2 class=\"project-title\"></h2>\n  26 | \t\t\t<p class=\"project-description\"><p>\n> 27 | \t\t\t</a>\n     | \t\t\t^\n  28 |     \t\t</div >\t\t\t\n  29 | \t\t</div>\n  30 | \t)\n    at instantiate (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:72:32)\n    at constructor (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:366:12)\n    at JSXParserMixin.raise (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:3453:19)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:8124:16)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:8086:32)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:8086:32)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:8086:32)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:8086:32)\n    at JSXParserMixin.jsxParseElement (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:8155:17)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:8169:19)");

/***/ })

/******/ });
//# sourceMappingURL=DescriptionComponent-1c8089ae5a25aa558b37.js.map