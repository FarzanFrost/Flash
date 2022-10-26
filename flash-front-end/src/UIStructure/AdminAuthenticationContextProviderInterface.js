import React from 'react'
import AuthenticationContextProvider from "../ContextFiles/Authentication/AuthenticationContextProvider";
import Admin from "./Admin";

const AdminAuthenticationContextProviderInterface = () => {

    return(

        <div>

            <AuthenticationContextProvider>

                <Admin/>

            </AuthenticationContextProvider>

        </div>

    )

}

export default AdminAuthenticationContextProviderInterface