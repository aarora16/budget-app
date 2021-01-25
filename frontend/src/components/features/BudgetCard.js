import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron'

const BudgetCard = (props) => {
  const budget = props.budget

  return (
    <div>
      <Jumbotron className="m-4">
        <h2>
          {budget.name}
        </h2>
        <p>
          Total budget amount: {budget.salary + budget.passive_income}
        </p>
        <p>
          Go to <Link to={'/budget/' + budget.id}>budget</Link>
        </p>
      </Jumbotron>
    </div>
  )
}

export default BudgetCard;