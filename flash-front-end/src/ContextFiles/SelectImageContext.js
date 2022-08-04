import react, { createContext } from "react";

export const SelectImageContext = createContext( undefined )

const SelectImageContextProvider = ( props ) => {

    /*const LoginLink = '/Login'
    const SignUpLink = '/Signup'
    const ResetPasswordLink = '/ResetPassword'*/


    return(

        <SelectImageContext.Provider /*value={ { LoginLink , SignUpLink , ResetPasswordLink } }*/ >

            { props.children }

        </SelectImageContext.Provider>

    )

}

export default SelectImageContextProvider