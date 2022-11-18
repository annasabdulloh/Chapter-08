import React from 'react'

import './NavigationBar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
        <nav className="navbar navbar-expand-sm navbar-light pt-4">
            <div className="container">
                <Link to="/">
                  <a className="navbar-brand header-logo py-1 px-5 text-white" href='#'> </a>   
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className=" navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item px-2 fw-normal text-end">
                        <a href="#our-service" className="btn">Our Service</a>
                    </li>
                    <li className="nav-item px-2 fw-normal text-end">
                        <a href="#why-us" className="btn">Why Us</a>
                    </li>
                    <li className="nav-item px-2 fw-normal text-end">
                        <a href="#testimoni" className="btn">Testimonial</a>
                    </li>
                    <li className="nav-item px-2 fw-normal text-end">
                        <a href="#faq" className="btn">FAQ</a>
                    </li>
                    <div className="justify-conte3nt-center px-2 text-end">
                        <Link to = "/login">
                            <button type="button" className="btn btn-success">Login</button>
                        </Link>
                    </div>
                    </ul>
                </div>
            </div> 
        </nav>
    </header>
  )
}

export default Navbar;
