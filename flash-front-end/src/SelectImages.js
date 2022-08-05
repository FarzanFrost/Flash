import React, {useContext} from 'react'
import { SelectImageContext } from "./ContextFiles/SelectImageContext";
import FolderStructuresCustomers from "./FolderStructuresCustomers";
import SingleFolder from "./SingleFolder";
const SelectImages = () => {

    const { ImageList , isFolderOpen , breakImagesIntoThreeColumns , AddImageToFolder , RemoveImageFromFolder } = useContext( SelectImageContext )

    const { column1 , column2 , column3 } = breakImagesIntoThreeColumns( ImageList )

    const selectDeselectImages = ( e ) => {

        if ( e.target.checked ){

            AddImageToFolder( e.target.value )

        }else{

            RemoveImageFromFolder( e.target.value )

        }

    }

    return (

        <div>

            <div className="container-fluid display-3 pb-3" style={ { backgroundColor : '#d7d7d7' } }>

                Gallery

            </div>

            <div className="container-fluid">

                <div className="row">

                    <div className="col  overflow-scroll" style={ { height : "665px" } }>

                        <div className="row p-4">

                            <div className="col-lg-4 border-end border-3 border-dark col-md-12 mb-4 mb-lg-0">

                                {
                                    column1.map( ( image ) => (

                                        <div className="p-1 bg-dark mb-4 text-light">

                                            <img
                                                src={ image }
                                                className="w-100 shadow-1-strong rounded"
                                                alt="Boat on Calm Water"
                                            />

                                            { isFolderOpen && <div className="form-check mt-1 ms-1">

                                                <input className="form-check-input" type="checkbox" value={ image }
                                                       id="flexCheckDefault" onChange={ (e) => selectDeselectImages( e ) }/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">

                                                    Select Image

                                                </label>

                                            </div> }

                                        </div>

                                    ) )

                                }

                            </div>

                            <div className="col-lg-4 mb-4 mb-lg-0 border-end border-3 border-dark">

                                {
                                    column2.map( ( image ) => (

                                        <div className="p-1 bg-dark mb-4 text-light">

                                            <img
                                                src={ image }
                                                className="w-100 shadow-1-strong rounded"
                                                alt="Boat on Calm Water"
                                            />

                                            { isFolderOpen && <div className="form-check mt-1 ms-1">

                                                <input className="form-check-input" type="checkbox" value={ image }
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

                                {
                                    column3.map( ( image ) => (

                                        <div className="p-1 bg-dark mb-4 text-light">

                                            <img
                                                src={ image }
                                                className="w-100 shadow-1-strong rounded"
                                                alt="Boat on Calm Water"
                                            />

                                            { isFolderOpen && <div className="form-check mt-1 ms-1">

                                                <input className="form-check-input" type="checkbox" value={ image }
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