import React, {useContext, useEffect, useState} from 'react'
import { SelectImageContext } from "./ContextFiles/SelectImageContext";
import FolderStructuresCustomers from "./FolderStructuresCustomers";
import SingleFolder from "./SingleFolder";
import Swal from 'sweetalert2'
import {AuthenticationContext} from "./ContextFiles/Authentication/AuthenticationContextProvider";
import axios from "axios";

const SelectImages = () => {

    const serverLink = 'http://localhost:8080'

    const { eventId } = useContext( AuthenticationContext )

    console.log( "select Image event Id : " , eventId )

    const { ImageList , isFolderOpen , breakImagesIntoThreeColumns , AddImageToFolder , RemoveImageFromFolder , changeFolderOpenState } = useContext( SelectImageContext )

    const [ selectedImages , setSelectedImages ] = useState(ImageList);

    const selectImagesFromSource = () => {

        axios.get( serverLink + '/getImagesByEventId/' + eventId ).then(

            ( response ) => {

                setSelectedImages( response.data.galleryImages )
                console.log( "images customer list",response.data.galleryImages )

            }

        ).catch(

            () => {

                alert("images selection")

            }

        )

    }

    useEffect(

        () => {

            selectImagesFromSource()

        }

        , [])

    const { column1 , column2 , column3 } = breakImagesIntoThreeColumns( selectedImages )

    const selectDeselectImages = ( e ) => {

        if ( e.target.checked ){

            AddImageToFolder( e.target.value )

        }else{

            RemoveImageFromFolder( e.target.value )

        }

    }

    // Swal.fire( 'Categorise the images into different folders.if you do, you get separate albums, if not every photo will be compiled into a single album' )

    return (

        <div>

            <div className="container-fluid display-3 pb-3" style={ { backgroundColor : '#d7d7d7' } } >

                <div onClick={ () => { changeFolderOpenState( "" ) } } style={ { cursor : 'pointer' , width : '13%' } } > Gallery </div>

            </div>

            <div className="container-fluid">

                <div className="row">

                    <div className="col  overflow-scroll" style={ { height : "665px" } }>

                        <div className="row p-4">

                            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">

                                { column1 !== null &&
                                    column1.map( ( image ) => (

                                        <div className="p-1 bg-dark mb-4 text-light">

                                            <img
                                                src={ image.imageUrl }
                                                className="w-100 shadow-1-strong rounded"
                                                alt="Boat on Calm Water"
                                            />

                                            { isFolderOpen && <div className="form-check mt-1 ms-1">

                                                <input className="form-check-input" type="checkbox" value={ image.imageUrl }
                                                       id="flexCheckDefault" onChange={ (e) => selectDeselectImages( e ) }/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">

                                                    Select Image

                                                </label>

                                            </div> }

                                        </div>

                                    ) )

                                }

                            </div>

                            <div className="col-lg-4 mb-4 mb-lg-0">

                                { column2 !== null &&
                                    column2.map( ( image ) => (

                                        <div className="p-1 bg-dark mb-4 text-light">

                                            <img
                                                src={ image.imageUrl }
                                                className="w-100 shadow-1-strong rounded"
                                                alt="Boat on Calm Water"
                                            />

                                            { isFolderOpen && <div className="form-check mt-1 ms-1">

                                                <input className="form-check-input" type="checkbox" value={ image.imageUrl }
                                                       id="flexCheckDefault" onChange={ (e) => selectDeselectImages( e ) }/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">

                                                    Select Image

                                                </label>

                                            </div> }

                                        </div>

                                    ) )

                                }

                            </div>

                            <div className="col-lg-4 mb-4 mb-lg-0 ">

                                { column3 !== null &&
                                    column3.map( ( image ) => (

                                        <div className="p-1 bg-dark mb-4 text-light">

                                            <img
                                                src={ image.imageUrl }
                                                className="w-100 shadow-1-strong rounded"
                                                alt="Boat on Calm Water"
                                            />

                                            { isFolderOpen && <div className="form-check mt-1 ms-1">

                                                <input className="form-check-input" type="checkbox" value={ image.imageUrl }
                                                       id="flexCheckDefault" onChange={ (e) => selectDeselectImages( e ) }/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">

                                                    Select Image

                                                </label>

                                            </div> }

                                        </div>

                                    ) )

                                }

                            </div>

                        </div>

                    </div>

                    <div className="col p-0">

                        { !isFolderOpen && <FolderStructuresCustomers/> }
                        { isFolderOpen && <SingleFolder/> }

                    </div>

                </div>

            </div>

        </div>




    )

}

export default SelectImages