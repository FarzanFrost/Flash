import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import {useEffect, useState} from "react";
import axios from "axios";
import * as events from "events";
import Button from "react-bootstrap/Button";
import isBtcAddress from "validator/es/lib/isBtcAddress";
import Swal from 'sweetalert2'



const Calender = () => {


    const calenderdetails=[]

    const ideventdetailsarray=[]

    const serverLink = 'http://localhost:8080'
    const [show, setShow] = useState(false);

    const [ eventDetails , setEventDetails ] = useState( null )

    const [ideventdetails,setideventdetails]=useState(null)

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
                "title":events.category+"-"+events.eventID,
                "date":events.eventDate,
                "address":events.address


            }
            calenderdetails.push(calenderview)
        }

    )
    }




    useEffect( () => {



    } ,[])

    { ideventdetails!== null &&
    ideventdetails.map(
        (idevents)=>{

            const ideventsdetails={
                "eventID":idevents.eventID,
                "category":idevents.category,
                "address":idevents.address,
                "advanceAmount":idevents.advanceAmount,
                "extraPage":idevents.extraPage

            }

            ideventdetailsarray.push(ideventsdetails)
        }

    )
    }



console.log(calenderdetails)

    const displayEventDetails = ( eventID ) => {

        // alert( eventID.split("-")[1] )

        axios.get( serverLink + '/getImagesByEventId/' + eventID.split("-")[1] ).then(

            ( response ) => {

                console.log( "calender " , response.data)
                const x = response.data

                Swal.fire({
                    title: '<strong>Event Details... <u></u></strong>',
                    icon: 'info',
                    html:
                        ' <tr>EventID=>'+x.eventID+'</tr><br/>' +
                        '<tr>Address=>'+x.address+'</tr><br/>'+
                        '<tr>advanceAmount=>'+x.advanceAmount+'</tr></br>'+
                        '<tr>category=>'+x.category+'</tr></br>'+
                        '<tr>extraPage=>'+x.extraPage+'</tr></br>',

                    showCloseButton: true,
                    showCancelButton: false,
                    focusConfirm: false,
                    // confirmButtonText:
                    //     '<i class="fa fa-thumbs-up"></i> Great!',
                    // confirmButtonAriaLabel: 'Thumbs up, great!',
                    // cancelButtonText:
                    //     '<i class="fa fa-thumbs-down"></i>',
                    // cancelButtonAriaLabel: 'Thumbs down'
                })

            }

        ).catch(

            () => { alert( "Error!!! eventidgetdetailserror ") }

        )



    }
        return (
<div>


    <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        weekends={true}
        eventClick={
            function(arg){
                displayEventDetails(arg.event.title)
                // console.log("mudilla "+ ideventdetailsarray)

                // displayEventDetails(arg.event.start)
            }
        }
     events={calenderdetails}


/>








</div>





    )

}

export default Calender