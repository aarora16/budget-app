import React, { Component } from "react"
import Navbar from '../Navbar.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './BudgetForm.css'

class BudgetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
      passive_income: '',
      rent_or_mortgage: '',
      taxes: '',
      insurance: '',
      electricity: '',
      water: '',
      home_gas: '',
      car_maintenance: '',
      car_gas: '',
      phone_bill: '',
      food: '',
      entertainment: '',
      charity: '',
      debt: '',
      loans: '',
      clothing: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {
      name, 
      salary, 
      passive_income, 
      rent_or_mortgage, 
      taxes, 
      insurance, 
      electricity, 
      water, 
      home_gas, 
      car_maintenance, 
      car_gas,
      phone_bill,
      food,
      entertainment,
      charity,
      debt,
      loans,
      clothing
    } = this.state

    let budget = {
      name: name,
      salary: salary,
      passive_income: passive_income,
      rent_or_mortgage: rent_or_mortgage,
      taxes: taxes,
      insurance: insurance,
      electricity: electricity,
      water: water,
      home_gas: home_gas,
      car_maintenance: car_maintenance,
      car_gas: car_gas,
      phone_bill: phone_bill,
      food: food,
      entertainment: entertainment,
      charity: charity,
      debt: debt,
      loans: loans,
      clothing: clothing
    }

    axios.post('http://localhost:3001/budgets', {budget}, {withCredentials: true})
    .then(res => {
      this.redirect()
    })
    .catch(error => console.log('api errors: ', error))
  }

  redirect = () => {
    this.props.history.push('/')
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  render() {
    const {
      name, 
      salary, 
      passive_income, 
      rent_or_mortgage, 
      taxes, 
      insurance, 
      electricity, 
      water, 
      home_gas, 
      car_maintenance, 
      car_gas,
      phone_bill,
      food,
      entertainment,
      charity,
      debt,
      loans,
      clothing
    } = this.state

    return (
      <div>
        <Navbar loggedInStatus={this.props.loggedInStatus} />
        {  !this.props.loggedInStatus ? 
          <p className="m-3">Please <Link to="/login">Login</Link> or <Link to="signup">Signup</Link></p> :
          <div className="form m-3">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="budgetForm.Input1">
                <Form.Label>Budget Name</Form.Label>
                <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={this.handleChange} />
              </Form.Group>
              
              <Form.Group controlId="budgetForm.Input2">
                <Form.Label>Salary</Form.Label>
                <Form.Control as="select">
                  <option>Yearly</option>
                  <option>Monthly</option>
                </Form.Control>
                <Form.Control value={salary} name="salary" type="text" placeholder="Salary" onChange={this.handleChange} />
                <Form.Control value={passive_income} name="passive_income" type="text" placeholder="Passive Income" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group controlId="budgetForm.Input3">
                <Form.Label>Bills</Form.Label>
                <Form.Control value={rent_or_mortgage} name="rent_or_mortgage" type="text" placeholder="Rent or Mortgage" onChange={this.handleChange} />
                <Form.Control value={taxes} name="taxes" type="text" placeholder="Taxes" onChange={this.handleChange} />
                <Form.Control value={insurance} name="insurance" type="text" placeholder="Insurance" onChange={this.handleChange} />
                <Form.Control value={electricity} name="electricity" type="text" placeholder="Electricity" onChange={this.handleChange} />
                <Form.Control value={water} name="water" type="text" placeholder="Water" onChange={this.handleChange} />
                <Form.Control value={home_gas} name="home_gas" type="text" placeholder="Home Gas" onChange={this.handleChange} />
                <Form.Control value={phone_bill} name="phone_bill" type="text" placeholder="Phone Bill" onChange={this.handleChange} />
                <Form.Control value={debt} name="debt" type="text" placeholder="Debt" onChange={this.handleChange} />
                <Form.Control value={loans} name="loans" type="text" placeholder="Loans" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group controlId="budgetForm.Input4">
                <Form.Label>Car</Form.Label>
                <Form.Control value={car_maintenance} name="car_maintenance" type="text" placeholder="Car Maintenance" onChange={this.handleChange} />
                <Form.Control value={car_gas} name="car_gas" type="text" placeholder="Car Gas" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group controlId="budgetForm.Input5">
                <Form.Label>Non-Essential</Form.Label>
                <Form.Control value={food} name="food" type="text" placeholder="Food" onChange={this.handleChange} />
                <Form.Control value={entertainment} name="entertainment" type="text" placeholder="Entertainment" onChange={this.handleChange} />
                <Form.Control value={charity} name="charity" type="text" placeholder="Charity" onChange={this.handleChange} />
                <Form.Control value={clothing} name="clothing" type="text" placeholder="Clothing" onChange={this.handleChange} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        }
      </div>
    )
  }
}

export default BudgetForm;