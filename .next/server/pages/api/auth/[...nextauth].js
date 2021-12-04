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

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: \"712097391157-k2np9fogv44eq0k015ne7a4f1juohri4.apps.googleusercontent.com\",\n            clientSecret: \"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\",\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            // The name to display on the sign in form (e.g. 'Sign in with...')\n            name: 'Credentials',\n            // The credentials is used to generate a suitable form on the sign in page.\n            // You can specify whatever fields you are expecting to be submitted.\n            // e.g. domain, username, password, 2FA token, etc.\n            // You can pass any HTML attribute to the <input> tag through the object.\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\",\n                    placeholder: \"jsmith\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                // Add logic here to look up the user from the credentials supplied\n                const user = {\n                    id: 1,\n                    name: 'J Smith',\n                    email: 'jsmith@example.com'\n                };\n                if (user) {\n                    // Any object returned will be saved in `user` property of the JWT\n                    console.log(user);\n                    return user;\n                } else {\n                    // If you return null or false then the credentials will be rejected\n                    return null;\n                // You can also Reject this callback with an Error or with a URL:\n                // throw new Error('error message') // Redirect to error page\n                // throw '/path/to/redirect'        // Redirect to a URL\n                }\n            }\n        })\n    ],\n    secret: \"H8fm6xRsSw57Usi8pWW2R7FTLPJNZm66PftKRizrMw0=\"\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDdUI7QUFDVTtBQUVqRSxpRUFBZUEsZ0RBQVEsQ0FBQyxDQUFDO0lBQ3ZCLEVBQWlEO0lBQ2pERyxTQUFTLEVBQUUsQ0FBQztRQUNWRixpRUFBYyxDQUFDLENBQUM7WUFDZEcsUUFBUSxFQUFFQywwRUFBNEI7WUFDdENHLFlBQVksRUFBRUgscUNBQWdDO1lBQzlDSyxhQUFhLEVBQUUsQ0FBQztnQkFDZEMsTUFBTSxFQUFFLENBQUM7b0JBQ1BDLE1BQU0sRUFBRSxDQUFTO29CQUNqQkMsV0FBVyxFQUFFLENBQVM7b0JBQ3RCQyxhQUFhLEVBQUUsQ0FBTTtnQkFDdkIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQ0RaLHNFQUFtQixDQUFDLENBQUM7WUFDbkIsRUFBbUU7WUFDbkVhLElBQUksRUFBRSxDQUFhO1lBQ25CLEVBQTJFO1lBQzNFLEVBQXFFO1lBQ3JFLEVBQW1EO1lBQ25ELEVBQXlFO1lBQ3pFQyxXQUFXLEVBQUUsQ0FBQztnQkFDWkMsUUFBUSxFQUFFLENBQUM7b0JBQUNDLEtBQUssRUFBRSxDQUFVO29CQUFFQyxJQUFJLEVBQUUsQ0FBTTtvQkFBRUMsV0FBVyxFQUFFLENBQVE7Z0JBQUMsQ0FBQztnQkFDcEVDLFFBQVEsRUFBRSxDQUFDO29CQUFFSCxLQUFLLEVBQUUsQ0FBVTtvQkFBRUMsSUFBSSxFQUFFLENBQVU7Z0JBQUMsQ0FBQztZQUNwRCxDQUFDO2tCQUNLRyxTQUFTLEVBQUNOLFdBQVcsRUFBRU8sR0FBRyxFQUFFLENBQUM7Z0JBQ2pDLEVBQW1FO2dCQUNuRSxLQUFLLENBQUNDLElBQUksR0FBRyxDQUFDO29CQUFDQyxFQUFFLEVBQUUsQ0FBQztvQkFBRVYsSUFBSSxFQUFFLENBQVM7b0JBQUVXLEtBQUssRUFBRSxDQUFvQjtnQkFBQyxDQUFDO2dCQUVwRSxFQUFFLEVBQUVGLElBQUksRUFBRSxDQUFDO29CQUNULEVBQWtFO29CQUNsRUcsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUk7b0JBQ2hCLE1BQU0sQ0FBQ0EsSUFBSTtnQkFDYixDQUFDLE1BQU0sQ0FBQztvQkFDTixFQUFvRTtvQkFDcEUsTUFBTSxDQUFDLElBQUk7Z0JBQ1gsRUFBaUU7Z0JBQ2pFLEVBQTZEO2dCQUM3RCxFQUF3RDtnQkFDMUQsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBRUgsQ0FBQztJQUNESyxNQUFNLEVBQUUsQ0FBOEM7QUFLeEQsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG90b2ZuYW1lcy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCJcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGF1dGhvcml6YXRpb246IHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgcHJvbXB0OiBcImNvbnNlbnRcIixcbiAgICAgICAgICBhY2Nlc3NfdHlwZTogXCJvZmZsaW5lXCIsXG4gICAgICAgICAgcmVzcG9uc2VfdHlwZTogXCJjb2RlXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLFxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgLy8gVGhlIG5hbWUgdG8gZGlzcGxheSBvbiB0aGUgc2lnbiBpbiBmb3JtIChlLmcuICdTaWduIGluIHdpdGguLi4nKVxuICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgIC8vIFRoZSBjcmVkZW50aWFscyBpcyB1c2VkIHRvIGdlbmVyYXRlIGEgc3VpdGFibGUgZm9ybSBvbiB0aGUgc2lnbiBpbiBwYWdlLlxuICAgICAgLy8gWW91IGNhbiBzcGVjaWZ5IHdoYXRldmVyIGZpZWxkcyB5b3UgYXJlIGV4cGVjdGluZyB0byBiZSBzdWJtaXR0ZWQuXG4gICAgICAvLyBlLmcuIGRvbWFpbiwgdXNlcm5hbWUsIHBhc3N3b3JkLCAyRkEgdG9rZW4sIGV0Yy5cbiAgICAgIC8vIFlvdSBjYW4gcGFzcyBhbnkgSFRNTCBhdHRyaWJ1dGUgdG8gdGhlIDxpbnB1dD4gdGFnIHRocm91Z2ggdGhlIG9iamVjdC5cbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIlVzZXJuYW1lXCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJqc21pdGhcIiB9LFxuICAgICAgICBwYXNzd29yZDogeyAgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xuICAgICAgICAvLyBBZGQgbG9naWMgaGVyZSB0byBsb29rIHVwIHRoZSB1c2VyIGZyb20gdGhlIGNyZWRlbnRpYWxzIHN1cHBsaWVkXG4gICAgICAgIGNvbnN0IHVzZXIgPSB7IGlkOiAxLCBuYW1lOiAnSiBTbWl0aCcsIGVtYWlsOiAnanNtaXRoQGV4YW1wbGUuY29tJyB9XG4gIFxuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgIC8vIEFueSBvYmplY3QgcmV0dXJuZWQgd2lsbCBiZSBzYXZlZCBpbiBgdXNlcmAgcHJvcGVydHkgb2YgdGhlIEpXVFxuICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgICAgICAgIHJldHVybiB1c2VyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSWYgeW91IHJldHVybiBudWxsIG9yIGZhbHNlIHRoZW4gdGhlIGNyZWRlbnRpYWxzIHdpbGwgYmUgcmVqZWN0ZWRcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIC8vIFlvdSBjYW4gYWxzbyBSZWplY3QgdGhpcyBjYWxsYmFjayB3aXRoIGFuIEVycm9yIG9yIHdpdGggYSBVUkw6XG4gICAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKCdlcnJvciBtZXNzYWdlJykgLy8gUmVkaXJlY3QgdG8gZXJyb3IgcGFnZVxuICAgICAgICAgIC8vIHRocm93ICcvcGF0aC90by9yZWRpcmVjdCcgICAgICAgIC8vIFJlZGlyZWN0IHRvIGEgVVJMXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC8vIC4uLmFkZCBtb3JlIHByb3ZpZGVycyBoZXJlXG4gIF0sXG4gIHNlY3JldDogXCJIOGZtNnhSc1N3NTdVc2k4cFdXMlI3RlRMUEpOWm02NlBmdEtSaXpyTXcwPVwiXG4gIC8vIGp3dDoge1xuICAvLyAgIGVuY3J5cHRpb246IHRydWUsXG4gIC8vIH0sXG4gIC8vIHNlY3JldDogcHJvY2Vzcy5lbnYuc2VjcmV0XG59KSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJwcm9tcHQiLCJhY2Nlc3NfdHlwZSIsInJlc3BvbnNlX3R5cGUiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJ1c2VybmFtZSIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJyZXEiLCJ1c2VyIiwiaWQiLCJlbWFpbCIsImNvbnNvbGUiLCJsb2ciLCJzZWNyZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

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