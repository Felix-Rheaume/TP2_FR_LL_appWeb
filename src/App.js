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

  var updateIsConnected = (isConnected) => {
    setIsConnected(isConnected);
  }

  useEffect(() => {
    const serviceURL = "https://tp2weblawrence.azurewebsites.net";
    axios
      .get(serviceURL + "/utilisateur/")
      .then((res) => {
        setIsConnected(true);
      })
      .catch((errors) => {
        setIsConnected(false);
      });
  }, [isConnected]);

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
