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
                            <option value="All">all</option>
                            <option value="eventname">Date</option>
                            <option value="Date">Size</option>

                        </select>
                    </div>
                </div>

            </div>

            <section className="pt-6 pb-5">
                <div className=" container">
                    <div className="row">
                        <center>
                            <div className="col-6">
                                <h3 className="mb-2">Files </h3>
                            </div>
                        </center>



                        <div className="col-12">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3 w-90 p-3">
                                                    <button class="border-0 bg-white"><i className="bi bi-folder"> file name ID 101</i></button>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3 w-90 p-3">
                                                    <button className="border-0 bg-white"><i className="bi bi-folder"> file name ID 102</i></button>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3 w-90 p-3">
                                                    <button className="border-0 bg-white"><i className="bi bi-folder"> file name ID 103</i></button>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3 w-90 p-3">
                                                    <button className="border-0 bg-white"><i className="bi bi-folder"> file name ID 104</i></button>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <div className="card border-dark border-5 rounded-3 w-90 p-3">
                                                    <button className="border-0 bg-white"><i className="bi bi-folder"> file name ID 105</i></button>
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