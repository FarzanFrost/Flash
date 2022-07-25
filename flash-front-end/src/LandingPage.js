import React, {useState} from 'react'
import Header from "./Header";
import event from './Images/event.jpg';
import event2 from './Images/event2.jpg';
import event3 from './Images/event3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import FlashLogo from './Images/FlashLogo.png';

const ContactUsForm = () => {
    const [content,setContent] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [subject,setSubject] = useState('')
    const [details,setDetails] = useState('')
}

const LandingPage = () => {
    return (
        <div style={{backgroundColor:"rgba(255,212,181,0.91)"}}>
            <Header />

            <div class="p-5">

                <h2 className="m-3 p-2" style={{textAlign: "Center"}}>Welcome to Studio Flash.</h2>
                <h3 className="m-3 p-2" style={{textAlign: "Center"}}>We are specialized in Wedding photography, Commercial
                    photography, Fashion photography and many more..</h3>

                {/*carousal*/}
                <div id="carouselExampleCaptions" className="carousel slide m-3" data-bs-ride="false">

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner w-10 " >
                        <div className="carousel-item active" >
                            <img src={event} className="img-fluid d-block w-100 p-5"  alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Wedding</h5>
                                    <p>We make your big day memorable</p>
                                </div>
                        </div>

                        <div className="carousel-item">
                            <img src={event2} className="img-fluid d-block w-100 p-5"  alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Get-to-gathers</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                        </div>

                        <div className="carousel-item">
                            <img src={event3} className="img-fluid d-block w-100 p-5"  alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Birthday Party</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/*End of carousal*/}


                <section className="h-100">
                    <div className="container py-5 h-100 ">
                            <div className="card rounded-3 text-black my-lg-5 my-xl-0 py-xl-0 px-5">

                                    <h1 className="text-center mt-3 pb-5">Contact us</h1>

                                        <form className="container rounded mb-0 bg-opacity-25 px-lg-auto me-2 mt-0 " style={{background : "white"}}>
                                            <div className="form-group row mt-3 mx-3 ">
                                                <label htmlFor="inputName3" className="col-sm-2 col-form-label">Your Name:</label>
                                                <div className="col-sm-8">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Enter your name here"
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email :</label>
                                                <div className="col-sm-8">
                                                    <input
                                                        className="form-control"
                                                        type="email"
                                                        placeholder="Enter your Email"
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label htmlFor="inputSubject3" className="col-sm-2 col-form-label">Subject :</label>
                                                <div className="col-sm-8">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Enter the subject"
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group row mt-3 mx-3">
                                                <label htmlFor="inputDetails3" className="col-sm-2 col-form-label">Details :</label>
                                                <div className="col-sm-8">
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Enter the details"
                                                        autoFocus
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <button type="submit" className="btn btn-primary d-grid gap-2 col-2 mx-auto my-3 p-2">Submit</button>
                                        </form>

                                </div>
                            </div>
                </section>
            </div>
        </div>

    )
}

export default LandingPage;