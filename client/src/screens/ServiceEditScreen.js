import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listServiceDetails, updateService } from '../actions/serviceActions'
import { SERVICE_UPDATE_RESET } from '../constants/serviceConstants'

const ServiceEditScreen = ({ match, history }) => {
  const serviceId = match.params.id

  const [title, setTitle] = useState('')
  const [availableTokens, setTokens] = useState(0)
  const [image, setImage] = useState('')
  const [date, setDate] = useState('')
  const [category, setCategory] = useState('')
  const [details, setDetails] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const serviceDetails = useSelector((state) => state.serviceDetails)
  const { loading, error, service } = serviceDetails

  const serviceUpdate = useSelector((state) => state.serviceUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = serviceUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: SERVICE_UPDATE_RESET })
      history.push('/admin/servicelist')
    } else {
      if (!service.name || service._id !== serviceId) {
        dispatch(listServiceDetails(serviceId))
      } else {
        setTitle(service.title)
        setTokens(service.availableTokens)
        setImage(service.image)
        setDate(service.date)
        setCategory(service.category)
        setDetails(service.details)
      }
    }
  }, [dispatch, history, serviceId, service, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateService({
        _id: serviceId,
        title,
        availableTokens,
        image,
        date,
        category,
        details,
      })
    )
  }

  return (
    <>
      <Link to='/admin/servicelist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Service</h1>
        {/* {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : ( */}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='title'
                placeholder='Enter title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='tokens'>
              <Form.Label>Tokens</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter available tokens'
                value={availableTokens}
                onChange={(e) => setTokens(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='date'>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter date of service'
                value={date}
                onChange={(e) => setDate(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='details'>
              <Form.Label>Details</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter details'
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
      </FormContainer>
    </>
  )
}

export default ServiceEditScreen
