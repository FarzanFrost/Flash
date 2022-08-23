import React from 'react'
import employee from './Images/employee logo.png'
import client from './Images/client logo.jpg'
import event from './Images/event logo.png'
import income from './Images/income logo.jpg'

const ManagerDashboard = () =>{
    return(
        <div className="h-100">

            <div className="container-fluid py-4 bg-info">

                <div className="btn-toolbar mb-2 mb-2 justify-content-md-end rounded-2">

                    <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle btn-dark text-white">
                        This week
                    </button>

                </div>

                <div className="row">  {/*start the row*/}

                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4"> {/*start one container*/}

                        <div className="card">

                            <div className="card-body p-3">

                                <div className="row bg-body">

                                    <div className="col-8">

                                        <div className="numbers">

                                            <p className="text-sm mb-0 text-uppercase font-weight-bold">
                                                Total Employees
                                            </p>
                                            <h5 className="font-weight-bolder mb-3">
                                                255
                                            </h5>

                                        </div>

                                    </div>

                                    <div className="col-3 text-end">

                                        <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">

                                            <img src={employee} className="img-fluid rounded-circle h-100" aria-hidden="true"/>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4"> {/*start one container*/}

                        <div className="card">

                            <div className="card-body p-3">

                                <div className="row bg-body">

                                    <div className="col-8">

                                        <div className="numbers">

                                            <p className="text-sm mb-0 text-uppercase font-weight-bold">
                                                Total Events
                                            </p>
                                            <h5 className="font-weight-bolder mb-3">
                                                182
                                            </h5>

                                        </div>

                                    </div>

                                    <div className="col-3 text-end">

                                        <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">

                                            <img src={ event } className="img-fluid rounded-circle h-100" aria-hidden="true"/>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4"> {/*start one container*/}

                        <div className="card">

                            <div className="card-body p-3">

                                <div className="row bg-body">

                                    <div className="col-8">

                                        <div className="numbers">

                                            <p className="text-sm mb-0 text-uppercase font-weight-bold">
                                                Total Clients
                                            </p>
                                            <h5 className="font-weight-bolder mb-3">
                                                343
                                            </h5>

                                        </div>

                                    </div>

                                    <div className="col-3 text-end">

                                        <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">

                                            <img src={client} className="img-fluid rounded-circle h-100" aria-hidden="true"/>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4"> {/*start one container*/}

                        <div className="card">

                            <div className="card-body p-3">

                                <div className="row bg-body">

                                    <div className="col-8">

                                        <div className="numbers">

                                            <p className="text-sm mb-0 text-uppercase font-weight-bold">
                                                Total Income
                                            </p>
                                            <h5 className="font-weight-bolder">
                                                $145,000
                                            </h5>

                                        </div>

                                    </div>

                                    <div className="col-3 text-end">

                                        <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">

                                            <img src={income} className="img-fluid rounded-circle h-100" aria-hidden="true"/>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="mt-4">

                    <div className="mb-lg-0 mb-4">

                        <div className="card z-index-2 h-100">

                            <div className="card-header pb-0 pt-3 bg-transparent">

                                <h4 className="text-capitalize">Overview</h4>

                            </div>

                            <div className="card-body p-3">

                                <div className="chart">

                                    <canvas id="chart-line" className="my-4 w-100 chartjs-render-monitor"
                                            style={{height: "375px", width: "669px", display: "block", boxSizing: "border-box" }}/>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div> {/*end*/}

        </div>
    )
}

export default ManagerDashboard