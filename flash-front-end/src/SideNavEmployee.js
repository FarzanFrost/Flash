import React from 'react';

const SideNavEmployee = () => {
    return (
        <div className="col-2 bg-dark mh-100 ">
            <div className=" text-bg-dark" tabIndex="-1"
                 aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title text-secondary ps-3 pt-3">Employee</h5>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item p-3">
                            <a className="nav-link active" aria-current="page" href="#">View works</a>
                        </li>

                        <li className="nav-item dropdown p-3">
                            <a className="nav-link dropdown-toggle" href="#" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Add photos
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

export default SideNavEmployee