import react, {createContext, useState} from "react";

export const SelectImageContext = createContext( undefined )

const SelectImageContextProvider = ( props ) => {

    const folderList = [ 'File name ID 101' , 'File name ID 102' , 'File name ID 103' ]
    const [ isFolderOpen , setIsFolderOpen ] = useState( false );
    const [ currentFolderName , setCurrentFolderName ] = useState( '' )
    const changeFolderOpenState = ( folderName ) => {
        setCurrentFolderName( folderName )
        if ( folderName !== "" ){
            setIsFolderOpen( true )
        }else{
            setIsFolderOpen( false )
        }
    }

    const [ imagesInFolder , setImagesInFolder ] = useState( [] )

    const AddImageToFolder = ( image ) => {
        setImagesInFolder( prevState => [ ...prevState , image ] )
    }

    const RemoveImageFromFolder = ( image ) => {
        setImagesInFolder( prevState => prevState.filter( ( x ) => x !== image ) )
    }

    return(
        <SelectImageContext.Provider value={ {  folderList , isFolderOpen , changeFolderOpenState , currentFolderName ,
             AddImageToFolder , imagesInFolder , RemoveImageFromFolder } } >
            { props.children }
        </SelectImageContext.Provider>
    )

}

export default SelectImageContextProvider