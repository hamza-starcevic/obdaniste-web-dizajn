import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = ({ history }) => {
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [imeRoditelja, setImeRoditelja] = useState("");
  const [datumRodjenjaDjeteta, setDatumRodjenjaDjeteta] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [brojTelefona, setBrojTelefona] = useState("");
  const [adresaStanovanja, setAdresaStanovanja] = useState("");
  const [gradStanovanja, setGradStanovanja] = useState("");
  const [samohraniILIrazvedeni, setSamohraniILIrazvedeni] = useState("");
  const [bitneNapomene, setBitneNapomene] = useState("");

  const navigate = useNavigate();

  const createUser = async (event) => {
    event.preventDefault();
    if (
      !ime ||
      !prezime ||
      !imeRoditelja ||
      !datumRodjenjaDjeteta ||
      !email ||
      !password ||
      !brojTelefona ||
      !adresaStanovanja ||
      !gradStanovanja ||
      !samohraniILIrazvedeni ||
      !bitneNapomene
    ) {
      // Handle form validation error
      alert("Please fill in all the fields.");
      return;
    }

    const { data } = await Axios.post("http://localhost:8001/register", {
      ime: ime,
      prezime: prezime,
      imeRoditelja: imeRoditelja,
      datumRodjenjaDjeteta: datumRodjenjaDjeteta,
      email: email,
      password: password,
      brojTelefona: brojTelefona,
      adresaStanovanja: adresaStanovanja,
      gradStanovanja: gradStanovanja,
      bitneNapomene: bitneNapomene,
    });
    console.log(data);
    //navigate("/loggedin");
  };

  return (
    <form style={{ padding: "4%", backgroundColor: "#cce1ff", color: "black" }}>
      <div className="form-group">
        <label>Ime</label>
        <input
          className="form-control"
          placeholder="Ime"
          onChange={(event) => {
            setIme(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Prezime</label>
        <input
          className="form-control"
          placeholder="Prezime"
          onChange={(event) => {
            setPrezime(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Ime Roditelja</label>
        <input
          className="form-control"
          placeholder="Ime Roditelja"
          onChange={(event) => {
            setImeRoditelja(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Datum rodjenja djeteta</label>
        <input
          className="form-control"
          placeholder="npr. dd/mm/gggg"
          onChange={(event) => {
            setDatumRodjenjaDjeteta(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>E-mail</label>
        <input
          className="form-control"
          placeholder="E-mail"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          type="email"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          className="form-control"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type="password"
        />
      </div>
      <div className="form-group">
        <label>Broj telefona</label>
        <input
          type="ime"
          className="form-control"
          placeholder="Broj telefona"
          onChange={(event) => {
            setBrojTelefona(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Adresa stanovanja</label>
        <input
          type="ime"
          className="form-control"
          placeholder="Adresa stanovanja"
          onChange={(event) => {
            setAdresaStanovanja(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Grad stanovanja</label>
        <input
          className="form-control"
          placeholder="Grad stanovanja"
          onChange={(event) => {
            setGradStanovanja(event.target.value);
          }}
        />
      </div>

      <div className="form-group">
        <label>Samohrani ili razvedeni roditelji?</label>
        <input
          className="form-control"
          placeholder="Samohrani/Razvedeni"
          onChange={(event) => {
            setSamohraniILIrazvedeni(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Bitne napomene</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={(event) => {
            setBitneNapomene(event.target.value);
          }}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={createUser}>
        {" "}
        Registrujte se{" "}
      </button>
    </form>
  );
};
export default Register;
