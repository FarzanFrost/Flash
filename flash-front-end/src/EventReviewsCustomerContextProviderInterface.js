import React from 'react'
import EventReviewsCustomer from "./EventReviewsCustomer";
import EventReviewsCustomerContextProvider from "./ContextFiles/EventReviewsCustomerContext";

const EventReviewsCustomerContextProviderInterface = () => {

    return(

        <div>

            <EventReviewsCustomerContextProvider>

                <EventReviewsCustomer/>

            </EventReviewsCustomerContextProvider>

        </div>

    )

}

export default EventReviewsCustomerContextProviderInterface