import React from 'react'
import {Link} from "react-router-dom";

const EventReviewsCustomer = () => {

    return(

        <div className="d-flex justify-content-center flex-column">

            <div className="p-2 display-4" style={ { backgroundColor : '#d7d7d7' } }>

                Event Reviews

            </div>

            <div className="p-4">

                <section>

                    <div className="row text-center">
                        <div className="col-md-4 mb-5 mb-md-0 shadow-lg p-4">

                            <h2 className="h2"> Birthday </h2>
                            <p className="px-xl-3">
                                <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
                                tenetur.
                            </p>
                            <ul className="list-unstyled d-flex justify-content-center mb-0">
                                <li>
                                    <i className="bi bi-star-fill text-warning"></i>
                                </li>
                                <li>
                                    <i className="bi bi-star-fill text-warning"></i>
                                </li>
                                <li>
                                    <i className="bi bi-star-fill text-warning"></i>
                                </li>
                                <li>
                                    <i className="bi bi-star-fill text-warning"></i>
                                </li>
                                <li>
                                    <i className="bi bi-star text-warning"></i>
                                </li>
                            </ul>

                            <div>

                                <Link to={ "/" }> Event Details </Link>

                            </div>

                        </div>
                    </div>
                </section>

            </div>

        </div>

    )

}

export default EventReviewsCustomer