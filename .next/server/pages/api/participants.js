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

/***/ 832:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var _mongoose = _interopRequireDefault(__webpack_require__(185));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const ParticipantSchema = new _mongoose.default.Schema({
    name: String
});
module.exports = _mongoose.default.models.Participant || _mongoose.default.model('Participant', ParticipantSchema);


/***/ }),

/***/ 914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./utils/dbConnect.js

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}
let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    };
}
async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };
        cached.promise = external_mongoose_default().connect(MONGODB_URI, opts).then((mongoose)=>{
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
/* harmony default export */ const utils_dbConnect = (dbConnect);

// EXTERNAL MODULE: ./models/Participant.js
var Participant = __webpack_require__(832);
var Participant_default = /*#__PURE__*/__webpack_require__.n(Participant);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./pages/api/participants.js



async function handler(req, res) {
    const { method  } = req;
    await utils_dbConnect();
    // var book1 = new Book({ name: 'Introduction to Mongoose', price: 10, quantity: 25 });
    // var user1 = new User({name: "Ahmed", email: "ahmad@abc.com"});
    // user1.save(function (err, user) {
    //   if (err) return handleError(err);
    //   console.log(user.name + "Is saved well");
    //   // saved!
    // });
    switch(method){
        case 'GET':
            try {
                const participants = await Participant_default().find({
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
                // var book1 = new Book({ name: 'Introduction to Mongoose', price: 10, quantity: 25 });
                // var user1 = new User({name: "Ahmed", email: "ahmad@abc.com"});
                // user1.save(function (err, user) {
                //   if (err) return handleError(err);
                //   console.log(user.name + "Is saved well");
                //   // saved!
                // });
                const participant = await Participant_default().create(req.body);
                const participants = await Participant_default().find({
                });
                res.status(201).json({
                    success: true,
                    data: participants
                });
            // const participants = await Participant.find({})
            // res.status(200).json(participants)
            } catch (error1) {
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
var __webpack_exports__ = (__webpack_exec__(914));
module.exports = __webpack_exports__;

})();