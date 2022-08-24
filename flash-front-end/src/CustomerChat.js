import React, {useState} from 'react'
import FlashLogo from './Images/FlashLogo.png';

const CustomerChat = () =>{
    return(
        <div className="h-100 user-chat w-100 user-chat-show">

            <div className="chat-content d-lg-flex">

                <div className="w-100 overflow-hidden" style={{backgroundColor : '#d7d7d7'}}>

                    <div className="p-4 p-lg-4 bg-primary">{/*top bar start*/}

                        <div className="align-items-center">

                            <div className="bg-dark">

                                <div className="d-flex align-items-center text-white">

                                        <div className="flex-shrink-0 align-self-center">
                                            <img src={FlashLogo} alt="logo" height="50px" width="50px"/>
                                            <span className="user-status bg-success"></span>
                                        </div>

                                        <div className="flex-grow-1 overflow-hidden align-middle">
                                            <h3 className="text-truncate mb-0 font-size-18">Flash Studio</h3>
                                        </div>

                                </div>

                            </div>

                        </div>

                        <hr />

                        <div className="p-3 p-lg-4">{/*top bar start*/}

                            <div className="align-items-center">

                                <div className="text-dark" style={{backgroundColor : '#d7d7d7'}}>

                                    <div className="d-flex align-items-center">

                                        <div>
                                            <ul className="list-unstyled chat-conversation-list">

                                                <li className="chat-list">
                                                    <div className="conversation-list px-3 pt-2">
                                                        {/*<div className="rounded-circle bg-dark text-white col-sm-1 px-3">*/}
                                                        {/*    */}
                                                        {/*</div>*/}

                                                        <div className="user-chat-content rounded-3 bg-white px-3">
                                                            <div className="text-center">
                                                                <p>Good Morning</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="chat-list right justify-content-md-end">
                                                    <div className="conversation-list px-3 pt-2">
                                                        {/*<div className="rounded-circle bg-dark text-white col-sm-1 px-3">*/}
                                                        {/*    */}
                                                        {/*</div>*/}

                                                        <div className="user-chat-content rounded-3 bg-white px-3">
                                                            <div className="text-center">
                                                                <p>Good Morning</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>

                                    </div>

                                </div>

                            </div>
                    </div>   {/*end container*/}

                </div>

            </div>

        </div>
        </div>
    )
}

export default CustomerChat