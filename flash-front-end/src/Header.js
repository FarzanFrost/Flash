import React from 'react';
import './Header.css';
import FlashLogo from './Images/FlashLogo.png';

const Header = () => {
    return (

        <nav className="navbar navbar-expand-sm  bg-dark pt-1 pb-1">
            <div className="container-lg ms-0 me-0">
                <a className="navbar-brand pb-0 pe-5 ps-3 shadow-lg text-white text-nowrap" href="#">Studio Flash
                    <img src={FlashLogo} className="div-png" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active m-3 pb-2 pe-5 ps-5 shadow-lg text-white text-nowrap"  aria-current="page" href="#">Home</a>
                        <a className="nav-link m-3 pb-2 pe-5 ps-5 shadow-lg text-white text-nowrap" href="#">Book Now</a>
                        <a className="nav-link m-3 pb-2 pe-5 ps-5 shadow-lg text-white text-nowrap" href="#">Portfolio</a>
                        <a className="nav-link m-3 pb-2 pe-5 ps-5 shadow-lg text-white text-nowrap" href="#">About us</a>
                        <a className="nav-link m-3 pb-2 pe-5 ps-5 shadow-lg text-white text-nowrap" href="#">Contact us</a>
                        <a className="nav-link m-3 pb-2 pe-5 ps-5 shadow-lg text-white text-nowrap" href="#">Sign out</a>
                    </div>
                </div>



            </div>
        </nav>


    )
}

export default Header