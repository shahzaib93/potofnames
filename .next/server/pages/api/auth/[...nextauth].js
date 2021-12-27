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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: \"712097391157-k2np9fogv44eq0k015ne7a4f1juohri4.apps.googleusercontent.com\",\n            clientSecret: \"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\",\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\"\n                }\n            }\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            // The name to display on the sign in form (e.g. 'Sign in with...')\n            name: 'Credentials',\n            // The credentials is used to generate a suitable form on the sign in page.\n            // You can specify whatever fields you are expecting to be submitted.\n            // e.g. domain, username, password, 2FA token, etc.\n            // You can pass any HTML attribute to the <input> tag through the object.\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\",\n                    placeholder: \"email@.com\"\n                },\n                // email:{lable:\"Email\" , type=\"email\" ,placeholder:\"Email\"},\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                // Add logic here to look up the user from the credentials supplied\n                console.log(\"request\", req);\n                console.log(\"credentials\", credentials);\n                const myuser = {\n                    id: 1,\n                    name: 'wajahat',\n                    email: 'wajahat@gmail.com',\n                    pass: \"123\"\n                };\n                if (credentials.email == myuser.email && credentials.password == myuser.pass) {\n                    console.log(\"Sucessful\");\n                } else {\n                    console.log(\"Unsucessful\");\n                }\n                const user = {\n                    id: 1,\n                    name: 'J Smith',\n                    email: 'jsmith@example.com'\n                };\n                if (user) {\n                    // Any object returned will be saved in `user` property of the JWT\n                    console.log(user);\n                    return user;\n                } else {\n                    // If you return null or false then the credentials will be rejected\n                    return null;\n                // You can also Reject this callback with an Error or with a URL:\n                // throw new Error('error message') // Redirect to error page\n                // throw '/path/to/redirect'        // Redirect to a URL\n                }\n            }\n        })\n    ],\n    secret: \"H8fm6xRsSw57Usi8pWW2R7FTLPJNZm66PftKRizrMw0=\"\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDdUI7QUFDVTtBQUVqRSxpRUFBZUEsZ0RBQVEsQ0FBQyxDQUFDO0lBQ3ZCLEVBQWlEO0lBQ2pERyxTQUFTLEVBQUUsQ0FBQztRQUNWRixpRUFBYyxDQUFDLENBQUM7WUFDZEcsUUFBUSxFQUFFQywwRUFBNEI7WUFDdENHLFlBQVksRUFBRUgscUNBQWdDO1lBQzlDSyxhQUFhLEVBQUUsQ0FBQztnQkFDZEMsTUFBTSxFQUFFLENBQUM7b0JBQ1BDLE1BQU0sRUFBRSxDQUFTO29CQUNqQkMsV0FBVyxFQUFFLENBQVM7b0JBQ3RCQyxhQUFhLEVBQUUsQ0FBTTtnQkFDdkIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBQ0RaLHNFQUFtQixDQUFDLENBQUM7WUFDbkIsRUFBbUU7WUFDbkVhLElBQUksRUFBRSxDQUFhO1lBQ25CLEVBQTJFO1lBQzNFLEVBQXFFO1lBQ3JFLEVBQW1EO1lBQ25ELEVBQXlFO1lBQ3pFQyxXQUFXLEVBQUUsQ0FBQztnQkFDWkMsS0FBSyxFQUFFLENBQUM7b0JBQUNDLEtBQUssRUFBRSxDQUFPO29CQUFFQyxJQUFJLEVBQUUsQ0FBTTtvQkFBRUMsV0FBVyxFQUFFLENBQVk7Z0JBQUMsQ0FBQztnQkFDbEUsRUFBNkQ7Z0JBQzdEQyxRQUFRLEVBQUUsQ0FBQztvQkFBRUgsS0FBSyxFQUFFLENBQVU7b0JBQUVDLElBQUksRUFBRSxDQUFVO2dCQUFDLENBQUM7WUFDcEQsQ0FBQztrQkFDS0csU0FBUyxFQUFDTixXQUFXLEVBQUVPLEdBQUcsRUFBRSxDQUFDO2dCQUNqQyxFQUFtRTtnQkFDbkVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVMsVUFBQ0YsR0FBRztnQkFDekJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWEsY0FBQ1QsV0FBVztnQkFFN0MsS0FBSyxDQUFDVSxNQUFNLEdBQUcsQ0FBQ0M7b0JBQUFBLEVBQUUsRUFBRSxDQUFDO29CQUFFWixJQUFJLEVBQUUsQ0FBUztvQkFBRUUsS0FBSyxFQUFFLENBQW1CO29CQUFFVyxJQUFJLEVBQUMsQ0FBSztnQkFBQSxDQUFDO2dCQUMvRSxFQUFFLEVBQUNaLFdBQVcsQ0FBQ0MsS0FBSyxJQUFJUyxNQUFNLENBQUNULEtBQUssSUFBSUQsV0FBVyxDQUFDSyxRQUFRLElBQUlLLE1BQU0sQ0FBQ0UsSUFBSSxFQUFFLENBQUM7b0JBQzVFSixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFXO2dCQUN6QixDQUFDLE1BRUcsQ0FBQ0Q7b0JBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWE7Z0JBQUMsQ0FBQztnQkFFeEIsS0FBSyxDQUFDSSxJQUFJLEdBQUcsQ0FBQztvQkFBQ0YsRUFBRSxFQUFFLENBQUM7b0JBQUVaLElBQUksRUFBRSxDQUFTO29CQUFFRSxLQUFLLEVBQUUsQ0FBb0I7Z0JBQUMsQ0FBQztnQkFFcEUsRUFBRSxFQUFFWSxJQUFJLEVBQUUsQ0FBQztvQkFDVCxFQUFrRTtvQkFDbEVMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxJQUFJO29CQUNoQixNQUFNLENBQUNBLElBQUk7Z0JBQ2IsQ0FBQyxNQUFNLENBQUM7b0JBQ04sRUFBb0U7b0JBQ3BFLE1BQU0sQ0FBQyxJQUFJO2dCQUNYLEVBQWlFO2dCQUNqRSxFQUE2RDtnQkFDN0QsRUFBd0Q7Z0JBQzFELENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUVILENBQUM7SUFDREMsTUFBTSxFQUFFLENBQThDO0FBS3hELENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvdG9mbmFtZXMvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCJcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXHJcbiAgICAgIGF1dGhvcml6YXRpb246IHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHByb21wdDogXCJjb25zZW50XCIsXHJcbiAgICAgICAgICBhY2Nlc3NfdHlwZTogXCJvZmZsaW5lXCIsXHJcbiAgICAgICAgICByZXNwb25zZV90eXBlOiBcImNvZGVcIlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSksXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgLy8gVGhlIG5hbWUgdG8gZGlzcGxheSBvbiB0aGUgc2lnbiBpbiBmb3JtIChlLmcuICdTaWduIGluIHdpdGguLi4nKVxyXG4gICAgICBuYW1lOiAnQ3JlZGVudGlhbHMnLFxyXG4gICAgICAvLyBUaGUgY3JlZGVudGlhbHMgaXMgdXNlZCB0byBnZW5lcmF0ZSBhIHN1aXRhYmxlIGZvcm0gb24gdGhlIHNpZ24gaW4gcGFnZS5cclxuICAgICAgLy8gWW91IGNhbiBzcGVjaWZ5IHdoYXRldmVyIGZpZWxkcyB5b3UgYXJlIGV4cGVjdGluZyB0byBiZSBzdWJtaXR0ZWQuXHJcbiAgICAgIC8vIGUuZy4gZG9tYWluLCB1c2VybmFtZSwgcGFzc3dvcmQsIDJGQSB0b2tlbiwgZXRjLlxyXG4gICAgICAvLyBZb3UgY2FuIHBhc3MgYW55IEhUTUwgYXR0cmlidXRlIHRvIHRoZSA8aW5wdXQ+IHRhZyB0aHJvdWdoIHRoZSBvYmplY3QuXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcImVtYWlsQC5jb21cIiB9LFxyXG4gICAgICAgIC8vIGVtYWlsOntsYWJsZTpcIkVtYWlsXCIgLCB0eXBlPVwiZW1haWxcIiAscGxhY2Vob2xkZXI6XCJFbWFpbFwifSxcclxuICAgICAgICBwYXNzd29yZDogeyAgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcclxuICAgICAgICAvLyBBZGQgbG9naWMgaGVyZSB0byBsb29rIHVwIHRoZSB1c2VyIGZyb20gdGhlIGNyZWRlbnRpYWxzIHN1cHBsaWVkXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXF1ZXN0XCIscmVxKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlZGVudGlhbHNcIixjcmVkZW50aWFscylcclxuIFxyXG5jb25zdCBteXVzZXIgPSB7aWQ6IDEsIG5hbWU6ICd3YWphaGF0JywgZW1haWw6ICd3YWphaGF0QGdtYWlsLmNvbScsIHBhc3M6XCIxMjNcIn1cclxuaWYoY3JlZGVudGlhbHMuZW1haWwgPT0gbXl1c2VyLmVtYWlsICYmIGNyZWRlbnRpYWxzLnBhc3N3b3JkID09IG15dXNlci5wYXNzICl7XHJcbiAgY29uc29sZS5sb2coXCJTdWNlc3NmdWxcIilcclxufVxyXG5cclxuZWxzZXtjb25zb2xlLmxvZyhcIlVuc3VjZXNzZnVsXCIpfVxyXG5cclxuICAgICAgICBjb25zdCB1c2VyID0geyBpZDogMSwgbmFtZTogJ0ogU21pdGgnLCBlbWFpbDogJ2pzbWl0aEBleGFtcGxlLmNvbScgfVxyXG4gIFxyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAvLyBBbnkgb2JqZWN0IHJldHVybmVkIHdpbGwgYmUgc2F2ZWQgaW4gYHVzZXJgIHByb3BlcnR5IG9mIHRoZSBKV1RcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICAgICAgcmV0dXJuIHVzZXJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gSWYgeW91IHJldHVybiBudWxsIG9yIGZhbHNlIHRoZW4gdGhlIGNyZWRlbnRpYWxzIHdpbGwgYmUgcmVqZWN0ZWRcclxuICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAvLyBZb3UgY2FuIGFsc28gUmVqZWN0IHRoaXMgY2FsbGJhY2sgd2l0aCBhbiBFcnJvciBvciB3aXRoIGEgVVJMOlxyXG4gICAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKCdlcnJvciBtZXNzYWdlJykgLy8gUmVkaXJlY3QgdG8gZXJyb3IgcGFnZVxyXG4gICAgICAgICAgLy8gdGhyb3cgJy9wYXRoL3RvL3JlZGlyZWN0JyAgICAgICAgLy8gUmVkaXJlY3QgdG8gYSBVUkxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvLyAuLi5hZGQgbW9yZSBwcm92aWRlcnMgaGVyZVxyXG4gIF0sXHJcbiAgc2VjcmV0OiBcIkg4Zm02eFJzU3c1N1VzaThwV1cyUjdGVExQSk5abTY2UGZ0S1JpenJNdzA9XCJcclxuICAvLyBqd3Q6IHtcclxuICAvLyAgIGVuY3J5cHRpb246IHRydWUsXHJcbiAgLy8gfSxcclxuICAvLyBzZWNyZXQ6IHByb2Nlc3MuZW52LnNlY3JldFxyXG59KSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJwcm9tcHQiLCJhY2Nlc3NfdHlwZSIsInJlc3BvbnNlX3R5cGUiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJyZXEiLCJjb25zb2xlIiwibG9nIiwibXl1c2VyIiwiaWQiLCJwYXNzIiwidXNlciIsInNlY3JldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

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