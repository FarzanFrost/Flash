import React, {useContext} from 'react'
import { SelectImageContext } from "./ContextFiles/SelectImageContext";
import FolderStructuresCustomers from "./FolderStructuresCustomers";
import SingleFolder from "./SingleFolder";
const SelectImages = () => {

    const { ImageList , isFolderOpen } = useContext( SelectImageContext )

    const column1 = []
    const column2 = []
    const column3 = []

    const breakIntoColumns = () => {

        const imageLength = ImageList.length

        const remainder = imageLength % 3

        const columnSize = ( imageLength - remainder ) / 3

        let imageCount = 1

        ImageList.map( ( image ) => {

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

    }

    breakIntoColumns()

    return (

        <div>

            <div className="container-fluid bg-warning">

                lkdsjf;laksjd;flka

            </div>

            <div className="container-fluid">

                <div className="row">

                    <div className="col bg-success overflow-scroll" style={ { height : "720px" } }>

                        <div className="row p-4">

                            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">

                                {
                                    column1.map( ( image ) => (

                                        <div className="p-1 bg-primary mb-4">

                                            <img
                                                src={ image }
                                                className="w-100 shadow-1-strong rounded"
                                                alt="Boat on Calm Water"
                                            />

                                            { isFolderOpen && <div className="form-check mt-1 ms-1">

                                                <input className="form-check-input" type="checkbox" value=""
                                                       id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">

                                                    Select Image

                                                </label>

                                            </div> }

                                        </div>

                                    ) )

                                }

                            </div>

                            <div className="col-lg-4 mb-4 mb-lg-0">

                                {
                                    column2.map( ( image ) => (

                                        <div className="p-1 bg-primary mb-4">

                                            <img
                                                src={ image }
                                                className="w-100 shadow-1-strong rounded"
                                                alt="Boat on Calm Water"
                                            />

                                            { isFolderOpen && <div className="form-check mt-1 ms-1">

                                                <input className="form-check-input" type="checkbox" value=""
                                                       id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">

                                                    Select Image

                                                </label>

                                            </div> }

                                        </div>

                                    ) )

                                }

                            </div>

                            <div className="col-lg-4 mb-4 mb-lg-0">

                                {
                                    column3.map( ( image ) => (

                                        <div className="p-1 bg-primary mb-4">

                                            <img
                                                src={ image }
                                                className="w-100 shadow-1-strong rounded"
                                                alt="Boat on Calm Water"
                                            />

                                            { isFolderOpen && <div className="form-check mt-1 ms-1">

                                                <input className="form-check-input" type="checkbox" value=""
                                                       id="flexCheckDefault"/>
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