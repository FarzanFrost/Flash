import React, {useContext, useEffect, useState} from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import sliverPhoto from './Images/silver-package.png'
import goldPhoto from './Images/gold-package_.png'
import diamondPhoto from './Images/diamond-package.png'
import platinumPhoto from './Images/platinum-package.png'
import {AuthenticationContext} from "./ContextFiles/Authentication/AuthenticationContextProvider";
import axios from "axios";


const Vieweventdetailsforadmin = () => {

    const serverLink = 'http://localhost:8080'

    const { changeContentVisible , changePackageDetails } = useContext( AuthenticationContext )

    const style1 = {

        backgroundColor: '#767676',
        height:'110px'
    };

    const [packagesDetails, setPackagesDetails] = useState( null )

    useEffect( () => {

        axios.get( serverLink + '/Packages' ).then(

            ( response ) => {

                setPackagesDetails( response.data )
                console.log( response.data )

            }

        ).catch(

            () => { alert( "Error!!! packages details ") }

        )

    } ,[])

    const getPicture = ( name ) => {

        if ( name === "Silver Package" ) return sliverPhoto
        else if ( name === "Gold Package" ) return goldPhoto
        else if ( name === "Platinum Package" ) return platinumPhoto
        else if ( name === "Diamond Package" ) return diamondPhoto

    }



    return (

        <div className="h-100" >
            <center style={{...style1}}>
                <div className="col-6">
                    <h1 className="mb-2">Packages </h1>
                </div>
            </center>

            <div className=" row">
                <div className="col-md-6">
                    <div className=" mx-5 m-2 border-dark border-4"
                         style={{width: '48rem', left: '16rem'}}>
                        <input type="text" className="form-control border-3 border-dark" id="formGroupExampleInput"
                               placeholder="Example input"></input>
                    </div>
                </div>


                <div className="col-md-6">
                    <div className="dropdown position-relative mx-5 m-2" style={{left: '16rem'}}>
                        <select className="btn btn-dark dropdown-toggle" type="button" id="Filter"
                                data-bs-toggle="dropdown">
                            <option value="All">All</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Puperty">Puperty</option>
                            <option value="Gettogether">Get together</option>
                            <option value="Housewarming">House warming</option>
                            <option value="PrizeGiving">Prize Giving</option>
                        </select>
                    </div>
                </div>

            </div>



            <section className="pt-6 pb-5">
                <div className=" container ">
                    <div className="row">
                        <div className="col-12">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            {/*Pupertry*/}
                                            {

                                                packagesDetails !== null &&

                                                packagesDetails.map(
                                                    (packageDetails) => (
                                                        <div className="col-md-4 mb-3">
                                                            <div className="card border-dark border-5 rounded-3">
                                                                <center><img className="w-50 p-3 pb-0"
                                                                             src={getPicture(packageDetails.name)}></img>
                                                                </center>
                                                                <div className="card-body">
                                                                    <div className="card-body">
                                                                        <p className="card-text">
                                                                            <h2 className="text-center pb-4">{packageDetails.name}</h2>
                                                                            <center>
                                                                                <h5>{packageDetails.photographer} Photographers</h5>
                                                                                <h5>{packageDetails.videographer} Videographers</h5>
                                                                                <h5>{packageDetails.pages} pages {packageDetails.frame} AlbumGlass
                                                                                    top wood</h5>
                                                                                {packageDetails.signatureFrame &&
                                                                                    <h5>1 Signature frame</h5>}
                                                                                <h5>1 {packageDetails.frame} frame</h5>
                                                                                {(packageDetails.additional !== '' || packageDetails.additional !== null) &&
                                                                                    <h5>packageDetails.additional</h5>}
                                                                                <h5>{packageDetails.extraPagePrice} per
                                                                                    extra page</h5>
                                                                                <h5> album desgin
                                                                                    : {packageDetails.albumDesign}  </h5>
                                                                                <h5> OutShoot Type
                                                                                    : {packageDetails.outShootType}  </h5>
                                                                            </center>
                                                                            <h5>&nbsp;</h5>
                                                                            <h5>&nbsp;</h5>
                                                                            <h5>&nbsp;</h5>
                                                                        </p>
                                                                        <center><h5>Total payment:</h5></center>
                                                                    </div>
                                                                    <div className="card-footer bg-dark text-center">
                                                                        <small className="text-muted"><h5
                                                                            className="text-light">Rs. {packageDetails.totalPayment}</h5>
                                                                        </small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                )
                                            }

                                            {/*// <div className="col-md-4 mb-3">*/}
                                            {/*//     <div className="card border-dark border-5 rounded-3">*/}
                                            {/*//         <center><img className="w-50 p-3 pb-0" src={goldPhoto}></img></center>*/}
                                            {/*//         <div className="card-body">*/}
                                            {/*//         <div className="card-body">*/}
                                            {/*//             <p className="card-text">*/}
                                            {/*//                 <h2 className="text-center pb-4">Gold Package</h2>*/}
                                            {/*//                 <center>*/}
                                            {/*//                     <h5>2 Photographers</h5>*/}
                                            {/*//                     <h5>2 Videographers</h5>*/}
                                            {/*//                     <h5>80 pages 12X30 AlbumGlass top wood</h5>*/}
                                            {/*//                     <h5>20	pages 8X24 Preshoot album</h5>*/}
                                            {/*//                     <h5>1 Signature frame</h5>*/}
                                            {/*//                     <h5>100	Thank you cards</h5>*/}
                                            {/*//                     <h5>1 12x18 frame</h5>*/}
                                            {/*//                     <h5>2 Blu-rays</h5>*/}
                                            {/*//                     <h5>2 DVD's</h5>*/}
                                            {/*//                     <h5>1 Pen drive</h5>*/}
                                            {/*//                 </center>*/}
                                            {/*//             </p>*/}
                                            {/*//             <center><h5>Total payment:</h5></center>*/}
                                            {/*//         </div>*/}
                                            {/*//             <div className="card-footer bg-dark text-center" >*/}
                                            {/*//                 <small className="text-muted"><h5 className="text-light">Rs. 135,000.00</h5></small>*/}
                                            {/*//             </div>*/}
                                            {/*//     </div>*/}
                                            {/*//     </div>*/}
                                            {/*// </div>*/}

                                            {/*// <div className="col-md-4 mb-3">*/}
                                            {/*//     <div className="card border-dark border-5 rounded-3">*/}
                                            {/*//         <center><img className="w-50 p-3 pb-0" src={diamondPhoto}></img></center>*/}
                                            {/*//         <div className="card-body">*/}
                                            {/*//         <div className="card-body">*/}
                                            {/*//             <p className="card-text">*/}
                                            {/*//                 <h2 className="text-center pb-4">Dimand Package</h2>*/}
                                            {/*//                 <center>*/}
                                            {/*//                     <h5>2 Photographers</h5>*/}
                                            {/*//                     <h5>2 Videographers</h5>*/}
                                            {/*//                     <h5>120 pages 12X30 AlbumGlass top wood</h5>*/}
                                            {/*//                     <h5>40	pages 8X24 Preshoot album</h5>*/}
                                            {/*//                     <h5>1 Signature frame</h5>*/}
                                            {/*//                     <h5>150	Thank you cards</h5>*/}
                                            {/*//                     <h5>2 12x18 frame</h5>*/}
                                            {/*//                     <h5>2 Blu-rays</h5>*/}
                                            {/*//                     <h5>2 DVD's</h5>*/}
                                            {/*//                     <h5>1 Pen drive</h5>*/}
                                            {/*//                 </center>*/}
                                            {/*//*/}
                                            {/*//             </p>*/}
                                            {/*//             <center><h5>Total payment:</h5></center>*/}
                                            {/*//         </div>*/}
                                            {/*//             <div className="card-footer bg-dark text-center rounded-3" >*/}
                                            {/*//                 <small className="text-muted"><h5 className="text-light">Rs. 225,000.00</h5></small>*/}
                                            {/*//             </div>*/}
                                            {/*//     </div>*/}
                                            {/*//     </div>*/}
                                            {/*// </div>*/}

                                            {/*// <div className="col-md-4 mb-3">*/}
                                            {/*//     <div className="card border-dark border-5 rounded-3">*/}
                                            {/*//         <center><img className="w-50 p-3 pb-0"  src={platinumPhoto}></img></center>*/}
                                            {/*//         <div className="card-body">*/}
                                            {/*//             <div className="card-body">*/}
                                            {/*//                 <p className="card-text">*/}
                                            {/*//                     <h2 className="text-center pb-4">Plantinum Package</h2>*/}
                                            {/*//                     <center>*/}
                                            {/*//                         <h5>2 Photographers</h5>*/}
                                            {/*//                         <h5>2 Videographers</h5>*/}
                                            {/*//                         <h5>150 pages 12X30 AlbumGlass top wood</h5>*/}
                                            {/*//                         <h5>50	pages 8X24 Preshoot album</h5>*/}
                                            {/*//                         <h5>1 Signature frame</h5>*/}
                                            {/*//                         <h5>150	Thank you cards</h5>*/}
                                            {/*//                         <h5>2 12x18 frame</h5>*/}
                                            {/*//                         <h5>2 Blu-rays</h5>*/}
                                            {/*//                         <h5>2 DVD's</h5>*/}
                                            {/*//                         <h5>1 Pen drive</h5>*/}
                                            {/*//                     </center>*/}
                                            {/*//                 </p>*/}
                                            {/*//                 <center><h5>Total payment:</h5></center>*/}
                                            {/*//             </div>*/}
                                            {/*//             <div className="card-footer bg-dark text-center rounded-3" >*/}
                                            {/*//                 <small className="text-muted"><h5 className="text-light">Rs. 300,000.00</h5></small>*/}
                                            {/*//             </div>*/}
                                            {/*//         </div>*/}
                                            {/*//     </div>*/}
                                            {/*// </div>*/}
                                            {/*// /!*Wedding*!/*/}
                                            {/*// <div className="col-md-4 mb-3">*/}
                                            {/*//     <div className="card border-dark border-5 rounded-3">*/}
                                            {/*//         <center><img className="w-50 p-3 pb-0"   src={sliverPhoto}/></center>*/}
                                            {/*//         <div className="card-body">*/}
                                            {/*//             <div className="card-body">*/}
                                            {/*//                 <p className="card-text">*/}
                                            {/*//                     <h2 className="text-center pb-4">Silver Package</h2>*/}
                                            {/*//                     <center>*/}
                                            {/*//                         <h5>70page album</h5>*/}
                                            {/*//                         <h5>Out Shoot</h5>*/}
                                            {/*//                         <h5>Couple Frame</h5>*/}
                                            {/*//                         <h5>Signature Board</h5>*/}
                                            {/*//                         <h5>Save the Data photo</h5>*/}
                                            {/*//                         <h5>Additional per sheet 2500</h5>*/}
                                            {/*//                         <h5>&nbsp;</h5>*/}
                                            {/*//                     </center>*/}
                                            {/*//                     <h5>&nbsp;</h5>*/}
                                            {/*//                     <h5>&nbsp;</h5>*/}
                                            {/*//                     <h5>&nbsp;</h5>*/}
                                            {/*//                 </p>*/}
                                            {/*//                 <br/>*/}
                                            {/*//                 <center><h5>Total payment:</h5></center>*/}
                                            {/*//             </div>*/}
                                            {/*//             <div className="card-footer bg-dark text-center rounded-3" >*/}
                                            {/*//                 <small className="text-muted"><h5 className="text-light">Rs. 125,000.00</h5></small>*/}
                                            {/*//             </div>*/}
                                            {/*//         </div>*/}
                                            {/*//     </div>*/}
                                            {/*// </div>*/}

                                            {/*// <div className="col-md-4 mb-3">*/}
                                            {/*//     <div className="card border-dark border-5 rounded-3">*/}
                                            {/*//         <center><img className="w-50 p-3 pb-0"  src={goldPhoto}></img></center>*/}
                                            {/*//         <div className="card-body">*/}
                                            {/*//             <div className="card-body">*/}
                                            {/*//                 <p className="card-text">*/}
                                            {/*//                     <h2 className="text-center pb-4">Gold Package</h2>*/}
                                            {/*//                     <center>*/}
                                            {/*//                         <h5>70page album</h5>*/}
                                            {/*//                         <h5>Out Shoot</h5>*/}
                                            {/*//                         <h5>Couple Frame(16*24)</h5>*/}
                                            {/*//                         <h5>Signature Board</h5>*/}
                                            {/*//                         <h5>highlights photo</h5>*/}
                                            {/*//                         <h5>Save the Data(video or Photo)</h5>*/}
                                            {/*//                         <h5>Additional per sheet 2500</h5>*/}
                                            {/*//                     </center>*/}
                                            {/*//                     <h5>&nbsp;</h5>*/}
                                            {/*//                     <h5>&nbsp;</h5>*/}
                                            {/*//                     <h5>&nbsp;</h5>*/}
                                            {/*//                 </p>*/}
                                            {/*//                 <br/>*/}
                                            {/*//                 <center><h5>Total payment:</h5></center>*/}
                                            {/*//             </div>*/}
                                            {/*//             <div className="card-footer bg-dark text-center rounded-3" >*/}
                                            {/*//                 <small className="text-muted"><h5 className="text-light">Rs. 135,000.00</h5></small>*/}
                                            {/*//             </div>*/}
                                            {/*//         </div>*/}
                                            {/*//     </div>*/}
                                            {/*// </div>*/}

                                            {/*// <div className="col-md-4 mb-3">*/}
                                            {/*//     <div className="card border-dark border-5 rounded-3">*/}
                                            {/*//         <center><img className="w-50 p-3 pb-0"  src={diamondPhoto}></img></center>*/}
                                            {/*//         <div className="card-body">*/}
                                            {/*//             <div className="card-body">*/}
                                            {/*//                 <p className="card-text">*/}
                                            {/*//                     <h2 className="text-center pb-4">Dimand Package</h2>*/}
                                            {/*//                     <center>*/}
                                            {/*//                         <h5>70page album</h5>*/}
                                            {/*//                         <h5>Out Shoot</h5>*/}
                                            {/*//                         <h5>Couple Frame(16*24)</h5>*/}
                                            {/*//                         <h5>Signature Board</h5>*/}
                                            {/*//                         <h5>highlights photo</h5>*/}
                                            {/*//                         <h5>Save the Data(video or Photo)</h5>*/}
                                            {/*//                         <h5>Additional per sheet 2500</h5>*/}
                                            {/*//                     </center>*/}
                                            {/*//                 </p>*/}
                                            {/*//                 <br/>*/}
                                            {/*//                 <center><h5>Total payment:</h5></center>*/}
                                            {/*//             </div>*/}
                                            {/*//             <div className="card-footer bg-dark text-center rounded-3" >*/}
                                            {/*//                 <small className="text-muted"><h5 className="text-light">Rs. 225,000.00</h5></small>*/}
                                            {/*//             </div>*/}
                                            {/*//         </div>*/}
                                            {/*//     </div>*/}
                                            {/*// </div>*/}

                                            {/*// <div className="col-md-4 mb-3">*/}
                                            {/*//     <div className="card border-dark border-5 rounded-3">*/}
                                            {/*//         <center><img className="w-50 p-3 pb-0"  src={platinumPhoto}></img></center>*/}
                                            {/*//         <div className="card-body">*/}
                                            {/*//             <div className="card-body">*/}
                                            {/*//                 <p className="card-text">*/}
                                            {/*//                     <h2 className="text-center pb-4">Plantinum Package</h2>*/}
                                            {/*//                     <center>*/}
                                            {/*//                         <h5>70page album</h5>*/}
                                            {/*//                         <h5>Out Shoot</h5>*/}
                                            {/*//                         <h5>Couple Frame(16*24)</h5>*/}
                                            {/*//                         <h5>Signature Board</h5>*/}
                                            {/*//                         <h5>highlights photo</h5>*/}
                                            {/*//                         <h5>Save the Data(video or Photo)</h5>*/}
                                            {/*//                         <h5>Additional per sheet 2500</h5>*/}
                                            {/*//                     </center>*/}
                                            {/*//                 </p>*/}
                                            {/*//                 <br/>*/}
                                            {/*//                 <center><h5>Total payment:</h5></center>*/}
                                            {/*//             </div>*/}
                                            {/*//             <div className="card-footer bg-dark text-center rounded-3 " >*/}
                                            {/*//                 <small className="text-muted"><h5 className="text-light">Rs. 300,000.00</h5></small>*/}
                                            {/*//             </div>*/}
                                            {/*//         </div>*/}
                                            {/*//     </div>*/}
                                            {/*// </div>*/}
                                            {/*// /!*Birethday*!/*/}
                                            {/*// <div className="col-md-4 mb-3">*/}
                                            {/*//     <div className="card border-dark border-5 rounded-3">*/}
                                            {/*//         <center><img className="w-50 p-3 pb-0" src={sliverPhoto}></img></center>*/}
                                            {/*//         <div className="card-body">*/}
                                            {/*//             <div className="card-body ">*/}
                                            {/*//                 <p className="card-text ">*/}
                                            {/*//                     <h2 className="text-center pb-4">Silver Package</h2>*/}
                                            {/*//                     <center>*/}
                                            {/*//                         <h5>60minuts Session</h5>*/}
                                            {/*//                         <h5>for only current location</h5>*/}
                                            {/*//                         <h5>outfit changes</h5>*/}
                                            {/*//                         <h5>40 Images album</h5>*/}
                                            {/*//                         <h5>printed frame(4*6)</h5>*/}
                                            {/*//                         <h5>Additional per sheet 2500</h5>*/}
                                            {/*//                         <h5>&nbsp;</h5>*/}
                                            {/*//*/}
                                            {/*//                     </center>*/}
                                            {/*//                 </p>*/}
                                            {/*//                 <br/>*/}
                                            {/*//                 <center><h5>Total payment:</h5></center>*/}
                                            {/*//             </div>*/}
                                            {/*//             <div className="card-footer bg-dark text-center rounded-3" >*/}
                                            {/*//                 <small className="text-muted"><h5 className="text-light">Rs. 125,000.00</h5></small>*/}
                                            {/*//             </div>*/}
                                            {/*//         </div>*/}
                                            {/*//     </div>*/}
                                            {/*// </div>*/}

                                            {/*// <div className="col-md-4 mb-3">*/}
                                            {/*//     <div className="card border-dark border-5 rounded-3">*/}
                                            {/*//         <center><img className="w-50 p-3 pb-0" src={goldPhoto}></img></center>*/}
                                            {/*//         <div className="card-body">*/}
                                            {/*//             <div className="card-body">*/}
                                            {/*//                 <p className="card-text">*/}
                                            {/*//                     <h2 className="text-center pb-4">Gold Package</h2>*/}
                                            {/*//                     <center>*/}
                                            {/*//                         <h5>60minuts Session</h5>*/}
                                            {/*//                         <h5>for only current location</h5>*/}
                                            {/*//                         <h5>outfit changes</h5>*/}
                                            {/*//                         <h5>40 Images album</h5>*/}
                                            {/*//                         <h5>printed frame(4*6)</h5>*/}
                                            {/*//                         <h5>Additional per sheet 2500</h5>*/}
                                            {/*//                         <h5>&nbsp;</h5>*/}
                                            {/*//                         <h5>&nbsp;</h5>*/}
                                            {/*//                     </center>*/}
                                            {/*//                 </p>*/}
                                            {/*//                 <br/>*/}
                                            {/*//                 <center><h5>Total payment:</h5></center>*/}
                                            {/*//             </div>*/}
                                            {/*//             <div className="card-footer bg-dark text-center rounded-3" >*/}
                                            {/*//                 <small className="text-muted"><h5 className="text-light">Rs. 135,000.00</h5></small>*/}
                                            {/*//             </div>*/}
                                            {/*//         </div>*/}
                                            {/*//     </div>*/}
                                            {/*// </div>*/}
                                            {/*//*/}
                                            {/*// <div className="col-md-4 mb-3">*/}
                                            {/*//     <div className="card border-dark border-5 rounded-3">*/}
                                            {/*//         <center><img className="w-50 p-3 pb-0" src={diamondPhoto}></img></center>*/}
                                            {/*//         <div className="card-body">*/}
                                            {/*//             <div className="card-body">*/}
                                            {/*//                 <p className="card-text">*/}
                                            {/*//                     <h2 className="text-center pb-4">Dimand Package</h2>*/}
                                            {/*//                     <center>*/}
                                            {/*//                         <h5>60minuts Session</h5>*/}
                                            {/*//                         <h5>for only current location</h5>*/}
                                            {/*//                         <h5>outfit changes</h5>*/}
                                            {/*//                         <h5>40 Images album</h5>*/}
                                            {/*//                         <h5>printed frame(4*6)</h5>*/}
                                            {/*//                         <h5>DVD slideshow</h5>*/}
                                            {/*//                         <h5>out door shot(UnLimited hours)</h5>*/}
                                            {/*//                         <h5>calender</h5>*/}
                                            {/*//                     </center>*/}
                                            {/*//                 </p>*/}
                                            {/*//                 <br/>*/}
                                            {/*//                 <center><h5>Total payment:</h5></center>*/}
                                            {/*//             </div>*/}
                                            {/*//             <div className="card-footer bg-dark text-center rounded-3" >*/}
                                            {/*//                 <small className="text-muted"><h5 className="text-light">Rs. 225,000.00</h5></small>*/}
                                            {/*//             </div>*/}
                                            {/*//         </div>*/}
                                            {/*//     </div>*/}
                                            {/*// </div>*/}
                                            {/*//*/}
                                            {/*// <div className="col-md-4 mb-3">*/}
                                            {/*//     <div className="card border-dark border-5 rounded-3">*/}
                                            {/*//         <center><img className="w-50 p-3 pb-0" src={platinumPhoto}></img></center>*/}
                                            {/*//         <div className="card-body">*/}
                                            {/*//             <div className="card-body">*/}
                                            {/*//                 <p className="card-text">*/}
                                            {/*//                     <h2 className="text-center pb-4">Plantinum Package</h2>*/}
                                            {/*//                     <center>*/}
                                            {/*//                         <h5>60minuts Session</h5>*/}
                                            {/*//                         <h5>for only current location</h5>*/}
                                            {/*//                         <h5>outfit changes</h5>*/}
                                            {/*//                         <h5>40 Images album</h5>*/}
                                            {/*//                         <h5>printed frame(4*6)</h5>*/}
                                            {/*//                         <h5>DVD slideshow</h5>*/}
                                            {/*//                         <h5>out door shot(UnLimited hours)</h5>*/}
                                            {/*//                         <h5>calender</h5>*/}
                                            {/*//                     </center>*/}
                                            {/*//                 </p>*/}
                                            {/*//                 <br/>*/}
                                            {/*//                 <center><h5>Total payment:</h5></center>*/}
                                            {/*//             </div>*/}
                                            {/*//             <div className="card-footer bg-dark text-center rounded-3" >*/}
                                            {/*//                 <small className="text-muted"><h5 className="text-light">Rs. 300,000.00</h5></small>*/}
                                            {/*//             </div>*/}
                                            {/*//         </div>*/}
                                            {/*//     </div>*/}
                                            {/*// </div>*/}



                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>





        </div>

    )

}




export default Vieweventdetailsforadmin