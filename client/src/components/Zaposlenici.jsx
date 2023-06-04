import React from "react";

const Zaposlenici = () => {
  return (
    <div>
      <section id="Zaposlenici">
        <div className="container my-5 py-5">
          <div className="row ">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Nasi Zaposlenici</h3>
              <h1 className="display-6 text-center mb-5">
                Nasi <b> Fantastični</b> Zaposlenici
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3">
                <img
                  src="/assets/direktorica.jpg "
                  // className=""
                  alt="direktorica"
                  className="img-thumbnail border border-dark card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">Direktorica</h5>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <img
                  src="/assets/Pedagog.jpg "
                  // className=""
                  alt="Pedagog"
                  className="img-thumbnail border border-dark card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">Pedagog</h5>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3">
                <img
                  src="/assets/Vaspitacica.jpg "
                  alt="Vaspitacica"
                  className="img-thumbnail border border-dark card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title mb-3 fs-4 fw-bold">Vaspitačica</h5>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Zaposlenici;
