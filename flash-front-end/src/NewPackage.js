import React, {useContext, useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import pic from './Images/eventcollection.png';
import {AuthenticationContext} from "./ContextFiles/Authentication/AuthenticationContextProvider";
import axios from "axios";

const NewPackage = () => {

    const serverLink = 'http://localhost:8080'

    const { changeContentVisible } = useContext( AuthenticationContext )

    const [ name , setName ] = useState( '' )

    const [ frameLength , setFrameLength ] = useState( '' )

    const [ frameWidth , setFrameWidth ] = useState( '' )

    const [ videographer , setVideographer ] = useState( '' )

    const [ photographer , setPhotographer ] = useState( '' )

    const [ calender , setCalender ] = useState( '' )

    const [ pages , setPages ] = useState( '' )

    const [ extraPagePrice , setExtraPagePrice ] = useState( '' )

    const [ outShootType , setOutShootType ] = useState( '' )

    const [ signatureFrame , setSignatureFrame ] = useState( '' )

    const [ albumDesign , setAlbumDesign ] = useState( '' )

    const [ totalPayment , setTotalPayment ] = useState( '' )

    const [ eventType , setEventType ] = useState( 'Wedding' )

    const [ additional , setAdditional ] = useState( 'Wedding Only' )

    const addPackage = () => {

        const frame = frameLength + "x" + frameWidth

        const data = {

            frame,
            videographer,
            photographer,
            calender,
            name,
            pages,
            extraPagePrice,
            outShootType,
            signatureFrame,
            albumDesign,
            totalPayment,
            eventType,
            additional

        }

        axios.post( serverLink + '/addPackage' , data ).then(

            ( response ) => {

                if ( response.data === "done" ){

                    changeContentVisible( 1 )

                }

            }

        ).catch(

            () => { alert( "Error!!! add packages") }

        )

    }

    return (
        <div className="h-100">

            <section className="h-100">

                <div className="container py-5 h-100">

                    <div className="row d-flex justify-content-center align-items-center h-100">

                        <div className="col-xl-11 my-5 py-2 my-lg-1 py-lg-1 my-xl-0 py-xl-0">

                            <div className="card rounded-3 text-black my-lg-1 my-xl-0 py-xl-0" style={ { backgroundColor : '#d7d7d7' } }>

                              <div className="row g-0 ">

                                <div className="col-lg-5 d-lg-flex d-none ">

                                    <div className="d-lg-flex d-none text-center">
                                        <img src={ pic } className="img-fluid rounded-3 h-100" alt="Events"/>
                                    </div>

                                </div>

                                <div className="col-lg-7 rounded-3" >

                                    <form className="container rounded-3 mb-0 bg-opacity-25 p-lg-3 mt-0" >

                                        <h1 className="text-center mt-3 pb-5 fw-bold" style={{fontFamily: 'Eagle Lake' }}>New Package</h1>

                                        <div className="form-group row mt-3 mx-3">
                                            <label className="col-sm-4 col-form-label">Package Name</label>
                                            <div className="col-sm-8">
                                                <input
                                                    value={ name }
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Enter New Package Name"
                                                    onChange={ (e) => setName( e.target.value )}
                                                    autoFocus
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group row mt-3 mx-3">
                                            <label className="col-sm-4 col-form-label">Event Type</label>
                                            <div className="col-sm-8">
                                                <select className="form-select" onChange={ ( e ) => setEventType( e.target.value ) }>
                                                    <option>Wedding</option>
                                                    <option>Birthday</option>
                                                    <option>Puberty</option>
                                                    <option>Get together</option>
                                                    <option>House warming</option>
                                                    <option>Prize giving</option>
                                                </select>
                                            </div>
                                        </div>

                                        {

                                            eventType === 'Wedding' &&

                                            <div className="form-group row mt-3 mx-3">
                                                <label className="col-sm-4 col-form-label">Additional</label>
                                                <div className="col-sm-8">
                                                    <select className="form-select" onChange={ ( e ) => setAdditional( e.target.value ) }>
                                                        <option>Wedding Only</option>
                                                        <option>Reception Only</option>
                                                        <option>Registration Only</option>
                                                        <option>Wedding with Reception</option>
                                                        <option>Wedding with Registration</option>
                                                        <option>Registration with Reception</option>
                                                        <option>Wedding with both ceremony</option>
                                                    </select>
                                                </div>
                                            </div>

                                        }

                                        <div className="form-group row mt-3 mx-3">
                                            <label className="col-sm-4 col-form-label">No Of Pages</label>
                                            <div className="col-sm-8">
                                                <input
                                                    value={ pages }
                                                    className="form-control"
                                                    type="Number"
                                                    placeholder="Enter the Pages Count"
                                                    onChange={ (e) => setPages( e.target.value )}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group row mt-3 mx-3">
                                            <label className="col-sm-4 col-form-label">No Of Photographers</label>
                                            <div className="col-sm-8">
                                                <input
                                                    value={ photographer }
                                                    className="form-control"
                                                    type="Number"
                                                    placeholder="Enter the Photographer Count"
                                                    onChange={ (e) => setPhotographer( e.target.value )}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group row mt-3 mx-3">
                                            <label className="col-sm-4 col-form-label">No Of Videographer</label>
                                            <div className="col-sm-8">
                                                <input
                                                    value={ videographer }
                                                    className="form-control"
                                                    type="Number"
                                                    placeholder="Enter the Videographer Count"
                                                    onChange={ (e) => setVideographer( e.target.value )}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group row mt-3 mx-3">
                                            <label className="col-sm-4 col-form-label">Signature Frame</label>
                                            <div className="col-sm-8">
                                                <Form.Check
                                                    value={ true }
                                                    inline
                                                    label="Yes"
                                                    name="group1"
                                                    type="radio"
                                                    onChange={ ( e ) => setSignatureFrame( e.target.value ) }
                                                />

                                                <Form.Check
                                                    value={ false }
                                                    inline
                                                    label="No"
                                                    name="group1"
                                                    type="radio"
                                                    onChange={ ( e ) => setSignatureFrame( e.target.value ) }
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group row mt-3 mx-3">
                                            <label className="col-sm-4 col-form-label">Frame</label>
                                            <div className="col-sm-8 row">
                                                <div className="col-sm-5">
                                                    <input
                                                        value={ frameLength }
                                                        className="form-control"
                                                        type="Number"
                                                        placeholder="Length"
                                                        onChange={ (e) => setFrameLength( e.target.value )}
                                                        required
                                                    />
                                                </div>

                                                <div className="col-sm-2 text-center">
                                                    <span> x </span>
                                                </div>

                                                <div className="col-sm-5">
                                                    <input
                                                        value={ frameWidth }
                                                        className="form-control"
                                                        type="Number"
                                                        placeholder="Width"
                                                        onChange={ (e) => setFrameWidth( e.target.value )}
                                                        required
                                                    />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="form-group row mt-3 mx-3">
                                            <label className="col-sm-4 col-form-label">Calendar</label>
                                            <div className="col-sm-8">
                                                <Form.Check
                                                    value={ true }
                                                    inline
                                                    label="Yes"
                                                    name="group2"
                                                    type="radio"
                                                    onChange={ ( e ) => setCalender( e.target.value ) }
                                                />

                                                <Form.Check
                                                    value={ false }
                                                    inline
                                                    label="No"
                                                    name="group2"
                                                    type="radio"
                                                    onChange={ ( e ) => setCalender( e.target.value ) }
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group row mt-3 mx-3">
                                            <label className="col-sm-4 col-form-label">OutShoot</label>
                                            <div className="col-sm-8">
                                                <Form.Check
                                                    value="PreShoot"
                                                    inline
                                                    label="Pre Shoot"
                                                    name="group3"
                                                    type="radio"
                                                    onChange={ ( e ) => ( setOutShootType( e.target.value ) ) }
                                                />

                                                <Form.Check
                                                    value="PostShoot"
                                                    inline
                                                    label="Post Shoot"
                                                    name="group3"
                                                    type="radio"
                                                    onChange={ ( e ) => ( setOutShootType( e.target.value ) ) }
                                                />

                                                <Form.Check
                                                    value="None"
                                                    inline
                                                    label="None"
                                                    name="group3"
                                                    type="radio"
                                                    onChange={ ( e ) => ( setOutShootType( e.target.value ) ) }
                                                />
                                            </div>
                                        </div>

                                        {/*<div className="form-group row mt-3 mx-3">
                                            <label className="col-sm-4 col-form-label">Out Shoot Hours</label>
                                            <div className="col-sm-8">
                                                <input
                                                    // value={ firstName }
                                                    className="form-control"
                                                    type="Number"
                                                    placeholder="Enter the Total Hours"
                                                    // onChange={ (e) => setFirstName( e.target.value )}
                                                    required
                                                />
                                            </div>
                                        </div>*/}

                                        <div className="form-group row mt-3 mx-3">
                                            <label className="col-sm-4 col-form-label">Total Payment</label>
                                            <div className="col-sm-8">
                                                <input
                                                    value={ totalPayment }
                                                    className="form-control"
                                                    type="Text"
                                                    placeholder="Enter the Total Payment"
                                                    onChange={ (e) => setTotalPayment( e.target.value )}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group row mt-3 mx-3">
                                            <label className="col-sm-4 col-form-label">Price of Extra Pages</label>
                                            <div className="col-sm-8">
                                                <input
                                                    value={ extraPagePrice }
                                                    className="form-control"
                                                    type="Text"
                                                    placeholder="Enter the Price"
                                                    onChange={ (e) => setExtraPagePrice( e.target.value )}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group row mt-3 mx-3">
                                            <label className="col-sm-4 col-form-label">Album Design</label>
                                            <div className="col-sm-8">
                                                <input
                                                    value={ albumDesign }
                                                    className="form-control"
                                                    type="Text"
                                                    placeholder="Enter the Album Design"
                                                    onChange={ (e) => setAlbumDesign( e.target.value )}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-center pt-5 pb-4">
                                            <button type="button"
                                                    className="btn btn-dark btn-block mx-3" onClick={addPackage}>
                                                ADD
                                            </button>

                                            <button type="button"
                                                    className="btn btn-dark btn-block mx-3" onClick={ () => changeContentVisible( 1 ) }>
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

export default NewPackage