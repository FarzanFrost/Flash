import React, {useContext} from "react";
import {SelectImageContext} from "./ContextFiles/SelectImageContext";

const SingleFolder = () => {

    const { currentFolderName } = useContext( SelectImageContext )

    return (

        <div>

            <div className="container-fluid bg-info d-flex justify-content-center p-3">

                <div>

                    <button className="btn btn-outline-light" onClick={ () => { window.location.reload() } }>

                        <i className="bi bi-arrow-left-short"></i> Go back to Gallery

                    </button>

                </div>

                <div className="m-auto">

                    { currentFolderName }

                </div>

                <div>

                    <button className="btn btn-outline-light">

                        <i className="bi bi-check"></i> Done Selecting

                    </button>

                </div>

            </div>

            <div className="container-fluid d-flex p-2 flex-wrap justify-content-center pt-5 bg-primary text-light" style={ { height : "659px" } }>

                Select Images on the right and click done selecting...

            </div>

        </div>

    )

}

export default SingleFolder