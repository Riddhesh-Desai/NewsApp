import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../Images/newslogo3.png'

export default function Navbar() {
    const handleCollapse = () => {
        console.log("handleCollapse");
        var nav = document.getElementById("navbarNav");
        var btn = document.getElementById("navbarBtn");
        nav.classList.remove("show");
        btn.classList.add("collapsed");
      };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-wrapper bg-dark">
        <div className="container navbar-container ">
            <a className="navbar-brand" href="/">
                News Max
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon"></span> */}
            <i className="fas fa-stream"></i>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav menu-navbar">
                    <li className="nav-item">
                    <Link className="nav-link" to="/Home" onClick={handleCollapse}>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Business" onClick={handleCollapse}>Business</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Entertainment" onClick={handleCollapse}>Entertainment</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Health" onClick={handleCollapse}>Health</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Science" onClick={handleCollapse}>Science</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Sports" onClick={handleCollapse}>Sports</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Technology" onClick={handleCollapse}>Technology</Link>
                    </li>
                </ul>
                <form className="d-flex search-btn">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-danger" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
  )
}
