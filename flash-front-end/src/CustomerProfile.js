import React, {useState} from 'react';
import camera from "./Images/camera.jpg";

const CustomerProfile = () =>{
    return(
        <div className="h-100">

            <section className="h-100">

                <div className="container py-5 h-100">

                    <div className="row d-flex justify-content-center align-items-center h-100">

                        <div className="col-xl-10 my-5 py-2 my-lg-1 py-lg-1 my-xl-0 py-xl-0">

                            <div className="card rounded-3 text-black my-lg-1 my-xl-0 py-xl-0" style={ { backgroundColor : '#d7d7d7' } }>

                                <div className="row g-0">

                                    <div className="col-lg-5 d-lg-flex d-none">

                                        <div className="d-lg-flex d-none text-center">
                                            <img src={ camera } className="img-fluid rounded-3 h-100" alt="Camera"/>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    )
}

export default CustomerProfile