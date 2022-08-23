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
        height:'250px'
    };



    return (

        <div style={{...style1}}>

            <section className="pt-5 pb-5">
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
                                                <div className="card border-dark border-5 rounded-3 w-100 p-3">
                                                    <i className="bi bi-folder"></i>
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