import React, {useContext, useState} from 'react'
import {Link} from "react-router-dom";
import loginPhoto from './Images/backgroudphotoLogin.jpg'
import {ReactLinkContext} from "./ContextFiles/ReactLinkContext";
import {AuthenticationContext} from "./ContextFiles/Authentication/AuthenticationContextProvider";

const Login = () => {

    const { SignUpLink } = useContext( ReactLinkContext )

    const { login } = useContext( AuthenticationContext )

    const { ResetPasswordLink : forgotPasswordLink } = useContext( ReactLinkContext )

    const [ isPasswordHidden , setIsPasswordHidden ] = useState( true )

    const [ passwordType , setPasswordType ] = useState( 'password' )

    const [ email , setEmail ] = useState( '' )

    const [ password , setPassword ] = useState( '' )

    // const username = 'in28minutes';

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

    return (

            <div className="h-100">

                {/*<ReactLinkContextProvider>*/}

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

                                                        <p className="fs-3 fw-bold pb-3"> Login with </p>


                                                        <div className="d-flex justify-content-center">

                                                            <button className="btn btn-dark mx-auto w-auto flex-wrap">

                                                                <i className="bi bi-google me-2"></i>Login with Google

                                                            </button>

                                                            <button className="btn btn-dark mx-auto w-auto flex-wrap">

                                                                <i className="bi bi-facebook me-2"></i>Login with Facebook

                                                            </button>

                                                        </div>

                                                        <p className="fs-3 fw-bold mt-4"> or </p>


                                                    </div>

                                                </div>

                                                <form action="" className="my-4 mx-5">

                                                    <div className="input-group mb-3">
                                                    <span className="input-group-text">

                                                        <i className="bi bi-envelope-fill"></i>

                                                    </span>
                                                        <input type="email" className="form-control"
                                                               placeholder="flash@gmail.com"
                                                               value={ email }
                                                               onChange={ ( e ) => setEmail( e.target.value )}
                                                            /*aria-label="Username" aria-describedby="basic-addon1"*/
                                                               autoFocus
                                                               required
                                                        />
                                                    </div>

                                                    <div className="input-group mb-3">
                                                    <span className="input-group-text">

                                                        <i className="bi bi-lock-fill"></i>

                                                    </span>
                                                        <input type={ passwordType } className="form-control"
                                                               placeholder="Enter password"
                                                               value={ password }
                                                               onChange={ ( e ) => setPassword( e.target.value ) }
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


                                                    <div className="text-center">

                                                        <div className="d-flex align-items-center justify-content-center pb-4">

                                                            <button className="btn btn-dark btn-block" type="button" onClick={ () => login( email , password ) }>

                                                                Login

                                                            </button>

                                                        </div>

                                                        <Link className="text-primary" to={ forgotPasswordLink }>Forgot password?</Link>

                                                        <p> Don't have an account? <Link className="text-primary" to={ SignUpLink }> Signup </Link>  </p>

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

                {/*</ReactLinkContextProvider>*/}

            </div>


    )

}

export default Login