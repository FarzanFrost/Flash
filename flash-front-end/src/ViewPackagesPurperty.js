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
        height:'95px'
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
                            <option value="All">All</option>
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
                                                                <h5>1 Photographers</h5>
                                                                <h5>1 Videographers</h5>
                                                                <h5>70 pages 12X30 AlbumGlass top wood</h5>
                                                                <h5>1 Signature frame</h5>
                                                                <h5>1 12x18 frame</h5>
                                                                <h5>1 Blu-rays</h5>
                                                                <h5>2 DVD's</h5>
                                                            </center>

                                                            <h5>&nbsp;</h5>
                                                            <h5>&nbsp;</h5>
                                                            <h5>&nbsp;</h5>
                                                            <h5>&nbsp;</h5>
                                                            <h6>This package includes the following activities:</h6>
                                                            <h5>Full day coverage</h5>
                                                            <h5>Ceremony</h5>
                                                            <h5>Pre-shoot OR Post-shoot session</h5>
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
                                                                <h5>2 Photographers</h5>
                                                                <h5>2 Videographers</h5>
                                                                <h5>80 pages 12X30 AlbumGlass top wood</h5>
                                                                <h5>20	pages 8X24 Preshoot album</h5>
                                                                <h5>1 Signature frame</h5>
                                                                <h5>100	Thank you cards</h5>
                                                                <h5>1 12x18 frame</h5>
                                                                <h5>2 Blu-rays</h5>
                                                                <h5>2 DVD's</h5>
                                                                <h5>1 Pen drive</h5>
                                                            </center>

                                                            <h5>&nbsp;</h5>
                                                            <h6>This package includes the following activities:</h6>
                                                            <h5>Full day coverage</h5>
                                                            <h5>Ceremony</h5>
                                                            <h5>Pre-shoot OR Post-shoot session</h5>
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
                                                                <h5>2 Photographers</h5>
                                                                <h5>2 Videographers</h5>
                                                                <h5>120 pages 12X30 AlbumGlass top wood</h5>
                                                                <h5>40	pages 8X24 Preshoot album</h5>
                                                                <h5>1 Signature frame</h5>
                                                                <h5>150	Thank you cards</h5>
                                                                <h5>2 12x18 frame</h5>
                                                                <h5>2 Blu-rays</h5>
                                                                <h5>2 DVD's</h5>
                                                                <h5>1 Pen drive</h5>
                                                                <h5>&nbsp;</h5>
                                                            </center>

                                                            <h6>This package includes the following activities:</h6>
                                                            <h5>Full day coverage</h5>
                                                            <h5>Ceremony</h5>
                                                            <h5>Pre-shoot OR Post-shoot session</h5>
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
                                                                    <h5>2 Photographers</h5>
                                                                    <h5>2 Videographers</h5>
                                                                    <h5>150 pages 12X30 AlbumGlass top wood</h5>
                                                                    <h5>50	pages 8X24 Preshoot album</h5>
                                                                    <h5>1 Signature frame</h5>
                                                                    <h5>150	Thank you cards</h5>
                                                                    <h5>2 12x18 frame</h5>
                                                                    <h5>2 Blu-rays</h5>
                                                                    <h5>2 DVD's</h5>
                                                                    <h5>1 Pen drive</h5>
                                                                </center>

                                                                <h5>&nbsp;</h5>
                                                                <h6>This package includes the following activities:</h6>
                                                                <h5>Full day coverage</h5>
                                                                <h5>Ceremony</h5>
                                                                <h5>Pre-shoot OR Post-shoot session</h5>
                                                            </p>
                                                            <br/>
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
                </div>
            </section>





        </div>

    )

}




export default Vieweventdetailsforadmin