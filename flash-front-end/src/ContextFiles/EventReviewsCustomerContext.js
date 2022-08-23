import react , { createContext } from "react";

export const EventReviewsCustomerContext = createContext( undefined )

const EventReviewsCustomerContextProvider = ( props ) => {

    const reviews = [

        {

            eventType : "Birthday", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
            rating : 5 , eventId : 1

        },

        {

            eventType : "Wedding", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
            rating : 4 , eventId : 1

        },

        {

            eventType : "Anniversary", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
            rating : 3 , eventId : 1

        },

        {

            eventType : "Batch Meet", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
            rating : 2 , eventId : 1

        },
        {

            eventType : "DJ party", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
            rating : 1 , eventId : 1

        },
        {

            eventType : "Get-Together", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
            rating : 0 , eventId : 1

        },{

            eventType : "Birthday", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
            rating : 5 , eventId : 1

        },

        {

            eventType : "Wedding", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
            rating : 4 , eventId : 1

        },

        {

            eventType : "Anniversary", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
            rating : 3 , eventId : 1

        },

        {

            eventType : "Batch Meet", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
            rating : 2 , eventId : 1

        },
        {

            eventType : "DJ party", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
            rating : 1 , eventId : 1

        },
        {

            eventType : "Get-Together", reviewContent : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
            rating : 0 , eventId : 1

        }

    ]

    return(

        <EventReviewsCustomerContext.Provider value={ { reviews } }>

            { props.children }

        </EventReviewsCustomerContext.Provider>

    )

}

export default EventReviewsCustomerContextProvider