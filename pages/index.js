import Head from 'next/head'
import Image from 'next/image'

<<<<<<< HEAD
export const getServerSideProps = async () => {
  const res = await fetch('https://potofnames.com/api/participants');
  const data = await res.json();


  return{
      props: {participants: data}
  }
}
export default function Home({participants}) {

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
  }

=======
export default function Home() {
>>>>>>> parent of fc0abb3 (mongodb connected)
  return (
    <div className="container">
      <Head>
        <title>Pot Of Names</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="row">
        <div class="col-12 ">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
              <img src="logo.jpg" width="150"/>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="d-flex">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <a class="nav-link active px-4" aria-current="page" href="#">SETTING</a>
                    <a class="nav-link px-4" href="#">LOGIN</a>
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
        <div className="row">
          <div className="col-12 m-5">
            <button className="btn btn-purple btn-radius bg-purple text-white btn-radius btn-lg">3D MODE</button>
          </div>
        </div>
        
        <form className="row">
          <div class="col-10 ">
            <div class="input-group mycustom ">
              <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required />
              <div class="input-group-prepend">
                <button type="submit" class="btn btn-radius btn-sm" id="inputGroupPrepend2">
                  {/* <FontAwesomeIcon icon={faPlus} className="icon" /> */}
                  <img src="plus.png" width="25" className="m-1"/>
                </button>
              </div>
            </div>
          </div>
          <div class="col-2">
            <div className="my-2 text-purple fs-4 fw-bold">Shuffle</div>
          </div>
        </form>
                  
        <div className="m-5">

        <div className="row ">
          <div className="col-6">
            <div class="card mb-3 name-card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="logo.jpg" className="img-fluid rounded-circle" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">John Adam</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div class="card mb-3 name-card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="logo.jpg" className="img-fluid rounded-circle" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">John Adam</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div class="card mb-3 name-card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="logo.jpg" className="img-fluid rounded-circle" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">John Adam</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div class="card mb-3 name-card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="logo.jpg" className="img-fluid rounded-circle" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">John Adam</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row ">
<<<<<<< HEAD
            {participants.map(participant =>(
            <div className="col-12 col-md-6">
              <div className="card mb-3 name-card">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="logo.jpg" className="img-fluid rounded-circle" alt="..." />
=======
          <div className="col-6">
            <div class="card mb-3 name-card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="logo.jpg" className="img-fluid rounded-circle" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">John Adam</h5>
>>>>>>> parent of fc0abb3 (mongodb connected)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div class="card mb-3 name-card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="logo.jpg" className="img-fluid rounded-circle" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">John Adam</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-6">
            <div class="card mb-3 name-card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="logo.jpg" className="img-fluid rounded-circle" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">John Adam</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div class="card mb-3 name-card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="logo.jpg" className="img-fluid rounded-circle" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">John Adam</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-6">
            <div class="card mb-3 name-card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="logo.jpg" className="img-fluid rounded-circle" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">John Adam</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div class="card mb-3 name-card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="logo.jpg" className="img-fluid rounded-circle" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">John Adam</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-6">
            <div class="card mb-3 name-card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="logo.jpg" className="img-fluid rounded-circle" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">John Adam</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div class="card mb-3 name-card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="logo.jpg" className="img-fluid rounded-circle" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">John Adam</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
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