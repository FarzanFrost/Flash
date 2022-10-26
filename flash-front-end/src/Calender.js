import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import {useEffect, useState} from "react";
import axios from "axios";
import * as events from "events";
import Button from "react-bootstrap/Button";
import isBtcAddress from "validator/es/lib/isBtcAddress";



const Calender = () => {


    const calenderdetails=[]

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

    { eventDetails!== null &&
    eventDetails.map(
        (events)=>{
            const calenderview={
                "title":events.category,
                "date":events.eventDate,
                "address":events.address


            }
            calenderdetails.push(calenderview)
        }

    )
    }

console.log(calenderdetails)
        return (
<div>


    <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        weekends={true}
        eventClick={
            function(arg){
                alert(arg.event.title)
                alert(arg.event.start)
            }
        }
     events={calenderdetails}


/>








</div>





    )

}

export default Calender