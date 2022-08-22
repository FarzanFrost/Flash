import React from 'react';
import FlashLogo from './Images/FlashLogo.png';


const Header = () => {
    return (

        <div className="navbar navbar-expand-lg navbar-dark bg-dark">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <button className="btn btn-dark p-4">
                        <i className="bi bi-list"></i>
                    </button>
                    <img src={FlashLogo} alt="logo" height="80px" width="80px"/>
                    <a className="nav-item nav-link active  m-3 pb-3 pe-5 ps-5" href="#" >Studio Flash <span className="sr-only"></span></a>
                    <a className="nav-item nav-link active  m-3 pb-2 pe-5 ps-5" href="#" >Home <span className="sr-only"></span></a>
                    <a className="nav-item nav-link  m-3 pb-2 pe-5 ps-5" href="#">Book Now</a>
                    <a className="nav-item nav-link  m-3 pb-2 pe-5 ps-5" href="#">Portfolio</a>
                    <a className="nav-item nav-link  m-3 pb-2 pe-5 ps-5 " href="#">About us</a>
                    <a className="nav-item nav-link  m-3 pb-2 pe-5 ps-5" href="#">Contact us</a>
                    <a className="nav-item nav-link  m-3 pb-2 pe-5 ps-5" href="#">Sign Out</a>


                </div>
            </div>
        </div>


    )
}

export default Header