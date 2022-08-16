import  React from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import loginPhoto from "./Images/backgroudphoto.jpg";


const AdminViewEmployeeDetailspage = () => {


    return (
            <div className='container mt-4 '>
                <div className='bg-image'   >
                        <img className="h-auto w-100" src={ loginPhoto } alt="Camera"/>

                    <div  style={ { position : "absolute" , top : 0 } }>


                        <div className=" row ">
                            <div className="col-md-6 mt-5">
                                <div className="position-relative mx-5 m-2 " style={{ width: '40rem',left:'16rem'}}>
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


                        <div className="card bg-light border-dark border-4 mt-5 mx-5" style={{width: '75rem',height:'40rem'}}>
                            <div className="card-body ">
                                <div className="table-responsive ">
                                    <table className="table table-dark table-striped align-middle"
                                    >
                                        <thead>
                                        <tr>
                                            <th scope="col">NO</th>
                                            <th scope="col">Firstname</th>
                                            <th scope="col">Lastname</th>
                                            <th scope="col">NIC</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Contact No</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Salary</th>
                                            <th scope="col">Emails</th>


                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="col">NO</th>
                                            <th scope="col">Firstname</th>
                                            <th scope="col">Lastname</th>
                                            <th scope="col">NIC</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Contact No</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Salary</th>
                                            <th scope="col">Emails</th>

                                        </tr>
                                        <tr>
                                            <th scope="col">NO</th>
                                            <th scope="col">Firstname</th>
                                            <th scope="col">Lastname</th>
                                            <th scope="col">NIC</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Contact No</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Salary</th>
                                            <th scope="col">Emails</th>

                                        </tr>
                                        <tr>
                                            <th scope="col">NO</th>
                                            <th scope="col">Firstname</th>
                                            <th scope="col">Lastname</th>
                                            <th scope="col">NIC</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Contact No</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Salary</th>
                                            <th scope="col">Emails</th>


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

export default AdminViewEmployeeDetailspage