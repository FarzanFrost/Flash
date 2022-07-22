import react, {createContext, useState} from "react";

export const ResetPasswordContext = createContext( undefined )

const ResetPasswordContextProvider = ( props ) => {

    const [ email , setEmail ] = useState( null )

    const addEmail = ( email ) => {

        setEmail( email )

    }

    return(

        <ResetPasswordContext.Provider value={ { email , addEmail } }>

            { props.children }

        </ResetPasswordContext.Provider>

    )

}

export default ResetPasswordContextProvider