import React, { Component, useReducer } from 'react';
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

    const createBudgets = (budgets) => {
      return (
        <>
          {budgets.map(budget => (
            <div key={budget.id}>
              <BudgetCard budget={budget} />
            </div>
          ))}
        </>
      )
    }

    return (
      <div>
        <Navbar loggedInStatus={this.props.loggedInStatus} handleClick={handleClick} />
        <div>
          <h2 className="heading m-3">
            Welcome User!
          </h2>

          {
            !this.props.loggedInStatus ?
            <p className="m-3">Please <Link to="/login">Login</Link> or <Link to="signup">Signup</Link></p> : 
            <div>
              <div>
              <h4 className="m-3">
                <Link to="/create">Create A Budget</Link>
              </h4>
                {
                  createBudgets(this.state.budgets)
                }
              </div>

            </div>
          }
        </div>
      </div>
    );
  }
};

export default Home;