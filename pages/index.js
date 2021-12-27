import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactHowler from "react-howler";
// import jwt from 'jsonwebtoken'
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import WheelComponent from "../plugins/amazing-spin-wheel-game";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagramSquare,
  faLinkedinIn,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Confetti from "react-confetti";
import Modal from "react-modal";
// import screenfull from 'screenfull';
// import claps from "../public/applause-01.mp3"
// http://localhost:3000/api/participants
// https://potofnames.com/api/participants
export const getStaticProps = async () => {
  const res = await fetch("https://potofnames.com/api/participants");
  const data = await res.json();
  return {
    props: { participants: data },
  };
};

export default function Home({ participants }) {
  // const audio = new Audio("/mixkit-clapping-male-crowd-439.wav")
  const router = useRouter();
  console.log("location", router.pathname);
  const [modalIsOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const [webState, setWebState] = useState({ items: [], seg: [] });
  const [showWinnerModal, setshowWinnerModal] = useState(false);
  const [shouldWeSpin, setShouldWeSpin] = useState(false);
  const [soundplay, setsoundplay] = useState(false);
  const customStyles = {
    content: {
      margin: "0%",
      width: "30%",
      height: "30%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",

      // marginRight: '-50%',
      transform: "translate(-50%, -50%)",
    },
  };
  const [showdivs, setshowdivs] = useState("block");
  const [thewinner, setthewinner] = useState("");
  const [enableFullScreen, setenableFullScreen] = useState(false);
  const [shakeAnimateClass, setShakeAnimateClass] = useState("");
  const [animatenames, setAnimatenames] = useState("");

  const [threeDMode, setThreeDMode] = useState(0);
  const [totalEntries, setTotalEntries] = useState(10);
  const [wheelSpeed, setWheelSpeed] = useState(5);
  const [spinTime, setSpinTime] = useState(5);
  const [shakeTime, setShakeTime] = useState(5);
  const [gameType, setGameType] = useState("wheel");
  const { sound, setSound } = useState(false);
  const [applausing, setApplausing] = useState("applause-01");

  const segCol = [];
  const tempParticipants = [
    { name: "Asif", repeatation: 1 },
    { name: "Jami", repeatation: 1 },
    { name: "Zahid", repeatation: 1 },
    { name: "Khalid", repeatation: 1 },
    { name: "Kayani", repeatation: 1 },
    { name: "Mahir", repeatation: 1 },
    { name: "Shehzad", repeatation: 1 },
    { name: "Aslam", repeatation: 1 },
  ];
  var css = `
    canvas, .threeDRotate{
      transform: rotate3d(0.5, -0.866, 0, ${threeDMode}deg);
    }
    .shake-animation {
      /* Start the shake animation and make the animation last for 0.5 seconds */
      animation: shake 0.1s;
      /* When the animation is finished, start again */
      animation-iteration-count: ${shakeTime * 10};
    }
  `;
  function shuffleArray(array) {
    var array1 = array.items;
    var array2 = array.seg;

    for (var i = array1.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp1 = array1[i];
      var temp2 = array2[i];
      array1[i] = array1[j];
      array2[i] = array2[j];
      array1[j] = temp1;
      array2[j] = temp2;
    }
    setWebState({
      items: [...array1],
      seg: [...array2],
    });
    setAnimatenames("shuffleAnimation");
    // const animate = window.document.getElementsByClassName("animateIt")
    // console.log("animate",animate)
    // for(var i=0;i<animate.length-1;i++){
    // console.log("animating",animate[i])

    //   animate[i].className = "shuffleAnimation"

    // }
    setInterval(() => setAnimatenames(""), 1000);

    // setWebState()
  }


  

  const myarr = [
    { one: 1 },
    { two: 2 },
    { three: 3 },
    { four: 4 },
    { five: 5 },
  ];
  console.log("real arr", myarr);
  // shuffleArray(myarr)
  // console.log("modified arr",myarr)
  console.log("ALL ITEMS", webState.items);
  var itemsForPot = [...webState.items];
  // const showParticipants = 18
  console.log(itemsForPot);

  if (session) {
    console.log(`You're signed in`);
    console.log(session);
  } else {
    console.log(`You are signed out`);
  }
  const getEntriesValue = (event) => {
    setTotalEntries(event.target.value);
    console.log(totalEntries);
  };
  // const getWheelSpeed = (event) => {
  //   setWheelSpeed(event.target.value);
  //   console.log(wheelSpeed);
  // }

  function openModal() {
    setsoundplay(false);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const getThreeDMode = (event) => {
    setThreeDMode(event.target.value);
    console.log(threeDMode);
  };

  const settheShouldWeSpin = async () => {
    if (localStorage.getItem("SpinTime") != undefined) {
      await setSpinTime(parseInt(localStorage.getItem("SpinTime")));
    }
    if (localStorage.getItem("Applause") != undefined) {
      await setApplausing(localStorage.getItem("Applause"));
    }
    console.log("applausinggg", applausing);
    console.log("SpinTime", typeof spinTime);
    setShouldWeSpin(true);
    setsoundplay(true);
  };

  const getSpinTime = (event) => {
    // if(localStorage.getItem("SpinTime") != undefined){
    //   setSpinTime(parseInt(localStorage.getItem("SpinTime")))}
    // setSpinTime(event.target.value);
    // console.log(spinTime * 125);
    // console.log(event.target.value * 125);
  };

  const getShakeTime = (event) => {
    // setShakeTime(event.target.value);
    // console.log(`shake Time ${shakeTime * 10}`);
    // console.log(event.target.value);
  };

  const togglePotWheel = (event, value) => {
    console.log(value);
    setGameType(value);
  };
  const shakeBtn = async () => {
    if (localStorage.getItem("ShakeTime") != undefined) {
      await setShakeTime(parseInt(localStorage.getItem("ShakeTime")));
    }
    if (localStorage.getItem("Applause") != undefined) {
      await setApplausing(localStorage.getItem("Applause"));
    }
    console.log("shake", shakeTime);
    const random = Math.floor(Math.random() * webState.seg.length);
    console.log(random, webState.seg[random]);
    console.log(webState.seg);
    setShakeAnimateClass("shake-animation");
    setTimeout(function () {
      onFinished(webState.seg[random]);
      // alert(webState.seg[random]);
      setShakeAnimateClass("");
    }, shakeTime * 1000);
  };
  useEffect(() => {
    if (localStorage.getItem("Entries") != undefined) {
      setTotalEntries(parseInt(localStorage.getItem("Entries")));
    }

    console.log("Entries", totalEntries);
    let temp = [];
    if (session) {
      participants.map((participant) => {
        temp.push(participant.name);
      });
      setWebState({ items: [...participants], seg: temp });
    } else {
      let tempo = [];
      tempParticipants.map((tempParticipant) => {
        tempo.push(tempParticipant.name);
      });

      setWebState({ items: [...tempParticipants], seg: tempo });
    }
  }, [participants, session, totalEntries]);

  useEffect(() => {
    // setWebState(webState)
    console.log("webstate items length", webState.seg);
    console.log("Coming from useEffects");
    if (localStorage.getItem("Applause") != undefined) {
      setApplausing(localStorage.getItem("Applause"));
    }
    console.log("My applausing", applausing);
  }, [webState, gameType]);

  for (let i = 0; i < webState.seg.length; i++) {
    if (i % 2 === 0) {
      segCol.push("#4f56a5");
    } else {
      segCol.push("#dfdede");
    }
  }

  useEffect(() => {
    const segarr=[]
    const newdata = []
    const data = JSON.parse(localStorage.getItem("csvdata"))
    if (data !=undefined){

      for (var i = 0; i < data.length; i++) {
        newdata.push({name:Object.values(data[i])[0],repeatation:1})
        segarr.push(Object.values(data[i])[0]);
        // console.log("sk",Object.values(data[i])[0])
      }

      console.log("skdatacsv",newdata)
      console.log("skwebstate",webState)}

    setWebState({
      items: [...webState.items, ...newdata],
      seg: [...webState.seg, ...segarr],
    })
    console.log("sknewwebstate",webState)
    
  
  },[participants]);

  const onFinished = (winner) => {
    // const elem =  window.document.getElementById("FULLSCREEN")
    // window.exitFullscreen()
    setenableFullScreen(!enableFullScreen)
    closefullScreen();
    // setenableFullScreen(!enableFullScreen)
    setthewinner(winner);
    setsoundplay(true);
    openModal();
    console.log(winner);
    // alert(winner);
  };

  const openfullScreen = (elem) => {
    setshowdivs("none");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
    // elem2.requestFullscreen()
  };

  const closefullScreen = (elem) => {
    if (!enableFullScreen) {
      document.webkitExitFullscreen();
      setshowdivs("block");
    }
  };

  useEffect(() => {
    //     window.document.addEventListener('fullscreenchange', ()=>closefullScreen());
    // window.document.addEventListener('webkitfullscreenchange',()=>closefullScreen());
    // window.addEventListener('fullscreenchange', closefullScreen())
    const elem = window.document.getElementById("FULLSCREEN");
    if (enableFullScreen) {
      openfullScreen(elem);
    }
    if (elem.exitFullscreen) {
      elem.exitFullscreen();
      enableFullScreen(false);
      setshowdivs("block");
    }
    if (!enableFullScreen) {
      closefullScreen(elem);
    }
  }, [enableFullScreen]);

  const addParticipant = async (event) => {
    const hello = "hello";
    const more = window.document.getElementById("moreParticpants");
    const arr = Array(parseInt(more.value)).fill(hello);
    console.log("My participant", event.target.participantName.value);
    console.log("participant times", more.value);
    if (localStorage.getItem("Entries") != undefined) {
      await setTotalEntries(parseInt(localStorage.getItem("Entries")));
    }

    event.preventDefault();
    // console.log("total",webState.items.length);
    // if(webState.items.length + parseInt(more.value) < totalEntries){
    if (webState.items.length < totalEntries) {
      const res = await fetch("https://potofnames.com/api/participants", {
        body: JSON.stringify({
          // name: Array(parseInt(more.value)).fill(event.target.participantName.value)

          name: event.target.participantName.value,
          repeatation: parseInt(more.value),
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const newParticipant = await res.json();
      const segarr = [];
      for (var i = 0; i < newParticipant.participantArray.length; i++) {
        segarr.push(newParticipant.participantArray[0].name);
      }
      console.log("newnewparticipants", newParticipant.participantArray);
      setWebState({
        items: [...webState.items, ...newParticipant.participantArray],
        seg: [...webState.seg, ...segarr],
      });
      //   for(var i=0;i<newParticipant.participantArray.length;i++){

      //   console.log("sxsxsxsx",newParticipant.participantArray[i])
      // }
      // console.log("addsvsvsldsdls", newParticipant.addParticipant);
    } else {
      alert("You can't add more.");
    }
    event.target.participantName.value = "";
  };

  const deleteParticipant = async (deleleId, index) => {
    const deletedVal = webState.items[index];
    console.log("Delete function data");
    console.log(deletedVal);
    const res = await fetch("https://potofnames.com/api/participants", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deleleId),
    });
    const delParticipant = await res.json();
    function checkAdult(age) {
      return age == index;
    }
    setWebState({
      items: webState.items.filter((checkAdult, i) => i !== index),
      seg: webState.seg.filter((checkAdult, i) => i !== index),
    });

    console.log(delParticipant);
  };

  // useEffect(() => {
  //   const segarr=[]
  //   const newdata = []
  //   const data = JSON.parse(localStorage.getItem("csvdata"))
  //   if (data !=undefined){

  //     for (var i = 0; i < data.length; i++) {
  //       newdata.push({name:Object.values(data[i])[0],repeatation:1})
  //       segarr.push(Object.values(data[i])[0]);
  //       // console.log("sk",Object.values(data[i])[0])
  //     }

  //     console.log("skdatacsv",newdata)
  //     console.log("skwebstate",webState)}

  //   // setWebState({
  //   //   items: [...webState.items, ...newdata],
  //   //   seg: [...webState.seg, ...segarr],
  //   // })
  //   console.log("sknewwebstate",webState)
    
  
  // },[]);

  


  return (
    <div id="FULLSCREEN" className="container container-sm container-md mb-5">
      <Head>
        <title>Pot of Names</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>{css}</style>
      </Head>
      <header id="header" className="row">
        <div className="col-12 ">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src="logo.jpg" width="150" />
              </a>
              <div style={{ marginLeft: "10%" }} className="d-flex">
                <div className="navbar-nav">
                  {/* <a className="nav-link active px-4" aria-current="page" href="#">SETTING</a> */}

                  {/* {!enableFullScreen?} */}
                  <button
                    hidden={enableFullScreen}
                    type="button"
                    className="active px-4 nav-link btn btn-link"
                    onClick={() => router.push("/settings")}
                  >
                    SETTINGS
                  </button>

                  {session ? (
                    <button
                      hidden={enableFullScreen}
                      className="nav-link px-4 btn btn-link"
                      type="button"
                      onClick={() => signOut()}
                    >
                      LOGOUT
                    </button>
                  ) : (
                    <button
                      hidden={enableFullScreen}
                      type="button"
                      className="px-4 nav-link btn btn-link"
                      data-bs-toggle="modal"
                      data-bs-target="#loginModal"
                    >
                      LOGIN
                    </button>
                  )}

                  {gameType == "pot" && (
                    <button
                      hidden={!enableFullScreen}
                      onClick={shakeBtn}
                      type="button"
                      className="active px-4 nav-link btn btn-link"
                    >
                      SHAKE
                    </button>
                  )}
                  {gameType == "wheel" && (
                    <button
                      hidden={!enableFullScreen}
                      onClick={() => settheShouldWeSpin(true)}
                      type="button"
                      className="active px-4 nav-link btn btn-link"
                    >
                      SPIN
                    </button>
                  )}
                  {/* <button hidden={!enableFullScreen} onClick={shakeBtn} type="button" className="active px-4 nav-link btn btn-link" onClick={()=>router.push("/settings")}>
                  SHAKE
                    </button> */}
                  <button
                    type="button"
                    className="px-4 nav-link btn btn-link"
                    onClick={() => setenableFullScreen(!enableFullScreen)}
                  >
                    Full Screen
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* <Header onLogoutClick={() => signOut()} session={session} /> */}
      <main>
        <div id="ForFullScreen">
          {modalIsOpen ? (
            <Confetti
              width="2000%"
              height="2000%"
              numberOfPieces={1000}
              gravity={0.3}
            />
          ) : null}
          <ReactHowler src={`/${applausing}.mp3`} playing={modalIsOpen} />

          <Modal
            ariaHideApp={false}
            preventScroll={true}
            style={customStyles}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            <div style={{ textAlign: "center" }}>
              <h1 style={{ textAlign: "center" }}>Winner</h1>
              <h3
                style={{
                  textAlign: "center",
                  marginBottom: "5%",
                  fontFamily: "auto",
                }}
              >
                {thewinner}
              </h3>
              <button onClick={closeModal}>close</button>
            </div>
          </Modal>

          <div className="row justify-content-center">
            <div className="col-12 col-md-6">
              {webState.seg.length > 0 && gameType == "wheel" && (
                <div>
                  <img
                    src="/wheel_frame.png"
                    className="position-absolute wheel_frame threeDRotate"
                  />
                  {/* <img src="logo.jpg" width="125" height='125' className='centerWheelImg' /> */}
                  <WheelComponent
                    segments={webState.seg}
                    segColors={segCol}
                    onFinished={(winner) => onFinished(winner)}
                    primaryColor="gray"
                    contrastColor="white"
                    isOnlyOnce={false}
                    size={290}
                    upDuration={1000}
                    // downDuration={22500}
                    // 125 for 1 seconds
                    // 625 for 5 seconds
                    // 1250 for 10 seconds
                    // 2500 for 20 seconds
                    // 5000 for 40 seconds
                    // 10000 for 80 seconds
                    // 22500 for 3 minutes

                    downDuration={parseInt(spinTime) * 125}
                    spinSeconds={parseInt(spinTime)}
                    shouldWeSpin={shouldWeSpin}
                    setShouldWeSpin={setShouldWeSpin}
                    fontFamily="Arial"
                  />
                  <ReactHowler src="/wheel-spin.mp3" playing={soundplay} />
                </div>
              )}

              {console.log("participants", itemsForPot.length)}
              {webState.seg.length > 0 && gameType == "pot" && (
                <div className={`pot-group ${shakeAnimateClass}`}>
                  <img
                    src="/pot_img.png"
                    className=" wheel_frame pot-img position-absolute"
                  />
                  <div
                    className="row opacity-50 position-relative"
                    style={{
                      top: `${3000 / itemsForPot.length}px`,
                      left: "100px",
                    }}
                  >
                    {itemsForPot.reverse().map((item, index) => {
                      return item.name.length > 5 ? (
                        <div key={index} className="col-4">
                          <div className="card name-card transform2 position-relative">
                            <div className="col-12">
                              <div className="card-body">
                                <div key={item._id}>
                                  <h5 className="card-title">{item.name}</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div key={index} className="col-3">
                          <div className="card name-card transform position-relative">
                            <div className="col-12">
                              <div className="card-body">
                                <div key={item._id}>
                                  <h5 className="card-title">{item.name}</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              <div className="clearfix"></div>
            </div>
          </div>
        </div>

        {gameType == "wheel" && (
          <div className="row justify-content-center">
            <div
              className="col-6 col-md-2 m-5 text-center"
              style={{ paddingLeft: "3%" }}
            >
              <button
                style={{ display: showdivs }}
                type="button"
                className="ThreeD-mode btn btn-purple btn-radius bg-purple text-white btn-radius btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#threeDModeModal"
              >
                3D MODE
              </button>
            </div>
          </div>
        )}

        <form
          style={{ display: showdivs }}
          style={{ marginLeft: "5%" }}
          className="row justify-content-center mt-3"
          method="post"
          onSubmit={addParticipant}
        >
          <div style={{ display: showdivs }} className="col-8 col-md-5 ">
            <div className="input-group mycustom ">
              <input
                type="text"
                className="form-control"
                placeholder="Participant Name"
                name="participantName"
                required
              />
              <div className="input-group-prepend">
                <input
                  defaultValue={1}
                  className="Participants-repeat"
                  list="Participantsrepeat"
                  id="moreParticpants"
                />
                <datalist id="Participantsrepeat">
                  <option value={1}>1</option>
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                </datalist>
                <button
                  type="submit"
                  className="btn btn-radius btn-sm"
                  id="inputGroupPrepend2"
                >
                  <img src="plus.png" width="25" className="m-1" />
                </button>
              </div>
            </div>
          </div>
          <div style={{ display: showdivs }} className="col-2 col-md-1">
            <div style={{ display: "flex", flexDirection: "row" }}>
              {gameType == "pot" && (
                <>
                  <div
                    id="shakeBtn"
                    onClick={shakeBtn}
                    className="my-2 text-purple fs-4 fw-bold"
                  >
                    Shake
                  </div>
                </>
              )}
              {gameType == "wheel" && (
                <>
                  <div
                    id="spinBtn"
                    onClick={() => settheShouldWeSpin(true)}
                    className="my-2 text-purple fs-4 fw-bold"
                  >
                    Spin
                  </div>
                </>
              )}
              <button
                type="Button"
                style={{ marginLeft: "30%" }}
                onClick={() => shuffleArray(webState)}
                className="btn btn-white text-purple fs-4 fw-bold"
              >
                Shuffle
              </button>
            </div>
          </div>
        </form>

        <div
          style={{ display: showdivs }}
          className="Pot-or-Wheel col-12 text-center m-3"
        >
          <div className="btn-group " role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-purple btn-radius bg-purple text-white btn-radius btn-lg"
              onClick={(e) => togglePotWheel(e, "pot")}
            >
              POT
            </button>
            <button
              type="button"
              className="btn btn-purple btn-radius bg-purple text-white btn-radius btn-lg"
              onClick={(e) => togglePotWheel(e, "wheel")}
            >
              WHEEL
            </button>
          </div>
        </div>

        <div style={{ display: showdivs }} className="m-5 test">
          <div className="row">
            {webState.items.map((item, index) => (
              // eslint-disable-next-line react/jsx-key
              <div key={index} className="col-6 col-md-6">
                {console.log("coming", item)}
                <div className="card mb-3 name-card">
                  <div
                    className="row g-0"
                    style={{ border: "1px solid white", borderRadius: "5px" }}
                  >
                    <div className=" col-4 col-md-4">
                      <img
                        src="logo.jpg"
                        className="img-fluid rounded-circle"
                        alt="..."
                      />
                    </div>
                    <div className="col-7 col-md-7">
                      <div className="card-body">
                        <div key={item._id}>
                          <h5 className={`card-title ${animatenames}`}>
                            {item.name} ({item.repeatation})
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-1">
                      <div onClick={() => deleteParticipant(item._id, index)}>
                        x
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: showdivs }} className="row">
          <div className="col-12">
            <div
              className="modal fade login-modal"
              id="loginModal"
              tabIndex="-1"
              aria-labelledby="loginModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="loginModalLabel">
                      Login to your account
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form method="POST" >
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="exampleInputPassword1"
                        />
                      </div>
                      <div className="d-grid gap-2">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Login
                        </button>
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => signIn()}
                          type="button"
                        >
                          Sign in with Google
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div> */}
                </div>
              </div>
            </div>

            <div
              className="modal fade login-modal"
              id="settingsModal"
              tabIndex="-1"
              aria-labelledby="settingsModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog ">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="row justify-content-center">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12 text-center">
                            <div
                              className="btn-group "
                              role="group"
                              aria-label="Basic example"
                            >
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={(e) => togglePotWheel(e, "pot")}
                              >
                                POT
                              </button>
                              <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={(e) => togglePotWheel(e, "wheel")}
                              >
                                WHEEL
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="row my-4">
                          <div className="col-3">
                            <strong># OF ENTRIES</strong>
                          </div>
                          <div className="col-8">
                            <input
                              type="range"
                              min="1"
                              max="225"
                              className="range"
                              defaultValue="100"
                              onChange={getEntriesValue}
                            />
                          </div>
                          <div className="col-1">{totalEntries}</div>
                        </div>
                        {/* <div className="row my-4">
                          <div className="col-3"><strong>WHEEL SPEED</strong></div>
                          <div className="col-8">
                            <input type="range" min="1" max="5" className="range" onChange={getWheelSpeed} />
                          </div>
                          <div className="col-1">{wheelSpeed}</div>
                        </div> */}
                        <div className="row my-4">
                          <div className="col-3">
                            <strong>SPIN TIME</strong>
                          </div>
                          <div className="col-8">
                            <input
                              type="range"
                              min="3"
                              max="180"
                              className="range"
                              defaultValue="3"
                              onChange={getSpinTime}
                            />
                          </div>
                          <div className="col-1">{spinTime}</div>
                        </div>
                        <div className="row my-4">
                          <div className="col-3">
                            <strong>SHAKE TIME</strong>
                          </div>
                          <div className="col-8">
                            <input
                              type="range"
                              min="3"
                              max="180"
                              className="range"
                              defaultValue="3"
                              onChange={getShakeTime}
                            />
                          </div>
                          <div className="col-1">{shakeTime}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade login-modal"
              id="threeDModeModal"
              tabIndex="-1"
              aria-labelledby="3dModeModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">3D Mode</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="row justify-content-center">
                      <div className="col-12">
                        <div className="row my-4">
                          <div className="col-4">
                            <strong>WHEEL SPEED</strong>
                          </div>
                          <div className="col-7">
                            <input
                              type="range"
                              min="0"
                              max="55"
                              className="range"
                              onChange={getThreeDMode}
                            />
                          </div>
                          <div className="col-1">{threeDMode}</div>
                        </div>
                        {/* <div className="row my-4">
                          <div className="col-3"><strong>SPIN TIME</strong></div>
                          <div className="col-8">
                            <input type="range" min="3" max="180" className="range" value="3" onChange={getSpinTime} />
                          </div>
                          <div className="col-1">{spinTime}</div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  {/* <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: showdivs }} className="row my-5">
          <div className="col-8 mx-auto">
            <div className="fw-bold fs-5 text-center">
              Welcome to the most interactive and fun website for picking
              names,making unbaised decisions and spin a wheel interaction
            </div>
          </div>
        </div>
      </main>

      <footer style={{ display: showdivs }}>
        <div className="row my-5 justify-content-center">
          <div className="col-3">
            <div className="card footer-card text-center">
              <img
                src="unlimitednames.png"
                className="card-img-top mx-auto d-block"
              />
              <div className="card-body">
                <h5 className="card-title">Unlimited Names</h5>
                <p className="card-text text-secondary">
                  <small>
                    Enter over 250 names without any glitch or hassel.
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card footer-card text-center">
              <img
                src="checkicon.png"
                className="card-img-top mx-auto d-block"
              />
              <div className="card-body">
                <h5 className="card-title">Top Security</h5>
                <p className="card-text text-secondary">
                  <small>
                    We are committed to protecting and respecting your privacy
                    and the security of your data.
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card footer-card text-center">
              <img
                src="speechicon.png"
                className="card-img-top mx-auto d-block"
              />
              <div className="card-body">
                <h5 className="card-title">How to use Pot of Names</h5>
                <p className="card-text text-secondary">
                  <small>
                    Type in your entries in the textbox to the right of the
                    wheel. Click the wheel to spin it and get a random winner.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12">
            <ul className="footer-social-icons">
              <li>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="fontawesome-icon"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="fontawesome-icon facebook-icon"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faPinterestP}
                  className="fontawesome-icon"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="fontawesome-icon"
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  className="fontawesome-icon"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-2">
            <Link href="https://potofnames.com/">
              <img src="logo.jpg" className="img-fluid sponsor-img" alt="..." />
            </Link>
          </div>
          <div className="col-2">
            <Link href="https://pickapot.com/">
              <img
                src="paplogo.png"
                className="img-fluid sponsor-img"
                alt="..."
              />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="text-center">
              <small>
                A Project of PICKAPOT LLC. Trademarks and brands are the
                property of their respective owners.
              </small>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="text-center">
              <small>&copy; 2021 POTOFNAMES LLC. ALL RIGHT RESERVED.</small>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
