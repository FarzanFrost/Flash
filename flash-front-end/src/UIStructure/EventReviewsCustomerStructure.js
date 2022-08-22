import React from 'react'
import OldHeader from "../oldHeader";
import SideNavCustomer from "../SideNavCustomer";
import OldFooter from "../oldFooter";
import EventReviewsCustomerContextProviderInterface from "../EventReviewsCustomerContextProviderInterface";

const EventReviewsCustomerStructure = () => {


    return(

        <div>

            <OldHeader/>

            <div className="row">

                <div className="col-2 h-100">

                    <SideNavCustomer/>

                </div>

                <div className="col-10">

                    <EventReviewsCustomerContextProviderInterface/>

                </div>

            </div>

            <OldFooter/>

        </div>

    )

}

export default EventReviewsCustomerStructure