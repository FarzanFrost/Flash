import React from 'react';

const SideNavManager = () => {

    const style1 = {
        height: '100vh',
    };

    return (
        <div class="col-12 bg-dark" style={{...style1}}>
                            <div className=" text-bg-dark" tabIndex="-1"
                                 aria-labelledby="offcanvasDarkNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title text-secondary ps-3 pt-3" >Manager</h5>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item p-3">
                                            <a className="nav-link active" aria-current="page" href="#">Portfolio</a>
                                        </li>
                                        <li className="nav-item p-3">
                                            <a className="nav-link" href="#">Packages</a>
                                        </li>
                                        <li className="nav-item p-3">
                                            <a className="nav-link active" aria-current="page" href="#">Generate reports</a>
                                        </li>

                                        <li className="nav-item dropdown p-3">
                                            <a className="nav-link active" aria-current="page" href="#">
                                                View Events
                                            </a>
                                            {/*<a className="nav-link dropdown-toggle" href="#" role="button"*/}
                                            {/*   data-bs-toggle="dropdown" aria-expanded="false">*/}
                                            {/*    View Events*/}
                                            {/*</a>*/}
                                            {/*<ul className="dropdown-menu dropdown-menu-dark">*/}
                                            {/*    <li><a className="dropdown-item" href="#">Wedding</a></li>*/}
                                            {/*    <hr className="dropdown-divider"/>*/}
                                            {/*    <li><a className="dropdown-item" href="#">Birthday party</a></li>*/}
                                            {/*    <hr className="dropdown-divider"/>*/}
                                            {/*    <li><a className="dropdown-item" href="#">Get-to-gathers</a></li>*/}
                                            {/*</ul>*/}
                                        </li>

                                        <li className="nav-item p-3">
                                            <a className="nav-link active" aria-current="page" href="#">Chat</a>
                                        </li>
                                        <li className="nav-item p-3">
                                            <a className="nav-link active" aria-current="page" href="#">Add employee</a>
                                        </li>
                                        <li className="nav-item p-3">
                                            <a className="nav-link active" aria-current="page" href="#">Edit Employee</a>
                                        </li>
                                    </ul>


                                </div>
                            </div>
                </div>

    )
}

export default SideNavManager