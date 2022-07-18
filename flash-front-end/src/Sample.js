import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
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


const Sample = () => {
    return (

        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <img className="img-fluid" alt="100%x280"
                                     src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d">
                                </img>       <div className="card-body">
                                <div className="card-body">

                                    <p className="card-text">
                                        <h5>Event Name:Birthday</h5>
                                        <h5>Event Date</h5>
                                    </p>
                                    <a href="#" className="btn" style={{...style3}} >View Review</a><br/><br/>
                                    <a href="#" className="btn" style={{...style3}}>Edit details</a>
                                </div>
                                <div className="card-footer bg-dark text-center">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>

                            </div>

                            </div>
                        </div>
                    </div>


                    <div className="carousel-item active">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <img className="img-fluid" alt="100%x280"
                                     src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d">
                                </img>       <div className="card-body">
                                <div className="card-body">

                                    <p className="card-text">
                                        <h5>Event Name:Birthday</h5>
                                        <h5>Event Date</h5>
                                    </p>
                                    <a href="#" className="btn" style={{...style3}} >View Review</a><br/><br/>
                                    <a href="#" className="btn" style={{...style3}}>Edit details</a>
                                </div>
                                <div className="card-footer bg-dark text-center">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>

                            </div>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">

                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <img className="img-fluid" alt="100%x280"
                                     src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d">
                                </img>       <div className="card-body">
                                <div className="card-body">

                                    <p className="card-text">
                                        <h5>Event Name:Birthday</h5>
                                        <h5>Event Date</h5>
                                    </p>
                                    <a href="#" className="btn" style={{...style3}} >View Review</a><br/><br/>
                                    <a href="#" className="btn" style={{...style3}}>Edit details</a>
                                </div>
                                <div className="card-footer bg-dark text-center">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>

                            </div>

                            </div>
                        </div>


                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <img className="img-fluid" alt="100%x280"
                                     src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d">
                                </img>       <div className="card-body">
                                <div className="card-body">

                                    <p className="card-text">
                                        <h5>Event Name:Birthday</h5>
                                        <h5>Event Date</h5>
                                    </p>
                                    <a href="#" className="btn" style={{...style3}} >View Review</a><br/><br/>
                                    <a href="#" className="btn" style={{...style3}}>Edit details</a>
                                </div>
                                <div className="card-footer bg-dark text-center">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>

                            </div>

                            </div>
                        </div>

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



            </div>





        </div>

        </div>       );



}
export default Sample;