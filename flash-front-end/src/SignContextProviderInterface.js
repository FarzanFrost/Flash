import React from 'react'
import ReactLinkContextProvider from './ContextFiles/ReactLinkContext'
import Signup from "./Signup";
import AuthenticationContextProvider from "./ContextFiles/Authentication/AuthenticationContextProvider";
const SignContextProviderInterface = () => {

    return(

        <div>

            <AuthenticationContextProvider>

                <ReactLinkContextProvider>

                    <Signup/>

                </ReactLinkContextProvider>

            </AuthenticationContextProvider>


        </div>

    )

}

export default SignContextProviderInterface