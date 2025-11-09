import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../styles/nav.css';


export const NavMenu = () => {
  return (
    <div className='nav1'>
        <Navbar className='nav' data-bs-theme="dark" sticky="top" xl>
        <Container>
          <Navbar.Brand href="#home">Flexify</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#getCoach">Get a coach</Nav.Link>
            <Nav.Link href="#flexifyExpert">Talk to a flexify expert</Nav.Link>
            <Nav.Link href="#corporateWellness">Corporate wellness</Nav.Link>
            <Nav.Link href="#signup">Signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
export default NavMenu