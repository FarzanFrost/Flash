import React from 'react'
import Login from "./Login";
import ReactLinkContextProvider from './ReactLinkContext'

const LoginContextProviderInterface = () => {

    return(

        <div>

            <ReactLinkContextProvider>

                <Login/>

            </ReactLinkContextProvider>

        </div>

    )

}

export default LoginContextProviderInterface