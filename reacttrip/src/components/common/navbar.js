import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <div className="pt-14">
            <Navbar bg="light" expand="lg" fixed="top" >
                <Container>
                    <Navbar.Brand href="#home">ReacTrip</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;