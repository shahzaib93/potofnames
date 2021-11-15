import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import WheelComponent from '../plugins/amazing-spin-wheel-game/dist'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faInstagramSquare, faLinkedinIn, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'
// http://localhost:3000/api/participants
// https://potofnames.com/api/participants
// export const getServerSideProps = async () => {
//   const res = await fetch('https://potofnames.com/api/participants');
//   const data = await res.json();

//   return{
//       props: {participants: data}
//   }
// }

export const getServerSideProps = () => {
  const res =  fetch('https://potofnames.com/api/participants');
  const data = res.json();

  return{
      props: {participants: data}
  }
}
export default function Home({participants}) {
  const seg = [], segCol = [];
  const router = useRouter();
  const addParticipant = async event => {
    event.preventDefault()
    const res = await fetch('http://localhost:3000/api/participants', {
      body: JSON.stringify({
        name: event.target.participantName.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    const newParticipant = await res.json()
    // router.replace(router.asPath);
    // console.log(newParticipant);
    console.log(participants);
    // participants.push(newParticipant);
    console.log(participants);
  }
  const onFinished = (winner) => {
    console.log(winner)
    alert(winner);
  }
  participants.map((participant)=>{
    seg.push(participant.name);
  })
  for (let i = 0; i < seg.length; i++) {
    if (i % 2 === 0) {
      segCol.push("#4f56a5");
    } else {
      segCol.push("#dfdede");
    }
  }
  return (
    <div className={styles.container}>
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
              <img src="logo.jpg" width="150"/>
              </a>
              <div className="d-flex">
                  <div className="navbar-nav">
                    <a className="nav-link active px-4" aria-current="page" href="#">SETTING</a>
                    <a className="nav-link px-4" href="#">LOGIN</a>
                  </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="row justify-content-center">
          <div className="col-6">
            <WheelComponent
              segments={seg}
              segColors={segCol}
              onFinished={(winner) => onFinished(winner)}
              primaryColor='gray'
              contrastColor='white'
              buttonText=''
              isOnlyOnce={false}
              size={290}
              upDuration={100}
              downDuration={1000}
              fontFamily='Arial'
            />
            <div className="clearfix"></div>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-2 m-5 text-center">
            <button className="btn btn-purple btn-radius bg-purple text-white btn-radius btn-lg">3D MODE</button>
          </div>
        </div>
        
        <form className="row justify-content-md-center" method="post" onSubmit={addParticipant}>
          <div className="col-5 ">
            <div className="input-group mycustom ">
              <input type="text" className="form-control" placeholder="Username" name="participantName" required />
              <div className="input-group-prepend">
                <button type="submit" className="btn btn-radius btn-sm" id="inputGroupPrepend2">
                  <img src="plus.png" width="25" className="m-1"/>
                </button>
              </div>
            </div>
          </div>
          <div className="col-1">
            <div id="spinBtn" className="my-2 text-purple fs-4 fw-bold">Shuffle</div>
          </div>
        </form>

        <div className="m-5 test">
        <div className="row ">
            {participants.map(participant =>(
            <div className="col-12 col-md-6">
              <div className="card mb-3 name-card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="logo.jpg" className="img-fluid rounded-circle" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <div key={participant._id}>
                          <h5 className="card-title">{participant.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
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
        <div className="row">
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
        <div className="row">
          <div className="col-12">
            <p className="text-center"><small>&copy; 2021 POTOFNAMES LLC. ALL RIGHT RESERVED.</small></p>
          </div>
        </div>
      </footer>
    </div>
  )
}
