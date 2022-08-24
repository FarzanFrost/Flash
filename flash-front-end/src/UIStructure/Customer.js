import React, {useState} from 'react'
import SelectImageContextProviderInterface from "../SelectImageContextProviderInterface";
import Footer from "../Footer";
import FlashLogo from "../Images/FlashLogo.png";
import EventReviewsCustomerContextProviderInterface from "../EventReviewsCustomerContextProviderInterface";
import CardDetail from "../CardDetail";
import ChangeBooking from "../ChangeBooking";
import ChangePassword from "../ChangePassword";
import CustomerProfile from "../CustomerProfile";
import EventSelection from "../EventSelection";
import NewEventBooking from "../NewEventBooking";
import ResetPasswordContextProviderInterface from "../ResetPasswordContextProviderInterface";
import ViewEventsForCustomer from "../ViewEventsForCustomer";



const Customer = () => {

    const [ isSideNavVisible , setIsSideNavVisible ] = useState( true );

    const showHideSideNav = () => {

        if ( isSideNavVisible ){

            setIsSideNavVisible( false );

        }else{

            setIsSideNavVisible( true );

        }

    }

    const [ contentVisible , setContentVisible ] = useState( 0 )

    return(

        <div>

            {/*header begins*/}
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <button className="btn btn-dark px-3 ms-1" onClick={showHideSideNav}>
                            <i className="bi bi-list"></i>
                        </button>
                        <img src={FlashLogo} alt="logo" height="80px" width="80px"/>
                        <a className="nav-item nav-link active  m-3 pb-3 pe-5 ps-5" href="#" >Studio Flash <span className="sr-only"></span></a>
                        <a className="nav-item nav-link active  m-3 pb-2 pe-5 ps-5" href="#" >Home <span className="sr-only"></span></a>
                        <a className="nav-item nav-link  m-3 pb-2 pe-5 ps-5" href="#">Book Now</a>
                        <a className="nav-item nav-link  m-3 pb-2 pe-5 ps-5" href="#">Portfolio</a>
                        <a className="nav-item nav-link  m-3 pb-2 pe-5 ps-5 " href="#">About us</a>
                        <a className="nav-item nav-link  m-3 pb-2 pe-5 ps-5" href="#">Contact us</a>
                        <a className="nav-item nav-link  m-3 pb-2 pe-5 ps-5" href="#">Sign Out</a>


                    </div>
                </div>
            </div>
            {/*header ends*/}

            {/*side nav begins*/}
            <div className="row h-100 d-flex" >

                <div className={ isSideNavVisible ? "col-2" : "d-none" }>

                    <div className="h-100" >

                        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "257px",alignItems: "stretch", height: "755px"}}>
                            <a href="" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">

                                <i className="bi bi-camera bi me-2"></i>
                                <span className="fs-5">
                              Flash Studio
                           </span>


                            </a>

                            <hr />

                            <ul className="nav nav-pills flex-column mb-auto">

                                <li className="nav-item pb-2">
                                    <a href="" className="nav-link active text-white"  aria-current="page" onClick={ () => setContentVisible( 0 ) }>
                                        <i className="bi bi-grid bi me-2"></i>
                                        Events
                                    </a>
                                </li>

                                <li className="nav-item pb-2">
                                    <a href="" className="nav-link text-white" data-bs-toggle="pill" onClick={ () => setContentVisible( 1 ) }>
                                        <i className="bi bi-window-desktop bi me-2"></i>
                                        Book Here
                                    </a>
                                </li>

                                <li className="nav-item pb-2">
                                    <a href="" className="nav-link text-white" data-bs-toggle="pill" onClick={ () => setContentVisible( 2 ) }>
                                        <i className="bi bi-window-desktop bi me-2"></i>
                                        View Bookings
                                    </a>
                                </li>

                                <li className="nav-item pb-2">
                                    <a href="" className="nav-link text-white" data-bs-toggle="pill" onClick={ () => setContentVisible( 3 ) }>
                                        <i className="bi bi-chat-dots bi me-2"></i>
                                        Post Reviews
                                    </a>
                                </li>

                                <li className="nav-item pb-2">
                                    <a href="" className="nav-link text-white" data-bs-toggle="pill" onClick={ () => setContentVisible( 4 ) }>
                                        <i className="bi bi-person bi me-2"></i>
                                        Profile
                                    </a>
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>
                {/*side nav ends*/}

                <div className={ isSideNavVisible ? "col-10" : "col-12" }>

                    {/*<CardDetail/>no need*/}
                    {/*<ChangeBooking/>*/}{/*no need*/}
                    {/*<ResetPasswordContextProviderInterface/>*/}{/*no need*/}
                    { contentVisible === 4 && <CustomerProfile/>}{/*profile*/}
                    { contentVisible === 3 && <EventReviewsCustomerContextProviderInterface/>}{/*post reviews*/}
                    { contentVisible === 0 && <EventSelection/>}{/*events*/}
                    { contentVisible === 1 && <NewEventBooking/>}{/*book here*/}
                    {/*<SelectImageContextProviderInterface/>*/ }{/*no need*/}
                    { contentVisible === 2 && <ViewEventsForCustomer/>}{/*change event UI*/}{/*view books*/}
                    {/*<ViewPackagesBirthday/>*/}{/*no need*/}




                </div>

            </div>

            <Footer/>

        </div>

    )

}

export default Customer