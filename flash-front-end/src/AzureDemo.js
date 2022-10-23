// // azure sample
//
// import React, {useState} from 'react'
// import {Component} from "react";
// import {BlobServiceClient, ContainerClient} from "@azure/storage-blob";
// import {constrainPoint} from "@fullcalendar/react";
// import * as events from "events";
//
// const AzureDemo = async () => {
//
//     this.state = {
//         file: null
//     };
//
//  async uploadFile()
//     {
//         let storageAccountName = 'flashazurestorage';
//         let sasToken = '?sv=2021-06-08&ss=b&srt=sco&sp=rwlaciytfx&se=2022-10-23T13:30:51Z&st=2022-10-23T05:30:51Z&spr=https&sig=dKOa79z%2FagEd8kGG8C2Khja4Ld3ofJph8oxhcO3Tsdg%3D';
//         const blobService = new BlobServiceClient(
//             'https//${storageAccountName}.blob.core.windows.net/?${sasToken}'
//         );
//         //
//         // get Container-full public read access
//         const containerclient = blobService.getContainerClient('myfile');
//         await containerclient.createIfNotExists(
//             {
//                 access: 'container',
//             }
//         );
//
//         //create blockclient for container
//         const blobClient=containerclient.getBlobClient(this.state.file.name);
//
//
//         //detremined from browser with file upload control
//         const options= {blobHTTPHeaders:{blobContentType:this.state.file.type}};
//
//         //upload file
//         await blobClient.uploadBrowserData(this.state.file, options);
//
//     }
//
//
//     return (
//         <div>
//             <p>
//                 <label className="form-label" htmlFor="customFile">Default file input example</label>
//                 <input type="file" className="form-control" onClick={() =>this.uploadFile()} id="customFile"/>
//             </p>
//         </div>
//
//     )
// }
//
// export default AzureDemo