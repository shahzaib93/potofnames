import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// import jwt from 'jsonwebtoken'
import React, { useEffect, useState, createContext } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { apiUrl } from "../utils";
import {
  faFacebookF,
  faInstagramSquare,
  faLinkedinIn,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// http://localhost:3000/api/participants
// http://localhost:3000/api/participants
// import styled, { ThemeProvider } from "styled-components";
import { useTheme } from "next-themes";
import Signup from "./components/signup";
import Login from "./components/login";
import Modal from "react-modal";

function Settings() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  // var Noofentries = createContext(null)
  console.log("location", router.pathname);
  const [entries, setEntries] = useState();
  const [shakeTime, setshakeTime] = useState();
  const [spinTime, setspinTime] = useState();
  const [applausing, setApplausing] = useState("applause-01");
  const [selectedFile, setSelectedFile] = useState();
  const [ShowModalBtn, setShowModalBtn] = useState("ON");
  const [showLoginModal,setshowLoginModal] = useState(false)
  const [showSignupModal,setshowSignupModal] = useState(false)

  //   if (typeof window !== 'undefined') {
  //   //in your test1
  // //foo is the key, bar is the value
  // localStorage.setItem("foo", "bar")

  // //in your test 2 you can get the bar by using foo key
  // const bar = localStorage.setItem("foo", "bar")

  // console.log(bar)// bar
  // }
  //

  useEffect(() => {
    localStorage.setItem("Entries", 15);
    localStorage.setItem("ShakeTime", 5);
    localStorage.setItem("SpinTime", 5);
  });

  const getEntries = (event) => {
    setEntries(event.target.value);
    console.log(entries);
  };

  const getSpinTime = (event) => {
    setspinTime(event.target.value);
    console.log(spinTime);
  };

  const getShakeTime = (event) => {
    setshakeTime(event.target.value);
    console.log(shakeTime);
  };

  useEffect(() => {
    localStorage.setItem("Entries", entries);
    localStorage.setItem("ShakeTime", shakeTime);
    // if(!spinTime){
    //   localStorage.setItem("SpinTime",2)
    // }
    localStorage.setItem("SpinTime", spinTime);
    // router.reload("/")
  }, [entries, shakeTime, spinTime]);
  const { data: session } = useSession();
  if (session) {
    console.log(`You're signed in`);
    console.log(session);
  } else {
    console.log(`You are signed out`);
  }

  const getApplause = (event) => {
    setApplausing(event.target.value);
    // console.log(shakeTime);
  };

  const getIMG = (event) => {
    const reader = new FileReader();
    console.log("img", event.target.files[0]);
    reader.readAsDataURL(event.target.files[0]);

    reader.addEventListener("load", () => {
      console.log("result", reader.result);
      localStorage.setItem("CenterLogo", reader.result);
    });
  };

  const getCSVFile = (event) => {
    const reader = new FileReader();
    console.log("file", event.target.files[0]);
    // const body = new FormData();
    // body.append("file", event.target.value);
    reader.readAsText(event.target.files[0]);

    console.log("my file", reader);
    reader.onload = function (e) {
      const mycsv = e.target.result;
      const headers = mycsv.slice(0, mycsv.indexOf("\n")).split(",");
      const rows = mycsv.slice(mycsv.indexOf("\n") + 1).split("\n");

      const newArray = rows.map((row) => {
        const values = row.split(",");
        const eachObject = headers.reduce((obj, header, i) => {
          obj[header] = values[i];
          obj["repeatation"] = 1;
          return obj;
        }, {});
        return eachObject;
      });
      console.log("sknsnsnxskc", newArray);
      localStorage.setItem("csvdata", JSON.stringify(newArray));
    };
  };

  const SelectedImage = async (e) => {
    // e.target.style.backgroundColor = "gray"
    await localStorage.setItem("ArrowImage", e.target.alt);
     console.log("AAAAA" ,await localStorage.getItem("ArrowImage"))
  };

  const SelectedWheelImage = async (e) => {
    // e.target.style.backgroundColor = "gray"
    
    await localStorage.setItem("WheelImage", e.target.alt);
    if(e.target.alt=="wheel_frame1"){await localStorage.setItem("SegmentColor","#1784bf")}
      else if(e.target.alt=="wheel_frame2"){await localStorage.setItem("SegmentColor","#29f930")}
      else if(e.target.alt=="wheel_frame3"){await localStorage.setItem("SegmentColor","#de1d1d")}
      else if(e.target.alt=="wheel_frame4"){await localStorage.setItem("SegmentColor","#9d17bf")}
      else if(e.target.alt=="wheel_frame5"){await localStorage.setItem("SegmentColor","#de1d1d")}
  };
  

  const getArrowImg = (event) => {
    const reader = new FileReader();
    console.log("img", event.target.files[0]);
    reader.readAsDataURL(event.target.files[0]);

    reader.addEventListener("load", () => {
      console.log("result", reader.result);
      localStorage.setItem("ArrowImage", reader.result);
    });
  };

  const ShowOrHideModal = async (event) => {
    // document.getElementById("MODALON").setAttribute("checked",false)
    // document.getElementById("MODALOFF").setAttribute("checked",false)

    console.log("eeeee", event.target.id);
    await localStorage.setItem("SHOW", event.target.id);
    const Show = await localStorage.getItem("SHOW");
    console.log("SHOW", Show);
    if (Show == "MODALON") {
      await localStorage.setItem("ShowWinnerModalSettings", true);
      document.getElementById("MODALON").setAttribute("checked", true);
    } else if (Show == "MODALOFF") {
      await localStorage.setItem("ShowWinnerModalSettings", false);
      document.getElementById("MODALOFF").setAttribute("checked", true);
    }
  };


  const getArrowPosition= async(event)=>{
    console.log("AAA",event.target.value)
      await localStorage.setItem("ArrowPosition",event.target.value)
  }

  useEffect(() => {
    window.onhashchange = function() {
      window.location.replace("/")
      
     }
    const Show = localStorage.getItem("SHOW");
    console.log("SHOW", Show);
    if (Show == "MODALON") {
      document.getElementById("MODALON").setAttribute("checked", true);
    } else if (Show == "MODALOFF") {
      document.getElementById("MODALOFF").setAttribute("checked", true);
    }
    // const applauseelem = window.document.getElementById("applause").value
    console.log("my apllausing", applausing);
    // setApplausing(applauseelem)
    localStorage.setItem("Applause", applausing);
  }, [applausing]);

  // useEffect(() => {
  //   const data = localStorage.getItem("csvdata")
  //   console.log("data csv",JSON.parse(data));
  // }, []);

const ToHome = () =>{
  // router.push("/",null,{shallow:false})
  window.location.replace("/")
}



  return (
    <div className="container container-sm container-md mb-5">
      <Head>
        <title>Pot of Names</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="row">
        <div className="col-12 ">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src="logo.png" width="150" height="85" />
              </a>
              <div className="d-flex">
                <div className="navbar-nav">
                  <a
                    type="button"
                    className="nav-link active px-4"
                    onClick={() => ToHome()}
                  >
                    HOME
                  </a>
                  {session ? (
                    <button
                      className="nav-link px-4 btn btn-link"
                      type="button"
                      onClick={() => signOut()}
                    >
                      LOGOUT
                    </button>
                  ) : (
                    <div style={{ display: "inherit" }}>
                      <button
                        type="button"
                        className="px-4 nav-link btn btn-link"
                        onClick={()=>setshowLoginModal(!showLoginModal)}
                      >
                        LOGIN
                      </button>
                      <button
                        type="button"
                        className="px-4 nav-link btn btn-link"
                        // data-bs-toggle="modal"
                        // data-bs-target="#SignupModal"
                        // onClick={router.push("/api/auth/signin")}
                        onClick={()=>setshowSignupModal(!showSignupModal)}

                      >
                        SIGNUP
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main>
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
                    onClick={(e) => setTheme("light")}
                  >
                    DAY
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={(e) => setTheme("dark")}
                  >
                    NIGHT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center my-5 ">
          <div className="col-6">
            <div className="row my-4">
              <div className="col-3 ">
                <strong># OF ENTRIES</strong>
              </div>
              <div className="col-8">
                <input
                  type="range"
                  min="1"
                  max="200"
                  defaultValue="10"
                  onChange={getEntries}
                  className="range"
                  id="myRange"
                />
              </div>
              <div className="col-1">{entries} </div>
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
                  defaultValue="5"
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
                  defaultValue="5"
                  onChange={getShakeTime}
                />
              </div>
              <div className="col-1">{shakeTime}</div>
              <div className="row my-4">
                <div className="col-3 mt-1">
                  <strong>SELECT MUSIC</strong>
                </div>
                <div className="col-8">
                  <select
                    onChange={getApplause}
                    style={{
                      width: "55%",
                      height: "110%",
                      borderRadius: "5px",
                      border: "2px solid #4f56a5",
                    }}
                    name="applause"
                    id="applause"
                  >
                    <option value="applause-01">Applause 1</option>
                    <option value="applause-02">Applause 2</option>
                    <option value="applause-03">Applause 3</option>
                  </select>
                </div>
                
              </div>
              <div className="row my-4">
                <div className="col-3 mt-1">
                  <strong>SELECT ARROW POSITION</strong>
                </div>
                <div className="col-8">
                  <select
                    onChange={getArrowPosition}
                    style={{
                      width: "55%",
                      height: "50%",
                      borderRadius: "5px",
                      border: "2px solid #4f56a5",
                    }}
                    name="applause"
                    id="applause"
                  >
                    <option value="At-12">At 12'O clock</option>
                    <option value="At-3">At 3'O clock</option>
                    <option value="At-6">At 6'O clock</option>
                    <option value="At-9">At 9'O clock</option>

                  </select>
                </div>
                
              </div>
              
              <div
                className="row justify-content-start"
                style={{ marginLeft: "3%" }}
              >
                <div className="col-8">
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
                          onClick={(e) => setApplausing("applause-01")}
                        >
                          ON
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={(e) => setApplausing("OFF")}
                        >
                          OFF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row my-4">
                <div className="col-4 mt-1">
                  <strong>SELECT CSV FILE</strong>
                </div>
                <div className="col-8">
                  <input type="file" onChange={getCSVFile} accept=".csv" />
                </div>
              </div>
              <div className="row my-4">
                <div className="col-4 mt-1">
                  <strong>SELECT WHEEL LOGO</strong>
                </div>
                <div className="col-8">
                  <input type="file" onChange={getIMG} />
                </div>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-4 mt-1">
                <strong>SELECT ARROW IMAGE</strong>
              </div>
              <div className="col-8">
                <input onChange={getArrowImg} type="file" />
              </div>
              <div className="row my-4 Arrow-Images">
                <img
                  onClick={(e) => SelectedImage(e)}
                  alt="Arrow1.png"
                  src="Arrow1.png"
                  style={{ width: "20%", height: "100%" }}
                />

                <img
                  onClick={(e) => SelectedImage(e)}
                  alt="Arrow2.png"
                  src="Arrow2.png"
                  style={{ width: "20%", height: "100%" }}
                />

                <img
                  onClick={(e) => SelectedImage(e)}
                  alt="Arrow3.png"
                  src="Arrow3.png"
                  style={{ width: "20%", height: "100%" }}
                />
              </div>
            </div>
            <div className="row my-4">
              <div className="col-4 mt-1">
                <strong>SELECT WHEEL DESIGN</strong>
              </div>
              <div className="row my-4 Arrow-Images">
                <img
                  onClick={(e) => SelectedWheelImage(e)}
                  alt="wheel_frame1"
                  src="wheel_frame1.png"
                  style={{ width: "20%", height: "100%" }}
                />
                <img
                  onClick={(e) => SelectedWheelImage(e)}
                  alt="wheel_frame2"
                  src="wheel_frame2.png"
                  style={{ width: "20%", height: "100%" }}
                />

                <img
                  onClick={(e) => SelectedWheelImage(e)}
                  alt="wheel_frame3"
                  src="wheel_frame3.png"
                  style={{ width: "20%", height: "100%" }}
                />
                <img
                  onClick={(e) => SelectedWheelImage(e)}
                  alt="wheel_frame4"
                  src="wheel_frame4.png"
                  style={{ width: "20%", height: "100%" }}
                />
                  <img
                  onClick={(e) => SelectedWheelImage(e)}
                  alt="wheel_frame5"
                  src="wheel_frame5.png"
                  style={{ width: "20%", height: "100%" }}
                />
              </div>
            </div>
            <div className="row my-4">
              <div className="col-4 mt-1">
                <strong>SHOW OR HIDE TOTAL PARTICIPANTS</strong>
              </div>
              <div className="col-8">
                <div
                  className="btn-group "
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={(e) =>
                      localStorage.setItem("ShowParticipants", true)
                    }
                  >
                    SHOW
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={(e) =>
                      localStorage.setItem("ShowParticipants", false)
                    }
                  >
                    HIDE
                  </button>
                </div>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-4 mt-1">
                <strong>SHOW OR HIDE CONFETTI</strong>
              </div>
              <div className="col-8">
                <form onChange={ShowOrHideModal}>
                  ??{" "}
                  <input
                    type="radio"
                    id="CONFETTIOFF"
                    name="CONFETTI"
                    value="OFF"
                  />
                  ?? <label for="OFF">HIDE</label>
                  <br />
                  ?? <input type="radio" id="MODALON" name="MODAL" value="ON" />??{" "}
                  <label for="ON">SHOW</label>
                  <br />
                </form>

                <div
                  className="btn-group "
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={(e) => localStorage.setItem("ShowConfetti", true)}
                  >
                    SHOW
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={(e) => localStorage.setItem("ShowConfetti", false)}
                  >
                    HIDE
                  </button>
                </div>
              </div>
            </div>

            <div className="row my-4">
              <div className="col-4 mt-1">
                <strong>SHOW OR HIDE Winner MODAL</strong>
              </div>
              <div className="col-8">
                <form  onChange={ShowOrHideModal}>
                  ??{" "}
                  <input type="radio" id="MODALOFF" name="MODAL" value="OFF" />??{" "}
                  <label for="OFF">HIDE</label>
                  <br />
                  ?? <input type="radio" id="MODALON" name="MODAL" value="ON" />??{" "}
                  <label for="ON">SHOW</label>
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <div></div> */}


        {showLoginModal?<Login Loginstate={(data)=>setshowLoginModal(data)}  />:null}
          {showSignupModal?<Signup Signupstate={(data)=>setshowSignupModal(data)} />:null}



        <div className="row my-5">
          <div className="col-8 mx-auto">
            <div className="fw-bold fs-5 text-center">
              Welcome to the most interactive and fun website for picking
              names,making unbaised decisions and spin a wheel interaction
            </div>
          </div>
        </div>
      </main>

      <footer>
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
            <Link href={apiUrl("/")}>
              <img src="logo.png" className="img-fluid sponsor-img" alt="..." />
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

export default Settings;
