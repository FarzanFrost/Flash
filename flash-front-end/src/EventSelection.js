import React from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import wedding from './Images/wedding.jpg'
import birthday from './Images/birthday.png'
import graduation from './Images/graduation.jpg'
import pubertyceremony from './Images/puberty-ceremony.jpg'
import anniversary from './Images/25th.jpg'
const Vieweventdetailsforadmin = () => {

    const style1 = {

        backgroundColor: '#767676',
        height:'250px'
    };
    const style3 = {

        backgroundColor:'#767676',
        color:'white',
    };


    return (

        <div style={{...style1}}>

            <section className="pt-5 pb-5">
                <div className=" container">
                    <div className="row">
                        <div className="col-6">
                            <h3 className="mb-2">Events</h3>
                        </div>


                        <div className="col-12">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="img-fluid" alt="100%x280" src={wedding}></img>
                                                    <div className="card-body">
                                                        <div className="text-center">
                                                            <a href="#" className="btn" style={{...style3}}>SELECT</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="img-fluid" alt="100%x280"src={birthday}></img>
                                                    <div className="card-body">
                                                        <div className="text-center">
                                                            <a href="#" className="btn" style={{...style3}}>SELECT</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="img-fluid" alt="100%x280"src={graduation}></img>
                                                    <div className="card-body">
                                                        <div className="text-center">
                                                            <a href="#" className="btn" style={{...style3}}>SELECT</a>
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
                                                    <img className="img-fluid" alt="100%x280" src={pubertyceremony}></img>
                                                    <div className="card-body">
                                                        <div className="text-center">
                                                            <a href="#" className="btn" style={{...style3}}>SELECT</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="img-fluid" alt="100%x280"src={anniversary}></img>
                                                    <div className="card-body">
                                                        <div className="text-center">
                                                            <a href="#" className="btn" style={{...style3}}>SELECT</a>
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