import react, {createContext, useState} from "react";
export const AuthenticationContext = createContext( undefined )

const AuthenticationContextProvider = ( props ) => {

    const [ authenticated , setAuthenticated ] = useState( true )

    const authenticateUser = () => {

        if ( !authenticated ){ window.history.pushState(null, null, "/Login");window.location.reload() }

    }

    return(

        <AuthenticationContext.Provider value={ { authenticated , authenticateUser } }>

            { props.children }

        </AuthenticationContext.Provider>

    )

}

export default AuthenticationContextProvider