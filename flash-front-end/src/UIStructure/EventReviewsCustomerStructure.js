import React from 'react'
import Header from "../Header";
import SideNavCustomer from "../SideNavCustomer";
import Footer from "../Footer";
import EventReviewsCustomerContextProviderInterface from "../EventReviewsCustomerContextProviderInterface";

const EventReviewsCustomerStructure = () => {


    return(

        <div>

            <Header/>

            <div className="row">

                <div className="col-2 h-100">

                    <SideNavCustomer/>

                </div>

                <div className="col-10">

                    <EventReviewsCustomerContextProviderInterface/>

                </div>

            </div>

            <Footer/>

        </div>

    )

}

export default EventReviewsCustomerStructure