import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import jwt from 'jsonwebtoken'
import React, {useEffect, useState} from 'react'
// import { useSession, signIn, signOut } from "next-auth/react"
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
  
  const segCol = []
  const [webState, setWebState] = useState({items: [], seg: []});
  // const { data: session } = useSession()
  const tempParticipants = [{name: 'Asif'},{name: 'Jami'},{name: 'Zahid'},{name: 'Khalid'},{name: 'Kayani'},{name: 'Mahir'},{name: 'Shehzad'},{name: 'Aslam'}];

  console.log(tempParticipants)
  console.log(participants)
    // if(session){
    //   console.log(`You're signed in`)
    //   console.log(session) 
    // } else {
    //   console.log(`You are signed out`)
    // }

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
  }, [session])

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
    // router.replace(router.asPath);
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
    event.target.participantName.value = ""
  }

  const deleteParticipant = async (deleleId, index) => {
    const deletedVal = items[index]
    console.log(deletedVal)
    const res = await fetch('1', {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deleleId),
    })
    const delParticipant = await res.json()
    function checkAdult(age) {
      return age == index;
    }
    // setItems(items.filter((checkAdult, i)=> i !== index));
    setWebState({
      items: items.filter((checkAdult, i)=> i !== index)
    })
    // setSeg([...seg, newParticipant.addParticipant.name]);

    console.log(seg);
  }

  const loginAuth = async event => {
    event.preventDefault()
    // router.replace(router.asPath);
    const res = await fetch('http://localhost:3000/api/login', {
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value
      }),
      headers: {'Content-Type': 'application/json'},
      method: 'POST'
    })
    const loginReturned = await res.json()
    console.log(loginReturned.token )
    const json = jwt.decode(loginReturned.token)
    console.log(json);
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
               <img src="logo.jpg" width="150" />
              </a>
              <div className="d-flex">
                  <div className="navbar-nav">
                    <a className="nav-link active px-4" aria-current="page" href="#">SETTING</a>
                    {
                      (session ? 
                      <a className="nav-link px-4" href="#" onClick={() => signOut()}>LOGOUT</a> :
                      <a className="nav-link px-4" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">LOGIN</a>)
                    }
                  </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            {webState.seg.length > 0 && 
              <WheelComponent
                segments={webState.seg}
                segColors={segCol}
                onFinished={(winner) => onFinished(winner)}
                primaryColor='gray'
                contrastColor='white'
                isOnlyOnce={false}
                size={290}
                upDuration={100}
                downDuration={1000}
                fontFamily='Arial'
              />
            }
            <div className="clearfix"></div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 col-md-2 m-5 text-center">
            <button className="btn btn-purple btn-radius bg-purple text-white btn-radius btn-lg">3D MODE</button>
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
            <div id="spinBtn" className="my-2 text-purple fs-4 fw-bold">Spin</div>
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
                        <button className="btn btn-outline-secondary" onClick={() => signIn()}>Sign in with Google</button>
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