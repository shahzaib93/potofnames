
import React, { useEffect, useState, createContext } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Modal from "react-modal";

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

export default function Signup(props){
  const [openSignupModal,setopenSignupModal] = useState(true)

const SignupUser = async (event) => {
    event.preventDefault();
    var user;
    await fetch("https://potofnames.com/api/users")
      .then((response) => response.json())
      .then((AllUsers) => {
        for (var i = 0; i < AllUsers.length; i++) {
          console.log("ALL", AllUsers[i]);
          console.log("MY", event.target.SignupEmail.value);
          if (AllUsers[i].email == event.target.SignupEmail.value) {
            user = AllUsers[i];
            console.log("IF");
            alert("User Already exist. Please Login");
            break;
          }
        }
        if (!user) {
          const res = fetch("https://potofnames.com/api/users", {
            body: JSON.stringify({
              name: event.target.SignupName.value,
              email: event.target.SignupEmail.value,
              password: event.target.SignupPass.value,
            }),
            headers: { "Content-Type": "application/json" },
            method: "POST",
          });
          if (res) {
            alert("Successfully signed in");
          }
        }
      });
  };

  const closeModal=()=>{
    // setopenLoginModal(props.opentheModal)
    setopenSignupModal(false)
    props.Signupstate(false)

}

    return(
   
        <Modal
        isOpen={openSignupModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div >
          <div >
            <div className="modal-header">
              <h5 className="modal-title" id="SignupModalLabel">
                Signup to your account
              </h5>
              <button 
              style={{marginLeft:"15px",marginTop:"0.5px"}}
                type="button"
                className="btn-close"
                onClick={()=>{closeModal()}}
              ></button>
            </div>
            <div className="modal-body">
              <form id="SignupForm" onSubmit={SignupUser}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputName"
                    className="form-label"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="SignupName"
                    className="form-control"
                    id="SignupName"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="SignupEmail"
                    className="form-control"
                    id="SignupEmail"
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
                    name="SignupPass"
                    className="form-control"
                    id="SignupPass"
                  />
                </div>

                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    // onClick={()=>SignupUser()}
                  >
                    Signup
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    )
}