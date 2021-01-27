import React, { Component } from 'react';
import Navbar from '../Navbar.js'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: this.props.match.params.id,
      budget: {}
    }
  }

  componentDidMount() {
    this.getBudgets()
  }

  getBudgets = () => {
    fetch(`http://localhost:3001/budgets/${this.state.path}`, {withCredentials: true})
    .then(res => res.json())
    .then(data => this.setState({
      budget: data.budget
    }))
  }

  render() {
    const budget = this.state.budget

    const getRemaining = (budget) => {
      const totalIncome = budget.salary + budget.passive_income
      const totalExpenses = budget.rent_or_mortgage + budget.taxes + budget.insurance + budget.electricity + budget.water + budget.home_gas + budget.car_maintenance + budget.car_gas + budget.phone_bill + budget.food + budget.entertainment + budget.charity + budget.debt + budget.loans + budget.clothing
      
      return totalIncome - totalExpenses
    }

    return(
      <div>
        <Navbar loggedInStatus={this.props.loggedInStatus} />
        <div className="data m-3">
          <h4>{budget.name}</h4>
          <Accordion className="mt-3" defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="0">Income</Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Salary: ${budget.salary}
                  <br></br>
                  Passive Income: ${budget.passive_income} 
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion className="mt-3" defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="0">Bills</Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Rent/Mortgage: ${budget.rent_or_mortgage}
                  <br></br>
                  Taxes: ${budget.taxes}
                  <br></br>
                  Insurance: ${budget.insurance}
                  <br></br>
                  Electricity: ${budget.electricity}
                  <br></br>
                  Water: ${budget.water}
                  <br></br>
                  Home Gas: ${budget.home_gas}
                  <br></br>
                  Phone Bill: ${budget.phone_bill}
                  <br></br>
                  Debt: ${budget.debt}
                  <br></br>
                  Loans: ${budget.loans}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion className="mt-3" defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="0">Car</Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Car Maintenance: ${budget.car_maintenance}
                  <br></br>
                  Car Gas: ${budget.car_gas}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion className="mt-3" defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="0">Non-Essential</Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Food: ${budget.food}
                  <br></br>
                  Entertainment: ${budget.entertainment}
                  <br></br>
                  Charity: ${budget.charity}
                  <br></br>
                  Clothing: ${budget.clothing}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion className="mt-3" defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="0">Totals</Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Remaining: ${getRemaining(budget)}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    )
  }
}

export default Show;