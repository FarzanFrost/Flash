import React, {useContext, useState} from 'react'
import {Link} from "react-router-dom";
import loginPhoto from "./Images/backgroudphotoLogin.jpg";
import {ReactLinkContext} from "./ContextFiles/ReactLinkContext";
import validator from "validator";
import {AuthenticationContext} from "./ContextFiles/Authentication/AuthenticationContextProvider";

const Signup = () => {

    const { LoginLink } = useContext( ReactLinkContext )

    const { signUp } = useContext( AuthenticationContext )

    const [ isPasswordHidden , setIsPasswordHidden ] = useState( true )

    const [ passwordType , setPasswordType ] = useState( 'password' )

    const [ email , setEmail ] = useState( '' )

    const [ password , setPassword ] = useState( '' )

    const [ confirmPassword , setConfirmPassword ] = useState( '' )

    const [ firstName , setFirstName ] = useState( '' )

    const [ lastName , setLastName ] = useState( '' )

    const [ nicNumber , setNicNumber ] = useState( '' )

    const [ contactNumber , setContactNumber ] = useState( '' )

    const [ errorMessageStatus , setErrorMessageStatus ] = useState( false )

    const errorMessage = 'Password requires to have one lower case, one uppercase, one number, one symbol and be minimum of 8 characters in lengths';

    const [ confirmPasswordStatus , setConfirmPasswordStatus ] = useState( false )

    const [ confirmPasswordErrorMessage , setConfirmPasswordErrorMessage ] = useState( '' )

    const [ emailStatus , setEmailStatus ] = useState( false )

    const [ emailErrorMessage , setEmailErrorMessage ] = useState( '' )

    const [ gender , setGender ] = useState( null )

    const showHidePassword = () => {

        if ( isPasswordHidden ) {
            setPasswordType( 'text' )
            setIsPasswordHidden(false )

        }
        else {

            setPasswordType( 'password' )
            setIsPasswordHidden( true )

        }

    }

    const validatePassword = ( passwordInputValue ) => {

        if ( validator.isStrongPassword( passwordInputValue , {

            minLength : 8 , minLowercase : 1 , minUppercase : 1 ,
            minNumbers : 1 , minSymbols : 1

        } ) )setErrorMessageStatus( false )
        else setErrorMessageStatus( true )

        setPassword( passwordInputValue )

    }

    const validateConfirmPassword = ( confirmPasswordInputValue ) =>{

        if ( password === confirmPasswordInputValue ){

            setConfirmPasswordErrorMessage( 'Password matches' )
            setConfirmPasswordStatus( false )

        }else{

            setConfirmPasswordErrorMessage( 'Passwords does not match' )
            setConfirmPasswordStatus( true )

        }

        setConfirmPassword( confirmPasswordInputValue )

    }

    const validateEmail = ( emailInputValue ) => {

        setEmail( emailInputValue )

        if ( validator.isEmail( emailInputValue ) ) {

            setEmailStatus(true)
            setEmailErrorMessage( 'valid email' )
        }
        else {

            setEmailStatus(false)
            setEmailErrorMessage( 'Invalid email' )
        }

    }

    const selectGender = ( event ) => { setGender( event.target.value ) }

    const createUser = () => {

        signUp( { email , password , firstName , lastName , nicNumber , contactNumber , gender } )

    }

    return (

            <div className="h-100">

                <section className="h-100">

                    <div className="container py-5 h-100">

                        <div className="row d-flex justify-content-center align-items-center h-100">

                            <div className="col-xl-10 my-5 py-2 my-lg-1 py-lg-1 my-xl-0 py-xl-0">

                                <div className="card rounded-3 text-black my-lg-1 my-xl-0 py-xl-0" style={ { backgroundColor : '#d7d7d7' } }>

                                    <div className="row g-0">

                                        <div className="col-lg-6 my-lg-5">

                                            <div className="card-body p-md-1 mx-md-4 mt-5">

                                                <div className="mb-3">

                                                    <div className="text-center">

                                                        <p className="fs-3 fw-bold pb-3"> Signup with </p>


                                                        <div className="d-flex justify-content-center">

                                                            <button className="btn btn-dark mx-auto w-auto flex-wrap">

                                                                <i className="bi bi-google me-2"></i>
                                                                Signup with Google

                                                            </button>

                                                            <button className="btn btn-dark mx-auto w-auto flex-wrap">

                                                                <i className="bi bi-facebook me-2"></i>
                                                                Signup with Facebook

                                                            </button>

                                                        </div>

                                                        <p className="fs-3 fw-bold mt-4"> or </p>


                                                    </div>

                                                </div>

                                                <form action="" className="my-4 mx-5">

                                                    <div className="input-group mb-3">

                                                    <span className="input-group-text">

                                                        <i className="bi bi-person-fill"></i>

                                                    </span>
                                                        <input type="text" className="form-control me-2"
                                                               placeholder="First Name"
                                                               value={ firstName }
                                                               onChange={ ( e ) => setFirstName( e.target.value )}
                                                               autoFocus
                                                               required
                                                        />

                                                        <input type="text" className="form-control"
                                                               placeholder="Last Name"
                                                               value={ lastName }
                                                               onChange={ ( e ) => setLastName( e.target.value )}
                                                               required
                                                        />

                                                    </div>

                                                    <div className="input-group mb-3">
                                                    <span className="input-group-text">

                                                        <i className="bi bi-person-badge-fill"></i>

                                                    </span>
                                                        <input type="text" className="form-control"
                                                               placeholder="Enter NIC number"
                                                               value={ nicNumber }
                                                               onChange={ ( e ) => setNicNumber( e.target.value )}
                                                            /*aria-label="Username" aria-describedby="basic-addon1"*/
                                                               required
                                                        />
                                                    </div>

                                                    <div className="input-group mb-3">
                                                    <span className="input-group-text">

                                                        <i className="bi bi-telephone-fill"></i>

                                                    </span>
                                                        <input type="text" className="form-control"
                                                               placeholder="Enter Contact Number : 012345679"
                                                               value={ contactNumber }
                                                               onChange={ ( e ) => setContactNumber( e.target.value )}
                                                            /*aria-label="Username" aria-describedby="basic-addon1"*/
                                                               required
                                                               maxLength={10}
                                                        />
                                                    </div>

                                                    <div className="input-group mb-3">
                                                    <span className="input-group-text">

                                                        Select Gender

                                                    </span>
                                                        <input type="radio" className="btn-check" name="options" id="genderMale" autoComplete="off" value="male" onChange={ selectGender }/>
                                                        <label htmlFor="genderMale" className="btn btn-outline-dark"> Male </label>

                                                        <input type="radio" className="btn-check" name="options" id="genderFemale" autoComplete="off" value="female" onChange={ selectGender }/>
                                                        <label htmlFor="genderFemale" className="btn btn-outline-dark"> Female </label>

                                                    </div>

                                                    <div className="input-group mb-3">
                                                    <span className="input-group-text">

                                                        <i className="bi bi-envelope-fill"></i>

                                                    </span>
                                                        <input type="email" className="form-control"
                                                               placeholder="flash@gmail.com"
                                                               value={ email }
                                                               onChange={ ( e ) => validateEmail( e.target.value )}
                                                            /*aria-label="Username" aria-describedby="basic-addon1"*/
                                                               required
                                                        />
                                                    </div>

                                                    {

                                                        emailStatus && <div className="mx-2 bg-success my-0">

                                                            <p className="d-flex justify-content-center"> { emailErrorMessage } </p>

                                                        </div>

                                                    }

                                                    {

                                                        !emailStatus && <div className="mx-2 bg-warning my-0">

                                                            <p className="d-flex justify-content-center"> { emailErrorMessage } </p>

                                                        </div>

                                                    }

                                                    <div className="input-group mb-3">
                                                    <span className="input-group-text">

                                                        <i className="bi bi-lock-fill"></i>

                                                    </span>
                                                        <input type={ passwordType } className="form-control"
                                                               placeholder="Enter password"
                                                               value={ password }
                                                               onChange={ ( e ) => validatePassword( e.target.value ) }
                                                               required
                                                        />

                                                        <span className="input-group-text">


                                                        <button className="btn btn-outline-dark border-0"
                                                                type="button"
                                                                id="button-addon1" onClick={ showHidePassword }>
                                                            { isPasswordHidden && <i className="bi bi-eye-slash-fill"></i>}
                                                            { !isPasswordHidden && <i className="bi bi-eye-fill"></i> }
                                                        </button>

                                                    </span>
                                                    </div>

                                                    {

                                                        errorMessageStatus && <div className="mx-2 bg-warning my-0">

                                                            <p className="d-flex justify-content-center"> { errorMessage } </p>

                                                        </div>

                                                    }

                                                    <div className="input-group mb-3">
                                                    <span className="input-group-text">

                                                        <i className="bi bi-lock-fill"></i>

                                                    </span>
                                                        <input type={ passwordType } className="form-control"
                                                               placeholder="Confirm password"
                                                               value={ confirmPassword }
                                                               onChange={ ( e ) => validateConfirmPassword( e.target.value ) }
                                                               required
                                                        />

                                                        <span className="input-group-text">


                                                        <button className="btn btn-outline-dark border-0"
                                                                type="button"
                                                                id="button-addon1" onClick={ showHidePassword }>
                                                            { isPasswordHidden && <i className="bi bi-eye-slash-fill"></i>}
                                                            { !isPasswordHidden && <i className="bi bi-eye-fill"></i> }
                                                        </button>

                                                    </span>
                                                    </div>

                                                    {

                                                        confirmPasswordStatus && <div className="mx-2 bg-warning my-0">

                                                            <p className="d-flex justify-content-center"> { confirmPasswordErrorMessage } </p>

                                                        </div>

                                                    }

                                                    {

                                                        !confirmPasswordStatus && <div className="mx-2 bg-success my-0">

                                                            <p className="d-flex justify-content-center"> { confirmPasswordErrorMessage } </p>

                                                        </div>

                                                    }

                                                    <div className="text-center">

                                                        <div className="d-flex align-items-center justify-content-center pb-4">

                                                            <button className="btn btn-dark btn-block" type="button" onClick={ createUser }>

                                                                Signup

                                                            </button>

                                                        </div>

                                                        <p> Have an account? <Link className="text-primary" to={ LoginLink }> Login </Link>  </p>

                                                    </div>



                                                </form>


                                                <div>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="col-lg-6 d-lg-flex d-none">

                                            <div className="d-lg-flex d-none">

                                                <div className="text-center">

                                                    <img className="img-fluid rounded-3 h-100" src={ loginPhoto } alt="Camera"/>

                                                </div>

                                            </div>

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

export default Signup