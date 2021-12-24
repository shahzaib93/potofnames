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

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar ref1 = __webpack_require__(/*! react-howler */ \"./node_modules/react-howler/lib/index.js\"), ReactHowler = ref1.default;\nvar WheelComponent = function WheelComponent(_ref) {\n    _s1();\n    // console.log(_ref.segments);\n    var shouldWeSpin = _ref.shouldWeSpin, setShouldWeSpin = _ref.setShouldWeSpin;\n    var ref = _slicedToArray(React.useState(false), 2), sound = ref[0], setSound = ref[1];\n    {\n    }\n    var segments = _ref.segments, spinSeconds = _ref.spinSeconds, segColors = _ref.segColors, winningSegment = _ref.winningSegment, onFinished = _ref.onFinished, _ref$primaryColor = _ref.primaryColor, primaryColor = _ref$primaryColor === void 0 ? 'black' : _ref$primaryColor, _ref$contrastColor = _ref.contrastColor, contrastColor = _ref$contrastColor === void 0 ? 'white' : _ref$contrastColor, _ref$isOnlyOnce = _ref.isOnlyOnce, isOnlyOnce = _ref$isOnlyOnce === void 0 ? true : _ref$isOnlyOnce, _ref$size = _ref.size, size = _ref$size === void 0 ? 290 : _ref$size, _ref$upDuration = _ref.upDuration, upDuration = _ref$upDuration === void 0 ? 100 : _ref$upDuration, _ref$downDuration = _ref.downDuration, downDuration = _ref$downDuration === void 0 ? 1000 : _ref$downDuration, _ref$fontFamily = _ref.fontFamily, fontFamily = _ref$fontFamily === void 0 ? 'proxima-nova' : _ref$fontFamily;\n    var currentSegment = '';\n    var isStarted = false;\n    var _useState = React.useState(false), isFinished = _useState[0], setFinished = _useState[1];\n    var timerHandle = 0;\n    var timerManualDelay = 50;\n    if (spinSeconds > 60) {\n        timerManualDelay = 60;\n    }\n    // spinSeconds\n    var timerDelay = segments.length < timerManualDelay ? timerManualDelay : segments.length;\n    var angleCurrent = 0;\n    var angleDelta = 0;\n    var canvasContext = null;\n    // var maxSpeed = Math.PI / (segments.length);\n    var maxSpeed = 4;\n    console.log(\"Total segments \".concat(segments.length));\n    console.log(\"Max speed \".concat(maxSpeed));\n    console.log(\"Timer delay \".concat(timerManualDelay));\n    var upTime = segments.length * upDuration;\n    var downTime = segments.length * downDuration;\n    var spinStart = 0;\n    var frames = 0;\n    var centerX = 300;\n    var centerY = 300;\n    React.useEffect(function() {\n        wheelInit();\n    }, [\n        segments\n    ]);\n    React.useEffect(function() {\n        if (shouldWeSpin) {\n            // console.log(\"shouldspin\",shouldWeSpin)\n            setSound(true);\n            wheelInit();\n            spin();\n            setShouldWeSpin(false);\n        // setSound(false)\n        }\n    }, [\n        shouldWeSpin\n    ]);\n    // React.useEffect(() => {\n    //     wheelInit();\n    // },[])\n    var wheelInit = function wheelInit() {\n        initCanvas();\n        wheelDraw();\n    };\n    var initCanvas = function initCanvas() {\n        var canvas = document.getElementById('canvas');\n        canvasContext = canvas.getContext('2d');\n    // var background = new Image();\n    // background.src = \"../wheel_frame.png\";\n    // canvasContext.drawImage(background,100,100,4000,2770);  \n    // var spinBtn = document.getElementById('spinBtn');\n    // console.log(\"33333\");\n    // spinBtn.addEventListener('click', spin, false);\n    };\n    var spin = function spin() {\n        console.log(\"spinning\");\n        isStarted = true;\n        if (timerHandle === 0) {\n            spinStart = new Date().getTime();\n            maxSpeed = Math.PI / segments.length;\n            frames = 0;\n            timerHandle = setInterval(onTimerTick, timerDelay);\n        }\n    };\n    var onTimerTick = function onTimerTick() {\n        frames++;\n        draw();\n        var duration = new Date().getTime() - spinStart;\n        console.log(\"duration \".concat(duration));\n        var progress = 0;\n        var finished = false;\n        if (duration < upTime) {\n            progress = duration / upTime;\n            console.log(\"progress \".concat(progress));\n            console.log(\"upTime \".concat(upTime));\n            angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2);\n        } else {\n            if (winningSegment) {\n                if (currentSegment === winningSegment && frames > segments.length) {\n                    progress = duration / upTime;\n                    angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);\n                    progress = 1;\n                } else {\n                    progress = duration / downTime;\n                    angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);\n                }\n            } else {\n                progress = duration / downTime;\n                angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);\n            }\n            if (progress >= 1) finished = true;\n            console.log(\"progress \".concat(progress));\n        }\n        angleCurrent += angleDelta;\n        while(angleCurrent >= Math.PI * 2){\n            angleCurrent -= Math.PI * 2;\n        }\n        if (finished) {\n            setFinished(true);\n            onFinished(currentSegment);\n            clearInterval(timerHandle);\n            timerHandle = 0;\n            angleDelta = 0;\n        }\n    };\n    var wheelDraw = function wheelDraw() {\n        clear();\n        drawWheel();\n        drawNeedle();\n    };\n    var draw = function draw() {\n        clear();\n        drawWheel();\n        drawNeedle();\n    };\n    var drawSegment = function drawSegment(key, lastAngle, angle) {\n        var ctx = canvasContext;\n        var value = segments[key];\n        ctx.save();\n        ctx.beginPath();\n        ctx.moveTo(centerX, centerY);\n        ctx.arc(centerX, centerY, size, lastAngle, angle, false);\n        ctx.lineTo(centerX, centerY);\n        ctx.closePath();\n        ctx.fillStyle = segColors[key];\n        ctx.fill();\n        ctx.stroke();\n        ctx.save();\n        ctx.translate(centerX, centerY);\n        ctx.rotate((lastAngle + angle) / 2);\n        ctx.fillStyle = contrastColor;\n        ctx.font = 'bold 1em ' + fontFamily;\n        ctx.fillText(value.substr(0, 21), size / 2 + 20, 0);\n        ctx.restore();\n    };\n    var drawWheel = function drawWheel() {\n        var ctx = canvasContext;\n        var lastAngle = angleCurrent;\n        var len = segments.length;\n        var PI2 = Math.PI * 2;\n        ctx.lineWidth = 1;\n        ctx.strokeStyle = primaryColor;\n        ctx.textBaseline = 'middle';\n        ctx.textAlign = 'center';\n        ctx.font = '1em ' + fontFamily;\n        for(var i = 1; i <= len; i++){\n            var angle = PI2 * (i / len) + angleCurrent;\n            drawSegment(i - 1, lastAngle, angle);\n            lastAngle = angle;\n        }\n        ctx.beginPath();\n        ctx.arc(centerX, centerY, 50, 0, PI2, false);\n        ctx.closePath();\n        ctx.fillStyle = primaryColor;\n        ctx.lineWidth = 10;\n        ctx.strokeStyle = contrastColor;\n        ctx.fill();\n        ctx.font = 'bold 1em ' + fontFamily;\n        ctx.fillStyle = contrastColor;\n        ctx.textAlign = 'center';\n        // ctx.fillText(buttonText, centerX, centerY + 3);\n        ctx.stroke();\n    // ctx.beginPath();\n    // ctx.arc(centerX, centerY, size, 0, PI2, false);\n    // ctx.closePath();\n    // ctx.lineWidth = 10;\n    // ctx.strokeStyle = primaryColor;\n    // ctx.stroke();\n    };\n    var drawNeedle = function drawNeedle() {\n        var ctx = canvasContext;\n        // ctx.lineWidth = 1;\n        // ctx.strokeStyle = contrastColor;\n        // ctx.fileStyle = contrastColor;\n        // ctx.beginPath();\n        // ctx.moveTo(centerX + 20, centerY - 50);\n        // ctx.lineTo(centerX - 20, centerY - 50);\n        // ctx.lineTo(centerX, centerY - 70);\n        // ctx.closePath();\n        // ctx.fill();\n        var change = angleCurrent + Math.PI / 2;\n        var i = segments.length - Math.floor(change / (Math.PI * 2) * segments.length) - 1;\n        if (i < 0) i = i + segments.length;\n        ctx.textAlign = 'center';\n        ctx.textBaseline = 'middle';\n        // ctx.fillStyle = primaryColor;\n        ctx.font = 'bold 1.5em ' + fontFamily;\n        currentSegment = segments[i];\n        isStarted && ctx.fillText(currentSegment, centerX + 10, centerY + size + 50);\n    };\n    var clear = function clear() {\n        var ctx = canvasContext;\n        ctx.clearRect(0, 0, 1000, 800);\n    };\n    return React.createElement(\"div\", {\n        id: \"wheel\"\n    }, React.createElement(\"canvas\", {\n        id: \"canvas\",\n        width: \"590\",\n        height: \"590\",\n        style: {\n            marginTop: \"42px\",\n            marginLeft: \"39px\",\n            pointerEvents: isFinished && isOnlyOnce ? 'none' : 'auto'\n        }\n    }));\n};\n_s1(WheelComponent, \"CtrNpZXLFbeX4PFudOvmaqB7O2I=\");\n_c = WheelComponent;\nmodule.exports = React.memo(WheelComponent);\nvar _c;\n$RefreshReg$(_c, \"WheelComponent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbHVnaW5zL2FtYXppbmctc3Bpbi13aGVlbC1nYW1lL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxHQUFHLENBQUNBLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBTztBQUMzQixHQUFLLENBQTRCQSxJQUF1QixHQUF2QkEsbUJBQU8sQ0FBQyw4REFBYyxHQUF0Q0MsV0FBVyxHQUFLRCxJQUF1QixDQUFoREUsT0FBTztBQUNmLEdBQUcsQ0FBQ0MsY0FBYyxHQUFHLFFBQVEsQ0FBQ0EsY0FBYyxDQUFDQyxJQUFJLEVBQUUsQ0FBQzs7SUFDbEQsRUFBOEI7SUFDOUIsR0FBSyxDQUFFQyxZQUFZLEdBQXFCRCxJQUFJLENBQXJDQyxZQUFZLEVBQUVDLGVBQWUsR0FBSUYsSUFBSSxDQUF2QkUsZUFBZTtJQUNwQyxHQUFLLENBQXFCUCxHQUFxQixrQkFBckJBLEtBQUssQ0FBQ1EsUUFBUSxDQUFDLEtBQUssT0FBdkNDLEtBQUssR0FBY1QsR0FBcUIsS0FBakNVLFFBQVEsR0FBSVYsR0FBcUI7SUFDakQsQ0FBQztJQUF5RCxDQUFDO0lBRXpELEdBQUcsQ0FBQ1csUUFBUSxHQUFHTixJQUFJLENBQUNNLFFBQVEsRUFDeEJDLFdBQVcsR0FBR1AsSUFBSSxDQUFDTyxXQUFXLEVBQzlCQyxTQUFTLEdBQUdSLElBQUksQ0FBQ1EsU0FBUyxFQUMxQkMsY0FBYyxHQUFHVCxJQUFJLENBQUNTLGNBQWMsRUFDcENDLFVBQVUsR0FBR1YsSUFBSSxDQUFDVSxVQUFVLEVBQzVCQyxpQkFBaUIsR0FBR1gsSUFBSSxDQUFDWSxZQUFZLEVBQ3JDQSxZQUFZLEdBQUdELGlCQUFpQixLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBTyxTQUFHQSxpQkFBaUIsRUFDekVFLGtCQUFrQixHQUFHYixJQUFJLENBQUNjLGFBQWEsRUFDdkNBLGFBQWEsR0FBR0Qsa0JBQWtCLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFP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QUFHLEdBQUd0QyxhQUFhO1FBQ3ZCc0MsR0FBRyxDQUFDMEIsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUc7SUFDL0IsQ0FBQztJQUVELE1BQU0sQ0FBQ3pHLEtBQUssQ0FBQzBHLGFBQWEsQ0FBQyxDQUFLLE1BQUUsQ0FBQztRQUNqQ0MsRUFBRSxFQUFFLENBQU87SUFDYixDQUFDLEVBQUUzRyxLQUFLLENBQUMwRyxhQUFhLENBQUMsQ0FBUSxTQUFFLENBQUM7UUFDaENDLEVBQUUsRUFBRSxDQUFRO1FBQ1pDLEtBQUssRUFBRSxDQUFLO1FBQ1pDLE1BQU0sRUFBRSxDQUFLO1FBQ2JDLEtBQUssRUFBRSxDQUFDO1lBQ05DLFNBQVMsRUFBRSxDQUFNO1lBQ2pCQyxVQUFVLEVBQUUsQ0FBTTtZQUNsQkMsYUFBYSxFQUFFaEYsVUFBVSxJQUFJWixVQUFVLEdBQUcsQ0FBTSxRQUFHLENBQU07UUFDM0QsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0lBblFHakIsY0FBYztLQUFkQSxjQUFjO0FBcVFsQjhHLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHbkgsS0FBSyxDQUFDb0gsSUFBSSxDQUFDaEgsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wbHVnaW5zL2FtYXppbmctc3Bpbi13aGVlbC1nYW1lL2luZGV4LmpzPzc1NWEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxuY29uc3QgeyBkZWZhdWx0OiBSZWFjdEhvd2xlciB9ID0gcmVxdWlyZSgncmVhY3QtaG93bGVyJyk7XHJcbnZhciBXaGVlbENvbXBvbmVudCA9IGZ1bmN0aW9uIFdoZWVsQ29tcG9uZW50KF9yZWYpIHtcclxuICAvLyBjb25zb2xlLmxvZyhfcmVmLnNlZ21lbnRzKTtcclxuICBjb25zdCB7c2hvdWxkV2VTcGluLCBzZXRTaG91bGRXZVNwaW59ID0gX3JlZjtcclxuICBjb25zdCBbc291bmQsIHNldFNvdW5kXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuey8qIDxSZWFjdEhvd2xlciBzcmM9XCIvd2hlZWwtc3Bpbi5tcDNcIiBwbGF5aW5nPXt0cnVlfS8+ICovfVxyXG5cclxuICB2YXIgc2VnbWVudHMgPSBfcmVmLnNlZ21lbnRzLFxyXG4gICAgICBzcGluU2Vjb25kcyA9IF9yZWYuc3BpblNlY29uZHMsXHJcbiAgICAgIHNlZ0NvbG9ycyA9IF9yZWYuc2VnQ29sb3JzLFxyXG4gICAgICB3aW5uaW5nU2VnbWVudCA9IF9yZWYud2lubmluZ1NlZ21lbnQsXHJcbiAgICAgIG9uRmluaXNoZWQgPSBfcmVmLm9uRmluaXNoZWQsXHJcbiAgICAgIF9yZWYkcHJpbWFyeUNvbG9yID0gX3JlZi5wcmltYXJ5Q29sb3IsXHJcbiAgICAgIHByaW1hcnlDb2xvciA9IF9yZWYkcHJpbWFyeUNvbG9yID09PSB2b2lkIDAgPyAnYmxhY2snIDogX3JlZiRwcmltYXJ5Q29sb3IsXHJcbiAgICAgIF9yZWYkY29udHJhc3RDb2xvciA9IF9yZWYuY29udHJhc3RDb2xvcixcclxuICAgICAgY29udHJhc3RDb2xvciA9IF9yZWYkY29udHJhc3RDb2xvciA9PT0gdm9pZCAwID8gJ3doaXRlJyA6IF9yZWYkY29udHJhc3RDb2xvcixcclxuICAgICAgX3JlZiRpc09ubHlPbmNlID0gX3JlZi5pc09ubHlPbmNlLFxyXG4gICAgICBpc09ubHlPbmNlID0gX3JlZiRpc09ubHlPbmNlID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRpc09ubHlPbmNlLFxyXG4gICAgICBfcmVmJHNpemUgPSBfcmVmLnNpemUsXHJcbiAgICAgIHNpemUgPSBfcmVmJHNpemUgPT09IHZvaWQgMCA/IDI5MCA6IF9yZWYkc2l6ZSxcclxuICAgICAgX3JlZiR1cER1cmF0aW9uID0gX3JlZi51cER1cmF0aW9uLFxyXG4gICAgICB1cER1cmF0aW9uID0gX3JlZiR1cER1cmF0aW9uID09PSB2b2lkIDAgPyAxMDAgOiBfcmVmJHVwRHVyYXRpb24sXHJcbiAgICAgIF9yZWYkZG93bkR1cmF0aW9uID0gX3JlZi5kb3duRHVyYXRpb24sXHJcbiAgICAgIGRvd25EdXJhdGlvbiA9IF9yZWYkZG93bkR1cmF0aW9uID09PSB2b2lkIDAgPyAxMDAwIDogX3JlZiRkb3duRHVyYXRpb24sXHJcbiAgICAgIF9yZWYkZm9udEZhbWlseSA9IF9yZWYuZm9udEZhbWlseSxcclxuICAgICAgZm9udEZhbWlseSA9IF9yZWYkZm9udEZhbWlseSA9PT0gdm9pZCAwID8gJ3Byb3hpbWEtbm92YScgOiBfcmVmJGZvbnRGYW1pbHk7XHJcbiAgdmFyIGN1cnJlbnRTZWdtZW50ID0gJyc7XHJcbiAgdmFyIGlzU3RhcnRlZCA9IGZhbHNlO1xyXG5cclxuICB2YXIgX3VzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICBpc0ZpbmlzaGVkID0gX3VzZVN0YXRlWzBdLFxyXG4gICAgICBzZXRGaW5pc2hlZCA9IF91c2VTdGF0ZVsxXTtcclxuXHJcbiAgdmFyIHRpbWVySGFuZGxlID0gMFxyXG4gIHZhciB0aW1lck1hbnVhbERlbGF5ID0gNTBcclxuICBpZihzcGluU2Vjb25kcyA+IDYwKXtcclxuICAgIHRpbWVyTWFudWFsRGVsYXkgPSA2MFxyXG4gIH1cclxuICAvLyBzcGluU2Vjb25kc1xyXG4gIHZhciB0aW1lckRlbGF5ID0gKHNlZ21lbnRzLmxlbmd0aCA8IHRpbWVyTWFudWFsRGVsYXkgID8gdGltZXJNYW51YWxEZWxheSA6IHNlZ21lbnRzLmxlbmd0aCk7XHJcbiAgdmFyIGFuZ2xlQ3VycmVudCA9IDBcclxuICB2YXIgYW5nbGVEZWx0YSA9IDBcclxuICB2YXIgY2FudmFzQ29udGV4dCA9IG51bGxcclxuICAvLyB2YXIgbWF4U3BlZWQgPSBNYXRoLlBJIC8gKHNlZ21lbnRzLmxlbmd0aCk7XHJcbiAgdmFyIG1heFNwZWVkID0gNFxyXG4gIGNvbnNvbGUubG9nKGBUb3RhbCBzZWdtZW50cyAke3NlZ21lbnRzLmxlbmd0aH1gKVxyXG4gIGNvbnNvbGUubG9nKGBNYXggc3BlZWQgJHttYXhTcGVlZH1gKVxyXG4gIGNvbnNvbGUubG9nKGBUaW1lciBkZWxheSAke3RpbWVyTWFudWFsRGVsYXl9YClcclxuICB2YXIgdXBUaW1lID0gc2VnbWVudHMubGVuZ3RoICogdXBEdXJhdGlvblxyXG4gIHZhciBkb3duVGltZSA9IHNlZ21lbnRzLmxlbmd0aCAqIGRvd25EdXJhdGlvblxyXG4gIHZhciBzcGluU3RhcnQgPSAwXHJcbiAgdmFyIGZyYW1lcyA9IDBcclxuICB2YXIgY2VudGVyWCA9IDMwMFxyXG4gIHZhciBjZW50ZXJZID0gMzAwXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICB3aGVlbEluaXQoKTtcclxuICB9LCBbc2VnbWVudHNdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHNob3VsZFdlU3Bpbikge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInNob3VsZHNwaW5cIixzaG91bGRXZVNwaW4pXHJcbiAgICAgIHNldFNvdW5kKHRydWUpXHJcbiAgICAgIHdoZWVsSW5pdCgpO1xyXG4gICAgICBzcGluKCk7XHJcbiAgICAgIHNldFNob3VsZFdlU3BpbihmYWxzZSk7XHJcbiAgICAgIC8vIHNldFNvdW5kKGZhbHNlKVxyXG4gICAgfVxyXG4gIH0sIFtzaG91bGRXZVNwaW5dKVxyXG5cclxuICAvLyBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgICB3aGVlbEluaXQoKTtcclxuICAvLyB9LFtdKVxyXG5cclxuICB2YXIgd2hlZWxJbml0ID0gZnVuY3Rpb24gd2hlZWxJbml0KCkge1xyXG4gICAgaW5pdENhbnZhcygpO1xyXG4gICAgd2hlZWxEcmF3KCk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGluaXRDYW52YXMgPSBmdW5jdGlvbiBpbml0Q2FudmFzKCkge1xyXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuICAgIGNhbnZhc0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAvLyB2YXIgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgLy8gYmFja2dyb3VuZC5zcmMgPSBcIi4uL3doZWVsX2ZyYW1lLnBuZ1wiO1xyXG4gICAgLy8gY2FudmFzQ29udGV4dC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwxMDAsMTAwLDQwMDAsMjc3MCk7ICBcclxuXHJcbiAgICAvLyB2YXIgc3BpbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGluQnRuJyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIjMzMzMzXCIpO1xyXG4gICAgLy8gc3BpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNwaW4sIGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB2YXIgc3BpbiA9IGZ1bmN0aW9uIHNwaW4oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNwaW5uaW5nXCIpXHJcbiAgICBpc1N0YXJ0ZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmICh0aW1lckhhbmRsZSA9PT0gMCkge1xyXG4gICAgICBzcGluU3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgbWF4U3BlZWQgPSBNYXRoLlBJIC8gc2VnbWVudHMubGVuZ3RoO1xyXG4gICAgICBmcmFtZXMgPSAwO1xyXG4gICAgICB0aW1lckhhbmRsZSA9IHNldEludGVydmFsKG9uVGltZXJUaWNrLCB0aW1lckRlbGF5KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB2YXIgb25UaW1lclRpY2sgPSBmdW5jdGlvbiBvblRpbWVyVGljaygpIHtcclxuICAgIGZyYW1lcysrO1xyXG4gICAgZHJhdygpO1xyXG4gICAgdmFyIGR1cmF0aW9uID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzcGluU3RhcnQ7XHJcbiAgICBjb25zb2xlLmxvZyhgZHVyYXRpb24gJHtkdXJhdGlvbn1gKTtcclxuICAgIHZhciBwcm9ncmVzcyA9IDA7XHJcbiAgICB2YXIgZmluaXNoZWQgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoZHVyYXRpb24gPCB1cFRpbWUpIHtcclxuXHJcbiAgICAgIHByb2dyZXNzID0gZHVyYXRpb24gLyB1cFRpbWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBwcm9ncmVzcyAke3Byb2dyZXNzfWApXHJcbiAgICAgIGNvbnNvbGUubG9nKGB1cFRpbWUgJHt1cFRpbWV9YClcclxuICAgICAgYW5nbGVEZWx0YSA9IG1heFNwZWVkICogTWF0aC5zaW4ocHJvZ3Jlc3MgKiBNYXRoLlBJIC8gMilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh3aW5uaW5nU2VnbWVudCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50U2VnbWVudCA9PT0gd2lubmluZ1NlZ21lbnQgJiYgZnJhbWVzID4gc2VnbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICBwcm9ncmVzcyA9IGR1cmF0aW9uIC8gdXBUaW1lO1xyXG4gICAgICAgICAgYW5nbGVEZWx0YSA9IG1heFNwZWVkICogTWF0aC5zaW4ocHJvZ3Jlc3MgKiBNYXRoLlBJIC8gMiArIE1hdGguUEkgLyAyKTtcclxuICAgICAgICAgIHByb2dyZXNzID0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcHJvZ3Jlc3MgPSBkdXJhdGlvbiAvIGRvd25UaW1lO1xyXG4gICAgICAgICAgYW5nbGVEZWx0YSA9IG1heFNwZWVkICogTWF0aC5zaW4ocHJvZ3Jlc3MgKiBNYXRoLlBJIC8gMiArIE1hdGguUEkgLyAyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvZ3Jlc3MgPSBkdXJhdGlvbiAvIGRvd25UaW1lO1xyXG4gICAgICAgIGFuZ2xlRGVsdGEgPSBtYXhTcGVlZCAqIE1hdGguc2luKHByb2dyZXNzICogTWF0aC5QSSAvIDIgKyBNYXRoLlBJIC8gMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwcm9ncmVzcyA+PSAxKSBmaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBwcm9ncmVzcyAke3Byb2dyZXNzfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGFuZ2xlQ3VycmVudCArPSBhbmdsZURlbHRhO1xyXG4gICAgd2hpbGUgKGFuZ2xlQ3VycmVudCA+PSBNYXRoLlBJICogMikge1xyXG4gICAgICBhbmdsZUN1cnJlbnQgLT0gTWF0aC5QSSAqIDI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpbmlzaGVkKSB7XHJcbiAgICAgIHNldEZpbmlzaGVkKHRydWUpO1xyXG4gICAgICBvbkZpbmlzaGVkKGN1cnJlbnRTZWdtZW50KTtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckhhbmRsZSk7XHJcbiAgICAgIHRpbWVySGFuZGxlID0gMDtcclxuICAgICAgYW5nbGVEZWx0YSA9IDA7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdmFyIHdoZWVsRHJhdyA9IGZ1bmN0aW9uIHdoZWVsRHJhdygpIHtcclxuICAgIGNsZWFyKCk7XHJcbiAgICBkcmF3V2hlZWwoKTtcclxuICAgIGRyYXdOZWVkbGUoKTtcclxuICB9O1xyXG5cclxuICB2YXIgZHJhdyA9IGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjbGVhcigpO1xyXG4gICAgZHJhd1doZWVsKCk7XHJcbiAgICBkcmF3TmVlZGxlKCk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGRyYXdTZWdtZW50ID0gZnVuY3Rpb24gZHJhd1NlZ21lbnQoa2V5LCBsYXN0QW5nbGUsIGFuZ2xlKSB7XHJcbiAgICB2YXIgY3R4ID0gY2FudmFzQ29udGV4dDtcclxuICAgIHZhciB2YWx1ZSA9IHNlZ21lbnRzW2tleV07XHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbyhjZW50ZXJYLCBjZW50ZXJZKTtcclxuICAgIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgc2l6ZSwgbGFzdEFuZ2xlLCBhbmdsZSwgZmFsc2UpO1xyXG4gICAgY3R4LmxpbmVUbyhjZW50ZXJYLCBjZW50ZXJZKTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBzZWdDb2xvcnNba2V5XTtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShjZW50ZXJYLCBjZW50ZXJZKTtcclxuICAgIGN0eC5yb3RhdGUoKGxhc3RBbmdsZSArIGFuZ2xlKSAvIDIpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbnRyYXN0Q29sb3I7XHJcbiAgICBjdHguZm9udCA9ICdib2xkIDFlbSAnICsgZm9udEZhbWlseTtcclxuICAgIGN0eC5maWxsVGV4dCh2YWx1ZS5zdWJzdHIoMCwgMjEpLCBzaXplIC8gMiArIDIwLCAwKTtcclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGRyYXdXaGVlbCA9IGZ1bmN0aW9uIGRyYXdXaGVlbCgpIHtcclxuICAgIHZhciBjdHggPSBjYW52YXNDb250ZXh0O1xyXG4gICAgdmFyIGxhc3RBbmdsZSA9IGFuZ2xlQ3VycmVudDtcclxuICAgIHZhciBsZW4gPSBzZWdtZW50cy5sZW5ndGg7XHJcbiAgICB2YXIgUEkyID0gTWF0aC5QSSAqIDI7XHJcbiAgICBjdHgubGluZVdpZHRoID0gMTtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHByaW1hcnlDb2xvcjtcclxuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcclxuICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgIGN0eC5mb250ID0gJzFlbSAnICsgZm9udEZhbWlseTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBsZW47IGkrKykge1xyXG4gICAgICB2YXIgYW5nbGUgPSBQSTIgKiAoaSAvIGxlbikgKyBhbmdsZUN1cnJlbnQ7XHJcbiAgICAgIGRyYXdTZWdtZW50KGkgLSAxLCBsYXN0QW5nbGUsIGFuZ2xlKTtcclxuICAgICAgbGFzdEFuZ2xlID0gYW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCA1MCwgMCwgUEkyLCBmYWxzZSk7XHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gcHJpbWFyeUNvbG9yO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDEwO1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29udHJhc3RDb2xvcjtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgICBjdHguZm9udCA9ICdib2xkIDFlbSAnICsgZm9udEZhbWlseTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBjb250cmFzdENvbG9yO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgLy8gY3R4LmZpbGxUZXh0KGJ1dHRvblRleHQsIGNlbnRlclgsIGNlbnRlclkgKyAzKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIC8vIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgc2l6ZSwgMCwgUEkyLCBmYWxzZSk7XHJcbiAgICAvLyBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAvLyBjdHgubGluZVdpZHRoID0gMTA7XHJcbiAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBwcmltYXJ5Q29sb3I7XHJcbiAgICAvLyBjdHguc3Ryb2tlKCk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGRyYXdOZWVkbGUgPSBmdW5jdGlvbiBkcmF3TmVlZGxlKCkge1xyXG4gICAgdmFyIGN0eCA9IGNhbnZhc0NvbnRleHQ7XHJcbiAgICAvLyBjdHgubGluZVdpZHRoID0gMTtcclxuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IGNvbnRyYXN0Q29sb3I7XHJcbiAgICAvLyBjdHguZmlsZVN0eWxlID0gY29udHJhc3RDb2xvcjtcclxuICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIC8vIGN0eC5tb3ZlVG8oY2VudGVyWCArIDIwLCBjZW50ZXJZIC0gNTApO1xyXG4gICAgLy8gY3R4LmxpbmVUbyhjZW50ZXJYIC0gMjAsIGNlbnRlclkgLSA1MCk7XHJcbiAgICAvLyBjdHgubGluZVRvKGNlbnRlclgsIGNlbnRlclkgLSA3MCk7XHJcbiAgICAvLyBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAvLyBjdHguZmlsbCgpO1xyXG4gICAgdmFyIGNoYW5nZSA9IGFuZ2xlQ3VycmVudCArIE1hdGguUEkgLyAyO1xyXG4gICAgdmFyIGkgPSBzZWdtZW50cy5sZW5ndGggLSBNYXRoLmZsb29yKGNoYW5nZSAvIChNYXRoLlBJICogMikgKiBzZWdtZW50cy5sZW5ndGgpIC0gMTtcclxuICAgIGlmIChpIDwgMCkgaSA9IGkgKyBzZWdtZW50cy5sZW5ndGg7XHJcbiAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XHJcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gcHJpbWFyeUNvbG9yO1xyXG4gICAgY3R4LmZvbnQgPSAnYm9sZCAxLjVlbSAnICsgZm9udEZhbWlseTtcclxuICAgIGN1cnJlbnRTZWdtZW50ID0gc2VnbWVudHNbaV07XHJcbiAgICBpc1N0YXJ0ZWQgJiYgY3R4LmZpbGxUZXh0KGN1cnJlbnRTZWdtZW50LCBjZW50ZXJYICsgMTAsIGNlbnRlclkgKyBzaXplICsgNTApO1xyXG4gIH07XHJcblxyXG4gIHZhciBjbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xyXG4gICAgdmFyIGN0eCA9IGNhbnZhc0NvbnRleHQ7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDEwMDAsIDgwMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xyXG4gICAgaWQ6IFwid2hlZWxcIixcclxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIsIHtcclxuICAgIGlkOiBcImNhbnZhc1wiLFxyXG4gICAgd2lkdGg6IFwiNTkwXCIsXHJcbiAgICBoZWlnaHQ6IFwiNTkwXCIsXHJcbiAgICBzdHlsZToge1xyXG4gICAgICBtYXJnaW5Ub3A6IFwiNDJweFwiLFxyXG4gICAgICBtYXJnaW5MZWZ0OiBcIjM5cHhcIixcclxuICAgICAgcG9pbnRlckV2ZW50czogaXNGaW5pc2hlZCAmJiBpc09ubHlPbmNlID8gJ25vbmUnIDogJ2F1dG8nXHJcbiAgICB9XHJcbiAgfSkpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5tZW1vKFdoZWVsQ29tcG9uZW50KTsiXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiUmVhY3RIb3dsZXIiLCJkZWZhdWx0IiwiV2hlZWxDb21wb25lbnQiLCJfcmVmIiwic2hvdWxkV2VTcGluIiwic2V0U2hvdWxkV2VTcGluIiwidXNlU3RhdGUiLCJzb3VuZCIsInNldFNvdW5kIiwic2VnbWVudHMiLCJzcGluU2Vjb25kcyIsInNlZ0NvbG9ycyIsIndpbm5pbmdTZWdtZW50Iiwib25GaW5pc2hlZCIsIl9yZWYkcHJpbWFyeUNvbG9yIiwicHJpbWFyeUNvbG9yIiwiX3JlZiRjb250cmFzdENvbG9yIiwiY29udHJhc3RDb2xvciIsIl9yZWYkaXNPbmx5T25jZSIsImlzT25seU9uY2UiLCJfcmVmJHNpemUiLCJzaXplIiwiX3JlZiR1cER1cmF0aW9uIiwidXBEdXJhdGlvbiIsIl9yZWYkZG93bkR1cmF0aW9uIiwiZG93bkR1cmF0aW9uIiwiX3JlZiRmb250RmFtaWx5IiwiZm9udEZhbWlseSIsImN1cnJlbnRTZWdtZW50IiwiaXNTdGFydGVkIiwiX3VzZVN0YXRlIiwiaXNGaW5pc2hlZCIsInNldEZpbmlzaGVkIiwidGltZXJIYW5kbGUiLCJ0aW1lck1hbnVhbERlbGF5IiwidGltZXJEZWxheSIsImxlbmd0aCIsImFuZ2xlQ3VycmVudCIsImFuZ2xlRGVsdGEiLCJjYW52YXNDb250ZXh0IiwibWF4U3BlZWQiLCJjb25zb2xlIiwibG9nIiwidXBUaW1lIiwiZG93blRpbWUiLCJzcGluU3RhcnQiLCJmcmFtZXMiLCJjZW50ZXJYIiwiY2VudGVyWSIsInVzZUVmZmVjdCIsIndoZWVsSW5pdCIsInNwaW4iLCJpbml0Q2FudmFzIiwid2hlZWxEcmF3IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJEYXRlIiwiZ2V0VGltZSIsIk1hdGgiLCJQSSIsInNldEludGVydmFsIiwib25UaW1lclRpY2siLCJkcmF3IiwiZHVyYXRpb24iLCJwcm9ncmVzcyIsImZpbmlzaGVkIiwic2luIiwiY2xlYXJJbnRlcnZhbCIsImNsZWFyIiwiZHJhd1doZWVsIiwiZHJhd05lZWRsZSIsImRyYXdTZWdtZW50Iiwia2V5IiwibGFzdEFuZ2xlIiwiYW5nbGUiLCJjdHgiLCJ2YWx1ZSIsInNhdmUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJhcmMiLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsIiwic3Ryb2tlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiZm9udCIsImZpbGxUZXh0Iiwic3Vic3RyIiwicmVzdG9yZSIsImxlbiIsIlBJMiIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwidGV4dEJhc2VsaW5lIiwidGV4dEFsaWduIiwiaSIsImNoYW5nZSIsImZsb29yIiwiY2xlYXJSZWN0IiwiY3JlYXRlRWxlbWVudCIsImlkIiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJwb2ludGVyRXZlbnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1lbW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./plugins/amazing-spin-wheel-game/index.js\n");

/***/ })

});