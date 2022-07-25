import React from 'react';

const SideNavCustomer = () => {
    return (
        <div class="col-2 bg-dark mh-100 ">
                            <div className=" text-bg-dark" tabIndex="-1"
                                 aria-labelledby="offcanvasDarkNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title text-secondary ps-3 pt-3" >Customer</h5>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item p-3">
                                            <a className="nav-link active" aria-current="page" href="#">Book here</a>
                                        </li>
                                        <li className="nav-item p-3">
                                            <a className="nav-link" href="#">View bookings</a>
                                        </li>
                                        <li className="nav-item p-3">
                                            <a className="nav-link "  href="#">Post Reviews</a>
                                        </li>
                                        <li className="nav-item p-3">
                                            <a className="nav-link" href="#">Choose photos</a>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                </div>
    )
}

export default SideNavCustomer