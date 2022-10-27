import React from 'react'
import employee from './Images/employee logo.png'
import client from './Images/client logo.jpg'
import event from './Images/event logo.png'
import income from './Images/income logo.jpg'
import pic from "./Images/graph.jpg";
import {useEffect, useState} from "react";
import axios from "axios";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from "react-chartjs-2";

const AdminDashboard = () =>{

    const serverLink = 'http://localhost:8080'

    const [totalEmployeeCount , setTotalEmployeeCount] = useState( 0 )
    useEffect( () => {
        axios.get( serverLink + '/adminDashboardEmployeeCount' ).then(
            ( response ) => {
                console.log( response.data )
                setTotalEmployeeCount( response.data )
            }
        ).catch(
            () => { alert( "Error!!! get userCount ") }
        )
    } ,[])

    const [totalEventsCount , setTotalEventsCount] = useState( 0 )
    useEffect( () => {
        axios.get( serverLink + '/adminDashboardEventCount' ).then(
            ( response ) => {
                console.log( response.data )
                setTotalEventsCount( response.data )
            }
        ).catch(
            () => { alert( "Error!!! get userCount ") }
        )
    } ,[])

    const [totalClientsCount , setTotalClientsCount] = useState( 0 )
    useEffect( () => {
        axios.get( serverLink + '/adminDashboardCustomerCount' ).then(
            ( response ) => {
                console.log( response.data )
                setTotalClientsCount( response.data )
            }
        ).catch(
            () => { alert( "Error!!! get userCount ") }
        )
    } ,[])

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    const [ data , setData ] = useState( {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        datasets: [
            {
                label: "First dataset",
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            }/*,
            {
                label: "Second dataset",
                data: [33, 25, 35, 51, 54, 76],
                fill: false,
                borderColor: "#742774"
            }*/
        ]
    } )

    const [ loginDetails , setLoginDetails ] = useState( null )
    useEffect( () => {
        axios.get( serverLink + '/AdminLoginDetails' ).then(
            ( response ) => {

                const details = response.data

                // const z = details.filter( ( detail ) =>  detail.dateTime.split("T")[0].split("-")[1] > '10'  )
                const month1 = details.filter( ( detail ) =>  detail.dateTime.split("T")[0].split("-")[1] === '1'  )
                const month2 = details.filter( ( detail ) =>  detail.dateTime.split("T")[0].split("-")[1] === '2'  )
                const month3 = details.filter( ( detail ) =>  detail.dateTime.split("T")[0].split("-")[1] === '3'  )
                const month4 = details.filter( ( detail ) =>  detail.dateTime.split("T")[0].split("-")[1] === '4'  )
                const month5 = details.filter( ( detail ) =>  detail.dateTime.split("T")[0].split("-")[1] === '5'  )
                const month6 = details.filter( ( detail ) =>  detail.dateTime.split("T")[0].split("-")[1] === '6'  )
                const month7 = details.filter( ( detail ) =>  detail.dateTime.split("T")[0].split("-")[1] === '7'  )
                const month8 = details.filter( ( detail ) =>  detail.dateTime.split("T")[0].split("-")[1] === '8'  )
                const month9 = details.filter( ( detail ) =>  detail.dateTime.split("T")[0].split("-")[1] === '9'  )
                const month10 = details.filter( ( detail ) =>  detail.dateTime.split("T")[0].split("-")[1] === '10'  )
                const month11 = details.filter( ( detail ) =>  detail.dateTime.split("T")[0].split("-")[1] === '11'  )
                const month12 = details.filter( ( detail ) =>  detail.dateTime.split("T")[0].split("-")[1] === '12'  )

                const arr = [ month1.length ,month2.length ,month3.length ,month4.length ,month5.length ,month6.length ,month7.length ,month8.length ,month9.length ,month10.length ,month11.length ,month12.length  ]

                setLoginDetails( response.data )

                setData( {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
                    datasets: [
                        {
                            label: "Users",
                            data: arr,
                            fill: true,
                            backgroundColor: "rgba(75,192,192,0.2)",
                            borderColor: "rgba(75,192,192,1)"
                        }/*,
            {
                label: "Second dataset",
                data: [33, 25, 35, 51, 54, 76],
                fill: false,
                borderColor: "#742774"
            }*/
                    ]
                } )
                console.log(  "pakki" ,  response.data )
                // console.log(  "pakki2" ,  z )

            }
        ).catch(
            () => { alert( "Error!!! employee details ") }
        )
    } ,[])

    return(
        <div className="h-100">

            <div className="container-fluid py-4">

                <div className="btn-toolbar mb-2 mb-2 justify-content-md-end rounded-2">

                    <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle btn-dark text-white">
                        This week
                    </button>

                </div>

                <div className="row">  {/*start the row*/}

                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4 "> {/*start one container*/}

                        <div className="card shadow rounded-3">

                            <div className="card-body p-3">

                                <div className="row bg-body">

                                    <div className="col-8">

                                        <div className="numbers">

                                            <p className="text-sm mb-0 text-uppercase font-weight-bold">
                                                Total Employees
                                            </p>
                                            <h5 className="font-weight-bolder mb-3">
                                                { totalEmployeeCount }
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

                        <div className="card shadow rounded-3">

                            <div className="card-body p-3">

                                <div className="row bg-body">

                                    <div className="col-8">

                                        <div className="numbers">

                                            <p className="text-sm mb-0 text-uppercase font-weight-bold">
                                                Total Events
                                            </p>
                                            <h5 className="font-weight-bolder mb-3">
                                                { totalEventsCount }
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

                        <div className="card shadow rounded-3">

                            <div className="card-body p-3">

                                <div className="row bg-body">

                                    <div className="col-8">

                                        <div className="numbers">

                                            <p className="text-sm mb-0 text-uppercase font-weight-bold">
                                                Total Clients
                                            </p>
                                            <h5 className="font-weight-bolder mb-3">
                                                { totalClientsCount }
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

                        <div className="card shadow rounded-3">

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

                                    {/*<canvas id="chart-line" className="my-4 w-100 chartjs-render-monitor"*/}
                                    {/*        style={{height: "375px", width: "669px", display: "block", boxSizing: "border-box" }}/>*/}

                                    {/*<img src={ pic } className="img-fluid rounded-3 h-100" alt="Booking"/>*/}
                                    <Line data={data} />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="table-responsive"> {/*table start*/}

                    <table className="table table-striped table-sm text-center">

                        <thead>
                        <tr>
                            <th scope="col">Event</th>
                            <th scope="col">Total Count</th>
                            <th scope="col">Finish Events</th>
                            <th scope="col">Pending Events</th>
                            <th scope="col">Working Employees</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>

                            <td>Wedding</td>
                            <td>27</td>
                            <td>20</td>
                            <td>07</td>
                            <td>56</td>
                        </tr>

                        <tr>
                            <td>Birthday</td>
                            <td>27</td>
                            <td>20</td>
                            <td>07</td>
                            <td>56</td>
                        </tr>

                        <tr>
                            <td>Wedding</td>
                            <td>27</td>
                            <td>20</td>
                            <td>07</td>
                            <td>56</td>
                        </tr>

                        <tr>
                            <td>Get together</td>
                            <td>27</td>
                            <td>20</td>
                            <td>07</td>
                            <td>56</td>
                        </tr>

                        <tr>
                            <td>House warming</td>
                            <td>27</td>
                            <td>20</td>
                            <td>07</td>
                            <td>56</td>
                        </tr>

                        <tr>
                            <td>Prize giving</td>
                            <td>27</td>
                            <td>20</td>
                            <td>07</td>
                            <td>56</td>
                        </tr>
                        </tbody>

                    </table>

                </div>

            </div> {/*end*/}

        </div>
    )
}

export default AdminDashboard