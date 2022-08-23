import React from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import sliverPhoto from './Images/silver-package.png'
import goldPhoto from './Images/gold-package_.png'
import diamondPhoto from './Images/diamond-package.png'
import platinumPhoto from './Images/platinum-package.png'


const Vieweventdetailsforadmin = () => {

    const style1 = {

        backgroundColor: '#767676',
        height:'450px'
    };



    return (

        <div style={{...style1}}>

            <div className=" row">
                <div className="col-md-6">
                    <div className="position-relative mx-5 m-2 border-dark border-4"
                         style={{width: '48rem', left: '16rem'}}>
                        <input type="text" className="form-control border-3 border-dark" id="formGroupExampleInput"
                               placeholder="Example input"></input>
                    </div>
                </div>


                <div className="col-md-6">
                    <div className="dropdown position-relative mx-5 m-2" style={{left: '16rem'}}>
                        <select className="btn btn-dark dropdown-toggle" type="button" id="Filter"
                                data-bs-toggle="dropdown">
                            <option value="All">Wedding</option>
                            <option value="eventname">Birthday</option>
                            <option value="Date">Puperty</option>
                            <option value="All">Get together</option>
                            <option value="eventname">House warming</option>
                            <option value="Date">Prize Giving</option>
                        </select>
                    </div>
                </div>

            </div>


            <section className="pt-6 pb-5">
                <div className=" container">
                    <div className="row">
                        <center>
                            <div className="col-6">
                                <h3 className="mb-2">Packages </h3>
                            </div>
                        </center>


                        <div className="col-12">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">

                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="img-fluid" class="img-rounded" alt="100%x280px" src={sliverPhoto}></img>
                                                    <div className="card-body">
                                                    <div className="card-body">
                                                        <p className="card-text">
                                                            <center>
                                                                <h4>Silver Package</h4>
                                                                <h5>70page album</h5>
                                                                <h5>Out Shoot</h5>
                                                                <h5>Couple Frame</h5>
                                                                <h5>Signature Board</h5>
                                                                <h5>Save the Data photo</h5>
                                                                <h5>Additional per sheet 2500</h5>
                                                                <h5>&nbsp;</h5>
                                                            </center>
                                                        </p>
                                                        <br/>
                                                    </div>
                                                        <div className="card-footer bg-dark text-center" >
                                                            <small className="text-muted"><h5>Rs. 125,000.00</h5></small>
                                                        </div>
                                                </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="img-fluid" alt="100%x280"src={goldPhoto}></img>
                                                    <div className="card-body">
                                                    <div className="card-body">
                                                        <p className="card-text">
                                                            <center>
                                                                <h4>Gold Package</h4>
                                                                <h5>70page album</h5>
                                                                <h5>Out Shoot</h5>
                                                                <h5>Couple Frame(16*24)</h5>
                                                                <h5>Signature Board</h5>
                                                                <h5>highlights photo</h5>
                                                                <h5>Save the Data(video or Photo)</h5>
                                                                <h5>Additional per sheet 2500</h5>
                                                            </center>
                                                        </p>
                                                        <br/>
                                                    </div>
                                                        <div className="card-footer bg-dark text-center" >
                                                            <small className="text-muted"><h5>Rs. 135,000.00</h5></small>
                                                        </div>
                                                </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="img-fluid" alt="100%x280"src={diamondPhoto}></img>
                                                    <div className="card-body">
                                                    <div className="card-body">
                                                        <p className="card-text">
                                                            <center>
                                                                <h4>Dimand Package</h4>
                                                                <h5>70page album</h5>
                                                                <h5>Out Shoot</h5>
                                                                <h5>Couple Frame(16*24)</h5>
                                                                <h5>Signature Board</h5>
                                                                <h5>highlights photo</h5>
                                                                <h5>Save the Data(video or Photo)</h5>
                                                                <h5>Additional per sheet 2500</h5>
                                                            </center>
                                                        </p>
                                                        <br/>
                                                    </div>
                                                        <div className="card-footer bg-dark text-center" >
                                                            <small className="text-muted"><h5>Rs. 225,000.00</h5></small>
                                                        </div>
                                                </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="img-fluid" alt="100%x280" src={platinumPhoto}></img>
                                                    <div className="card-body">
                                                        <div className="card-body">
                                                            <p className="card-text">
                                                                <center>
                                                                    <h4>Plantinum Package</h4>
                                                                    <h5>70page album</h5>
                                                                    <h5>Out Shoot</h5>
                                                                    <h5>Couple Frame(16*24)</h5>
                                                                    <h5>Signature Board</h5>
                                                                    <h5>highlights photo</h5>
                                                                    <h5>Save the Data(video or Photo)</h5>
                                                                    <h5>Additional per sheet 2500</h5>
                                                                </center>
                                                            </p>
                                                            <br/>
                                                        </div>
                                                        <div className="card-footer bg-dark text-center" >
                                                            <small className="text-muted"><h5>Rs. 300,000.00</h5></small>
                                                        </div>
                                                    </div>
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