import React from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Vieweventdetailsforadmin = () => {

    const style1 = {


        height:'850px'
    };

    const style2 = {

        width: '150px',
        height: '550px',
        backgroundColor: 'black',
    };

    const style3 = {

        backgroundColor:'black',
        color:'white'
    };

    return (

<div style={{...style1}}>


    <div className=" row">
        <h2 className="text-center mt-3 pb-3">Employee Details</h2>
        <div className="col-md-6">
            <div className="position-relative mx-5 m-2 border-dark border-4" style={{ width: '48rem',left:'16rem'}}>
                <input type="text" className="form-control border-3 border-dark" id="formGroupExampleInput" placeholder="Example input"></input>
            </div>
       </div>



        <div className="col-md-6" >

            <div className="dropdown position-relative mx-5 m-2" style={{ left:'16rem'}}>

                <select class="btn btn-dark dropdown-toggle" type="button" id="Filter"
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
                {/*<div className="col-6">*/}
                {/*    <h3 className="mb-2" >Event details </h3>*/}
                {/*</div>*/}


                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next" style={{ height:'50rem'}}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>


                <div className="col-12">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">

                                    <div className="col-md-4 mb-3">
                                        <div className="card border-dark border-5 rounded-3" >
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
                                        <div className="card border-dark border-5 rounded-3">
                                            <img className="img-fluid" alt="100%x280"
                                                 src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698">
                                            </img>  <div className="card-body">
                                            <div className="card-body">

                                                <p className="card-text">
                                                    <h5>Event Name:birthday</h5>
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
                                        <div className="card border-dark border-5 rounded-3">
                                            <img className="img-fluid" alt="100%x280"
                                                 src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698">
                                            </img>  <div className="card-body">
                                            <div className="card-body">

                                                <p className="card-text">
                                                    <h5>Event Name:Wedding</h5>
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
                            </div>


                            <div className="carousel-item">
                            <div className="col-md-4 mb-3">
                                        <div className="card border-dark border-5 rounded-3">
                                            <img className="img-fluid" alt="100%x280"
                                                 src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d">
                                            </img>  <div className="card-body">
                                            <div className="card-body">

                                                <p className="card-text">
                                                    <h5>Event Name:Wedding</h5>
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