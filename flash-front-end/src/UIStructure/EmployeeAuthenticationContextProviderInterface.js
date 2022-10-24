import React from 'react'
import AuthenticationContextProvider from "../ContextFiles/Authentication/AuthenticationContextProvider";
import Manager from "./Manager.js";
import Employee from "./Employee";

const ManagerAuthenticationContextProviderInterface = () => {

    return(

        <div>

            <AuthenticationContextProvider>

                <Employee/>

            </AuthenticationContextProvider>

        </div>

    )

}

export default ManagerAuthenticationContextProviderInterface