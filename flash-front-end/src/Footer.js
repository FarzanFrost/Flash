import React from 'react';
import FlashLogo from "./Images/FlashLogo.png";

const Footer = () => {
    return (
        <div className="main-footer bg-dark pt-1 pb-1" >
            <div className="container">

                <div className="navbar navbar-expand-lg navbar-dark bg-dark">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                                <a className="nav-item nav-link active  m-2 pb-2 pe-5 ps-5   " style={{right:'30rem'}} href="#" >About <span className="sr-only"></span></a>
                                <a className="nav-item nav-link  m-2 pb-2 pe-5 ps-5 align-middle" href="#">Privacy and Policy</a>
                                <a className="nav-item nav-link  m-2 pb-2 pe-5 ps-5 align-middle" href="#">Portfolio</a>
                                <a className="nav-item nav-link  m-2 pb-2 pe-5 ps-5 align-middle" href="#">Contact us</a>
                        </div>
                    </div>
                </div>


                    {/*OldFooter bottom*/}
                <center>
                    <div className="footer-bottom">
                        <p className="text-xs-center text-white">
                            &copy;{new Date().getFullYear()} Flash Studio - All Rights Reserved
                        </p>
                    </div>
                </center>


                </div>

        </div>
    )
}

export default Footer