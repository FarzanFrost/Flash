import React from 'react';
import FlashLogo from './Images/FlashLogo.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




const Header = () => {
    return (

        <div className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <button className="btn btn-dark p-4">
                        <i className="bi bi-list"></i>
                    </button>
                    <img src={FlashLogo} alt="logo" height="80px" width="80px"/>
      {/*

                    <li className="nav-item pb-2">
                        <a href="" className="nav-link text-white " data-bs-toggle="pill">
                            <i className="bi bi-eye bi me-2"></i>
                            View Bookings
                        </a>
                    </li>

                    <a className="nav-item nav-link active  m-3 pb-3 pe-5 ps-5" href="#" >Studio Flash <span className="sr-only"></span></a>
                    <a className="nav-item nav-link active  m-3 pb-2 pe-5 ps-5" href="#" >Home <span className="sr-only"></span></a>
                    <a className="nav-item nav-link  m-3 pb-2 pe-5 ps-5" href="#">Book Now</a>
                    <a className="nav-item nav-link  m-3 pb-2 pe-5 ps-5" href="#">Portfolio</a>
                    <a className="nav-item nav-link  m-3 pb-2 pe-5 ps-5 " href="#">About us</a>
                    <a className="nav-item nav-link  m-3 pb-2 pe-5 ps-5" href="#">Contact us</a>
                    <a className="nav-item nav-link  m-3 pb-2 pe-5 ps-5" href="#">Sign Out</a>



                </div>
*/}
                    <a className="nav-item nav-link active  m-3 pb-2 pe-5 ps-lg-5  " href="#" > <span className="sr-only"></span></a>
                    <a className="nav-item nav-link active  m-3 pb-2 pe-5 ps-lg-5  " href="#" > <span className="sr-only"></span></a>
                    <a className="nav-item nav-link active  m-3 pb-2 pe-5 ps-lg-5  " href="#" > <span className="sr-only"></span></a>
                    <a className="nav-item nav-link active  m-3 pb-2 pe-5 ps-lg-5  " href="#" > <span className="sr-only"></span></a>
                    <a className="nav-item nav-link active  m-3 pb-2 pe-5 ps-lg-5  " href="#" > <span className="sr-only"></span></a>
                    <a className="nav-item nav-link active  m-3 pb-2 pe-5 ps-lg-5  " href="#" > <span className="sr-only"></span></a>
                        <a className="nav-item nav-link active  m-3 pb-2 pe-5 ps-lg-5  me-0" href="#" >Home <span className="sr-only"></span></a>
                        <a className="nav-item nav-link  m-3 pb-2 pe-5 ps-5 me-0" href="#">Book Now</a>
                        <a className="nav-item nav-link  m-3 pb-2 pe-5 ps-5  me-0"  href="#">Sign Out</a>


            </div>
        </div>
        </div>

    )
}

export default Header