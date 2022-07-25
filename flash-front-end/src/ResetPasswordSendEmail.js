import React , {useState , useContext} from "react";
import {ReactLinkContext} from "./ContextFiles/ReactLinkContext";
import {Link} from "react-router-dom";
import {ResetPasswordContext} from "./ContextFiles/ResetPasswordContext";
import validator from "validator";

const ResetPasswordSendEmail = () => {


    const [ email , setEmail ] = useState( '' )

    const { LoginLink } = useContext( ReactLinkContext )

    const { addEmail } = useContext( ResetPasswordContext )

    const [ isEmailValid , setIsEmailValid ] = useState( null )

    const submitButton = () => {

        if( validator.isEmail( email ) ){

            addEmail( email )
            setIsEmailValid( null )

        }else{

            setIsEmailValid( 'Email not valid' )

        }


    }

    return(

        <div>

            <div className="mb-3">

                <div>

                    <p className="display-6">

                        Don't worry

                    </p>

                    <p>

                        We are here to help you to recover your password. Enter the email address you used when you joined and we'll send you an OTP to your email.

                    </p>

                </div>

            </div>

            <div className="my-4 mx-0">

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

                { isEmailValid && <div className="text-center bg-warning mb-2"> Email not valid </div> }

                <div className="text-center">

                    <div className="d-flex align-items-center justify-content-center pb-4">

                        <button className="btn btn-dark btn-block mx-2 w-50 justify-content-center" type="button">

                            <div className="flex-wrap">

                                <i className="bi bi-arrow-left-short"></i> Close

                            </div>

                        </button>

                        <button className="btn btn-danger mx-2 w-50 justify-content-center" type="button" onClick={ submitButton }>

                            <div className="flex-wrap">

                                Continue <i className="bi bi-arrow-right-short"></i>

                            </div>

                        </button>

                    </div>


                </div>



            </div>

        </div>

    )


}

export default ResetPasswordSendEmail