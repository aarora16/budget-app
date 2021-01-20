import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar.js'


const Home = (props) => {
  const handleClick = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }

  return (
    <div>
      <Navbar loggedInStatus={props.loggedInStatus} handleClick={handleClick} />
      <div>
        {
          props.loggedInStatus ?
          <div>Create A Budget</div> : 
          <div>Please <Link to="/login">Login</Link> or <Link to="Signup">Signup</Link> </div>
        }
        <br></br>
        {
          props.loggedInStatus ?
          <Link to='/logout' onClick={handleClick}>Log Out</Link> :
          null
        }
      </div>
    </div>
  );
};

export default Home;