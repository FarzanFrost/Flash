import  React from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import loginPhoto from "./Images/backgroudphoto.jpg";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ManagerViewAllReviews = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className="h-100">

            <div className='container'>

                <div className="pt-4" >

                    <div className="card border-dark border-0 rounded-5 shadow mt-3 mx-5 " style={{backgroundColor: '#d7d7d7'}}>

                        <h2 className="text-center mt-3" >Reviews</h2>

                        <div className="row">
                            <div className="col-xs-8 col-xs-offset-2">
                                <div className="input-group">
                                    <div className="input-group-btn search-panel">

                                        <select className="btn btn-dark dropdown-toggle  "   type="button" id="Filter"
                                                data-bs-toggle="dropdown">
                                            <option value="All">All</option>
                                            <option value="Today">Today</option>
                                            <option value="This Week">This Week</option>
                                            <option value="This Month">This Month</option>
                                        </select>
                                    </div>
                                    <input type="hidden" name="search_param" value="all" id="search_param"></input>
                                    <input type="text" className="form-control" name="x"
                                           placeholder="Search term..."></input>
                                    <span className="input-group-btn">
                    <button className="btn btn-default" type="button"><span
                        className="glyphicon glyphicon-search"></span></button>
                </span>
                                </div>
                            </div>
                        </div>






                        <div className="card-body pb-5">
                            <div className="table-responsive ">
                                <table className="table table-dark table-striped align-middle">

                                    <thead className="align-middle">

                                    {/*<thead>*/}

                                    <tr>
                                        <th scope="col">Reviewer</th>
                                        <th scope="col">Event code</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col">Details</th>


                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="col">Thinesh</th>
                                        <th scope="col">E101</th>
                                        <th scope="col">5</th>
                                        <th scope="col">

                                            <Button variant="light" onClick={handleShow}>
                                                Details
                                            </Button>

                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Review</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>It is a wonderfull studio system!</Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="dark" onClick={handleClose}>
                                                        Delete Review
                                                    </Button>
                                                    <Button variant="dark" onClick={handleClose}>
                                                        close
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </th>



                                    </tr>
                                    <tr>
                                        <th scope="col">Thinesh</th>
                                        <th scope="col">E101</th>
                                        <th scope="col">5</th>
                                        <th scope="col">

                                            <Button variant="light" onClick={handleShow}>
                                                Details
                                            </Button>

                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Review</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>It is a wonderfull studio system!</Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="dark" onClick={handleClose}>
                                                        Delete Review
                                                    </Button>
                                                    <Button variant="dark" onClick={handleClose}>
                                                        close
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </th>


                                    </tr>
                                    <tr>
                                        <th scope="col">Thinesh</th>
                                        <th scope="col">E101</th>
                                        <th scope="col">5</th>
                                        <th scope="col">

                                            <Button variant="light" onClick={handleShow}>
                                                Details
                                            </Button>

                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Review</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>It is a wonderfull studio system!</Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="dark" onClick={handleClose}>
                                                        Delete Review
                                                    </Button>
                                                    <Button variant="dark" onClick={handleClose}>
                                                        close
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </th>


                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div> {/*end table*/}


                    </div>
                </div>

            </div>

        </div>



    )

}

export default ManagerViewAllReviews