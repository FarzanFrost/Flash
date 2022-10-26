import react , { createContext, useEffect, useState } from "react";
import axios from "axios";

export const EventReviewsCustomerContext = createContext( undefined )

const serverLink = 'http://localhost:8080'

const EventReviewsCustomerContextProvider = ( props ) => {

    const [ reviews , setReviewDetails] = [] //[



        // {
        //
        //     eventType : "Birthday", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
        //     rating : 5 , eventId : 1
        //
        // },
        //
        // {
        //
        //     eventType : "Wedding", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
        //     rating : 4 , eventId : 1
        //
        // },
        //
        // {
        //
        //     eventType : "Anniversary", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
        //     rating : 3 , eventId : 1
        //
        // },
        //
        // {
        //
        //     eventType : "Batch Meet", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
        //     rating : 2 , eventId : 1
        //
        // },
        // {
        //
        //     eventType : "DJ party", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
        //     rating : 1 , eventId : 1
        //
        // },
        // {
        //
        //     eventType : "Get-Together", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
        //     rating : 0 , eventId : 1
        //
        // },{
        //
        //     eventType : "Birthday", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
        //     rating : 5 , eventId : 1
        //
        // },
        //
        // {
        //
        //     eventType : "Wedding", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
        //     rating : 4 , eventId : 1
        //
        // },
        //
        // {
        //
        //     eventType : "Anniversary", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
        //     rating : 3 , eventId : 1
        //
        // },
        //
        // {
        //
        //     eventType : "Batch Meet", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
        //     rating : 2 , eventId : 1
        //
        // },
        // {
        //
        //     eventType : "DJ party", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
        //     rating : 1 , eventId : 1
        //
        // },
        // {
        //
        //     eventType : "Get-Together", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
        //     rating : 0 , eventId : 1
        //
        // }

    // ]


    useEffect( () => {
            axios.get( serverLink + '/AllReviews').then(
                ( response ) => {

                    setReviewDetails( response.data )
                    console.log( response.data )

                }
            ).catch(
                () => {alert("Error!!! All Reviews")}
            )

        }, []

    )

    return(

        <EventReviewsCustomerContext.Provider value={ { reviews } }>

            { props.children }

        </EventReviewsCustomerContext.Provider>

    )

}

export default EventReviewsCustomerContextProvider