import React, {useContext} from "react";
import { useState } from 'react';
import {SelectImageContext} from "./ContextFiles/EmployeeSelectImageContext";

const SingleFolder = () => {

    const { currentFolderName , changeFolderOpenState , imagesInFolder , breakImagesIntoThreeColumns} = useContext( SelectImageContext )


    const [image, setImage ] = useState("");
    const [ url, setUrl ] = useState("");
    const uploadImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "lysvcak7")
        data.append("cloud_name", "dctlnle1w")
        fetch("  https://api.cloudinary.com/v1_1/dctlnle1w/image/upload", {
            method: "post",
            body: data
        })
            .then(resp => resp.json())
            .then(data => {
                setUrl(data.url)
            })
            .catch(err => console.log(err))

    }

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
                         <input type="file" id="myFile" name="filename" onChange= {(e)=> setImage(e.target.files[0])}/>
                         <button onClick={uploadImage}>Upload</button>
                </div>

                <div>
                    <img src={url}/>

                </div>
            </div>
            <div className="container-fluid d-flex p-2 flex-wrap justify-content-center " style={ { height : "555px" } }>

            </div>
        </div>

    )

}

export default SingleFolder