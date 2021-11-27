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

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nvar _s = $RefreshSig$();\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar WheelComponent = function WheelComponent(_ref) {\n    _s();\n    // console.log(_ref.segments);\n    var shouldWeSpin = _ref.shouldWeSpin, setShouldWeSpin = _ref.setShouldWeSpin;\n    var segments = _ref.segments, segColors = _ref.segColors, winningSegment = _ref.winningSegment, onFinished = _ref.onFinished, _ref$primaryColor = _ref.primaryColor, primaryColor = _ref$primaryColor === void 0 ? 'black' : _ref$primaryColor, _ref$contrastColor = _ref.contrastColor, contrastColor = _ref$contrastColor === void 0 ? 'white' : _ref$contrastColor, _ref$isOnlyOnce = _ref.isOnlyOnce, isOnlyOnce = _ref$isOnlyOnce === void 0 ? true : _ref$isOnlyOnce, _ref$size = _ref.size, size = _ref$size === void 0 ? 290 : _ref$size, _ref$upDuration = _ref.upDuration, upDuration = _ref$upDuration === void 0 ? 100 : _ref$upDuration, _ref$downDuration = _ref.downDuration, downDuration = _ref$downDuration === void 0 ? 1000 : _ref$downDuration, _ref$fontFamily = _ref.fontFamily, fontFamily = _ref$fontFamily === void 0 ? 'proxima-nova' : _ref$fontFamily;\n    var currentSegment = '';\n    var isStarted = false;\n    var _useState = React.useState(false), isFinished = _useState[0], setFinished = _useState[1];\n    var timerHandle = 0;\n    var timerDelay = segments.length;\n    var angleCurrent = 0;\n    var angleDelta = 0;\n    var canvasContext = null;\n    var maxSpeed = Math.PI / (\"\" + segments.length);\n    var upTime = segments.length * upDuration;\n    var downTime = segments.length * downDuration;\n    var spinStart = 0;\n    var frames = 0;\n    var centerX = 300;\n    var centerY = 300;\n    React.useEffect(function() {\n        wheelInit();\n    // setTimeout(function () {\n    //   // window.scrollTo(0, 1);\n    // }, 0);\n    }, []);\n    React.useEffect(function() {\n        if (shouldWeSpin) {\n            wheelInit();\n            spin();\n            setShouldWeSpin(false);\n        }\n    }, [\n        shouldWeSpin\n    ]);\n    React.useEffect(function() {\n        if (session) {\n            wheelInit();\n        }\n    }, [\n        session\n    ]);\n    var wheelInit = function wheelInit() {\n        initCanvas();\n        wheelDraw();\n    };\n    var initCanvas = function initCanvas() {\n        var canvas = document.getElementById('canvas');\n        canvasContext = canvas.getContext('2d');\n    // var background = new Image();\n    // background.src = \"../wheel_frame.png\";\n    // canvasContext.drawImage(background,100,100,4000,2770);  \n    // var spinBtn = document.getElementById('spinBtn');\n    // console.log(\"33333\");\n    // spinBtn.addEventListener('click', spin, false);\n    };\n    var spin = function spin() {\n        isStarted = true;\n        if (timerHandle === 0) {\n            spinStart = new Date().getTime();\n            maxSpeed = Math.PI / segments.length;\n            frames = 0;\n            timerHandle = setInterval(onTimerTick, timerDelay);\n        }\n    };\n    var onTimerTick = function onTimerTick() {\n        frames++;\n        draw();\n        var duration = new Date().getTime() - spinStart;\n        var progress = 0;\n        var finished = false;\n        if (duration < upTime) {\n            progress = duration / upTime;\n            angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2);\n        } else {\n            if (winningSegment) {\n                if (currentSegment === winningSegment && frames > segments.length) {\n                    progress = duration / upTime;\n                    angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);\n                    progress = 1;\n                } else {\n                    progress = duration / downTime;\n                    angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);\n                }\n            } else {\n                progress = duration / downTime;\n                angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);\n            }\n            if (progress >= 1) finished = true;\n        }\n        angleCurrent += angleDelta;\n        while(angleCurrent >= Math.PI * 2){\n            angleCurrent -= Math.PI * 2;\n        }\n        if (finished) {\n            setFinished(true);\n            onFinished(currentSegment);\n            clearInterval(timerHandle);\n            timerHandle = 0;\n            angleDelta = 0;\n        }\n    };\n    var wheelDraw = function wheelDraw() {\n        clear();\n        drawWheel();\n        drawNeedle();\n    };\n    var draw = function draw() {\n        clear();\n        drawWheel();\n        drawNeedle();\n    };\n    var drawSegment = function drawSegment(key, lastAngle, angle) {\n        var ctx = canvasContext;\n        var value = segments[key];\n        ctx.save();\n        ctx.beginPath();\n        ctx.moveTo(centerX, centerY);\n        ctx.arc(centerX, centerY, size, lastAngle, angle, false);\n        ctx.lineTo(centerX, centerY);\n        ctx.closePath();\n        ctx.fillStyle = segColors[key];\n        ctx.fill();\n        ctx.stroke();\n        ctx.save();\n        ctx.translate(centerX, centerY);\n        ctx.rotate((lastAngle + angle) / 2);\n        ctx.fillStyle = contrastColor;\n        ctx.font = 'bold 1em ' + fontFamily;\n        ctx.fillText(value.substr(0, 21), size / 2 + 20, 0);\n        ctx.restore();\n    };\n    var drawWheel = function drawWheel() {\n        var ctx = canvasContext;\n        var lastAngle = angleCurrent;\n        var len = segments.length;\n        var PI2 = Math.PI * 2;\n        ctx.lineWidth = 1;\n        ctx.strokeStyle = primaryColor;\n        ctx.textBaseline = 'middle';\n        ctx.textAlign = 'center';\n        ctx.font = '1em ' + fontFamily;\n        for(var i = 1; i <= len; i++){\n            var angle = PI2 * (i / len) + angleCurrent;\n            drawSegment(i - 1, lastAngle, angle);\n            lastAngle = angle;\n        }\n        ctx.beginPath();\n        ctx.arc(centerX, centerY, 50, 0, PI2, false);\n        ctx.closePath();\n        ctx.fillStyle = primaryColor;\n        ctx.lineWidth = 10;\n        ctx.strokeStyle = contrastColor;\n        ctx.fill();\n        ctx.font = 'bold 1em ' + fontFamily;\n        ctx.fillStyle = contrastColor;\n        ctx.textAlign = 'center';\n        // ctx.fillText(buttonText, centerX, centerY + 3);\n        ctx.stroke();\n        ctx.beginPath();\n        ctx.arc(centerX, centerY, size, 0, PI2, false);\n        ctx.closePath();\n        ctx.lineWidth = 10;\n        ctx.strokeStyle = primaryColor;\n        ctx.stroke();\n    };\n    var drawNeedle = function drawNeedle() {\n        var ctx = canvasContext;\n        // ctx.lineWidth = 1;\n        // ctx.strokeStyle = contrastColor;\n        // ctx.fileStyle = contrastColor;\n        // ctx.beginPath();\n        // ctx.moveTo(centerX + 20, centerY - 50);\n        // ctx.lineTo(centerX - 20, centerY - 50);\n        // ctx.lineTo(centerX, centerY - 70);\n        // ctx.closePath();\n        // ctx.fill();\n        var change = angleCurrent + Math.PI / 2;\n        var i = segments.length - Math.floor(change / (Math.PI * 2) * segments.length) - 1;\n        if (i < 0) i = i + segments.length;\n        ctx.textAlign = 'center';\n        ctx.textBaseline = 'middle';\n        ctx.fillStyle = primaryColor;\n        ctx.font = 'bold 1.5em ' + fontFamily;\n        currentSegment = segments[i];\n        isStarted && ctx.fillText(currentSegment, centerX + 10, centerY + size + 50);\n    };\n    var clear = function clear() {\n        var ctx = canvasContext;\n        ctx.clearRect(0, 0, 1000, 800);\n    };\n    return React.createElement(\"div\", {\n        id: \"wheel\",\n        width: \"600\",\n        height: \"600\"\n    }, React.createElement(\"canvas\", {\n        id: \"canvas\",\n        width: \"600\",\n        height: \"600\",\n        className: \"mx-auto d-block canvas\",\n        style: {\n            pointerEvents: isFinished && isOnlyOnce ? 'none' : 'auto'\n        }\n    }));\n};\n_s(WheelComponent, \"jneulehCy+G3DM3xEIKkcdbS7Ik=\");\n_c = WheelComponent;\nmodule.exports = React.memo(WheelComponent);\nvar _c;\n$RefreshReg$(_c, \"WheelComponent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbHVnaW5zL2FtYXppbmctc3Bpbi13aGVlbC1nYW1lL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUNBLEdBQUcsQ0FBQ0EsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFPO0FBQzNCLEdBQUcsQ0FBQ0MsY0FBYyxHQUFHLFFBQVEsQ0FBQ0EsY0FBYyxDQUFDQyxJQUFJLEVBQUUsQ0FBQzs7SUFDbEQsRUFBOEI7SUFDOUIsR0FBSyxDQUFFQyxZQUFZLEdBQXFCRCxJQUFJLENBQXJDQyxZQUFZLEVBQUVDLGVBQWUsR0FBSUYsSUFBSSxDQUF2QkUsZUFBZTtJQUNwQyxHQUFHLENBQUNDLFFBQVEsR0FBR0gsSUFBSSxDQUFDRyxRQUFRLEVBQ3hCQyxTQUFTLEdBQUdKLElBQUksQ0FBQ0ksU0FBUyxFQUMxQkMsY0FBYyxHQUFHTCxJQUFJLENBQUNLLGNBQWMsRUFDcENDLFVBQVUsR0FBR04sSUFBSSxDQUFDTSxVQUFVLEVBQzVCQyxpQkFBaUIsR0FBR1AsSUFBSSxDQUFDUSxZQUFZLEVBQ3JDQSxZQUFZLEdBQUdELGlCQUFpQixLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBTyxTQUFHQSxpQkFBaUIsRUFDekVFLGtCQUFrQixHQUFHVCxJQUFJLENBQUNVLGFBQWEsRUFDdkNBLGFBQWEsR0FBR0Qsa0JBQWtCLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFPLFNBQUdBLGtCQUFrQixFQUM1RUUsZUFBZSxHQUFHWCxJQUFJLENBQUNZLFVBQVUsRUFDakNBLFVBQVUsR0FBR0QsZUFBZSxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHQSxlQUFlLEVBQ2hFRSxTQUFTLEdBQUdiLElBQUksQ0FBQ2MsSUFBSSxFQUNyQkEsSUFBSSxHQUFHRCxTQUFTLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUdBLFNBQVMsRUFDN0NFLGVBQWUsR0FBR2YsSUFBSSxDQUFDZ0IsVUFBVSxFQUNqQ0EsVUFBVSxHQUFHRCxlQUFlLEtBQUssSUFB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d2VicGFjazovL19OX0UvLi9wbHVnaW5zL2FtYXppbmctc3Bpbi13aGVlbC1nYW1lL2luZGV4LmpzPzc1NWEiXSwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFdoZWVsQ29tcG9uZW50ID0gZnVuY3Rpb24gV2hlZWxDb21wb25lbnQoX3JlZikge1xuICAvLyBjb25zb2xlLmxvZyhfcmVmLnNlZ21lbnRzKTtcbiAgY29uc3Qge3Nob3VsZFdlU3Bpbiwgc2V0U2hvdWxkV2VTcGlufSA9IF9yZWY7XG4gIHZhciBzZWdtZW50cyA9IF9yZWYuc2VnbWVudHMsXG4gICAgICBzZWdDb2xvcnMgPSBfcmVmLnNlZ0NvbG9ycyxcbiAgICAgIHdpbm5pbmdTZWdtZW50ID0gX3JlZi53aW5uaW5nU2VnbWVudCxcbiAgICAgIG9uRmluaXNoZWQgPSBfcmVmLm9uRmluaXNoZWQsXG4gICAgICBfcmVmJHByaW1hcnlDb2xvciA9IF9yZWYucHJpbWFyeUNvbG9yLFxuICAgICAgcHJpbWFyeUNvbG9yID0gX3JlZiRwcmltYXJ5Q29sb3IgPT09IHZvaWQgMCA/ICdibGFjaycgOiBfcmVmJHByaW1hcnlDb2xvcixcbiAgICAgIF9yZWYkY29udHJhc3RDb2xvciA9IF9yZWYuY29udHJhc3RDb2xvcixcbiAgICAgIGNvbnRyYXN0Q29sb3IgPSBfcmVmJGNvbnRyYXN0Q29sb3IgPT09IHZvaWQgMCA/ICd3aGl0ZScgOiBfcmVmJGNvbnRyYXN0Q29sb3IsXG4gICAgICBfcmVmJGlzT25seU9uY2UgPSBfcmVmLmlzT25seU9uY2UsXG4gICAgICBpc09ubHlPbmNlID0gX3JlZiRpc09ubHlPbmNlID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRpc09ubHlPbmNlLFxuICAgICAgX3JlZiRzaXplID0gX3JlZi5zaXplLFxuICAgICAgc2l6ZSA9IF9yZWYkc2l6ZSA9PT0gdm9pZCAwID8gMjkwIDogX3JlZiRzaXplLFxuICAgICAgX3JlZiR1cER1cmF0aW9uID0gX3JlZi51cER1cmF0aW9uLFxuICAgICAgdXBEdXJhdGlvbiA9IF9yZWYkdXBEdXJhdGlvbiA9PT0gdm9pZCAwID8gMTAwIDogX3JlZiR1cER1cmF0aW9uLFxuICAgICAgX3JlZiRkb3duRHVyYXRpb24gPSBfcmVmLmRvd25EdXJhdGlvbixcbiAgICAgIGRvd25EdXJhdGlvbiA9IF9yZWYkZG93bkR1cmF0aW9uID09PSB2b2lkIDAgPyAxMDAwIDogX3JlZiRkb3duRHVyYXRpb24sXG4gICAgICBfcmVmJGZvbnRGYW1pbHkgPSBfcmVmLmZvbnRGYW1pbHksXG4gICAgICBmb250RmFtaWx5ID0gX3JlZiRmb250RmFtaWx5ID09PSB2b2lkIDAgPyAncHJveGltYS1ub3ZhJyA6IF9yZWYkZm9udEZhbWlseTtcbiAgdmFyIGN1cnJlbnRTZWdtZW50ID0gJyc7XG4gIHZhciBpc1N0YXJ0ZWQgPSBmYWxzZTtcblxuICB2YXIgX3VzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpLFxuICAgICAgaXNGaW5pc2hlZCA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldEZpbmlzaGVkID0gX3VzZVN0YXRlWzFdO1xuXG4gIHZhciB0aW1lckhhbmRsZSA9IDA7XG4gIHZhciB0aW1lckRlbGF5ID0gc2VnbWVudHMubGVuZ3RoO1xuICB2YXIgYW5nbGVDdXJyZW50ID0gMDtcbiAgdmFyIGFuZ2xlRGVsdGEgPSAwO1xuICB2YXIgY2FudmFzQ29udGV4dCA9IG51bGw7XG4gIHZhciBtYXhTcGVlZCA9IE1hdGguUEkgLyAoXCJcIiArIHNlZ21lbnRzLmxlbmd0aCk7XG4gIHZhciB1cFRpbWUgPSBzZWdtZW50cy5sZW5ndGggKiB1cER1cmF0aW9uO1xuICB2YXIgZG93blRpbWUgPSBzZWdtZW50cy5sZW5ndGggKiBkb3duRHVyYXRpb247XG4gIHZhciBzcGluU3RhcnQgPSAwO1xuICB2YXIgZnJhbWVzID0gMDtcbiAgdmFyIGNlbnRlclggPSAzMDA7XG4gIHZhciBjZW50ZXJZID0gMzAwO1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgd2hlZWxJbml0KCk7XG4gICAgLy8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAvLyB3aW5kb3cuc2Nyb2xsVG8oMCwgMSk7XG4gICAgLy8gfSwgMCk7XG4gIH0sIFtdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKHNob3VsZFdlU3Bpbikge1xuICAgICAgd2hlZWxJbml0KCk7XG4gICAgICBzcGluKCk7XG4gICAgICBzZXRTaG91bGRXZVNwaW4oZmFsc2UpO1xuICAgIH1cbiAgfSwgW3Nob3VsZFdlU3Bpbl0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihzZXNzaW9uKXtcbiAgICAgIHdoZWVsSW5pdCgpO1xuICAgIH1cbiAgICBcblxuICB9LFtzZXNzaW9uXSlcbiAgdmFyIHdoZWVsSW5pdCA9IGZ1bmN0aW9uIHdoZWVsSW5pdCgpIHtcbiAgICBpbml0Q2FudmFzKCk7XG4gICAgd2hlZWxEcmF3KCk7XG4gIH07XG5cbiAgdmFyIGluaXRDYW52YXMgPSBmdW5jdGlvbiBpbml0Q2FudmFzKCkge1xuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgY2FudmFzQ29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgLy8gdmFyIGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbiAgICAvLyBiYWNrZ3JvdW5kLnNyYyA9IFwiLi4vd2hlZWxfZnJhbWUucG5nXCI7XG4gICAgLy8gY2FudmFzQ29udGV4dC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwxMDAsMTAwLDQwMDAsMjc3MCk7ICBcblxuICAgIC8vIHZhciBzcGluQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwaW5CdG4nKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIjMzMzMzXCIpO1xuICAgIC8vIHNwaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzcGluLCBmYWxzZSk7XG4gIH07XG5cbiAgdmFyIHNwaW4gPSBmdW5jdGlvbiBzcGluKCkge1xuICAgIGlzU3RhcnRlZCA9IHRydWU7XG5cbiAgICBpZiAodGltZXJIYW5kbGUgPT09IDApIHtcbiAgICAgIHNwaW5TdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgbWF4U3BlZWQgPSBNYXRoLlBJIC8gc2VnbWVudHMubGVuZ3RoO1xuICAgICAgZnJhbWVzID0gMDtcbiAgICAgIHRpbWVySGFuZGxlID0gc2V0SW50ZXJ2YWwob25UaW1lclRpY2ssIHRpbWVyRGVsYXkpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgb25UaW1lclRpY2sgPSBmdW5jdGlvbiBvblRpbWVyVGljaygpIHtcbiAgICBmcmFtZXMrKztcbiAgICBkcmF3KCk7XG4gICAgdmFyIGR1cmF0aW9uID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzcGluU3RhcnQ7XG4gICAgdmFyIHByb2dyZXNzID0gMDtcbiAgICB2YXIgZmluaXNoZWQgPSBmYWxzZTtcblxuICAgIGlmIChkdXJhdGlvbiA8IHVwVGltZSkge1xuICAgICAgcHJvZ3Jlc3MgPSBkdXJhdGlvbiAvIHVwVGltZTtcbiAgICAgIGFuZ2xlRGVsdGEgPSBtYXhTcGVlZCAqIE1hdGguc2luKHByb2dyZXNzICogTWF0aC5QSSAvIDIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAod2lubmluZ1NlZ21lbnQpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRTZWdtZW50ID09PSB3aW5uaW5nU2VnbWVudCAmJiBmcmFtZXMgPiBzZWdtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBwcm9ncmVzcyA9IGR1cmF0aW9uIC8gdXBUaW1lO1xuICAgICAgICAgIGFuZ2xlRGVsdGEgPSBtYXhTcGVlZCAqIE1hdGguc2luKHByb2dyZXNzICogTWF0aC5QSSAvIDIgKyBNYXRoLlBJIC8gMik7XG4gICAgICAgICAgcHJvZ3Jlc3MgPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2dyZXNzID0gZHVyYXRpb24gLyBkb3duVGltZTtcbiAgICAgICAgICBhbmdsZURlbHRhID0gbWF4U3BlZWQgKiBNYXRoLnNpbihwcm9ncmVzcyAqIE1hdGguUEkgLyAyICsgTWF0aC5QSSAvIDIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9ncmVzcyA9IGR1cmF0aW9uIC8gZG93blRpbWU7XG4gICAgICAgIGFuZ2xlRGVsdGEgPSBtYXhTcGVlZCAqIE1hdGguc2luKHByb2dyZXNzICogTWF0aC5QSSAvIDIgKyBNYXRoLlBJIC8gMik7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9ncmVzcyA+PSAxKSBmaW5pc2hlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgYW5nbGVDdXJyZW50ICs9IGFuZ2xlRGVsdGE7XG5cbiAgICB3aGlsZSAoYW5nbGVDdXJyZW50ID49IE1hdGguUEkgKiAyKSB7XG4gICAgICBhbmdsZUN1cnJlbnQgLT0gTWF0aC5QSSAqIDI7XG4gICAgfVxuXG4gICAgaWYgKGZpbmlzaGVkKSB7XG4gICAgICBzZXRGaW5pc2hlZCh0cnVlKTtcbiAgICAgIG9uRmluaXNoZWQoY3VycmVudFNlZ21lbnQpO1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckhhbmRsZSk7XG4gICAgICB0aW1lckhhbmRsZSA9IDA7XG4gICAgICBhbmdsZURlbHRhID0gMDtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHdoZWVsRHJhdyA9IGZ1bmN0aW9uIHdoZWVsRHJhdygpIHtcbiAgICBjbGVhcigpO1xuICAgIGRyYXdXaGVlbCgpO1xuICAgIGRyYXdOZWVkbGUoKTtcbiAgfTtcblxuICB2YXIgZHJhdyA9IGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgY2xlYXIoKTtcbiAgICBkcmF3V2hlZWwoKTtcbiAgICBkcmF3TmVlZGxlKCk7XG4gIH07XG5cbiAgdmFyIGRyYXdTZWdtZW50ID0gZnVuY3Rpb24gZHJhd1NlZ21lbnQoa2V5LCBsYXN0QW5nbGUsIGFuZ2xlKSB7XG4gICAgdmFyIGN0eCA9IGNhbnZhc0NvbnRleHQ7XG4gICAgdmFyIHZhbHVlID0gc2VnbWVudHNba2V5XTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKGNlbnRlclgsIGNlbnRlclkpO1xuICAgIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgc2l6ZSwgbGFzdEFuZ2xlLCBhbmdsZSwgZmFsc2UpO1xuICAgIGN0eC5saW5lVG8oY2VudGVyWCwgY2VudGVyWSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBzZWdDb2xvcnNba2V5XTtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoY2VudGVyWCwgY2VudGVyWSk7XG4gICAgY3R4LnJvdGF0ZSgobGFzdEFuZ2xlICsgYW5nbGUpIC8gMik7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbnRyYXN0Q29sb3I7XG4gICAgY3R4LmZvbnQgPSAnYm9sZCAxZW0gJyArIGZvbnRGYW1pbHk7XG4gICAgY3R4LmZpbGxUZXh0KHZhbHVlLnN1YnN0cigwLCAyMSksIHNpemUgLyAyICsgMjAsIDApO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH07XG5cbiAgdmFyIGRyYXdXaGVlbCA9IGZ1bmN0aW9uIGRyYXdXaGVlbCgpIHtcbiAgICB2YXIgY3R4ID0gY2FudmFzQ29udGV4dDtcbiAgICB2YXIgbGFzdEFuZ2xlID0gYW5nbGVDdXJyZW50O1xuICAgIHZhciBsZW4gPSBzZWdtZW50cy5sZW5ndGg7XG4gICAgdmFyIFBJMiA9IE1hdGguUEkgKiAyO1xuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHByaW1hcnlDb2xvcjtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGN0eC5mb250ID0gJzFlbSAnICsgZm9udEZhbWlseTtcblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgYW5nbGUgPSBQSTIgKiAoaSAvIGxlbikgKyBhbmdsZUN1cnJlbnQ7XG4gICAgICBkcmF3U2VnbWVudChpIC0gMSwgbGFzdEFuZ2xlLCBhbmdsZSk7XG4gICAgICBsYXN0QW5nbGUgPSBhbmdsZTtcbiAgICB9XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCA1MCwgMCwgUEkyLCBmYWxzZSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBwcmltYXJ5Q29sb3I7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDEwO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbnRyYXN0Q29sb3I7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguZm9udCA9ICdib2xkIDFlbSAnICsgZm9udEZhbWlseTtcbiAgICBjdHguZmlsbFN0eWxlID0gY29udHJhc3RDb2xvcjtcbiAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgLy8gY3R4LmZpbGxUZXh0KGJ1dHRvblRleHQsIGNlbnRlclgsIGNlbnRlclkgKyAzKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgc2l6ZSwgMCwgUEkyLCBmYWxzZSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5saW5lV2lkdGggPSAxMDtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBwcmltYXJ5Q29sb3I7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9O1xuXG4gIHZhciBkcmF3TmVlZGxlID0gZnVuY3Rpb24gZHJhd05lZWRsZSgpIHtcbiAgICB2YXIgY3R4ID0gY2FudmFzQ29udGV4dDtcbiAgICAvLyBjdHgubGluZVdpZHRoID0gMTtcbiAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBjb250cmFzdENvbG9yO1xuICAgIC8vIGN0eC5maWxlU3R5bGUgPSBjb250cmFzdENvbG9yO1xuICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHgubW92ZVRvKGNlbnRlclggKyAyMCwgY2VudGVyWSAtIDUwKTtcbiAgICAvLyBjdHgubGluZVRvKGNlbnRlclggLSAyMCwgY2VudGVyWSAtIDUwKTtcbiAgICAvLyBjdHgubGluZVRvKGNlbnRlclgsIGNlbnRlclkgLSA3MCk7XG4gICAgLy8gY3R4LmNsb3NlUGF0aCgpO1xuICAgIC8vIGN0eC5maWxsKCk7XG4gICAgdmFyIGNoYW5nZSA9IGFuZ2xlQ3VycmVudCArIE1hdGguUEkgLyAyO1xuICAgIHZhciBpID0gc2VnbWVudHMubGVuZ3RoIC0gTWF0aC5mbG9vcihjaGFuZ2UgLyAoTWF0aC5QSSAqIDIpICogc2VnbWVudHMubGVuZ3RoKSAtIDE7XG4gICAgaWYgKGkgPCAwKSBpID0gaSArIHNlZ21lbnRzLmxlbmd0aDtcbiAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgIGN0eC5maWxsU3R5bGUgPSBwcmltYXJ5Q29sb3I7XG4gICAgY3R4LmZvbnQgPSAnYm9sZCAxLjVlbSAnICsgZm9udEZhbWlseTtcbiAgICBjdXJyZW50U2VnbWVudCA9IHNlZ21lbnRzW2ldO1xuICAgIGlzU3RhcnRlZCAmJiBjdHguZmlsbFRleHQoY3VycmVudFNlZ21lbnQsIGNlbnRlclggKyAxMCwgY2VudGVyWSArIHNpemUgKyA1MCk7XG4gIH07XG5cbiAgdmFyIGNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdmFyIGN0eCA9IGNhbnZhc0NvbnRleHQ7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCAxMDAwLCA4MDApO1xuICB9O1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBpZDogXCJ3aGVlbFwiLFxuICAgIHdpZHRoOiBcIjYwMFwiLFxuICAgIGhlaWdodDogXCI2MDBcIixcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiLCB7XG4gICAgaWQ6IFwiY2FudmFzXCIsXG4gICAgd2lkdGg6IFwiNjAwXCIsXG4gICAgaGVpZ2h0OiBcIjYwMFwiLFxuICAgIGNsYXNzTmFtZTpcIm14LWF1dG8gZC1ibG9jayBjYW52YXNcIixcbiAgICBzdHlsZToge1xuICAgICAgcG9pbnRlckV2ZW50czogaXNGaW5pc2hlZCAmJiBpc09ubHlPbmNlID8gJ25vbmUnIDogJ2F1dG8nXG4gICAgfVxuICB9KSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Lm1lbW8oV2hlZWxDb21wb25lbnQpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJXaGVlbENvbXBvbmVudCIsIl9yZWYiLCJzaG91bGRXZVNwaW4iLCJzZXRTaG91bGRXZVNwaW4iLCJzZWdtZW50cyIsInNlZ0NvbG9ycyIsIndpbm5pbmdTZWdtZW50Iiwib25GaW5pc2hlZCIsIl9yZWYkcHJpbWFyeUNvbG9yIiwicHJpbWFyeUNvbG9yIiwiX3JlZiRjb250cmFzdENvbG9yIiwiY29udHJhc3RDb2xvciIsIl9yZWYkaXNPbmx5T25jZSIsImlzT25seU9uY2UiLCJfcmVmJHNpemUiLCJzaXplIiwiX3JlZiR1cER1cmF0aW9uIiwidXBEdXJhdGlvbiIsIl9yZWYkZG93bkR1cmF0aW9uIiwiZG93bkR1cmF0aW9uIiwiX3JlZiRmb250RmFtaWx5IiwiZm9udEZhbWlseSIsImN1cnJlbnRTZWdtZW50IiwiaXNTdGFydGVkIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJpc0ZpbmlzaGVkIiwic2V0RmluaXNoZWQiLCJ0aW1lckhhbmRsZSIsInRpbWVyRGVsYXkiLCJsZW5ndGgiLCJhbmdsZUN1cnJlbnQiLCJhbmdsZURlbHRhIiwiY2FudmFzQ29udGV4dCIsIm1heFNwZWVkIiwiTWF0aCIsIlBJIiwidXBUaW1lIiwiZG93blRpbWUiLCJzcGluU3RhcnQiLCJmcmFtZXMiLCJjZW50ZXJYIiwiY2VudGVyWSIsInVzZUVmZmVjdCIsIndoZWVsSW5pdCIsInNwaW4iLCJzZXNzaW9uIiwiaW5pdENhbnZhcyIsIndoZWVsRHJhdyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiRGF0ZSIsImdldFRpbWUiLCJzZXRJbnRlcnZhbCIsIm9uVGltZXJUaWNrIiwiZHJhdyIsImR1cmF0aW9uIiwicHJvZ3Jlc3MiLCJmaW5pc2hlZCIsInNpbiIsImNsZWFySW50ZXJ2YWwiLCJjbGVhciIsImRyYXdXaGVlbCIsImRyYXdOZWVkbGUiLCJkcmF3U2VnbWVudCIsImtleSIsImxhc3RBbmdsZSIsImFuZ2xlIiwiY3R4IiwidmFsdWUiLCJzYXZlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiYXJjIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsInN0cm9rZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImZvbnQiLCJmaWxsVGV4dCIsInN1YnN0ciIsInJlc3RvcmUiLCJsZW4iLCJQSTIiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInRleHRCYXNlbGluZSIsInRleHRBbGlnbiIsImkiLCJjaGFuZ2UiLCJmbG9vciIsImNsZWFyUmVjdCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIndpZHRoIiwiaGVpZ2h0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1lbW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./plugins/amazing-spin-wheel-game/index.js\n");

/***/ })

});