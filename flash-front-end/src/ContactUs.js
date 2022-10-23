import React from 'react';
import OldHeader from "./oldHeader";
import OldFooter from "./oldFooter";

const ContactUs = () => {
    return (
        <div>
            <OldHeader />

            {/*Start of form*/}
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

                            <button type="submit" className="btn bg-dark text-white d-grid gap-2 col-2 mx-auto my-3 p-2">Submit</button>
                        </form>

                    </div>
                </div>
            </section>
            {/*End of form*/}
<OldFooter />
        </div>
    )
}

export default ContactUs