import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const isConnected = props.isConnected;

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
      </ul>
    </nav>
  );
}

export default Navbar;
