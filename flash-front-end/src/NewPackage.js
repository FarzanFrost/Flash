import React, {useState} from 'react'

const newPack = () =>{

}

const NewPackage = () => {
    return (
        <div className="h-100">

            <section className="h-100">

                <div className="container py-5 h-100 bg-dark">

                    <div className="row d-flex justify-content-center align-items-center h-100 bg-info">

                        <div className="row d-flex justify-content-center align-items-center h-100 bg-danger">

                            <div className="row g-0 bg-white">

                                <h1 className="text-center mt-3 pb-5">New Package</h1>

                                <div className="col-lg-5 d-lg-flex d-none bg-primary">

                                </div>

                                <div className="col-lg-7 rounded-3" style={ { backgroundColor : '#d7d7d7' } }>

                                    <form className="container rounded-3 mb-0 bg-opacity-25 p-lg-3 mt-0" style={ { backgroundColor : '#d7d7d7' } }>

                                        <div className="form-group row mt-3 mx-3">
                                            <label className="col-sm-3 col-form-label">Package Name</label>
                                            <div className="col-sm-8">
                                                <input
                                                    // value={ firstName }
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Enter New Package Name"
                                                    // onChange={ (e) => setFirstName( e.target.value )}
                                                    autoFocus
                                                    required
                                                />
                                            </div>

                                        </div>

                                        <div className="form-group row mt-3 mx-3">
                                            <label className="col-sm-3 col-form-label">Event Type</label>
                                            <div className="col-sm-8">
                                                <select className="form-select">
                                                    <option>Wedding</option>
                                                    <option>Birthday</option>
                                                    <option>Purberty</option>
                                                </select>
                                            </div>

                                        </div>

                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    )
}

export default NewPackage