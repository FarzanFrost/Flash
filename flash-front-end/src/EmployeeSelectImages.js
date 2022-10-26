import React, {useContext} from 'react'
import { SelectImageContext } from "./ContextFiles/EmployeeSelectImageContext";
import FolderStructuresCustomers from "./EmployeeFolderStructuresCustomers";
import SingleFolder from "./EmployeeSingleFolder";
import Swal from 'sweetalert2'

const SelectImages = () => {


    const {  isFolderOpen ,  AddImageToFolder , RemoveImageFromFolder , changeFolderOpenState } = useContext( SelectImageContext )



    return (

        <div>

            <div className="container-fluid display-3 pb-3" style={ { backgroundColor : '#d7d7d7' } } >
                <center><div onClick={ () => { changeFolderOpenState( "" ) } } style={ { cursor : 'pointer' , width : '13%' } } > Files </div></center>
            </div>

            <div className="container-fluid">
                <div className="row">
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