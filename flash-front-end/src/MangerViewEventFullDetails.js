import  React from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import loginPhoto from "./Images/backgroudphoto.jpg";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ManagerViewEventFullDetails = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const style3 = {

        backgroundColor:'black',
        color:'white'
    };
    return (
        <div className='container mt-4 '>
            <div className='bg-image'   >
                <img className="mh-100 w-100" src={ loginPhoto } alt="Camera"/>

                <div  style={ { position : "absolute" , top : 0 } }>

                    <div className='container mt-5 align-items-center'>
                    <div className="row mx-4 my-xxl-5">
                        <div className="col-sm-6 ">
                            <div className="card border-dark border-5 rounded-3"  style={{width: '30rem', height:'20rem'}}>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Event details</h5>
                                    <p className="card-text">
                                        <h4>Event Name:Birthday</h4>
                                        <h4>Event Date</h4>
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card border-dark border-5 rounded-3"  style={{width: '40rem', height:'20rem'}}>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Assign Employee Details</h5>

                                    <p className="card-text">
                                        <h4>Employee 1</h4>
                                        <h4>Employee 2</h4>
                                        <h4>Employee 3</h4>
                                    </p>
                                    <Button className="align-items-end"  variant="dark " onClick={handleShow}>
                                        Delete
                                    </Button>
`
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Delete</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Do you want to delete this event details</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="dark" onClick={handleClose}>
                                             Delete
                                            </Button>
                                            <Button variant="dark" onClick={handleClose}>
                                                Cancel
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>



                                </div>
                            </div>
                        </div>
                    </div>

                    </div>


                            </div>

                        </div>

        </div>



    )

}

export default ManagerViewEventFullDetails