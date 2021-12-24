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

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar ref1 = __webpack_require__(/*! react-howler */ \"./node_modules/react-howler/lib/index.js\"), ReactHowler = ref1.default;\nvar img = new Image();\nvar WheelComponent = function WheelComponent(_ref) {\n    _s1();\n    // console.log(_ref.segments);\n    var shouldWeSpin = _ref.shouldWeSpin, setShouldWeSpin = _ref.setShouldWeSpin;\n    var ref = _slicedToArray(React.useState(false), 2), sound = ref[0], setSound = ref[1];\n    {\n    }\n    var segments = _ref.segments, spinSeconds = _ref.spinSeconds, segColors = _ref.segColors, winningSegment = _ref.winningSegment, onFinished = _ref.onFinished, _ref$primaryColor = _ref.primaryColor, primaryColor = _ref$primaryColor === void 0 ? 'black' : _ref$primaryColor, _ref$contrastColor = _ref.contrastColor, contrastColor = _ref$contrastColor === void 0 ? 'white' : _ref$contrastColor, _ref$isOnlyOnce = _ref.isOnlyOnce, isOnlyOnce = _ref$isOnlyOnce === void 0 ? true : _ref$isOnlyOnce, _ref$size = _ref.size, size = _ref$size === void 0 ? 290 : _ref$size, _ref$upDuration = _ref.upDuration, upDuration = _ref$upDuration === void 0 ? 100 : _ref$upDuration, _ref$downDuration = _ref.downDuration, downDuration = _ref$downDuration === void 0 ? 1000 : _ref$downDuration, _ref$fontFamily = _ref.fontFamily, fontFamily = _ref$fontFamily === void 0 ? 'proxima-nova' : _ref$fontFamily;\n    var currentSegment = '';\n    var isStarted = false;\n    var _useState = React.useState(false), isFinished = _useState[0], setFinished = _useState[1];\n    var timerHandle = 0;\n    var timerManualDelay = 50;\n    if (spinSeconds > 60) {\n        timerManualDelay = 60;\n    }\n    // spinSeconds\n    var timerDelay = segments.length < timerManualDelay ? timerManualDelay : segments.length;\n    var angleCurrent = 0;\n    var angleDelta = 0;\n    var canvasContext = null;\n    // var maxSpeed = Math.PI / (segments.length);\n    var maxSpeed = 4;\n    console.log(\"Total segments \".concat(segments.length));\n    console.log(\"Max speed \".concat(maxSpeed));\n    console.log(\"Timer delay \".concat(timerManualDelay));\n    var upTime = segments.length * upDuration;\n    var downTime = segments.length * downDuration;\n    var spinStart = 0;\n    var frames = 0;\n    var centerX = 300;\n    var centerY = 300;\n    React.useEffect(function() {\n        wheelInit();\n    }, [\n        segments\n    ]);\n    React.useEffect(function() {\n        if (shouldWeSpin) {\n            // console.log(\"shouldspin\",shouldWeSpin)\n            setSound(true);\n            wheelInit();\n            spin();\n            setShouldWeSpin(false);\n        // setSound(false)\n        }\n    }, [\n        shouldWeSpin\n    ]);\n    // React.useEffect(() => {\n    //     wheelInit();\n    // },[])\n    var wheelInit = function wheelInit() {\n        initCanvas();\n        wheelDraw();\n    };\n    var initCanvas = function initCanvas() {\n        var canvas = document.getElementById('canvas');\n        canvasContext = canvas.getContext('2d');\n    // var background = new Image();\n    // background.src = \"../wheel_frame.png\";\n    // canvasContext.drawImage(background,100,100,4000,2770);  \n    // var spinBtn = document.getElementById('spinBtn');\n    // console.log(\"33333\");\n    // spinBtn.addEventListener('click', spin, false);\n    };\n    var spin = function spin() {\n        console.log(\"spinning\");\n        isStarted = true;\n        if (timerHandle === 0) {\n            spinStart = new Date().getTime();\n            maxSpeed = Math.PI / segments.length;\n            frames = 0;\n            timerHandle = setInterval(onTimerTick, timerDelay);\n        }\n    };\n    var onTimerTick = function onTimerTick() {\n        frames++;\n        draw();\n        var duration = new Date().getTime() - spinStart;\n        console.log(\"duration \".concat(duration));\n        var progress = 0;\n        var finished = false;\n        if (duration < upTime) {\n            progress = duration / upTime;\n            console.log(\"progress \".concat(progress));\n            console.log(\"upTime \".concat(upTime));\n            angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2);\n        } else {\n            if (winningSegment) {\n                if (currentSegment === winningSegment && frames > segments.length) {\n                    progress = duration / upTime;\n                    angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);\n                    progress = 1;\n                } else {\n                    progress = duration / downTime;\n                    angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);\n                }\n            } else {\n                progress = duration / downTime;\n                angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);\n            }\n            if (progress >= 1) finished = true;\n            console.log(\"progress \".concat(progress));\n        }\n        angleCurrent += angleDelta;\n        while(angleCurrent >= Math.PI * 2){\n            angleCurrent -= Math.PI * 2;\n        }\n        if (finished) {\n            setFinished(true);\n            onFinished(currentSegment);\n            clearInterval(timerHandle);\n            timerHandle = 0;\n            angleDelta = 0;\n        }\n    };\n    var wheelDraw = function wheelDraw() {\n        clear();\n        drawWheel();\n        drawNeedle();\n    };\n    var draw = function draw() {\n        clear();\n        drawWheel();\n        drawNeedle();\n    };\n    var drawSegment = function drawSegment(key, lastAngle, angle) {\n        var ctx = canvasContext;\n        var value = segments[key];\n        ctx.save();\n        ctx.beginPath();\n        ctx.moveTo(centerX, centerY);\n        ctx.arc(centerX, centerY, size, lastAngle, angle, false);\n        ctx.lineTo(centerX, centerY);\n        ctx.closePath();\n        ctx.fillStyle = segColors[key];\n        ctx.fill();\n        ctx.stroke();\n        ctx.save();\n        ctx.translate(centerX, centerY);\n        ctx.rotate((lastAngle + angle) / 2);\n        ctx.fillStyle = contrastColor;\n        ctx.font = 'bold 1em ' + fontFamily;\n        ctx.fillText(value.substr(0, 21), size / 2 + 20, 0);\n        ctx.restore();\n    };\n    var drawWheel = function drawWheel() {\n        var ctx = canvasContext;\n        var lastAngle = angleCurrent;\n        var len = segments.length;\n        var PI2 = Math.PI * 2;\n        ctx.lineWidth = 1;\n        ctx.strokeStyle = primaryColor;\n        ctx.textBaseline = 'middle';\n        ctx.textAlign = 'center';\n        ctx.font = '1em ' + fontFamily;\n        for(var i = 1; i <= len; i++){\n            var angle = PI2 * (i / len) + angleCurrent;\n            drawSegment(i - 1, lastAngle, angle);\n            lastAngle = angle;\n        }\n        img.src = \"logo.jpg\";\n        ctx.beginPath();\n        ctx.arc(centerX, centerY, 50, 0, PI2, false);\n        ctx.closePath();\n        // ctx.fillStyle = primaryColor;\n        ctx.drawImage(img, 0, 0, 5, 5);\n        ctx.lineWidth = 10;\n        ctx.strokeStyle = contrastColor;\n        ctx.fill();\n        ctx.font = 'bold 1em ' + fontFamily;\n        ctx.fillStyle = contrastColor;\n        ctx.textAlign = 'center';\n        // ctx.fillText(buttonText, centerX, centerY + 3);\n        ctx.stroke();\n    // ctx.beginPath();\n    // ctx.arc(centerX, centerY, size, 0, PI2, false);\n    // ctx.closePath();\n    // ctx.lineWidth = 10;\n    // ctx.strokeStyle = primaryColor;\n    // ctx.stroke();\n    };\n    var drawNeedle = function drawNeedle() {\n        var ctx = canvasContext;\n        // ctx.lineWidth = 1;\n        // ctx.strokeStyle = contrastColor;\n        // ctx.fileStyle = contrastColor;\n        // ctx.beginPath();\n        // ctx.moveTo(centerX + 20, centerY - 50);\n        // ctx.lineTo(centerX - 20, centerY - 50);\n        // ctx.lineTo(centerX, centerY - 70);\n        // ctx.closePath();\n        // ctx.fill();\n        var change = angleCurrent + Math.PI / 2;\n        var i = segments.length - Math.floor(change / (Math.PI * 2) * segments.length) - 1;\n        if (i < 0) i = i + segments.length;\n        ctx.textAlign = 'center';\n        ctx.textBaseline = 'middle';\n        ctx.fillStyle = primaryColor;\n        ctx.font = 'bold 1.5em ' + fontFamily;\n        currentSegment = segments[i];\n        isStarted && ctx.fillText(currentSegment, centerX + 10, centerY + size + 50);\n    };\n    var clear = function clear() {\n        var ctx = canvasContext;\n        ctx.clearRect(0, 0, 1000, 800);\n    };\n    return React.createElement(\"div\", {\n        id: \"wheel\"\n    }, React.createElement(\"canvas\", {\n        id: \"canvas\",\n        width: \"590\",\n        height: \"590\",\n        style: {\n            marginTop: \"42px\",\n            marginLeft: \"39px\",\n            pointerEvents: isFinished && isOnlyOnce ? 'none' : 'auto'\n        }\n    }));\n};\n_s1(WheelComponent, \"CtrNpZXLFbeX4PFudOvmaqB7O2I=\");\n_c = WheelComponent;\nmodule.exports = React.memo(WheelComponent);\nvar _c;\n$RefreshReg$(_c, \"WheelComponent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbHVnaW5zL2FtYXppbmctc3Bpbi13aGVlbC1nYW1lL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxHQUFHLENBQUNBLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBTztBQUMzQixHQUFLLENBQTRCQSxJQUF1QixHQUF2QkEsbUJBQU8sQ0FBQyw4REFBYyxHQUF0Q0MsV0FBVyxHQUFLRCxJQUF1QixDQUFoREUsT0FBTztBQUNmLEdBQUcsQ0FBQ0MsR0FBRyxHQUFHLEdBQUcsQ0FBQ0MsS0FBSztBQUNuQixHQUFHLENBQUNDLGNBQWMsR0FBRyxRQUFRLENBQUNBLGNBQWMsQ0FBQ0MsSUFBSSxFQUFFLENBQUM7O0lBQ2xELEVBQThCO0lBQzlCLEdBQUssQ0FBRUMsWUFBWSxHQUFxQkQsSUFBSSxDQUFyQ0MsWUFBWSxFQUFFQyxlQUFlLEdBQUlGLElBQUksQ0FBdkJFLGVBQWU7SUFDcEMsR0FBSyxDQUFxQlQsR0FBcUIsa0JBQXJCQSxLQUFLLENBQUNVLFFBQVEsQ0FBQyxLQUFLLE9BQXZDQyxLQUFLLEdBQWNYLEdBQXFCLEtBQWpDWSxRQUFRLEdBQUlaLEdBQXFCO0lBQ2pELENBQUM7SUFBeUQsQ0FBQztJQUV6RCxHQUFHLENBQUNhLFFBQVEsR0FBR04sSUFBSSxDQUFDTSxRQUFRLEVBQ3hCQyxXQUFXLEdBQUdQLElBQUksQ0FBQ08sV0FBVyxFQUM5QkMsU0FBUyxHQUFHUixJQUFJLENBQUNRLFNBQVMsRUFDMUJDLGNBQWMsR0FBR1QsSUFBSSxDQUFDUyxjQUFjLEVBQ3BDQyxVQUFVLEdBQUdWLElBQUksQ0FBQ1UsVUFBVSxFQUM1QkMsaUJBQWlCLEdBQUdYLElBQUksQ0FBQ1ksWUFBWSxFQUNyQ0EsWUFBWSxHQUFHRCxpQkFBaUIsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQU8sU0FBR0EsaUJBQWlCLEVBQ3pFRSxrQkFBa0IsR0FBR2IsSUFBSSxDQUFDYyxhQUFhLEVBQ3ZDQSxhQUFh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LFFBQVEsQ0FBQy9ELGNBQWMsRUFBRW1CLE9BQU8sR0FBRyxFQUFFLEVBQUVDLE9BQU8sR0FBRzNCLElBQUksR0FBRyxFQUFFO0lBQzdFLENBQUM7SUFFRCxHQUFHLENBQUNpRCxLQUFLLEdBQUcsUUFBUSxDQUFDQSxLQUFLLEdBQUcsQ0FBQztRQUM1QixHQUFHLENBQUNPLEdBQUcsR0FBR3RDLGFBQWE7UUFDdkJzQyxHQUFHLENBQUM0QixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRztJQUMvQixDQUFDO0lBRUQsTUFBTSxDQUFDN0csS0FBSyxDQUFDOEcsYUFBYSxDQUFDLENBQUssTUFBRSxDQUFDO1FBQ2pDQyxFQUFFLEVBQUUsQ0FBTztJQUNiLENBQUMsRUFBRS9HLEtBQUssQ0FBQzhHLGFBQWEsQ0FBQyxDQUFRLFNBQUUsQ0FBQztRQUNoQ0MsRUFBRSxFQUFFLENBQVE7UUFDWkMsS0FBSyxFQUFFLENBQUs7UUFDWkMsTUFBTSxFQUFFLENBQUs7UUFDYkMsS0FBSyxFQUFFLENBQUM7WUFDTkMsU0FBUyxFQUFFLENBQU07WUFDakJDLFVBQVUsRUFBRSxDQUFNO1lBQ2xCQyxhQUFhLEVBQUVsRixVQUFVLElBQUlaLFVBQVUsR0FBRyxDQUFNLFFBQUcsQ0FBTTtRQUMzRCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7SUFwUUdqQixjQUFjO0tBQWRBLGNBQWM7QUFzUWxCZ0gsTUFBTSxDQUFDQyxPQUFPLEdBQUd2SCxLQUFLLENBQUN3SCxJQUFJLENBQUNsSCxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BsdWdpbnMvYW1hemluZy1zcGluLXdoZWVsLWdhbWUvaW5kZXguanM/NzU1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG5jb25zdCB7IGRlZmF1bHQ6IFJlYWN0SG93bGVyIH0gPSByZXF1aXJlKCdyZWFjdC1ob3dsZXInKTtcclxudmFyIGltZyA9IG5ldyBJbWFnZSgpXHJcbnZhciBXaGVlbENvbXBvbmVudCA9IGZ1bmN0aW9uIFdoZWVsQ29tcG9uZW50KF9yZWYpIHtcclxuICAvLyBjb25zb2xlLmxvZyhfcmVmLnNlZ21lbnRzKTtcclxuICBjb25zdCB7c2hvdWxkV2VTcGluLCBzZXRTaG91bGRXZVNwaW59ID0gX3JlZjtcclxuICBjb25zdCBbc291bmQsIHNldFNvdW5kXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuey8qIDxSZWFjdEhvd2xlciBzcmM9XCIvd2hlZWwtc3Bpbi5tcDNcIiBwbGF5aW5nPXt0cnVlfS8+ICovfVxyXG5cclxuICB2YXIgc2VnbWVudHMgPSBfcmVmLnNlZ21lbnRzLFxyXG4gICAgICBzcGluU2Vjb25kcyA9IF9yZWYuc3BpblNlY29uZHMsXHJcbiAgICAgIHNlZ0NvbG9ycyA9IF9yZWYuc2VnQ29sb3JzLFxyXG4gICAgICB3aW5uaW5nU2VnbWVudCA9IF9yZWYud2lubmluZ1NlZ21lbnQsXHJcbiAgICAgIG9uRmluaXNoZWQgPSBfcmVmLm9uRmluaXNoZWQsXHJcbiAgICAgIF9yZWYkcHJpbWFyeUNvbG9yID0gX3JlZi5wcmltYXJ5Q29sb3IsXHJcbiAgICAgIHByaW1hcnlDb2xvciA9IF9yZWYkcHJpbWFyeUNvbG9yID09PSB2b2lkIDAgPyAnYmxhY2snIDogX3JlZiRwcmltYXJ5Q29sb3IsXHJcbiAgICAgIF9yZWYkY29udHJhc3RDb2xvciA9IF9yZWYuY29udHJhc3RDb2xvcixcclxuICAgICAgY29udHJhc3RDb2xvciA9IF9yZWYkY29udHJhc3RDb2xvciA9PT0gdm9pZCAwID8gJ3doaXRlJyA6IF9yZWYkY29udHJhc3RDb2xvcixcclxuICAgICAgX3JlZiRpc09ubHlPbmNlID0gX3JlZi5pc09ubHlPbmNlLFxyXG4gICAgICBpc09ubHlPbmNlID0gX3JlZiRpc09ubHlPbmNlID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRpc09ubHlPbmNlLFxyXG4gICAgICBfcmVmJHNpemUgPSBfcmVmLnNpemUsXHJcbiAgICAgIHNpemUgPSBfcmVmJHNpemUgPT09IHZvaWQgMCA/IDI5MCA6IF9yZWYkc2l6ZSxcclxuICAgICAgX3JlZiR1cER1cmF0aW9uID0gX3JlZi51cER1cmF0aW9uLFxyXG4gICAgICB1cER1cmF0aW9uID0gX3JlZiR1cER1cmF0aW9uID09PSB2b2lkIDAgPyAxMDAgOiBfcmVmJHVwRHVyYXRpb24sXHJcbiAgICAgIF9yZWYkZG93bkR1cmF0aW9uID0gX3JlZi5kb3duRHVyYXRpb24sXHJcbiAgICAgIGRvd25EdXJhdGlvbiA9IF9yZWYkZG93bkR1cmF0aW9uID09PSB2b2lkIDAgPyAxMDAwIDogX3JlZiRkb3duRHVyYXRpb24sXHJcbiAgICAgIF9yZWYkZm9udEZhbWlseSA9IF9yZWYuZm9udEZhbWlseSxcclxuICAgICAgZm9udEZhbWlseSA9IF9yZWYkZm9udEZhbWlseSA9PT0gdm9pZCAwID8gJ3Byb3hpbWEtbm92YScgOiBfcmVmJGZvbnRGYW1pbHk7XHJcbiAgdmFyIGN1cnJlbnRTZWdtZW50ID0gJyc7XHJcbiAgdmFyIGlzU3RhcnRlZCA9IGZhbHNlO1xyXG5cclxuICB2YXIgX3VzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICBpc0ZpbmlzaGVkID0gX3VzZVN0YXRlWzBdLFxyXG4gICAgICBzZXRGaW5pc2hlZCA9IF91c2VTdGF0ZVsxXTtcclxuXHJcbiAgdmFyIHRpbWVySGFuZGxlID0gMFxyXG4gIHZhciB0aW1lck1hbnVhbERlbGF5ID0gNTBcclxuICBpZihzcGluU2Vjb25kcyA+IDYwKXtcclxuICAgIHRpbWVyTWFudWFsRGVsYXkgPSA2MFxyXG4gIH1cclxuICAvLyBzcGluU2Vjb25kc1xyXG4gIHZhciB0aW1lckRlbGF5ID0gKHNlZ21lbnRzLmxlbmd0aCA8IHRpbWVyTWFudWFsRGVsYXkgID8gdGltZXJNYW51YWxEZWxheSA6IHNlZ21lbnRzLmxlbmd0aCk7XHJcbiAgdmFyIGFuZ2xlQ3VycmVudCA9IDBcclxuICB2YXIgYW5nbGVEZWx0YSA9IDBcclxuICB2YXIgY2FudmFzQ29udGV4dCA9IG51bGxcclxuICAvLyB2YXIgbWF4U3BlZWQgPSBNYXRoLlBJIC8gKHNlZ21lbnRzLmxlbmd0aCk7XHJcbiAgdmFyIG1heFNwZWVkID0gNFxyXG4gIGNvbnNvbGUubG9nKGBUb3RhbCBzZWdtZW50cyAke3NlZ21lbnRzLmxlbmd0aH1gKVxyXG4gIGNvbnNvbGUubG9nKGBNYXggc3BlZWQgJHttYXhTcGVlZH1gKVxyXG4gIGNvbnNvbGUubG9nKGBUaW1lciBkZWxheSAke3RpbWVyTWFudWFsRGVsYXl9YClcclxuICB2YXIgdXBUaW1lID0gc2VnbWVudHMubGVuZ3RoICogdXBEdXJhdGlvblxyXG4gIHZhciBkb3duVGltZSA9IHNlZ21lbnRzLmxlbmd0aCAqIGRvd25EdXJhdGlvblxyXG4gIHZhciBzcGluU3RhcnQgPSAwXHJcbiAgdmFyIGZyYW1lcyA9IDBcclxuICB2YXIgY2VudGVyWCA9IDMwMFxyXG4gIHZhciBjZW50ZXJZID0gMzAwXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICB3aGVlbEluaXQoKTtcclxuICB9LCBbc2VnbWVudHNdKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHNob3VsZFdlU3Bpbikge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInNob3VsZHNwaW5cIixzaG91bGRXZVNwaW4pXHJcbiAgICAgIHNldFNvdW5kKHRydWUpXHJcbiAgICAgIHdoZWVsSW5pdCgpO1xyXG4gICAgICBzcGluKCk7XHJcbiAgICAgIHNldFNob3VsZFdlU3BpbihmYWxzZSk7XHJcbiAgICAgIC8vIHNldFNvdW5kKGZhbHNlKVxyXG4gICAgfVxyXG4gIH0sIFtzaG91bGRXZVNwaW5dKVxyXG5cclxuICAvLyBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgICB3aGVlbEluaXQoKTtcclxuICAvLyB9LFtdKVxyXG5cclxuICB2YXIgd2hlZWxJbml0ID0gZnVuY3Rpb24gd2hlZWxJbml0KCkge1xyXG4gICAgaW5pdENhbnZhcygpO1xyXG4gICAgd2hlZWxEcmF3KCk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGluaXRDYW52YXMgPSBmdW5jdGlvbiBpbml0Q2FudmFzKCkge1xyXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuICAgIGNhbnZhc0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAvLyB2YXIgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgLy8gYmFja2dyb3VuZC5zcmMgPSBcIi4uL3doZWVsX2ZyYW1lLnBuZ1wiO1xyXG4gICAgLy8gY2FudmFzQ29udGV4dC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwxMDAsMTAwLDQwMDAsMjc3MCk7ICBcclxuXHJcbiAgICAvLyB2YXIgc3BpbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGluQnRuJyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIjMzMzMzXCIpO1xyXG4gICAgLy8gc3BpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNwaW4sIGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB2YXIgc3BpbiA9IGZ1bmN0aW9uIHNwaW4oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNwaW5uaW5nXCIpXHJcbiAgICBpc1N0YXJ0ZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmICh0aW1lckhhbmRsZSA9PT0gMCkge1xyXG4gICAgICBzcGluU3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgbWF4U3BlZWQgPSBNYXRoLlBJIC8gc2VnbWVudHMubGVuZ3RoO1xyXG4gICAgICBmcmFtZXMgPSAwO1xyXG4gICAgICB0aW1lckhhbmRsZSA9IHNldEludGVydmFsKG9uVGltZXJUaWNrLCB0aW1lckRlbGF5KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB2YXIgb25UaW1lclRpY2sgPSBmdW5jdGlvbiBvblRpbWVyVGljaygpIHtcclxuICAgIGZyYW1lcysrO1xyXG4gICAgZHJhdygpO1xyXG4gICAgdmFyIGR1cmF0aW9uID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzcGluU3RhcnQ7XHJcbiAgICBjb25zb2xlLmxvZyhgZHVyYXRpb24gJHtkdXJhdGlvbn1gKTtcclxuICAgIHZhciBwcm9ncmVzcyA9IDA7XHJcbiAgICB2YXIgZmluaXNoZWQgPSBmYWxzZTtcclxuXHJcbiAgICBpZiAoZHVyYXRpb24gPCB1cFRpbWUpIHtcclxuXHJcbiAgICAgIHByb2dyZXNzID0gZHVyYXRpb24gLyB1cFRpbWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBwcm9ncmVzcyAke3Byb2dyZXNzfWApXHJcbiAgICAgIGNvbnNvbGUubG9nKGB1cFRpbWUgJHt1cFRpbWV9YClcclxuICAgICAgYW5nbGVEZWx0YSA9IG1heFNwZWVkICogTWF0aC5zaW4ocHJvZ3Jlc3MgKiBNYXRoLlBJIC8gMilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh3aW5uaW5nU2VnbWVudCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50U2VnbWVudCA9PT0gd2lubmluZ1NlZ21lbnQgJiYgZnJhbWVzID4gc2VnbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICBwcm9ncmVzcyA9IGR1cmF0aW9uIC8gdXBUaW1lO1xyXG4gICAgICAgICAgYW5nbGVEZWx0YSA9IG1heFNwZWVkICogTWF0aC5zaW4ocHJvZ3Jlc3MgKiBNYXRoLlBJIC8gMiArIE1hdGguUEkgLyAyKTtcclxuICAgICAgICAgIHByb2dyZXNzID0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcHJvZ3Jlc3MgPSBkdXJhdGlvbiAvIGRvd25UaW1lO1xyXG4gICAgICAgICAgYW5nbGVEZWx0YSA9IG1heFNwZWVkICogTWF0aC5zaW4ocHJvZ3Jlc3MgKiBNYXRoLlBJIC8gMiArIE1hdGguUEkgLyAyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvZ3Jlc3MgPSBkdXJhdGlvbiAvIGRvd25UaW1lO1xyXG4gICAgICAgIGFuZ2xlRGVsdGEgPSBtYXhTcGVlZCAqIE1hdGguc2luKHByb2dyZXNzICogTWF0aC5QSSAvIDIgKyBNYXRoLlBJIC8gMik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChwcm9ncmVzcyA+PSAxKSBmaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBwcm9ncmVzcyAke3Byb2dyZXNzfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGFuZ2xlQ3VycmVudCArPSBhbmdsZURlbHRhO1xyXG4gICAgd2hpbGUgKGFuZ2xlQ3VycmVudCA+PSBNYXRoLlBJICogMikge1xyXG4gICAgICBhbmdsZUN1cnJlbnQgLT0gTWF0aC5QSSAqIDI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpbmlzaGVkKSB7XHJcbiAgICAgIHNldEZpbmlzaGVkKHRydWUpO1xyXG4gICAgICBvbkZpbmlzaGVkKGN1cnJlbnRTZWdtZW50KTtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckhhbmRsZSk7XHJcbiAgICAgIHRpbWVySGFuZGxlID0gMDtcclxuICAgICAgYW5nbGVEZWx0YSA9IDA7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdmFyIHdoZWVsRHJhdyA9IGZ1bmN0aW9uIHdoZWVsRHJhdygpIHtcclxuICAgIGNsZWFyKCk7XHJcbiAgICBkcmF3V2hlZWwoKTtcclxuICAgIGRyYXdOZWVkbGUoKTtcclxuICB9O1xyXG5cclxuICB2YXIgZHJhdyA9IGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjbGVhcigpO1xyXG4gICAgZHJhd1doZWVsKCk7XHJcbiAgICBkcmF3TmVlZGxlKCk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGRyYXdTZWdtZW50ID0gZnVuY3Rpb24gZHJhd1NlZ21lbnQoa2V5LCBsYXN0QW5nbGUsIGFuZ2xlKSB7XHJcbiAgICB2YXIgY3R4ID0gY2FudmFzQ29udGV4dDtcclxuICAgIHZhciB2YWx1ZSA9IHNlZ21lbnRzW2tleV07XHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbyhjZW50ZXJYLCBjZW50ZXJZKTtcclxuICAgIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgc2l6ZSwgbGFzdEFuZ2xlLCBhbmdsZSwgZmFsc2UpO1xyXG4gICAgY3R4LmxpbmVUbyhjZW50ZXJYLCBjZW50ZXJZKTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBzZWdDb2xvcnNba2V5XTtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShjZW50ZXJYLCBjZW50ZXJZKTtcclxuICAgIGN0eC5yb3RhdGUoKGxhc3RBbmdsZSArIGFuZ2xlKSAvIDIpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbnRyYXN0Q29sb3I7XHJcbiAgICBjdHguZm9udCA9ICdib2xkIDFlbSAnICsgZm9udEZhbWlseTtcclxuICAgIGN0eC5maWxsVGV4dCh2YWx1ZS5zdWJzdHIoMCwgMjEpLCBzaXplIC8gMiArIDIwLCAwKTtcclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGRyYXdXaGVlbCA9IGZ1bmN0aW9uIGRyYXdXaGVlbCgpIHtcclxuICAgIHZhciBjdHggPSBjYW52YXNDb250ZXh0O1xyXG4gICAgdmFyIGxhc3RBbmdsZSA9IGFuZ2xlQ3VycmVudDtcclxuICAgIHZhciBsZW4gPSBzZWdtZW50cy5sZW5ndGg7XHJcbiAgICB2YXIgUEkyID0gTWF0aC5QSSAqIDI7XHJcbiAgICBjdHgubGluZVdpZHRoID0gMTtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHByaW1hcnlDb2xvcjtcclxuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcclxuICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgIGN0eC5mb250ID0gJzFlbSAnICsgZm9udEZhbWlseTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBsZW47IGkrKykge1xyXG4gICAgICB2YXIgYW5nbGUgPSBQSTIgKiAoaSAvIGxlbikgKyBhbmdsZUN1cnJlbnQ7XHJcbiAgICAgIGRyYXdTZWdtZW50KGkgLSAxLCBsYXN0QW5nbGUsIGFuZ2xlKTtcclxuICAgICAgbGFzdEFuZ2xlID0gYW5nbGU7XHJcbiAgICB9XHJcbmltZy5zcmM9XCJsb2dvLmpwZ1wiXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIDUwLCAwLCBQSTIsIGZhbHNlKTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBwcmltYXJ5Q29sb3I7XHJcbiAgICBjdHguZHJhd0ltYWdlKGltZywwLDAsNSw1KVxyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDEwO1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29udHJhc3RDb2xvcjtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgICBjdHguZm9udCA9ICdib2xkIDFlbSAnICsgZm9udEZhbWlseTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBjb250cmFzdENvbG9yO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgLy8gY3R4LmZpbGxUZXh0KGJ1dHRvblRleHQsIGNlbnRlclgsIGNlbnRlclkgKyAzKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIC8vIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgc2l6ZSwgMCwgUEkyLCBmYWxzZSk7XHJcbiAgICAvLyBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAvLyBjdHgubGluZVdpZHRoID0gMTA7XHJcbiAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBwcmltYXJ5Q29sb3I7XHJcbiAgICAvLyBjdHguc3Ryb2tlKCk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGRyYXdOZWVkbGUgPSBmdW5jdGlvbiBkcmF3TmVlZGxlKCkge1xyXG4gICAgdmFyIGN0eCA9IGNhbnZhc0NvbnRleHQ7XHJcbiAgICAvLyBjdHgubGluZVdpZHRoID0gMTtcclxuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IGNvbnRyYXN0Q29sb3I7XHJcbiAgICAvLyBjdHguZmlsZVN0eWxlID0gY29udHJhc3RDb2xvcjtcclxuICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIC8vIGN0eC5tb3ZlVG8oY2VudGVyWCArIDIwLCBjZW50ZXJZIC0gNTApO1xyXG4gICAgLy8gY3R4LmxpbmVUbyhjZW50ZXJYIC0gMjAsIGNlbnRlclkgLSA1MCk7XHJcbiAgICAvLyBjdHgubGluZVRvKGNlbnRlclgsIGNlbnRlclkgLSA3MCk7XHJcbiAgICAvLyBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAvLyBjdHguZmlsbCgpO1xyXG4gICAgdmFyIGNoYW5nZSA9IGFuZ2xlQ3VycmVudCArIE1hdGguUEkgLyAyO1xyXG4gICAgdmFyIGkgPSBzZWdtZW50cy5sZW5ndGggLSBNYXRoLmZsb29yKGNoYW5nZSAvIChNYXRoLlBJICogMikgKiBzZWdtZW50cy5sZW5ndGgpIC0gMTtcclxuICAgIGlmIChpIDwgMCkgaSA9IGkgKyBzZWdtZW50cy5sZW5ndGg7XHJcbiAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gcHJpbWFyeUNvbG9yO1xyXG4gICAgY3R4LmZvbnQgPSAnYm9sZCAxLjVlbSAnICsgZm9udEZhbWlseTtcclxuICAgIGN1cnJlbnRTZWdtZW50ID0gc2VnbWVudHNbaV07XHJcbiAgICBpc1N0YXJ0ZWQgJiYgY3R4LmZpbGxUZXh0KGN1cnJlbnRTZWdtZW50LCBjZW50ZXJYICsgMTAsIGNlbnRlclkgKyBzaXplICsgNTApO1xyXG4gIH07XHJcblxyXG4gIHZhciBjbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xyXG4gICAgdmFyIGN0eCA9IGNhbnZhc0NvbnRleHQ7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDEwMDAsIDgwMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xyXG4gICAgaWQ6IFwid2hlZWxcIixcclxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIsIHtcclxuICAgIGlkOiBcImNhbnZhc1wiLFxyXG4gICAgd2lkdGg6IFwiNTkwXCIsXHJcbiAgICBoZWlnaHQ6IFwiNTkwXCIsXHJcbiAgICBzdHlsZToge1xyXG4gICAgICBtYXJnaW5Ub3A6IFwiNDJweFwiLFxyXG4gICAgICBtYXJnaW5MZWZ0OiBcIjM5cHhcIixcclxuICAgICAgcG9pbnRlckV2ZW50czogaXNGaW5pc2hlZCAmJiBpc09ubHlPbmNlID8gJ25vbmUnIDogJ2F1dG8nXHJcbiAgICB9XHJcbiAgfSkpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5tZW1vKFdoZWVsQ29tcG9uZW50KTsiXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiUmVhY3RIb3dsZXIiLCJkZWZhdWx0IiwiaW1nIiwiSW1hZ2UiLCJXaGVlbENvbXBvbmVudCIsIl9yZWYiLCJzaG91bGRXZVNwaW4iLCJzZXRTaG91bGRXZVNwaW4iLCJ1c2VTdGF0ZSIsInNvdW5kIiwic2V0U291bmQiLCJzZWdtZW50cyIsInNwaW5TZWNvbmRzIiwic2VnQ29sb3JzIiwid2lubmluZ1NlZ21lbnQiLCJvbkZpbmlzaGVkIiwiX3JlZiRwcmltYXJ5Q29sb3IiLCJwcmltYXJ5Q29sb3IiLCJfcmVmJGNvbnRyYXN0Q29sb3IiLCJjb250cmFzdENvbG9yIiwiX3JlZiRpc09ubHlPbmNlIiwiaXNPbmx5T25jZSIsIl9yZWYkc2l6ZSIsInNpemUiLCJfcmVmJHVwRHVyYXRpb24iLCJ1cER1cmF0aW9uIiwiX3JlZiRkb3duRHVyYXRpb24iLCJkb3duRHVyYXRpb24iLCJfcmVmJGZvbnRGYW1pbHkiLCJmb250RmFtaWx5IiwiY3VycmVudFNlZ21lbnQiLCJpc1N0YXJ0ZWQiLCJfdXNlU3RhdGUiLCJpc0ZpbmlzaGVkIiwic2V0RmluaXNoZWQiLCJ0aW1lckhhbmRsZSIsInRpbWVyTWFudWFsRGVsYXkiLCJ0aW1lckRlbGF5IiwibGVuZ3RoIiwiYW5nbGVDdXJyZW50IiwiYW5nbGVEZWx0YSIsImNhbnZhc0NvbnRleHQiLCJtYXhTcGVlZCIsImNvbnNvbGUiLCJsb2ciLCJ1cFRpbWUiLCJkb3duVGltZSIsInNwaW5TdGFydCIsImZyYW1lcyIsImNlbnRlclgiLCJjZW50ZXJZIiwidXNlRWZmZWN0Iiwid2hlZWxJbml0Iiwic3BpbiIsImluaXRDYW52YXMiLCJ3aGVlbERyYXciLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIkRhdGUiLCJnZXRUaW1lIiwiTWF0aCIsIlBJIiwic2V0SW50ZXJ2YWwiLCJvblRpbWVyVGljayIsImRyYXciLCJkdXJhdGlvbiIsInByb2dyZXNzIiwiZmluaXNoZWQiLCJzaW4iLCJjbGVhckludGVydmFsIiwiY2xlYXIiLCJkcmF3V2hlZWwiLCJkcmF3TmVlZGxlIiwiZHJhd1NlZ21lbnQiLCJrZXkiLCJsYXN0QW5nbGUiLCJhbmdsZSIsImN0eCIsInZhbHVlIiwic2F2ZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImFyYyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImZpbGxTdHlsZSIsImZpbGwiLCJzdHJva2UiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJmb250IiwiZmlsbFRleHQiLCJzdWJzdHIiLCJyZXN0b3JlIiwibGVuIiwiUEkyIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJ0ZXh0QmFzZWxpbmUiLCJ0ZXh0QWxpZ24iLCJpIiwic3JjIiwiZHJhd0ltYWdlIiwiY2hhbmdlIiwiZmxvb3IiLCJjbGVhclJlY3QiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsInBvaW50ZXJFdmVudHMiLCJtb2R1bGUiLCJleHBvcnRzIiwibWVtbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./plugins/amazing-spin-wheel-game/index.js\n");

/***/ })

});