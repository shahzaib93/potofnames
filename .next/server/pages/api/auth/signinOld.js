"use strict";
(() => {
var exports = {};
exports.id = 422;
exports.ids = [422];
exports.modules = {

/***/ 9805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SignIn),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
;// CONCATENATED MODULE: external "next-auth/react"
const react_namespaceObject = require("next-auth/react");
;// CONCATENATED MODULE: ./pages/api/auth/signinOld.js


// This is the recommended way for Next.js 9.3 or newer
async function getServerSideProps(context) {
    const providers = await (0,react_namespaceObject.getProviders)();
    return {
        props: {
            providers
        }
    };
}
function SignIn({ providers  }) {
    return(/*#__PURE__*/ jsx_runtime_namespaceObject.jsx(jsx_runtime_namespaceObject.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("button", {
            onClick: ()=>(0,react_namespaceObject.signIn)("google")
            ,
            children: [
                "Sign in with ",
                "google"
            ]
        })
    }));
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9805));
module.exports = __webpack_exports__;

})();