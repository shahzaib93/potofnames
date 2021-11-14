"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 536:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


function _interopDefault(ex) {
    return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}
var React = __webpack_require__(689);
var React__default = _interopDefault(React);
var WheelComponent = function WheelComponent(_ref) {
    var segments = _ref.segments, segColors = _ref.segColors, winningSegment = _ref.winningSegment, onFinished = _ref.onFinished, _ref$primaryColor = _ref.primaryColor, primaryColor = _ref$primaryColor === void 0 ? 'black' : _ref$primaryColor, _ref$contrastColor = _ref.contrastColor, contrastColor = _ref$contrastColor === void 0 ? 'white' : _ref$contrastColor, _ref$buttonText = _ref.buttonText, buttonText = _ref$buttonText === void 0 ? 'Spin' : _ref$buttonText, _ref$isOnlyOnce = _ref.isOnlyOnce, isOnlyOnce = _ref$isOnlyOnce === void 0 ? true : _ref$isOnlyOnce, _ref$size = _ref.size, size = _ref$size === void 0 ? 290 : _ref$size, _ref$upDuration = _ref.upDuration, upDuration = _ref$upDuration === void 0 ? 100 : _ref$upDuration, _ref$downDuration = _ref.downDuration, downDuration = _ref$downDuration === void 0 ? 1000 : _ref$downDuration, _ref$fontFamily = _ref.fontFamily, fontFamily = _ref$fontFamily === void 0 ? 'proxima-nova' : _ref$fontFamily;
    var currentSegment = '';
    var isStarted = false;
    var _useState = React.useState(false), isFinished = _useState[0], setFinished = _useState[1];
    var timerHandle = 0;
    var timerDelay = segments.length;
    var angleCurrent = 0;
    var angleDelta = 0;
    var canvasContext = null;
    var maxSpeed = Math.PI / ("" + segments.length);
    var upTime = segments.length * upDuration;
    var downTime = segments.length * downDuration;
    var spinStart = 0;
    var frames = 0;
    var centerX = 300;
    var centerY = 300;
    React.useEffect(function() {
        wheelInit();
        setTimeout(function() {
            window.scrollTo(0, 1);
        }, 0);
    }, []);
    var wheelInit = function wheelInit() {
        initCanvas();
        wheelDraw();
    };
    var initCanvas = function initCanvas() {
        var canvas = document.getElementById('canvas');
        var spinBtn = document.getElementById('spinBtn');
        console.log(navigator);
        if (navigator.userAgent.indexOf('MSIE') !== -1) {
            canvas = document.createElement('canvas');
            canvas.setAttribute('width', 1000);
            canvas.setAttribute('height', 800);
            canvas.setAttribute('id', 'canvas');
            var wheel = document.getElementById('wheel');
            wheel.appendChild(canvass);
        }
        spinBtn.addEventListener('click', spin, false);
        // canvas.addEventListener('click', spin, false);
        canvasContext = canvas.getContext('2d');
    };
    var spin = function spin() {
        isStarted = true;
        if (timerHandle === 0) {
            spinStart = new Date().getTime();
            maxSpeed = Math.PI / segments.length;
            frames = 0;
            timerHandle = setInterval(onTimerTick, timerDelay);
        }
    };
    var onTimerTick = function onTimerTick() {
        frames++;
        draw();
        var duration = new Date().getTime() - spinStart;
        var progress = 0;
        var finished = false;
        if (duration < upTime) {
            progress = duration / upTime;
            angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2);
        } else {
            if (winningSegment) {
                if (currentSegment === winningSegment && frames > segments.length) {
                    progress = duration / upTime;
                    angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);
                    progress = 1;
                } else {
                    progress = duration / downTime;
                    angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);
                }
            } else {
                progress = duration / downTime;
                angleDelta = maxSpeed * Math.sin(progress * Math.PI / 2 + Math.PI / 2);
            }
            if (progress >= 1) finished = true;
        }
        angleCurrent += angleDelta;
        while(angleCurrent >= Math.PI * 2){
            angleCurrent -= Math.PI * 2;
        }
        if (finished) {
            setFinished(true);
            onFinished(currentSegment);
            clearInterval(timerHandle);
            timerHandle = 0;
            angleDelta = 0;
        }
    };
    var wheelDraw = function wheelDraw() {
        clear();
        drawWheel();
        drawNeedle();
    };
    var draw = function draw() {
        clear();
        drawWheel();
        drawNeedle();
    };
    var drawSegment = function drawSegment(key, lastAngle, angle) {
        var ctx = canvasContext;
        var value = segments[key];
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, size, lastAngle, angle, false);
        ctx.lineTo(centerX, centerY);
        ctx.closePath();
        ctx.fillStyle = segColors[key];
        ctx.fill();
        ctx.stroke();
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate((lastAngle + angle) / 2);
        ctx.fillStyle = contrastColor;
        ctx.font = 'bold 1em ' + fontFamily;
        ctx.fillText(value.substr(0, 21), size / 2 + 20, 0);
        ctx.restore();
    };
    var drawWheel = function drawWheel() {
        var ctx = canvasContext;
        var lastAngle = angleCurrent;
        var len = segments.length;
        var PI2 = Math.PI * 2;
        ctx.lineWidth = 1;
        ctx.strokeStyle = primaryColor;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.font = '1em ' + fontFamily;
        for(var i = 1; i <= len; i++){
            var angle = PI2 * (i / len) + angleCurrent;
            drawSegment(i - 1, lastAngle, angle);
            lastAngle = angle;
        }
        ctx.beginPath();
        ctx.arc(centerX, centerY, 50, 0, PI2, false);
        ctx.closePath();
        ctx.fillStyle = primaryColor;
        ctx.lineWidth = 10;
        ctx.strokeStyle = contrastColor;
        ctx.fill();
        ctx.font = 'bold 1em ' + fontFamily;
        ctx.fillStyle = contrastColor;
        ctx.textAlign = 'center';
        ctx.fillText(buttonText, centerX, centerY + 3);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(centerX, centerY, size, 0, PI2, false);
        ctx.closePath();
        ctx.lineWidth = 10;
        ctx.strokeStyle = primaryColor;
        ctx.stroke();
    };
    var drawNeedle = function drawNeedle() {
        var ctx = canvasContext;
        // ctx.lineWidth = 1;
        // ctx.strokeStyle = contrastColor;
        // ctx.fileStyle = contrastColor;
        // ctx.beginPath();
        // ctx.moveTo(centerX + 20, centerY - 50);
        // ctx.lineTo(centerX - 20, centerY - 50);
        // ctx.lineTo(centerX, centerY - 70);
        // ctx.closePath();
        // ctx.fill();
        var change = angleCurrent + Math.PI / 2;
        var i = segments.length - Math.floor(change / (Math.PI * 2) * segments.length) - 1;
        if (i < 0) i = i + segments.length;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = primaryColor;
        ctx.font = 'bold 1.5em ' + fontFamily;
        currentSegment = segments[i];
        isStarted && ctx.fillText(currentSegment, centerX + 10, centerY + size + 50);
    };
    var clear = function clear() {
        var ctx = canvasContext;
        ctx.clearRect(0, 0, 1000, 800);
    };
    return(/*#__PURE__*/ React__default.createElement("div", {
        id: "wheel"
    }, /*#__PURE__*/ React__default.createElement("canvas", {
        id: "canvas",
        width: "600",
        height: "600",
        style: {
            pointerEvents: isFinished && isOnlyOnce ? 'none' : 'auto'
        }
    })));
};
module.exports = WheelComponent; //# sourceMappingURL=index.js.map


/***/ }),

/***/ 734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "@fortawesome/react-fontawesome"
const react_fontawesome_namespaceObject = require("@fortawesome/react-fontawesome");
// EXTERNAL MODULE: ./my-plugins/amazing-spin-wheel-game/dist/index.js
var dist = __webpack_require__(536);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: external "@fortawesome/free-brands-svg-icons"
const free_brands_svg_icons_namespaceObject = require("@fortawesome/free-brands-svg-icons");
;// CONCATENATED MODULE: ./pages/index.js


// import Image from 'next/image'




// http://localhost:3000/api/participants
// https://potofnames.com/api/participants
const getServerSideProps = async ()=>{
    const res = await fetch('https://potofnames.com/api/participants');
    const data = await res.json();
    return {
        props: {
            participants: data
        }
    };
};
function Home({ participants  }) {
    const seg = [], segCol = [];
    const router = (0,router_namespaceObject.useRouter)();
    const addParticipant = async (event)=>{
        event.preventDefault();
        const res = await fetch('https://potofnames.com/api/participants', {
            body: JSON.stringify({
                name: event.target.participantName.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });
        participants = await res.json();
        router.replace(router.asPath);
    };
    const onFinished = (winner)=>{
        console.log(winner);
        alert(winner);
    };
    participants.map((participant)=>{
        seg.push(participant.name);
    });
    for(let i = 0; i < seg.length; i++){
        if (i % 2 === 0) {
            segCol.push("#4f56a5");
        } else {
            segCol.push("#dfdede");
        }
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container mb-5",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Pot Of Names"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-12 ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "navbar navbar-expand-lg navbar-light",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container-fluid",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "navbar-brand",
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "logo.jpg",
                                        width: "150"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "navbar-toggler",
                                    type: "button",
                                    "data-bs-toggle": "collapse",
                                    "data-bs-target": "#navbarNavAltMarkup",
                                    "aria-controls": "navbarNavAltMarkup",
                                    "aria-expanded": "false",
                                    "aria-label": "Toggle navigation",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "navbar-toggler-icon"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "d-flex",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "collapse navbar-collapse",
                                        id: "navbarNavAltMarkup",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "navbar-nav",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link active px-4",
                                                    "aria-current": "page",
                                                    href: "#",
                                                    children: "SETTING"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link px-4",
                                                    href: "#",
                                                    children: "LOGIN"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((dist_default()), {
                                segments: seg,
                                segColors: segCol,
                                onFinished: (winner)=>onFinished(winner)
                                ,
                                primaryColor: "gray",
                                contrastColor: "white",
                                buttonText: "",
                                isOnlyOnce: false,
                                size: 290,
                                upDuration: 100,
                                downDuration: 1000,
                                fontFamily: "Arial"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-md-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-2 m-5 text-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn btn-purple btn-radius bg-purple text-white btn-radius btn-lg",
                                children: "3D MODE"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        className: "row justify-content-md-center",
                        method: "post",
                        onSubmit: addParticipant,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-5 ",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "input-group mycustom ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Username",
                                            required: true,
                                            name: "participantName"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "input-group-prepend",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "submit",
                                                className: "btn btn-radius btn-sm",
                                                id: "inputGroupPrepend2",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "plus.png",
                                                    width: "25",
                                                    className: "m-1"
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "spinBtn",
                                    className: "my-2 text-purple fs-4 fw-bold",
                                    children: "Shuffle"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "m-5 test",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row ",
                            children: participants.map((participant)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-12 col-md-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card mb-3 name-card",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "row g-0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-md-4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "logo.jpg",
                                                        className: "img-fluid rounded-circle",
                                                        alt: "..."
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-md-8",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "card-body",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                className: "card-title",
                                                                children: participant.name
                                                            })
                                                        }, participant._id)
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            )
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row my-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-8 mx-auto",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "fw-bold fs-5 text-center",
                                children: "Welcome to the most interactive and fun website for picking names,making unbaised decisions and spin a wheel interaction"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row my-5 justify-content-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "card footer-card text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "unlimitednames.png",
                                            className: "card-img-top mx-auto d-block"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "card-body",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: "card-title",
                                                    children: "Unlimited Names"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "card-text text-secondary",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "Enter over 250 names without any glitch or hassel."
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "card footer-card text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "checkicon.png",
                                            className: "card-img-top mx-auto d-block"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "card-body",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: "card-title",
                                                    children: "Top Security"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "card-text text-secondary",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "We are committed to protecting and respecting your privacy and the security of your data."
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "card footer-card text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "speechicon.png",
                                            className: "card-img-top mx-auto d-block"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "card-body",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: "card-title",
                                                    children: "How to use Pot of Names"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "card-text text-secondary",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        children: "Type in your entries in the textbox to the right of the wheel. Click the wheel to spin it and get a random winner."
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "footer-social-icons",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                            icon: free_brands_svg_icons_namespaceObject.faTwitter,
                                            className: "fontawesome-icon"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                            icon: free_brands_svg_icons_namespaceObject.faFacebookF,
                                            className: "fontawesome-icon facebook-icon"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                            icon: free_brands_svg_icons_namespaceObject.faPinterestP,
                                            className: "fontawesome-icon"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                            icon: free_brands_svg_icons_namespaceObject.faLinkedinIn,
                                            className: "fontawesome-icon"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                            icon: free_brands_svg_icons_namespaceObject.faInstagramSquare,
                                            className: "fontawesome-icon"
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                    children: "\xa9 2021 POTOFNAMES LLC. ALL RIGHT RESERVED."
                                })
                            })
                        })
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(734));
module.exports = __webpack_exports__;

})();