import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from '../../assets/images/bellz_logo.png';
import { Link } from 'react-router-dom';




export default function MyNavBar(): React.JSX.Element {
    return (
        <>
            <Navbar bg="primary" expand="lg" className="sticky-top">
                <Container fluid>
                    <Navbar.Brand href="#" className="text-light">
                        <img src={Logo} width={200} />

                    </Navbar.Brand>
                    <Navbar.Toggle
                        className="text-light"
                        aria-controls="basic-navbar-nav"
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto text-light">
                            <Nav.Link as={Link} to="/" className="text-light" href="#">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="./about" className="text-light" href="#">
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to="./faq" className="text-light" href="#">
                                Faq
                            </Nav.Link>
                            <Nav.Link as={Link} to="./contact" className="text-light" href="#">
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}