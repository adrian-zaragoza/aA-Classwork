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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("//require the other js files in here.\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\")\n  window.MovingObject = MovingObject;\n  window.ctx = ctx;\n  window.draw = MovingObject.draw;\n  ctx.fillStyle = \"black\";\n  ctx.fillRect(0, 0, 640, 580);\n  const mo = new MovingObject({\n    pos: [30, 30],\n    vel: [10, 10],\n    radius: 5,\n    color: \"#00FF00\"\n  });\n  window.mo = mo;\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(options){\n  this.pos = options[\"pos\"]\n  this.vel = options[\"vel\"]\n  this.radius = options[\"radius\"]\n  this.color = options[\"color\"]\n};\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n  \n    ctx.arc(\n      this.pos[0],\n      this.pos[1],\n      this.radius,\n      0,\n      2 * Math.PI,\n      false\n    );\n  \n    ctx.fill();\n\n};\n\nMovingObject.prototype.move = function(pos, vel){\n  let endPosition = [];\n  endPosition.push((pos[0] + vel[0]));\n  endPosition.push((pos[1] + vel[1]));\n  return endPosition;\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    childClass.prototype = Object.create(parentClass.prototype);\n    childClass.prototype.constructor = childClass;\n  }\n\n  // Return a randomly oriented vector with the given length.\n  \n    // randomVec(length) {\n    //   const deg = 2 * Math.PI * Math.random();\n    //   return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    // },\n    // // Scale the length of a vector by the given amount.\n    // scale(vec, m) {\n    //   return [vec[0] * m, vec[1] * m];\n    // }\n};\n\n\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;