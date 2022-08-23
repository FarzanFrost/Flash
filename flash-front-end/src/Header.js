import React from 'react';
import FlashLogo from './Images/FlashLogo.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




const Header = () => {
    return (

        // <div className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        //
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        //             aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse  " id="navbarNavAltMarkup">
        //         <div className="navbar-nav">
        //             <button className="btn btn-dark p-4">
        //                 <i className="bi bi-list"></i>
        //             </button>
        //             <img src={FlashLogo} alt="logo" height="80px" width="80px"/>
        //             <a className="nav-item nav-link active  m-3 pb-2 pe-5 ps-lg-5 " href="#" >Home <span className="sr-only"></span></a>
        //             <a className="nav-item nav-link  m-3 pb-2 pe-5 ps-5" href="#">Book Now</a>
        //             <a className="nav-item nav-link  m-3 pb-2 pe-5 ps-5  " style={{marginRight:'40rem'}} href="#">Sign Out</a>
        //
        //
        //     </div>
        // </div>
        // </div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>

                <button className="btn btn-dark p-4">
                    <i className="bi bi-list"></i>
                </button>
                <Navbar.Brand href="#home">
                    <img src={FlashLogo} alt="logo" height="70px" width="70px"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/*<Nav.Link href="#Home">Home</Nav.Link>*/}


                    </Nav>
                    <Nav>
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#SignOut">
                            SignOut
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header