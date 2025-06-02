import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <nav class="navbar">
      <a href="#" class="logo">
        GBD
      </a>
      <ul class="nav-links">
        <li>
          <a href="#home">Features</a>
        </li>
        <li>
          <a href="#about">Gallery</a>
        </li>
        <li>
          <a href="#services">Floor Plans</a>
        </li>
        <li>
          <a href="#contact">Amenities</a>
        </li>
      </ul>
    </nav>
  );
}
