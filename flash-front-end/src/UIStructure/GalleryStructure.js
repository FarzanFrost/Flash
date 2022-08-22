import React from 'react'
import SelectImageContextProviderInterface from "../SelectImageContextProviderInterface";
import OldHeader from "../oldHeader";
import OldFooter from "../oldFooter";
import SideNavCustomer from "../SideNavCustomer";

const GalleryStructure = () => {

    return(

        <div>

            <OldHeader/>

            <div className="row">

                <div className="col-2 h-100">

                    <SideNavCustomer/>

                </div>

                <div className="col-10">

                    <SelectImageContextProviderInterface/>

                </div>

            </div>

            <OldFooter/>

        </div>

    )

}

export default GalleryStructure