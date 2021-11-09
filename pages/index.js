import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';

// http://localhost:3000/api/participants
// https://potofnames.com/api/participants
export const getServerSideProps = async () => {
  const res = await fetch('https://potofnames.com/api/participants');
  const data = await res.json();

  return{
      props: {participants: data}
  }
}
export default function Home({participants}) {
  // const router = useRouter();
  const addParticipant = async event => {
    event.preventDefault()
    
    const res = await fetch('https://potofnames.com/api/participants', {
      body: JSON.stringify({
        name: event.target.participantName.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    participants = await res.json()
    console.log(participants);
    // router.replace(router.asPath);
  }
 
  // Call this function whenever you want to
  // refresh props!

  // Call this function whenever you want to
  // refresh props!
  // const refreshData = () => {
     
  // }
  return (
    <div className="container">
      <Head>
        <title>Pot Of Namess</title>
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
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="d-flex">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <a className="nav-link active px-4" aria-current="page" href="#">SETTING</a>
                    <a className="nav-link px-4" href="#">LOGIN</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="row">
          <div className="col-12">
            <img src="spinwheel.png" className="img-fluid wheel-img mx-auto d-block" />
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-2 m-5">
            <button className="btn btn-purple btn-radius bg-purple text-white btn-radius btn-lg">3D MODE</button>
          </div>
        </div>
        
        <form className="row justify-content-md-center" method="post" onSubmit={addParticipant}>
          <div className="col-5 ">
            <div className="input-group mycustom ">
              <input type="text" className="form-control" placeholder="Username" required name="participantName" />
              <div className="input-group-prepend">
                <button type="submit" className="btn btn-radius btn-sm" id="inputGroupPrepend2">
                  <img src="plus.png" width="25" className="m-1"/>
                </button>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="my-2 text-purple fs-4 fw-bold">Shuffle</div>
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
        <div className="row">
          <div className="col-8 mx-auto">
            <div className="fw-bold fs-5 text-center">
            Welcome to the most interactive and fun website for picking names,making unbaised decisions and spin a wheel interaction
            </div>
          </div>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  )
}