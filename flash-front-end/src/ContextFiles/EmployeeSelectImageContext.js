import react, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const SelectImageContext = createContext( undefined )

const SelectImageContextProvider = ( props ) => {

    const serverLink = 'http://localhost:8080'

    useEffect(

        () => {

            axios.get( serverLink + '/events' ).then(

                ( response ) => {

                    setFolderList( response.data )

                }

            ).catch(

                () => {

                    alert( "get events in employee" )

                }

            )

        }

    , [])

    let [folderList , setFolderList ] = useState( [] )
    const [ isFolderOpen , setIsFolderOpen ] = useState( false );
    const [ currentFolderName , setCurrentFolderName ] = useState( '' )
    const changeFolderOpenState = ( folderId ) => {
        setCurrentFolderName( folderId )
        if ( folderId !== "" ){
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