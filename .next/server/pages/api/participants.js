"use strict";
(() => {
var exports = {};
exports.id = 270;
exports.ids = [270];
exports.modules = {

/***/ 185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(845);
/* harmony import */ var _models_Participant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(832);
/* harmony import */ var _models_Participant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_Participant__WEBPACK_IMPORTED_MODULE_1__);


async function handler(req, res) {
    const { method  } = req;
    await (0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
    switch(method){
        case 'GET':
            try {
                const participants = await _models_Participant__WEBPACK_IMPORTED_MODULE_1___default().find({
                });
                res.status(200).json(participants);
            } catch (error) {
                res.status(400).json({
                    success: false
                });
            }
            break;
        case 'POST':
            try {
                // const participant = await Participant.create(req.body)
                var addParticipant = new (_models_Participant__WEBPACK_IMPORTED_MODULE_1___default())(req.body);
                addParticipant.save(function(err) {
                    if (err) return handleError(err);
                // saved!
                });
                res.status(201).json({
                    addParticipant
                });
            } catch (error1) {
                res.status(400).json({
                    success: false
                });
            }
            break;
        case 'DELETE':
            try {
                _models_Participant__WEBPACK_IMPORTED_MODULE_1___default().deleteOne({
                    _id: req.body
                }, function(err) {
                    if (err) return handleError(err);
                // saved!
                });
                res.status(201).json({
                    success: true
                });
            } catch (error2) {
                res.status(400).json({
                    success: false
                });
            }
            break;
        default:
            res.status(400).json({
                success: false
            });
            break;
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [617], () => (__webpack_exec__(162)));
module.exports = __webpack_exports__;

})();