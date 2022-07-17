import React from 'react'
import ReactLinkContextProvider from './ReactLinkContext'
import Signup from "./Signup";
const SignContextProviderInterface = () => {

    return(

        <div>

            <ReactLinkContextProvider>

                <Signup/>

            </ReactLinkContextProvider>


        </div>

    )

}

export default SignContextProviderInterface