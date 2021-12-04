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

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nvar _s = $RefreshSig$();\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar WheelComponent = function WheelComponent(_ref) {\n    _s();\n    // console.log(_ref.segments);\n    var shouldWeSpin = _ref.shouldWeSpin, setShouldWeSpin = _ref.setShouldWeSpin;\n    var segments = _ref.segments, spinSeconds = _ref.spinSeconds, segColors = _ref.segColors, winningSegment = _ref.winningSegment, onFinished = _ref.onFinished, _ref$primaryColor = _ref.primaryColor, primaryColor = _ref$primaryColor === void 0 ? 'black' : _ref$primaryColor, _ref$contrastColor = _ref.contrastColor, contrastColor = _ref$contrastColor === void 0 ? 'white' : _ref$contrastColor, _ref$isOnlyOnce = _ref.isOnlyOnce, isOnlyOnce = _ref$isOnlyOnce === void 0 ? true : _ref$isOnlyOnce, _ref$size = _ref.size, size = _ref$size === void 0 ? 290 : _ref$size, _ref$upDuration = _ref.upDuration, upDuration = _ref$upDuration === void 0 ? 100 : _ref$upDuration, _ref$downDuration = _ref.downDuration, downDuration = _ref$downDuration === void 0 ? 1000 : _ref$downDuration, _ref$fontFamily = _ref.fontFamily, fontFamily = _ref$fontFamily === void 0 ? 'proxima-nova' : _ref$fontFamily;\n    var currentSegment = '';\n    var isStarted = false;\n    var _useState = React.useState(false), isFinished = _useState[0], setFinished = _useState[1];\n    var timerHandle = 0;\n    var timerManualDelay = 50;\n    if (spinSeconds > 60) {\n        timerManualDelay = 60;\n    }\n    // spinSeconds\n    var timerDelay = segments.length < timerManualDelay ? timerManualDelay : segments.length;\n    var angleCurrent = 0;\n    var angleDelta = 0;\n    var canvasContext = null;\n    // var maxSpeed = Math.PI / (segments.length);\n    var maxSpeed = 4;\n    console.log(\"Total segments \".concat(segments.length));\n    console.log(\"Max speed \".concat(maxSpeed));\n    console.log(\"Timer delay \".concat(timerManualDelay));\n    var upTime = segments.length * upDuration;\n    var downTime = segments.length * downDuration;\n    var spinStart = 0;\n    var frames = 0;\n    var centerX = 300;\n    var centerY = 300;\n    React.useEffect(function() {\n        wheelInit();\n    }, [\n        segments\n    ]);\n    React.useEffect(function() {\n        if (shouldWeSpin) {\n            wheelInit();\n            spin();\n            setShouldWeSpin(false);\n        }\n    }, [\n        shouldWeSpin\n    ]);\n    // React.useEffect(() => {\n    //     wheelInit();\n    // },[])\n    var wheelInit = function wheelInit() {\n        initCanvas();\n        wheelDraw();\n    };\n    var initCanvas = function initCanvas() {\n        var canvas = document.getElementById('canvas');\n        canvasContext = canvas.getContext('2d');\n    // var background = new Image();\n    // background.src = \"../wheel_frame.png\";\n    // canvasContext.drawImage(background,100,100,4000,2770);  \n    // var spinBtn = document.getElementById('spinBtn');\n    // console.log(\"33333\");\n    // spinBtn.addEventListener('click', spin, false);\n    };\n    var spin = function spin() {\n        isStarted = true;\n        if (timerHandle === 0) {\n            spinStart = new Date().getTime();\n            maxSpeed = Math.PI / segments.length;\n            frames = 0;\n            timerHandle = setInterval(onTimerTick, timerDelay);\n        }\n    };\n    var onTimerTick = function onTimerTick() {\n        frames++;\n        draw();\n        var duration = new Date().getTime() - spinStart;\n        console.log(\"duration \".concat(duration));\n        var progress = 0;\n        var finished = false;\n        if (duration < upTime) {\n            progress = duration / upTime;\n            console.log(\"progress \".concat(progress));\n            console.log(\"upTime \".concat(upTime));\n            angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2);\n        } else {\n            if (winningSegment) {\n                if (currentSegment === winningSegment && frames > segments.length) {\n                    progress = duration / upTime;\n                    angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);\n                    progress = 1;\n                } else {\n                    progress = duration / downTime;\n                    angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);\n                }\n            } else {\n                progress = duration / downTime;\n                angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);\n            }\n            if (progress >= 1) finished = true;\n            console.log(\"progress \".concat(progress));\n        }\n        angleCurrent += angleDelta;\n        while(angleCurrent >= Math.PI * 2){\n            angleCurrent -= Math.PI * 2;\n        }\n        if (finished) {\n            setFinished(true);\n            onFinished(currentSegment);\n            clearInterval(timerHandle);\n            timerHandle = 0;\n            angleDelta = 0;\n        }\n    };\n    var wheelDraw = function wheelDraw() {\n        clear();\n        drawWheel();\n        drawNeedle();\n    };\n    var draw = function draw() {\n        clear();\n        drawWheel();\n        drawNeedle();\n    };\n    var drawSegment = function drawSegment(key, lastAngle, angle) {\n        var ctx = canvasContext;\n        var value = segments[key];\n        ctx.save();\n        ctx.beginPath();\n        ctx.moveTo(centerX, centerY);\n        ctx.arc(centerX, centerY, size, lastAngle, angle, false);\n        ctx.lineTo(centerX, centerY);\n        ctx.closePath();\n        ctx.fillStyle = segColors[key];\n        ctx.fill();\n        ctx.stroke();\n        ctx.save();\n        ctx.translate(centerX, centerY);\n        ctx.rotate((lastAngle + angle) / 2);\n        ctx.fillStyle = contrastColor;\n        ctx.font = 'bold 1em ' + fontFamily;\n        ctx.fillText(value.substr(0, 21), size / 2 + 20, 0);\n        ctx.restore();\n    };\n    var drawWheel = function drawWheel() {\n        var ctx = canvasContext;\n        var lastAngle = angleCurrent;\n        var len = segments.length;\n        var PI2 = Math.PI * 2;\n        ctx.lineWidth = 1;\n        ctx.strokeStyle = primaryColor;\n        ctx.textBaseline = 'middle';\n        ctx.textAlign = 'center';\n        ctx.font = '1em ' + fontFamily;\n        for(var i = 1; i <= len; i++){\n            var angle = PI2 * (i / len) + angleCurrent;\n            drawSegment(i - 1, lastAngle, angle);\n            lastAngle = angle;\n        }\n        ctx.beginPath();\n        ctx.arc(centerX, centerY, 50, 0, PI2, false);\n        ctx.closePath();\n        ctx.fillStyle = primaryColor;\n        ctx.lineWidth = 10;\n        ctx.strokeStyle = contrastColor;\n        ctx.fill();\n        ctx.font = 'bold 1em ' + fontFamily;\n        ctx.fillStyle = contrastColor;\n        ctx.textAlign = 'center';\n        // ctx.fillText(buttonText, centerX, centerY + 3);\n        ctx.stroke();\n    // ctx.beginPath();\n    // ctx.arc(centerX, centerY, size, 0, PI2, false);\n    // ctx.closePath();\n    // ctx.lineWidth = 10;\n    // ctx.strokeStyle = primaryColor;\n    // ctx.stroke();\n    };\n    var drawNeedle = function drawNeedle() {\n        var ctx = canvasContext;\n        // ctx.lineWidth = 1;\n        // ctx.strokeStyle = contrastColor;\n        // ctx.fileStyle = contrastColor;\n        // ctx.beginPath();\n        // ctx.moveTo(centerX + 20, centerY - 50);\n        // ctx.lineTo(centerX - 20, centerY - 50);\n        // ctx.lineTo(centerX, centerY - 70);\n        // ctx.closePath();\n        // ctx.fill();\n        var change = angleCurrent + Math.PI / 2;\n        var i = segments.length - Math.floor(change / (Math.PI * 2) * segments.length) - 1;\n        if (i < 0) i = i + segments.length;\n        ctx.textAlign = 'center';\n        ctx.textBaseline = 'middle';\n        ctx.fillStyle = primaryColor;\n        ctx.font = 'bold 1.5em ' + fontFamily;\n        currentSegment = segments[i];\n        isStarted && ctx.fillText(currentSegment, centerX + 10, centerY + size + 50);\n    };\n    var clear = function clear() {\n        var ctx = canvasContext;\n        ctx.clearRect(0, 0, 1000, 800);\n    };\n    return React.createElement(\"div\", {\n        id: \"wheel\"\n    }, React.createElement(\"canvas\", {\n        id: \"canvas\",\n        width: \"590\",\n        height: \"590\",\n        className: \"mx-auto d-block canvas\",\n        style: {\n            marginTop: \"42px\",\n            marginLeft: \"39px\",\n            pointerEvents: isFinished && isOnlyOnce ? 'none' : 'auto'\n        }\n    }));\n};\n_s(WheelComponent, \"n0lOH0o3qw0LG+gxsqBckm1jbno=\");\n_c = WheelComponent;\nmodule.exports = React.memo(WheelComponent);\nvar _c;\n$RefreshReg$(_c, \"WheelComponent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbHVnaW5zL2FtYXppbmctc3Bpbi13aGVlbC1nYW1lL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBLEdBQUcsQ0FBQ0EsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFPO0FBQzNCLEdBQUcsQ0FBQ0MsY0FBYyxHQUFHLFFBQVEsQ0FBQ0EsY0FBYyxDQUFDQyxJQUFJLEVBQUUsQ0FBQzs7SUFDbEQsRUFBOEI7SUFDOUIsR0FBSyxDQUFFQyxZQUFZLEdBQXFCRCxJQUFJLENBQXJDQyxZQUFZLEVBQUVDLGVBQWUsR0FBSUYsSUFBSSxDQUF2QkUsZUFBZTtJQUVwQyxHQUFHLENBQUNDLFFBQVEsR0FBR0gsSUFBSSxDQUFDRyxRQUFRLEVBQ3hCQyxXQUFXLEdBQUdKLElBQUksQ0FBQ0ksV0FBVyxFQUM5QkMsU0FBUyxHQUFHTCxJQUFJLENBQUNLLFNBQVMsRUFDMUJDLGNBQWMsR0FBR04sSUFBSSxDQUFDTSxjQUFjLEVBQ3BDQyxVQUFVLEdBQUdQLElBQUksQ0FBQ08sVUFBVSxFQUM1QkMsaUJBQWlCLEdBQUdSLElBQUksQ0FBQ1MsWUFBWSxFQUNyQ0EsWUFBWSxHQUFHRCxpQkFBaUIsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQU8sU0FBR0EsaUJBQWlCLEVBQ3pFRSxrQkFBa0IsR0FBR1YsSUFBSSxDQUFDVyxhQUFhLEVBQ3ZDQSxhQUFhLEdBQUdELGtCQUFrQixLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBTyxTQUFHQSxrQkFBa0IsRUFDNUVFLGVBQWUsR0FBR1osSUFBSSxDQUFDYSxVQUFVLEVBQ2pDQSxVQUFVLEdBQUdELGVBQWUsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBR0EsZUFBZSxFQUNoRUUsU0FBUyxHQUFHZCxJQUFJLENBQUNlLElBQUksRUFDckJBLElBQUksR0FBR0QsU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHQSxTQUFTLEVBQzdDRSxlQUFlLEdBQUdoQixJQUFJLENBQUNpQixV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LEVBQUMsQ0FBd0I7UUFDbENDLEtBQUssRUFBRSxDQUFDO1lBQ05DLFNBQVMsRUFBRSxDQUFNO1lBQ2pCQyxVQUFVLEVBQUUsQ0FBTTtZQUNsQkMsYUFBYSxFQUFFakYsVUFBVSxJQUFJYixVQUFVLEdBQUcsQ0FBTSxRQUFHLENBQU07UUFDM0QsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0dBL1BHZCxjQUFjO0tBQWRBLGNBQWM7QUFpUWxCNkcsTUFBTSxDQUFDQyxPQUFPLEdBQUdoSCxLQUFLLENBQUNpSCxJQUFJLENBQUMvRyxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BsdWdpbnMvYW1hemluZy1zcGluLXdoZWVsLWdhbWUvaW5kZXguanM/NzU1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFdoZWVsQ29tcG9uZW50ID0gZnVuY3Rpb24gV2hlZWxDb21wb25lbnQoX3JlZikge1xuICAvLyBjb25zb2xlLmxvZyhfcmVmLnNlZ21lbnRzKTtcbiAgY29uc3Qge3Nob3VsZFdlU3Bpbiwgc2V0U2hvdWxkV2VTcGlufSA9IF9yZWY7XG5cbiAgdmFyIHNlZ21lbnRzID0gX3JlZi5zZWdtZW50cyxcbiAgICAgIHNwaW5TZWNvbmRzID0gX3JlZi5zcGluU2Vjb25kcyxcbiAgICAgIHNlZ0NvbG9ycyA9IF9yZWYuc2VnQ29sb3JzLFxuICAgICAgd2lubmluZ1NlZ21lbnQgPSBfcmVmLndpbm5pbmdTZWdtZW50LFxuICAgICAgb25GaW5pc2hlZCA9IF9yZWYub25GaW5pc2hlZCxcbiAgICAgIF9yZWYkcHJpbWFyeUNvbG9yID0gX3JlZi5wcmltYXJ5Q29sb3IsXG4gICAgICBwcmltYXJ5Q29sb3IgPSBfcmVmJHByaW1hcnlDb2xvciA9PT0gdm9pZCAwID8gJ2JsYWNrJyA6IF9yZWYkcHJpbWFyeUNvbG9yLFxuICAgICAgX3JlZiRjb250cmFzdENvbG9yID0gX3JlZi5jb250cmFzdENvbG9yLFxuICAgICAgY29udHJhc3RDb2xvciA9IF9yZWYkY29udHJhc3RDb2xvciA9PT0gdm9pZCAwID8gJ3doaXRlJyA6IF9yZWYkY29udHJhc3RDb2xvcixcbiAgICAgIF9yZWYkaXNPbmx5T25jZSA9IF9yZWYuaXNPbmx5T25jZSxcbiAgICAgIGlzT25seU9uY2UgPSBfcmVmJGlzT25seU9uY2UgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJGlzT25seU9uY2UsXG4gICAgICBfcmVmJHNpemUgPSBfcmVmLnNpemUsXG4gICAgICBzaXplID0gX3JlZiRzaXplID09PSB2b2lkIDAgPyAyOTAgOiBfcmVmJHNpemUsXG4gICAgICBfcmVmJHVwRHVyYXRpb24gPSBfcmVmLnVwRHVyYXRpb24sXG4gICAgICB1cER1cmF0aW9uID0gX3JlZiR1cER1cmF0aW9uID09PSB2b2lkIDAgPyAxMDAgOiBfcmVmJHVwRHVyYXRpb24sXG4gICAgICBfcmVmJGRvd25EdXJhdGlvbiA9IF9yZWYuZG93bkR1cmF0aW9uLFxuICAgICAgZG93bkR1cmF0aW9uID0gX3JlZiRkb3duRHVyYXRpb24gPT09IHZvaWQgMCA/IDEwMDAgOiBfcmVmJGRvd25EdXJhdGlvbixcbiAgICAgIF9yZWYkZm9udEZhbWlseSA9IF9yZWYuZm9udEZhbWlseSxcbiAgICAgIGZvbnRGYW1pbHkgPSBfcmVmJGZvbnRGYW1pbHkgPT09IHZvaWQgMCA/ICdwcm94aW1hLW5vdmEnIDogX3JlZiRmb250RmFtaWx5O1xuICB2YXIgY3VycmVudFNlZ21lbnQgPSAnJztcbiAgdmFyIGlzU3RhcnRlZCA9IGZhbHNlO1xuXG4gIHZhciBfdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksXG4gICAgICBpc0ZpbmlzaGVkID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0RmluaXNoZWQgPSBfdXNlU3RhdGVbMV07XG5cbiAgdmFyIHRpbWVySGFuZGxlID0gMFxuICB2YXIgdGltZXJNYW51YWxEZWxheSA9IDUwXG4gIGlmKHNwaW5TZWNvbmRzID4gNjApe1xuICAgIHRpbWVyTWFudWFsRGVsYXkgPSA2MFxuICB9XG4gIC8vIHNwaW5TZWNvbmRzXG4gIHZhciB0aW1lckRlbGF5ID0gKHNlZ21lbnRzLmxlbmd0aCA8IHRpbWVyTWFudWFsRGVsYXkgID8gdGltZXJNYW51YWxEZWxheSA6IHNlZ21lbnRzLmxlbmd0aCk7XG4gIHZhciBhbmdsZUN1cnJlbnQgPSAwXG4gIHZhciBhbmdsZURlbHRhID0gMFxuICB2YXIgY2FudmFzQ29udGV4dCA9IG51bGxcbiAgLy8gdmFyIG1heFNwZWVkID0gTWF0aC5QSSAvIChzZWdtZW50cy5sZW5ndGgpO1xuICB2YXIgbWF4U3BlZWQgPSA0XG4gIGNvbnNvbGUubG9nKGBUb3RhbCBzZWdtZW50cyAke3NlZ21lbnRzLmxlbmd0aH1gKVxuICBjb25zb2xlLmxvZyhgTWF4IHNwZWVkICR7bWF4U3BlZWR9YClcbiAgY29uc29sZS5sb2coYFRpbWVyIGRlbGF5ICR7dGltZXJNYW51YWxEZWxheX1gKVxuICB2YXIgdXBUaW1lID0gc2VnbWVudHMubGVuZ3RoICogdXBEdXJhdGlvblxuICB2YXIgZG93blRpbWUgPSBzZWdtZW50cy5sZW5ndGggKiBkb3duRHVyYXRpb25cbiAgdmFyIHNwaW5TdGFydCA9IDBcbiAgdmFyIGZyYW1lcyA9IDBcbiAgdmFyIGNlbnRlclggPSAzMDBcbiAgdmFyIGNlbnRlclkgPSAzMDBcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHdoZWVsSW5pdCgpO1xuICB9LCBbc2VnbWVudHNdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKHNob3VsZFdlU3Bpbikge1xuICAgICAgd2hlZWxJbml0KCk7XG4gICAgICBzcGluKCk7XG4gICAgICBzZXRTaG91bGRXZVNwaW4oZmFsc2UpO1xuICAgIH1cbiAgfSwgW3Nob3VsZFdlU3Bpbl0pXG5cbiAgLy8gUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgIHdoZWVsSW5pdCgpO1xuICAvLyB9LFtdKVxuXG4gIHZhciB3aGVlbEluaXQgPSBmdW5jdGlvbiB3aGVlbEluaXQoKSB7XG4gICAgaW5pdENhbnZhcygpO1xuICAgIHdoZWVsRHJhdygpO1xuICB9O1xuXG4gIHZhciBpbml0Q2FudmFzID0gZnVuY3Rpb24gaW5pdENhbnZhcygpIHtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgIGNhbnZhc0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIC8vIHZhciBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4gICAgLy8gYmFja2dyb3VuZC5zcmMgPSBcIi4uL3doZWVsX2ZyYW1lLnBuZ1wiO1xuICAgIC8vIGNhbnZhc0NvbnRleHQuZHJhd0ltYWdlKGJhY2tncm91bmQsMTAwLDEwMCw0MDAwLDI3NzApOyAgXG5cbiAgICAvLyB2YXIgc3BpbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGluQnRuJyk7XG4gICAgLy8gY29uc29sZS5sb2coXCIzMzMzM1wiKTtcbiAgICAvLyBzcGluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3BpbiwgZmFsc2UpO1xuICB9O1xuXG4gIHZhciBzcGluID0gZnVuY3Rpb24gc3BpbigpIHtcbiAgICBpc1N0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRpbWVySGFuZGxlID09PSAwKSB7XG4gICAgICBzcGluU3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIG1heFNwZWVkID0gTWF0aC5QSSAvIHNlZ21lbnRzLmxlbmd0aDtcbiAgICAgIGZyYW1lcyA9IDA7XG4gICAgICB0aW1lckhhbmRsZSA9IHNldEludGVydmFsKG9uVGltZXJUaWNrLCB0aW1lckRlbGF5KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIG9uVGltZXJUaWNrID0gZnVuY3Rpb24gb25UaW1lclRpY2soKSB7XG4gICAgZnJhbWVzKys7XG4gICAgZHJhdygpO1xuICAgIHZhciBkdXJhdGlvbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3BpblN0YXJ0O1xuICAgIGNvbnNvbGUubG9nKGBkdXJhdGlvbiAke2R1cmF0aW9ufWApO1xuICAgIHZhciBwcm9ncmVzcyA9IDA7XG4gICAgdmFyIGZpbmlzaGVkID0gZmFsc2U7XG5cbiAgICBpZiAoZHVyYXRpb24gPCB1cFRpbWUpIHtcblxuICAgICAgcHJvZ3Jlc3MgPSBkdXJhdGlvbiAvIHVwVGltZTtcbiAgICAgIGNvbnNvbGUubG9nKGBwcm9ncmVzcyAke3Byb2dyZXNzfWApXG4gICAgICBjb25zb2xlLmxvZyhgdXBUaW1lICR7dXBUaW1lfWApXG4gICAgICBhbmdsZURlbHRhID0gbWF4U3BlZWQgKiBNYXRoLnNpbihwcm9ncmVzcyAqIE1hdGguUEkgLyAyKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAod2lubmluZ1NlZ21lbnQpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRTZWdtZW50ID09PSB3aW5uaW5nU2VnbWVudCAmJiBmcmFtZXMgPiBzZWdtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBwcm9ncmVzcyA9IGR1cmF0aW9uIC8gdXBUaW1lO1xuICAgICAgICAgIGFuZ2xlRGVsdGEgPSBtYXhTcGVlZCAqIE1hdGguc2luKHByb2dyZXNzICogTWF0aC5QSSAvIDIgKyBNYXRoLlBJIC8gMik7XG4gICAgICAgICAgcHJvZ3Jlc3MgPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2dyZXNzID0gZHVyYXRpb24gLyBkb3duVGltZTtcbiAgICAgICAgICBhbmdsZURlbHRhID0gbWF4U3BlZWQgKiBNYXRoLnNpbihwcm9ncmVzcyAqIE1hdGguUEkgLyAyICsgTWF0aC5QSSAvIDIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9ncmVzcyA9IGR1cmF0aW9uIC8gZG93blRpbWU7XG4gICAgICAgIGFuZ2xlRGVsdGEgPSBtYXhTcGVlZCAqIE1hdGguc2luKHByb2dyZXNzICogTWF0aC5QSSAvIDIgKyBNYXRoLlBJIC8gMik7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9ncmVzcyA+PSAxKSBmaW5pc2hlZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmxvZyhgcHJvZ3Jlc3MgJHtwcm9ncmVzc31gKTtcbiAgICB9XG5cbiAgICBhbmdsZUN1cnJlbnQgKz0gYW5nbGVEZWx0YTtcbiAgICB3aGlsZSAoYW5nbGVDdXJyZW50ID49IE1hdGguUEkgKiAyKSB7XG4gICAgICBhbmdsZUN1cnJlbnQgLT0gTWF0aC5QSSAqIDI7XG4gICAgfVxuXG4gICAgaWYgKGZpbmlzaGVkKSB7XG4gICAgICBzZXRGaW5pc2hlZCh0cnVlKTtcbiAgICAgIG9uRmluaXNoZWQoY3VycmVudFNlZ21lbnQpO1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckhhbmRsZSk7XG4gICAgICB0aW1lckhhbmRsZSA9IDA7XG4gICAgICBhbmdsZURlbHRhID0gMDtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHdoZWVsRHJhdyA9IGZ1bmN0aW9uIHdoZWVsRHJhdygpIHtcbiAgICBjbGVhcigpO1xuICAgIGRyYXdXaGVlbCgpO1xuICAgIGRyYXdOZWVkbGUoKTtcbiAgfTtcblxuICB2YXIgZHJhdyA9IGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgY2xlYXIoKTtcbiAgICBkcmF3V2hlZWwoKTtcbiAgICBkcmF3TmVlZGxlKCk7XG4gIH07XG5cbiAgdmFyIGRyYXdTZWdtZW50ID0gZnVuY3Rpb24gZHJhd1NlZ21lbnQoa2V5LCBsYXN0QW5nbGUsIGFuZ2xlKSB7XG4gICAgdmFyIGN0eCA9IGNhbnZhc0NvbnRleHQ7XG4gICAgdmFyIHZhbHVlID0gc2VnbWVudHNba2V5XTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKGNlbnRlclgsIGNlbnRlclkpO1xuICAgIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgc2l6ZSwgbGFzdEFuZ2xlLCBhbmdsZSwgZmFsc2UpO1xuICAgIGN0eC5saW5lVG8oY2VudGVyWCwgY2VudGVyWSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBzZWdDb2xvcnNba2V5XTtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoY2VudGVyWCwgY2VudGVyWSk7XG4gICAgY3R4LnJvdGF0ZSgobGFzdEFuZ2xlICsgYW5nbGUpIC8gMik7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbnRyYXN0Q29sb3I7XG4gICAgY3R4LmZvbnQgPSAnYm9sZCAxZW0gJyArIGZvbnRGYW1pbHk7XG4gICAgY3R4LmZpbGxUZXh0KHZhbHVlLnN1YnN0cigwLCAyMSksIHNpemUgLyAyICsgMjAsIDApO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH07XG5cbiAgdmFyIGRyYXdXaGVlbCA9IGZ1bmN0aW9uIGRyYXdXaGVlbCgpIHtcbiAgICB2YXIgY3R4ID0gY2FudmFzQ29udGV4dDtcbiAgICB2YXIgbGFzdEFuZ2xlID0gYW5nbGVDdXJyZW50O1xuICAgIHZhciBsZW4gPSBzZWdtZW50cy5sZW5ndGg7XG4gICAgdmFyIFBJMiA9IE1hdGguUEkgKiAyO1xuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHByaW1hcnlDb2xvcjtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGN0eC5mb250ID0gJzFlbSAnICsgZm9udEZhbWlseTtcblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgYW5nbGUgPSBQSTIgKiAoaSAvIGxlbikgKyBhbmdsZUN1cnJlbnQ7XG4gICAgICBkcmF3U2VnbWVudChpIC0gMSwgbGFzdEFuZ2xlLCBhbmdsZSk7XG4gICAgICBsYXN0QW5nbGUgPSBhbmdsZTtcbiAgICB9XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhjZW50ZXJYLCBjZW50ZXJZLCA1MCwgMCwgUEkyLCBmYWxzZSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBwcmltYXJ5Q29sb3I7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDEwO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbnRyYXN0Q29sb3I7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguZm9udCA9ICdib2xkIDFlbSAnICsgZm9udEZhbWlseTtcbiAgICBjdHguZmlsbFN0eWxlID0gY29udHJhc3RDb2xvcjtcbiAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgLy8gY3R4LmZpbGxUZXh0KGJ1dHRvblRleHQsIGNlbnRlclgsIGNlbnRlclkgKyAzKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuICAgIC8vIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgc2l6ZSwgMCwgUEkyLCBmYWxzZSk7XG4gICAgLy8gY3R4LmNsb3NlUGF0aCgpO1xuICAgIC8vIGN0eC5saW5lV2lkdGggPSAxMDtcbiAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBwcmltYXJ5Q29sb3I7XG4gICAgLy8gY3R4LnN0cm9rZSgpO1xuICB9O1xuXG4gIHZhciBkcmF3TmVlZGxlID0gZnVuY3Rpb24gZHJhd05lZWRsZSgpIHtcbiAgICB2YXIgY3R4ID0gY2FudmFzQ29udGV4dDtcbiAgICAvLyBjdHgubGluZVdpZHRoID0gMTtcbiAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBjb250cmFzdENvbG9yO1xuICAgIC8vIGN0eC5maWxlU3R5bGUgPSBjb250cmFzdENvbG9yO1xuICAgIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHgubW92ZVRvKGNlbnRlclggKyAyMCwgY2VudGVyWSAtIDUwKTtcbiAgICAvLyBjdHgubGluZVRvKGNlbnRlclggLSAyMCwgY2VudGVyWSAtIDUwKTtcbiAgICAvLyBjdHgubGluZVRvKGNlbnRlclgsIGNlbnRlclkgLSA3MCk7XG4gICAgLy8gY3R4LmNsb3NlUGF0aCgpO1xuICAgIC8vIGN0eC5maWxsKCk7XG4gICAgdmFyIGNoYW5nZSA9IGFuZ2xlQ3VycmVudCArIE1hdGguUEkgLyAyO1xuICAgIHZhciBpID0gc2VnbWVudHMubGVuZ3RoIC0gTWF0aC5mbG9vcihjaGFuZ2UgLyAoTWF0aC5QSSAqIDIpICogc2VnbWVudHMubGVuZ3RoKSAtIDE7XG4gICAgaWYgKGkgPCAwKSBpID0gaSArIHNlZ21lbnRzLmxlbmd0aDtcbiAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgIGN0eC5maWxsU3R5bGUgPSBwcmltYXJ5Q29sb3I7XG4gICAgY3R4LmZvbnQgPSAnYm9sZCAxLjVlbSAnICsgZm9udEZhbWlseTtcbiAgICBjdXJyZW50U2VnbWVudCA9IHNlZ21lbnRzW2ldO1xuICAgIGlzU3RhcnRlZCAmJiBjdHguZmlsbFRleHQoY3VycmVudFNlZ21lbnQsIGNlbnRlclggKyAxMCwgY2VudGVyWSArIHNpemUgKyA1MCk7XG4gIH07XG5cbiAgdmFyIGNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdmFyIGN0eCA9IGNhbnZhc0NvbnRleHQ7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCAxMDAwLCA4MDApO1xuICB9O1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBpZDogXCJ3aGVlbFwiLFxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIsIHtcbiAgICBpZDogXCJjYW52YXNcIixcbiAgICB3aWR0aDogXCI1OTBcIixcbiAgICBoZWlnaHQ6IFwiNTkwXCIsXG4gICAgXG4gICAgY2xhc3NOYW1lOlwibXgtYXV0byBkLWJsb2NrIGNhbnZhc1wiLFxuICAgIHN0eWxlOiB7XG4gICAgICBtYXJnaW5Ub3A6IFwiNDJweFwiLFxuICAgICAgbWFyZ2luTGVmdDogXCIzOXB4XCIsXG4gICAgICBwb2ludGVyRXZlbnRzOiBpc0ZpbmlzaGVkICYmIGlzT25seU9uY2UgPyAnbm9uZScgOiAnYXV0bydcbiAgICB9XG4gIH0pKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QubWVtbyhXaGVlbENvbXBvbmVudCk7Il0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIldoZWVsQ29tcG9uZW50IiwiX3JlZiIsInNob3VsZFdlU3BpbiIsInNldFNob3VsZFdlU3BpbiIsInNlZ21lbnRzIiwic3BpblNlY29uZHMiLCJzZWdDb2xvcnMiLCJ3aW5uaW5nU2VnbWVudCIsIm9uRmluaXNoZWQiLCJfcmVmJHByaW1hcnlDb2xvciIsInByaW1hcnlDb2xvciIsIl9yZWYkY29udHJhc3RDb2xvciIsImNvbnRyYXN0Q29sb3IiLCJfcmVmJGlzT25seU9uY2UiLCJpc09ubHlPbmNlIiwiX3JlZiRzaXplIiwic2l6ZSIsIl9yZWYkdXBEdXJhdGlvbiIsInVwRHVyYXRpb24iLCJfcmVmJGRvd25EdXJhdGlvbiIsImRvd25EdXJhdGlvbiIsIl9yZWYkZm9udEZhbWlseSIsImZvbnRGYW1pbHkiLCJjdXJyZW50U2VnbWVudCIsImlzU3RhcnRlZCIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiaXNGaW5pc2hlZCIsInNldEZpbmlzaGVkIiwidGltZXJIYW5kbGUiLCJ0aW1lck1hbnVhbERlbGF5IiwidGltZXJEZWxheSIsImxlbmd0aCIsImFuZ2xlQ3VycmVudCIsImFuZ2xlRGVsdGEiLCJjYW52YXNDb250ZXh0IiwibWF4U3BlZWQiLCJjb25zb2xlIiwibG9nIiwidXBUaW1lIiwiZG93blRpbWUiLCJzcGluU3RhcnQiLCJmcmFtZXMiLCJjZW50ZXJYIiwiY2VudGVyWSIsInVzZUVmZmVjdCIsIndoZWVsSW5pdCIsInNwaW4iLCJpbml0Q2FudmFzIiwid2hlZWxEcmF3IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJEYXRlIiwiZ2V0VGltZSIsIk1hdGgiLCJQSSIsInNldEludGVydmFsIiwib25UaW1lclRpY2siLCJkcmF3IiwiZHVyYXRpb24iLCJwcm9ncmVzcyIsImZpbmlzaGVkIiwic2luIiwiY2xlYXJJbnRlcnZhbCIsImNsZWFyIiwiZHJhd1doZWVsIiwiZHJhd05lZWRsZSIsImRyYXdTZWdtZW50Iiwia2V5IiwibGFzdEFuZ2xlIiwiYW5nbGUiLCJjdHgiLCJ2YWx1ZSIsInNhdmUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJhcmMiLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsIiwic3Ryb2tlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiZm9udCIsImZpbGxUZXh0Iiwic3Vic3RyIiwicmVzdG9yZSIsImxlbiIsIlBJMiIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwidGV4dEJhc2VsaW5lIiwidGV4dEFsaWduIiwiaSIsImNoYW5nZSIsImZsb29yIiwiY2xlYXJSZWN0IiwiY3JlYXRlRWxlbWVudCIsImlkIiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJwb2ludGVyRXZlbnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1lbW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./plugins/amazing-spin-wheel-game/index.js\n");

/***/ })

});