import React, {useContext} from "react";
import {SelectImageContext} from "./ContextFiles/SelectImageContext";

const FolderStructuresCustomers = () => {

    const { folderList } = useContext( SelectImageContext )

    return(

        <div>

            <div className="container-fluid bg-info d-flex justify-content-center p-3">

                <div className="m-auto">

                    Click on a folder, and start selecting images...

                </div>

                <div>

                    <button className="btn btn-outline-light">

                        <i className="bi bi-plus"></i> New Folder

                    </button>

                </div>

            </div>

            <div className="container-fluid d-flex p-2 flex-wrap justify-content-center pt-5">

                {

                    folderList.map( ( folder ) => (

                        <div className="flex-row shadow p-2 border m-3 rounded-2 d-flex display-5">

                            <div className="d-flex cursor-pointer" onClick={ () => console.log( "hi" ) } style={ { cursor : "pointer" } }>

                                <i className="bi bi-folder my-auto mx-2"></i>

                                <div className="m-auto">

                                    { folder }

                                </div>

                            </div>

                            <div className="dropdown ms-2">
                                <button className="btn bi-three-dots-vertical rounded-circle" type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                </button>
                                <ul className="dropdown-menu">

                                    <li> <button className="dropdown-item"> Rename</button> </li>
                                    <li> <button className="dropdown-item"> Delete Folder</button> </li>

                                </ul>
                            </div>

                        </div>

                    ) )

                }


            </div>

        </div>

    )

}

export default FolderStructuresCustomers