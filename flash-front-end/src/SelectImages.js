import React from 'react'

const SelectImages = () => {


    return (

        <div>

            <div className="container-fluid bg-warning">

                lkdsjf;laksjd;flka

            </div>

            <div className="container-fluid">

                <div className="row">

                    <div className="col bg-success">

                        <div className="row p-4">

                            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">

                                <div className="p-1 bg-primary mb-4">

                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                                        className="w-100 shadow-1-strong rounded"
                                        alt="Boat on Calm Water"
                                    />

                                    <div className="form-check mt-1">

                                        <input className="form-check-input" type="checkbox" value=""
                                               id="flexCheckDefault"/>
                                            <label className="form-check-label" htmlFor="flexCheckDefault">

                                                Select Image

                                            </label>

                                    </div>

                                </div>

                                <div className="p-1 bg-primary mb-4">

                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                                        className="w-100 shadow-1-strong rounded mb-4"
                                        alt="Wintry Mountain Landscape"
                                    />

                                    <div className="form-check mt-1">

                                        <input className="form-check-input" type="checkbox" value=""
                                               id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">

                                            Select Image

                                        </label>

                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                                    className="w-100 shadow-1-strong rounded mb-4"
                                    alt="Mountains in the Clouds"
                                />

                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                                    className="w-100 shadow-1-strong rounded mb-4"
                                    alt="Boat on Calm Water"
                                />
                            </div>

                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                                    className="w-100 shadow-1-strong rounded mb-4"
                                    alt="Waves at Sea"
                                />

                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                                    className="w-100 shadow-1-strong rounded mb-4"
                                    alt="Yosemite National Park"
                                />
                            </div>

                        </div>

                    </div>

                    <div className="col bg-danger">

                        Column2

                    </div>

                </div>
            </div>

        </div>

    )

}

export default SelectImages