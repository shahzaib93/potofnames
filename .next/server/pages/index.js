"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(427);
// EXTERNAL MODULE: ./plugins/amazing-spin-wheel-game/index.js
var amazing_spin_wheel_game = __webpack_require__(1379);
var amazing_spin_wheel_game_default = /*#__PURE__*/__webpack_require__.n(amazing_spin_wheel_game);
;// CONCATENATED MODULE: external "@fortawesome/react-fontawesome"
const react_fontawesome_namespaceObject = require("@fortawesome/react-fontawesome");
;// CONCATENATED MODULE: external "@fortawesome/free-brands-svg-icons"
const free_brands_svg_icons_namespaceObject = require("@fortawesome/free-brands-svg-icons");
;// CONCATENATED MODULE: ./pages/index.js




// import jwt from 'jsonwebtoken'





// http://localhost:3000/api/participants
// https://potofnames.com/api/participants
const getStaticProps = async ()=>{
    const res = await fetch('https://potofnames.com/api/participants');
    const data = await res.json();
    return {
        props: {
            participants: data
        }
    };
};
function Home({ participants  }) {
    const segCol = [];
    const { 0: webState , 1: setWebState  } = (0,external_react_.useState)({
        items: [],
        seg: []
    });
    const { data: session  } = (0,client_.useSession)();
    const { 0: shouldWeSpin , 1: setShouldWeSpin  } = (0,external_react_.useState)(false);
    const tempParticipants = [
        {
            name: 'Asif'
        },
        {
            name: 'Jami'
        },
        {
            name: 'Zahid'
        },
        {
            name: 'Khalid'
        },
        {
            name: 'Kayani'
        },
        {
            name: 'Mahir'
        },
        {
            name: 'Shehzad'
        },
        {
            name: 'Aslam'
        }
    ];
    // console.log(tempParticipants)
    // console.log(participants)
    if (session) {
        console.log(`You're signed in`);
        console.log(session);
    } else {
        console.log(`You are signed out`);
    }
    (0,external_react_.useEffect)(()=>{
        let temp = [];
        if (session) {
            participants.map((participant)=>{
                temp.push(participant.name);
            });
            setWebState({
                items: [
                    ...participants
                ],
                seg: temp
            });
        } else {
            let tempo = [];
            tempParticipants.map((tempParticipant)=>{
                tempo.push(tempParticipant.name);
            });
            setWebState({
                items: [
                    ...tempParticipants
                ],
                seg: tempo
            });
        // setShouldWeSpin(true)
        }
    }, [
        participants,
        session
    ]);
    (0,external_react_.useEffect)(()=>{
        console.log(webState);
        console.log("Coming from useEffects");
    }, [
        webState
    ]);
    for(let i1 = 0; i1 < webState.seg.length; i1++){
        if (i1 % 2 === 0) {
            segCol.push("#4f56a5");
        } else {
            segCol.push("#dfdede");
        }
    }
    const onFinished = (winner)=>{
        console.log(winner);
        alert(winner);
    };
    const addParticipant = async (event)=>{
        event.preventDefault();
        // router.replace(router.asPath);
        const res = await fetch('https://potofnames.com/api/participants', {
            body: JSON.stringify({
                name: event.target.participantName.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });
        const newParticipant = await res.json();
        console.log(newParticipant.addParticipant);
        setWebState({
            items: [
                ...webState.items,
                newParticipant.addParticipant
            ],
            seg: [
                ...webState.seg,
                newParticipant.addParticipant.name
            ]
        });
        event.target.participantName.value = "";
    };
    const deleteParticipant = async (deleleId, index)=>{
        const deletedVal = webState.items[index];
        console.log("Delete function data");
        console.log(deletedVal);
        const res = await fetch('https://potofnames.com/api/participants', {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(deleleId)
        });
        const delParticipant = await res.json();
        function checkAdult(age) {
            return age == index;
        }
        setWebState({
            items: webState.items.filter((checkAdult, i)=>i !== index
            ),
            seg: webState.seg.filter((checkAdult, i)=>i !== index
            )
        });
        console.log(delParticipant);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container container-sm container-md mb-5",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Pot of Names"
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
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "d-flex",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "navbar-nav",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "nav-link active px-4",
                                                "aria-current": "page",
                                                href: "#",
                                                children: "SETTING"
                                            }),
                                            session ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "nav-link px-4",
                                                href: "#",
                                                onClick: ()=>(0,client_.signOut)()
                                                ,
                                                children: "LOGOUT"
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "nav-link px-4",
                                                href: "#",
                                                "data-bs-toggle": "modal",
                                                "data-bs-target": "#loginModal",
                                                children: "LOGIN"
                                            })
                                        ]
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
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-12 col-md-6",
                            children: [
                                webState.seg.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx((amazing_spin_wheel_game_default()), {
                                    segments: webState.seg,
                                    segColors: segCol,
                                    onFinished: (winner)=>onFinished(winner)
                                    ,
                                    primaryColor: "gray",
                                    contrastColor: "white",
                                    isOnlyOnce: false,
                                    size: 290,
                                    upDuration: 100,
                                    downDuration: 1000,
                                    shouldWeSpin: shouldWeSpin,
                                    setShouldWeSpin: setShouldWeSpin,
                                    fontFamily: "Arial"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "clearfix"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-6 col-md-2 m-5 text-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn btn-purple btn-radius bg-purple text-white btn-radius btn-lg",
                                children: "3D MODE"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        className: "row justify-content-center",
                        method: "post",
                        onSubmit: addParticipant,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-8 col-md-5 ",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "input-group mycustom ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Participant Name",
                                            name: "participantName",
                                            required: true
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
                                className: "col-2 col-md-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "spinBtn",
                                    onClick: ()=>setShouldWeSpin(true)
                                    ,
                                    className: "my-2 text-purple fs-4 fw-bold",
                                    children: "Spin"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "m-5 test",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: webState.items.map((item, index)=>// eslint-disable-next-line react/jsx-key
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-6 col-md-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "card mb-3 name-card",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "row g-0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: " col-4 col-md-4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "logo.jpg",
                                                        className: "img-fluid rounded-circle",
                                                        alt: "..."
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-7 col-md-7",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "card-body",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                className: "card-title",
                                                                children: item.name
                                                            })
                                                        }, item._id)
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-1",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        onClick: ()=>deleteParticipant(item._id, index)
                                                        ,
                                                        children: "x"
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
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "modal fade login-modal",
                                id: "loginModal",
                                tabIndex: "-1",
                                "aria-labelledby": "loginModalLabel",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "modal-dialog",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "modal-content",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "modal-header",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        className: "modal-title",
                                                        id: "loginModalLabel",
                                                        children: "Login to your account"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        type: "button",
                                                        className: "btn-close",
                                                        "data-bs-dismiss": "modal",
                                                        "aria-label": "Close"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "modal-body",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                    htmlFor: "exampleInputEmail1",
                                                                    className: "form-label",
                                                                    children: "Email address"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    type: "text",
                                                                    name: "username",
                                                                    className: "form-control",
                                                                    id: "exampleInputEmail1",
                                                                    "aria-describedby": "emailHelp"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "mb-3",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                    htmlFor: "exampleInputPassword1",
                                                                    className: "form-label",
                                                                    children: "Password"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    type: "password",
                                                                    name: "password",
                                                                    className: "form-control",
                                                                    id: "exampleInputPassword1"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "d-grid gap-2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    type: "submit",
                                                                    className: "btn btn-primary btn-block",
                                                                    children: "Login"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    className: "btn btn-outline-secondary",
                                                                    onClick: ()=>(0,client_.signIn)()
                                                                    ,
                                                                    type: "button",
                                                                    children: "Sign in with Google"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
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
                        className: "row my-5",
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
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row justify-content-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "https://potofnames.com/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "logo.jpg",
                                        className: "img-fluid sponsor-img",
                                        alt: "..."
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "https://pickapot.com/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "paplogo.png",
                                        className: "img-fluid sponsor-img",
                                        alt: "..."
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                    children: "A Project of PICKAPOT LLC. Trademarks and brands are the property of their respective owners."
                                })
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

/***/ 1379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var React = __webpack_require__(6689);
var WheelComponent = function WheelComponent(_ref) {
    // console.log(_ref.segments);
    const { shouldWeSpin , setShouldWeSpin  } = _ref;
    var segments = _ref.segments, segColors = _ref.segColors, winningSegment = _ref.winningSegment, onFinished = _ref.onFinished, _ref$primaryColor = _ref.primaryColor, primaryColor = _ref$primaryColor === void 0 ? 'black' : _ref$primaryColor, _ref$contrastColor = _ref.contrastColor, contrastColor = _ref$contrastColor === void 0 ? 'white' : _ref$contrastColor, _ref$isOnlyOnce = _ref.isOnlyOnce, isOnlyOnce = _ref$isOnlyOnce === void 0 ? true : _ref$isOnlyOnce, _ref$size = _ref.size, size = _ref$size === void 0 ? 290 : _ref$size, _ref$upDuration = _ref.upDuration, upDuration = _ref$upDuration === void 0 ? 100 : _ref$upDuration, _ref$downDuration = _ref.downDuration, downDuration = _ref$downDuration === void 0 ? 1000 : _ref$downDuration, _ref$fontFamily = _ref.fontFamily, fontFamily = _ref$fontFamily === void 0 ? 'proxima-nova' : _ref$fontFamily;
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
    }, [
        segments
    ]);
    React.useEffect(()=>{
        if (shouldWeSpin) {
            wheelInit();
            spin();
            setShouldWeSpin(false);
        }
    }, [
        shouldWeSpin
    ]);
    // React.useEffect(() => {
    //     wheelInit();
    // },[])
    var wheelInit = function wheelInit() {
        initCanvas();
        wheelDraw();
    };
    var initCanvas = function initCanvas() {
        var canvas = document.getElementById('canvas');
        canvasContext = canvas.getContext('2d');
    // var background = new Image();
    // background.src = "../wheel_frame.png";
    // canvasContext.drawImage(background,100,100,4000,2770);  
    // var spinBtn = document.getElementById('spinBtn');
    // console.log("33333");
    // spinBtn.addEventListener('click', spin, false);
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
        // ctx.fillText(buttonText, centerX, centerY + 3);
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
    return React.createElement("div", {
        id: "wheel",
        width: "600",
        height: "600"
    }, React.createElement("canvas", {
        id: "canvas",
        width: "600",
        height: "600",
        className: "mx-auto d-block canvas",
        style: {
            pointerEvents: isFinished && isOnlyOnce ? 'none' : 'auto'
        }
    }));
};
module.exports = React.memo(WheelComponent);


/***/ }),

/***/ 427:
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
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
var __webpack_exports__ = __webpack_require__.X(0, [730,61], () => (__webpack_exec__(6748)));
module.exports = __webpack_exports__;

})();