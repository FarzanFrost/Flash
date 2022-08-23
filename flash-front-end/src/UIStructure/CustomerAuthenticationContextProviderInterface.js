import React from 'react'
import AuthenticationContextProvider from "../ContextFiles/Authentication/AuthenticationContextProvider";
import Customer from "./Customer";

const CustomerAuthenticationContextProviderInterface = () => {

    return(

        <div>

            <AuthenticationContextProvider>

                <Customer/>

            </AuthenticationContextProvider>

        </div>

    )

}

export default CustomerAuthenticationContextProviderInterface