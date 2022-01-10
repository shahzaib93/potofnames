import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactHowler from "react-howler";
// import jwt from 'jsonwebtoken'
import React, { useEffect, useState } from "react";
import WheelComponent from "../plugins/amazing-spin-wheel-game";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession, signIn, signOut, getCsrfToken } from "next-auth/react";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  faFacebookF,
  faInstagramSquare,
  faLinkedinIn,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Confetti from "react-confetti";
import Modal from "react-modal";
import Signup from "./components/signup";
import Login from "./components/login";
import Settings from "./components/settings";
// https://potofnames/api/participants
// https://potofnames/api/participants
export const getStaticProps = async () => {
  const res = await fetch("https://potofnames.com/api/participants");
  const data = await res.json();
  const timesres = await fetch("https://potofnames.com/api/wheelSpinTimes");
  const times = await timesres.json()
  const timesData = times[0].times
  // const fragmentsColor;
  // if(localStorage.getItem("SegmentColor")!==null){
  //   fragmentsColor=localStorage.getItem("SegmentColor")
  // }

  return {
    props: { participants: data,Wheeltimes:timesData },
  };
};

export default function Home({ participants,Wheeltimes }) {
  // const audio = new Audio("/mixkit-clapping-male-crowd-439.wav")

  const router = useRouter();
  console.log("location", router.pathname);
  const [modalIsOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const [webState, setWebState] = useState({ items: [], seg: [] });
  // const [showWinnerModal, setshowWinnerModal] = useState(false);
  const [shouldWeSpin, setShouldWeSpin] = useState(false);
  const [soundplay, setsoundplay] = useState(false);
  const customStyles = {
    barCompleted: {
      backgroundColor:"blue"
      
    },
    
  };
  const [showdivs, setshowdivs] = useState("block");
  const [thewinner, setthewinner] = useState("");
  const [enableFullScreen, setenableFullScreen] = useState(false);
  const [shakeAnimateClass, setShakeAnimateClass] = useState("");
  const [animatenames, setAnimatenames] = useState("");

  const [threeDMode, setThreeDMode] = useState(0);
  const [totalEntries, setTotalEntries] = useState(15);
  const [wheelSpeed, setWheelSpeed] = useState(5);
  const [spinTime, setSpinTime] = useState(5);
  const [shakeTime, setShakeTime] = useState(5);
  const [gameType, setGameType] = useState("wheel");
  const [showParticipants, setShowParticipants] = useState(false);
  const [applausing, setApplausing] = useState("applause-01");
  const [typeAuth, setTypeAuth] = useState("Login");
  const [signupdata, setsignupdata] = useState("");
  const [showConfetti, setshowConfetti] = useState(true);
  const [showWinnerModalSettings, setshowWinnerModalSettings] = useState(true);
  const [csrfToken,setcsrfToken] = useState("")
  const [showLoginModal,setshowLoginModal] = useState(false)
  const [showSignuoModal,setshowSignupModal] = useState(false)
  const [showSettingsModal,setshowSettingsModal] = useState(false)
  const [spinWheelTimes,setspinWheelTimes] = useState("")
  const [wheelImg,setwheelImg] = useState("wheel_frame")
  const [remainingEntries,setremainingEntries] = useState("")
  const [ArrowPos,setArrowPos] = useState("At-3")
  const [SegmentColor,setSegmentColor] = useState("#171dbf")


useEffect(()=>{
  setShowParticipants(showParticipants)
},[setShowParticipants,showParticipants])

useEffect(()=>{
  console.log("SEGCOLORS",localStorage.getItem("SegmentColor"))
  if(localStorage.getItem("SegmentColor")!==null){
    setSegmentColor(localStorage.getItem("SegmentColor"))
  }
  if(localStorage.getItem("Entries")!==null){
    setTotalEntries(localStorage.getItem("Entries"))
  }
  // setSegmentColor(fragmentsColor)
  gettingArrowImage()
  setremainingEntries(totalEntries-webState.items.length)
  setspinWheelTimes(Wheeltimes)
  console.log("GGGGG",spinWheelTimes)
  console.log("OO",localStorage.getItem("WheelImage")!==undefined)
console.log("WWWW",wheelImg)
  if(localStorage.getItem("WheelImage")!==null){
    setwheelImg(localStorage.getItem("WheelImage"))
  }

},[wheelImg,totalEntries,webState,remainingEntries,ArrowPos])


const gettingArrowImage = async()=>{
  console.log("OOOOOOOOO",await localStorage.getItem("ArrowPosition"))
  if(await localStorage.getItem("ArrowPosition")!==null){
    setArrowPos(await localStorage.getItem("ArrowPosition"))
  }

}

  const segCol = [];
  const tempParticipants = [];

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

  var itemsForPot = [...webState.items]
  console.log("ITEMSSSSS",itemsForPot)
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

    localStorage.setItem("ALLPARTICIPANTS", JSON.stringify(webState.items));
    setAnimatenames("shuffleAnimation");
    setInterval(() => setAnimatenames(""), 1000);
  }

  if (session) {
    console.log(`You're signed in`);
    console.log(session);
  } else {
    console.log(`You are signed out`);
  }
  function openModal() {
    setsoundplay(false);
    setIsOpen(true);
  }

// console.log("LLLLL",participants)

  function closeModal() {
    setIsOpen(false);
  }

  const getThreeDMode = (event) => {
    setThreeDMode(event.target.value);
    console.log(threeDMode);
  };

  const settheShouldWeSpin = async () => {
    const timesresget = await fetch("https://potofnames.com/api/wheelSpinTimes");
  const times = await timesresget.json();
  var timesData  = times[0].times
  console.log("TTTTTTTTT",timesData)
    const timerespost = await fetch("https://potofnames.com/api/wheelSpinTimes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({times:timesData+1}),
    });
    const time = await timerespost.json();
    console.log("TTTT",time.addWheelSpinTimes)
    setspinWheelTimes(time.addWheelSpinTimes.times)
    
    console.log("ssslocal", ! localStorage.getItem("SpinTime")==null);
    if (! localStorage.getItem("SpinTime")===null ) {
      console.log("sssSpinTime", IF);
      await setSpinTime(parseInt(localStorage.getItem("SpinTime")));
    }
    if (!localStorage.getItem("Applause") === null) {
      await setApplausing(localStorage.getItem("Applause"));
    }
    console.log("applausinggg", applausing);
    setShouldWeSpin(true);
    setsoundplay(true);
    console.log("sssssssreturnedspin", spinTime);
    console.log("sssssssentries", totalEntries);

  };

  const togglePotWheel = (event, value) => {
    console.log(value);
    setGameType(value);
  };
  const shakeBtn = async () => {
    if (!localStorage.getItem("ShakeTime") === null) {
      await setShakeTime(parseInt(localStorage.getItem("ShakeTime")));
    }
    if (!localStorage.getItem("Applause") === null) {
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
    const CSRFToken = getCsrfToken().then((CSRF)=>setcsrfToken(CSRF))
    

    // console.log("CSRF:",CSRFToken)
    console.log("MMMMMMM",webState)

    if (!localStorage.getItem("ShowWinnerModalSettings") === null) {
      setshowWinnerModalSettings(false);
    }

    if (!localStorage.getItem("ShowConfetti") === null) {
      setshowConfetti(false);
    }
    localStorage.setItem(
      "ALLPARTICICPANTS",
      JSON.stringify([
        { name: "Asif", repeatation: 1 },
        { name: "Jami", repeatation: 1 },
        { name: "Zahid", repeatation: 1 },
        { name: "Khalid", repeatation: 1 },
        { name: "Kayani", repeatation: 1 },
        { name: "Mahir", repeatation: 1 },
        { name: "Shehzad", repeatation: 1 },
        { name: "Aslam", repeatation: 1 },
        ,...participants])
    );

    if (!localStorage.getItem("ALLPARTICIPANTS") === null) {
      tempParticipants = JSON.parse(localStorage.getItem("ALLPARTICIPANTS"));
    } else {
      tempParticipants = [
        { name: "Asif", repeatation: 1 },
        { name: "Jami", repeatation: 1 },
        { name: "Zahid", repeatation: 1 },
        { name: "Khalid", repeatation: 1 },
        { name: "Kayani", repeatation: 1 },
        { name: "Mahir", repeatation: 1 },
        { name: "Shehzad", repeatation: 1 },
        { name: "Aslam", repeatation: 1 },...participants
      ];
    }

    if (!localStorage.getItem("Entries") === null) {
      setTotalEntries(parseInt(localStorage.getItem("Entries")));
    }

    // console.log("Entries",localStorage.getItem("Entries") !== null);
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
    console.log("apppppplause", localStorage.getItem("Applause"));
    if (!localStorage.getItem("Applause") === null) {
      setApplausing(localStorage.getItem("Applause"));
    }
    console.log("My applausing", applausing);
  }, [webState, gameType]);

  for (let i = 0; i < webState.seg.length; i++) {
    if (i % 2 === 0) {
      console.log("SSEGMENT",SegmentColor)
      if(SegmentColor=="#1784bf"){segCol.push("#1784bf")}
      else if(SegmentColor=="#29f930"){segCol.push("#29f930")}
      else if(SegmentColor=="#de1d1d"){segCol.push("#de1d1d")}
      else if(SegmentColor=="#9d17bf"){segCol.push("#9d17bf")}
      else if(SegmentColor=="#de1d1d"){segCol.push("#de1d1d")}
      else{segCol.push("#171dbf")}
      
    } else {
      segCol.push("#dfdede");
    }
  }


  

  //wheel_frame1=#2964f9
  //wheel_frame2=#29f930
  //wheel_frame3=#de1d1d
  //wheel_frame4=#9d17bf
  //wheel_frame5=#de1d1d


  useEffect(() => {
    // console.log("pppppp", localStorage.getItem("ShowParticipants"));
    // if (localStorage.getItem("ShowParticipants") !== null) {
    //   setShowParticipants(true);
    // }
    console.log("aaaa", showParticipants);
    const segarr = [];
    const newdata = [];
    const data = JSON.parse(localStorage.getItem("csvdata"));
    if (data != undefined) {
      for (var i = 0; i < data.length; i++) {
        newdata.push({ name: Object.values(data[i])[0], repeatation: 1 });
        segarr.push(Object.values(data[i])[0]);
        // console.log("sk",Object.values(data[i])[0])
      }

      console.log("skdatacsv", newdata);
      console.log("skwebstate", webState);
    }

    setWebState({
      items: [...webState.items, ...newdata],
      seg: [...webState.seg, ...segarr],
    });
    console.log("sknewwebstate", webState);
  }, [participants]);

  const onFinished = (winner) => {
    // const elem =  window.document.getElementById("FULLSCREEN")
    // window.exitFullscreen()
    if (enableFullScreen) {
      closefullScreen();
      setenableFullScreen(!enableFullScreen);
    }
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
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
    // elem2.requestFullscreen()
  };

  const closefullScreen = (elem) => {
    if (!enableFullScreen) {
      document.webkitExitFullscreen();
      // document.exitFullscreen();
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
    event.preventDefault();
    const hello = "hello";
    const more = window.document.getElementById("moreParticpants");
    const arr = Array(parseInt(more.value)).fill(hello);
    console.log("My participant", event.target.participantName.value);
    console.log("participant times", more.value);
    if (!localStorage.getItem("Entries") === null) {
      await setTotalEntries(parseInt(localStorage.getItem("Entries")));
    }
      console.log("AAAAAA",webState.items.length)
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
  useEffect(() => {
    var res;
    var user = "NO";
    if (session) {
      fetch("https://potofnames.com/api/users")
        .then((response) => response.json())
        .then((AllUsers) => {
          for (var i = 0; i < AllUsers.length; i++) {
            if (AllUsers[i].email == session.user.email) {
              console.log("IFSSSS");
              user = AllUsers[i];
              break;
            }
          }
          if (user == "NO") {
            fetch("https://potofnames.com/api/users", {
              body: JSON.stringify({
                name: session.user.name,
                email: session.user.email,
              }),
              headers: { "Content-Type": "application/json" },
              method: "POST",
            })
              .then((response) => response.json())
              .then((data) => {
                res = data;
              });
          }
        });
    }
  }, [session]);

  // const callLogin=()=>{
  //   console.log("FUNCTIONTOCALLLOGIN")
  //   return(
  //     <Login/>
  //   )
  // }

  return (
    <div id="FULLSCREEN" className="container container-sm container-md mb-5">
      <Head>
        <title>Pot of Names</title>
        <meta name="description" content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
        <link rel="icon" href="/favicon.ico" />
        <style>{css}</style>
      </Head>
      
      <header id="header" className="row">
        <div className="col-12 ">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src="logo.png" width="150" />
              </a>
              <div style={{ marginLeft: "10%" }} className="d-flex">
                <div className="navbar-nav">
                  {/* <a className="nav-link active px-4" aria-current="page" href="#">SETTING</a> */}

                  {/* {!enableFullScreen?} */}
                  <button
                    hidden={enableFullScreen}
                    type="button"
                    className="active px-4 nav-link btn btn-link"
                    onClick={() => setshowSettingsModal(!showSettingsModal)}
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
                    <div style={{ display: "inherit" }}>
                      <button
                        hidden={enableFullScreen}
                        type="button"
                        className="px-4 nav-link btn btn-link"
                        // data-bs-toggle="modal"
                        // data-bs-target="#LoginModal"
                        onClick={()=>setshowLoginModal(!showLoginModal)}
                      >
                        LOGIN
                      </button>
                      <button
                        hidden={enableFullScreen}
                        type="button"
                        className="px-4 nav-link btn btn-link"
                        onClick={()=>setshowSignupModal(!showLoginModal)}

                      >
                        SIGNUP
                      </button>
                    </div>
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
                      onClick={() => settheShouldWeSpin()}
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
                  <div style={{marginTop:"2%"}}>Wheel Spinned={spinWheelTimes}</div>
                  {/* <div style={{marginTop:"2%",marginLeft:"1%"}}>Entries Left={remainingEntries}</div> */}
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
              hidden={!showConfetti}
              
            />
          ) : null}
          {applausing == "OFF" ? null : (
            <ReactHowler src={`/${applausing}.mp3`} playing={modalIsOpen} />
          )}
          {showWinnerModalSettings?
          <Modal
            ariaHideApp={false}
            preventScroll={true}
            // style={customStyles}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="Modal-class"
            bodyOpenClassName="Modal-body"
            // overlayClassName="Modal-Overlay"
            
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
          </Modal>:null}

          <div className="row justify-content-center">
            {console.log("pap", showParticipants)}
            {showParticipants?
            <div
            style={{ marginLeft: "5%", fontSize: "25px" }}
            className="row justify-content-center"
          >
            <h3
              style={{
                border: "2px solid #4f56a5",
                width: "fit-content",
                fontFamily: "auto",
                borderRadius: "8px",
              }}
            >
              Total Participants = {webState.items.length}{" "}
            </h3>
          </div>:null}
            
            <div className="col-12 col-md-6">
              {console.log("III",webState.seg.length,gameType)}
              {webState.seg.length > 0 && gameType == "wheel" && (
                <div>
                  {console.log("OOOO",ArrowPos)}
                  {ArrowPos=="At-12"?<img  style={{zIndex:9999,marginTop: "-35px",marginLeft: "290px",width:"100px"}}
                    src={`/arrow.png`}
                    className="position-absolute"
                  />:null}
                  {ArrowPos=="At-3"?<img  style={{zIndex:9999,marginTop: "260px",marginLeft: "585px",width:"100px",transform:"rotate(90deg)"}}
                    src={`/arrow.png`}
                    className="position-absolute"
                  />:null}
                  {ArrowPos=="At-6"?<img  style={{zIndex:9999,marginTop: "555px",marginLeft: "290px",width:"100px",transform:"rotate(180deg)"}}
                    src={`/arrow.png`}
                    className="position-absolute"
                  />:null}
                  {ArrowPos=="At-9"?<img  style={{zIndex:9999,marginTop: "258px",marginLeft: "-10px",width:"100px",transform:"rotate(270deg)"}}
                    src={`/arrow.png`}
                    className="position-absolute"
                  />:null}

                  
                  <img 
                    src={`/${wheelImg}.png`}
                    className="position-absolute wheel_frame threeDRotate"
                  />
                  <WheelComponent
                    segments={webState.seg}
                    segColors={segCol}
                    onFinished={(winner) => onFinished(winner)}
                    primaryColor="gray"
                    contrastColor="white"
                    isOnlyOnce={false}
                    size={290}
                    upDuration={100}
                    // downDuration={22500}
                    // 125 for 1 seconds
                    // 625 for 5 seconds
                    // 1250 for 10 seconds
                    // 2500 for 20 seconds
                    // 5000 for 40 seconds
                    // 10000 for 80 seconds
                    // 22500 for 3 minutes

                    downDuration={spinTime * 125}
                    spinSeconds={spinTime}
                    shouldWeSpin={shouldWeSpin}
                    setShouldWeSpin={setShouldWeSpin}
                    fontFamily="Arial"
                  />
                  <ReactHowler src="/wheel-spin.mp3" playing={soundplay} />
                </div>
              )}

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
        <div
          style={{ display: showdivs }}
          className="Pot-or-Wheel row"
        >
       <div className="row" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",paddingLeft:"30%",paddingRight:"25%"}}>
        
            <button
            style={{width:"20%"}}
              type="button"
              className="btn btn-purple btn-radius bg-purple text-white btn-radius col-3"
              onClick={(e) => togglePotWheel(e, "pot")}
            >
              POT
            </button>
            {gameType == "wheel" && (
              <button 
                style={{width:"fit-content" }}
                type="button"
                className="ThreeD-mode btn btn-purple btn-radius bg-purple text-white btn-radius col-3"
                data-bs-toggle="modal"
                data-bs-target="#threeDModeModal"
              >
                3D MODE
              </button>
        )}
            <button
            style={{width:"fit-content"}}
              type="button"
              className="btn btn-purple btn-radius bg-purple text-white btn-radius  col-3"
              onClick={(e) => togglePotWheel(e, "wheel")}
            >
              WHEEL
            </button>
          
            </div>

        </div>

        <form
          style={{ display: showdivs }}
          style={{ marginLeft: "-11%" }}
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
              
              <img src="shuffle-icon.png" width="30" height="30" style={{marginTop:"12px"}} />
              <div
                type="Button"
                style={{ marginLeft: "5%",}}
                onClick={() => shuffleArray(webState)}
                className="btn  text-purple fs-4 fw-bold"
              >
                shuffle
              </div>

              {gameType == "wheel" && (
                <>
                
                  <div style={{borderLeft:"4px solid #3f29f9",paddingLeft:"13px",paddingTop:"-3px",marginTop:"10%" }}
                    id="spinBtn"
                    onClick={() => settheShouldWeSpin()}
                    className="text-purple fs-4 fw-bold"
                  >
                    spin
                  </div>
                </>
              )}
              {gameType == "pot" && (
                <>
                  <div style={{borderLeft:"4px solid #3f29f9",paddingLeft:"13px",paddingTop:"-3px",marginTop:"10%" }}
                    id="shakeBtn"
                    onClick={shakeBtn}
                    className="text-purple fs-4 fw-bold"
                  >
                    shake
                  </div>
                </>
              )}
            </div>
          </div>
        </form>

        

        <div style={{ display: showdivs }} className="m-5 test">
          <div className="ProgressBarDiv" style={{marginBottom:"5%"}}>
          <ProgressBar bgColor="#3f29f9" baseBgColor="#f8f8ff" maxCompleted={totalEntries} customLabel={`${remainingEntries}  remaining`} completed={remainingEntries}/>
          </div>
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
                        src="logo.png"
                        className="img-fluid rounded-circle"
                        alt="..."
                      />
                    </div>
                    <div className="col-7 col-md-7">
                      <div className="card-body">
                        <div key={item._id}>
                          <h5 className={`card-title ${animatenames}`}>
                            {index + 1}) {item.name}
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
            {showLoginModal?<Login Loginstate={(data)=>setshowLoginModal(data)} />:null}
            {showSignuoModal?<Signup Signupstate={(data)=>setshowSignupModal(data)}/>:null}
            {showSettingsModal?<Settings
            SettingArrowPos={(e)=>setArrowPos(e)}
            SettingSpinTime={(e)=>setSpinTime(e)}
            SettingShakeTime={(e)=>setShakeTime(e)}
            SettingTotalEntries={(e)=>setTotalEntries(e)}
            SettingShowConfetti={(e)=>setshowConfetti(e)}
            SettingShowParticipants={(e)=>setShowParticipants(e)}
            SettingWheelImage={(e)=>setwheelImg(e)}
            SettingApplausing={(e)=>setApplausing(e)}
            SettingShowWinnerModal={(e)=>setshowWinnerModalSettings(e)}
            SettingSegmentColor={(e)=>setSegmentColor(e)}


            // SettingCSVFile={(e)=>setCSV}

            Settingstate={(data)=>setshowSettingsModal(data)}/>
            :null}
{console.log("MMODAL",spinTime)}
            

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
                        {/* <div className="row my-4">
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
                        </div>*/}
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
              <img src="logo.png" className="img-fluid sponsor-img" alt="..." />
            </Link>
          </div>
          <div className="col-2">
            <Link href="http://pickapot.com/">
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
