
import React, { useEffect, useState, createContext } from "react";
import { useSession, signIn, signOut, getCsrfToken } from "next-auth/react";
import Modal from "react-modal";
import { apiUrl } from "../../utils";
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding:"2%",
      borderRadius:"15px"
    },
  };

// http://localhost:3000/api/participants
// http://localhost:3000/api/participants
export default function Login(props){
  const [csrfToken,setcsrfToken] = useState("")
  const [openLoginModal,setopenLoginModal] = useState(true)

  useEffect(()=>{
    const CSRFToken = getCsrfToken().then((CSRF)=>setcsrfToken(CSRF))

})


const LoginUser = async (event) => {
    event.preventDefault();
    var user;
    await fetch(    apiUrl("/api/users")
    )
      .then((response) => response.json())
      .then((AllUsers) => {
        for (var i = 0; i < AllUsers.length; i++) {
          if (AllUsers[i].email == event.target.LoginEmail.value) {
            if (AllUsers[i].password == event.target.LoginPass.value) {
              user = AllUsers[1];
              alert("Successfully Login");
              break;
            } else {
              user = "wrong pass";
              alert("Enter correct password");
              break;
            }
          }
        }
        if (!user) {
          alert("Please Signup first");
        }
      });
  };

const closeModal=()=>{
    // setopenLoginModal(props.opentheModal)
    setopenLoginModal(false)
    props.Loginstate(false)
}
// props.func("Alasaslaslabdlsds")
    return(
        <Modal
        isOpen={openLoginModal}
        onRequestClose={closeModal}
        style={customStyles}
      >

        <div>
          <div>
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">
                Login to your account
              </h5>
              <button
              style={{marginLeft:"15px",marginTop:"0.5px"}}
                type="button"
                className="btn-close"
                onClick={()=>{closeModal()}}
                
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={LoginUser} id="LoginForm">
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    name="LoginEmail"
                    className="form-control"
                    id="LoginEmail"
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
                    name="LoginPass"
                    className="form-control"
                    id="LoginPass"
                  />
                </div>

                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
                    Login
                  </button>
                  <div style={{ textAlign: "center" }}>
                    <form

    
    action={ apiUrl("api/auth/signin/google")}
                      method="POST"
                    >
                      <input
                        type="hidden"
                        name="csrfToken"
                        value={csrfToken}
                      />
                      <input
                        type="hidden"
                        name="callbackUrl"
                        value={apiUrl("/")}
                      />
                      <button
                        style={{ width: "100%" }}
                        type="submit"
                        class="button"
                      >
                        Sign in with Google
                      </button>
                    </form>
                  </div>
                </div>
              </form>
              </div>
              </div>
              </div>
           </Modal>
    )
}