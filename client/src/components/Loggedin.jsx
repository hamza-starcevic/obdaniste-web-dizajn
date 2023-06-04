import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const LoadingSpinner = () => {
  return <div className="spinner">Loading...</div>;
};

const Loggedin = ({ handleChangeLoggedIn, loggedIn }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const logout = async () => {
    handleChangeLoggedIn(false);
    localStorage.clear();
    navigate("/login");
  };
  useEffect(() => {
    setIsLoading(true);
    //Use axios to decode the token and get all the user info
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      handleChangeLoggedIn(false);
      localStorage.clear();
      navigate("/login");
    }
    async function getData() {
      const res = await axios.post("http://localhost:8001/decode", {
        token,
      });
      console.log(res.data);
      setUserData(res.data.decodedToken);
    }
    getData();
    setIsLoading(false);
  }, [navigate, handleChangeLoggedIn]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        userData && (
          <Container>
            <div className="row">
              <div className="col-md-20">
                <div className="profile-head pt-4 text-center ms-5">
                  <h1>
                    Dobrodošli {userData.imeRoditelja} {userData.prezime}
                  </h1>
                </div>
              </div>
              <div className="col-md-20 text-end me-2 pe-5 " onClick={logout}>
                <button
                  className="btn btn-outline-primary ms-2 px-4 rounded-pill profile-edit-btn"
                  name="btnAddMore"
                >
                  Odjava
                </button>
              </div>
            </div>
            <ul className="nav nav-tabs ms-4" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  About
                </a>
              </li>
            </ul>
            <div className="row">
              <div className="col-md-8">
                <div className="User">
                  <div className="col-md-4 ms-3 pt-1">
                    <div className="profile-img pt-5 w-100 ms-5">
                      <img
                        src="/assets/slika.png"
                        alt=""
                        className="border border-white w-75 rounded mx-auto d-block img-thumbnail"
                      />
                    </div>
                  </div>
                  <div className="user-info pt-4">
                    <div className="row">
                      <div className="col-md-6">
                        <label>Ime:</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.imeRoditelja}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Prezime:</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.prezime}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email:</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.email}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Telefon:</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.brojTelefona}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Adresa:</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.adresaStanovanja}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Grad:</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.gradStanovanja}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Bitne napomene:</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.bitneNapomene}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        )
      )}
    </>
  );
};
const Container = styled.div`
  .User {
    display: flex;
    width: 100vw;
  }
  .user-info {
    width: 60%;
    box-shadow: 10px 5px 5px #f59842;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    label {
      padding: 10px;
    }
    p {
      padding: 10px;
    }
  }
  .container {
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
export default Loggedin;
