import React from 'react'
import EmployeeSelectImageContextProvider from "./ContextFiles/EmployeeSelectImageContext";
import EmployeeSelectImages from "./EmployeeSelectImages";

const SelectImageProviderInterface = () => {

    return(

        <div>

            <EmployeeSelectImageContextProvider>

                <EmployeeSelectImages/>

            </EmployeeSelectImageContextProvider>


        </div>

    )

}

export default SelectImageProviderInterface