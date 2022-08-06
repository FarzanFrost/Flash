import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import {EventReviewsCustomerContext} from "./ContextFiles/EventReviewsCustomerContext";

const EventReviewsCustomer = () => {

    const { reviews } = useContext( EventReviewsCustomerContext )

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

                        { reviews.length === 0 && <div> No Event Reviews Available </div> }
                        { reviews.length > 0 &&

                            reviews.map( ( review ) => (

                                <div className="col-md-4 my-3 shadow-lg p-4">

                                    <h2 className="h2"> { review.eventType } </h2>
                                    <p className="px-xl-3">
                                        <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
                                        tenetur.
                                    </p>
                                    <ul className="list-unstyled d-flex justify-content-center mb-0">

                                        <li>
                                            <i className={ ( 0 < review.rating ) ? fillStar:star }></i>
                                        </li>
                                        <li>
                                            <i className={ ( 1 < review.rating ) ? fillStar:star }></i>
                                        </li>
                                        <li>
                                            <i className={ ( 2 < review.rating ) ? fillStar:star }></i>
                                        </li>
                                        <li>
                                            <i className={ ( 3 < review.rating ) ? fillStar:star }></i>
                                        </li>
                                        <li>
                                            <i className={ ( 4 < review.rating ) ? fillStar:star }></i>
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