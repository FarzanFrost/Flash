import  React from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import loginPhoto from "./Images/backgroudphoto.jpg";
import {useEffect, useState} from "react";
import axios from "axios";




const EmployeeWorkView = () => {



    const serverLink = 'http://localhost:8080'
    const [show, setShow] = useState(false);

    const [ eventDetails , setEventDetails ] = useState( null )


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect( () => {

        axios.get( serverLink + '/events' ).then(

            ( response ) => {

                setEventDetails( response.data )
                console.log( response.data )

            }

        ).catch(

            () => { alert( "Error!!! employee details ") }

        )

    } ,[])

    return (
        <div className="h-100">

            <div className='container'>

                    <div className="pt-4" >

                        <div className="card border-dark border-0 rounded-5 shadow mt-3 mx-5 " style={{backgroundColor: '#d7d7d7'}}>
                            <h2 className="text-center mt-3" >Pending Works</h2>

                            <div className="card-body pb-5">
                                <div className="table-responsive ">
                                    <table className="table table-dark table-striped align-middle">

                                        <thead className="align-middle">

                                        {/*<thead>*/}

                                        <tr>
                                            <th scope="col">Event Id</th>
                                            <th scope="col">Event</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Start Time</th>
                                            <th scope="col">End Time</th>
                                            <th scope="col">Address</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        { eventDetails!== null &&
                                            eventDetails.map(
                                                (events)=>(

                                                    <tr>
                                                        <th scope="col">{events.EventID}</th>
                                                        <th scope="col">{events.packageID}</th>
                                                        <th scope="col">{events.EventDate}</th>
                                                        <th scope="col">{events.StartTime}</th>
                                                        <th scope="col">{events.EndTime}</th>
                                                        <th scope="col">{events.Address}</th>
                                                    </tr>
                                                )
                                            )
                                        }
                                        </tbody>
                                    </table>
                                </div>

                            </div> {/*end table*/}

                            <h2 className="text-center" >Previous Works</h2>

                            <div className="card-body">
                                <div className="table-responsive ">
                                    <table className="table table-dark table-striped align-middle">

                                        <thead className="align-middle">

                                        {/*<thead>*/}

                                        <tr>
                                            <th scope="col">Event Id</th>
                                            <th scope="col">Event</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Start Time</th>
                                            <th scope="col">End Time</th>
                                            <th scope="col">Address</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="col">01</th>
                                            <th scope="col">Get together</th>
                                            <th scope="col">08/28/2022</th>
                                            <th scope="col">09.00 AM</th>
                                            <th scope="col">05.00 PM</th>
                                            <th scope="col">12, College Road, Trincomalee</th>


                                        </tr>
                                        <tr>
                                            <th scope="col">01</th>
                                            <th scope="col">Get together</th>
                                            <th scope="col">08/28/2022</th>
                                            <th scope="col">09.00 AM</th>
                                            <th scope="col">05.00 PM</th>
                                            <th scope="col">12, Peris Road, Trincomalee</th>

                                        </tr>
                                        <tr>
                                            <th scope="col">01</th>
                                            <th scope="col">Get together</th>
                                            <th scope="col">08/28/2022</th>
                                            <th scope="col">09.00 AM</th>
                                            <th scope="col">05.00 PM</th>
                                            <th scope="col">12, Peris Road, Trincomalee</th>

                                        </tr>

                                        <tr>
                                            <th scope="col">01</th>
                                            <th scope="col">Get together</th>
                                            <th scope="col">08/28/2022</th>
                                            <th scope="col">09.00 AM</th>
                                            <th scope="col">05.00 PM</th>
                                            <th scope="col">12, Peris Road, Trincomalee</th>

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

export default EmployeeWorkView