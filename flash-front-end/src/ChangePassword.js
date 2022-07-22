import React, {useContext, useState} from "react";
import {ResetPasswordContext} from "./ContextFiles/ResetPasswordContext";

const ResetPasswordSendEmail = () => {

    const [ isPasswordHidden , setIsPasswordHidden ] = useState( true )

    const [ passwordType , setPasswordType ] = useState( 'password' )

    const [ password , setPassword ] = useState( '' )

    const [ confirmPassword , setConfirmPassword ] = useState( '' )

    const [ otp , setOtp ] = useState('')

    const { addData } = useContext( ResetPasswordContext )

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

    return(

        <div>

            <div className="mb-3">

                <div className="display-3 text-center">

                    Change Password

                </div>

            </div>

            <form action="" className="my-4 mx-0">

                <div className="input-group mb-3">
                    {/*<span className="input-group-text">

                        <i className="bi bi-lock-fill"></i>

                    </span>*/}

                    <input type='text' className="form-control"
                           placeholder="Enter OTP code"
                           value={ otp }
                           onChange={ ( e ) => setOtp( e.target.value ) }
                           required
                           autoFocus
                    />

                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">

                        <i className="bi bi-lock-fill"></i>

                    </span>
                    <input type={ passwordType } className="form-control"
                           placeholder="Enter new password"
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

                <div className="input-group mb-3">
                    <span className="input-group-text">

                        <i className="bi bi-lock-fill"></i>

                    </span>
                    <input type={ passwordType } className="form-control"
                           placeholder="Confirm new password"
                           value={ confirmPassword }
                           onChange={ ( e ) => setConfirmPassword( e.target.value ) }
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

                        <button className="btn btn-dark btn-block mx-2 w-50" type="button">

                            <div className="flex-wrap">

                                Res-send OTP

                            </div>

                        </button>

                        <button className="btn btn-danger btn-block mx-2 w-50" type="button" onClick={ () => { addData( otp , password ) } }>

                            <div className="flex-wrap">

                                Reset Password

                            </div>

                        </button>

                    </div>


                </div>



            </form>

        </div>

    )


}

export default ResetPasswordSendEmail