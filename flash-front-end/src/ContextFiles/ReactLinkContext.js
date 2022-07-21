import react, {createContext, useState} from "react";

export const ReactLinkContext = createContext( undefined )

const ReactLinkContextProvider = ( props ) => {

    const LoginLink = '/Login'
    const SignUpLink = '/Signup'
    const ResetPasswordLink = '/ResetPassword'


    return(

        <ReactLinkContext.Provider value={ { LoginLink , SignUpLink , ResetPasswordLink } }>

            { props.children }

        </ReactLinkContext.Provider>

    )

}

export default ReactLinkContextProvider