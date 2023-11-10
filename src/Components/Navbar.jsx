import axios from "axios";
import React from "react";
import { NavLink, redirect } from "react-router-dom";
axios.defaults.withCredentials = true;

function Navbar(props) {
  const serviceURL = "https://tp2weblawrence.azurewebsites.net";
  // const serviceURL = "http://localhost:8081";

  const isConnected = props.isConnected;

  const deconnecter = () => {
    axios
      .get(serviceURL + "/deconnexion")
      .then((res) => {
        props.updateIsConnected(false);
        redirect("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <nav className='navLinks'>
      <ul>
        <li>
          <NavLink to='/' className='navLink'>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to='/inscription' className='navLink'>
            S'inscrire
          </NavLink>
        </li>
        {isConnected === true ? (
          <li>
            <NavLink to='/calendrier' className='navLink'>
              Calendrier
            </NavLink>
          </li>
        ) : (
          <></>
        )}
        <li>
          <NavLink to='/connexion' className='navLink'>
            Connexion
          </NavLink>
        </li>
        {props.isConnected === true ? (
          <li>
            <button
              id='boutonDeconnexion'
              className='active'
              onClick={deconnecter}
            >
              Déconnexion
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export default Navbar;
