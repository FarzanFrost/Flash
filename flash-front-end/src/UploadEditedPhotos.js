import React from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './ViewPackages.css';
//import './FileInput';

const Vieweventdetailsforadmin = () => {

    const style1 = {

        backgroundColor: '#767676',
        height:'250px'
    };



    return (

        <div style={{...style1}}>
            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form method="post" action="#" id="#">
                                <div className="form-group files">
                                    <label>Upload Your Images </label>
                                    <input type="file" className="form-control" multiple=""></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            <section className="pt-5 pb-5">
                <div className=" container">
                    <div className="row">
                        <div className="col-6">
                            <h3 className="mb-2">Upload Photos </h3>
                        </div>


                        <div className="col-12">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="img-fluid" alt="100%x280" src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'></img>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="img-fluid" alt="100%x280"src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'></img>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="img-fluid" alt="100%x280"src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-5 pb-5">
                <div className=" container">
                    <div className="row">

                        <div className="col-12">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="img-fluid" alt="100%x280" src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'></img>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="img-fluid" alt="100%x280"src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp'></img>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="img-fluid" alt="100%x280"src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-5 pb-5">
                <div className=" container">
                    <div className="row">

                        <div className="col-12">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="img-fluid" alt="100%x280" src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'></img>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="img-fluid" alt="100%x280"src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'></img>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="img-fluid" alt="100%x280"src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'></img>
                                                </div>
                                            </div>
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




export default Vieweventdetailsforadmin