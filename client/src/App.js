import "./App.css";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Zaposlenici from "./components/Zaposlenici";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import Loggedin from "./components/Loggedin";
import AdminPanel from "./components/AdminPanel";
function App() {
  useEffect(() => {
    document.title = "Obdanište Radost";
  }, []);
  const [loggedIn, setLoggedIn] = useState(false);
  const handleChangeLoggedIn = (value) => {
    setLoggedIn(value);
  };

  useEffect(() => {
    //Use axios to decode the token and get all the user info
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      handleChangeLoggedIn(false);
      localStorage.clear();
    }
  }, []);
  return (
    <>
      <Navbar loggedIn={loggedIn} />

      <Routes>
        <Route exact path="admin" element={<AdminPanel />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/Zaposlenici" element={<Zaposlenici />} />
        <Route exact path="/kontakt" element={<Footer />} />
        <Route
          exact
          path="/login"
          element={
            <Login
              handleChangeLoggedIn={handleChangeLoggedIn}
              loggedIn={loggedIn}
            />
          }
        />
        <Route exact path="/register" element={<Register />} />
        <Route
          exact
          path="/loggedin"
          element={
            <Loggedin
              handleChangeLoggedIn={handleChangeLoggedIn}
              loggedIn={loggedIn}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
