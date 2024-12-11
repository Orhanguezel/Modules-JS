/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// import add from \"./module/module-a.js\";\n// import { multiply } from \"./module/module-b.js\";\nconst add = __webpack_require__(/*! ./module/module-a.js */ \"./module/module-a.js\");\nconst multiply = __webpack_require__(/*! ./module/module-b.js */ \"./module/module-b.js\");\n\nconst addResult = add(1, 2);\nconsole.log(\"addResult:\", addResult);\n\nconst multiplyResult = multiply(2, 3);\nconsole.log(\"multiplyResult:\", multiplyResult);\n\n\n//# sourceURL=webpack://webpack-demo/./index.js?");

/***/ }),

/***/ "./module/module-a.js":
/*!****************************!*\
  !*** ./module/module-a.js ***!
  \****************************/
/***/ ((module) => {

eval("const add = (a, b) => a + b;\n\nmodule.exports = add;\n\n\n//# sourceURL=webpack://webpack-demo/./module/module-a.js?");

/***/ }),

/***/ "./module/module-b.js":
/*!****************************!*\
  !*** ./module/module-b.js ***!
  \****************************/
/***/ ((module) => {

eval("const multiply = (a, b) => a * b;\n\nmodule.exports = multiply;\n\n\n//# sourceURL=webpack://webpack-demo/./module/module-b.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;