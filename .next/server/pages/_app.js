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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/AppContext.js":
/*!*******************************!*\
  !*** ./context/AppContext.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppWrapper\": () => (/* binding */ AppWrapper),\n/* harmony export */   \"useAppContext\": () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AppReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppReducer */ \"./context/AppReducer.js\");\n\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AppWrapper({ children  }) {\n    const { state , dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_AppReducer__WEBPACK_IMPORTED_MODULE_2__.AppReducer, _AppReducer__WEBPACK_IMPORTED_MODULE_2__.initialState);\n    const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        return {\n            state,\n            dispatch\n        };\n    }, [\n        state,\n        dispatch\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AppContext.Provider, {\n        value: contextValue,\n        __source: {\n            fileName: \"/media/shahzaib/New Volume/Projects/potofnames/nextjs-app/context/AppContext.js\",\n            lineNumber: 15,\n            columnNumber: 5\n        },\n        __self: this,\n        children: children\n    }));\n}\nfunction useAppContext() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0FwcENvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0U7QUFFZjtBQUV2RCxLQUFLLENBQUNNLFVBQVUsaUJBQUdOLG9EQUFhO0FBRXpCLFNBQVNPLFVBQVUsQ0FBQyxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEdBQUVDLFFBQVEsRUFBQyxDQUFDLEdBQUdQLGlEQUFVLENBQUNDLG1EQUFVLEVBQUVDLHFEQUFZO0lBRS9ELEtBQUssQ0FBQ00sWUFBWSxHQUFHVCw4Q0FBTyxLQUFPLENBQUM7UUFDbEMsTUFBTSxDQUFDLENBQUM7WUFBQ08sS0FBSztZQUFFQyxRQUFRO1FBQUMsQ0FBQztJQUM1QixDQUFDLEVBQUUsQ0FBQ0Q7UUFBQUEsS0FBSztRQUFFQyxRQUFRO0lBQUEsQ0FBQztJQUVwQixNQUFNLHNFQUNISixVQUFVLENBQUNNLFFBQVE7UUFBQ0MsS0FBSyxFQUFFRixZQUFZOzs7Ozs7O2tCQUFHSCxRQUFROztBQUV2RCxDQUFDO0FBRU0sU0FBU00sYUFBYSxHQUFHLENBQUM7SUFDL0IsTUFBTSxDQUFDYixpREFBVSxDQUFDSyxVQUFVO0FBQzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3RvZm5hbWVzLy4vY29udGV4dC9BcHBDb250ZXh0LmpzPzM0MmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlTWVtbywgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBBcHBSZWR1Y2VyLCBpbml0aWFsU3RhdGUgfSBmcm9tIFwiLi9BcHBSZWR1Y2VyXCI7XG5cbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBBcHBXcmFwcGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlUmVkdWNlcihBcHBSZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiB7IHN0YXRlLCBkaXNwYXRjaCB9O1xuICB9LCBbc3RhdGUsIGRpc3BhdGNoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlfT57Y2hpbGRyZW59PC9BcHBDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQ29udGV4dCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlTWVtbyIsInVzZVJlZHVjZXIiLCJBcHBSZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwiQXBwQ29udGV4dCIsIkFwcFdyYXBwZXIiLCJjaGlsZHJlbiIsInN0YXRlIiwiZGlzcGF0Y2giLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXBwQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AppContext.js\n");

/***/ }),

/***/ "./context/AppReducer.js":
/*!*******************************!*\
  !*** ./context/AppReducer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialState\": () => (/* binding */ initialState),\n/* harmony export */   \"AppReducer\": () => (/* binding */ AppReducer)\n/* harmony export */ });\nconst initialState = {\n    number: 0\n};\nconst AppReducer = (state, action)=>{\n    switch(action.type){\n        case \"add_number\":\n            {\n                return {\n                    ...state,\n                    number: action.value + state.number\n                };\n            }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0FwcFJlZHVjZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxLQUFLLENBQUNBLFlBQVksR0FBRyxDQUFDO0lBQzNCQyxNQUFNLEVBQUUsQ0FBQztBQUNYLENBQUM7QUFDTSxLQUFLLENBQUNDLFVBQVUsSUFBSUMsS0FBSyxFQUFFQyxNQUFNLEdBQUssQ0FBQztJQUM1QyxNQUFNLENBQUVBLE1BQU0sQ0FBQ0MsSUFBSTtRQUNoQixJQUFJLENBQUMsQ0FBWTtZQUFFLENBQUM7Z0JBQ2pCLE1BQU0sQ0FBQyxDQUFDO3VCQUNGRixLQUFLO29CQUNSRixNQUFNLEVBQUVHLE1BQU0sQ0FBQ0UsS0FBSyxHQUFHSCxLQUFLLENBQUNGLE1BQU07Z0JBQ3RDLENBQUM7WUFDSixDQUFDOztBQUVOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3RvZm5hbWVzLy4vY29udGV4dC9BcHBSZWR1Y2VyLmpzPzNiNjUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbnVtYmVyOiAwLFxufTtcbmV4cG9ydCBjb25zdCBBcHBSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgIGNhc2UgXCJhZGRfbnVtYmVyXCI6IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgIG51bWJlcjogYWN0aW9uLnZhbHVlICsgc3RhdGUubnVtYmVyLFxuICAgICAgICB9O1xuICAgICB9XG4gIH1cbn07Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm51bWJlciIsIkFwcFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AppReducer.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/AppContext */ \"./context/AppContext.js\");\n\n\n\n\n\nif (false) {}\nfunction MyApp({ Component , pageProps: { session , ...pageProps }  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_context_AppContext__WEBPACK_IMPORTED_MODULE_4__.AppWrapper, {\n        __source: {\n            fileName: \"/media/shahzaib/New Volume/Projects/potofnames/nextjs-app/pages/_app.js\",\n            lineNumber: 13,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n            session: session,\n            __source: {\n                fileName: \"/media/shahzaib/New Volume/Projects/potofnames/nextjs-app/pages/_app.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"/media/shahzaib/New Volume/Projects/potofnames/nextjs-app/pages/_app.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                },\n                __self: this\n            })\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1g7QUFDbUI7QUFDQztBQUVsRCxFQUFFLEVBQUUsS0FBNkIsRUFBRSxFQUVsQztTQUVRRyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLENBQUNDLE9BQU8sTUFBS0QsU0FBUyxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUM7SUFFakUsTUFBTSxzRUFDSEosMkRBQVU7Ozs7Ozs7dUZBQ1JELDREQUFlO1lBQUNNLE9BQU8sRUFBRUEsT0FBTzs7Ozs7OzsyRkFDOUJGLFNBQVM7bUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7QUFLaEMsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG90b2ZuYW1lcy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgQXBwV3JhcHBlciB9IGZyb20gXCIuLi9jb250ZXh0L0FwcENvbnRleHRcIjtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgcmVxdWlyZShcImJvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGVcIilcbn1cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wczp7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9fSkge1xuICBcbiAgcmV0dXJuIChcbiAgICA8QXBwV3JhcHBlcj5cbiAgICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICAgIDwvQXBwV3JhcHBlcj5cbiAgICBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwIl0sIm5hbWVzIjpbIlNlc3Npb25Qcm92aWRlciIsIkFwcFdyYXBwZXIiLCJyZXF1aXJlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();