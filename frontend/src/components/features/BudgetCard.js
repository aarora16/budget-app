import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';

const BudgetCard = (props) => {
  const budget = props.budget

  return (
    <div>
      <Card style={{width: '18rem'}} >
        <Card.Body>
          <Card.Title>{budget.name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}

export default BudgetCard;