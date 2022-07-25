import  React from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import loginPhoto from "./Images/backgroudphoto.jpg";
// import { Box } from "@material-ui/core";




const Adminviewemployeedetailspage = () => {

    const style1 = {

        // backgroundColor: '#FFFFFF',
        height:'850px'
    };

    const style2 = {

        width: '150px',
        height: '550px',
        backgroundColor: '#767676',
    };

    const style3 = {

        backgroundColor:'#4B2000',
        color:'white'
    };


    const style4= {
         border: '5px  black ',
        radius:'10px',
        padding: '15px',
        background: 'white',



    }



    return (

        <div className='bg-image bg-purple bg-blend-overlay' style={{...style1 }} >
            <img className="bg-im" src={ loginPhoto } alt="Camera"/>
            <div className=" row">
                <div className="col-md-6">
                    <div className="position-relative mx-5 m-2" style={{ width: '48rem',left:'16rem'}}>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"></input>
                    </div>
                </div>



                <div className="col-md-6" >

                    <div className="dropdown position-relative mx-5 m-2" style={{ left:'16rem'}}>

                        <select class="btn btn-secondary dropdown-toggle" type="button" id="Filter"
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
                            <option value="Profile_Pic">Profile_Pic</option>

                        </select>
                    </div>

                </div>

            </div>

            <div >
            <div >
                <div className='card bg-light text-dark' >
                <div className="table-responsive ">
                <table class="table table-dark table-striped align-middle" style={{width:'50px',marginLeft:'auto',marginRight:'auto'}}>
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
                        <th scope="col">Profile_Pic</th>
                        <th scope="col"></th>


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
                        <th scope="col">Profile_Pic</th>
                        <div>  <button type="button" className="btn btn-secondary">Edit</button>
                            <button type="button" className="btn btn-primary">Delete</button></div>
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
                        <th scope="col">Profile_Pic</th>
                        <div>  <button type="button" className="btn btn-secondary">Edit</button>
                            <button type="button" className="btn btn-primary">Delete</button></div>
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
                        <th scope="col">Profile_Pic</th>
                        <div>  <button type="button" className="btn btn-secondary">Edit</button>
                         <button type="button" className="btn btn-primary" style={{left:'26rem'}}>Delete</button></div>
                    </tr>
                    </tbody>
                </table>
                </div>
                </div>
            </div>
            </div>

        </div>

    )

}

export default Adminviewemployeedetailspage