import React from 'react'
import bgpic from './Images/photographer.jpg'
import {Form} from "react-bootstrap";

// const EmpEdit = () => {
//     const [firstName,setFirstName] = useState('')
//     const [lastName,setLastName] = useState('')
//     const [nic,setNic] = useState('')
//     const [gender,setGender] = useState('')
//     const [address,setAddress] = useState('')
//     const [contact,setContact] = useState('')
//     const [type,setType] = useState('')
//     const [salary,setSalary] = useState('')
//     const [email,setEmail] = useState('')
//     const [uname,setUname] = useState('')
//     const [password,setPassword] = useState('')
//
// }

const EditEmployee = () => {
    const msg = (a) => {
        alert(a);
    }
    return(
        <div className="h-100">

            <section className="h-100">

                <div className="container py-5 h-100">

                    <div className="row d-flex justify-content-center align-items-center h-100">

                        <div className="col-xl-10 my-5 py-2 my-lg-1 py-lg-1 my-xl-0 py-xl-0">

                            <div className="card rounded-3 text-black my-lg-1 my-xl-0 py-xl-0" style={ { backgroundColor : '#d7d7d7' } }>

                                <div className="row g-0">

                                    <div className="col-lg-5 d-lg-flex d-none">

                                        <div className="d-lg-flex d-none text-center">
                                            <img src={ bgpic } className="img-fluid rounded-3 h-100" alt="Camera"/>
                                        </div>

                                    </div>

                                    <div className="col-lg-7">

                                        <form className="container rounded mb-0 bg-opacity-25 p-lg-3 mt-0" >
                                            <h1 className="text-center mt-3 pb-2">Welcome Nitharsha's Profile</h1>

                                            <div className="d-flex align-items-center justify-content-end">
                                                <button type="submit" variant="primary"
                                                        className="btn btn-dark btn-block px-3" >
                                                    Change Password
                                                </button>

                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-3 col-form-label">First Name</label>
                                                <div className="col-sm-9">
                                                    <input
                                                        value="Nitharsha"
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Enter First Name"
                                                        // onChange={ (e) => setFirstName( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>

                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-3 col-form-label">Last Name</label>
                                                <div className="col-sm-9">
                                                    <input
                                                        value="Thevakumar"
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Enter Last Name"
                                                        // onChange={ (e) => setLastName( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                                {/*<div className="col-sm-1">*/}
                                                {/*    <i className="bi bi-pencil-fill"></i>*/}
                                                {/*</div>*/}

                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-3 col-form-label">NIC</label>
                                                <div className="col-sm-9">
                                                    <input
                                                        value="998064477V"
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Enter NIC"
                                                        // onChange={ (e) => setNic( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                                {/*<div className="col-sm-1">*/}
                                                {/*    <i className="bi bi-pencil-fill"></i>*/}
                                                {/*</div>*/}

                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-3 col-form-label">Gender</label>
                                                <div className="col-sm-9">
                                                    <Form.Check
                                                        inline
                                                        label="Male"
                                                        name="group1"
                                                        type="radio"
                                                    />

                                                    <Form.Check
                                                        inline
                                                        label="Female"
                                                        name="group2"
                                                        type="radio"
                                                        defaultChecked
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-3 col-form-label">Address</label>
                                                <div className="col-sm-9">
                                                    <input
                                                        value="11, Arunakiri Street, Trincomalee"
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Enter Address"
                                                        //onChange={ (e) => setName( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                                {/*<div className="col-sm-1">*/}
                                                {/*    <i className="bi bi-pencil-fill"></i>*/}
                                                {/*</div>*/}

                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-3 col-form-label">Contact No</label>
                                                <div className="col-sm-9">
                                                    <input
                                                        value="0775960087"
                                                        className="form-control"
                                                        type="tell"
                                                        placeholder="Enter Contact No"
                                                        //onChange={ (e) => setName( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                                {/*<div className="col-sm-1">*/}
                                                {/*    <i className="bi bi-pencil-fill"></i>*/}
                                                {/*</div>*/}

                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-3 col-form-label">Type</label>
                                                <div className="col-sm-9">
                                                    <select className="form-select">
                                                        <option>Photographer</option>
                                                        <option>Videographer</option>
                                                        <option>Editor</option>
                                                    </select>
                                                </div>
                                                {/*<div className="col-sm-1">*/}
                                                {/*    <i className="bi bi-pencil-fill"></i>*/}
                                                {/*</div>*/}

                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-3 col-form-label">Salary</label>
                                                <div className="col-sm-9">
                                                    <input
                                                        value="30,000"
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Enter Salary"
                                                        //onChange={ (e) => setName( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                                {/*<div className="col-sm-1">*/}
                                                {/*    <i className="bi bi-pencil-fill"></i>*/}
                                                {/*</div>*/}

                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-3 col-form-label">Email</label>
                                                <div className="col-sm-9">
                                                    <input
                                                        value="nithuucsc@gmail.com"
                                                        className="form-control"
                                                        type="email"
                                                        placeholder="Enter Email"
                                                        //onChange={ (e) => setName( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                                {/*<div className="col-sm-1">*/}
                                                {/*    <i className="bi bi-pencil-fill"></i>*/}
                                                {/*</div>*/}

                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-3 col-form-label">User Name</label>
                                                <div className="col-sm-9">
                                                    <input
                                                        value="nithuPhoto"
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Enter User Name"
                                                        //onChange={ (e) => setName( e.target.value )}
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                                {/*<div className="col-sm-1">*/}
                                                {/*    <i className="bi bi-pencil-fill"></i>*/}
                                                {/*</div>*/}

                                            </div>

                                            {/*<div className="form-group row mt-3 mx-3">*/}
                                            {/*    <label className="col-sm-3 col-form-label">Password</label>*/}
                                            {/*    <div className="col-sm-9">*/}
                                            {/*        */}
                                            {/*    </div>*/}
                                                {/*<div className="col-sm-1">*/}
                                                {/*    <i className="bi bi-pencil-fill"></i>*/}
                                                {/*</div>*/}

                                            {/*</div>*/}

                                            {/*<div className="form-group row mt-3 mx-3">*/}
                                            {/*    <label className="col-sm-3 col-form-label">Profile Pic</label>*/}
                                            {/*    <div className="col-sm-8">*/}
                                            {/*        <input*/}
                                            {/*            //value={last name}*/}
                                            {/*            className="form-control"*/}
                                            {/*            type="file"*/}
                                            {/*            placeholder="Upload"*/}
                                            {/*            //onChange={ (e) => setName( e.target.value )}*/}
                                            {/*            autoFocus*/}
                                            {/*            required*/}
                                            {/*        />*/}
                                            {/*    </div>*/}
                                            {/*    <div className="col-sm-1">*/}
                                            {/*        <i className="bi bi-pencil-fill"></i>*/}
                                            {/*    </div>*/}

                                            {/*</div>*/}

                                            <div>
                                                <div className="d-flex gap-xxl-5 mb-2 align-items-center justify-content-center pt-5 pb-4">
                                                    <button type="submit" variant="secondary"
                                                            className="btn btn-dark btn-block px-3" >
                                                        Save
                                                    </button>

                                                    <button type="submit" variant="secondary"
                                                            className="btn btn-danger btn-block" onClick={() => msg("Are you confirm to delete")}>
                                                        Delete
                                                    </button>
                                                </div>

                                            </div>

                                        </form>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    )
}

export default EditEmployee