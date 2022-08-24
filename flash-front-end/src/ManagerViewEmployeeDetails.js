import  React from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import loginPhoto from "./Images/backgroudphoto.jpg";
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";



const ManagerViewEmployeeDetails = () => {


    const style3 = {

        backgroundColor:'black',
        color:'white'
    };


                    <div className=" row ">
                        <div className="col-md-6 mt-5">
                            <div className="position-relative mx-5 m-2 h-100">
                                <input type="text" className="form-control border-3 border-dark" id="formGroupExampleInput" placeholder="Example input"></input>
                            </div>
                        </div>


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const NewEmployee = () => {


    }

    return (
        <div className="h-100">

            <div className='container'>

                <div className="pt-4" >

                    <div className="card border-dark border-0 rounded-5 shadow mt-3 mx-5 " style={{backgroundColor: '#d7d7d7'}}>

                        <h2 className="text-center mt-3" >Employee Details</h2>

                        <div className="row">
                            <div className="col-xs-8 col-xs-offset-2">
                                <div className="input-group">
                                    <div className="input-group-btn search-panel">

                                        <select className="btn btn-dark dropdown-toggle  "   type="button" id="Filter"
                                                data-bs-toggle="dropdown">
                                            <option value="All">All</option>
                                            <option value="Firstname">Firstname</option>
                                            <option value="Lastname">Lastname</option>
                                            <option value="NIC">NIC</option>
                                            <option value="Gender">Gender</option>
                                            <option value="Address">Address</option>
                                            <option value="Contact No">Contact No</option>
                                            <option value="Type">Type</option>
                                            <option value="Salary">Salary</option>
                                            <option value="Emails">Emails</option>

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
<div className="text-end">
    <a href="#" className="btn" style={{...style3}} >Add Employee</a><br/>

</div>
                        <br/>

                            <div className="table-responsive ">
                                <table className="table table-dark table-striped align-middle">

                                    <thead className="align-middle">

                                    {/*<thead>*/}

                                    <tr>
                                        <th scope="col">NO</th>
                                        <th scope="col">Firstname</th>
                                        <th scope="col">NIC</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Contact No</th>
                                        <th scope="col">Type</th>
                                        <th scope="col-2">More</th>


                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="col">01</th>
                                        <th scope="col">Nirmalan</th>
                                        <th scope="col">955978844V</th>
                                        <th scope="col">Male</th>
                                        <th scope="col">0774053110</th>
                                        <th scope="col">Photographer</th>
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
                                        <th scope="col">01</th>
                                        <th scope="col">Nirmalan</th>
                                        <th scope="col">955978844V</th>
                                        <th scope="col">Male</th>
                                        <th scope="col">0774053110</th>
                                        <th scope="col">Photographer</th>
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
                                        <th scope="col">01</th>
                                        <th scope="col">Nirmalan</th>
                                        <th scope="col">955978844V</th>
                                        <th scope="col">Male</th>
                                        <th scope="col">0774053110</th>
                                        <th scope="col">Photographer</th>
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

export default ManagerViewEmployeeDetails