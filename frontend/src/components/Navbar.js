import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './navbar.css'
import Nav from 'react-bootstrap/Nav'
import axios from 'axios'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class NavBarComp extends Component {
  render() {
    const showButton = (status) => {
      if (status) {
        axios.delete('http://localhost:3001/logout', {withCredentials: true})
        .then(response => {
          this.props.handleLogout()
          this.props.history.push('/')
        })
        .catch(error => console.log(error))

        return <Button href="/" variant="outline-info" className="mr-sm-2">Logout</Button>
      } else {
        return <Button href="/login" variant="outline-info" className="mr-sm-2">Login</Button>
      }
    }

    return (
      <div class="margin-bottom">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Budget App</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="signup">Signup</Nav.Link>
          </Nav>
          {
            showButton(this.props.loggedInStatus)
          }
        </Navbar>
      </div>
    )
  }
}

export default NavBarComp;