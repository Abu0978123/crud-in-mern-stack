import React from "react";
import { Link, NavLink  } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="postions">
      <nav 
        className="container navbar  navbar-expand-lg navbar-light bg-green"
        postion="fixed"
      >
        <span className="navbar-brand  ">
          <Link to={"/"}>
            <i className="homeStyle" style={{marginLeft:"150px"}}>CRUD Mini Project</i>
          </Link>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ">
          <li className="nav-item active">
              {/* <Link to={"/"}>
                
                <a className="nav-link ">Home</a>
              </Link> */}
              <NavLink  className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item active">    
              {/* <Link to={"/create"}>
                <a className="nav-link ">Add Data</a>
              </Link> */}
              <NavLink  className="nav-link"  to="/create">Enter</NavLink>
            </li>
            <li className="nav-item">
              {/* <Link to={"/read"}>
                
                <a className="nav-link">Read Data</a>
              </Link> */}
              <NavLink  className="nav-link"  to="/read">Table</NavLink>
            </li>
            <li className="nav-item">
              {/* <Link to={"/update"}>
                <a className="nav-link">Update Data</a>
              </Link> */}
              <NavLink   className="nav-link disabled" to="/update/:id">Updata Table</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
