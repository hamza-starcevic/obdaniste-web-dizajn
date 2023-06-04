import React from "react";
import About from "./About";
import Zaposlenici from "./Zaposlenici";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import PostList from "./PostList";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                Postanite dio najboljeg obdaništa u Zenici
              </h1>
              <p className="lead text-center fs-4 mb-5 text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                assumenda enim ipsum veritatis perferendis. Accusamus tempore
                incidunt vel iusto nisi.
              </p>
              <div className="buttons d-flex justify-content-center">
                <NavLink
                  to="/kontakt"
                  className="btn btn-light me-4 rounded-pill px-4 py-2"
                >
                  Get Qoute
                </NavLink>
                <NavLink
                  to="/Zaposlenici"
                  className="btn btn-outline-light me-4 rounded-pill px-4 py-2"
                >
                  Nasi Zaposlenici
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Zaposlenici />
      <PostList />
      <Footer />
    </div>
  );
};
export default Home;
