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
exports.id = "pages/api/wheelSpinTimes";
exports.ids = ["pages/api/wheelSpinTimes"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "./models/WheelSpinTimes.js":
/*!**********************************!*\
  !*** ./models/WheelSpinTimes.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar _mongoose = _interopRequireDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst WheelSpinTimesSchema = new _mongoose.default.Schema({\n    times: {\n        type: Number\n    }\n});\nmodule.exports = _mongoose.default.models.WheelSpinTimes || _mongoose.default.model('WheelSpinTimes', WheelSpinTimesSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvV2hlZWxTcGluVGltZXMuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFxQixHQUFVLENBQVYsU0FBVTs7Ozs7O0FBRS9CLEtBQUssQ0FBQ0Esb0JBQW9CLEdBQUcsR0FBRyxDQUZYLFNBQVUsU0FFV0MsTUFBTSxDQUFDLENBQUM7SUFDaERDLEtBQUssRUFBQyxDQUFDQztRQUFBQSxJQUFJLEVBQUNDLE1BQU07SUFBQSxDQUFDO0FBRXJCLENBQUM7QUFFREMsTUFBTSxDQUFDQyxPQUFPLEdBUE8sU0FBVSxTQU9MQyxNQUFNLENBQUNDLGNBQWMsSUFQMUIsU0FBVSxTQU82QkMsS0FBSyxDQUFDLENBQWdCLGlCQUFFVCxvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3RvZm5hbWVzLy4vbW9kZWxzL1doZWVsU3BpblRpbWVzLmpzP2U0Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3QgV2hlZWxTcGluVGltZXNTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICB0aW1lczp7dHlwZTpOdW1iZXJ9XHJcblxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuV2hlZWxTcGluVGltZXMgfHwgbW9uZ29vc2UubW9kZWwoJ1doZWVsU3BpblRpbWVzJywgV2hlZWxTcGluVGltZXNTY2hlbWEpXHJcbiJdLCJuYW1lcyI6WyJXaGVlbFNwaW5UaW1lc1NjaGVtYSIsIlNjaGVtYSIsInRpbWVzIiwidHlwZSIsIk51bWJlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJXaGVlbFNwaW5UaW1lcyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./models/WheelSpinTimes.js\n");

/***/ }),

/***/ "./pages/api/wheelSpinTimes.js":
/*!*************************************!*\
  !*** ./pages/api/wheelSpinTimes.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dbConnect */ \"./utils/dbConnect.js\");\n/* harmony import */ var _models_WheelSpinTimes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/WheelSpinTimes */ \"./models/WheelSpinTimes.js\");\n/* harmony import */ var _models_WheelSpinTimes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_WheelSpinTimes__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const { method  } = req;\n    await (0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    switch(method){\n        case 'GET':\n            try {\n                // console.log(\"knsklnslnsn\",req.body)\n                const Times = await _models_WheelSpinTimes__WEBPACK_IMPORTED_MODULE_1___default().find({\n                });\n                res.status(200).json(Times);\n            } catch (error) {\n                res.status(400).json({\n                    success: false\n                });\n            }\n            break;\n        case 'POST':\n            try {\n                // const participant = await Participant.create(req.body)\n                var addWheelSpinTimes = await _models_WheelSpinTimes__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n                    \"times\": req.body.times - 1\n                });\n                addWheelSpinTimes.times = req.body.times;\n                addWheelSpinTimes.save(function(err) {\n                    if (err) return handleError(err);\n                // saved!\n                });\n                res.status(201).json({\n                    addWheelSpinTimes\n                });\n            } catch (error1) {\n                res.status(400).json({\n                    success: false\n                });\n            }\n            break;\n        default:\n            res.status(400).json({\n                success: false\n            });\n            break;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvd2hlZWxTcGluVGltZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2QztBQUNXO0FBRXpDLGVBQWVFLE9BQU8sQ0FBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUNoRCxLQUFLLENBQUMsQ0FBQyxDQUFDQyxNQUFNLEVBQUMsQ0FBQyxHQUFHRixHQUFHO0lBQ3RCLEtBQUssQ0FBQ0gsNERBQVM7SUFDZixNQUFNLENBQUVLLE1BQU07UUFDWixJQUFJLENBQUMsQ0FBSztZQUNOLEdBQUcsQ0FBQyxDQUFDO2dCQUNILEVBQXNDO2dCQUN0QyxLQUFLLENBQUNDLEtBQUssR0FBRyxLQUFLLENBQUNMLGtFQUFtQixDQUFDLENBQUM7Z0JBQUEsQ0FBQztnQkFDMUNHLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDSCxLQUFLO1lBQzVCLENBQUMsQ0FBQyxLQUFLLEVBQUVJLEtBQUssRUFBRSxDQUFDO2dCQUNmTixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO29CQUFDRSxPQUFPLEVBQUUsS0FBSztnQkFBQyxDQUFDO1lBQ3pDLENBQUM7WUFDRCxLQUFLO1FBQ1AsSUFBSSxDQUFDLENBQU07WUFDVCxHQUFHLENBQUMsQ0FBQztnQkFDSCxFQUF5RDtnQkFDekQsR0FBRyxDQUFDQyxpQkFBaUIsR0FBRyxLQUFLLENBQUNYLHFFQUFzQixDQUFDLENBQUM7b0JBQUEsQ0FBTyxRQUFDRSxHQUFHLENBQUNXLElBQUksQ0FBQ0MsS0FBSyxHQUFDLENBQUM7Z0JBQUEsQ0FBQztnQkFDL0VILGlCQUFpQixDQUFDRyxLQUFLLEdBQUdaLEdBQUcsQ0FBQ1csSUFBSSxDQUFDQyxLQUFLO2dCQUN4Q0gsaUJBQWlCLENBQUNJLElBQUksQ0FBQyxRQUFRLENBQUVDLEdBQUcsRUFBRSxDQUFDO29CQUNyQyxFQUFFLEVBQUVBLEdBQUcsRUFBRSxNQUFNLENBQUNDLFdBQVcsQ0FBQ0QsR0FBRztnQkFDL0IsRUFBUztnQkFDYixDQUFDO2dCQUNDYixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDRztvQkFBQUEsaUJBQWlCO2dCQUFBLENBQUM7WUFDMUMsQ0FBQyxDQUFDLEtBQUssRUFBRUYsTUFBSyxFQUFFLENBQUM7Z0JBQ2ZOLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7b0JBQUNFLE9BQU8sRUFBRSxLQUFLO2dCQUFDLENBQUM7WUFDekMsQ0FBQztZQUNILEtBQUs7O1lBRUxQLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7Z0JBQUNFLE9BQU8sRUFBRSxLQUFLO1lBQUMsQ0FBQztZQUN2QyxLQUFLOztBQUVYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3RvZm5hbWVzLy4vcGFnZXMvYXBpL3doZWVsU3BpblRpbWVzLmpzPzM5ZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tICcuLi8uLi91dGlscy9kYkNvbm5lY3QnXHJcbmltcG9ydCBXaGVlbFNwaW5UaW1lcyBmcm9tICcuLi8uLi9tb2RlbHMvV2hlZWxTcGluVGltZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyIChyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXFcclxuICBhd2FpdCBkYkNvbm5lY3QoKVxyXG4gIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICBjYXNlICdHRVQnOlxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImtuc2tsbnNsbnNuXCIscmVxLmJvZHkpXHJcbiAgICAgICAgICBjb25zdCBUaW1lcyA9IGF3YWl0IFdoZWVsU3BpblRpbWVzLmZpbmQoe30pXHJcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihUaW1lcylcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBicmVha1xyXG4gICAgICBjYXNlICdQT1NUJzpcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgLy8gY29uc3QgcGFydGljaXBhbnQgPSBhd2FpdCBQYXJ0aWNpcGFudC5jcmVhdGUocmVxLmJvZHkpXHJcbiAgICAgICAgICB2YXIgYWRkV2hlZWxTcGluVGltZXMgPSBhd2FpdCBXaGVlbFNwaW5UaW1lcy5maW5kT25lKHtcInRpbWVzXCI6cmVxLmJvZHkudGltZXMtMX0pXHJcbiAgICAgICAgICBhZGRXaGVlbFNwaW5UaW1lcy50aW1lcyA9IHJlcS5ib2R5LnRpbWVzXHJcbiAgICAgICAgICBhZGRXaGVlbFNwaW5UaW1lcy5zYXZlKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGhhbmRsZUVycm9yKGVycik7XHJcbiAgICAgICAgICAgIC8vIHNhdmVkIVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7YWRkV2hlZWxTcGluVGltZXN9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICBicmVha1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KVxyXG4gICAgICBicmVha1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJXaGVlbFNwaW5UaW1lcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJUaW1lcyIsImZpbmQiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJzdWNjZXNzIiwiYWRkV2hlZWxTcGluVGltZXMiLCJmaW5kT25lIiwiYm9keSIsInRpbWVzIiwic2F2ZSIsImVyciIsImhhbmRsZUVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/wheelSpinTimes.js\n");

/***/ }),

/***/ "./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = \"mongodb+srv://shahzaib:Daata321@cluster0.tosar.mongodb.net/myFirstDatabase?retryWrites=true&w=majority\";\nif (!MONGODB_URI) {\n    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9kYkNvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLEtBQUssQ0FBQ0MsV0FBVyxHQUFHQyx3R0FBdUI7QUFFM0MsRUFBRSxHQUFHRCxXQUFXLEVBQUUsQ0FBQztJQUNqQixLQUFLLENBQUMsR0FBRyxDQUFDRyxLQUFLLENBQ2IsQ0FBc0U7QUFFMUUsQ0FBQztBQUVELEdBQUcsQ0FBQ0MsTUFBTSxHQUFHQyxNQUFNLENBQUNOLFFBQVE7QUFFNUIsRUFBRSxHQUFHSyxNQUFNLEVBQUUsQ0FBQztJQUNaQSxNQUFNLEdBQUdDLE1BQU0sQ0FBQ04sUUFBUSxHQUFHLENBQUM7UUFBQ08sSUFBSSxFQUFFLElBQUk7UUFBRUMsT0FBTyxFQUFFLElBQUk7SUFBQyxDQUFDO0FBQzFELENBQUM7ZUFFY0MsU0FBUyxHQUFJLENBQUM7SUFDM0IsRUFBRSxFQUFFSixNQUFNLENBQUNFLElBQUksRUFBRSxDQUFDO1FBQ2hCLE1BQU0sQ0FBQ0YsTUFBTSxDQUFDRSxJQUFJO0lBQ3BCLENBQUM7SUFFRCxFQUFFLEdBQUdGLE1BQU0sQ0FBQ0csT0FBTyxFQUFFLENBQUM7UUFDcEIsS0FBSyxDQUFDRSxJQUFJLEdBQUcsQ0FBQztZQUNaQyxjQUFjLEVBQUUsS0FBSztRQUN2QixDQUFDO1FBRUROLE1BQU0sQ0FBQ0csT0FBTyxHQUFHUix1REFBZ0IsQ0FBQ0MsV0FBVyxFQUFFUyxJQUFJLEVBQUVHLElBQUksRUFBQ2IsUUFBUSxHQUFJLENBQUM7WUFDckUsTUFBTSxDQUFDQSxRQUFRO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBQ0RLLE1BQU0sQ0FBQ0UsSUFBSSxHQUFHLEtBQUssQ0FBQ0YsTUFBTSxDQUFDRyxPQUFPO0lBQ2xDLE1BQU0sQ0FBQ0gsTUFBTSxDQUFDRSxJQUFJO0FBQ3BCLENBQUM7QUFFRCxpRUFBZUUsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvdG9mbmFtZXMvLi91dGlscy9kYkNvbm5lY3QuanM/YzNjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXHJcblxyXG5pZiAoIU1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsJ1xyXG4gIClcclxufVxyXG5cclxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZVxyXG5cclxuaWYgKCFjYWNoZWQpIHtcclxuICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QgKCkge1xyXG4gIGlmIChjYWNoZWQuY29ubikge1xyXG4gICAgcmV0dXJuIGNhY2hlZC5jb25uXHJcbiAgfVxyXG5cclxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XHJcbiAgICBjb25zdCBvcHRzID0ge1xyXG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXHJcbiAgICB9XHJcblxyXG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRzKS50aGVuKG1vbmdvb3NlID0+IHtcclxuICAgICAgcmV0dXJuIG1vbmdvb3NlXHJcbiAgICB9KVxyXG4gIH1cclxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlXHJcbiAgcmV0dXJuIGNhY2hlZC5jb25uXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdCJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0IiwidGhlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/dbConnect.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/wheelSpinTimes.js"));
module.exports = __webpack_exports__;

})();