import React, {useContext} from "react";
import {SelectImageContext} from "./ContextFiles/EmployeeSelectImageContext";
import Swal from 'sweetalert2'

const FolderStructuresCustomers = () => {

    const { folderList , changeFolderOpenState } = useContext( SelectImageContext )

    const createNewFolder = () => {

        Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-outline-dark mx-1',
                cancelButton: 'btn btn-outline-primary mx-1'
            },
            buttonsStyling: false
        }).fire({
            title: 'Enter New Folder Name',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Create Folder',
            showLoaderOnConfirm: true,

            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                /* Here we have to use useFetch to send folder name to server*/
                if ( result.value !== ""){

                    Swal.fire({
                        icon: 'success',
                        title: 'Folder Created',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }else{

                    Swal.fire({
                        icon: 'error',
                        title: 'Failed to create folder',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }

            }
        })

    }

    console.log( "folder creations : " , folderList )

    return(

        <div>
            <div className="container-fluid bg-dark d-flex justify-content-center p-3 text-light">
                <div className="m-auto">
                    Click on a folder, and start selecting images...
                </div>
                <div>
                    <button className="btn btn-outline-light" onClick={ createNewFolder }>
                        <i className="bi bi-plus"></i> New Folder
                    </button>
                </div>
            </div>

            <div className="container-fluid d-flex p-2 flex-wrap justify-content-center pt-5">
                {
                    folderList.map( ( folder ) => (
                        <div className="flex-row shadow p-2 border m-3 rounded-2 d-flex ">
                            <div className="d-flex cursor-pointer" onClick={ () => changeFolderOpenState( folder.eventID ) } style={ { cursor : "pointer" } }>
                                <i className="bi bi-folder my-auto mx-2"></i>
                                <div className="m-auto">
                                    Folder : { folder.eventID }
                                </div>
                            </div>

                            <div className="dropdown ms-2">
                                <button className="btn bi-three-dots-vertical rounded-circle" type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                </button>
                                <ul className="dropdown-menu">
                                    <li> <button className="dropdown-item"> Rename</button> </li>
                                    <li> <button className="dropdown-item"> Delete</button> </li>
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