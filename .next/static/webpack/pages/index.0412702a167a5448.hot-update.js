"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./plugins/amazing-spin-wheel-game/index.js":
/*!**************************************************!*\
  !*** ./plugins/amazing-spin-wheel-game/index.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar ref1 = __webpack_require__(/*! react-howler */ \"./node_modules/react-howler/lib/index.js\"), ReactHowler = ref1.default;\nvar WheelComponent = function WheelComponent(_ref) {\n    _s1();\n    // console.log(_ref.segments);\n    var shouldWeSpin = _ref.shouldWeSpin, setShouldWeSpin = _ref.setShouldWeSpin;\n    var ref = _slicedToArray(React.useState(false), 2), sound = ref[0], setSound = ref[1];\n    {\n    }\n    var segments = _ref.segments, spinSeconds = _ref.spinSeconds, segColors = _ref.segColors, winningSegment = _ref.winningSegment, onFinished = _ref.onFinished, _ref$primaryColor = _ref.primaryColor, primaryColor = _ref$primaryColor === void 0 ? 'black' : _ref$primaryColor, _ref$contrastColor = _ref.contrastColor, contrastColor = _ref$contrastColor === void 0 ? 'white' : _ref$contrastColor, _ref$isOnlyOnce = _ref.isOnlyOnce, isOnlyOnce = _ref$isOnlyOnce === void 0 ? true : _ref$isOnlyOnce, _ref$size = _ref.size, size = _ref$size === void 0 ? 290 : _ref$size, _ref$upDuration = _ref.upDuration, upDuration = _ref$upDuration === void 0 ? 100 : _ref$upDuration, _ref$downDuration = _ref.downDuration, downDuration = _ref$downDuration === void 0 ? 1000 : _ref$downDuration, _ref$fontFamily = _ref.fontFamily, fontFamily = _ref$fontFamily === void 0 ? 'proxima-nova' : _ref$fontFamily;\n    var currentSegment = '';\n    var isStarted = false;\n    var _useState = React.useState(false), isFinished = _useState[0], setFinished = _useState[1];\n    var timerHandle = 0;\n    var timerManualDelay = 50;\n    if (spinSeconds > 60) {\n        timerManualDelay = 60;\n    }\n    // spinSeconds\n    var timerDelay = segments.length < timerManualDelay ? timerManualDelay : segments.length;\n    var angleCurrent = 0;\n    var angleDelta = 0;\n    var canvasContext = null;\n    // var maxSpeed = Math.PI / (segments.length);\n    var maxSpeed = 4;\n    console.log(\"Total segments \".concat(segments.length));\n    console.log(\"Max speed \".concat(maxSpeed));\n    console.log(\"Timer delay \".concat(timerManualDelay));\n    var upTime = segments.length * upDuration;\n    var downTime = segments.length * downDuration;\n    var spinStart = 0;\n    var frames = 0;\n    var centerX = 300;\n    var centerY = 300;\n    React.useEffect(function() {\n        wheelInit();\n    }, [\n        segments\n    ]);\n    React.useEffect(function() {\n        if (shouldWeSpin) {\n            // console.log(\"shouldspin\",shouldWeSpin)\n            setSound(true);\n            wheelInit();\n            spin();\n            setShouldWeSpin(false);\n        // setSound(false)\n        }\n    }, [\n        shouldWeSpin\n    ]);\n    // React.useEffect(() => {\n    //     wheelInit();\n    // },[])\n    var wheelInit = function wheelInit() {\n        initCanvas();\n        wheelDraw();\n    };\n    var initCanvas = function initCanvas() {\n        var canvas = document.getElementById('canvas');\n        canvasContext = canvas.getContext('2d');\n    // var background = new Image();\n    // background.src = \"../wheel_frame.png\";\n    // canvasContext.drawImage(background,100,100,4000,2770);  \n    // var spinBtn = document.getElementById('spinBtn');\n    // console.log(\"33333\");\n    // spinBtn.addEventListener('click', spin, false);\n    };\n    var spin = function spin() {\n        console.log(\"spinning\");\n        isStarted = true;\n        if (timerHandle === 0) {\n            spinStart = new Date().getTime();\n            maxSpeed = Math.PI / segments.length;\n            frames = 0;\n            timerHandle = setInterval(onTimerTick, timerDelay);\n        }\n    };\n    var onTimerTick = function onTimerTick() {\n        frames++;\n        draw();\n        var duration = new Date().getTime() - spinStart;\n        console.log(\"duration \".concat(duration));\n        var progress = 0;\n        var finished = false;\n        if (duration < upTime) {\n            progress = duration / upTime;\n            console.log(\"progress \".concat(progress));\n            console.log(\"upTime \".concat(upTime));\n            angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2);\n        } else {\n            if (winningSegment) {\n                if (currentSegment === winningSegment && frames > segments.length) {\n                    progress = duration / upTime;\n                    angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);\n                    progress = 1;\n                } else {\n                    progress = duration / downTime;\n                    angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);\n                }\n            } else {\n                progress = duration / downTime;\n                angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);\n            }\n            if (progress >= 1) finished = true;\n            console.log(\"progress \".concat(progress));\n        }\n        angleCurrent += angleDelta;\n        while(angleCurrent >= Math.PI * 2){\n            angleCurrent -= Math.PI * 2;\n        }\n        if (finished) {\n            setFinished(true);\n            onFinished(currentSegment);\n            clearInterval(timerHandle);\n            timerHandle = 0;\n            angleDelta = 0;\n        }\n    };\n    var wheelDraw = function wheelDraw() {\n        clear();\n        drawWheel();\n        drawNeedle();\n    };\n    var draw = function draw() {\n        clear();\n        drawWheel();\n        drawNeedle();\n    };\n    var drawSegment = function drawSegment(key, lastAngle, angle) {\n        var ctx = canvasContext;\n        var value = segments[key];\n        ctx.save();\n        ctx.beginPath();\n        ctx.moveTo(centerX, centerY);\n        ctx.arc(centerX, centerY, size, lastAngle, angle, false);\n        ctx.lineTo(centerX, centerY);\n        ctx.closePath();\n        ctx.fillStyle = segColors[key];\n        ctx.fill();\n        ctx.stroke();\n        ctx.save();\n        ctx.translate(centerX, centerY);\n        ctx.rotate((lastAngle + angle) / 2);\n        ctx.fillStyle = contrastColor;\n        ctx.font = 'bold 1em ' + fontFamily;\n        ctx.fillText(value.substr(0, 21), size / 2 + 20, 0);\n        ctx.restore();\n    };\n    var drawWheel = function drawWheel() {\n        var ctx = canvasContext;\n        var lastAngle = angleCurrent;\n        var len = segments.length;\n        var PI2 = Math.PI * 2;\n        ctx.lineWidth = 1;\n        ctx.strokeStyle = primaryColor;\n        ctx.textBaseline = 'middle';\n        ctx.textAlign = 'center';\n        ctx.font = '1em ' + fontFamily;\n        for(var i = 1; i <= len; i++){\n            var angle = PI2 * (i / len) + angleCurrent;\n            drawSegment(i - 1, lastAngle, angle);\n            lastAngle = angle;\n        }\n        ctx.beginPath();\n        ctx.arc(centerX, centerY, 50, 0, PI2, false);\n        ctx.closePath();\n        // ctx.fillStyle = primaryColor;\n        ctx.drawImage('logo.jpg');\n        ctx.lineWidth = 10;\n        ctx.strokeStyle = contrastColor;\n        ctx.fill();\n        ctx.font = 'bold 1em ' + fontFamily;\n        ctx.fillStyle = contrastColor;\n        ctx.textAlign = 'center';\n        // ctx.fillText(buttonText, centerX, centerY + 3);\n        ctx.stroke();\n    // ctx.beginPath();\n    // ctx.arc(centerX, centerY, size, 0, PI2, false);\n    // ctx.closePath();\n    // ctx.lineWidth = 10;\n    // ctx.strokeStyle = primaryColor;\n    // ctx.stroke();\n    };\n    var drawNeedle = function drawNeedle() {\n        var ctx = canvasContext;\n        // ctx.lineWidth = 1;\n        // ctx.strokeStyle = contrastColor;\n        // ctx.fileStyle = contrastColor;\n        // ctx.beginPath();\n        // ctx.moveTo(centerX + 20, centerY - 50);\n        // ctx.lineTo(centerX - 20, centerY - 50);\n        // ctx.lineTo(centerX, centerY - 70);\n        // ctx.closePath();\n        // ctx.fill();\n        var change = angleCurrent + Math.PI / 2;\n        var i = segments.length - Math.floor(change / (Math.PI * 2) * segments.length) - 1;\n        if (i < 0) i = i + segments.length;\n        ctx.textAlign = 'center';\n        ctx.textBaseline = 'middle';\n        ctx.fillStyle = primaryColor;\n        ctx.font = 'bold 1.5em ' + fontFamily;\n        currentSegment = segments[i];\n        isStarted && ctx.fillText(currentSegment, centerX + 10, centerY + size + 50);\n    };\n    var clear = function clear() {\n        var ctx = canvasContext;\n        ctx.clearRect(0, 0, 1000, 800);\n    };\n    return React.createElement(\"div\", {\n        id: \"wheel\"\n    }, React.createElement(\"canvas\", {\n        id: \"canvas\",\n        width: \"590\",\n        height: \"590\",\n        style: {\n            marginTop: \"42px\",\n            marginLeft: \"39px\",\n            pointerEvents: isFinished && isOnlyOnce ? 'none' : 'auto'\n        }\n    }));\n};\n_s1(WheelComponent, \"CtrNpZXLFbeX4PFudOvmaqB7O2I=\");\n_c = WheelComponent;\nmodule.exports = React.memo(WheelComponent);\nvar _c;\n$RefreshReg$(_c, \"WheelComponent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbHVnaW5zL2FtYXppbmctc3Bpbi13aGVlbC1nYW1lL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxHQUFHLENBQUNBLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBTztBQUMzQixHQUFLLENBQTRCQSxJQUF1QixHQUF2QkEsbUJBQU8sQ0FBQyw4REFBYyxHQUF0Q0MsV0FBVyxHQUFLRCxJQUF1QixDQUFoREUsT0FBTztBQUNmLEdBQUcsQ0FBQ0MsY0FBYyxHQUFHLFFBQVEsQ0FBQ0EsY0FBYyxDQUFDQyxJQUFJLEVBQUUsQ0FBQzs7SUFDbEQsRUFBOEI7SUFDOUIsR0FBSyxDQUFFQyxZQUFZLEdBQXFCRCxJQUFJLENBQXJDQyxZQUFZLEVBQUVDLGVBQWUsR0FBSUYsSUFBSSxDQUF2QkUsZUFBZTtJQUNwQyxHQUFLLENBQXFCUCxHQUFxQixrQkFBckJBLEtBQUssQ0FBQ1EsUUFBUSxDQUFDLEtBQUssT0FBdkNDLEtBQUssR0FBY1QsR0FBcUIsS0FBakNVLFFBQVEsR0FBSVYsR0FBcUI7SUFDakQsQ0FBQztJQUF5RCxDQUFDO0lBRXpELEdBQUcsQ0FBQ1csUUFBUSxHQUFHTixJQUFJLENBQUNNLFFBQVEsRUFDeEJDLFdBQVcsR0FBR1AsSUFBSSxDQUFDTyxXQUFXLEVBQzlCQyxTQUFTLEdBQUdSLElBQUksQ0FBQ1EsU0FBUyxFQUMxQkMsY0FBYyxHQUFHVCxJQUFJLENBQUNTLGNBQWMsRUFDcENDLFVBQVUsR0FBR1YsSUFBSSxDQUFDVSxVQUFVLEVBQzVCQyxpQkFBaUIsR0FBR1gsSUFBSSxDQUFDWSxZQUFZLEVBQ3JDQSxZQUFZLEdBQUdELGlCQUFpQixLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBTyxTQUFHQSxpQkFBaUIsRUFDekVFLGtCQUFrQixHQUFHYixJQUFJLENBQUNjLGFBQWEsRUFDdkNBLGFBQWEsR0FBR0Qsa0JBQWtCLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFP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QSxLQUFLLEdBQUcsQ0FBQztRQUM1QixHQUFHLENBQUNPLEdBQUcsR0FBR3RDLGFBQWE7UUFDdkJzQyxHQUFHLENBQUMyQixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRztJQUMvQixDQUFDO0lBRUQsTUFBTSxDQUFDMUcsS0FBSyxDQUFDMkcsYUFBYSxDQUFDLENBQUssTUFBRSxDQUFDO1FBQ2pDQyxFQUFFLEVBQUUsQ0FBTztJQUNiLENBQUMsRUFBRTVHLEtBQUssQ0FBQzJHLGFBQWEsQ0FBQyxDQUFRLFNBQUUsQ0FBQztRQUNoQ0MsRUFBRSxFQUFFLENBQVE7UUFDWkMsS0FBSyxFQUFFLENBQUs7UUFDWkMsTUFBTSxFQUFFLENBQUs7UUFDYkMsS0FBSyxFQUFFLENBQUM7WUFDTkMsU0FBUyxFQUFFLENBQU07WUFDakJDLFVBQVUsRUFBRSxDQUFNO1lBQ2xCQyxhQUFhLEVBQUVqRixVQUFVLElBQUlaLFVBQVUsR0FBRyxDQUFNLFFBQUcsQ0FBTTtRQUMzRCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7SUFwUUdqQixjQUFjO0tBQWRBLGNBQWM7QUFzUWxCK0csTUFBTSxDQUFDQyxPQUFPLEdBQUdwSCxLQUFLLENBQUNxSCxJQUFJLENBQUNqSCxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BsdWdpbnMvYW1hemluZy1zcGluLXdoZWVsLWdhbWUvaW5kZXguanM/NzU1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG5jb25zdCB7IGRlZmF1bHQ6IFJlYWN0SG93bGVyIH0gPSByZXF1aXJlKCdyZWFjdC1ob3dsZXInKTtcclxudmFyIFdoZWVsQ29tcG9uZW50ID0gZnVuY3Rpb24gV2hlZWxDb21wb25lbnQoX3JlZikge1xyXG4gIC8vIGNvbnNvbGUubG9nKF9yZWYuc2VnbWVudHMpO1xyXG4gIGNvbnN0IHtzaG91bGRXZVNwaW4sIHNldFNob3VsZFdlU3Bpbn0gPSBfcmVmO1xyXG4gIGNvbnN0IFtzb3VuZCwgc2V0U291bmRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG57LyogPFJlYWN0SG93bGVyIHNyYz1cIi93aGVlbC1zcGluLm1wM1wiIHBsYXlpbmc9e3RydWV9Lz4gKi99XHJcblxyXG4gIHZhciBzZWdtZW50cyA9IF9yZWYuc2VnbWVudHMsXHJcbiAgICAgIHNwaW5TZWNvbmRzID0gX3JlZi5zcGluU2Vjb25kcyxcclxuICAgICAgc2VnQ29sb3JzID0gX3JlZi5zZWdDb2xvcnMsXHJcbiAgICAgIHdpbm5pbmdTZWdtZW50ID0gX3JlZi53aW5uaW5nU2VnbWVudCxcclxuICAgICAgb25GaW5pc2hlZCA9IF9yZWYub25GaW5pc2hlZCxcclxuICAgICAgX3JlZiRwcmltYXJ5Q29sb3IgPSBfcmVmLnByaW1hcnlDb2xvcixcclxuICAgICAgcHJpbWFyeUNvbG9yID0gX3JlZiRwcmltYXJ5Q29sb3IgPT09IHZvaWQgMCA/ICdibGFjaycgOiBfcmVmJHByaW1hcnlDb2xvcixcclxuICAgICAgX3JlZiRjb250cmFzdENvbG9yID0gX3JlZi5jb250cmFzdENvbG9yLFxyXG4gICAgICBjb250cmFzdENvbG9yID0gX3JlZiRjb250cmFzdENvbG9yID09PSB2b2lkIDAgPyAnd2hpdGUnIDogX3JlZiRjb250cmFzdENvbG9yLFxyXG4gICAgICBfcmVmJGlzT25seU9uY2UgPSBfcmVmLmlzT25seU9uY2UsXHJcbiAgICAgIGlzT25seU9uY2UgPSBfcmVmJGlzT25seU9uY2UgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGlzT25seU9uY2UsXHJcbiAgICAgIF9yZWYkc2l6ZSA9IF9yZWYuc2l6ZSxcclxuICAgICAgc2l6ZSA9IF9yZWYkc2l6ZSA9PT0gdm9pZCAwID8gMjkwIDogX3JlZiRzaXplLFxyXG4gICAgICBfcmVmJHVwRHVyYXRpb24gPSBfcmVmLnVwRHVyYXRpb24sXHJcbiAgICAgIHVwRHVyYXRpb24gPSBfcmVmJHVwRHVyYXRpb24gPT09IHZvaWQgMCA/IDEwMCA6IF9yZWYkdXBEdXJhdGlvbixcclxuICAgICAgX3JlZiRkb3duRHVyYXRpb24gPSBfcmVmLmRvd25EdXJhdGlvbixcclxuICAgICAgZG93bkR1cmF0aW9uID0gX3JlZiRkb3duRHVyYXRpb24gPT09IHZvaWQgMCA/IDEwMDAgOiBfcmVmJGRvd25EdXJhdGlvbixcclxuICAgICAgX3JlZiRmb250RmFtaWx5ID0gX3JlZi5mb250RmFtaWx5LFxyXG4gICAgICBmb250RmFtaWx5ID0gX3JlZiRmb250RmFtaWx5ID09PSB2b2lkIDAgPyAncHJveGltYS1ub3ZhJyA6IF9yZWYkZm9udEZhbWlseTtcclxuICB2YXIgY3VycmVudFNlZ21lbnQgPSAnJztcclxuICB2YXIgaXNTdGFydGVkID0gZmFsc2U7XHJcblxyXG4gIHZhciBfdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksXHJcbiAgICAgIGlzRmluaXNoZWQgPSBfdXNlU3RhdGVbMF0sXHJcbiAgICAgIHNldEZpbmlzaGVkID0gX3VzZVN0YXRlWzFdO1xyXG5cclxuICB2YXIgdGltZXJIYW5kbGUgPSAwXHJcbiAgdmFyIHRpbWVyTWFudWFsRGVsYXkgPSA1MFxyXG4gIGlmKHNwaW5TZWNvbmRzID4gNjApe1xyXG4gICAgdGltZXJNYW51YWxEZWxheSA9IDYwXHJcbiAgfVxyXG4gIC8vIHNwaW5TZWNvbmRzXHJcbiAgdmFyIHRpbWVyRGVsYXkgPSAoc2VnbWVudHMubGVuZ3RoIDwgdGltZXJNYW51YWxEZWxheSAgPyB0aW1lck1hbnVhbERlbGF5IDogc2VnbWVudHMubGVuZ3RoKTtcclxuICB2YXIgYW5nbGVDdXJyZW50ID0gMFxyXG4gIHZhciBhbmdsZURlbHRhID0gMFxyXG4gIHZhciBjYW52YXNDb250ZXh0ID0gbnVsbFxyXG4gIC8vIHZhciBtYXhTcGVlZCA9IE1hdGguUEkgLyAoc2VnbWVudHMubGVuZ3RoKTtcclxuICB2YXIgbWF4U3BlZWQgPSA0XHJcbiAgY29uc29sZS5sb2coYFRvdGFsIHNlZ21lbnRzICR7c2VnbWVudHMubGVuZ3RofWApXHJcbiAgY29uc29sZS5sb2coYE1heCBzcGVlZCAke21heFNwZWVkfWApXHJcbiAgY29uc29sZS5sb2coYFRpbWVyIGRlbGF5ICR7dGltZXJNYW51YWxEZWxheX1gKVxyXG4gIHZhciB1cFRpbWUgPSBzZWdtZW50cy5sZW5ndGggKiB1cER1cmF0aW9uXHJcbiAgdmFyIGRvd25UaW1lID0gc2VnbWVudHMubGVuZ3RoICogZG93bkR1cmF0aW9uXHJcbiAgdmFyIHNwaW5TdGFydCA9IDBcclxuICB2YXIgZnJhbWVzID0gMFxyXG4gIHZhciBjZW50ZXJYID0gMzAwXHJcbiAgdmFyIGNlbnRlclkgPSAzMDBcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgIHdoZWVsSW5pdCgpO1xyXG4gIH0sIFtzZWdtZW50c10pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoc2hvdWxkV2VTcGluKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2hvdWxkc3BpblwiLHNob3VsZFdlU3BpbilcclxuICAgICAgc2V0U291bmQodHJ1ZSlcclxuICAgICAgd2hlZWxJbml0KCk7XHJcbiAgICAgIHNwaW4oKTtcclxuICAgICAgc2V0U2hvdWxkV2VTcGluKGZhbHNlKTtcclxuICAgICAgLy8gc2V0U291bmQoZmFsc2UpXHJcbiAgICB9XHJcbiAgfSwgW3Nob3VsZFdlU3Bpbl0pXHJcblxyXG4gIC8vIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICAgIHdoZWVsSW5pdCgpO1xyXG4gIC8vIH0sW10pXHJcblxyXG4gIHZhciB3aGVlbEluaXQgPSBmdW5jdGlvbiB3aGVlbEluaXQoKSB7XHJcbiAgICBpbml0Q2FudmFzKCk7XHJcbiAgICB3aGVlbERyYXcoKTtcclxuICB9O1xyXG5cclxuICB2YXIgaW5pdENhbnZhcyA9IGZ1bmN0aW9uIGluaXRDYW52YXMoKSB7XHJcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIC8vIHZhciBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLnNyYyA9IFwiLi4vd2hlZWxfZnJhbWUucG5nXCI7XHJcbiAgICAvLyBjYW52YXNDb250ZXh0LmRyYXdJbWFnZShiYWNrZ3JvdW5kLDEwMCwxMDAsNDAwMCwyNzcwKTsgIFxyXG5cclxuICAgIC8vIHZhciBzcGluQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwaW5CdG4nKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiMzMzMzNcIik7XHJcbiAgICAvLyBzcGluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3BpbiwgZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHZhciBzcGluID0gZnVuY3Rpb24gc3BpbigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwic3Bpbm5pbmdcIilcclxuICAgIGlzU3RhcnRlZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKHRpbWVySGFuZGxlID09PSAwKSB7XHJcbiAgICAgIHNwaW5TdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICBtYXhTcGVlZCA9IE1hdGguUEkgLyBzZWdtZW50cy5sZW5ndGg7XHJcbiAgICAgIGZyYW1lcyA9IDA7XHJcbiAgICAgIHRpbWVySGFuZGxlID0gc2V0SW50ZXJ2YWwob25UaW1lclRpY2ssIHRpbWVyRGVsYXkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHZhciBvblRpbWVyVGljayA9IGZ1bmN0aW9uIG9uVGltZXJUaWNrKCkge1xyXG4gICAgZnJhbWVzKys7XHJcbiAgICBkcmF3KCk7XHJcbiAgICB2YXIgZHVyYXRpb24gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHNwaW5TdGFydDtcclxuICAgIGNvbnNvbGUubG9nKGBkdXJhdGlvbiAke2R1cmF0aW9ufWApO1xyXG4gICAgdmFyIHByb2dyZXNzID0gMDtcclxuICAgIHZhciBmaW5pc2hlZCA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChkdXJhdGlvbiA8IHVwVGltZSkge1xyXG5cclxuICAgICAgcHJvZ3Jlc3MgPSBkdXJhdGlvbiAvIHVwVGltZTtcclxuICAgICAgY29uc29sZS5sb2coYHByb2dyZXNzICR7cHJvZ3Jlc3N9YClcclxuICAgICAgY29uc29sZS5sb2coYHVwVGltZSAke3VwVGltZX1gKVxyXG4gICAgICBhbmdsZURlbHRhID0gbWF4U3BlZWQgKiBNYXRoLnNpbihwcm9ncmVzcyAqIE1hdGguUEkgLyAyKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHdpbm5pbmdTZWdtZW50KSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTZWdtZW50ID09PSB3aW5uaW5nU2VnbWVudCAmJiBmcmFtZXMgPiBzZWdtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgIHByb2dyZXNzID0gZHVyYXRpb24gLyB1cFRpbWU7XHJcbiAgICAgICAgICBhbmdsZURlbHRhID0gbWF4U3BlZWQgKiBNYXRoLnNpbihwcm9ncmVzcyAqIE1hdGguUEkgLyAyICsgTWF0aC5QSSAvIDIpO1xyXG4gICAgICAgICAgcHJvZ3Jlc3MgPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwcm9ncmVzcyA9IGR1cmF0aW9uIC8gZG93blRpbWU7XHJcbiAgICAgICAgICBhbmdsZURlbHRhID0gbWF4U3BlZWQgKiBNYXRoLnNpbihwcm9ncmVzcyAqIE1hdGguUEkgLyAyICsgTWF0aC5QSSAvIDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9ncmVzcyA9IGR1cmF0aW9uIC8gZG93blRpbWU7XHJcbiAgICAgICAgYW5nbGVEZWx0YSA9IG1heFNwZWVkICogTWF0aC5zaW4ocHJvZ3Jlc3MgKiBNYXRoLlBJIC8gMiArIE1hdGguUEkgLyAyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHByb2dyZXNzID49IDEpIGZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coYHByb2dyZXNzICR7cHJvZ3Jlc3N9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5nbGVDdXJyZW50ICs9IGFuZ2xlRGVsdGE7XHJcbiAgICB3aGlsZSAoYW5nbGVDdXJyZW50ID49IE1hdGguUEkgKiAyKSB7XHJcbiAgICAgIGFuZ2xlQ3VycmVudCAtPSBNYXRoLlBJICogMjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmluaXNoZWQpIHtcclxuICAgICAgc2V0RmluaXNoZWQodHJ1ZSk7XHJcbiAgICAgIG9uRmluaXNoZWQoY3VycmVudFNlZ21lbnQpO1xyXG4gICAgICBjbGVhckludGVydmFsKHRpbWVySGFuZGxlKTtcclxuICAgICAgdGltZXJIYW5kbGUgPSAwO1xyXG4gICAgICBhbmdsZURlbHRhID0gMDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB2YXIgd2hlZWxEcmF3ID0gZnVuY3Rpb24gd2hlZWxEcmF3KCkge1xyXG4gICAgY2xlYXIoKTtcclxuICAgIGRyYXdXaGVlbCgpO1xyXG4gICAgZHJhd05lZWRsZSgpO1xyXG4gIH07XHJcblxyXG4gIHZhciBkcmF3ID0gZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGNsZWFyKCk7XHJcbiAgICBkcmF3V2hlZWwoKTtcclxuICAgIGRyYXdOZWVkbGUoKTtcclxuICB9O1xyXG5cclxuICB2YXIgZHJhd1NlZ21lbnQgPSBmdW5jdGlvbiBkcmF3U2VnbWVudChrZXksIGxhc3RBbmdsZSwgYW5nbGUpIHtcclxuICAgIHZhciBjdHggPSBjYW52YXNDb250ZXh0O1xyXG4gICAgdmFyIHZhbHVlID0gc2VnbWVudHNba2V5XTtcclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKGNlbnRlclgsIGNlbnRlclkpO1xyXG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCBzaXplLCBsYXN0QW5nbGUsIGFuZ2xlLCBmYWxzZSk7XHJcbiAgICBjdHgubGluZVRvKGNlbnRlclgsIGNlbnRlclkpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHNlZ0NvbG9yc1trZXldO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHgudHJhbnNsYXRlKGNlbnRlclgsIGNlbnRlclkpO1xyXG4gICAgY3R4LnJvdGF0ZSgobGFzdEFuZ2xlICsgYW5nbGUpIC8gMik7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gY29udHJhc3RDb2xvcjtcclxuICAgIGN0eC5mb250ID0gJ2JvbGQgMWVtICcgKyBmb250RmFtaWx5O1xyXG4gICAgY3R4LmZpbGxUZXh0KHZhbHVlLnN1YnN0cigwLCAyMSksIHNpemUgLyAyICsgMjAsIDApO1xyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuICB9O1xyXG5cclxuICB2YXIgZHJhd1doZWVsID0gZnVuY3Rpb24gZHJhd1doZWVsKCkge1xyXG4gICAgdmFyIGN0eCA9IGNhbnZhc0NvbnRleHQ7XHJcbiAgICB2YXIgbGFzdEFuZ2xlID0gYW5nbGVDdXJyZW50O1xyXG4gICAgdmFyIGxlbiA9IHNlZ21lbnRzLmxlbmd0aDtcclxuICAgIHZhciBQSTIgPSBNYXRoLlBJICogMjtcclxuICAgIGN0eC5saW5lV2lkdGggPSAxO1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gcHJpbWFyeUNvbG9yO1xyXG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgY3R4LmZvbnQgPSAnMWVtICcgKyBmb250RmFtaWx5O1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IGxlbjsgaSsrKSB7XHJcbiAgICAgIHZhciBhbmdsZSA9IFBJMiAqIChpIC8gbGVuKSArIGFuZ2xlQ3VycmVudDtcclxuICAgICAgZHJhd1NlZ21lbnQoaSAtIDEsIGxhc3RBbmdsZSwgYW5nbGUpO1xyXG4gICAgICBsYXN0QW5nbGUgPSBhbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIDUwLCAwLCBQSTIsIGZhbHNlKTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBwcmltYXJ5Q29sb3I7XHJcbiAgICBjdHguZHJhd0ltYWdlKCdsb2dvLmpwZycpXHJcbiAgICBjdHgubGluZVdpZHRoID0gMTA7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb250cmFzdENvbG9yO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICAgIGN0eC5mb250ID0gJ2JvbGQgMWVtICcgKyBmb250RmFtaWx5O1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbnRyYXN0Q29sb3I7XHJcbiAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAvLyBjdHguZmlsbFRleHQoYnV0dG9uVGV4dCwgY2VudGVyWCwgY2VudGVyWSArIDMpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgLy8gY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCBzaXplLCAwLCBQSTIsIGZhbHNlKTtcclxuICAgIC8vIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIC8vIGN0eC5saW5lV2lkdGggPSAxMDtcclxuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IHByaW1hcnlDb2xvcjtcclxuICAgIC8vIGN0eC5zdHJva2UoKTtcclxuICB9O1xyXG5cclxuICB2YXIgZHJhd05lZWRsZSA9IGZ1bmN0aW9uIGRyYXdOZWVkbGUoKSB7XHJcbiAgICB2YXIgY3R4ID0gY2FudmFzQ29udGV4dDtcclxuICAgIC8vIGN0eC5saW5lV2lkdGggPSAxO1xyXG4gICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gY29udHJhc3RDb2xvcjtcclxuICAgIC8vIGN0eC5maWxlU3R5bGUgPSBjb250cmFzdENvbG9yO1xyXG4gICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgLy8gY3R4Lm1vdmVUbyhjZW50ZXJYICsgMjAsIGNlbnRlclkgLSA1MCk7XHJcbiAgICAvLyBjdHgubGluZVRvKGNlbnRlclggLSAyMCwgY2VudGVyWSAtIDUwKTtcclxuICAgIC8vIGN0eC5saW5lVG8oY2VudGVyWCwgY2VudGVyWSAtIDcwKTtcclxuICAgIC8vIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIC8vIGN0eC5maWxsKCk7XHJcbiAgICB2YXIgY2hhbmdlID0gYW5nbGVDdXJyZW50ICsgTWF0aC5QSSAvIDI7XHJcbiAgICB2YXIgaSA9IHNlZ21lbnRzLmxlbmd0aCAtIE1hdGguZmxvb3IoY2hhbmdlIC8gKE1hdGguUEkgKiAyKSAqIHNlZ21lbnRzLmxlbmd0aCkgLSAxO1xyXG4gICAgaWYgKGkgPCAwKSBpID0gaSArIHNlZ21lbnRzLmxlbmd0aDtcclxuICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcclxuICAgIGN0eC5maWxsU3R5bGUgPSBwcmltYXJ5Q29sb3I7XHJcbiAgICBjdHguZm9udCA9ICdib2xkIDEuNWVtICcgKyBmb250RmFtaWx5O1xyXG4gICAgY3VycmVudFNlZ21lbnQgPSBzZWdtZW50c1tpXTtcclxuICAgIGlzU3RhcnRlZCAmJiBjdHguZmlsbFRleHQoY3VycmVudFNlZ21lbnQsIGNlbnRlclggKyAxMCwgY2VudGVyWSArIHNpemUgKyA1MCk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XHJcbiAgICB2YXIgY3R4ID0gY2FudmFzQ29udGV4dDtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgMTAwMCwgODAwKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XHJcbiAgICBpZDogXCJ3aGVlbFwiLFxyXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiwge1xyXG4gICAgaWQ6IFwiY2FudmFzXCIsXHJcbiAgICB3aWR0aDogXCI1OTBcIixcclxuICAgIGhlaWdodDogXCI1OTBcIixcclxuICAgIHN0eWxlOiB7XHJcbiAgICAgIG1hcmdpblRvcDogXCI0MnB4XCIsXHJcbiAgICAgIG1hcmdpbkxlZnQ6IFwiMzlweFwiLFxyXG4gICAgICBwb2ludGVyRXZlbnRzOiBpc0ZpbmlzaGVkICYmIGlzT25seU9uY2UgPyAnbm9uZScgOiAnYXV0bydcclxuICAgIH1cclxuICB9KSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Lm1lbW8oV2hlZWxDb21wb25lbnQpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJSZWFjdEhvd2xlciIsImRlZmF1bHQiLCJXaGVlbENvbXBvbmVudCIsIl9yZWYiLCJzaG91bGRXZVNwaW4iLCJzZXRTaG91bGRXZVNwaW4iLCJ1c2VTdGF0ZSIsInNvdW5kIiwic2V0U291bmQiLCJzZWdtZW50cyIsInNwaW5TZWNvbmRzIiwic2VnQ29sb3JzIiwid2lubmluZ1NlZ21lbnQiLCJvbkZpbmlzaGVkIiwiX3JlZiRwcmltYXJ5Q29sb3IiLCJwcmltYXJ5Q29sb3IiLCJfcmVmJGNvbnRyYXN0Q29sb3IiLCJjb250cmFzdENvbG9yIiwiX3JlZiRpc09ubHlPbmNlIiwiaXNPbmx5T25jZSIsIl9yZWYkc2l6ZSIsInNpemUiLCJfcmVmJHVwRHVyYXRpb24iLCJ1cER1cmF0aW9uIiwiX3JlZiRkb3duRHVyYXRpb24iLCJkb3duRHVyYXRpb24iLCJfcmVmJGZvbnRGYW1pbHkiLCJmb250RmFtaWx5IiwiY3VycmVudFNlZ21lbnQiLCJpc1N0YXJ0ZWQiLCJfdXNlU3RhdGUiLCJpc0ZpbmlzaGVkIiwic2V0RmluaXNoZWQiLCJ0aW1lckhhbmRsZSIsInRpbWVyTWFudWFsRGVsYXkiLCJ0aW1lckRlbGF5IiwibGVuZ3RoIiwiYW5nbGVDdXJyZW50IiwiYW5nbGVEZWx0YSIsImNhbnZhc0NvbnRleHQiLCJtYXhTcGVlZCIsImNvbnNvbGUiLCJsb2ciLCJ1cFRpbWUiLCJkb3duVGltZSIsInNwaW5TdGFydCIsImZyYW1lcyIsImNlbnRlclgiLCJjZW50ZXJZIiwidXNlRWZmZWN0Iiwid2hlZWxJbml0Iiwic3BpbiIsImluaXRDYW52YXMiLCJ3aGVlbERyYXciLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIkRhdGUiLCJnZXRUaW1lIiwiTWF0aCIsIlBJIiwic2V0SW50ZXJ2YWwiLCJvblRpbWVyVGljayIsImRyYXciLCJkdXJhdGlvbiIsInByb2dyZXNzIiwiZmluaXNoZWQiLCJzaW4iLCJjbGVhckludGVydmFsIiwiY2xlYXIiLCJkcmF3V2hlZWwiLCJkcmF3TmVlZGxlIiwiZHJhd1NlZ21lbnQiLCJrZXkiLCJsYXN0QW5nbGUiLCJhbmdsZSIsImN0eCIsInZhbHVlIiwic2F2ZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImFyYyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImZpbGxTdHlsZSIsImZpbGwiLCJzdHJva2UiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJmb250IiwiZmlsbFRleHQiLCJzdWJzdHIiLCJyZXN0b3JlIiwibGVuIiwiUEkyIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJ0ZXh0QmFzZWxpbmUiLCJ0ZXh0QWxpZ24iLCJpIiwiZHJhd0ltYWdlIiwiY2hhbmdlIiwiZmxvb3IiLCJjbGVhclJlY3QiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsInBvaW50ZXJFdmVudHMiLCJtb2R1bGUiLCJleHBvcnRzIiwibWVtbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./plugins/amazing-spin-wheel-game/index.js\n");

/***/ })

});