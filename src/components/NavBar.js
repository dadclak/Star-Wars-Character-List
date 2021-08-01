import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>War Stars</Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>All characters</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/favorites">
                        <Nav.Link>Favorites</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;