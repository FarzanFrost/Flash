import React from 'react'
import SelectImageContextProviderInterface from "../SelectImageContextProviderInterface";
import Header from "../Header";
import Footer from "../Footer";
import CustomerNav from "../CustomerNav";
import EventReviewsCustomer from "../EventReviewsCustomer";
import EventReviewsCustomerContextProviderInterface from "../EventReviewsCustomerContextProviderInterface";
import OldHeader from "../oldHeader";
import OldFooter from "../oldFooter";
import SideNavCustomer from "../SideNavCustomer";


const GalleryStructure = () => {

    return(

        <div>

            <OldHeader/>

            <div className="row h-100 d-flex" >

                <div className="col-2 h-100 flex-grow-1">

                    <div className="h-100" >

                        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "260px",alignItems: "stretch", height: "755px"}}>
                            <a href="" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">

                                <i className="bi bi-camera bi me-2"></i>
                                <span className="fs-5">
                              Flash Studio
                           </span>


                            </a>

                            <hr />

                            <ul className="nav nav-pills flex-column mb-auto">

                                <li className="nav-item pb-2">
                                    <a href="" className="nav-link active text-white"  aria-current="page">
                                        <i className="bi bi-grid bi me-2"></i>
                                        Events
                                    </a>
                                </li>

                                <li className="nav-item pb-2">
                                    <a href="" className="nav-link text-white" data-bs-toggle="pill">
                                        <i className="bi bi-window-desktop bi me-2"></i>
                                        Book Here
                                    </a>
                                </li>

                                <li className="nav-item pb-2">
                                    <a href="" className="nav-link text-white" data-bs-toggle="pill">
                                        <i className="bi bi-window-desktop bi me-2"></i>
                                        View Bookings
                                    </a>
                                </li>

                                <li className="nav-item pb-2">
                                    <a href="" className="nav-link text-white" data-bs-toggle="pill">
                                        <i className="bi bi-chat-dots bi me-2"></i>
                                        Post Reviews
                                    </a>
                                </li>

                                <li className="nav-item pb-2">
                                    <a href="" className="nav-link text-white" data-bs-toggle="pill">
                                        <i className="bi bi-person bi me-2"></i>
                                        Profile
                                    </a>
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

                <div className="col-10">

                    <SelectImageContextProviderInterface/>
                    {/*<EventReviewsCustomerContextProviderInterface id="reviewid"/>*/}

                </div>

            </div>

            <OldFooter/>

        </div>

    )

}

export default GalleryStructure