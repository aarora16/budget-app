import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import './login.css'
import Navbar from '../Navbar.js'
import Alert from 'react-bootstrap/Alert'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      errors: ''
     };
  }

  componentWillMount() {
    return this.props.loggedInStatus ? this.redirect() : null
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const {username, email, password} = this.state
    
    let user = {
      username: username,
      email: email,
      password: password
    }
    
    axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };

  redirect = () => {
    this.props.history.push('/')
  }

  handleErrors = () => {
    return (
      <div class="errors pt-3">
        <Alert variant="danger" className="m-3">
          <Alert.Heading>Errors:</Alert.Heading>
          <hr />
          { this.state.errors.map(error => {
            return <p class="m-0">{error}</p>
          }) }
        </Alert>
      </div>
    )
  }

  render() {
    const {username, email, password} = this.state

  return (
    <div>
      <Navbar />
      <div className="form">
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <br></br>
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <br></br>
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <br></br>
          <button placeholder="submit" type="submit">
            log in
          </button>
          
          or <Link to='/signup'>sign up</Link>
          
        </form>
        <div>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
      </div>
    </div>
    );
  }
}

export default Login;