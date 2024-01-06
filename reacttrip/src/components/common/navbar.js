import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import userIcon from './user.png';

const NavigationBar = () => {
    return (
        <div className="pt-14">
            <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
                <Container>
                    <Navbar.Brand href="https://github.com/iven-yao/nextTrip">ReacTrip</Navbar.Brand>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <img
                                src={userIcon}
                                alt="User Icon"
                                width="30"
                                height="30"
                                className="w-10 h-10 rounded-full"
                            />
                        </button>
                        <button data-toggle="collapse" data-target="#navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <Navbar.Collapse id="navbar-sticky">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Nav.Link>
                            <Nav.Link href="#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Nav.Link>
                            <Nav.Link href="#services" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Nav.Link>
                            <Nav.Link href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;