import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Accueil from "./Components/Accueil";
import Calendrier from "./Components/Calendrier";
import Inscription from "./Components/Inscription";
import Connexion from "./Components/Connexion";
import React, { useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

// Url du site deployé : https://tp-2-fr-ll-app-web.vercel.app

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const serviceURL = "https://tp2weblawrence.azurewebsites.net";
  //const serviceURL = "http://localhost:8081";

  var updateIsConnected = (isSuccess) => {
    setIsConnected(isSuccess);
  };

  return (
    <BrowserRouter>
      <Navbar setIsConnected={updateIsConnected} isConnected={isConnected} />
      <Routes>
        <Route exact path='/' element={<Accueil />}></Route>
        <Route exact path='/inscription' element={<Inscription />}></Route>
        <Route
          exact
          path='/calendrier'
          element={isConnected === true ? <Calendrier /> : <Navigate to='/' />}
        ></Route>
        <Route
          exact
          path='/connexion'
          element={<Connexion connected={updateIsConnected} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
