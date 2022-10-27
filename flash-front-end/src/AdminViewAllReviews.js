import React, {useEffect} from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import {AuthenticationContext} from "./ContextFiles/Authentication/AuthenticationContextProvider";
import {useContext} from "react";

const AdminViewAllReviews = () => {

    const { changeContentVisible } = useContext( AuthenticationContext )

    const serverLink = 'http://localhost:8080';

    const [show, setShow] = useState(false);

    const [ adminReview , setadminReview ] = useState( null )

    // let reviewCount  = 1

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect( () => {

        axios.get( serverLink + '/AdminViewReviews' ).then(

            ( response ) => {

                setadminReview( response.data )
                console.log( response.data )

            }

        ).catch(

            () => { alert( "Error!!! Admin display Reviews ") }

        )

    } ,[])

    const deleteReview = ( reviewID ) => {
        console.log( reviewID )
        axios.post( serverLink + '/AdminDeleteReview' , {reviewID} ).then(
            ( response ) => {
                if ( response.data === "done" ){
                    setShow(false);
                }
            }
        ).catch(
            () => { alert( "Error!!! delete Review") }
        )
    }


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

                                        <select className="btn btn-dark dropdown-toggle"   type="button" id="Filter"
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

                            {/*<div className="text-end">*/}
                            {/*    <a href="#" className="btn" style={{...style3}} onClick={ () => changeContentVisible( 7 ) }>Add Employee</a><br/>*/}

                            {/*</div>*/}
                            {/*<br/>*/}

                            <div className="table-responsive ">
                                <table className="table table-dark table-striped align-middle">

                                    {/*<thead>*/}

                                    <thead className="align-middle">

                                    <tr>
                                        <th scope="col">Reviewer ID</th>
                                        <th scope="col">Date Time</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col">Comment</th>

                                    </tr>
                                    </thead>

                                    <tbody>

                                    { adminReview !== null &&

                                        adminReview.map(

                                            ( review ) => (

                                    <tr>
                                        <th scope="col">{ review.reviewsID }</th>
                                        <th scope="col">{ review.dateTime }</th>
                                        <th scope="col">{ review.rate}</th>
                                        <th scope="col">

                                            <Button variant="light" onClick={handleShow}>
                                                Details
                                            </Button>

                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Review</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>{ review.comment }</Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="dark" onClick={() => deleteReview( review.reviewsID ) }>
                                                        Delete Review
                                                    </Button>
                                                    <Button variant="dark" onClick={ () => changeContentVisible( 0 ) }>
                                                        close
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </th>


                                    </tr>

                                            )

                                        )

                                    }
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

export default AdminViewAllReviews