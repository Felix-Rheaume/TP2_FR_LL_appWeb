import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./Components/Accueil";
import Calendrier from "./Components/Calendrier";
import Inscription from "./Components/Inscription";
import Connexion from "./Components/Connexion";
import React, { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

function App() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const serviceURL = "https://tp2weblawrence.azurewebsites.net";
    const localServiceURL = "http://localhost:8081";
    axios
      .get(localServiceURL + "/utilisateur/")
      .then((res) => {
        setIsConnected(true);
        console.log("USE EFFECT");
      })
      .catch((errors) => {
        setIsConnected(false);
        console.log("USE EFFECT ERROR");
      });
  }, []);

  return (
    <BrowserRouter>
      <Navbar isConnected={isConnected} />
      <Routes>
        <Route exact path='/' element={<Accueil />}></Route>
        <Route exact path='/inscription' element={<Inscription />}></Route>
        {isConnected === true ? (
          <Route exact path='/calendrier' element={<Calendrier />}></Route>
        ) : (
          <Route exact path='/connexion' element={<Connexion />}></Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
