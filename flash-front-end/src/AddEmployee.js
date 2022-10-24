import React, {useContext, useState} from 'react'
import bgpic from './Images/photographer.jpg'
import axios from "axios";
import {AuthenticationContext} from "./ContextFiles/Authentication/AuthenticationContextProvider";

const AddEmployee = () => {

    const serverLink = 'http://localhost:8080'

    const { changeContentVisible } = useContext( AuthenticationContext )

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [nic,setNic] = useState('')
    const [gender,setGender] = useState('')
    const [address,setAddress] = useState('')
    const [contactNo,setContactNo] = useState('')
    const [type,setType] = useState('Photographer')
    const [profilePic,setProfilePic] = useState('')
    const [email,setEmail] = useState('')
    const [uname,setUname] = useState('')
    const [password,setPassword] = useState('')

    const selectType = ( event ) => { setType( event.target.value ) }

    const addEmployee = () => {

        const data = {

            firstName,lastName,gender,type,profilePic,nic,contactNo,address,email,password

        }

        axios.post( serverLink + '/addEmployee' , data ).then(

            ( response ) => {

                if ( response.data === "done" ){

                    changeContentVisible( 5 )

                }

            }

        ).catch(

            () => { alert( "Error!!! add employee") }

        )

    }

    return(
        <div className="h-100">

            <section className="h-100">

                <div className="container py-5 h-100">

                    <div className="row d-flex justify-content-center align-items-center h-100">

                        <div className="col-xl-11 my-5 py-2 my-lg-1 py-lg-1 my-xl-0 py-xl-0">

                            <div className="card rounded-3 text-black my-lg-1 my-xl-0 py-xl-0" style={ { backgroundColor : '#d7d7d7' } }>

                                <div className="row g-0">

                                        <div className="col-lg-5 d-lg-flex d-none">

                                            <div className="d-lg-flex d-none ">
                                                <img src={ bgpic } className="img-fluid rounded-3 h-100" alt="Camera"/>
                                            </div>

                                        </div>

                                        <div className="col-lg-7 rounded-3" style={ { backgroundColor : '#d7d7d7' } }>

                                            <form className="container rounded-3 mb-0 bg-opacity-25 p-lg-3 mt-0" style={ { backgroundColor : '#d7d7d7' } }>
                                                <h1 className="text-center mt-3 pb-5">New Employee</h1>

                                                <div className="form-group row mt-3 mx-3">
                                                    <label className="col-sm-3 col-form-label">First Name</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            value={ firstName }
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter First Name"
                                                            onChange={ (e) => setFirstName( e.target.value )}
                                                            autoFocus
                                                            required
                                                        />
                                                    </div>

                                                </div>

                                                <div className="form-group row mt-3 mx-3">
                                                    <label className="col-sm-3 col-form-label">Last Name</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            value={lastName}
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter Last Name"
                                                            onChange={ (e) => setLastName( e.target.value )}
                                                            autoFocus
                                                            required
                                                        />
                                                    </div>

                                                </div>

                                                <div className="form-group row mt-3 mx-3">
                                                    <label className="col-sm-3 col-form-label">NIC</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            value={nic}
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter NIC"
                                                            onChange={ (e) => setNic( e.target.value )}
                                                            autoFocus
                                                            required
                                                        />
                                                    </div>

                                                </div>

                                                <div className="form-group row mt-3 mx-3">
                                                    <label className="col-sm-3 col-form-label">Gender</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            value={gender}
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter Gender"
                                                            onChange={ (e) => setGender( e.target.value )}
                                                            autoFocus
                                                            required
                                                        />
                                                    </div>

                                                </div>

                                                <div className="form-group row mt-3 mx-3">
                                                    <label className="col-sm-3 col-form-label">Address</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            value={address}
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter Address"
                                                            onChange={ (e) => setAddress( e.target.value )}
                                                            autoFocus
                                                            required
                                                        />
                                                    </div>

                                                </div>

                                                <div className="form-group row mt-3 mx-3">
                                                    <label className="col-sm-3 col-form-label">Contact No</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            value={contactNo}
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter Contact No"
                                                            onChange={ (e) => setContactNo( e.target.value )}
                                                            autoFocus
                                                            required
                                                        />
                                                    </div>

                                                </div>

                                                <div className="form-group row mt-3 mx-3">
                                                    <label className="col-sm-3 col-form-label">Type</label>
                                                    <div className="col-sm-8">
                                                        <select className="form-select" onChange={ selectType }>
                                                            <option>Photographer</option>
                                                            <option>Videographer</option>
                                                            <option>Editor</option>
                                                        </select>
                                                    </div>

                                                </div>

                                               {/* <div className="form-group row mt-3 mx-3">
                                                    <label className="col-sm-3 col-form-label">Salary</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            //value={last name}
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter Salary"
                                                            //onChange={ (e) => setName( e.target.value )}
                                                            autoFocus
                                                            required
                                                        />
                                                    </div>*/}

                                                {/*</div>*/}

                                                <div className="form-group row mt-3 mx-3">
                                                    <label className="col-sm-3 col-form-label">Email</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            value={email}
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter Email"
                                                            onChange={ (e) => setEmail( e.target.value )}
                                                            autoFocus
                                                            required
                                                        />
                                                    </div>

                                                </div>

                                                {/*<div className="form-group row mt-3 mx-3">
                                                    <label className="col-sm-3 col-form-label">User Name</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            //value={last name}
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Enter User Name"
                                                            //onChange={ (e) => setName( e.target.value )}
                                                            autoFocus
                                                            required
                                                        />
                                                    </div>

                                                </div>*/}

                                                <div className="form-group row mt-3 mx-3">
                                                    <label className="col-sm-3 col-form-label">Password</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            value={password}
                                                            className="form-control"
                                                            type="password"
                                                            placeholder="Enter password"
                                                            onChange={ (e) => setPassword( e.target.value )}
                                                            autoFocus
                                                            required
                                                        />
                                                    </div>

                                                </div>

                                                <div className="form-group row mt-3 mx-3">
                                                    <label className="col-sm-3 col-form-label">Profile Pic</label>
                                                    <div className="col-sm-8">
                                                        <input
                                                            //value={last name}
                                                            className="form-control"
                                                            type="file"
                                                            placeholder="Upload"
                                                            //onChange={ (e) => setName( e.target.value )}
                                                            autoFocus
                                                            // required
                                                        />
                                                    </div>

                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pt-5 pb-4">
                                                    <button type="button mx-3"
                                                            className="btn btn-dark btn-block" onClick={addEmployee}>
                                                        ADD
                                                    </button>

                                                    <button type="button mx-3"
                                                            className="btn btn-dark btn-block" onClick={ () => changeContentVisible( 5 )}>
                                                        close
                                                    </button>
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

export default AddEmployee