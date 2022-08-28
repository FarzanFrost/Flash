import react, {createContext, useState} from "react";
import axios from "axios";

export const AuthenticationContext = createContext( undefined )

const AuthenticationContextProvider = ( props ) => {

    const serverLink = 'http://localhost:8080'

    const [ authenticated , setAuthenticated ] = useState( true )

    const [ userDetailsAfterAuthentication , setUserDetailsAfterAuthentication ] = useState( null )

    const authenticateUser = () => {

        if ( !authenticated ){ window.history.pushState(null, null, "/Login");window.location.reload() }

    }

    const signUp = ( data ) => {

        axios.post( serverLink + '/createUser' , data ).then(

            ( response ) => {

                console.log( response.data )

                login( data.email , data.password )

            }

        ).catch(

            () => { alert( "Error!!! 3") }

        )



    }

    /*Here the username refers the email*/
    const login = ( username , password ) => {

        axios.post(

            serverLink+'/authenticate',{
                username,
                password
            }).then(

            ( response ) => {

                storeSessionJWT( username , response.data.token )
                setAuthenticated( true )
                getUserDetailsAfterAuthenticated( username )
                /*axios.get( 'http://localhost:8080/Greetings' ).then(

                    ( response ) => {

                        console.log( response.data )

                    }

                ).catch(

                    () => {

                        alert( "ERROR!!! 2" )

                    })*/

            }).catch(

            () => {

                alert( "ERROR!!! 1" )

            })

    }

    const getUserDetailsAfterAuthenticated = ( email ) => {

        axios.get( serverLink + '/getUserDetails/' + email ).then(

            ( response ) => { /*console.log(response.data);*/setUserDetailsAfterAuthentication( response.data );
                window.history.pushState(null, null, "/Customer");window.location.reload()
            }

        ).catch(

            () => {

                alert( "Error!!! 4" )

            }

        )

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
        setAuthenticated( false );

    }

    /*change later*/

    const [ contentVisible , setContentVisible ] = useState( 0 )

    const changeContentVisible = ( value ) => {

        setContentVisible( value )

    }

    return(

        <AuthenticationContext.Provider value={ { authenticated , authenticateUser , login , signUp , contentVisible , changeContentVisible } }>

            { props.children }

        </AuthenticationContext.Provider>

    )

}

export default AuthenticationContextProvider