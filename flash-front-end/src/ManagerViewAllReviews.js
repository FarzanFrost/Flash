import  React from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import loginPhoto from "./Images/backgroudphoto.jpg";


const ManagerViewAllReviews = () => {


    return (
        <div className='container mt-4 '>
            <div className='bg-image'   >
                <img className="h-auto w-100" src={ loginPhoto } alt="Camera"/>

                <div  style={ { position : "absolute" , top : 0 } }>
                    <div className="p-3  bg-dark text-light  ">
                       Reviews
                    </div>
                    <div className=" row ">



                        <div className="col-md-6 mt-5" >

                            <div className="dropdown position-relative mx-3 m-2" style={{ left:'70rem'}}>

                                <select class="btn btn-dark dropdown-toggle" type="button" id="Filter"
                                        data-bs-toggle="dropdown">
                                    <option value="Today">Today</option>
                                    <option value="This Week">This Week</option>
                                    <option value="This Month">This Month</option>

                                </select>
                            </div>

                        </div>

                    </div>


                    <div className="card bg-light border-dark border-4 mt-5 mx-5 " style={{width: '75rem',height:'36rem'}}>
                        <div className="card-body ">
                            <div className="table-responsive ">
                                <table className="table table-dark table-striped align-middle"
                                >
                                    <thead>
                                    <tr>
                                        <th scope="col">Reviewer</th>
                                        <th scope="col">Event code</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col">Details</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="col">Reviewer</th>
                                        <th scope="col">Event code</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col">
                                            <button type="button" className="btn btn-light">View Details</button>
                                        </th>

                                    </tr>
                                    <tr>
                                        <th scope="col">Reviewer</th>
                                        <th scope="col">Event code</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col">
                                            <button type="button" className="btn btn-light">View Details</button>
                                        </th>

                                    </tr>
                                    <tr>
                                        <th scope="col">Reviewer</th>
                                        <th scope="col">Event code</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col">
                                            <button type="button" className="btn btn-light">View Details</button>
                                        </th>


                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>



    )

}

export default ManagerViewAllReviews