import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './navbar.css'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

class NavBarComp extends Component {
  render() {
    const showButton = (status) => {
      if (status) {
        return <Button onClick={this.props.handleClick} href="/" variant="outline-info" className="mr-sm-2">Logout</Button>
      } else {
        return <Button href="/login" variant="outline-info" className="mr-sm-2">Login</Button>
      }
    }

    return (
      <div className="margin-bottom">
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