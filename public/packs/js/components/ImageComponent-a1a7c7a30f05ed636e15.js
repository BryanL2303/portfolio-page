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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/components/ImageComponent.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/components/ImageComponent.jsx":
/*!************************************************************!*\
  !*** ./app/javascript/packs/components/ImageComponent.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\app\\javascript\\packs\\components\\ImageComponent.jsx: JSX value should be either an expression or a quoted JSX text. (8:12)\n\n   6 | \treturn(\n   7 | \t\t<div class=\"image-container\">\n>  8 | \t\t\t<img src=MyImage, alt=\"LMAO feels bad\"></img>\n     | \t\t\t         ^\n   9 | \t\t</div>\n  10 | \t)\n  11 | }\n    at instantiate (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:72:32)\n    at constructor (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:366:12)\n    at JSXParserMixin.raise (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:3453:19)\n    at JSXParserMixin.jsxParseAttributeValue (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:7978:20)\n    at JSXParserMixin.jsxParseAttribute (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:8027:38)\n    at JSXParserMixin.jsxParseOpeningElementAfterName (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:8046:28)\n    at JSXParserMixin.jsxParseOpeningElementAt (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:8039:17)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:8070:33)\n    at JSXParserMixin.jsxParseElementAt (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:8086:32)\n    at JSXParserMixin.jsxParseElement (C:\\Users\\bryan\\NUS\\CVWO\\portfolio-page\\node_modules\\@babel\\parser\\lib\\index.js:8155:17)");

/***/ })

/******/ });
//# sourceMappingURL=ImageComponent-a1a7c7a30f05ed636e15.js.map