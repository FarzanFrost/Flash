import React, {useContext} from "react";
import {SelectImageContext} from "./ContextFiles/EmployeeSelectImageContext";

const SingleFolder = () => {

    const { currentFolderName , changeFolderOpenState , imagesInFolder , breakImagesIntoThreeColumns} = useContext( SelectImageContext )


    return (

        <div>
            <div className="container-fluid bg-dark d-flex justify-content-center p-3 text-light">
                <div>
                    <button className="btn btn-outline-light" onClick={ () => { changeFolderOpenState( "" ) } }>
                        <i className="bi bi-arrow-left-short"></i> Go back to Files
                    </button>
                </div>
                <div className="m-auto">
                    { currentFolderName }
                </div>
                <div>
                         <input type="file" id="myFile" name="filename"/>
                </div>
            </div>
            <div className="container-fluid d-flex p-2 flex-wrap justify-content-center " style={ { height : "555px" } }>

            </div>
        </div>

    )

}

export default SingleFolder