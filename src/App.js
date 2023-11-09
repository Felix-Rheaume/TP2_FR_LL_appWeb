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

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const serviceURL = "https://tp2weblawrence.azurewebsites.net";

  var updateIsConnected = async () => {
    await axios
      .get(serviceURL + "/utilisateur")
      .then((res) => {
        if(res.status === 200){
          setIsConnected(true);
        }
      })
      .catch((errors) => {
        setIsConnected(false);
      });
  }

  return (
    <BrowserRouter>
      <Navbar isConnected={isConnected} />
      <Routes>
        <Route exact path='/' element={<Accueil />}></Route>
        <Route exact path='/inscription' element={<Inscription />}></Route>
        <Route exact path='/calendrier' element={isConnected === true ? <Calendrier /> : <Navigate to='/' />}></Route>
        <Route exact path='/connexion' element={<Connexion connected={updateIsConnected}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
