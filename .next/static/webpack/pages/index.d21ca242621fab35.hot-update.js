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

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nvar _s = $RefreshSig$();\nvar React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar WheelComponent = function WheelComponent(_ref) {\n    _s();\n    // console.log(_ref.segments);\n    var shouldISpin = _ref.shouldISpin;\n    var segments = _ref.segments, segColors = _ref.segColors, winningSegment = _ref.winningSegment, onFinished = _ref.onFinished, _ref$primaryColor = _ref.primaryColor, primaryColor = _ref$primaryColor === void 0 ? 'black' : _ref$primaryColor, _ref$contrastColor = _ref.contrastColor, contrastColor = _ref$contrastColor === void 0 ? 'white' : _ref$contrastColor, _ref$isOnlyOnce = _ref.isOnlyOnce, isOnlyOnce = _ref$isOnlyOnce === void 0 ? true : _ref$isOnlyOnce, _ref$size = _ref.size, size = _ref$size === void 0 ? 290 : _ref$size, _ref$upDuration = _ref.upDuration, upDuration = _ref$upDuration === void 0 ? 100 : _ref$upDuration, _ref$downDuration = _ref.downDuration, downDuration = _ref$downDuration === void 0 ? 1000 : _ref$downDuration, _ref$fontFamily = _ref.fontFamily, fontFamily = _ref$fontFamily === void 0 ? 'proxima-nova' : _ref$fontFamily;\n    var currentSegment = '';\n    var isStarted = false;\n    var _useState = React.useState(false), isFinished = _useState[0], setFinished = _useState[1];\n    var timerHandle = 0;\n    var timerDelay = segments.length;\n    var angleCurrent = 0;\n    var angleDelta = 0;\n    var canvasContext = null;\n    var maxSpeed = Math.PI / (\"\" + segments.length);\n    var upTime = segments.length * upDuration;\n    var downTime = segments.length * downDuration;\n    var spinStart = 0;\n    var frames = 0;\n    var centerX = 300;\n    var centerY = 300;\n    React.useEffect(function() {\n        wheelInit();\n    // setTimeout(function () {\n    //   // window.scrollTo(0, 1);\n    // }, 0);\n    }, []);\n    useEffect(function() {\n        if (shouldISpin) {\n            spin();\n            setSpin(false);\n        }\n    }, [\n        shouldISpin\n    ]);\n    var wheelInit = function wheelInit() {\n        initCanvas();\n        wheelDraw();\n    };\n    var initCanvas = function initCanvas() {\n        var canvas = document.getElementById('canvas');\n        canvasContext = canvas.getContext('2d');\n    // var background = new Image();\n    // background.src = \"../wheel_frame.png\";\n    // canvasContext.drawImage(background,100,100,4000,2770);  \n    // var spinBtn = document.getElementById('spinBtn');\n    // console.log(\"33333\");\n    // spinBtn.addEventListener('click', spin, false);\n    };\n    var spin = function spin() {\n        isStarted = true;\n        if (timerHandle === 0) {\n            spinStart = new Date().getTime();\n            maxSpeed = Math.PI / segments.length;\n            frames = 0;\n            timerHandle = setInterval(onTimerTick, timerDelay);\n        }\n    };\n    var onTimerTick = function onTimerTick() {\n        frames++;\n        draw();\n        var duration = new Date().getTime() - spinStart;\n        var progress = 0;\n        var finished = false;\n        if (duration < upTime) {\n            progress = duration / upTime;\n            angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2);\n        } else {\n            if (winningSegment) {\n                if (currentSegment === winningSegment && frames > segments.length) {\n                    progress = duration / upTime;\n                    angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);\n                    progress = 1;\n                } else {\n                    progress = duration / downTime;\n                    angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);\n                }\n            } else {\n                progress = duration / downTime;\n                angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);\n            }\n            if (progress >= 1) finished = true;\n        }\n        angleCurrent += angleDelta;\n        while(angleCurrent >= Math.PI * 2){\n            angleCurrent -= Math.PI * 2;\n        }\n        if (finished) {\n            setFinished(true);\n            onFinished(currentSegment);\n            clearInterval(timerHandle);\n            timerHandle = 0;\n            angleDelta = 0;\n        }\n    };\n    var wheelDraw = function wheelDraw() {\n        clear();\n        drawWheel();\n        drawNeedle();\n    };\n    var draw = function draw() {\n        clear();\n        drawWheel();\n        drawNeedle();\n    };\n    var drawSegment = function drawSegment(key, lastAngle, angle) {\n        var ctx = canvasContext;\n        var value = segments[key];\n        ctx.save();\n        ctx.beginPath();\n        ctx.moveTo(centerX, centerY);\n        ctx.arc(centerX, centerY, size, lastAngle, angle, false);\n        ctx.lineTo(centerX, centerY);\n        ctx.closePath();\n        ctx.fillStyle = segColors[key];\n        ctx.fill();\n        ctx.stroke();\n        ctx.save();\n        ctx.translate(centerX, centerY);\n        ctx.rotate((lastAngle + angle) / 2);\n        ctx.fillStyle = contrastColor;\n        ctx.font = 'bold 1em ' + fontFamily;\n        ctx.fillText(value.substr(0, 21), size / 2 + 20, 0);\n        ctx.restore();\n    };\n    var drawWheel = function drawWheel() {\n        var ctx = canvasContext;\n        var lastAngle = angleCurrent;\n        var len = segments.length;\n        var PI2 = Math.PI * 2;\n        ctx.lineWidth = 1;\n        ctx.strokeStyle = primaryColor;\n        ctx.textBaseline = 'middle';\n        ctx.textAlign = 'center';\n        ctx.font = '1em ' + fontFamily;\n        for(var i = 1; i <= len; i++){\n            var angle = PI2 * (i / len) + angleCurrent;\n            drawSegment(i - 1, lastAngle, angle);\n            lastAngle = angle;\n        }\n        ctx.beginPath();\n        ctx.arc(centerX, centerY, 50, 0, PI2, false);\n        ctx.closePath();\n        ctx.fillStyle = primaryColor;\n        ctx.lineWidth = 10;\n        ctx.strokeStyle = contrastColor;\n        ctx.fill();\n        ctx.font = 'bold 1em ' + fontFamily;\n        ctx.fillStyle = contrastColor;\n        ctx.textAlign = 'center';\n        // ctx.fillText(buttonText, centerX, centerY + 3);\n        ctx.stroke();\n        ctx.beginPath();\n        ctx.arc(centerX, centerY, size, 0, PI2, false);\n        ctx.closePath();\n        ctx.lineWidth = 10;\n        ctx.strokeStyle = primaryColor;\n        ctx.stroke();\n    };\n    var drawNeedle = function drawNeedle() {\n        var ctx = canvasContext;\n        // ctx.lineWidth = 1;\n        // ctx.strokeStyle = contrastColor;\n        // ctx.fileStyle = contrastColor;\n        // ctx.beginPath();\n        // ctx.moveTo(centerX + 20, centerY - 50);\n        // ctx.lineTo(centerX - 20, centerY - 50);\n        // ctx.lineTo(centerX, centerY - 70);\n        // ctx.closePath();\n        // ctx.fill();\n        var change = angleCurrent + Math.PI / 2;\n        var i = segments.length - Math.floor(change / (Math.PI * 2) * segments.length) - 1;\n        if (i < 0) i = i + segments.length;\n        ctx.textAlign = 'center';\n        ctx.textBaseline = 'middle';\n        ctx.fillStyle = primaryColor;\n        ctx.font = 'bold 1.5em ' + fontFamily;\n        currentSegment = segments[i];\n        isStarted && ctx.fillText(currentSegment, centerX + 10, centerY + size + 50);\n    };\n    var clear = function clear() {\n        var ctx = canvasContext;\n        ctx.clearRect(0, 0, 1000, 800);\n    };\n    return React.createElement(\"div\", {\n        id: \"wheel\",\n        width: \"600\",\n        height: \"600\"\n    }, React.createElement(\"canvas\", {\n        id: \"canvas\",\n        width: \"600\",\n        height: \"600\",\n        className: \"mx-auto d-block canvas\",\n        style: {\n            pointerEvents: isFinished && isOnlyOnce ? 'none' : 'auto'\n        }\n    }));\n};\n_s(WheelComponent, \"n0lOH0o3qw0LG+gxsqBckm1jbno=\");\n_c = WheelComponent;\nmodule.exports = React.memo(WheelComponent);\nvar _c;\n$RefreshReg$(_c, \"WheelComponent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbHVnaW5zL2FtYXppbmctc3Bpbi13aGVlbC1nYW1lL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUNBLEdBQUcsQ0FBQ0EsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFPO0FBQzNCLEdBQUcsQ0FBQ0MsY0FBYyxHQUFHLFFBQVEsQ0FBQ0EsY0FBYyxDQUFDQyxJQUFJLEVBQUUsQ0FBQzs7SUFDbEQsRUFBOEI7SUFDOUIsR0FBSyxDQUFFQyxXQUFXLEdBQUlELElBQUksQ0FBbkJDLFdBQVc7SUFDbEIsR0FBRyxDQUFDQyxRQUFRLEdBQUdGLElBQUksQ0FBQ0UsUUFBUSxFQUN4QkMsU0FBUyxHQUFHSCxJQUFJLENBQUNHLFNBQVMsRUFDMUJDLGNBQWMsR0FBR0osSUFBSSxDQUFDSSxjQUFjLEVBQ3BDQyxVQUFVLEdBQUdMLElBQUksQ0FBQ0ssVUFBVSxFQUM1QkMsaUJBQWlCLEdBQUdOLElBQUksQ0FBQ08sWUFBWSxFQUNyQ0EsWUFBWSxHQUFHRCxpQkFBaUIsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQU8sU0FBR0EsaUJBQWlCLEVBQ3pFRSxrQkFBa0IsR0FBR1IsSUFBSSxDQUFDUyxhQUFhLEVBQ3ZDQSxhQUFhLEdBQUdELGtCQUFrQixLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBTyxTQUFHQSxrQkFBa0IsRUFDNUVFLGVBQWUsR0FBR1YsSUFBSSxDQUFDVyxVQUFVLEVBQ2pDQSxVQUFVLEdBQUdELGVBQWUsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBR0EsZUFBZSxFQUNoRUUsU0FBUyxHQUFHWixJQUFJLENBQUNhLElBQUksRUFDckJBLElBQUksR0FBR0QsU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHQSxTQUFTLEVBQzdDRSxlQUFlLEdBQUdkLElBQUksQ0FBQ2UsVUFBVSxFQUNqQ0EsVUFBVSxHQUFHRCxlQUFlLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUdBLGVBQWUsRUFD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LGNBQWMsRUFBRW1CLE9BQU8sR0FBRyxFQUFFLEVBQUVDLE9BQU8sR0FBRzNCLElBQUksR0FBRyxFQUFFO0lBQzdFLENBQUM7SUFFRCxHQUFHLENBQUNnRCxLQUFLLEdBQUcsUUFBUSxDQUFDQSxLQUFLLEdBQUcsQ0FBQztRQUM1QixHQUFHLENBQUNPLEdBQUcsR0FBR3JDLGFBQWE7UUFDdkJxQyxHQUFHLENBQUMwQixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRztJQUMvQixDQUFDO0lBRUQsTUFBTSxDQUFDakcsS0FBSyxDQUFDa0csYUFBYSxDQUFDLENBQUssTUFBRSxDQUFDO1FBQ2pDQyxFQUFFLEVBQUUsQ0FBTztRQUNYQyxLQUFLLEVBQUUsQ0FBSztRQUNaQyxNQUFNLEVBQUUsQ0FBSztJQUNmLENBQUMsRUFBRXJHLEtBQUssQ0FBQ2tHLGFBQWEsQ0FBQyxDQUFRLFNBQUUsQ0FBQztRQUNoQ0MsRUFBRSxFQUFFLENBQVE7UUFDWkMsS0FBSyxFQUFFLENBQUs7UUFDWkMsTUFBTSxFQUFFLENBQUs7UUFDYkMsU0FBUyxFQUFDLENBQXdCO1FBQ2xDQyxLQUFLLEVBQUUsQ0FBQztZQUNOQyxhQUFhLEVBQUU3RSxVQUFVLElBQUliLFVBQVUsR0FBRyxDQUFNLFFBQUcsQ0FBTTtRQUMzRCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7R0E3T0daLGNBQWM7S0FBZEEsY0FBYztBQStPbEJ1RyxNQUFNLENBQUNDLE9BQU8sR0FBRzFHLEtBQUssQ0FBQzJHLElBQUksQ0FBQ3pHLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGx1Z2lucy9hbWF6aW5nLXNwaW4td2hlZWwtZ2FtZS9pbmRleC5qcz83NTVhIl0sInNvdXJjZXNDb250ZW50IjpbIlxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBXaGVlbENvbXBvbmVudCA9IGZ1bmN0aW9uIFdoZWVsQ29tcG9uZW50KF9yZWYpIHtcbiAgLy8gY29uc29sZS5sb2coX3JlZi5zZWdtZW50cyk7XG4gIGNvbnN0IHtzaG91bGRJU3Bpbn0gPSBfcmVmO1xuICB2YXIgc2VnbWVudHMgPSBfcmVmLnNlZ21lbnRzLFxuICAgICAgc2VnQ29sb3JzID0gX3JlZi5zZWdDb2xvcnMsXG4gICAgICB3aW5uaW5nU2VnbWVudCA9IF9yZWYud2lubmluZ1NlZ21lbnQsXG4gICAgICBvbkZpbmlzaGVkID0gX3JlZi5vbkZpbmlzaGVkLFxuICAgICAgX3JlZiRwcmltYXJ5Q29sb3IgPSBfcmVmLnByaW1hcnlDb2xvcixcbiAgICAgIHByaW1hcnlDb2xvciA9IF9yZWYkcHJpbWFyeUNvbG9yID09PSB2b2lkIDAgPyAnYmxhY2snIDogX3JlZiRwcmltYXJ5Q29sb3IsXG4gICAgICBfcmVmJGNvbnRyYXN0Q29sb3IgPSBfcmVmLmNvbnRyYXN0Q29sb3IsXG4gICAgICBjb250cmFzdENvbG9yID0gX3JlZiRjb250cmFzdENvbG9yID09PSB2b2lkIDAgPyAnd2hpdGUnIDogX3JlZiRjb250cmFzdENvbG9yLFxuICAgICAgX3JlZiRpc09ubHlPbmNlID0gX3JlZi5pc09ubHlPbmNlLFxuICAgICAgaXNPbmx5T25jZSA9IF9yZWYkaXNPbmx5T25jZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYkaXNPbmx5T25jZSxcbiAgICAgIF9yZWYkc2l6ZSA9IF9yZWYuc2l6ZSxcbiAgICAgIHNpemUgPSBfcmVmJHNpemUgPT09IHZvaWQgMCA/IDI5MCA6IF9yZWYkc2l6ZSxcbiAgICAgIF9yZWYkdXBEdXJhdGlvbiA9IF9yZWYudXBEdXJhdGlvbixcbiAgICAgIHVwRHVyYXRpb24gPSBfcmVmJHVwRHVyYXRpb24gPT09IHZvaWQgMCA/IDEwMCA6IF9yZWYkdXBEdXJhdGlvbixcbiAgICAgIF9yZWYkZG93bkR1cmF0aW9uID0gX3JlZi5kb3duRHVyYXRpb24sXG4gICAgICBkb3duRHVyYXRpb24gPSBfcmVmJGRvd25EdXJhdGlvbiA9PT0gdm9pZCAwID8gMTAwMCA6IF9yZWYkZG93bkR1cmF0aW9uLFxuICAgICAgX3JlZiRmb250RmFtaWx5ID0gX3JlZi5mb250RmFtaWx5LFxuICAgICAgZm9udEZhbWlseSA9IF9yZWYkZm9udEZhbWlseSA9PT0gdm9pZCAwID8gJ3Byb3hpbWEtbm92YScgOiBfcmVmJGZvbnRGYW1pbHk7XG4gIHZhciBjdXJyZW50U2VnbWVudCA9ICcnO1xuICB2YXIgaXNTdGFydGVkID0gZmFsc2U7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIGlzRmluaXNoZWQgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRGaW5pc2hlZCA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgdGltZXJIYW5kbGUgPSAwO1xuICB2YXIgdGltZXJEZWxheSA9IHNlZ21lbnRzLmxlbmd0aDtcbiAgdmFyIGFuZ2xlQ3VycmVudCA9IDA7XG4gIHZhciBhbmdsZURlbHRhID0gMDtcbiAgdmFyIGNhbnZhc0NvbnRleHQgPSBudWxsO1xuICB2YXIgbWF4U3BlZWQgPSBNYXRoLlBJIC8gKFwiXCIgKyBzZWdtZW50cy5sZW5ndGgpO1xuICB2YXIgdXBUaW1lID0gc2VnbWVudHMubGVuZ3RoICogdXBEdXJhdGlvbjtcbiAgdmFyIGRvd25UaW1lID0gc2VnbWVudHMubGVuZ3RoICogZG93bkR1cmF0aW9uO1xuICB2YXIgc3BpblN0YXJ0ID0gMDtcbiAgdmFyIGZyYW1lcyA9IDA7XG4gIHZhciBjZW50ZXJYID0gMzAwO1xuICB2YXIgY2VudGVyWSA9IDMwMDtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHdoZWVsSW5pdCgpO1xuICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIC8vICAgLy8gd2luZG93LnNjcm9sbFRvKDAsIDEpO1xuICAgIC8vIH0sIDApO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihzaG91bGRJU3Bpbikge1xuICAgICAgc3BpbigpO1xuICAgICAgc2V0U3BpbihmYWxzZSk7XG4gICAgfVxuICB9LCBbc2hvdWxkSVNwaW5dKVxuXG4gIHZhciB3aGVlbEluaXQgPSBmdW5jdGlvbiB3aGVlbEluaXQoKSB7XG4gICAgaW5pdENhbnZhcygpO1xuICAgIHdoZWVsRHJhdygpO1xuICB9O1xuXG4gIHZhciBpbml0Q2FudmFzID0gZnVuY3Rpb24gaW5pdENhbnZhcygpIHtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgIGNhbnZhc0NvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIC8vIHZhciBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4gICAgLy8gYmFja2dyb3VuZC5zcmMgPSBcIi4uL3doZWVsX2ZyYW1lLnBuZ1wiO1xuICAgIC8vIGNhbnZhc0NvbnRleHQuZHJhd0ltYWdlKGJhY2tncm91bmQsMTAwLDEwMCw0MDAwLDI3NzApOyAgXG5cbiAgICAvLyB2YXIgc3BpbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGluQnRuJyk7XG4gICAgLy8gY29uc29sZS5sb2coXCIzMzMzM1wiKTtcbiAgICAvLyBzcGluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3BpbiwgZmFsc2UpO1xuICB9O1xuXG4gIHZhciBzcGluID0gZnVuY3Rpb24gc3BpbigpIHtcbiAgICBpc1N0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRpbWVySGFuZGxlID09PSAwKSB7XG4gICAgICBzcGluU3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIG1heFNwZWVkID0gTWF0aC5QSSAvIHNlZ21lbnRzLmxlbmd0aDtcbiAgICAgIGZyYW1lcyA9IDA7XG4gICAgICB0aW1lckhhbmRsZSA9IHNldEludGVydmFsKG9uVGltZXJUaWNrLCB0aW1lckRlbGF5KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIG9uVGltZXJUaWNrID0gZnVuY3Rpb24gb25UaW1lclRpY2soKSB7XG4gICAgZnJhbWVzKys7XG4gICAgZHJhdygpO1xuICAgIHZhciBkdXJhdGlvbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3BpblN0YXJ0O1xuICAgIHZhciBwcm9ncmVzcyA9IDA7XG4gICAgdmFyIGZpbmlzaGVkID0gZmFsc2U7XG5cbiAgICBpZiAoZHVyYXRpb24gPCB1cFRpbWUpIHtcbiAgICAgIHByb2dyZXNzID0gZHVyYXRpb24gLyB1cFRpbWU7XG4gICAgICBhbmdsZURlbHRhID0gbWF4U3BlZWQgKiBNYXRoLnNpbihwcm9ncmVzcyAqIE1hdGguUEkgLyAyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHdpbm5pbmdTZWdtZW50KSB7XG4gICAgICAgIGlmIChjdXJyZW50U2VnbWVudCA9PT0gd2lubmluZ1NlZ21lbnQgJiYgZnJhbWVzID4gc2VnbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgcHJvZ3Jlc3MgPSBkdXJhdGlvbiAvIHVwVGltZTtcbiAgICAgICAgICBhbmdsZURlbHRhID0gbWF4U3BlZWQgKiBNYXRoLnNpbihwcm9ncmVzcyAqIE1hdGguUEkgLyAyICsgTWF0aC5QSSAvIDIpO1xuICAgICAgICAgIHByb2dyZXNzID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9ncmVzcyA9IGR1cmF0aW9uIC8gZG93blRpbWU7XG4gICAgICAgICAgYW5nbGVEZWx0YSA9IG1heFNwZWVkICogTWF0aC5zaW4ocHJvZ3Jlc3MgKiBNYXRoLlBJIC8gMiArIE1hdGguUEkgLyAyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvZ3Jlc3MgPSBkdXJhdGlvbiAvIGRvd25UaW1lO1xuICAgICAgICBhbmdsZURlbHRhID0gbWF4U3BlZWQgKiBNYXRoLnNpbihwcm9ncmVzcyAqIE1hdGguUEkgLyAyICsgTWF0aC5QSSAvIDIpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvZ3Jlc3MgPj0gMSkgZmluaXNoZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGFuZ2xlQ3VycmVudCArPSBhbmdsZURlbHRhO1xuXG4gICAgd2hpbGUgKGFuZ2xlQ3VycmVudCA+PSBNYXRoLlBJICogMikge1xuICAgICAgYW5nbGVDdXJyZW50IC09IE1hdGguUEkgKiAyO1xuICAgIH1cblxuICAgIGlmIChmaW5pc2hlZCkge1xuICAgICAgc2V0RmluaXNoZWQodHJ1ZSk7XG4gICAgICBvbkZpbmlzaGVkKGN1cnJlbnRTZWdtZW50KTtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJIYW5kbGUpO1xuICAgICAgdGltZXJIYW5kbGUgPSAwO1xuICAgICAgYW5nbGVEZWx0YSA9IDA7XG4gICAgfVxuICB9O1xuXG4gIHZhciB3aGVlbERyYXcgPSBmdW5jdGlvbiB3aGVlbERyYXcoKSB7XG4gICAgY2xlYXIoKTtcbiAgICBkcmF3V2hlZWwoKTtcbiAgICBkcmF3TmVlZGxlKCk7XG4gIH07XG5cbiAgdmFyIGRyYXcgPSBmdW5jdGlvbiBkcmF3KCkge1xuICAgIGNsZWFyKCk7XG4gICAgZHJhd1doZWVsKCk7XG4gICAgZHJhd05lZWRsZSgpO1xuICB9O1xuXG4gIHZhciBkcmF3U2VnbWVudCA9IGZ1bmN0aW9uIGRyYXdTZWdtZW50KGtleSwgbGFzdEFuZ2xlLCBhbmdsZSkge1xuICAgIHZhciBjdHggPSBjYW52YXNDb250ZXh0O1xuICAgIHZhciB2YWx1ZSA9IHNlZ21lbnRzW2tleV07XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyhjZW50ZXJYLCBjZW50ZXJZKTtcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHNpemUsIGxhc3RBbmdsZSwgYW5nbGUsIGZhbHNlKTtcbiAgICBjdHgubGluZVRvKGNlbnRlclgsIGNlbnRlclkpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gc2VnQ29sb3JzW2tleV07XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKGNlbnRlclgsIGNlbnRlclkpO1xuICAgIGN0eC5yb3RhdGUoKGxhc3RBbmdsZSArIGFuZ2xlKSAvIDIpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBjb250cmFzdENvbG9yO1xuICAgIGN0eC5mb250ID0gJ2JvbGQgMWVtICcgKyBmb250RmFtaWx5O1xuICAgIGN0eC5maWxsVGV4dCh2YWx1ZS5zdWJzdHIoMCwgMjEpLCBzaXplIC8gMiArIDIwLCAwKTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9O1xuXG4gIHZhciBkcmF3V2hlZWwgPSBmdW5jdGlvbiBkcmF3V2hlZWwoKSB7XG4gICAgdmFyIGN0eCA9IGNhbnZhc0NvbnRleHQ7XG4gICAgdmFyIGxhc3RBbmdsZSA9IGFuZ2xlQ3VycmVudDtcbiAgICB2YXIgbGVuID0gc2VnbWVudHMubGVuZ3RoO1xuICAgIHZhciBQSTIgPSBNYXRoLlBJICogMjtcbiAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBwcmltYXJ5Q29sb3I7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICBjdHguZm9udCA9ICcxZW0gJyArIGZvbnRGYW1pbHk7XG5cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBsZW47IGkrKykge1xuICAgICAgdmFyIGFuZ2xlID0gUEkyICogKGkgLyBsZW4pICsgYW5nbGVDdXJyZW50O1xuICAgICAgZHJhd1NlZ21lbnQoaSAtIDEsIGxhc3RBbmdsZSwgYW5nbGUpO1xuICAgICAgbGFzdEFuZ2xlID0gYW5nbGU7XG4gICAgfVxuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoY2VudGVyWCwgY2VudGVyWSwgNTAsIDAsIFBJMiwgZmFsc2UpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gcHJpbWFyeUNvbG9yO1xuICAgIGN0eC5saW5lV2lkdGggPSAxMDtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb250cmFzdENvbG9yO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LmZvbnQgPSAnYm9sZCAxZW0gJyArIGZvbnRGYW1pbHk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbnRyYXN0Q29sb3I7XG4gICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIC8vIGN0eC5maWxsVGV4dChidXR0b25UZXh0LCBjZW50ZXJYLCBjZW50ZXJZICsgMyk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKGNlbnRlclgsIGNlbnRlclksIHNpemUsIDAsIFBJMiwgZmFsc2UpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHgubGluZVdpZHRoID0gMTA7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gcHJpbWFyeUNvbG9yO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfTtcblxuICB2YXIgZHJhd05lZWRsZSA9IGZ1bmN0aW9uIGRyYXdOZWVkbGUoKSB7XG4gICAgdmFyIGN0eCA9IGNhbnZhc0NvbnRleHQ7XG4gICAgLy8gY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gY29udHJhc3RDb2xvcjtcbiAgICAvLyBjdHguZmlsZVN0eWxlID0gY29udHJhc3RDb2xvcjtcbiAgICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gY3R4Lm1vdmVUbyhjZW50ZXJYICsgMjAsIGNlbnRlclkgLSA1MCk7XG4gICAgLy8gY3R4LmxpbmVUbyhjZW50ZXJYIC0gMjAsIGNlbnRlclkgLSA1MCk7XG4gICAgLy8gY3R4LmxpbmVUbyhjZW50ZXJYLCBjZW50ZXJZIC0gNzApO1xuICAgIC8vIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAvLyBjdHguZmlsbCgpO1xuICAgIHZhciBjaGFuZ2UgPSBhbmdsZUN1cnJlbnQgKyBNYXRoLlBJIC8gMjtcbiAgICB2YXIgaSA9IHNlZ21lbnRzLmxlbmd0aCAtIE1hdGguZmxvb3IoY2hhbmdlIC8gKE1hdGguUEkgKiAyKSAqIHNlZ21lbnRzLmxlbmd0aCkgLSAxO1xuICAgIGlmIChpIDwgMCkgaSA9IGkgKyBzZWdtZW50cy5sZW5ndGg7XG4gICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBjdHguZmlsbFN0eWxlID0gcHJpbWFyeUNvbG9yO1xuICAgIGN0eC5mb250ID0gJ2JvbGQgMS41ZW0gJyArIGZvbnRGYW1pbHk7XG4gICAgY3VycmVudFNlZ21lbnQgPSBzZWdtZW50c1tpXTtcbiAgICBpc1N0YXJ0ZWQgJiYgY3R4LmZpbGxUZXh0KGN1cnJlbnRTZWdtZW50LCBjZW50ZXJYICsgMTAsIGNlbnRlclkgKyBzaXplICsgNTApO1xuICB9O1xuXG4gIHZhciBjbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHZhciBjdHggPSBjYW52YXNDb250ZXh0O1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgMTAwMCwgODAwKTtcbiAgfTtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgaWQ6IFwid2hlZWxcIixcbiAgICB3aWR0aDogXCI2MDBcIixcbiAgICBoZWlnaHQ6IFwiNjAwXCIsXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiwge1xuICAgIGlkOiBcImNhbnZhc1wiLFxuICAgIHdpZHRoOiBcIjYwMFwiLFxuICAgIGhlaWdodDogXCI2MDBcIixcbiAgICBjbGFzc05hbWU6XCJteC1hdXRvIGQtYmxvY2sgY2FudmFzXCIsXG4gICAgc3R5bGU6IHtcbiAgICAgIHBvaW50ZXJFdmVudHM6IGlzRmluaXNoZWQgJiYgaXNPbmx5T25jZSA/ICdub25lJyA6ICdhdXRvJ1xuICAgIH1cbiAgfSkpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5tZW1vKFdoZWVsQ29tcG9uZW50KTsiXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiV2hlZWxDb21wb25lbnQiLCJfcmVmIiwic2hvdWxkSVNwaW4iLCJzZWdtZW50cyIsInNlZ0NvbG9ycyIsIndpbm5pbmdTZWdtZW50Iiwib25GaW5pc2hlZCIsIl9yZWYkcHJpbWFyeUNvbG9yIiwicHJpbWFyeUNvbG9yIiwiX3JlZiRjb250cmFzdENvbG9yIiwiY29udHJhc3RDb2xvciIsIl9yZWYkaXNPbmx5T25jZSIsImlzT25seU9uY2UiLCJfcmVmJHNpemUiLCJzaXplIiwiX3JlZiR1cER1cmF0aW9uIiwidXBEdXJhdGlvbiIsIl9yZWYkZG93bkR1cmF0aW9uIiwiZG93bkR1cmF0aW9uIiwiX3JlZiRmb250RmFtaWx5IiwiZm9udEZhbWlseSIsImN1cnJlbnRTZWdtZW50IiwiaXNTdGFydGVkIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJpc0ZpbmlzaGVkIiwic2V0RmluaXNoZWQiLCJ0aW1lckhhbmRsZSIsInRpbWVyRGVsYXkiLCJsZW5ndGgiLCJhbmdsZUN1cnJlbnQiLCJhbmdsZURlbHRhIiwiY2FudmFzQ29udGV4dCIsIm1heFNwZWVkIiwiTWF0aCIsIlBJIiwidXBUaW1lIiwiZG93blRpbWUiLCJzcGluU3RhcnQiLCJmcmFtZXMiLCJjZW50ZXJYIiwiY2VudGVyWSIsInVzZUVmZmVjdCIsIndoZWVsSW5pdCIsInNwaW4iLCJzZXRTcGluIiwiaW5pdENhbnZhcyIsIndoZWVsRHJhdyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiRGF0ZSIsImdldFRpbWUiLCJzZXRJbnRlcnZhbCIsIm9uVGltZXJUaWNrIiwiZHJhdyIsImR1cmF0aW9uIiwicHJvZ3Jlc3MiLCJmaW5pc2hlZCIsInNpbiIsImNsZWFySW50ZXJ2YWwiLCJjbGVhciIsImRyYXdXaGVlbCIsImRyYXdOZWVkbGUiLCJkcmF3U2VnbWVudCIsImtleSIsImxhc3RBbmdsZSIsImFuZ2xlIiwiY3R4IiwidmFsdWUiLCJzYXZlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwiYXJjIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiZmlsbFN0eWxlIiwiZmlsbCIsInN0cm9rZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImZvbnQiLCJmaWxsVGV4dCIsInN1YnN0ciIsInJlc3RvcmUiLCJsZW4iLCJQSTIiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInRleHRCYXNlbGluZSIsInRleHRBbGlnbiIsImkiLCJjaGFuZ2UiLCJmbG9vciIsImNsZWFyUmVjdCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIndpZHRoIiwiaGVpZ2h0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1lbW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./plugins/amazing-spin-wheel-game/index.js\n");

/***/ })

});