import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="navigation-bar">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            GD
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Floor Plans
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Amenities
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
