import React from 'react';

const SideNavAdmin = () => {
    return (
        <div class="col-2 bg-dark mh-100 ">
                    <div className=" text-bg-dark" tabIndex="-1"
                         aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-secondary ps-3 pt-3" >Administrator</h5>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item p-3">
                                    <a className="nav-link active" aria-current="page" href="#">Employee</a>
                                </li>
                                <li className="nav-item p-3">
                                    <a className="nav-link" href="#">Reviews</a>
                                </li>
                                <li className="nav-item p-3">
                                    <a className="nav-link active" aria-current="page" href="#">Logs</a>
                                </li>
                                <li className="nav-item p-3">
                                    <a className="nav-link" href="#">Event details</a>
                                </li>

                                <li className="nav-item dropdown p-3">
                                    <a className="nav-link dropdown-toggle" href="#" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Event details
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><a className="dropdown-item" href="#">Wedding</a></li>
                                        <hr className="dropdown-divider"/>
                                        <li><a className="dropdown-item" href="#">Birthday party</a></li>
                                        <hr className="dropdown-divider"/>
                                        <li><a className="dropdown-item" href="#">Get-to-gathers</a></li>

                                    </ul>
                                </li>
                            </ul>


                        </div>
                    </div>
        </div>

    )
}

export default SideNavAdmin