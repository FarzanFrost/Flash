import React, {useContext, useState, useNavigationState} from 'react'
import Footer from "../Footer";
import FlashLogo from "../Images/FlashLogo.png";
import ManagerViewAllReviews from "../ManagerViewAllReviews";
import ManagerViewEmployeeDetails from "../ManagerViewEmployeeDetails";
import ManagerViewEventFullDetails from "../MangerViewEventFullDetails";
import ViewPackagesPurperty from "../ViewPackagesPurperty";
import ManagerDashboard from "../ManagerDashboard";
import {AuthenticationContext} from "../ContextFiles/Authentication/AuthenticationContextProvider";
import AddEmployee from "../AddEmployee";
import ManagerViewPackagesPurperty from "../ManagerViewPackagesPurperty";
import NewPackage from "../NewPackage";
import EditPackage from "../EditPackage";
import {useLocation} from "react-router-dom";


const Manager = () => {

    const location = useLocation()

    const [ isSideNavVisible , setIsSideNavVisible ] = useState( true );

    const showHideSideNav = () => {

        if ( isSideNavVisible ){

            setIsSideNavVisible( false );

        }else{

            setIsSideNavVisible( true );

        }

    }

    const { contentVisible , changeContentVisible , logout } = useContext( AuthenticationContext )

    console.log( "details : " , location.state.userDetailsAfterAuthentication )

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
                        <a className="nav-item nav-link  m-3 pb-2 pe-5 ps-5" href="#" onClick={ () => { location.state = null; logout() } }>Sign Out</a>


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
                                    <a href="" className="nav-link active text-white"  aria-current="page" onClick={ () => changeContentVisible( 0 ) }>
                                        <i className="bi bi-speedometer2 bi me-2"></i>
                                        Dashboard
                                    </a>
                                </li>

                                <li className="nav-item pb-2">
                                    <a href="" className="nav-link text-white" data-bs-toggle="pill" onClick={ () => changeContentVisible( 1 ) }>
                                        <i className="bi bi-bag bi me-2"></i>
                                        Packages
                                    </a>
                                </li>

                                {/*<li className="nav-item pb-2">*/}
                                {/*    <a href="" className="nav-link text-white" data-bs-toggle="pill" onClick={ () => changeContentVisible( 2 ) }>*/}
                                {/*        <i className="bi bi-file-earmark-bar-graph bi me-2"></i>*/}
                                {/*        Generate Reports*/}
                                {/*    </a>*/}
                                {/*</li>*/}

                                <li className="nav-item pb-2">
                                    <a href="" className="nav-link text-white" data-bs-toggle="pill" onClick={ () => changeContentVisible( 3 ) }>
                                        <i className="bi bi-eye bi me-2"></i>
                                        View Events
                                    </a>
                                </li>

                                {/*<li className="nav-item pb-2">*/}
                                {/*    <a href="" className="nav-link text-white" data-bs-toggle="pill" onClick={ () => changeContentVisible( 4 ) }>*/}
                                {/*        <i className="bi bi-chat-square-dots bi me-2"></i>*/}
                                {/*        Chat with Flash*/}
                                {/*    </a>*/}
                                {/*</li>*/}

                                <li className="nav-item pb-2">
                                    <a href="" className="nav-link text-white" data-bs-toggle="pill" onClick={ () => changeContentVisible( 5 ) }>
                                        <i className="bi bi-people-fill bi me-2"></i>
                                        Employee Details
                                    </a>
                                </li>

                                <li className="nav-item pb-2">
                                    <a href="" className="nav-link text-white" data-bs-toggle="pill" onClick={ () => changeContentVisible( 6 ) }>
                                        <i className="bi bi-window-stack bi me-2"></i>
                                        Reviews
                                    </a>
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>
                {/*side nav ends*/}

                <div className={ isSideNavVisible ? "col-10" : "col-12" }>

                    { contentVisible === 0 && <ManagerDashboard/>}{/*packages*/}
                    {/*<EditEmployee/>*/} {/*no need*/}
                    { contentVisible === 9 && <EditPackage/> }
                    { contentVisible === 6 && <ManagerViewAllReviews/>} {/*reviews*/}
                    { contentVisible === 5 && <ManagerViewEmployeeDetails/>}{/*employee details*/} {/*want to add some options in uis*/}
                    { contentVisible === 3 && <ManagerViewEventFullDetails/>} {/*events*/}
                    { contentVisible === 8 && <NewPackage/> }
                    { contentVisible === 1 && <ManagerViewPackagesPurperty/>}{/*packages*/}
                    { contentVisible === 7 && <AddEmployee/>}{/*packages*/}

                </div>

            </div>

            <Footer/>

        </div>


    )
}

export default Manager