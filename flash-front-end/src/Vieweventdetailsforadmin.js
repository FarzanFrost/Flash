import React, {useContext, useEffect} from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import {ModalHeader} from "react-bootstrap";
// import {AuthenticationContext} from "./ContextFiles/Authentication/AuthenticationContextProvider";




const Vieweventdetailsforadmin = () => {

    // const { changeContentVisible } = useContext( AuthenticationContext )

    const serverLink = 'http://localhost:8080';

    const [show, setShow] = useState(false);

    const [ adminEvent , setadminEvent ] = useState( null )

    // let eventCount  = 1

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        // const style3 = {
        //
        //     backgroundColor:'black',
        //     color:'white'
        // };

    useEffect( () => {

        axios.get( serverLink + '/AdminViewEvents' ).then(

            ( response ) => {

                setadminEvent( response.data )
                console.log( response.data )

            }

        ).catch(

            () => { alert( "Error!!! Admin display event details ") }

        )

    } ,[])

    const deleteEvent = ( id ) => {
        console.log( id )
        axios.post( serverLink + '/AdminDeleteEvent' , id ).then(
            ( response ) => {
                if ( response.data === "done" ){
                    setShow(false);
                }
            }
        ).catch(
            () => { alert( "Error!!! delete event") }
        )
    }

        return (
            <div className="h-100">

                <div className='container'>

                    <div className="pt-4" >

                        <div className="card border-dark border-0 rounded-5 shadow mt-3 mx-5 " style={{backgroundColor: '#d7d7d7'}}>

                            <h2 className="text-center mt-3" >Event Details</h2>

                            <div className="row">
                                <div className="col-xs-8 col-xs-offset-2">
                                    <div className="input-group ">
                                        <div className="input-group-btn search-panel">

                                            <select className="btn btn-dark dropdown-toggle  "   type="button" id="Filter"
                                                    data-bs-toggle="dropdown">
                                                <option value="All">All</option>
                                                <option value="Wedding">Event Id</option>
                                                <option value="EventId">Event</option>
                                                <option value="Date">Date</option>
                                                <option value="BookingDate">Booking Date</option>
                                                <option value="status">status</option>


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
                                            <th scope="col">Event Id</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Event Date</th>
                                            <th scope="col">Event ID</th>
                                            {/*<th scope="col">CustomerID</th>*/}
                                            <th scope="col">Address</th>
                                            <th scope="col-2">Category</th>
                                            <th scope="col-2">More</th>

                                        </tr>
                                        </thead>
                                        <tbody>

                                        { adminEvent !== null &&

                                            adminEvent.map(

                                                ( event ) => (

                                        <tr>
                                            <th scope="col">{event.eventID}</th>
                                            <th scope="col">{event.status}</th>
                                            <th scope="col">{event.eventDate}</th>
                                            <th scope="col">{event.eventID}</th>
                                            <th scope="col">{event.CustomerId}</th>
                                            <th scope="col">{event.address}</th>
                                            {/*<th scope="col">{event}</th>*/}

                                            <th scope="col">
                                                <Button variant="light" onClick={handleShow}>
                                                    Details
                                                </Button>

                                                <Modal show={show} onHide={handleClose}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Event full Details</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body><Modal.Title>Start Time:</Modal.Title>{event.startTime}</Modal.Body>
                                                    <Modal.Body><Modal.Title>End Time:</Modal.Title>{event.endTime}</Modal.Body>
                                                    <Modal.Body><Modal.Title>Longitude:</Modal.Title>{event.longitude}</Modal.Body>
                                                    <Modal.Body><Modal.Title>Latitude:</Modal.Title>{event.latitude}</Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="dark" onClick={() => deleteEvent( event.eventID ) }>
                                                            Delete Review
                                                        </Button>
                                                        <Button variant="dark" onClick={handleClose}>
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

export default Vieweventdetailsforadmin



// const Vieweventdetailsforadmin = () => {
//
//     const style1 = {
//
//
//         height:'850px'
//     };
//
//     const style2 = {
//
//         width: '150px',
//         height: '550px',
//         backgroundColor: 'black',
//     };
//
//     const style3 = {
//
//         backgroundColor:'black',
//         color:'white'
//     };
//
//     return (
//
// <div style={{...style1}}>
//
//     <div className=" row">
//         <h2 className="text-center mt-3 pb-3">Events</h2>
//         <div className="col-md-6">
//             <div className="position-relative mx-5 m-2 border-dark border-4" style={{ width: '48rem',left:'16rem'}}>
//                 <input type="text" className="form-control border-3 border-dark" id="formGroupExampleInput" placeholder="Example input"></input>
//             </div>
//        </div>
//
//         <div className="col-md-6" >
//
//             <div className="dropdown position-relative mx-5 m-2" style={{ left:'16rem'}}>
//
//                 <select class="btn btn-dark dropdown-toggle" type="button" id="Filter"
//                         data-bs-toggle="dropdown">
//                     <option value="All">All</option>
//                     <option value="eventname">Event Name</option>
//                     <option value="Date">Date</option>
//
//                 </select>
//             </div>
//
//         </div>
//
//     </div>
//
//     <section className="pt-5 pb-5">
//         <div className=" container">
//             <div className="row">
//                 {/*<div className="col-6">*/}
//                 {/*    <h3 className="mb-2" >Event details </h3>*/}
//                 {/*</div>*/}
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
//                         data-bs-slide="next" style={{ height:'50rem'}}>
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//
//
//                 <div className="col-12">
//                     <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
//
//                         <div className="carousel-inner">
//                             <div className="carousel-item active">
//                                 <div className="row">
//
//                                     <div className="col-md-4 mb-3">
//                                         <div className="card border-dark border-5 rounded-3" >
//                                             <img className="img-fluid" alt="100%x280"
//                                                  src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d">
//                                             </img>       <div className="card-body">
//                                             <div className="card-body">
//
//                                                 <p className="card-text">
//                                                     <h5>Event Name:Birthday</h5>
//                                                     <h5>Event Date</h5>
//                                                 </p>
//                                                 <a href="#" className="btn" style={{...style3}} >View Review</a><br/><br/>
//                                                 <a href="#" className="btn" style={{...style3}}>Edit details</a>
//                                             </div>
//
//                                             {/*<div className="card-footer bg-dark text-center">*/}
//                                             {/*    <small className="text-muted">Last updated 3 mins ago</small>*/}
//                                             {/*</div>*/}
//
//                                                 </div>
//
//                                         </div>
//                                     </div>
//                                     <div className="col-md-4 mb-3">
//                                         <div className="card border-dark border-5 rounded-3">
//                                             <img className="img-fluid" alt="100%x280"
//                                                  src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698">
//                                             </img>  <div className="card-body">
//                                             <div className="card-body">
//
//                                                 <p className="card-text">
//                                                     <h5>Event Name:birthday</h5>
//                                                     <h5>Event Date</h5>
//                                                 </p>
//                                                 <a href="#" className="btn" style={{...style3}} >View Review</a><br/><br/>
//                                                 <a href="#" className="btn" style={{...style3}}>Edit details</a>
//                                             </div>
//
//                                             {/*<div className="card-footer bg-dark text-center">*/}
//                                             {/*    <small className="text-muted">Last updated 3 mins ago</small>*/}
//                                             {/*</div>*/}
//
//                                                 </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-md-4 mb-3">
//                                         <div className="card border-dark border-5 rounded-3">
//                                             <img className="img-fluid" alt="100%x280"
//                                                  src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698">
//                                             </img>  <div className="card-body">
//                                             <div className="card-body">
//
//                                                 <p className="card-text">
//                                                     <h5>Event Name:Wedding</h5>
//                                                     <h5>Event Date</h5>
//                                                 </p>
//                                                 <a href="#" className="btn" style={{...style3}} >View Review</a><br/><br/>
//                                                 <a href="#" className="btn" style={{...style3}}>Edit details</a>
//                                             </div>
//
//                                             {/*<div className="card-footer bg-dark text-center">*/}
//                                             {/*    <small className="text-muted">Last updated 3 mins ago</small>*/}
//                                             {/*</div>*/}
//
//                                         </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//
//
//                             <div className="carousel-item">
//                             <div className="col-md-4 mb-3">
//                                         <div className="card border-dark border-5 rounded-3">
//                                             <img className="img-fluid" alt="100%x280"
//                                                  src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d">
//                                             </img>  <div className="card-body">
//                                             <div className="card-body">
//
//                                                 <p className="card-text">
//                                                     <h5>Event Name:Wedding</h5>
//                                                     <h5>Event Date</h5>
//                                                 </p>
//                                                 <a href="#" className="btn" style={{...style3}} >View Review</a><br/><br/>
//                                                 <a href="#" className="btn" style={{...style3}}>Edit details</a>
//                                             </div>
//
//                                             {/*<div className="card-footer bg-dark text-center">*/}
//                                             {/*    <small className="text-muted">Last updated 3 mins ago</small>*/}
//                                             {/*</div>*/}
//
//                                         </div>
//                                         </div>
//                                     </div>
//
//                             </div>
//
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//
// </div>
//
//     )
//
// }
//
// export default Vieweventdetailsforadmin