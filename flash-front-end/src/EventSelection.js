import React from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import wedding from './Images/wedding.jpg'
import birthday from './Images/birthday.jpg'
import prizegiving from './Images/prizegiving.jpg'
import pubertyceremony from './Images/puberty-ceremony.jpg'
import housewarming from './Images/housewarming.jpg'
import gettogether from './Images/gettogether.jpg'
const Vieweventdetailsforadmin = () => {

    const style1 = {

        backgroundColor: '#767676',
        height:'100px'
    };
    const style3 = {

        backgroundColor:'#767676',
        color:'white',
    };


    return (

        <div style={{...style1}}>

            <center>
                <div className="col-6">
                    <h1 className="mb-2">Events</h1>
                </div>
            </center>

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
                                                    <img className="w-100 p-3 pb-0" src={wedding}></img>
                                                    <div className="card-body">
                                                        <div className="text-center">
                                                            <a href="#" className="btn" style={{...style3}}>Packages</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="w-100 p-3 pb-0" src={birthday}></img>
                                                    <div className="card-body">
                                                        <div className="text-center">
                                                            <a href="#" className="btn" style={{...style3}}>Packages</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="w-100 p-3 pb-0" src={prizegiving}></img>
                                                    <div className="card-body">
                                                        <div className="text-center">
                                                            <a href="#" className="btn" style={{...style3}}>Packages</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="w-100 p-3 pb-0" src={pubertyceremony}></img>
                                                    <div className="card-body">
                                                        <div className="text-center">
                                                            <a href="#" className="btn" style={{...style3}}>Packages</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="w-100 p-3 pb-0" src={housewarming}></img>
                                                    <div className="card-body">
                                                        <div className="text-center">
                                                            <a href="#" className="btn" style={{...style3}}>Packages</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3">
                                                    <img className="w-100 p-3 pb-0" src={gettogether}></img>
                                                    <div className="card-body">
                                                        <div className="text-center">
                                                            <button className="btn" style={{...style3}} >Packages</button>
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