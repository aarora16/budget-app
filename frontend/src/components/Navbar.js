import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './navbar.css'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class NavBarComp extends Component {
  render() {
    return (
      <div class="nav">
        <Navbar className="justify-content-between" bg="dark" variant="dark" >
          <Navbar.Brand>Budget App</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="Login">Login</Nav.Link>
            <Nav.Link href="Signup">Signup</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default NavBarComp;