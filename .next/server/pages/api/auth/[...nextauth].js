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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"@fortawesome/free-brands-svg-icons\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-modal */ \"react-modal\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst customStyles = {\n    content: {\n        margin: \"0%\",\n        width: \"30%\",\n        height: \"30%\",\n        top: \"50%\",\n        left: \"50%\",\n        right: \"auto\",\n        bottom: \"auto\",\n        // marginRight: '-50%',\n        transform: \"translate(-50%, -50%)\"\n    }\n};\n// function openModal() {\n//   // setsoundplay(false);\n//   setIsOpen(true);\n// }\n// function closeModal() {\n//   setIsOpen(false);\n// }\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: \"712097391157-k2np9fogv44eq0k015ne7a4f1juohri4.apps.googleusercontent.com\",\n            clientSecret: \"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\",\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        })\n    ],\n    secret: \"H8fm6xRsSw57Usi8pWW2R7FTLPJNZm66PftKRizrMw0=\"\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUN1QjtBQUNVO0FBQ0o7QUFDN0I7QUFDMkI7QUFDNUI7QUFHL0IsS0FBSyxDQUFDUyxZQUFZLEdBQUcsQ0FBQztJQUNwQkMsT0FBTyxFQUFFLENBQUM7UUFDUkMsTUFBTSxFQUFFLENBQUk7UUFDWkMsS0FBSyxFQUFFLENBQUs7UUFDWkMsTUFBTSxFQUFFLENBQUs7UUFDYkMsR0FBRyxFQUFFLENBQUs7UUFDVkMsSUFBSSxFQUFFLENBQUs7UUFDWEMsS0FBSyxFQUFFLENBQU07UUFDYkMsTUFBTSxFQUFFLENBQU07UUFFZCxFQUF1QjtRQUN2QkMsU0FBUyxFQUFFLENBQXVCO0lBQ3BDLENBQUM7QUFDSCxDQUFDO0FBRUQsRUFBeUI7QUFDekIsRUFBNEI7QUFDNUIsRUFBcUI7QUFDckIsRUFBSTtBQUVKLEVBQTBCO0FBQzFCLEVBQXNCO0FBQ3RCLEVBQUk7QUFJSixpRUFBZWxCLGdEQUFRLENBQUMsQ0FBQztJQUN2QixFQUFpRDtJQUNqRG1CLFNBQVMsRUFBRSxDQUFDO1FBQ1ZsQixpRUFBYyxDQUFDLENBQUM7WUFDZG1CLFFBQVEsRUFBRUMsMEVBQTRCO1lBQ3RDRyxZQUFZLEVBQUVILHFDQUFnQztZQUM5Q0ssYUFBYSxFQUFFLENBQUM7Z0JBQ2RDLE1BQU0sRUFBRSxDQUFDO29CQUNQQyxNQUFNLEVBQUUsQ0FBUztvQkFDakJDLFdBQVcsRUFBRSxDQUFTO29CQUN0QkMsYUFBYSxFQUFFLENBQU07Z0JBQ3ZCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQXdFSCxDQUFDO0lBQ0RDLE1BQU0sRUFBRSxDQUE4QztBQUt4RCxDQUFDLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvdG9mbmFtZXMvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZhTGVzcyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcclxuXHJcbiBcclxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gIGNvbnRlbnQ6IHtcclxuICAgIG1hcmdpbjogXCIwJVwiLFxyXG4gICAgd2lkdGg6IFwiMzAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiMzAlXCIsXHJcbiAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgcmlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgYm90dG9tOiBcImF1dG9cIixcclxuXHJcbiAgICAvLyBtYXJnaW5SaWdodDogJy01MCUnLFxyXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG4vLyBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbi8vICAgLy8gc2V0c291bmRwbGF5KGZhbHNlKTtcclxuLy8gICBzZXRJc09wZW4odHJ1ZSk7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XHJcbi8vICAgc2V0SXNPcGVuKGZhbHNlKTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcclxuICAgICAgYXV0aG9yaXphdGlvbjoge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgcHJvbXB0OiBcImNvbnNlbnRcIixcclxuICAgICAgICAgIGFjY2Vzc190eXBlOiBcIm9mZmxpbmVcIixcclxuICAgICAgICAgIHJlc3BvbnNlX3R5cGU6IFwiY29kZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuXHJcbiAgICBcclxuICAgIC8vIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgLy8gICAvLyBUaGUgbmFtZSB0byBkaXNwbGF5IG9uIHRoZSBzaWduIGluIGZvcm0gKGUuZy4gJ1NpZ24gaW4gd2l0aC4uLicpXHJcbiAgICAvLyAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcclxuICAgIC8vICAgLy8gVGhlIGNyZWRlbnRpYWxzIGlzIHVzZWQgdG8gZ2VuZXJhdGUgYSBzdWl0YWJsZSBmb3JtIG9uIHRoZSBzaWduIGluIHBhZ2UuXHJcbiAgICAvLyAgIC8vIFlvdSBjYW4gc3BlY2lmeSB3aGF0ZXZlciBmaWVsZHMgeW91IGFyZSBleHBlY3RpbmcgdG8gYmUgc3VibWl0dGVkLlxyXG4gICAgLy8gICAvLyBlLmcuIGRvbWFpbiwgdXNlcm5hbWUsIHBhc3N3b3JkLCAyRkEgdG9rZW4sIGV0Yy5cclxuICAgIC8vICAgLy8gWW91IGNhbiBwYXNzIGFueSBIVE1MIGF0dHJpYnV0ZSB0byB0aGUgPGlucHV0PiB0YWcgdGhyb3VnaCB0aGUgb2JqZWN0LlxyXG4gICAgLy8gICBjcmVkZW50aWFsczoge1xyXG4gICAgLy8gICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJlbWFpbEAuY29tXCIgfSxcclxuICAgIC8vICAgICAvLyBlbWFpbDp7bGFibGU6XCJFbWFpbFwiICwgdHlwZT1cImVtYWlsXCIgLHBsYWNlaG9sZGVyOlwiRW1haWxcIn0sXHJcbiAgICAvLyAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXHJcbiAgICAvLyAgIH0sXHJcblxyXG4gICAgLy8gICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xyXG5cclxuICAgIC8vICAgICAvL0ZPUiBQT1NUXHJcbiAgICAvLyAgICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3BvdG9mbmFtZXMuY29tL2FwaS91c2Vyc1wiLCB7XHJcbiAgICAvLyAgICAgLy8gICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAvLyAgICAgLy8gICAgIGVtYWlsOiBcIldhamFoYXRAZ21haWwuY29tXCIsXHJcbiAgICAvLyAgICAgLy8gICAgIHBhc3N3b3JkOiBcIjEyM1wiLFxyXG4gICAgLy8gICAgIC8vICAgfSksXHJcbiAgICAvLyAgICAgLy8gICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAvLyAgICAgLy8gICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgLy8gICAgIC8vIH0pO1xyXG5cclxuICAgICAgICBcclxuICAgIC8vICAgICAvLyBBZGQgbG9naWMgaGVyZSB0byBsb29rIHVwIHRoZSB1c2VyIGZyb20gdGhlIGNyZWRlbnRpYWxzIHN1cHBsaWVkXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJyZXF1ZXN0XCIsIHJlcSk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJjcmVkZW50aWFsc1wiLCBjcmVkZW50aWFscyk7XHJcbiAgICAvLyAgICAgICB2YXIgdXNlcjtcclxuICAgIC8vICAgICAgIGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9wb3RvZm5hbWVzLmNvbS9hcGkvdXNlcnNcIikudGhlbigocmVzcG9uc2UpPT5yZXNwb25zZS5qc29uKCkpLnRoZW4oKEFsbFVzZXJzKT0+e1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiQUxMTExMXCIsQWxsVXNlcnMpXHJcbiAgICAvLyAgICAgZm9yKHZhciBpID0wIDsgaTxBbGxVc2Vycy5sZW5ndGg7aSsrKXtcclxuICAgIC8vICAgICAgICAgICBpZiAoQWxsVXNlcnNbaV0uZW1haWwgID09IGNyZWRlbnRpYWxzLmVtYWlsKXtcclxuICAgIC8vICAgICAgICAgICAgIGlmKEFsbFVzZXJzW2ldLnBhc3N3b3JkID09IGNyZWRlbnRpYWxzLnBhc3N3b3JkKXtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bFwiKVxyXG4gICAgLy8gICAgICAgICAgICAgdXNlciA9IEFsbFVzZXJzW2ldXHJcbiAgICAvLyAgICAgICAgICAgICBicmVhayAgICAgIFxyXG4gICAgLy8gICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAvLyAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW50ZXIgY29ycmVjdCBwYXNzd29yZFwiKVxyXG4gICAgLy8gICAgICAgICAgICAgICBicmVha1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICBlbHNle1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaXJzdCBTaWdudXBcIilcclxuICAgIC8vICAgICAgICAgICAgIGFsZXJ0KFwiU0lHTlVQIEZJU1JUXCIpXHJcbiAgICAvLyAgICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvLyBjb25zdCBuZXdVc2VyID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcIk1ZVVNFUlwiLCBuZXdVc2VyKTtcclxuICAgIC8vICAgfSlcclxuXHJcbiAgICAvLyAgICAgaWYgKHVzZXIpIHtcclxuICAgIC8vICAgICAgIC8vIEFueSBvYmplY3QgcmV0dXJuZWQgd2lsbCBiZSBzYXZlZCBpbiBgdXNlcmAgcHJvcGVydHkgb2YgdGhlIEpXVFxyXG4gICAgLy8gICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAvLyAgICAgICByZXR1cm4gdXNlclxyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZyhcIlVuc3VjZXNzZnVsXCIpO1xyXG4gICAgLy8gICAgICAgLy8gPHNpZ251cG1vZGFsLz5cclxuICAgIC8vICAgICAgIC8vIElmIHlvdSByZXR1cm4gbnVsbCBvciBmYWxzZSB0aGVuIHRoZSBjcmVkZW50aWFscyB3aWxsIGJlIHJlamVjdGVkXHJcbiAgICAvLyAgICAgICAvLyByZXR1cm4gbnVsbDtcclxuICAgIC8vICAgICAgIC8vIFlvdSBjYW4gYWxzbyBSZWplY3QgdGhpcyBjYWxsYmFjayB3aXRoIGFuIEVycm9yIG9yIHdpdGggYSBVUkw6XHJcbiAgICAvLyAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ2Vycm9yIG1lc3NhZ2UnKSAvLyBSZWRpcmVjdCB0byBlcnJvciBwYWdlXHJcbiAgICAvLyAgICAgICAvLyB0aHJvdyAnL3BhdGgvdG8vcmVkaXJlY3QnICAgICAgICAvLyBSZWRpcmVjdCB0byBhIFVSTFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSxcclxuICAgIC8vIH0pLFxyXG4gICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcclxuICBdLFxyXG4gIHNlY3JldDogXCJIOGZtNnhSc1N3NTdVc2k4cFdXMlI3RlRMUEpOWm02NlBmdEtSaXpyTXcwPVwiLFxyXG4gIC8vIGp3dDoge1xyXG4gIC8vICAgZW5jcnlwdGlvbjogdHJ1ZSxcclxuICAvLyB9LFxyXG4gIC8vIHNlY3JldDogcHJvY2Vzcy5lbnYuc2VjcmV0XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJ1c2VTZXNzaW9uIiwic2lnbkluIiwic2lnbk91dCIsInVzZVN0YXRlIiwiZmFMZXNzIiwiTW9kYWwiLCJjdXN0b21TdHlsZXMiLCJjb250ZW50IiwibWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ0cmFuc2Zvcm0iLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJhdXRob3JpemF0aW9uIiwicGFyYW1zIiwicHJvbXB0IiwiYWNjZXNzX3R5cGUiLCJyZXNwb25zZV90eXBlIiwic2VjcmV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

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