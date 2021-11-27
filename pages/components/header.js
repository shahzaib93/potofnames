import React from 'react'

function Header({session, onLogoutClick}) {
  return (
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
                      <a className="nav-link px-4" href="#" onClick={onLogoutClick}>LOGOUT</a> :
                      <a className="nav-link px-4" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">LOGIN</a>)
                    }
                  </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
  )
}

export default Header
