import  React from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import calender from "./Images/calender.png";
import { useState } from 'react';


const Calender = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className="h-100">

            <div className='container'>

                <div className="pt-4" >

                    <div className="card border-dark border-0 rounded-5 shadow mt-3 mx-5 " style={{backgroundColor: '#d7d7d7'}}>

                        <h2 className="text-center mt-3" >Calender</h2>


                        <img src={ calender } className="img-fluid rounded-3 h-100" alt="Booking"/>


                    </div>
                </div>

            </div>

        </div>



    )

}

export default Calender