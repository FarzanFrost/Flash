import  React from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import loginPhoto from "./Images/backgroudphoto.jpg";


const ManagerViewEmployeeDetails = () => {

    const NewEmployee = () => {

    }

    return (
        <div className='container mt-4 '>
            <div className='bg-image'   >
                <img className="h-auto w-100" src={ loginPhoto } alt="Camera"/>

                <div  style={ { position : "absolute" , top : 0 } }>


                    <div className=" row ">
                        <div className="col-md-6 mt-5">
                            <div className="position-relative mx-5 m-2 h-100">
                                <input type="text" className="form-control border-3 border-dark" id="formGroupExampleInput" placeholder="Example input"></input>
                            </div>
                        </div>


                        <div className="col-md-6 mt-5" >

                            <div className="dropdown position-relative mx-5 m-2" style={{ left:'16rem'}}>

                                <select class="btn btn-dark dropdown-toggle" type="button" id="Filter"
                                        data-bs-toggle="dropdown">
                                    <option value="All">All</option>
                                    <option value="Firstname">Firstname</option>
                                    <option value="Lastname">Lastname</option>
                                    <option value="NIC">NIC</option>
                                    <option value="Gender">Gender</option>
                                    <option value="Address">Address</option>
                                    <option value="Contact No">Contact No</option>
                                    <option value="Type">Type</option>
                                    <option value="Salary">Salary</option>
                                    <option value="Emails">Emails</option>

                                </select>
                            </div>

                        </div>

                    </div>

                    <div className="d-flex align-items-center justify-content-end px-xl-5 pt-3">
                        <button onClick={ NewEmployee }
                                className="btn btn-dark btn-block">
                            <i className="bi bi-plus"></i> Add Employee
                        </button>
                    </div>


                    <div className="card bg-light border-dark border-4 mt-3 mx-5" style={{width: '75rem',height:'40rem'}}>
                        <div className="card-body ">
                            <div className="table-responsive ">
                                <table className="table table-dark table-striped align-middle">

                                    <thead className="align-middle">

                                    {/*<thead>*/}

                                    <tr>
                                        <th scope="col">NO</th>
                                        <th scope="col">Firstname</th>
                                        <th scope="col">NIC</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Contact No</th>
                                        <th scope="col">Type</th>
                                        <th scope="col-2">More</th>


                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="col">01</th>
                                        <th scope="col">Nirmalan</th>
                                        <th scope="col">955978844V</th>
                                        <th scope="col">Male</th>
                                        <th scope="col">0774053110</th>
                                        <th scope="col">Photographer</th>
                                        <th scope="col"><button className="btn btn-outline-light btn-block">More</button></th>


                                    </tr>
                                    <tr>
                                        <th scope="col">01</th>
                                        <th scope="col">Nirmalan</th>
                                        <th scope="col">955978844V</th>
                                        <th scope="col">Male</th>
                                        <th scope="col">0774053110</th>
                                        <th scope="col">Photographer</th>
                                        <th scope="col"><button className="btn btn-outline-light btn-block">More</button></th>

                                    </tr>
                                    <tr>
                                        <th scope="col">01</th>
                                        <th scope="col">Nirmalan</th>
                                        <th scope="col">955978844V</th>
                                        <th scope="col">Male</th>
                                        <th scope="col">0774053110</th>
                                        <th scope="col">Photographer</th>
                                        <th scope="col"><button className="btn btn-outline-light btn-block">More</button></th>

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

export default ManagerViewEmployeeDetails