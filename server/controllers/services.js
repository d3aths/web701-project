import asyncHandler from 'express-async-handler'
import Service from '../models/serviceModel.js'

// @route   GET /api/services
//list of services
const getServices = asyncHandler(async (req, res) => {
    const pageSize = 10
    const page = Number(req.query.pageNumber) || 1
  
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: 'i',
          },
        }
      : {}
  
    const count = await Service.countDocuments({ ...keyword })
    const services = await Service.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
  
    res.json({ services, page, pages: Math.ceil(count / pageSize) })
  })
  

//gets a service by id
const getServiceById = asyncHandler(async (req, res) => {
    const service = await Service.findById(req.params.id)
  
    if (service) {
      res.json(service)
    } else {
      res.status(404)
      throw new Error('Service not found')
    }
  })

//creating new service
const createService = asyncHandler(async (req, res) => {
    const service = new Service({
        title: 'Title of your service',
        category: 'Workshops, Lectures, or Resource sharing',
        user: req.user._id,
        image: '/images/sample.jpg',
        details: 'The description of your service',
        availableTokens: 0,
        date: 'The date this will commence on'
    })
    
    const createdService = await service.save()
    res.status(201).json(createdService)
    })

//editing a service
const updateService = asyncHandler(async (req, res) => {
    const {
      title,
      image,
      details,
      availableTokens,
      date,
    } = req.body
  
    const service = await Service.findById(req.params.id)
  
    if (service) {
      service.title = title
      service.image = image
      service.details = details
      service.availableTokens = availableTokens
      service.date = date
  
      const updatedService = await service.save()
      res.json(updatedService)
    } else {
      res.status(404)
      throw new Error('Service not found')
    }
  })

  //taking a token from the service when a transaction is accepted
//   serviceRoutes.route("/services/accept/:id").post(function (req, response) {
//     let db_connect = dbo.getDb()
//     let myquery = { _id: ObjectId( req.params.id )}
// const acceptToken = asyncHandler(async (req, res) => {

//     if (service) {
//         availableTokens = -1

//     const updatedService = await service.save()
//     res.json(updateService)
//     } else {
//         throw new Error('Service not found')
//     }
    // db_connect
    //   .collection("services")
    //   .updateOne(myquery, newvalues, function (err, res) {
    //     if (err) throw err
    //     console.log("token taken from service")
    //     response.json(res)
    //   })
  // })

//for allowing users to sign up for service
//this should also create a transaction
//maybe that can be done in frontend though
//   serviceRoutes.route("/services/signup/:id").post(function (req, response) {
//   let db_connect = dbo.getDb()
//   let myquery = { _id: ObjectId( req.params.id )}
//   let newvalues = {
//       $inc: {
//           tokens: -1
//       },
//   }
//   if (response.result < 0) {
//       console.log("not processed, token balance is 0")
//   } else {
//   db_connect
//       .collection("users")
//       .updateOne(myquery, newvalues, function (err, res) {
//       if (err) throw err
//       console.log("signed up for service")
//       response.json(res)
//     })
//   }
// })
  
  
  //deleteing a service
  const deleteService = asyncHandler(async (req, res) => {
    const service = await Service.findById(req.params.id)
  
    if (service) {
      await service.remove()
      res.json({ message: 'Service removed' })
    } else {
      res.status(404)
      throw new Error('Service not found')
    }
  })
  
  export {
      getServices,
      getServiceById,
      deleteService,
      createService,
      updateService,
  }