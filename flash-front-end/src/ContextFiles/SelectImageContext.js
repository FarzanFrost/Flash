import react, {createContext, useState} from "react";

export const SelectImageContext = createContext( undefined )

const SelectImageContextProvider = ( props ) => {

    const ImageList = [
        'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
        'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp',
        'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp',
        'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
        'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp',
        'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp','https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
        'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp',
        'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp',
        'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
        'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp',
        'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
    ];

    const folderList = [ 'Family' , 'Friends' , 'Social Media','Family' , 'Friends' , 'Social Media' ]

    const [ isFolderOpen , setIsFolderOpen ] = useState( false );

    const changeFolderOpenState = () => {

        setIsFolderOpen( true )
        console.log( " aslkdjf;alskdj;" )

    }

    return(

        <SelectImageContext.Provider value={ { ImageList , folderList , isFolderOpen , changeFolderOpenState } } >

            { props.children }

        </SelectImageContext.Provider>

    )

}

export default SelectImageContextProvider