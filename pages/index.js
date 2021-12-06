import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
// import jwt from 'jsonwebtoken'
import React, { useEffect, useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import WheelComponent from '../plugins/amazing-spin-wheel-game'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagramSquare, faLinkedinIn, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'

// http://localhost:3000/api/participants
// https://potofnames.com/api/participants

export const getStaticProps = async () => {
  const res = await fetch('https://potofnames.com/api/participants');
  const data = await res.json();
  return{
      props: {participants: data}
  }
}

export default function Home({participants}) {

  const { data: session } = useSession()
  const [webState, setWebState] = useState({items: [], seg: []})
  const [shouldWeSpin, setShouldWeSpin] = useState(false)
  const [shakeAnimateClass, setShakeAnimateClass] = useState("")

  const [threeDMode, setThreeDMode] = useState(0)
  const [totalEntries, setTotalEntries] = useState(225)
  const [wheelSpeed, setWheelSpeed] = useState(1)
  const [spinTime, setSpinTime] = useState(10)
  const gameType = "pot"
  const segCol = []
  const tempParticipants = [{name: 'Asif'},{name: 'Jami'},{name: 'Zahid'},{name: 'Khalid'},{name: 'Kayani'},{name: 'Mahir'},{name: 'Shehzad'},{name: 'Aslam'}];
  var css = `
    canvas, .threeDRotate{
      transform: rotate3d(0.5, -0.866, 0, ${threeDMode}deg);
    }
  `
  var itemsForPot = [...webState.items]
  itemsForPot.length = 10
  console.log(itemsForPot)
  if(session){
    console.log(`You're signed in`)
    console.log(session) 
  } else {
    console.log(`You are signed out`)
  }
  const getEntriesValue = (event) => {
    setTotalEntries(event.target.value);
    console.log(totalEntries);
  }
  const getWheelSpeed = (event) => {
    setWheelSpeed(event.target.value);
    console.log(wheelSpeed);
  }
  const getThreeDMode = (event) => {
    setThreeDMode(event.target.value);
    console.log(threeDMode);
  }
  const getSpinTime = (event) => {
    setSpinTime(event.target.value);
    console.log(spinTime * 125);
    console.log(event.target.value * 125);

  }
  const shakeBtn = () => {
    const random = Math.floor(Math.random() * webState.seg.length);
    console.log(random, webState.seg[random]);
    console.log(webState.seg)
    // const [shakeAnimateClass, setShakeAnimateClass] = useState("")
    setShakeAnimateClass("shake-animation");
    setTimeout(function() {
      alert(webState.seg[random]);
    }, 5000);
  }
  useEffect(() => {
    let temp = [];
    if(session){
      participants.map((participant)=>{
        temp.push(participant.name);
      })
      setWebState({items:[...participants], seg: temp})
    } else {
      let tempo = [];
      tempParticipants.map((tempParticipant)=>{
        tempo.push(tempParticipant.name);
      })
      
      setWebState({items:[...tempParticipants], seg: tempo})
    }
  }, [participants, session])

  useEffect(() => {
    console.log(webState);
    console.log("Coming from useEffects");
  }, [webState])

  for (let i = 0; i < webState.seg.length; i++) {
    if (i % 2 === 0) {
      segCol.push("#4f56a5");
    } else {
      segCol.push("#dfdede");
    }
  }

  const onFinished = (winner) => {
    console.log(winner)
    alert(winner);
  }

  const addParticipant = async event => {
    event.preventDefault()
    console.log(webState.items.length);
    if(webState.items.length < totalEntries){
      const res = await fetch('https://potofnames.com/api/participants', {
        body: JSON.stringify({
          name: event.target.participantName.value
        }),
        headers: {'Content-Type': 'application/json'},
        method: 'POST'
      })
      const newParticipant = await res.json()
      console.log(newParticipant.addParticipant);
      setWebState({
        items: [...webState.items, newParticipant.addParticipant],
        seg: [...webState.seg, newParticipant.addParticipant.name]
      })
    } else {
      alert("You can't add more.");
    }
    event.target.participantName.value = ""
  }

  const deleteParticipant = async (deleleId, index) => {
    const deletedVal = webState.items[index]
    console.log("Delete function data");
    console.log(deletedVal)
    const res = await fetch('http://localhost:3000/api/participants', {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deleleId),
    })
    const delParticipant = await res.json()
    function checkAdult(age) {
      return age == index;
    }
    setWebState({
      items: webState.items.filter((checkAdult, i)=> i !== index),
      seg: webState.seg.filter((checkAdult, i)=> i !== index)
    })

    console.log(delParticipant);
  }
  
  return (
    <div className="container container-sm container-md mb-5">
      <Head>
        <title>Pot of Names</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {css}
        </style>
      </Head>
      <header className="row">
        <div className="col-12 ">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
               <img src="logo.jpg" width="150" />
              </a>
              <div className="d-flex">
                <div className="navbar-nav">
                  {/* <a className="nav-link active px-4" aria-current="page" href="#">SETTING</a> */}
                  <button type="button" className="active px-4 nav-link btn btn-link" data-bs-toggle="modal" data-bs-target="#settingsModal">
                  SETTINGS
                    </button>
                  {
                    (session ? 
                    <button className="nav-link px-4 btn btn-link" type="button" onClick={() => signOut()}>LOGOUT</button> :
                    <button type="button" className="px-4 nav-link btn btn-link" data-bs-toggle="modal" data-bs-target="#loginModal">
                      LOGIN
                    </button>
                    )
                  }
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* <Header onLogoutClick={() => signOut()} session={session} /> */}
      <main>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            {webState.seg.length > 0 && 
              gameType == 'wheel' &&
                <div>
                  <img src="/wheel_frame.png" className="position-absolute wheel_frame threeDRotate" />
                  <WheelComponent
                  segments={webState.seg}
                  segColors={segCol}
                  onFinished={(winner) => onFinished(winner)}
                  primaryColor='gray'
                  contrastColor='white'
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
                    
                  downDuration={spinTime * 125}
                  spinSeconds={spinTime}
                  shouldWeSpin={shouldWeSpin}
                  setShouldWeSpin={setShouldWeSpin}
                  fontFamily='Arial'
                />
                </div>
            }
            {webState.seg.length > 0 && 
              gameType == 'pot' &&
                <div className={`pot-group ${shakeAnimateClass}`}>
                  <img src="/pot_img.png" className=" wheel_frame pot-img position-absolute" />
                  <div className="row opacity-50 position-relative" style={{ top:"300px", left: "100px" }} >
                    { itemsForPot.map((item, index) =>{
                        
                       return index % 2 === 0 ?
                       <div className="col-4" >
                          <div className="card name-card transform2 position-relative">
                            <div className="row g-0">
                              <div className="col-12">
                                <div className="card-body">
                                  <div key={item._id}>
                                    <h5 className="card-title">{item.name}</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        :
                        <div className="col-3">
                          <div className="card name-card transform position-relative">
                            <div className="row g-0">
                              <div className="col-12">
                                <div className="card-body">
                                  <div key={item._id}>
                                    <h5 className="card-title">{item.name}</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    })}
                  </div>
                  {/* <div style={{margin: "500px"}}></div> */}
                </div>
            }
            <div className="clearfix"></div>
            
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 col-md-2 m-5 text-center">
            {/* <button className="btn btn-purple btn-radius bg-purple text-white btn-radius btn-lg" >3D MODE</button> */}
            <button
              type="button"
              className="btn btn-purple btn-radius bg-purple text-white btn-radius btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#threeDModeModal">
                3D MODE
            </button>
          </div>
        </div>
        <form className="row justify-content-center" method="post" onSubmit={addParticipant}>
          <div className="col-8 col-md-5 ">
            <div className="input-group mycustom ">
              <input type="text" className="form-control" placeholder="Participant Name" name="participantName" required />
              <div className="input-group-prepend">
                <button type="submit" className="btn btn-radius btn-sm" id="inputGroupPrepend2">
                  <img src="plus.png" width="25" className="m-1"/>
                </button>
              </div>
            </div>
          </div>
          <div className="col-2 col-md-1">
            {gameType == 'pot' &&
              <>
                <div id="spinBtn" onClick={shakeBtn} className="my-2 text-purple fs-4 fw-bold">Shake</div>
              </>
            }
            {!gameType == 'pot' &&
              <>
                <div id="spinBtn" onClick={() => setShouldWeSpin(true)} className="my-2 text-purple fs-4 fw-bold">Spin</div>
              </>
            }
          </div>
        </form>

        <div className="m-5 test">
          <div className="row">
            { webState.items.map((item, index) =>(
            // eslint-disable-next-line react/jsx-key
            <div className="col-6 col-md-6">
              <div className="card mb-3 name-card">
                <div className="row g-0">
                  <div className=" col-4 col-md-4">
                    <img src="logo.jpg" className="img-fluid rounded-circle" alt="..." />
                  </div>
                  <div className="col-7 col-md-7">
                    <div className="card-body">
                      <div key={item._id}>
                        <h5 className="card-title">{item.name}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-1">
                  <div onClick={()=>deleteParticipant(item._id, index)}>x</div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="modal fade login-modal" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="loginModalLabel">Login to your account</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form >
                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="text" name="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                      </div>
                      <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                        <button className="btn btn-outline-secondary" onClick={() => signIn()} type="button">Sign in with Google</button>
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

            <div className="modal fade login-modal" id="settingsModal" tabIndex="-1" aria-labelledby="settingsModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                  <div className="modal-header">
                    
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="row justify-content-center">
                      <div className="col-6">
                        <div className="row my-4">
                          <div className="col-3"><strong># OF ENTRIES</strong></div>
                          <div className="col-8">
                            <input type="range" min="1" max="225" className="range" onChange={getEntriesValue} />
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
                          <div className="col-3"><strong>SPIN TIME</strong></div>
                          <div className="col-8">
                            <input type="range" min="3" max="180" className="range" value="3" onChange={getSpinTime} />
                          </div>
                          <div className="col-1">{spinTime}</div>
                        </div>
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

            <div className="modal fade login-modal" id="threeDModeModal" tabIndex="-1" aria-labelledby="3dModeModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">3D Mode</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="row justify-content-center">
                      <div className="col-12">
                        
                        <div className="row my-4">
                          <div className="col-4"><strong >WHEEL SPEED</strong></div>
                          <div className="col-7">
                            <input type="range" min="0" max="55" className="range" onChange={getThreeDMode} />
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
        <div className="row my-5">
          <div className="col-8 mx-auto">
            <div className="fw-bold fs-5 text-center">
            Welcome to the most interactive and fun website for picking names,making unbaised decisions and spin a wheel interaction
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="row my-5 justify-content-center">
          <div className="col-3">
            <div className="card footer-card text-center" >
              <img src="unlimitednames.png" className="card-img-top mx-auto d-block" />
              <div className="card-body">
              <h5 className="card-title">Unlimited Names</h5>
                <p className="card-text text-secondary"><small>Enter over 250 names without any glitch or hassel.</small></p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card footer-card text-center" >
              <img src="checkicon.png" className="card-img-top mx-auto d-block" />
              <div className="card-body">
              <h5 className="card-title">Top Security</h5>
                <p className="card-text text-secondary"><small>We are committed to protecting and respecting your privacy and the security of your data.</small></p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card footer-card text-center" >
              <img src="speechicon.png" className="card-img-top mx-auto d-block" />
              <div className="card-body">
              <h5 className="card-title">How to use Pot of Names</h5>
                <p className="card-text text-secondary"><small >Type in your entries in the textbox to the right of the wheel. Click the wheel to spin it and get a random winner.</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-12">
            <ul className="footer-social-icons">
              <li><FontAwesomeIcon icon={faTwitter} className="fontawesome-icon"/></li>
              <li><FontAwesomeIcon icon={faFacebookF} className="fontawesome-icon facebook-icon"/></li>
              <li><FontAwesomeIcon icon={faPinterestP} className="fontawesome-icon"/></li>
              <li><FontAwesomeIcon icon={faLinkedinIn} className="fontawesome-icon"/></li>
              <li><FontAwesomeIcon icon={faInstagramSquare} className="fontawesome-icon"/></li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-2">
            <Link href="https://potofnames.com/"><img src="logo.jpg" className="img-fluid sponsor-img" alt="..." /></Link>
          </div>
          <div className="col-2">
            <Link href="https://pickapot.com/"><img src="paplogo.png" className="img-fluid sponsor-img" alt="..." /></Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="text-center"><small>A Project of PICKAPOT LLC. Trademarks and brands are the property of their respective owners.</small></p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="text-center"><small>&copy; 2021 POTOFNAMES LLC. ALL RIGHT RESERVED.</small></p>
          </div>
        </div>
      </footer>
    </div>
  )
}