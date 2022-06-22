import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Service = ({ service }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/service/${service._id}`}>
        <Card.Img src={service.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/service/${service._id}`}>
          <Card.Title as='div'>
            <strong>{service.title}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          {service.details}
        </Card.Text>

        <Card.Text as='h3'>{service.date}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Service
