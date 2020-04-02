import React from "react";
import {
  Link
} from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="javascript:void(0)">
        Story Writing
      </a>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Stories</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/new-post">New Story</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
