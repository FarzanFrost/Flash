import react, {createContext, useState} from "react";
import axios from "axios";

export const AuthenticationContext = createContext( undefined )

const AuthenticationContextProvider = ( props ) => {

    const [ authenticated , setAuthenticated ] = useState( true )

    const authenticateUser = () => {

        if ( !authenticated ){ window.history.pushState(null, null, "/Login");window.location.reload() }

    }

    const login = ( username , password ) => {

        axios.post(

            'http://localhost:8080/authenticate',{
                username,
                password
            }).then(

            ( response ) => {

                storeSessionJWT( username , response.data.token )

            }).catch(

            () => {

                alert( "ERROR!!! 1" )

            })

        // console.log( username,password)

    }

    const setupAxiosInterceptors = ( token ) => {

        axios.interceptors.request.use(

            ( config ) => {

                if ( authenticated ){

                    config.headers.authorization = token;

                }
                return config;

            }

        )

    }

    const storeSessionJWT = ( username , token ) => {

        sessionStorage.setItem( 'authenticatedUser' , username );
        setupAxiosInterceptors( createJWTToken( token ) );

    }

    const createJWTToken = ( token ) => {

        return 'Bearer ' + token;

    }

    const logout = () => {

        sessionStorage.removeItem( 'authenticatedUser' );

    }

    return(

        <AuthenticationContext.Provider value={ { authenticated , authenticateUser , login } }>

            { props.children }

        </AuthenticationContext.Provider>

    )

}

export default AuthenticationContextProvider