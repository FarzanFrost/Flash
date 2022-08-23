import React, { Component } from 'react';

const calender = () => {

    return (
<div>

    <body>
    <section className="ftco-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 text-center mb-5">
                    <h2 className="heading-section">Calendar #04</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="content w-100">
                        <div className="calendar-container">
                            <div className="calendar">
                                <div className="year-header">
                                    <span className="left-button fa fa-chevron-left" id="prev"> </span>
                                    <span className="year" id="label">2022</span>
                                    <span className="right-button fa fa-chevron-right" id="next"> </span>
                                </div>
                                <table className="months-table w-100">
                                    <tbody>
                                    <tr className="months-row">
                                        <td className="month">Jan</td>
                                        <td className="month">Feb</td>
                                        <td className="month">Mar</td>
                                        <td className="month">Apr</td>
                                        <td className="month">May</td>
                                        <td className="month">Jun</td>
                                        <td className="month">Jul</td>
                                        <td className="month active-month">Aug</td>
                                        <td className="month">Sep</td>
                                        <td className="month">Oct</td>
                                        <td className="month">Nov</td>
                                        <td className="month">Dec</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table className="days-table w-100">
                                    <tbody>
                                    <tr>
                                        <td className="day">Sun</td>
                                        <td className="day">Mon</td>
                                        <td className="day">Tue</td>
                                        <td className="day">Wed</td>
                                        <td className="day">Thu</td>
                                        <td className="day">Fri</td>
                                        <td className="day">Sat</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className="frame">
                                    <table className="dates-table w-100">
                                        <tbody className="tbody">
                                        <tr className="table-row"></tr>
                                        <tr className="table-row">
                                            <td className="table-date nil"></td>
                                            <td className="table-date">1</td>
                                            <td className="table-date">2</td>
                                            <td className="table-date">3</td>
                                            <td className="table-date">4</td>
                                            <td className="table-date">5</td>
                                            <td className="table-date">6</td>
                                        </tr>
                                        <tr className="table-row">
                                            <td className="table-date">7</td>
                                            <td className="table-date">8</td>
                                            <td className="table-date">9</td>
                                            <td className="table-date">10</td>
                                            <td className="table-date">11</td>
                                            <td className="table-date">12</td>
                                            <td className="table-date">13</td>
                                        </tr>
                                        <tr className="table-row">
                                            <td className="table-date">14</td>
                                            <td className="table-date">15</td>
                                            <td className="table-date">16</td>
                                            <td className="table-date">17</td>
                                            <td className="table-date">18</td>
                                            <td className="table-date">19</td>
                                            <td className="table-date">20</td>
                                        </tr>
                                        <tr className="table-row">
                                            <td className="table-date">21</td>
                                            <td className="table-date">22</td>
                                            <td className="table-date">23</td>
                                            <td className="table-date">24</td>
                                            <td className="table-date">25</td>
                                            <td className="table-date event-date active-date">26</td>
                                            <td className="table-date">27</td>
                                        </tr>
                                        <tr className="table-row">
                                            <td className="table-date">28</td>
                                            <td className="table-date">29</td>
                                            <td className="table-date">30</td>
                                            <td className="table-date">31</td>
                                            <td className="table-date nil"></td>
                                            <td className="table-date nil"></td>
                                            <td className="table-date nil"></td>
                                        </tr>
                                        <tr className="table-row">
                                            <td className="table-date nil"></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <button className="button" id="add-button">Add Event</button>
                            </div>
                        </div>
                        {/*<div className="events-container" style="">*/}
                        {/*    <div className="event-card">*/}
                        {/*        <div className="event-name">xa:</div>*/}
                        {/*        <div className="event-count">5 Invited</div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="dialog" id="dialog" style="display: none;">*/}
                        {/*    <h2 className="dialog-header"> Add New Event </h2>*/}
                        {/*    <form className="form" id="form">*/}
                        {/*        <div className="form-container" align="center">*/}
                        {/*            <label className="form-label" id="valueFromMyButton" htmlFor="name">Event*/}
                        {/*                name</label>*/}
                        {/*            <input className="input" type="text" id="name" maxLength="36"></input>*/}
                        {/*                <label className="form-label" id="valueFromMyButton" htmlFor="count">Number of*/}
                        {/*                    people to invite</label>*/}
                        {/*                <input className="input" type="number" id="count" min="0" max="1000000"*/}
                        {/*                       maxLength="7"></input>*/}
                        {/*                    <input type="button" value="Cancel" className="button" id="cancel-button"></input>*/}
                        {/*                        <input type="button" value="OK" className="button button-white"*/}
                        {/*                               id="ok-button"></input>*/}
                        {/*        </div>*/}
                        {/*    </form>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    </section>


    </body>


</div>
    )

}

export default calender