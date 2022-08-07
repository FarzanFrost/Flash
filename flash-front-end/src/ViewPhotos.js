import React from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import sliverPhoto from './Images/silver-package.png'
import goldPhoto from './Images/gold-package_.png'
import diamondPhoto from './Images/diamond-package.png'
import platinumPhoto from './Images/platinum-package.png'


const Vieweventdetailsforadmin = () => {

    const style1 = {

        backgroundColor: '#B36A5E',
        height:'850px'
    };

    const style2 = {

        width: '150px',
        height: '550px',
        backgroundColor: '#767676',
    };

    const style3 = {

        backgroundColor:'#4B2000',
        color:'white'
    };

    return (

        <div style={{...style1}}>


            <div className=" row">
                <div className="col-md-6">
                    <div className="position-relative mx-5 m-2" style={{ width: '48rem',left:'16rem'}}>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"></input>
                    </div>
                </div>



                <div className="col-md-6" >

                    <div className="dropdown position-relative mx-5 m-2" style={{ left:'16rem'}}>

                        <select class="btn btn-secondary dropdown-toggle" type="button" id="Filter"
                                data-bs-toggle="dropdown">
                            <option value="All">All</option>
                            <option value="eventname">Event Name</option>
                            <option value="Date">Date</option>

                        </select>
                    </div>

                </div>

            </div>

            <section className="pt-5 pb-5">
                <div className=" container">
                    <div className="row">
                        <div className="col-6">
                            <h3 className="mb-2">Photos </h3>
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


                                                    </div>


                                                </div>

                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="img-fluid" alt="100%x280"src={goldPhoto}></img>
                                                    <div className="card-body">
                                                    <div className="card-body">


                                                    </div>


                                                </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="img-fluid" alt="100%x280"src={diamondPhoto}></img>
                                                    <div className="card-body">
                                                    <div className="card-body">


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