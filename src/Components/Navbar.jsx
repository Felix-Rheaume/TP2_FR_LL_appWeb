import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
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
          <li>
            <NavLink to='/calendrier' className='navLink'>
              Calendrier
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
