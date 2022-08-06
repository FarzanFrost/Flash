import React, {useContext} from "react";
import {SelectImageContext} from "./ContextFiles/SelectImageContext";

const SingleFolder = () => {

    const { currentFolderName , changeFolderOpenState , imagesInFolder , breakImagesIntoThreeColumns} = useContext( SelectImageContext )

    const { column1 , column2 , column3 } = breakImagesIntoThreeColumns( imagesInFolder )

    return (

        <div>

            <div className="container-fluid bg-dark d-flex justify-content-center p-3 text-light">

                <div>

                    <button className="btn btn-outline-light" onClick={ () => { changeFolderOpenState( "" ) } }>

                        <i className="bi bi-arrow-left-short"></i> Go back to Gallery

                    </button>

                </div>

                <div className="m-auto">

                    Gallery / { currentFolderName }

                </div>

                <div>

                    <button className="btn btn-outline-light">

                        <i className="bi bi-check"></i> Done Selecting

                    </button>

                </div>

            </div>

            <div className="container-fluid d-flex p-2 flex-wrap justify-content-center " style={ { height : "555px" } }>

                <div className="row">

                    <div className="col overflow-scroll">

                        { imagesInFolder.length ===0 && <h3 className="pt-5"> Select Images on the left and click done selecting... </h3> }

                        { imagesInFolder.length > 0 &&

                            <div className="row p-4" style={ { height : "555px" } }>

                                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">

                                    {
                                        column1.map( ( image ) => (

                                            <div className="p-1 bg-dark mb-4 text-light">

                                                <img
                                                    src={ image }
                                                    className="w-100 shadow-1-strong rounded"
                                                    alt="Boat on Calm Water"
                                                />

                                            </div>

                                        ) )

                                    }

                                </div>

                                <div className="col-lg-4 mb-4 mb-lg-0">

                                    {
                                        column2.map( ( image ) => (

                                            <div className="p-1 bg-dark mb-4 text-light">

                                                <img
                                                    src={ image }
                                                    className="w-100 shadow-1-strong rounded"
                                                    alt="Boat on Calm Water"
                                                />

                                            </div>

                                        ) )

                                    }

                                </div>

                                <div className="col-lg-4 mb-4 mb-lg-0">

                                    {
                                        column3.map( ( image ) => (

                                            <div className="p-1 bg-dark mb-4 text-light">

                                                <img
                                                    src={ image }
                                                    className="w-100 shadow-1-strong rounded"
                                                    alt="Boat on Calm Water"
                                                />

                                            </div>

                                        ) )

                                    }

                                </div>

                            </div>

                        }

                    </div>

                </div>

            </div>

        </div>

    )

}

export default SingleFolder