import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav className={`navbar bg-${props.mode}`}>
      <div className="container-fluid">
        <a
          className={`navbar-brand text-${
            props.mode === "light" ? "dark" : "light"
          }`}
          href="/"
        >
          {props.title}
        </a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <ul className={`ul text-${props.mode === "light" ? "dark" : "light"}`}>
          <li><Link to="/" className={`text-${props.mode === "light" ? "dark" : "light"} under`}>Home</Link></li>
          <li><Link to="/about" className={`text-${props.mode === "light" ? "dark" : "light"} under`}>About</Link></li>
          <li><Link to="/contacts" className={`text-${props.mode === "light" ? "dark" : "light"} under`}>Contacts</Link></li>
        </ul>
        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};
NavBar.defaultProps = {
  title: "Set Title here", // this is saying if i dont pass the prop then print this instead of TextUtils
};
// line no 31 is just setting the proprty type of the var we will use in the components like: as we entered title value as Textutils. here the console.log(typeof TextUtils) is string
