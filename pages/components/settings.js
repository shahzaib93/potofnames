import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// import jwt from 'jsonwebtoken'
import React, { useEffect, useState, createContext } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import Modal from "react-modal";


const customStyles = {
    content: {
        position: 'absolute',
        top: '40px',
        left: '40px',
        right: '40px',
        bottom: '40px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '8px',
        outline: 'none',
        padding: '20px',
        border:"2px solid grey"
        
  
    },
    overlay:{
        zIndex:9999999

    }
  };

function Settings(props) {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  // var Noofentries = createContext(null)
  console.log("location", router.pathname);
  const [entries, setEntries] = useState(15);
  const [shakeTime, setshakeTime] = useState(5);
  const [spinTime, setspinTime] = useState(5);
  const [entriesToShow, setentriesToShow] = useState(0);
  const [applausing, setApplausing] = useState("applause-01");
  const [selectedFile, setSelectedFile] = useState();
  const [ShowModalBtn, setShowModalBtn] = useState("ON");
  const [showLoginModal,setshowLoginModal] = useState(false)
  const [showSignupModal,setshowSignupModal] = useState(false)
  const [openSettingsModal,setopenSettingsModal] = useState(true)
  const [CSVArr,setCSVArr] = useState([])


  

  useEffect(() => {
    // localStorage.setItem("Entries", 15);
    // localStorage.setItem("ShakeTime", 5);
    // localStorage.setItem("SpinTime", 5);
  },);

  const getEntries = (event) => {
    setEntries(event.target.value);
    console.log(entries);
    localStorage.setItem("Entries", entries);
  };

  const getEntriesToShow = (event) => {
    setentriesToShow(event.target.value);
    console.log("SHOW",entriesToShow);
    localStorage.setItem("EntriesToShow", event.target.value);
  };

  const getSpinTime = (event) => {
    setspinTime(event.target.value);
    console.log(spinTime);
    localStorage.setItem("SpinTime", spinTime);
  };

  const getShakeTime = (event) => {
    setshakeTime(event.target.value);
    console.log(shakeTime);
    localStorage.setItem("ShakeTime", shakeTime);

  };

  useEffect(() => {
    if(localStorage.getItem("Entries")!==null){
      const entries =  localStorage.getItem("Entries")
      setEntries(entries)}
      if(localStorage.getItem("SpinTime")!==null){
      const spintime =  localStorage.getItem("SpinTime")
      setspinTime(spintime)}
      if(localStorage.getItem("ShakeTime")!==null){
      const shaketime =  localStorage.getItem("ShakeTime")
      setshakeTime(shaketime)}
      if(localStorage.getItem("EntriesToShow")!==null){
        const entriestoshow =  localStorage.getItem("EntriesToShow")
        localStorage.setItem("LimitedEntries",true)
       setentriesToShow(entriestoshow)}
  }, []);
  const { data: session } = useSession();
  if (session) {
    console.log(`You're signed in`);
    console.log(session);
  } else {
    console.log(`You are signed out`);
  }

  const getApplause =async (event) => {
    // await setApplausing(event.target.value);
   await localStorage.setItem("Applause", event.target.value);
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
      setCSVArr(newArray)
      console.log("CCC",newArray)
      localStorage.setItem("csvdata", JSON.stringify(newArray));
      fetch(apiUrl("/api/participants")
      , {
      body: JSON.stringify({
        // name: Array(parseInt(more.value)).fill(event.target.participantName.value)

        lst:newArray
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    // const newParticipant = res.json();
    // console.log("aa",newParticipant)
     
    }
      
    
    

    // 
  };

  const SelectedImage = async (e) => {
    // e.target.style.backgroundColor = "gray"
    await localStorage.setItem("ArrowImage", e.target.alt);
    //  console.log("AAAAA" ,await localStorage.getItem("ArrowImage"))
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
    // const Show = localStorage.getItem("SHOW");
    // console.log("SHOW", Show);
    // if (Show == "MODALON") {
    //   document.getElementById("MODALON").setAttribute("checked", true);
    // } else if (Show == "MODALOFF") {
    //   document.getElementById("MODALOFF").setAttribute("checked", true);
    // }
    // const applauseelem = window.document.getElementById("applause").value
    console.log("my apllausing", applausing);
    // setApplausing(applauseelem)
  }, [applausing]);



const closeModal=async()=>{
    // setopenLoginModal(props.opentheModal)
    setopenSettingsModal(false)
    props.Settingstate(false)
    if(localStorage.getItem("ArrowPosition")!==null){
    const arrowpos = await localStorage.getItem("ArrowPosition")
    props.SettingArrowPos(arrowpos)}
    if(localStorage.getItem("Entries")!==null){
    const entries = await localStorage.getItem("Entries")
    props.SettingTotalEntries(entries)}
    if(localStorage.getItem("SpinTime")!==null){
    const spintime = await localStorage.getItem("SpinTime")
    props.SettingSpinTime(spintime)}
    if(localStorage.getItem("ShakeTime")!==null){
    const shaketime = await localStorage.getItem("ShakeTime")
    props.SettingShakeTime(shaketime)}
    if(localStorage.getItem("EntriesToShow")!==null){
      const entriestoshow = await localStorage.getItem("EntriesToShow")
      props.SettingEntriesToShow(entriestoshow)}
    const showconfetti = await localStorage.getItem("ShowConfetti")
    props.SettingShowConfetti(showconfetti)
    const showparticipants = await localStorage.getItem("ShowParticipants")
    props.SettingShowParticipants(showparticipants)
    const wheelimage = await localStorage.getItem("WheelImage")
    props.SettingWheelImage(wheelimage)
    const arrowimage = await localStorage.getItem("ArrowImage")
    props.SettingArrowImage(arrowimage)
    const applause = await localStorage.getItem("Applause")
    props.SettingApplausing(applause)
    const showwinnermodal = await localStorage.getItem("ShowWinnerModalSettings")
    props.SettingShowWinnerModal(showwinnermodal)
    const segmentcolor = await localStorage.getItem("SegmentColor")
    props.SettingSegmentColor(segmentcolor)
    window.location.reload()
}


  return (
      
    <Modal
    isOpen={openSettingsModal}
    onRequestClose={closeModal}
    style={customStyles}
    className="FullModal"
    
  >
    <div >
      <div >
        <div className="modal-header">
          <h3 className="modal-title" id="SignupModalLabel">
            Settings
          </h3>
          <button 
          style={{marginLeft:"15px",marginTop:"0.5px"}}
            type="button"
            className="btn-close"
            onClick={()=>{closeModal()}}
          ></button>
        </div>
        <div className="modal-body">
 
 
        <div className="row justify-content-center">

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
          <div className="col-8">
            <div className="row my-4">
              <div className="col-4 ">
                <strong># OF ENTRIES</strong>
              </div>
              <div className="col-7">
                <input
                  type="range"
                  min="1"
                  max="200"
                  defaultValue={entries}
                  onChange={getEntries}
                  className="range"
                  id="myRange"
                />
              </div>
              <div className="col-1">{entries} </div>
            </div>
            <div className="row my-4">
              <div className="col-4">
                <strong>SPIN TIME</strong>
              </div>
              <div className="col-7">
                <input
                  type="range"
                  min="3"
                  max="180"
                  className="range"
                  defaultValue={spinTime}
                  onChange={getSpinTime}
                />
              </div>
              <div className="col-1">{spinTime}</div>
            </div>
            <div className="row my-4">
              <div className="col-4">
                <strong>SHAKE TIME</strong>
              </div>
              <div className="col-7">
                <input
                  type="range"
                  min="3"
                  max="180"
                  className="range"
                  defaultValue={shakeTime}
                  onChange={getShakeTime}
                />
              </div>
              <div className="col-1">{shakeTime}</div>
              </div>
              <div className="row my-4">
              <div className="col-4">
                <strong>ENTRIES TO SHOW</strong>
              </div>
              <div className="col-7">
                <input
                  type="range"
                  min="5"
                  max={entries}
                  className="range"
                  defaultValue={entriesToShow}
                  onChange={getEntriesToShow}
                />
              </div>
              <div className="col-1">{entriesToShow}</div>
            </div>
              <div className="row my-4">
                <div className="col-4 mt-1">
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
                <div className="col-4 mt-1">
                  <strong>SELECT ARROW POSITION</strong>
                </div>
                <div className="col-8">
                  <select
                    onChange={getArrowPosition}
                    style={{
                      width: "55%",
                      height: "95%",
                      borderRadius: "5px",
                      border: "2px solid #4f56a5",
                    }}
                    name="applause"
                    id="applause"
                  >
                    <option value="At-3">At 3'O clock</option>
                    <option  value="At-12">At 12'O clock</option>
                    <option value="At-6">At 6'O clock</option>
                    <option value="At-9">At 9'O clock</option>

                  </select>
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
                  alt="Arrow"
                  src="Arrow.png"
                  style={{ width: "18%", height: "80%" }}
                />
                <img
                  onClick={(e) => SelectedImage(e)}
                  alt="Arrow1"
                  src="Arrow1.png"
                  style={{ width: "18%", height: "80%" }}
                />

                <img
                  onClick={(e) => SelectedImage(e)}
                  alt="Arrow2"
                  src="Arrow2.png"
                  style={{ width: "18%", height: "80%" }}
                />

                <img
                  onClick={(e) => SelectedImage(e)}
                  alt="Arrow3"
                  src="Arrow3.png"
                  style={{ width: "18%", height: "80%" }}
                />
              </div>
            </div>
            <div className="row my-4">
              <div className="col-6 mt-1">
                <strong>SELECT WHEEL DESIGN</strong>
              </div>
              <div className="row my-4 Arrow-Images">
              <img
                  onClick={(e) => SelectedWheelImage(e)}
                  alt="wheel_frame"
                  src="wheel_frame.png"
                  style={{ width: "15%", height: "100%" }}
                />
                <img
                  onClick={(e) => SelectedWheelImage(e)}
                  alt="wheel_frame1"
                  src="wheel_frame1.png"
                  style={{ width: "15%", height: "100%" }}
                />
                <img
                  onClick={(e) => SelectedWheelImage(e)}
                  alt="wheel_frame2"
                  src="wheel_frame2.png"
                  style={{ width: "15%", height: "100%" }}
                />

                <img
                  onClick={(e) => SelectedWheelImage(e)}
                  alt="wheel_frame3"
                  src="wheel_frame3.png"
                  style={{ width: "15%", height: "100%" }}
                />
                <img
                  onClick={(e) => SelectedWheelImage(e)}
                  alt="wheel_frame4"
                  src="wheel_frame4.png"
                  style={{ width: "15%", height: "100%" }}
                />
                  <img
                  onClick={(e) => SelectedWheelImage(e)}
                  alt="wheel_frame5"
                  src="wheel_frame5.png"
                  style={{ width: "15%", height: "100%" }}
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
                {/* <form onChange={ShowOrHideModal}>
                   {" "}
                  <input
                    type="radio"
                    id="CONFETTIOFF"
                    name="CONFETTI"
                    value="OFF"
                  />
                    <label for="OFF">HIDE</label>
                  <br />
                    <input type="radio" id="MODALON" name="MODAL" value="ON" /> {" "}
                  <label for="ON">SHOW</label>
                  <br />
                </form> */}

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

            {/* <div className="row my-4">
              <div className="col-4 mt-1">
                <strong>SHOW OR HIDE Winner MODAL</strong>
              </div>
              <div className="col-8">
                <form  onChange={ShowOrHideModal}>
                   {" "}
                  <input type="radio" id="MODALOFF" name="MODAL" value="OFF" /> {" "}
                  <label for="OFF">HIDE</label>
                  <br />
                    <input type="radio" id="MODALON" name="MODAL" value="ON" /> {" "}
                  <label for="ON">SHOW</label>
                  <br />
                </form>
              </div>
            </div> */}
          </div>
        </div>
    </div>
    </div>
    </Modal>
  );
}

export default Settings;
