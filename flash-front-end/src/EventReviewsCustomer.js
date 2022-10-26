import React, {useContext, useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {EventReviewsCustomerContext} from "./ContextFiles/EventReviewsCustomerContext";
import {AuthenticationContext} from "./ContextFiles/Authentication/AuthenticationContextProvider";
import axios from "axios";

const EventReviewsCustomer = () => {
    const serverLink = 'http://localhost:8080'
    const { changeContentVisible } = useContext( AuthenticationContext )

    const [reviewDetails, setReviewDetails] = useState(null)

    //const { reviews } = useContext( EventReviewsCustomerContext )

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

    const deleteReview = ( reviewID ) => {
        console.log( reviewID )
        axios.post( serverLink + '/deleteReviews' , {reviewID} ).then(
            ( response ) => {
                if ( response.data === "done" ){
                    setShow(false);
                }
            }
        ).catch(
            () => { alert( "Error!!! delete Review") }
        )
    }
    const [show, setShow] = useState(false);
    const star = "bi bi-star text-warning"

    const fillStar = "bi bi-star-fill text-warning"

    return(

        <div className="d-flex justify-content-center flex-column">

            <div className="p-2 display-4" style={ { backgroundColor : '#d7d7d7' } }>

                Event Reviews

            </div>

            <div className="p-4">

                <section>

                    <div className="row text-center">

                        {/*{ reviews.length === 0 && <div> No Event Reviews Available </div> }*/}
                        { reviewDetails !== null &&

                            reviewDetails.map(

                                ( reviews ) => (

                                <div className="col-md-4 my-3 shadow-lg p-4">

                                    <div className="d-flex">

                                        <h2 className="h2 m-auto">ReviewsID : { reviews.reviewsID } </h2>

                                        <div className="dropdown m-auto me-0">
                                            <button className="btn bi-three-dots-vertical rounded-circle" type="button" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                            </button>
                                            <ul className="dropdown-menu">

                                                <li> <button className="dropdown-item"> Edit</button> </li>
                                                <li> <button className="dropdown-item" onClick={() => deleteReview( reviews.reviewsID ) }> Delete</button> </li>

                                            </ul>
                                        </div>

                                    </div>

                                    <p className="px-xl-3">
                                        <i className="fas fa-quote-left pe-2"></i>{reviews.comment}
                                    </p>
                                    <ul className="list-unstyled d-flex justify-content-center mb-0">

                                        <li>
                                            <i className={ ( 0 < reviews.rate ) ? fillStar:star }></i>
                                        </li>
                                        <li>
                                            <i className={ ( 1 < reviews.rate ) ? fillStar:star }></i>
                                        </li>
                                        <li>
                                            <i className={ ( 2 < reviews.rate ) ? fillStar:star }></i>
                                        </li>
                                        <li>
                                            <i className={ ( 3 < reviews.rate ) ? fillStar:star }></i>
                                        </li>
                                        <li>
                                            <i className={ ( 4 < reviews.rate ) ? fillStar:star }></i>
                                        </li>
                                    </ul>

                                    <div>

                                        <Link to={ "/" }> Event Details </Link>

                                    </div>

                                </div>

                            ) )

                        }

                    </div>
                </section>

            </div>

        </div>

    )

}

export default EventReviewsCustomer