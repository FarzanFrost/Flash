import React from 'react'

const ViewPackages = () => {

    return (

        <div className="container mt-3">
            <div className="package">
                <div className="package__item">
                    <div className="package__header">
                        <div className="package__name">Free User</div>
                    </div>
                    <div className="package__body">
                        <div className="package__price-container">
                            <div className="package__price">HK$ 0.00</div>
                        </div>
                        <ul>
                            <li>User Account (1)</li>
                            <li>Startup filter and list view</li>
                            <li>Investor filter and list view</li>
                        </ul>
                    </div>
                    <div className="package__footer">
                        <button>Get Started</button>
                    </div>
                </div>
                <div className="package__item">
                    <div className="package__header">
                        <div className="package__name">Became a Startup</div>
                    </div>
                    <div className="package__body">
                        <div className="package__price-container">
                            <div className="package__price package__price--sm package__price--monthly">HK$ 1,000.00
                            </div>
                            <div className="package__price package__price--sm package__price--yearly">HK$ 12,000.00
                            </div>
                        </div>
                        <ul>
                            <li>Premium User Account Dashboard</li>
                            <li>Individual Startup profile page</li>
                            <li>Startup filter and list view</li>
                            <li>Investor filter and list view</li>
                            <li>Video Shooting Promotion</li>
                            <li>Chatroom</li>
                            <li>View Individual profile pages</li>
                            <li>Personalize newsletter recommendation</li>
                        </ul>
                    </div>
                    <div className="package__footer">
                        <button>Get Started</button>
                    </div>
                </div>
                <div className="package__item">
                    <div className="package__header">
                        <div className="package__name">Became an Investor</div>
                    </div>
                    <div className="package__body">
                        <div className="package__price-container package__price-container--column">
                            <div className="package__column">
                                <div className="package__column-title">Individual</div>
                                <div className="package__column-content">Quarterly</div>
                                <div className="package__column-price package__column-price--bb">HK$ 300.00</div>
                                <div className="package__column-content">Yearly</div>
                                <div className="package__column-price">HK$ 1,000.00</div>
                            </div>
                            <div className="package__column package__column--2">
                                <div className="package__column-title">Institutional</div>
                                <div className="package__column-content">Quarterly</div>
                                <div className="package__column-price package__column-price--bb">HK$ 1,200.00</div>
                                <div className="package__column-content">Yearly</div>
                                <div className="package__column-price">HK$ 3,000.00</div>
                            </div>
                        </div>

                        <ul>
                            <li>Premium User Account Dashboard</li>
                            <li className="package__price--ins-yearly">3 Premium User AccountDashboard</li>
                            <li>Individual Investor profile page</li>
                            <li>Startup filter and list view</li>
                            <li>Investor filter and list view</li>
                            <li>Chatroom</li>
                            <li>View Individual profile pages</li>
                            <li>Personalize newsletter recommendation</li>
                        </ul>
                    </div>
                    <div className="package__footer">
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default ViewPackages