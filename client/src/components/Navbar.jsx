import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ loggedIn }) => {
  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-black"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-black" to="/about">
                  O nama
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-black" to="/Zaposlenici">
                  Zaposlenici
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-black" to="/kontakt">
                  Kontakt
                </NavLink>
              </li>
            </ul>
            <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">
              Obdanište Radost
            </NavLink>
            {!loggedIn ? (
              <NavLink
                to="/login"
                className="btn btn-outline-primary ms-auto px-4 rounded-pill"
              >
                <i className="fa fa-sign-in me-1"></i> Prijava
              </NavLink>
            ) : (
              <NavLink
                className="btn btn-outline-primary ms-auto px-4 rounded-pill"
                to="/loggedIn"
              >
                Vaš profil
              </NavLink>
            )}
            {!loggedIn ? (
              <NavLink
                to="/register"
                className="btn btn-outline-primary ms-2 px-4 rounded-pill"
              >
                <i className="fa fa-user-plus me-2"></i>Registracija
              </NavLink>
            ) : (
              <div
                className="btn btn-outline-primary ms-auto px-4 rounded-pill"
                onClick={logOut}
              >
                <h6>Odjava</h6>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
