import react , { createContext } from "react";

export const EventReviewsCustomerContext = createContext( undefined )

const EventReviewsCustomerContextProvider = ( props ) => {

    return(

        <EventReviewsCustomerContext.Provider value={ {} }>

            { props.children }

        </EventReviewsCustomerContext.Provider>

    )
    
}

export default EventReviewsCustomerContextProvider