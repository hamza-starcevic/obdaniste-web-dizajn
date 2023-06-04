import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

const Login = ({ handleChangeLoggedIn, loggedIn }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getToken() {
      console.log("loggedin is: ", loggedIn);
      const userInfo = JSON.parse(localStorage.getItem("token"));
      if (userInfo) {
        const res = await axios.post("http://localhost:8001/decode", {
          token: userInfo,
        });
        if (res.data.valid) {
          handleChangeLoggedIn(true);
          navigate("/loggedin");
        }
      }
    }
    getToken();
  }, [navigate, loggedIn, handleChangeLoggedIn]);

  // const login = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post("/api/users/login", {
  //       email: email,
  //       password: password,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     });
  // };
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);

      const { data } = await axios.post(
        "http://localhost:8001/login",

        {
          email,
          password,
        },
        config
      );
      console.log(data);

      localStorage.setItem("token", JSON.stringify(data.token));

      handleChangeLoggedIn(true);
      navigate("/loggedin");
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="container shadow my-5">
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
            <h1 className="display-4 fw-bolder">Dobrodošli</h1>
            <p className="lead text-center">Unesite svoje podatke za prijavu</p>
            <h5 className="mb-4">ili se</h5>
            <NavLink
              to="/register"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Registrujte
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">PRIJAVA</h1>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {loading && <Loading />}
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email adresa
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  Ne dijelite svoj email.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Šifra
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Čekiraj
                </label>
              </div>
              <button
                type="submit"
                //onClick={navigate}
                className="btn btn-primary"
              >
                Potvrda
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
