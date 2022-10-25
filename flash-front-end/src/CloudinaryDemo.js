// import React, {useState} from 'react'
// import axios, {Axios} from "axios"
//
//
// const CloudinaryDemo = () => {
//
//     const [imageSelected ,setImageSelected] =useState("" );
//
//     const uploadImage = () => {
//         const formData = new FormData();
//         formData.append("file", imageSelected);
//         formData.append("upload_preset", "lysvcak7");
//         axios.post("https://api.cloudinary.com/v1_1/dctlnle1w", formData
//         ).then((response) => {
//             console.log(response);
//         });
//
//     }
//
//         return (
//             <div>
//                 <input type="file" onChange={(event) => {
//                     setImageSelected(event.target.files[0]);
//                 }}
//                 />
//                 <button className="btn btn-dark px-3 ms-1" onClick={uploadImage}></button>
//             </div>
//
//
//         );
//
//     }
//
// export default CloudinaryDemo

import React, { useState } from 'react'


const CloudinaryDemo = () => {
    const [image, setImage ] = useState("");
    const [ url, setUrl ] = useState("");
    const uploadImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "lysvcak7")
        data.append("cloud_name","dctlnle1w")
        fetch("  https://api.cloudinary.com/v1_1/dctlnle1w/image/upload",{
            method:"post",
            body: data
        })
            .then(resp => resp.json())
            .then(data => {
                setUrl(data.url)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div>
                <input type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
                <button onClick={uploadImage}>Upload</button>
            </div>
            <div>
                <h1>Uploaded image will be displayed here</h1>
                <img src={url}/>
            </div>
        </div>
    )
}
export default CloudinaryDemo;
