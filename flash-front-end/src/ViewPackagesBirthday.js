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
        height:'550px'
    };



    const style3 = {

        backgroundColor:'#767676',
        color:'white'
    };

    return (

        <div style={{...style1}}>




            <section className="pt-5 pb-5">
                <div className=" container">
                    <div className="row">
                        <div className="col-6">
                            <h3 className="mb-2">Packages </h3>
                        </div>




                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>


                        <div className="col-12">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">

                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="img-fluid" alt="100%x280" src={sliverPhoto}></img>
                                                    <div className="card-body">
                                                    <div className="card-body">

                                                        <p className="card-text">
                                                            <h4>Silver Package</h4>
                                                            <h5>60minuts Session</h5>
                                                            <h5>for only current location</h5>
                                                            <h5>outfit changes</h5>
                                                            <h5>40 Images album</h5>
                                                            <h5>printed frame(4*6)</h5>
                                                            <h5>Additional per sheet 2500</h5>
                                                            <h5>&nbsp;</h5>
                                                            <h5>&nbsp;</h5>
                                                        </p>

                                                        <a href="#" className="btn" style={{...style3}}>Subscribe</a>
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
                                                            <h4>Gold Package</h4>
                                                            <h5>60minuts Session</h5>
                                                            <h5>for only current location</h5>
                                                            <h5>outfit changes</h5>
                                                            <h5>40 Images album</h5>
                                                            <h5>printed frame(4*6)</h5>
                                                            <h5>Additional per sheet 2500</h5>
                                                            <h5>&nbsp;</h5>
                                                            <h5>&nbsp;</h5>
                                                        </p>

                                                        <a href="#" className="btn" style={{...style3}}>Subscribe</a>
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
                                                            <h4>Dimand Package</h4>
                                                            <h5>60minuts Session</h5>
                                                            <h5>for only current location</h5>
                                                            <h5>outfit changes</h5>
                                                            <h5>40 Images album</h5>
                                                            <h5>printed frame(4*6)</h5>
                                                            <h5>DVD slideshow</h5>
                                                            <h5>out door shot(UnLimited hours)</h5>
                                                            <h5>calender</h5>
                                                        </p>

                                                        <a href="#" className="btn" style={{...style3}}>Subscribe</a>
                                                    </div>


                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="carousel-item">
                                        <div className="col-md-4 mb-3">
                                            <div className="card border-dark border-5 rounded-3">
                                                <img className="img-fluid" alt="100%x280"src={platinumPhoto}></img>
                                                <div className="card-body">
                                                <div className="card-body">

                                                    <p className="card-text">
                                                        <h4>Plantinum Package</h4>
                                                        <h5>60minuts Session</h5>
                                                        <h5>for only current location</h5>
                                                        <h5>outfit changes</h5>
                                                        <h5>40 Images album</h5>
                                                        <h5>printed frame(4*6)</h5>
                                                        <h5>DVD slideshow</h5>
                                                        <h5>out door shot(UnLimited hours)</h5>
                                                        <h5>calender</h5>
                                                    </p>

                                                    <a href="#" className="btn" style={{...style3}}>Subscribe</a>
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