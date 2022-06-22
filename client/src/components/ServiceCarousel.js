import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopServices } from '../actions/serviceActions'

const ServiceCarousel = () => {
  const dispatch = useDispatch()

  const serviceTopRated = useSelector((state) => state.serviceTopRated)
  const { loading, error, services } = serviceTopRated

  useEffect(() => {
    dispatch(listTopServices())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-info'>
      {services.map((service) => (
        <Carousel.Item key={service._id}>
          <Link to={`/service/${service._id}`}>
            <Image src={service.image} alt={service.title} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {service.title} ({service.date})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ServiceCarousel
