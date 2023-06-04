import React from "react";

const Footer = () => {
  return (
    <div>
      <section id="kontakt">
        <footer className="footer text-white">
          <div className="container">
            <footer className="py-5">
              <div className="row">
                <div className="col-3">
                  <h4>Kontakti</h4>
                  <p>
                    <i className="fa fa-home me-3"></i> Zenica,72000,BiH
                  </p>
                  <p>
                    <i className="fa fa-envelope me-3"></i>
                    Obdaniste.info@gmail.com
                  </p>
                  <p>
                    <i className="fa fa-phone me-3"></i> +062-999-888{" "}
                  </p>
                  <p>
                    <i className="fa fa-print me-3"></i> +387-223-442
                  </p>
                </div>

                <div className="col-2">
                  <h5>Obdanište Radost</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-white">
                        Home
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-white">
                        Features
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-white">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-white">
                        FAQs
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-white">
                        About
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-2">
                  <h5>Ministarstvo </h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-white">
                        Home
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-white">
                        Features
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-white">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-white">
                        FAQs
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-white">
                        About
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="d-flex justify-content-between pt-4 mt-4 border-top">
                <p>© 2022 Zilić Anes. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
                  <li className="ms-3">
                    <a className="link-light" href="#">
                      <i className="fa fa-facebook fa-2x"></i>
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="link-light" href="#">
                      <i className="fa fa-instagram fa-2x"></i>
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="link-light" href="#">
                      <i className="fa fa-twitter fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
