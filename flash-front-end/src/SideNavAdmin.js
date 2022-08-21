import React from 'react';

const SideNavAdmin = () => {

    const style1 = {
        height: '100vh',
    };

    return (
        <div class="col-12 bg-dark" style={{...style1}}>
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

                            </ul>


                        </div>
                    </div>
        </div>

    )
}

export default SideNavAdmin