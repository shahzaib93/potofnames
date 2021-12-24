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

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar ref1 = __webpack_require__(/*! react-howler */ \"./node_modules/react-howler/lib/index.js\"), ReactHowler = ref1.default;\nvar img = new Image();\nvar WheelComponent = function WheelComponent(_ref) {\n    _s1();\n    // console.log(_ref.segments);\n    var shouldWeSpin = _ref.shouldWeSpin, setShouldWeSpin = _ref.setShouldWeSpin;\n    var ref = _slicedToArray(React.useState(false), 2), sound = ref[0], setSound = ref[1];\n    {\n    }\n    var segments = _ref.segments, spinSeconds = _ref.spinSeconds, segColors = _ref.segColors, winningSegment = _ref.winningSegment, onFinished = _ref.onFinished, _ref$primaryColor = _ref.primaryColor, primaryColor = _ref$primaryColor === void 0 ? 'black' : _ref$primaryColor, _ref$contrastColor = _ref.contrastColor, contrastColor = _ref$contrastColor === void 0 ? 'white' : _ref$contrastColor, _ref$isOnlyOnce = _ref.isOnlyOnce, isOnlyOnce = _ref$isOnlyOnce === void 0 ? true : _ref$isOnlyOnce, _ref$size = _ref.size, size = _ref$size === void 0 ? 290 : _ref$size, _ref$upDuration = _ref.upDuration, upDuration = _ref$upDuration === void 0 ? 100 : _ref$upDuration, _ref$downDuration = _ref.downDuration, downDuration = _ref$downDuration === void 0 ? 1000 : _ref$downDuration, _ref$fontFamily = _ref.fontFamily, fontFamily = _ref$fontFamily === void 0 ? 'proxima-nova' : _ref$fontFamily;\n    var currentSegment = '';\n    var isStarted = false;\n    var _useState = React.useState(false), isFinished = _useState[0], setFinished = _useState[1];\n    var timerHandle = 0;\n    var timerManualDelay = 50;\n    if (spinSeconds > 60) {\n        timerManualDelay = 60;\n    }\n    // spinSeconds\n    var timerDelay = segments.length < timerManualDelay ? timerManualDelay : segments.length;\n    var angleCurrent = 0;\n    var angleDelta = 0;\n    var canvasContext = null;\n    // var maxSpeed = Math.PI / (segments.length);\n    var maxSpeed = 4;\n    console.log(\"Total segments \".concat(segments.length));\n    console.log(\"Max speed \".concat(maxSpeed));\n    console.log(\"Timer delay \".concat(timerManualDelay));\n    var upTime = segments.length * upDuration;\n    var downTime = segments.length * downDuration;\n    var spinStart = 0;\n    var frames = 0;\n    var centerX = 300;\n    var centerY = 300;\n    React.useEffect(function() {\n        wheelInit();\n    }, [\n        segments\n    ]);\n    React.useEffect(function() {\n        if (shouldWeSpin) {\n            // console.log(\"shouldspin\",shouldWeSpin)\n            setSound(true);\n            wheelInit();\n            spin();\n            setShouldWeSpin(false);\n        // setSound(false)\n        }\n    }, [\n        shouldWeSpin\n    ]);\n    // React.useEffect(() => {\n    //     wheelInit();\n    // },[])\n    var wheelInit = function wheelInit() {\n        initCanvas();\n        wheelDraw();\n    };\n    var initCanvas = function initCanvas() {\n        var canvas = document.getElementById('canvas');\n        canvasContext = canvas.getContext('2d');\n    // var background = new Image();\n    // background.src = \"../wheel_frame.png\";\n    // canvasContext.drawImage(background,100,100,4000,2770);  \n    // var spinBtn = document.getElementById('spinBtn');\n    // console.log(\"33333\");\n    // spinBtn.addEventListener('click', spin, false);\n    };\n    var spin = function spin() {\n        console.log(\"spinning\");\n        isStarted = true;\n        if (timerHandle === 0) {\n            spinStart = new Date().getTime();\n            maxSpeed = Math.PI / segments.length;\n            frames = 0;\n            timerHandle = setInterval(onTimerTick, timerDelay);\n        }\n    };\n    var onTimerTick = function onTimerTick() {\n        frames++;\n        draw();\n        var duration = new Date().getTime() - spinStart;\n        console.log(\"duration \".concat(duration));\n        var progress = 0;\n        var finished = false;\n        if (duration < upTime) {\n            progress = duration / upTime;\n            console.log(\"progress \".concat(progress));\n            console.log(\"upTime \".concat(upTime));\n            angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2);\n        } else {\n            if (winningSegment) {\n                if (currentSegment === winningSegment && frames > segments.length) {\n                    progress = duration / upTime;\n                    angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);\n                    progress = 1;\n                } else {\n                    progress = duration / downTime;\n                    angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);\n                }\n            } else {\n                progress = duration / downTime;\n                angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);\n            }\n            if (progress >= 1) finished = true;\n            console.log(\"progress \".concat(progress));\n        }\n        angleCurrent += angleDelta;\n        while(angleCurrent >= Math.PI * 2){\n            angleCurrent -= Math.PI * 2;\n        }\n        if (finished) {\n            setFinished(true);\n            onFinished(currentSegment);\n            clearInterval(timerHandle);\n            timerHandle = 0;\n            angleDelta = 0;\n        }\n    };\n    var wheelDraw = function wheelDraw() {\n        clear();\n        drawWheel();\n        drawNeedle();\n    };\n    var draw = function draw() {\n        clear();\n        drawWheel();\n        drawNeedle();\n    };\n    var drawSegment = function drawSegment(key, lastAngle, angle) {\n        var ctx = canvasContext;\n        var value = segments[key];\n        ctx.save();\n        ctx.beginPath();\n        ctx.moveTo(centerX, centerY);\n        ctx.arc(centerX, centerY, size, lastAngle, angle, false);\n        ctx.lineTo(centerX, centerY);\n        ctx.closePath();\n        ctx.fillStyle = segColors[key];\n        ctx.fill();\n        ctx.stroke();\n        ctx.save();\n        ctx.translate(centerX, centerY);\n        ctx.rotate((lastAngle + angle) / 2);\n        ctx.fillStyle = contrastColor;\n        ctx.font = 'bold 1em ' + fontFamily;\n        ctx.fillText(value.substr(0, 21), size / 2 + 20, 0);\n        ctx.restore();\n    };\n    var drawWheel = function drawWheel() {\n        var ctx = canvasContext;\n        var lastAngle = angleCurrent;\n        var len = segments.length;\n        var PI2 = Math.PI * 2;\n        ctx.lineWidth = 1;\n        ctx.strokeStyle = primaryColor;\n        ctx.textBaseline = 'middle';\n        ctx.textAlign = 'center';\n        ctx.font = '1em ' + fontFamily;\n        for(var i = 1; i <= len; i++){\n            var angle = PI2 * (i / len) + angleCurrent;\n            drawSegment(i - 1, lastAngle, angle);\n            lastAngle = angle;\n        }\n        img.src = \"logo.jpg\";\n        ctx.beginPath();\n        ctx.arc(centerX, centerY, 50, 0, PI2, false);\n        ctx.closePath();\n        // ctx.fillStyle = primaryColor;\n        ctx.drawImage(img, 0, 0);\n        ctx.lineWidth = 10;\n        ctx.strokeStyle = contrastColor;\n        ctx.fill();\n        ctx.font = 'bold 1em ' + fontFamily;\n        ctx.fillStyle = contrastColor;\n        ctx.textAlign = 'center';\n        // ctx.fillText(buttonText, centerX, centerY + 3);\n        ctx.stroke();\n    // ctx.beginPath();\n    // ctx.arc(centerX, centerY, size, 0, PI2, false);\n    // ctx.closePath();\n    // ctx.lineWidth = 10;\n    // ctx.strokeStyle = primaryColor;\n    // ctx.stroke();\n    };\n    var drawNeedle = function drawNeedle() {\n        var ctx = canvasContext;\n        // ctx.lineWidth = 1;\n        // ctx.strokeStyle = contrastColor;\n        // ctx.fileStyle = contrastColor;\n        // ctx.beginPath();\n        // ctx.moveTo(centerX + 20, centerY - 50);\n        // ctx.lineTo(centerX - 20, centerY - 50);\n        // ctx.lineTo(centerX, centerY - 70);\n        // ctx.closePath();\n        // ctx.fill();\n        var change = angleCurrent + Math.PI / 2;\n        var i = segments.length - Math.floor(change / (Math.PI * 2) * segments.length) - 1;\n        if (i < 0) i = i + segments.length;\n        ctx.textAlign = 'center';\n        ctx.textBaseline = 'middle';\n        ctx.fillStyle = primaryColor;\n        ctx.font = 'bold 1.5em ' + fontFamily;\n        currentSegment = segments[i];\n        isStarted && ctx.fillText(currentSegment, centerX + 10, centerY + size + 50);\n    };\n    var clear = function clear() {\n        var ctx = canvasContext;\n        ctx.clearRect(0, 0, 1000, 800);\n    };\n    return React.createElement(\"div\", {\n        id: \"wheel\"\n    }, React.createElement(\"canvas\", {\n        id: \"canvas\",\n        width: \"590\",\n        height: \"590\",\n        style: {\n            marginTop: \"42px\",\n            marginLeft: \"39px\",\n            pointerEvents: isFinished && isOnlyOnce ? 'none' : 'auto'\n        }\n    }));\n};\n_s1(WheelComponent, \"CtrNpZXLFbeX4PFudOvmaqB7O2I=\");\n_c = WheelComponent;\nmodule.exports = React.memo(WheelComponent);\nvar _c;\n$RefreshReg$(_c, \"WheelComponent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbHVnaW5zL2FtYXppbmctc3Bpbi13aGVlbC1nYW1lL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxHQUFHLENBQUNBLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyw0Q0FBTztBQUMzQixHQUFLLENBQTRCQSxJQUF1QixHQUF2QkEsbUJBQU8sQ0FBQyw4REFBYyxHQUF0Q0MsV0FBVyxHQUFLRCxJQUF1QixDQUFoREUsT0FBTztBQUNmLEdBQUcsQ0FBQ0MsR0FBRyxHQUFHLEdBQUcsQ0FBQ0MsS0FBSztBQUNuQixHQUFHLENBQUNDLGNBQWMsR0FBRyxRQUFRLENBQUNBLGNBQWMsQ0FBQ0MsSUFBSSxFQUFFLENBQUM7O0lBQ2xELEVBQThCO0lBQzlCLEdBQUssQ0FBRUMsWUFBWSxHQUFxQkQsSUFBSSxDQUFyQ0MsWUFBWSxFQUFFQyxlQUFlLEdBQUlGLElBQUksQ0FBdkJFLGVBQWU7SUFDcEMsR0FBSyxDQUFxQlQsR0FBcUIsa0JBQXJCQSxLQUFLLENBQUNVLFFBQVEsQ0FBQyxLQUFLLE9BQXZDQyxLQUFLLEdBQWNYLEdBQXFCLEtBQWpDWSxRQUFRLEdBQUlaLEdBQXFCO0lBQ2pELENBQUM7SUFBeUQsQ0FBQztJQUV6RCxHQUFHLENBQUNhLFFBQVEsR0FBR04sSUFBSSxDQUFDTSxRQUFRLEVBQ3hCQyxXQUFXLEdBQUdQLElBQUksQ0FBQ08sV0FBVyxFQUM5QkMsU0FBUyxHQUFHUixJQUFJLENBQUNRLFNBQVMsRUFDMUJDLGNBQWMsR0FBR1QsSUFBSSxDQUFDUyxjQUFjLEVBQ3BDQyxVQUFVLEdBQUdWLElBQUksQ0FBQ1UsVUFBVSxFQUM1QkMsaUJBQWlCLEdBQUdYLElBQUksQ0FBQ1ksWUFBWSxFQUNyQ0EsWUFBWSxHQUFHRCxpQkFBaUIsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQU8sU0FBR0EsaUJBQWlCLEVBQ3pFRSxrQkFBa0IsR0FBR2IsSUFBSSxDQUFDYyxhQUFhLEVBQ3ZDQSxhQUFhLEdBQUdELGtCQUFrQixLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBTyxTQUFHQSxrQkFBa0IsRUFDNUVFLGVBQWUsR0FBR2YsSUFBSSxDQUFDZ0IsVUFBVSxFQUNqQ0EsVUFBVSxHQUFHRCxlQUFlLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUdBLGVBQWUsRUFDaEVFLFNBQVMsR0FBR2pCLElBQUksQ0FBQ2tCLElBQUksRUFDckJBLElBQUksR0FBR0QsU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHQSxTQUFTLEVBQzdDRSxlQUFlLEdBQUduQixJQUFJLENBQUNvQixVQUFVLEVBQ2pDQSxVQUFVLEdBQUdELGVBQWUsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBR0EsZUFBZSxFQUMvREUsaUJBQWlCLEdBQUdyQixJQUFJLENBQUNzQixZQUFZLEVBQ3JDQSxZQUFZLEdBQUdELGlCQUFpQixLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHQSxpQkFBaUIsRUFDdEVFLGVBQWUsR0FBR3ZCLElBQUksQ0FBQ3dCLFVBQVUsRUFDakNBLFVBQVUsR0FBR0QsZUFBZSxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBYyxnQkFBR0EsZUFBZTtJQUM5RSxHQUFHLENBQUNFLGNBQWMsR0FBRyxDQUFFO0lBQ3ZCLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLEtBQUs7SUFFckIsR0FBRyxDQUFDQyxTQUFTLEdBQUdsQyxLQUFLLENBQUNVLFFBQVEsQ0FBQyxLQUFLLEdBQ2hDeUIsVUFBVSxHQUFHRCxTQUFTLENBQUMsQ0FBQyxHQUN4QkUsV0FBVyxHQUFHRixTQUFTLENBQUMsQ0FBQztJQUU3QixHQUFHLENBQUNHLFdBQVcsR0FBRyxDQUFDO0lBQ25CLEdBQUcsQ0FBQ0MsZ0JBQWdCLEdBQUcsRUFBRTtJQUN6QixFQUFFLEVBQUN4QixXQUFXLEdBQUcsRUFBRSxFQUFDLENBQUM7UUFDbkJ3QixnQkFBZ0IsR0FBRyxFQUFFO0lBQ3ZCLENBQUM7SUFDRCxFQUFjO0lBQ2QsR0FBRyxDQUFDQyxVQUFVLEdBQUkxQixRQUFRLENBQUMyQixNQUFNLEdBQUdGLGdCQUFnQixHQUFJQSxnQkFBZ0IsR0FBR3pCLFFBQVEsQ0FBQzJCLE1BQU07SUFDMUYsR0FBRyxDQUFDQyxZQUFZLEdBQUcsQ0FBQztJQUNwQixHQUFHLENBQUNDLFVBQVUsR0FBRyxDQUFDO0lBQ2xCLEdBQUcsQ0FBQ0MsYUFBYSxHQUFHLElBQUk7SUFDeEIsRUFBOEM7SUFDOUMsR0FBRyxDQUFDQyxRQUFRLEdBQUcsQ0FBQztJQUNoQkMsT0FBTyxDQUFDQyxHQUFHLENBQUUsQ0FBZSxpQkFBa0IsT0FBaEJqQyxRQUFRLENBQUMyQixNQUFNO0lBQzdDSyxPQUFPLENBQUNDLEdBQUcsQ0FBRSxDQUFVLFlBQVcsT0FBVEYsUUFBUTtJQUNqQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUUsQ0FBWSxjQUFtQixPQUFqQlIsZ0JBQWdCO0lBQzNDLEdBQUcsQ0FBQ1MsTUFBTSxHQUFHbEMsUUFBUSxDQUFDMkIsTUFBTSxHQUFHYixVQUFVO0lBQ3pDLEdBQUcsQ0FBQ3FCLFFBQVEsR0FBR25DLFFBQVEsQ0FBQzJCLE1BQU0sR0FBR1gsWUFBWTtJQUM3QyxHQUFHLENBQUNvQixTQUFTLEdBQUcsQ0FBQztJQUNqQixHQUFHLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ2QsR0FBRyxDQUFDQyxPQUFPLEdBQUcsR0FBRztJQUNqQixHQUFHLENBQUNDLE9BQU8sR0FBRyxHQUFHO0lBRWpCcEQsS0FBSyxDQUFDcUQsU0FBUyxDQUFDLFFBQVEsR0FBSSxDQUFDO1FBQzNCQyxTQUFTO0lBQ1gsQ0FBQyxFQUFFLENBQUN6QztRQUFBQSxRQUFRO0lBQUEsQ0FBQztJQUViYixLQUFLLENBQUNxRCxTQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDckIsRUFBRSxFQUFDN0MsWUFBWSxFQUFFLENBQUM7WUFDaEIsRUFBeUM7WUFDekNJLFFBQVEsQ0FBQyxJQUFJO1lBQ2IwQyxTQUFTO1lBQ1RDLElBQUk7WUFDSjlDLGVBQWUsQ0FBQyxLQUFLO1FBQ3JCLEVBQWtCO1FBQ3BCLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ0Q7UUFBQUEsWUFBWTtJQUFBLENBQUM7SUFFakIsRUFBMEI7SUFDMUIsRUFBbUI7SUFDbkIsRUFBUTtJQUVSLEdBQUcsQ0FBQzhDLFNBQVMsR0FBRyxRQUFRLENBQUNBLFNBQVMsR0FBRyxDQUFDO1FBQ3BDRSxVQUFVO1FBQ1ZDLFNBQVM7SUFDWCxDQUFDO0lBRUQsR0FBRyxDQUFDRCxVQUFVLEdBQUcsUUFBUSxDQUFDQSxVQUFVLEdBQUcsQ0FBQztRQUN0QyxHQUFHLENBQUNFLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsQ0FBUTtRQUM3Q2pCLGFBQWEsR0FBR2UsTUFBTSxDQUFDRyxVQUFVLENBQUMsQ0FBSTtJQUV0QyxFQUFnQztJQUNoQyxFQUF5QztJQUN6QyxFQUEyRDtJQUUzRCxFQUFvRDtJQUNwRCxFQUF3QjtJQUN4QixFQUFrRDtJQUNwRCxDQUFDO0lBRUQsR0FBRyxDQUFDTixJQUFJLEdBQUcsUUFBUSxDQUFDQSxJQUFJLEdBQUcsQ0FBQztRQUMxQlYsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBVTtRQUN0QmIsU0FBUyxHQUFHLElBQUk7UUFFaEIsRUFBRSxFQUFFSSxXQUFXLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDdEJZLFNBQVMsR0FBRyxHQUFHLENBQUNhLElBQUksR0FBR0MsT0FBTztZQUM5Qm5CLFFBQVEsR0FBR29CLElBQUksQ0FBQ0MsRUFBRSxHQUFHcEQsUUFBUSxDQUFDMkIsTUFBTTtZQUNwQ1UsTUFBTSxHQUFHLENBQUM7WUFDVmIsV0FBVyxHQUFHNkIsV0FBVyxDQUFDQyxXQUFXLEVBQUU1QixVQUFVO1FBQ25ELENBQUM7SUFDSCxDQUFDO0lBRUQsR0FBRyxDQUFDNEIsV0FBVyxHQUFHLFFBQVEsQ0FBQ0EsV0FBVyxHQUFHLENBQUM7UUFDeENqQixNQUFNO1FBQ05rQixJQUFJO1FBQ0osR0FBRyxDQUFDQyxRQUFRLEdBQUcsR0FBRyxDQUFDUCxJQUFJLEdBQUdDLE9BQU8sS0FBS2QsU0FBUztRQUMvQ0osT0FBTyxDQUFDQyxHQUFHLENBQUUsQ0FBUyxXQUFXLE9BQVR1QixRQUFRO1FBQ2hDLEdBQUcsQ0FBQ0MsUUFBUSxHQUFHLENBQUM7UUFDaEIsR0FBRyxDQUFDQyxRQUFRLEdBQUcsS0FBSztRQUVwQixFQUFFLEVBQUVGLFFBQVEsR0FBR3RCLE1BQU0sRUFBRSxDQUFDO1lBRXRCdUIsUUFBUSxHQUFHRCxRQUFRLEdBQUd0QixNQUFNO1lBQzVCRixPQUFPLENBQUNDLEdBQUcsQ0FBRSxDQUFTLFdBQVcsT0FBVHdCLFFBQVE7WUFDaEN6QixPQUFPLENBQUNDLEdBQUcsQ0FBRSxDQUFPLFNBQVMsT0FBUEMsTUFBTTtZQUM1QkwsVUFBVSxHQUFHRSxRQUFRLEdBQUdvQixJQUFJLENBQUNRLEdBQUcsQ0FBQ0YsUUFBUSxHQUFHTixJQUFJLENBQUNDLEVBQUUsR0FBRyxDQUFDO1FBQ3pELENBQUMsTUFBTSxDQUFDO1lBQ04sRUFBRSxFQUFFakQsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLEVBQUUsRUFBRWdCLGNBQWMsS0FBS2hCLGNBQWMsSUFBSWtDLE1BQU0sR0FBR3JDLFFBQVEsQ0FBQzJCLE1BQU0sRUFBRSxDQUFDO29CQUNsRThCLFFBQVEsR0FBR0QsUUFBUSxHQUFHdEIsTUFBTTtvQkFDNUJMLFVBQVUsR0FBR0UsUUFBUSxHQUFHb0IsSUFBSSxDQUFDUSxHQUFHLENBQUNGLFFBQVEsR0FBR04sSUFBSSxDQUFDQyxFQUFFLEdBQUcsQ0FBQyxHQUFHRCxJQUFJLENBQUNDLEVBQUUsR0FBRyxDQUFDO29CQUNyRUssUUFBUSxHQUFHLENBQUM7Z0JBQ2QsQ0FBQyxNQUFNLENBQUM7b0JBQ05BLFFBQVEsR0FBR0QsUUFBUSxHQUFHckIsUUFBUTtvQkFDOUJOLFVBQVUsR0FBR0UsUUFBUSxHQUFHb0IsSUFBSSxDQUFDUSxHQUFHLENBQUNGLFFBQVEsR0FBR04sSUFBSSxDQUFDQyxFQUFFLEdBQUcsQ0FBQyxHQUFHRCxJQUFJLENBQUNDLEVBQUUsR0FBRyxDQUFDO2dCQUN2RSxDQUFDO1lBQ0gsQ0FBQyxNQUFNLENBQUM7Z0JBQ05LLFFBQVEsR0FBR0QsUUFBUSxHQUFHckIsUUFBUTtnQkFDOUJOLFVBQVUsR0FBR0UsUUFBUSxHQUFHb0IsSUFBSSxDQUFDUSxHQUFHLENBQUNGLFFBQVEsR0FBR04sSUFBSSxDQUFDQyxFQUFFLEdBQUcsQ0FBQyxHQUFHRCxJQUFJLENBQUNDLEVBQUUsR0FBRyxDQUFDO1lBQ3ZFLENBQUM7WUFFRCxFQUFFLEVBQUVLLFFBQVEsSUFBSSxDQUFDLEVBQUVDLFFBQVEsR0FBRyxJQUFJO1lBQ2xDMUIsT0FBTyxDQUFDQyxHQUFHLENBQUUsQ0FBUyxXQUFXLE9BQVR3QixRQUFRO1FBQ2xDLENBQUM7UUFFRDdCLFlBQVksSUFBSUMsVUFBVTtjQUNuQkQsWUFBWSxJQUFJdUIsSUFBSSxDQUFDQyxFQUFFLEdBQUcsQ0FBQyxDQUFFLENBQUM7WUFDbkN4QixZQUFZLElBQUl1QixJQUFJLENBQUNDLEVBQUUsR0FBRyxDQUFDO1FBQzdCLENBQUM7UUFFRCxFQUFFLEVBQUVNLFFBQVEsRUFBRSxDQUFDO1lBQ2JuQyxXQUFXLENBQUMsSUFBSTtZQUNoQm5CLFVBQVUsQ0FBQ2UsY0FBYztZQUN6QnlDLGFBQWEsQ0FBQ3BDLFdBQVc7WUFDekJBLFdBQVcsR0FBRyxDQUFDO1lBQ2ZLLFVBQVUsR0FBRyxDQUFDO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0lBRUQsR0FBRyxDQUFDZSxTQUFTLEdBQUcsUUFBUSxDQUFDQSxTQUFTLEdBQUcsQ0FBQztRQUNwQ2lCLEtBQUs7UUFDTEMsU0FBUztRQUNUQyxVQUFVO0lBQ1osQ0FBQztJQUVELEdBQUcsQ0FBQ1IsSUFBSSxHQUFHLFFBQVEsQ0FBQ0EsSUFBSSxHQUFHLENBQUM7UUFDMUJNLEtBQUs7UUFDTEMsU0FBUztRQUNUQyxVQUFVO0lBQ1osQ0FBQztJQUVELEdBQUcsQ0FBQ0MsV0FBVyxHQUFHLFFBQVEsQ0FBQ0EsV0FBVyxDQUFDQyxHQUFHLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFLENBQUM7UUFDN0QsR0FBRyxDQUFDQyxHQUFHLEdBQUd0QyxhQUFhO1FBQ3ZCLEdBQUcsQ0FBQ3VDLEtBQUssR0FBR3JFLFFBQVEsQ0FBQ2lFLEdBQUc7UUFDeEJHLEdBQUcsQ0FBQ0UsSUFBSTtRQUNSRixHQUFHLENBQUNHLFNBQVM7UUFDYkgsR0FBRyxDQUFDSSxNQUFNLENBQUNsQyxPQUFPLEVBQUVDLE9BQU87UUFDM0I2QixHQUFHLENBQUNLLEdBQUcsQ0FBQ25DLE9BQU8sRUFBRUMsT0FBTyxFQUFFM0IsSUFBSSxFQUFFc0QsU0FBUyxFQUFFQyxLQUFLLEVBQUUsS0FBSztRQUN2REMsR0FBRyxDQUFDTSxNQUFNLENBQUNwQyxPQUFPLEVBQUVDLE9BQU87UUFDM0I2QixHQUFHLENBQUNPLFNBQVM7UUFDYlAsR0FBRyxDQUFDUSxTQUFTLEdBQUcxRSxTQUFTLENBQUMrRCxHQUFHO1FBQzdCRyxHQUFHLENBQUNTLElBQUk7UUFDUlQsR0FBRyxDQUFDVSxNQUFNO1FBQ1ZWLEdBQUcsQ0FBQ0UsSUFBSTtRQUNSRixHQUFHLENBQUNXLFNBQVMsQ0FBQ3pDLE9BQU8sRUFBRUMsT0FBTztRQUM5QjZCLEdBQUcsQ0FBQ1ksTUFBTSxFQUFFZCxTQUFTLEdBQUdDLEtBQUssSUFBSSxDQUFDO1FBQ2xDQyxHQUFHLENBQUNRLFNBQVMsR0FBR3BFLGFBQWE7UUFDN0I0RCxHQUFHLENBQUNhLElBQUksR0FBRyxDQUFXLGFBQUcvRCxVQUFVO1FBQ25Da0QsR0FBRyxDQUFDYyxRQUFRLENBQUNiLEtBQUssQ0FBQ2MsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUd2RSxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQ2xEd0QsR0FBRyxDQUFDZ0IsT0FBTztJQUNiLENBQUM7SUFFRCxHQUFHLENBQUN0QixTQUFTLEdBQUcsUUFBUSxDQUFDQSxTQUFTLEdBQUcsQ0FBQztRQUNwQyxHQUFHLENBQUNNLEdBQUcsR0FBR3RDLGFBQWE7UUFDdkIsR0FBRyxDQUFDb0MsU0FBUyxHQUFHdEMsWUFBWTtRQUM1QixHQUFHLENBQUN5RCxHQUFHLEdBQUdyRixRQUFRLENBQUMyQixNQUFNO1FBQ3pCLEdBQUcsQ0FBQzJELEdBQUcsR0FBR25DLElBQUksQ0FBQ0MsRUFBRSxHQUFHLENBQUM7UUFDckJnQixHQUFHLENBQUNtQixTQUFTLEdBQUcsQ0FBQztRQUNqQm5CLEdBQUcsQ0FBQ29CLFdBQVcsR0FBR2xGLFlBQVk7UUFDOUI4RCxHQUFHLENBQUNxQixZQUFZLEdBQUcsQ0FBUTtRQUMzQnJCLEdBQUcsQ0FBQ3NCLFNBQVMsR0FBRyxDQUFRO1FBQ3hCdEIsR0FBRyxDQUFDYSxJQUFJLEdBQUcsQ0FBTSxRQUFHL0QsVUFBVTtRQUU5QixHQUFHLENBQUUsR0FBRyxDQUFDeUUsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxJQUFJTixHQUFHLEVBQUVNLENBQUMsR0FBSSxDQUFDO1lBQzlCLEdBQUcsQ0FBQ3hCLEtBQUssR0FBR21CLEdBQUcsSUFBSUssQ0FBQyxHQUFHTixHQUFHLElBQUl6RCxZQUFZO1lBQzFDb0MsV0FBVyxDQUFDMkIsQ0FBQyxHQUFHLENBQUMsRUFBRXpCLFNBQVMsRUFBRUMsS0FBSztZQUNuQ0QsU0FBUyxHQUFHQyxLQUFLO1FBQ25CLENBQUM7UUFDTDVFLEdBQUcsQ0FBQ3FHLEdBQUcsR0FBQyxDQUFVO1FBQ2R4QixHQUFHLENBQUNHLFNBQVM7UUFDYkgsR0FBRyxDQUFDSyxHQUFHLENBQUNuQyxPQUFPLEVBQUVDLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFK0MsR0FBRyxFQUFFLEtBQUs7UUFDM0NsQixHQUFHLENBQUNPLFNBQVM7UUFDYixFQUFnQztRQUNoQ1AsR0FBRyxDQUFDeUIsU0FBUyxDQUFDdEcsR0FBRyxFQUFDLENBQUMsRUFBQyxDQUFDO1FBQ3JCNkUsR0FBRyxDQUFDbUIsU0FBUyxHQUFHLEVBQUU7UUFDbEJuQixHQUFHLENBQUNvQixXQUFXLEdBQUdoRixhQUFhO1FBQy9CNEQsR0FBRyxDQUFDUyxJQUFJO1FBQ1JULEdBQUcsQ0FBQ2EsSUFBSSxHQUFHLENBQVcsYUFBRy9ELFVBQVU7UUFDbkNrRCxHQUFHLENBQUNRLFNBQVMsR0FBR3BFLGFBQWE7UUFDN0I0RCxHQUFHLENBQUNzQixTQUFTLEdBQUcsQ0FBUTtRQUN4QixFQUFrRDtRQUNsRHRCLEdBQUcsQ0FBQ1UsTUFBTTtJQUNWLEVBQW1CO0lBQ25CLEVBQWtEO0lBQ2xELEVBQW1CO0lBQ25CLEVBQXNCO0lBQ3RCLEVBQWtDO0lBQ2xDLEVBQWdCO0lBQ2xCLENBQUM7SUFFRCxHQUFHLENBQUNmLFVBQVUsR0FBRyxRQUFRLENBQUNBLFVBQVUsR0FBRyxDQUFDO1FBQ3RDLEdBQUcsQ0FBQ0ssR0FBRyxHQUFHdEMsYUFBYTtRQUN2QixFQUFxQjtRQUNyQixFQUFtQztRQUNuQyxFQUFpQztRQUNqQyxFQUFtQjtRQUNuQixFQUEwQztRQUMxQyxFQUEwQztRQUMxQyxFQUFxQztRQUNyQyxFQUFtQjtRQUNuQixFQUFjO1FBQ2QsR0FBRyxDQUFDZ0UsTUFBTSxHQUFHbEUsWUFBWSxHQUFHdUIsSUFBSSxDQUFDQyxFQUFFLEdBQUcsQ0FBQztRQUN2QyxHQUFHLENBQUN1QyxDQUFDLEdBQUczRixRQUFRLENBQUMyQixNQUFNLEdBQUd3QixJQUFJLENBQUM0QyxLQUFLLENBQUNELE1BQU0sSUFBSTNDLElBQUksQ0FBQ0MsRUFBRSxHQUFHLENBQUMsSUFBSXBELFFBQVEsQ0FBQzJCLE1BQU0sSUFBSSxDQUFDO1FBQ2xGLEVBQUUsRUFBRWdFLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0EsQ0FBQyxHQUFHM0YsUUFBUSxDQUFDMkIsTUFBTTtRQUNsQ3lDLEdBQUcsQ0FBQ3NCLFNBQVMsR0FBRyxDQUFRO1FBQ3hCdEIsR0FBRyxDQUFDcUIsWUFBWSxHQUFHLENBQVE7UUFDM0JyQixHQUFHLENBQUNRLFNBQVMsR0FBR3RFLFlBQVk7UUFDNUI4RCxHQUFHLENBQUNhLElBQUksR0FBRyxDQUFhLGVBQUcvRCxVQUFVO1FBQ3JDQyxjQUFjLEdBQUduQixRQUFRLENBQUMyRixDQUFDO1FBQzNCdkUsU0FBUyxJQUFJZ0QsR0FBRyxDQUFDYyxRQUFRLENBQUMvRCxjQUFjLEVBQUVtQixPQUFPLEdBQUcsRUFBRSxFQUFFQyxPQUFPLEdBQUczQixJQUFJLEdBQUcsRUFBRTtJQUM3RSxDQUFDO0lBRUQsR0FBRyxDQUFDaUQsS0FBSyxHQUFHLFFBQVEsQ0FBQ0EsS0FBSyxHQUFHLENBQUM7UUFDNUIsR0FBRyxDQUFDTyxHQUFHLEdBQUd0QyxhQUFhO1FBQ3ZCc0MsR0FBRyxDQUFDNEIsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUc7SUFDL0IsQ0FBQztJQUVELE1BQU0sQ0FBQzdHLEtBQUssQ0FBQzhHLGFBQWEsQ0FBQyxDQUFLLE1BQUUsQ0FBQztRQUNqQ0MsRUFBRSxFQUFFLENBQU87SUFDYixDQUFDLEVBQUUvRyxLQUFLLENBQUM4RyxhQUFhLENBQUMsQ0FBUSxTQUFFLENBQUM7UUFDaENDLEVBQUUsRUFBRSxDQUFRO1FBQ1pDLEtBQUssRUFBRSxDQUFLO1FBQ1pDLE1BQU0sRUFBRSxDQUFLO1FBQ2JDLEtBQUssRUFBRSxDQUFDO1lBQ05DLFNBQVMsRUFBRSxDQUFNO1lBQ2pCQyxVQUFVLEVBQUUsQ0FBTTtZQUNsQkMsYUFBYSxFQUFFbEYsVUFBVSxJQUFJWixVQUFVLEdBQUcsQ0FBTSxRQUFHLENBQU07UUFDM0QsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0lBcFFHakIsY0FBYztLQUFkQSxjQUFjO0FBc1FsQmdILE1BQU0sQ0FBQ0MsT0FBTyxHQUFHdkgsS0FBSyxDQUFDd0gsSUFBSSxDQUFDbEgsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wbHVnaW5zL2FtYXppbmctc3Bpbi13aGVlbC1nYW1lL2luZGV4LmpzPzc1NWEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxuY29uc3QgeyBkZWZhdWx0OiBSZWFjdEhvd2xlciB9ID0gcmVxdWlyZSgncmVhY3QtaG93bGVyJyk7XHJcbnZhciBpbWcgPSBuZXcgSW1hZ2UoKVxyXG52YXIgV2hlZWxDb21wb25lbnQgPSBmdW5jdGlvbiBXaGVlbENvbXBvbmVudChfcmVmKSB7XHJcbiAgLy8gY29uc29sZS5sb2coX3JlZi5zZWdtZW50cyk7XHJcbiAgY29uc3Qge3Nob3VsZFdlU3Bpbiwgc2V0U2hvdWxkV2VTcGlufSA9IF9yZWY7XHJcbiAgY29uc3QgW3NvdW5kLCBzZXRTb3VuZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbnsvKiA8UmVhY3RIb3dsZXIgc3JjPVwiL3doZWVsLXNwaW4ubXAzXCIgcGxheWluZz17dHJ1ZX0vPiAqL31cclxuXHJcbiAgdmFyIHNlZ21lbnRzID0gX3JlZi5zZWdtZW50cyxcclxuICAgICAgc3BpblNlY29uZHMgPSBfcmVmLnNwaW5TZWNvbmRzLFxyXG4gICAgICBzZWdDb2xvcnMgPSBfcmVmLnNlZ0NvbG9ycyxcclxuICAgICAgd2lubmluZ1NlZ21lbnQgPSBfcmVmLndpbm5pbmdTZWdtZW50LFxyXG4gICAgICBvbkZpbmlzaGVkID0gX3JlZi5vbkZpbmlzaGVkLFxyXG4gICAgICBfcmVmJHByaW1hcnlDb2xvciA9IF9yZWYucHJpbWFyeUNvbG9yLFxyXG4gICAgICBwcmltYXJ5Q29sb3IgPSBfcmVmJHByaW1hcnlDb2xvciA9PT0gdm9pZCAwID8gJ2JsYWNrJyA6IF9yZWYkcHJpbWFyeUNvbG9yLFxyXG4gICAgICBfcmVmJGNvbnRyYXN0Q29sb3IgPSBfcmVmLmNvbnRyYXN0Q29sb3IsXHJcbiAgICAgIGNvbnRyYXN0Q29sb3IgPSBfcmVmJGNvbnRyYXN0Q29sb3IgPT09IHZvaWQgMCA/ICd3aGl0ZScgOiBfcmVmJGNvbnRyYXN0Q29sb3IsXHJcbiAgICAgIF9yZWYkaXNPbmx5T25jZSA9IF9yZWYuaXNPbmx5T25jZSxcclxuICAgICAgaXNPbmx5T25jZSA9IF9yZWYkaXNPbmx5T25jZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYkaXNPbmx5T25jZSxcclxuICAgICAgX3JlZiRzaXplID0gX3JlZi5zaXplLFxyXG4gICAgICBzaXplID0gX3JlZiRzaXplID09PSB2b2lkIDAgPyAyOTAgOiBfcmVmJHNpemUsXHJcbiAgICAgIF9yZWYkdXBEdXJhdGlvbiA9IF9yZWYudXBEdXJhdGlvbixcclxuICAgICAgdXBEdXJhdGlvbiA9IF9yZWYkdXBEdXJhdGlvbiA9PT0gdm9pZCAwID8gMTAwIDogX3JlZiR1cER1cmF0aW9uLFxyXG4gICAgICBfcmVmJGRvd25EdXJhdGlvbiA9IF9yZWYuZG93bkR1cmF0aW9uLFxyXG4gICAgICBkb3duRHVyYXRpb24gPSBfcmVmJGRvd25EdXJhdGlvbiA9PT0gdm9pZCAwID8gMTAwMCA6IF9yZWYkZG93bkR1cmF0aW9uLFxyXG4gICAgICBfcmVmJGZvbnRGYW1pbHkgPSBfcmVmLmZvbnRGYW1pbHksXHJcbiAgICAgIGZvbnRGYW1pbHkgPSBfcmVmJGZvbnRGYW1pbHkgPT09IHZvaWQgMCA/ICdwcm94aW1hLW5vdmEnIDogX3JlZiRmb250RmFtaWx5O1xyXG4gIHZhciBjdXJyZW50U2VnbWVudCA9ICcnO1xyXG4gIHZhciBpc1N0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcbiAgdmFyIF91c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgaXNGaW5pc2hlZCA9IF91c2VTdGF0ZVswXSxcclxuICAgICAgc2V0RmluaXNoZWQgPSBfdXNlU3RhdGVbMV07XHJcblxyXG4gIHZhciB0aW1lckhhbmRsZSA9IDBcclxuICB2YXIgdGltZXJNYW51YWxEZWxheSA9IDUwXHJcbiAgaWYoc3BpblNlY29uZHMgPiA2MCl7XHJcbiAgICB0aW1lck1hbnVhbERlbGF5ID0gNjBcclxuICB9XHJcbiAgLy8gc3BpblNlY29uZHNcclxuICB2YXIgdGltZXJEZWxheSA9IChzZWdtZW50cy5sZW5ndGggPCB0aW1lck1hbnVhbERlbGF5ICA/IHRpbWVyTWFudWFsRGVsYXkgOiBzZWdtZW50cy5sZW5ndGgpO1xyXG4gIHZhciBhbmdsZUN1cnJlbnQgPSAwXHJcbiAgdmFyIGFuZ2xlRGVsdGEgPSAwXHJcbiAgdmFyIGNhbnZhc0NvbnRleHQgPSBudWxsXHJcbiAgLy8gdmFyIG1heFNwZWVkID0gTWF0aC5QSSAvIChzZWdtZW50cy5sZW5ndGgpO1xyXG4gIHZhciBtYXhTcGVlZCA9IDRcclxuICBjb25zb2xlLmxvZyhgVG90YWwgc2VnbWVudHMgJHtzZWdtZW50cy5sZW5ndGh9YClcclxuICBjb25zb2xlLmxvZyhgTWF4IHNwZWVkICR7bWF4U3BlZWR9YClcclxuICBjb25zb2xlLmxvZyhgVGltZXIgZGVsYXkgJHt0aW1lck1hbnVhbERlbGF5fWApXHJcbiAgdmFyIHVwVGltZSA9IHNlZ21lbnRzLmxlbmd0aCAqIHVwRHVyYXRpb25cclxuICB2YXIgZG93blRpbWUgPSBzZWdtZW50cy5sZW5ndGggKiBkb3duRHVyYXRpb25cclxuICB2YXIgc3BpblN0YXJ0ID0gMFxyXG4gIHZhciBmcmFtZXMgPSAwXHJcbiAgdmFyIGNlbnRlclggPSAzMDBcclxuICB2YXIgY2VudGVyWSA9IDMwMFxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgd2hlZWxJbml0KCk7XHJcbiAgfSwgW3NlZ21lbnRzXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihzaG91bGRXZVNwaW4pIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJzaG91bGRzcGluXCIsc2hvdWxkV2VTcGluKVxyXG4gICAgICBzZXRTb3VuZCh0cnVlKVxyXG4gICAgICB3aGVlbEluaXQoKTtcclxuICAgICAgc3BpbigpO1xyXG4gICAgICBzZXRTaG91bGRXZVNwaW4oZmFsc2UpO1xyXG4gICAgICAvLyBzZXRTb3VuZChmYWxzZSlcclxuICAgIH1cclxuICB9LCBbc2hvdWxkV2VTcGluXSlcclxuXHJcbiAgLy8gUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgICAgd2hlZWxJbml0KCk7XHJcbiAgLy8gfSxbXSlcclxuXHJcbiAgdmFyIHdoZWVsSW5pdCA9IGZ1bmN0aW9uIHdoZWVsSW5pdCgpIHtcclxuICAgIGluaXRDYW52YXMoKTtcclxuICAgIHdoZWVsRHJhdygpO1xyXG4gIH07XHJcblxyXG4gIHZhciBpbml0Q2FudmFzID0gZnVuY3Rpb24gaW5pdENhbnZhcygpIHtcclxuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXNDb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgLy8gdmFyIGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIC8vIGJhY2tncm91bmQuc3JjID0gXCIuLi93aGVlbF9mcmFtZS5wbmdcIjtcclxuICAgIC8vIGNhbnZhc0NvbnRleHQuZHJhd0ltYWdlKGJhY2tncm91bmQsMTAwLDEwMCw0MDAwLDI3NzApOyAgXHJcblxyXG4gICAgLy8gdmFyIHNwaW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BpbkJ0bicpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCIzMzMzM1wiKTtcclxuICAgIC8vIHNwaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzcGluLCBmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIHNwaW4gPSBmdW5jdGlvbiBzcGluKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJzcGlubmluZ1wiKVxyXG4gICAgaXNTdGFydGVkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGltZXJIYW5kbGUgPT09IDApIHtcclxuICAgICAgc3BpblN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgIG1heFNwZWVkID0gTWF0aC5QSSAvIHNlZ21lbnRzLmxlbmd0aDtcclxuICAgICAgZnJhbWVzID0gMDtcclxuICAgICAgdGltZXJIYW5kbGUgPSBzZXRJbnRlcnZhbChvblRpbWVyVGljaywgdGltZXJEZWxheSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdmFyIG9uVGltZXJUaWNrID0gZnVuY3Rpb24gb25UaW1lclRpY2soKSB7XHJcbiAgICBmcmFtZXMrKztcclxuICAgIGRyYXcoKTtcclxuICAgIHZhciBkdXJhdGlvbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3BpblN0YXJ0O1xyXG4gICAgY29uc29sZS5sb2coYGR1cmF0aW9uICR7ZHVyYXRpb259YCk7XHJcbiAgICB2YXIgcHJvZ3Jlc3MgPSAwO1xyXG4gICAgdmFyIGZpbmlzaGVkID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKGR1cmF0aW9uIDwgdXBUaW1lKSB7XHJcblxyXG4gICAgICBwcm9ncmVzcyA9IGR1cmF0aW9uIC8gdXBUaW1lO1xyXG4gICAgICBjb25zb2xlLmxvZyhgcHJvZ3Jlc3MgJHtwcm9ncmVzc31gKVxyXG4gICAgICBjb25zb2xlLmxvZyhgdXBUaW1lICR7dXBUaW1lfWApXHJcbiAgICAgIGFuZ2xlRGVsdGEgPSBtYXhTcGVlZCAqIE1hdGguc2luKHByb2dyZXNzICogTWF0aC5QSSAvIDIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAod2lubmluZ1NlZ21lbnQpIHtcclxuICAgICAgICBpZiAoY3VycmVudFNlZ21lbnQgPT09IHdpbm5pbmdTZWdtZW50ICYmIGZyYW1lcyA+IHNlZ21lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgcHJvZ3Jlc3MgPSBkdXJhdGlvbiAvIHVwVGltZTtcclxuICAgICAgICAgIGFuZ2xlRGVsdGEgPSBtYXhTcGVlZCAqIE1hdGguc2luKHByb2dyZXNzICogTWF0aC5QSSAvIDIgKyBNYXRoLlBJIC8gMik7XHJcbiAgICAgICAgICBwcm9ncmVzcyA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHByb2dyZXNzID0gZHVyYXRpb24gLyBkb3duVGltZTtcclxuICAgICAgICAgIGFuZ2xlRGVsdGEgPSBtYXhTcGVlZCAqIE1hdGguc2luKHByb2dyZXNzICogTWF0aC5QSSAvIDIgKyBNYXRoLlBJIC8gMik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb2dyZXNzID0gZHVyYXRpb24gLyBkb3duVGltZTtcclxuICAgICAgICBhbmdsZURlbHRhID0gbWF4U3BlZWQgKiBNYXRoLnNpbihwcm9ncmVzcyAqIE1hdGguUEkgLyAyICsgTWF0aC5QSSAvIDIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAocHJvZ3Jlc3MgPj0gMSkgZmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZyhgcHJvZ3Jlc3MgJHtwcm9ncmVzc31gKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmdsZUN1cnJlbnQgKz0gYW5nbGVEZWx0YTtcclxuICAgIHdoaWxlIChhbmdsZUN1cnJlbnQgPj0gTWF0aC5QSSAqIDIpIHtcclxuICAgICAgYW5nbGVDdXJyZW50IC09IE1hdGguUEkgKiAyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaW5pc2hlZCkge1xyXG4gICAgICBzZXRGaW5pc2hlZCh0cnVlKTtcclxuICAgICAgb25GaW5pc2hlZChjdXJyZW50U2VnbWVudCk7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJIYW5kbGUpO1xyXG4gICAgICB0aW1lckhhbmRsZSA9IDA7XHJcbiAgICAgIGFuZ2xlRGVsdGEgPSAwO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHZhciB3aGVlbERyYXcgPSBmdW5jdGlvbiB3aGVlbERyYXcoKSB7XHJcbiAgICBjbGVhcigpO1xyXG4gICAgZHJhd1doZWVsKCk7XHJcbiAgICBkcmF3TmVlZGxlKCk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGRyYXcgPSBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY2xlYXIoKTtcclxuICAgIGRyYXdXaGVlbCgpO1xyXG4gICAgZHJhd05lZWRsZSgpO1xyXG4gIH07XHJcblxyXG4gIHZhciBkcmF3U2VnbWVudCA9IGZ1bmN0aW9uIGRyYXdTZWdtZW50KGtleSwgbGFzdEFuZ2xlLCBhbmdsZSkge1xyXG4gICAgdmFyIGN0eCA9IGNhbnZhc0NvbnRleHQ7XHJcbiAgICB2YXIgdmFsdWUgPSBzZWdtZW50c1trZXldO1xyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oY2VudGVyWCwgY2VudGVyWSk7XHJcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHNpemUsIGxhc3RBbmdsZSwgYW5nbGUsIGZhbHNlKTtcclxuICAgIGN0eC5saW5lVG8oY2VudGVyWCwgY2VudGVyWSk7XHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gc2VnQ29sb3JzW2tleV07XHJcbiAgICBjdHguZmlsbCgpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC50cmFuc2xhdGUoY2VudGVyWCwgY2VudGVyWSk7XHJcbiAgICBjdHgucm90YXRlKChsYXN0QW5nbGUgKyBhbmdsZSkgLyAyKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBjb250cmFzdENvbG9yO1xyXG4gICAgY3R4LmZvbnQgPSAnYm9sZCAxZW0gJyArIGZvbnRGYW1pbHk7XHJcbiAgICBjdHguZmlsbFRleHQodmFsdWUuc3Vic3RyKDAsIDIxKSwgc2l6ZSAvIDIgKyAyMCwgMCk7XHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG4gIH07XHJcblxyXG4gIHZhciBkcmF3V2hlZWwgPSBmdW5jdGlvbiBkcmF3V2hlZWwoKSB7XHJcbiAgICB2YXIgY3R4ID0gY2FudmFzQ29udGV4dDtcclxuICAgIHZhciBsYXN0QW5nbGUgPSBhbmdsZUN1cnJlbnQ7XHJcbiAgICB2YXIgbGVuID0gc2VnbWVudHMubGVuZ3RoO1xyXG4gICAgdmFyIFBJMiA9IE1hdGguUEkgKiAyO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDE7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBwcmltYXJ5Q29sb3I7XHJcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XHJcbiAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICBjdHguZm9udCA9ICcxZW0gJyArIGZvbnRGYW1pbHk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gbGVuOyBpKyspIHtcclxuICAgICAgdmFyIGFuZ2xlID0gUEkyICogKGkgLyBsZW4pICsgYW5nbGVDdXJyZW50O1xyXG4gICAgICBkcmF3U2VnbWVudChpIC0gMSwgbGFzdEFuZ2xlLCBhbmdsZSk7XHJcbiAgICAgIGxhc3RBbmdsZSA9IGFuZ2xlO1xyXG4gICAgfVxyXG5pbWcuc3JjPVwibG9nby5qcGdcIlxyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCA1MCwgMCwgUEkyLCBmYWxzZSk7XHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gcHJpbWFyeUNvbG9yO1xyXG4gICAgY3R4LmRyYXdJbWFnZShpbWcsMCwwKVxyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDEwO1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gY29udHJhc3RDb2xvcjtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgICBjdHguZm9udCA9ICdib2xkIDFlbSAnICsgZm9udEZhbWlseTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBjb250cmFzdENvbG9yO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgLy8gY3R4LmZpbGxUZXh0KGJ1dHRvblRleHQsIGNlbnRlclgsIGNlbnRlclkgKyAzKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIC8vIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgc2l6ZSwgMCwgUEkyLCBmYWxzZSk7XHJcbiAgICAvLyBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAvLyBjdHgubGluZVdpZHRoID0gMTA7XHJcbiAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBwcmltYXJ5Q29sb3I7XHJcbiAgICAvLyBjdHguc3Ryb2tlKCk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGRyYXdOZWVkbGUgPSBmdW5jdGlvbiBkcmF3TmVlZGxlKCkge1xyXG4gICAgdmFyIGN0eCA9IGNhbnZhc0NvbnRleHQ7XHJcbiAgICAvLyBjdHgubGluZVdpZHRoID0gMTtcclxuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IGNvbnRyYXN0Q29sb3I7XHJcbiAgICAvLyBjdHguZmlsZVN0eWxlID0gY29udHJhc3RDb2xvcjtcclxuICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIC8vIGN0eC5tb3ZlVG8oY2VudGVyWCArIDIwLCBjZW50ZXJZIC0gNTApO1xyXG4gICAgLy8gY3R4LmxpbmVUbyhjZW50ZXJYIC0gMjAsIGNlbnRlclkgLSA1MCk7XHJcbiAgICAvLyBjdHgubGluZVRvKGNlbnRlclgsIGNlbnRlclkgLSA3MCk7XHJcbiAgICAvLyBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICAvLyBjdHguZmlsbCgpO1xyXG4gICAgdmFyIGNoYW5nZSA9IGFuZ2xlQ3VycmVudCArIE1hdGguUEkgLyAyO1xyXG4gICAgdmFyIGkgPSBzZWdtZW50cy5sZW5ndGggLSBNYXRoLmZsb29yKGNoYW5nZSAvIChNYXRoLlBJICogMikgKiBzZWdtZW50cy5sZW5ndGgpIC0gMTtcclxuICAgIGlmIChpIDwgMCkgaSA9IGkgKyBzZWdtZW50cy5sZW5ndGg7XHJcbiAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gcHJpbWFyeUNvbG9yO1xyXG4gICAgY3R4LmZvbnQgPSAnYm9sZCAxLjVlbSAnICsgZm9udEZhbWlseTtcclxuICAgIGN1cnJlbnRTZWdtZW50ID0gc2VnbWVudHNbaV07XHJcbiAgICBpc1N0YXJ0ZWQgJiYgY3R4LmZpbGxUZXh0KGN1cnJlbnRTZWdtZW50LCBjZW50ZXJYICsgMTAsIGNlbnRlclkgKyBzaXplICsgNTApO1xyXG4gIH07XHJcblxyXG4gIHZhciBjbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xyXG4gICAgdmFyIGN0eCA9IGNhbnZhc0NvbnRleHQ7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDEwMDAsIDgwMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xyXG4gICAgaWQ6IFwid2hlZWxcIixcclxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIsIHtcclxuICAgIGlkOiBcImNhbnZhc1wiLFxyXG4gICAgd2lkdGg6IFwiNTkwXCIsXHJcbiAgICBoZWlnaHQ6IFwiNTkwXCIsXHJcbiAgICBzdHlsZToge1xyXG4gICAgICBtYXJnaW5Ub3A6IFwiNDJweFwiLFxyXG4gICAgICBtYXJnaW5MZWZ0OiBcIjM5cHhcIixcclxuICAgICAgcG9pbnRlckV2ZW50czogaXNGaW5pc2hlZCAmJiBpc09ubHlPbmNlID8gJ25vbmUnIDogJ2F1dG8nXHJcbiAgICB9XHJcbiAgfSkpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5tZW1vKFdoZWVsQ29tcG9uZW50KTsiXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiUmVhY3RIb3dsZXIiLCJkZWZhdWx0IiwiaW1nIiwiSW1hZ2UiLCJXaGVlbENvbXBvbmVudCIsIl9yZWYiLCJzaG91bGRXZVNwaW4iLCJzZXRTaG91bGRXZVNwaW4iLCJ1c2VTdGF0ZSIsInNvdW5kIiwic2V0U291bmQiLCJzZWdtZW50cyIsInNwaW5TZWNvbmRzIiwic2VnQ29sb3JzIiwid2lubmluZ1NlZ21lbnQiLCJvbkZpbmlzaGVkIiwiX3JlZiRwcmltYXJ5Q29sb3IiLCJwcmltYXJ5Q29sb3IiLCJfcmVmJGNvbnRyYXN0Q29sb3IiLCJjb250cmFzdENvbG9yIiwiX3JlZiRpc09ubHlPbmNlIiwiaXNPbmx5T25jZSIsIl9yZWYkc2l6ZSIsInNpemUiLCJfcmVmJHVwRHVyYXRpb24iLCJ1cER1cmF0aW9uIiwiX3JlZiRkb3duRHVyYXRpb24iLCJkb3duRHVyYXRpb24iLCJfcmVmJGZvbnRGYW1pbHkiLCJmb250RmFtaWx5IiwiY3VycmVudFNlZ21lbnQiLCJpc1N0YXJ0ZWQiLCJfdXNlU3RhdGUiLCJpc0ZpbmlzaGVkIiwic2V0RmluaXNoZWQiLCJ0aW1lckhhbmRsZSIsInRpbWVyTWFudWFsRGVsYXkiLCJ0aW1lckRlbGF5IiwibGVuZ3RoIiwiYW5nbGVDdXJyZW50IiwiYW5nbGVEZWx0YSIsImNhbnZhc0NvbnRleHQiLCJtYXhTcGVlZCIsImNvbnNvbGUiLCJsb2ciLCJ1cFRpbWUiLCJkb3duVGltZSIsInNwaW5TdGFydCIsImZyYW1lcyIsImNlbnRlclgiLCJjZW50ZXJZIiwidXNlRWZmZWN0Iiwid2hlZWxJbml0Iiwic3BpbiIsImluaXRDYW52YXMiLCJ3aGVlbERyYXciLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIkRhdGUiLCJnZXRUaW1lIiwiTWF0aCIsIlBJIiwic2V0SW50ZXJ2YWwiLCJvblRpbWVyVGljayIsImRyYXciLCJkdXJhdGlvbiIsInByb2dyZXNzIiwiZmluaXNoZWQiLCJzaW4iLCJjbGVhckludGVydmFsIiwiY2xlYXIiLCJkcmF3V2hlZWwiLCJkcmF3TmVlZGxlIiwiZHJhd1NlZ21lbnQiLCJrZXkiLCJsYXN0QW5nbGUiLCJhbmdsZSIsImN0eCIsInZhbHVlIiwic2F2ZSIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImFyYyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImZpbGxTdHlsZSIsImZpbGwiLCJzdHJva2UiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJmb250IiwiZmlsbFRleHQiLCJzdWJzdHIiLCJyZXN0b3JlIiwibGVuIiwiUEkyIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJ0ZXh0QmFzZWxpbmUiLCJ0ZXh0QWxpZ24iLCJpIiwic3JjIiwiZHJhd0ltYWdlIiwiY2hhbmdlIiwiZmxvb3IiLCJjbGVhclJlY3QiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsInBvaW50ZXJFdmVudHMiLCJtb2R1bGUiLCJleHBvcnRzIiwibWVtbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./plugins/amazing-spin-wheel-game/index.js\n");

/***/ })

});