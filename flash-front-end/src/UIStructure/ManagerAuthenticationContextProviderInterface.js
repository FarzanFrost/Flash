import React from 'react'
import AuthenticationContextProvider from "../ContextFiles/Authentication/AuthenticationContextProvider";
import Manager from "./Manager.js";

const ManagerAuthenticationContextProviderInterface = () => {

    return(

        <div>

            <AuthenticationContextProvider>

                <Manager/>

            </AuthenticationContextProvider>

        </div>

    )

}

export default ManagerAuthenticationContextProviderInterface