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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-modal");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"@fortawesome/free-brands-svg-icons\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-modal */ \"react-modal\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst customStyles = {\n    content: {\n        margin: \"0%\",\n        width: \"30%\",\n        height: \"30%\",\n        top: \"50%\",\n        left: \"50%\",\n        right: \"auto\",\n        bottom: \"auto\",\n        // marginRight: '-50%',\n        transform: \"translate(-50%, -50%)\"\n    }\n};\n// function openModal() {\n//   // setsoundplay(false);\n//   setIsOpen(true);\n// }\n// function closeModal() {\n//   setIsOpen(false);\n// }\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: \"712097391157-k2np9fogv44eq0k015ne7a4f1juohri4.apps.googleusercontent.com\",\n            clientSecret: \"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\",\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        })\n    ],\n    secret: \"H8fm6xRsSw57Usi8pWW2R7FTLPJNZm66PftKRizrMw0=\"\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUN1QjtBQUNVO0FBQ0o7QUFDN0I7QUFDMkI7QUFDNUI7QUFHL0IsS0FBSyxDQUFDUyxZQUFZLEdBQUcsQ0FBQztJQUNwQkMsT0FBTyxFQUFFLENBQUM7UUFDUkMsTUFBTSxFQUFFLENBQUk7UUFDWkMsS0FBSyxFQUFFLENBQUs7UUFDWkMsTUFBTSxFQUFFLENBQUs7UUFDYkMsR0FBRyxFQUFFLENBQUs7UUFDVkMsSUFBSSxFQUFFLENBQUs7UUFDWEMsS0FBSyxFQUFFLENBQU07UUFDYkMsTUFBTSxFQUFFLENBQU07UUFFZCxFQUF1QjtRQUN2QkMsU0FBUyxFQUFFLENBQXVCO0lBQ3BDLENBQUM7QUFDSCxDQUFDO0FBRUQsRUFBeUI7QUFDekIsRUFBNEI7QUFDNUIsRUFBcUI7QUFDckIsRUFBSTtBQUVKLEVBQTBCO0FBQzFCLEVBQXNCO0FBQ3RCLEVBQUk7QUFJSixpRUFBZWxCLGdEQUFRLENBQUMsQ0FBQztJQUN2QixFQUFpRDtJQUNqRG1CLFNBQVMsRUFBRSxDQUFDO1FBQ1ZsQixpRUFBYyxDQUFDLENBQUM7WUFDZG1CLFFBQVEsRUFBRUMsMEVBQTRCO1lBQ3RDRyxZQUFZLEVBQUVILHFDQUFnQztZQUM5Q0ssYUFBYSxFQUFFLENBQUM7Z0JBQ2RDLE1BQU0sRUFBRSxDQUFDO29CQUNQQyxNQUFNLEVBQUUsQ0FBUztvQkFDakJDLFdBQVcsRUFBRSxDQUFTO29CQUN0QkMsYUFBYSxFQUFFLENBQU07Z0JBQ3ZCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQXdFSCxDQUFDO0lBQ0RDLE1BQU0sRUFBRSxDQUE4QztBQUt4RCxDQUFDLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvdG9mbmFtZXMvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZhTGVzcyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcclxuXHJcbiBcclxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gIGNvbnRlbnQ6IHtcclxuICAgIG1hcmdpbjogXCIwJVwiLFxyXG4gICAgd2lkdGg6IFwiMzAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiMzAlXCIsXHJcbiAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgcmlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgYm90dG9tOiBcImF1dG9cIixcclxuXHJcbiAgICAvLyBtYXJnaW5SaWdodDogJy01MCUnLFxyXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG4vLyBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbi8vICAgLy8gc2V0c291bmRwbGF5KGZhbHNlKTtcclxuLy8gICBzZXRJc09wZW4odHJ1ZSk7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XHJcbi8vICAgc2V0SXNPcGVuKGZhbHNlKTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcclxuICAgICAgYXV0aG9yaXphdGlvbjoge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgcHJvbXB0OiBcImNvbnNlbnRcIixcclxuICAgICAgICAgIGFjY2Vzc190eXBlOiBcIm9mZmxpbmVcIixcclxuICAgICAgICAgIHJlc3BvbnNlX3R5cGU6IFwiY29kZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuXHJcbiAgICBcclxuICAgIC8vIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgLy8gICAvLyBUaGUgbmFtZSB0byBkaXNwbGF5IG9uIHRoZSBzaWduIGluIGZvcm0gKGUuZy4gJ1NpZ24gaW4gd2l0aC4uLicpXHJcbiAgICAvLyAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcclxuICAgIC8vICAgLy8gVGhlIGNyZWRlbnRpYWxzIGlzIHVzZWQgdG8gZ2VuZXJhdGUgYSBzdWl0YWJsZSBmb3JtIG9uIHRoZSBzaWduIGluIHBhZ2UuXHJcbiAgICAvLyAgIC8vIFlvdSBjYW4gc3BlY2lmeSB3aGF0ZXZlciBmaWVsZHMgeW91IGFyZSBleHBlY3RpbmcgdG8gYmUgc3VibWl0dGVkLlxyXG4gICAgLy8gICAvLyBlLmcuIGRvbWFpbiwgdXNlcm5hbWUsIHBhc3N3b3JkLCAyRkEgdG9rZW4sIGV0Yy5cclxuICAgIC8vICAgLy8gWW91IGNhbiBwYXNzIGFueSBIVE1MIGF0dHJpYnV0ZSB0byB0aGUgPGlucHV0PiB0YWcgdGhyb3VnaCB0aGUgb2JqZWN0LlxyXG4gICAgLy8gICBjcmVkZW50aWFsczoge1xyXG4gICAgLy8gICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJlbWFpbEAuY29tXCIgfSxcclxuICAgIC8vICAgICAvLyBlbWFpbDp7bGFibGU6XCJFbWFpbFwiICwgdHlwZT1cImVtYWlsXCIgLHBsYWNlaG9sZGVyOlwiRW1haWxcIn0sXHJcbiAgICAvLyAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXHJcbiAgICAvLyAgIH0sXHJcblxyXG4gICAgLy8gICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xyXG5cclxuICAgIC8vICAgICAvL0ZPUiBQT1NUXHJcbiAgICAvLyAgICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXJzXCIsIHtcclxuICAgIC8vICAgICAvLyAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgIC8vICAgICAvLyAgICAgZW1haWw6IFwiV2FqYWhhdEBnbWFpbC5jb21cIixcclxuICAgIC8vICAgICAvLyAgICAgcGFzc3dvcmQ6IFwiMTIzXCIsXHJcbiAgICAvLyAgICAgLy8gICB9KSxcclxuICAgIC8vICAgICAvLyAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIC8vICAgICAvLyAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAvLyAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIC8vIEFkZCBsb2dpYyBoZXJlIHRvIGxvb2sgdXAgdGhlIHVzZXIgZnJvbSB0aGUgY3JlZGVudGlhbHMgc3VwcGxpZWRcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcInJlcXVlc3RcIiwgcmVxKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImNyZWRlbnRpYWxzXCIsIGNyZWRlbnRpYWxzKTtcclxuICAgIC8vICAgICAgIHZhciB1c2VyO1xyXG4gICAgLy8gICAgICAgYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXJzXCIpLnRoZW4oKHJlc3BvbnNlKT0+cmVzcG9uc2UuanNvbigpKS50aGVuKChBbGxVc2Vycyk9PntcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkFMTExMTFwiLEFsbFVzZXJzKVxyXG4gICAgLy8gICAgIGZvcih2YXIgaSA9MCA7IGk8QWxsVXNlcnMubGVuZ3RoO2krKyl7XHJcbiAgICAvLyAgICAgICAgICAgaWYgKEFsbFVzZXJzW2ldLmVtYWlsICA9PSBjcmVkZW50aWFscy5lbWFpbCl7XHJcbiAgICAvLyAgICAgICAgICAgICBpZihBbGxVc2Vyc1tpXS5wYXNzd29yZCA9PSBjcmVkZW50aWFscy5wYXNzd29yZCl7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxcIilcclxuICAgIC8vICAgICAgICAgICAgIHVzZXIgPSBBbGxVc2Vyc1tpXVxyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWsgICAgICBcclxuICAgIC8vICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICBlbHNle1xyXG4gICAgLy8gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyIGNvcnJlY3QgcGFzc3dvcmRcIilcclxuICAgIC8vICAgICAgICAgICAgICAgYnJlYWtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgZWxzZXtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlyc3QgU2lnbnVwXCIpXHJcbiAgICAvLyAgICAgICAgICAgICBhbGVydChcIlNJR05VUCBGSVNSVFwiKVxyXG4gICAgLy8gICAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLy8gY29uc3QgbmV3VXNlciA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCJNWVVTRVJcIiwgbmV3VXNlcik7XHJcbiAgICAvLyAgIH0pXHJcblxyXG4gICAgLy8gICAgIGlmICh1c2VyKSB7XHJcbiAgICAvLyAgICAgICAvLyBBbnkgb2JqZWN0IHJldHVybmVkIHdpbGwgYmUgc2F2ZWQgaW4gYHVzZXJgIHByb3BlcnR5IG9mIHRoZSBKV1RcclxuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgLy8gICAgICAgcmV0dXJuIHVzZXJcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgY29uc29sZS5sb2coXCJVbnN1Y2Vzc2Z1bFwiKTtcclxuICAgIC8vICAgICAgIC8vIDxzaWdudXBtb2RhbC8+XHJcbiAgICAvLyAgICAgICAvLyBJZiB5b3UgcmV0dXJuIG51bGwgb3IgZmFsc2UgdGhlbiB0aGUgY3JlZGVudGlhbHMgd2lsbCBiZSByZWplY3RlZFxyXG4gICAgLy8gICAgICAgLy8gcmV0dXJuIG51bGw7XHJcbiAgICAvLyAgICAgICAvLyBZb3UgY2FuIGFsc28gUmVqZWN0IHRoaXMgY2FsbGJhY2sgd2l0aCBhbiBFcnJvciBvciB3aXRoIGEgVVJMOlxyXG4gICAgLy8gICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKCdlcnJvciBtZXNzYWdlJykgLy8gUmVkaXJlY3QgdG8gZXJyb3IgcGFnZVxyXG4gICAgLy8gICAgICAgLy8gdGhyb3cgJy9wYXRoL3RvL3JlZGlyZWN0JyAgICAgICAgLy8gUmVkaXJlY3QgdG8gYSBVUkxcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9KSxcclxuICAgIC8vIC4uLmFkZCBtb3JlIHByb3ZpZGVycyBoZXJlXHJcbiAgXSxcclxuICBzZWNyZXQ6IFwiSDhmbTZ4UnNTdzU3VXNpOHBXVzJSN0ZUTFBKTlptNjZQZnRLUml6ck13MD1cIixcclxuICAvLyBqd3Q6IHtcclxuICAvLyAgIGVuY3J5cHRpb246IHRydWUsXHJcbiAgLy8gfSxcclxuICAvLyBzZWNyZXQ6IHByb2Nlc3MuZW52LnNlY3JldFxyXG59KTtcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwidXNlU2Vzc2lvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTdGF0ZSIsImZhTGVzcyIsIk1vZGFsIiwiY3VzdG9tU3R5bGVzIiwiY29udGVudCIsIm1hcmdpbiIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwidHJhbnNmb3JtIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiYXV0aG9yaXphdGlvbiIsInBhcmFtcyIsInByb21wdCIsImFjY2Vzc190eXBlIiwicmVzcG9uc2VfdHlwZSIsInNlY3JldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();