import React from 'react'
import Login from "./Login";
import ReactLinkContextProvider from './ContextFiles/ReactLinkContext'
import AuthenticationContextProvider from "./ContextFiles/Authentication/AuthenticationContextProvider";

const LoginContextProviderInterface = () => {

    return(

        <div>

            <AuthenticationContextProvider>

                <ReactLinkContextProvider>

                    <Login/>

                </ReactLinkContextProvider>

            </AuthenticationContextProvider>

        </div>

    )

}

export default LoginContextProviderInterface