import react, {createContext, useState} from "react";

export const ReactLinkContext = createContext( undefined )

const ReactLinkContextProvider = ( props ) => {

    const LoginLink = '/Login'
    const SignUpLink = '/Signup'


    return(

        <ReactLinkContext.Provider value={ { LoginLink , SignUpLink } }>

            { props.children }

        </ReactLinkContext.Provider>

    )

}

export default ReactLinkContextProvider