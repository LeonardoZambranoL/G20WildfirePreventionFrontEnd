import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTowerBroadcast } from "@fortawesome/free-solid-svg-icons/faTowerBroadcast";
import Link from "next/link";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg m-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <span className="navbarLogo">
            <h2 className="fst-italic display-5">404</h2>
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav text-black navItemsParent me-lg-3">
          <li className="nav-item ms-lg-5">
            <a className="nav-link navItems" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item ms-lg-5">
            <a className="nav-link navItems" href="#">Live <span fs="1rem"><FontAwesomeIcon icon={faTowerBroadcast}/></span></a>
          </li>
          <li className="nav-item ms-lg-5">
            <a className="nav-link navItems" href={"/wildlife"}>Wildlife</a>
          </li>
          <li className="nav-item ms-lg-5">
            <a className="nav-link navItems" href={"/economy"}>Economic impact</a>
          </li>
          <li className="nav-item ms-lg-5">
            <a className="nav-link navItems" href={"/demography"}>Demographic impact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
