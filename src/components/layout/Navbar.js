import React from "react";
import { NavLink, Link } from "react-router-dom";
import firebase from "../../config/fbconfig";

const Navbar = () => {
  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <nav className="green">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          MyNotes
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/favorites">Favourites</NavLink>
          </li>
          <li>
            <a onClick={handleLogout}>Sign out</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
