import React from 'react';
import FlashLogo from './Images/FlashLogo.png';

const OldHeader = () => {
    return (


        <nav className="navbar navbar-expand-md  navbar-dark bg-dark pt-1 pb-1">
            <div className="container-lg ms-0 me-0">
                <a className="navbar-brand shadow-lg text-white" href="#">Studio Flash
                    <img src={FlashLogo} alt="logo" height="300px" width="300px" class="d-inline-block align-top p-0"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMobileMenu"
                        aria-controls="#toggleMobileMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="toggleMobileMenu">
                    <ul class="navbar-nav ms-auto text-center">

                        <li>
                            <a className="nav-link active m-3 pb-2 pe-5 ps-5 shadow-lg text-white text-nowrap"  aria-current="page" href="#">Home</a>
                        </li>
                        <li>
                            <a className="nav-link m-3 pb-2 pe-5 ps-5 shadow-lg text-white text-nowrap" href="#">Book Now</a>
                        </li>
                        <li>
                            <a className="nav-link m-3 pb-2 pe-5 ps-5 shadow-lg text-white text-nowrap" href="#">Portfolio</a>
                        </li>
                        <li>
                            <a className="nav-link m-3 pb-2 pe-5 ps-5 shadow-lg text-white text-nowrap" href="#">About us</a>
                        </li>
                        <li>
                            <a className="nav-link m-3 pb-2 pe-5 ps-5 shadow-lg text-white text-nowrap" href="#">Contact us</a>
                        </li>
                        <li>
                            <a className="nav-link m-3 pb-2 pe-5 ps-5 shadow-lg text-white text-nowrap" href="#">Sign out</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>

    )
}

export default OldHeader