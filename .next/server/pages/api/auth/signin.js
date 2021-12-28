"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/signin";
exports.ids = ["pages/api/auth/signin"];
exports.modules = {

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "./pages/api/auth/signin.js":
/*!**********************************!*\
  !*** ./pages/api/auth/signin.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SignIn),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction SignIn({ providers  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"F:\\\\potofnames\\\\pages\\\\api\\\\auth\\\\signin.js\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(provider.id)\n                    ,\n                    __source: {\n                        fileName: \"F:\\\\potofnames\\\\pages\\\\api\\\\auth\\\\signin.js\",\n                        lineNumber: 8,\n                        columnNumber: 11\n                    },\n                    __self: this,\n                    children: [\n                        \"Sign in with \",\n                        provider.name\n                    ]\n                })\n            }, provider.name)\n        )\n    }));\n};\nasync function getServerSideProps(context) {\n    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getProviders)();\n    return {\n        props: {\n            providers\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9zaWduaW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzRDtBQUV2QyxRQUFRLENBQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUNDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUM3QyxNQUFNO2tCQUVEQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0YsU0FBUyxFQUFFRyxHQUFHLEVBQUVDLFFBQVEsd0VBQ3BDQyxDQUFHOzs7Ozs7O2dHQUNEQyxDQUFNO29CQUFDQyxPQUFPLE1BQVFULHVEQUFNLENBQUNNLFFBQVEsQ0FBQ0ksRUFBRTs7Ozs7Ozs7O3dCQUFHLENBQzdCO3dCQUFDSixRQUFRLENBQUNLLElBQUk7OztlQUZyQkwsUUFBUSxDQUFDSyxJQUFJOzs7QUFRL0IsQ0FBQztBQUVNLGVBQWVDLGtCQUFrQixDQUFDQyxPQUFPLEVBQUUsQ0FBQztJQUMvQyxLQUFLLENBQUNYLFNBQVMsR0FBRyxLQUFLLENBQUNILDZEQUFZO0lBQ3BDLE1BQU0sQ0FBQyxDQUFDO1FBQ05lLEtBQUssRUFBRSxDQUFDO1lBQUNaLFNBQVM7UUFBQyxDQUFDO0lBQ3RCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG90b2ZuYW1lcy8uL3BhZ2VzL2FwaS9hdXRoL3NpZ25pbi5qcz84YjE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFByb3ZpZGVycywgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oeyBwcm92aWRlcnMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7T2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcCgocHJvdmlkZXIpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17cHJvdmlkZXIubmFtZX0+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25Jbihwcm92aWRlci5pZCl9PlxyXG4gICAgICAgICAgICBTaWduIGluIHdpdGgge3Byb3ZpZGVyLm5hbWV9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3QgcHJvdmlkZXJzID0gYXdhaXQgZ2V0UHJvdmlkZXJzKClcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7IHByb3ZpZGVycyB9LFxyXG4gICAgfVxyXG4gIH0iXSwibmFtZXMiOlsiZ2V0UHJvdmlkZXJzIiwic2lnbkluIiwiU2lnbkluIiwicHJvdmlkZXJzIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwicHJvdmlkZXIiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiLCJuYW1lIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/signin.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/signin.js"));
module.exports = __webpack_exports__;

})();