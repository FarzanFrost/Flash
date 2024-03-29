import React from 'react';
import FlashLogo from './Images/FlashLogo.png';

const OldFooter = () => {
    return (
        <div className="main-footer bg-dark pt-1 pb-1" >
            <div className="container">
                <div className="row">
                    {/*Coloumn*/}

                    <div className="col-md-3 col-sm-6">
                        <div className="content has-text-centered">
                            <h3 className="title has-text-white text-white">Follow Us</h3>
                        </div>
                        <div className="row mt-1 social-icon-set has-text-centered">

                            <a href="https://www.facebook.com/">
                            <span className="icon is-small mr-1 social-icons">
                            <i className="fab fa-facebook-f"></i>
                            </span>
                            </a>

                            <a href="https://www.instagram.com/">
                            <span className="icon is-small mr-1 social-icons">
                            <i className="fab fa-instagram"></i>
                            </span>
                            </a>

                            <a href="https://www.youtube.com/channel/">
                            <span className="icon is-small mr-1 social-icons">
                            <i className="fab fa-youtube"></i>
                            </span>
                            </a>

                            <a href="https://www.linkedin.com/">
                            <span className="icon is-small mr-1 social-icons">
                            <i className="fab fa-linkedin-in"></i>
                            </span>
                            </a>
                        </div>
                    </div>

                </div>

            <div>


                    {/*OldFooter bottom*/}
                    <div className="footer-bottom">
                        <p className="text-xs-center text-white">
                            &copy;{new Date().getFullYear()} Flash Studio - All Rights Reserved
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default OldFooter