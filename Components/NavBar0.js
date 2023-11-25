import React from 'react'
import { Col, Container, Nav, Navbar, NavbarBrand, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'

function NavBar0() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Navbar bg='danger' expand='lg'>
                            <Container>
                                <NavbarBrand>
                                    Logo
                                    &nbsp;
                                    <img src={require('../images/404Notfound.jpg')} alt="" height="25px" width='25' className='rounded' />
                                </NavbarBrand>
                                <Navbar.Toggle aria-controls='nav-bar' />
                                <Navbar.Collapse id='nav-bar'>

                                    <Nav className='text-white me-auto fw-bold'>
                                        <Nav.Link as={NavLink} to="/"> Home </Nav.Link>
                                        <Nav.Link as={NavLink} to="/formik"> FormicForm </Nav.Link>
                                        <Nav.Link as={NavLink} to="/formikcomp"> FormicComp </Nav.Link>
                                        <Nav.Link as={NavLink} to="/bootstrap"> BootStrap </Nav.Link>

                                        <Nav.Link as={NavLink} to="/hook"> Hook </Nav.Link>
                                        <Nav.Link as={NavLink} to="/fetch"> Fetch </Nav.Link>
                                        
                                    </Nav>
                                </Navbar.Collapse>

                            </Container>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NavBar0
