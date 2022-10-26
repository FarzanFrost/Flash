import React, {useContext, useEffect} from "react";
import { useState } from 'react';
import {SelectImageContext} from "./ContextFiles/EmployeeSelectImageContext";
import axios from "axios";
import {AuthenticationContext} from "./ContextFiles/Authentication/AuthenticationContextProvider";
import FolderStructuresCustomers from "./FolderStructuresCustomers";

const SingleFolder = () => {

    const serverLink = 'http://localhost:8080'

    const { currentFolderName , changeFolderOpenState , imagesInFolder , breakImagesIntoThreeColumns , ImageList} = useContext( SelectImageContext )

    const [images, setImages ] = useState(ImageList);

    const { changeContentVisible } = useContext( AuthenticationContext )

    // let { column1 , column2 , column3 } = null

    useEffect(

        () => {

            axios.get( serverLink + '/getImagesByEventId/' + currentFolderName ).then(

                ( response ) => {

                    setImages( response.data.galleryImages )
                    console.log( "images list",response.data.galleryImages )
                    // const { x , y , z } = breakImagesIntoThreeColumns( ImageList )
                    // column1 = x;
                    // column2 = y;
                    // column3 = z;

                }

            ).catch(

                () => {

                    alert("images selection")

                }

            )

        }

    , [])

    const { column1 , column2 , column3 } = breakImagesIntoThreeColumns( images )

    const[eventID,setEventID]=useState(currentFolderName );
    // const [ imageUrl, setImageUrl ] = useState("");

    // let imageUrl = ""

    const uploadMultipleFiles = () => {

        console.log( images )
        for (let i = 0; i < images.length; i++) {

            uploadImage( images[ i ] )

        }

    }

    const uploadImage = ( oneImage ) => {
        const data = new FormData()
        data.append("file", oneImage )
        data.append("upload_preset", "lysvcak7")
        data.append("cloud_name", "dctlnle1w")
        fetch("  https://api.cloudinary.com/v1_1/dctlnle1w/image/upload", {
            method: "post",
            body: data
        })
            .then(resp => resp.json())
            .then(data => {
                console.log( "data image " , data.url.toString() )
                const imageUrl = data.url.toString()
                // setEventID(eventID)
                AddPhotos( imageUrl )

            })
            .catch(err => console.log(err))

    }

    const AddPhotos = ( imageUrl ) => {

        console.log("image url" , imageUrl);

        const data = {

            eventID,
            imageUrl


        }

        axios.post( serverLink + '/addphotos' , data ).then(

            ( response ) => {

                if ( response.data === "done" ){

                    // changeContentVisible( 1 )

                }

            }

        ).catch(

            () => { alert( "Error!!! add photos") }

        )

    }

    console.log( "columns" , column1 , column2 ,column3 )


    return (

        <div>
            <div className="container-fluid bg-dark d-flex justify-content-center p-3 text-light">
                <div>
                    <button className="btn btn-outline-light" onClick={ () => { changeFolderOpenState( "" ) } }>
                        <i className="bi bi-arrow-left-short"></i> Go back to Files
                    </button>
                </div>
                <div className="m-auto">
                    Folder : { currentFolderName }
                </div>
                <div>
                         <input className="btn btn-outline-primary me-1" type="file" id="myFile" name="filename" onChange= {(e)=> setImages(e.target.files)} multiple="multiple"/>
                         <button className="btn btn-outline-primary" onClick={uploadMultipleFiles}>Upload</button>
                </div>
            </div>
            <div className="container-fluid d-flex p-2 flex-wrap justify-content-center " style={ { height : "555px" } }>

                <div className="row">

                    <div className="col  overflow-scroll" style={ { height : "665px" } }>

                        <div className="row p-4">

                            {column1 != null && <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">

                                {
                                    column1.map((image) => (

                                        <div className="p-1 bg-dark mb-4 text-light">

                                            <img
                                                src={image.imageUrl}
                                                className="w-100 shadow-1-strong rounded"
                                                alt="Boat on Calm Water"
                                            />

                                        </div>

                                    ))

                                }

                            </div>}

                            {column2 != null && <div className="col-lg-4 mb-4 mb-lg-0">

                                {
                                    column2.map((image) => (

                                        <div className="p-1 bg-dark mb-4 text-light">

                                            <img
                                                src={image.imageUrl}
                                                className="w-100 shadow-1-strong rounded"
                                                alt="Boat on Calm Water"
                                            />

                                        </div>

                                    ))

                                }

                            </div>}

                            {column3 != null && <div className="col-lg-4 mb-4 mb-lg-0 ">

                                {
                                    column3.map((image) => (

                                        <div className="p-1 bg-dark mb-4 text-light">

                                            <img
                                                src={image.imageUrl}
                                                className="w-100 shadow-1-strong rounded"
                                                alt="Boat on Calm Water"
                                            />

                                        </div>

                                    ))

                                }

                            </div>}

                        </div>

                    </div>

                </div>

            </div>
        </div>

    )

}

export default SingleFolder