import react, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const SelectImageContext = createContext( undefined )

const SelectImageContextProvider = ( props ) => {

    const serverLink = 'http://localhost:8080'

    const ImageList = [
        {imageUrl:'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'},
        {imageUrl:'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'},
        {imageUrl:'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'},
        {imageUrl:'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'},
        {imageUrl:'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp'},
        {imageUrl:'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'},
        {imageUrl:'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'},
        {imageUrl:'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'},
        {imageUrl:'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'},
        {imageUrl:'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'},
        {imageUrl:'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp'},
        {imageUrl:'https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'}
    ];

    const breakImagesIntoThreeColumns = ( Images ) => {

        const column1 = []
        const column2 = []
        const column3 = []

        const imageLength = Images.length

        const remainder = imageLength % 3

        const columnSize = ( imageLength - remainder ) / 3

        let imageCount = 1

        Images.map( ( image ) => {

            if ( imageCount <= columnSize ){

                column1.push( image )

            }else if( imageCount <= 2 * columnSize ){

                column2.push( image )

            }else if ( imageCount <= 3 * columnSize ){

                column3.push( image )

            }else{

                if ( remainder === 1 ){

                    column1.push( image )

                }else{

                    if ( imageCount !== imageLength ){

                        column1.push( image )

                    }else{

                        column2.push( image )

                    }

                }

            }
            imageCount++

        }  )

        return { column1 , column2 , column3 }

    }

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
             AddImageToFolder , imagesInFolder , RemoveImageFromFolder , breakImagesIntoThreeColumns , ImageList } } >
            { props.children }
        </SelectImageContext.Provider>
    )

}

export default SelectImageContextProvider