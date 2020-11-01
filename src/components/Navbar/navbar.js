import React from "react";
import "./navbar.css"
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="header-fixed-top">
      <nav className="navbar navbar-expand-lg bg-dark">
          <Link className="navbar-brand mb-0 h1 p-1" to="/">
            <h2 className="border-0 ml-5">Chris Tyrone</h2>
          </Link>

          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="text-light navbar-nav ml-auto">
              <li className="nav-item active">
                <Link
                  to="/"
                  className={
                    location.pathname === "/" ? "nav-link active" : "nav-link"
                  }
                >
                  About
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  to="/portfolio"
                  className={
                    location.pathname === "/portfolio"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  to="/contact"
                  className={
                    location.pathname === "/contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
      </nav>
   </header>
  );
}