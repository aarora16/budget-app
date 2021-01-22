import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar.js'
import BudgetCard from './features/BudgetCard'


class Home extends Component {
  state = {
    budgets: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/budgets', {withCredentials: true})
    .then(res => {
      res.data.budgets.forEach(budget => {
        this.setState({
          budgets: [...this.state.budgets, budget]
        })
      })
    })
    .catch(error => console.log('api errors: ', error))
  }

  render() {
    const handleClick = () => {
      axios.delete('http://localhost:3001/logout', {withCredentials: true})
      .then(response => {
        this.props.handleLogout()
        this.props.history.push('/')
      })
      .catch(error => console.log(error))
    }

    const test = (budgets) => {
      return (
        <>
          {budgets.map(budget => (
            <div>
              <BudgetCard key={budget.id} budget={budget} />
            </div>
          ))}
        </>
      )
    }

    return (
      <div>
        <Navbar loggedInStatus={this.props.loggedInStatus} handleClick={handleClick} />
        <div>
          {
            !this.props.loggedInStatus ?
            <div>Please <Link to="/login">Login</Link> or <Link to="Signup">Signup</Link></div> : 
            <div>
              <div>
                {
                  test(this.state.budgets)
                }
              </div>
              <Link to="/create">Create A Budget</Link>
            </div>
          }
        </div>
      </div>
    );
  }
};

export default Home;