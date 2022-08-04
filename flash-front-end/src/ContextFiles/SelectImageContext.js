import react, { createContext } from "react";

export const SelectImageContext = createContext( undefined )

const SelectImageContextProvider = ( props ) => {

    const ImageList = [
        'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
        'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp',
        'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp',
        'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
        'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp',
        'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
    ];

    return(

        <SelectImageContext.Provider value={ { ImageList } } >

            { props.children }

        </SelectImageContext.Provider>

    )

}

export default SelectImageContextProvider