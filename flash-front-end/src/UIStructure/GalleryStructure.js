import React from 'react'
import SelectImageContextProviderInterface from "../SelectImageContextProviderInterface";
import Header from "../Header";
import Footer from "../Footer";
import SideNavCustomer from "../SideNavCustomer";

const GalleryStructure = () => {

    return(

        <div>

            <Header/>

            <div className="row">

                <div className="col-2 h-100">

                    <SideNavCustomer/>

                </div>

                <div className="col-10">

                    <SelectImageContextProviderInterface/>

                </div>

            </div>

            <Footer/>

        </div>

    )

}

export default GalleryStructure