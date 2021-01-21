import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar.js'
import Card from 'react-bootstrap/Card'


const Home = (props) => {
  const handleClick = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }

  const featuredBudgets = () => {
    
  }

  return (
    <div>
      <Navbar loggedInStatus={props.loggedInStatus} handleClick={handleClick} />
      <div>
        {
          !props.loggedInStatus ?
          <div>Please <Link to="/login">Login</Link> or <Link to="Signup">Signup</Link></div> : 
          <div class="carousel">

          </div>
        }
      </div>
    </div>
  );
};

export default Home;