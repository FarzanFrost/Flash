import React from 'react'
import SelectImageContextProvider from "./ContextFiles/SelectImageContext";
import SelectImages from "./SelectImages";

const SelectImageProviderInterface = () => {

    return(

        <div>

            <SelectImageContextProvider>

                <SelectImages/>

            </SelectImageContextProvider>


        </div>

    )

}

export default SelectImageProviderInterface