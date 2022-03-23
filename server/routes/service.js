const express = require("express")
const serviceRoutes = express.Router()

const dbo = require("../db/connection")
const ObjectId  = require("mongodb").ObjectId

//list of services
serviceRoutes.route("/servicelist").get(function (req, res) {
    let db_connect = dbo.getDb("web7")
    db_connect
        .collection("services")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err
            res.json(result)
        })
})

//gets a service by id
serviceRoutes.route("/service/:id").get(function (req, res) {
    let db_connect = dbo.getDb()
    let myquery = { _id: ObjectId( req.params.id )}
    db_connect
      .collection("services")
      .findOne(myquery, function (err, result) {
        if (err) throw err
        res.json(result)
      })
}) 

//creating new service
serviceRoutes.route("/services/add").post(function (req, response) {
    let db_connect = dbo.getDb()
    let myobj = {
        title: req.body.title,
        category: req.body.category,
        details: req.body.details,
        tokens: req.body.tokens,
        date: req.body.date
  }
    db_connect.collection("services").insertOne(myobj, function (err, res) {
        if (err) throw err
        response.json(res)
  })
})

//editing a service
serviceRoutes.route("/services/edit/:id").post(function (req, response) {
    let db_connect = dbo.getDb()
    let myquery = { _id: ObjectId( req.params.id )}
    let newvalues = {
      $set: {
          title: req.body.title,
          category: req.body.category,
          details: req.body.details,
          tokens: req.body.tokens,
          date: req.body.date
      },
    }
    db_connect
      .collection("services")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err
        console.log("1 document updated")
        response.json(res)
      })
  })

  //taking a token from the service when a user signs up. this should be after a transaction is accepted
  serviceRoutes.route("/services/accept/:id").post(function (req, response) {
    let db_connect = dbo.getDb()
    let myquery = { _id: ObjectId( req.params.id )}
    let newvalues = {
      $inc: {
          tokens: -1
      },
    }
    db_connect
      .collection("services")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err
        console.log("token taken from service")
        response.json(res)
      })
  })

//for allowing users to sign up for service
//currently the theory behind this is that it wont process if user token balance is less than zero
//but theres no field for tokens in user table until i do refactoring
  serviceRoutes.route("/services/signup/:id").post(function (req, response) {
  let db_connect = dbo.getDb()
  let myquery = { _id: ObjectId( req.params.id )}
  let newvalues = {
      $inc: {
          tokens: -1
      },
  }
  if (response.result < 0) {
      console.log("not processed, token balance is 0")
  } else {
  db_connect
      .collection("users")
      .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err
      //unsure if adding this here could create a transaction in the same go??
      //idk how to write it yet either. commented out because it fails to compile
      //.collection("transactions").insertOne({user.name}, {service.title})
      console.log("signed up for service")
      response.json(res)
    })
  }
})
  
  
  //deleteing a service
  serviceRoutes.route("/rmvservice/:id").delete((req, response) => {
    let db_connect = dbo.getDb()
    let myquery = { _id: ObjectId( req.params.id )}
    db_connect.collection("services").deleteOne(myquery, function (err, obj) {
      if (err) throw err
      console.log("1 document deleted")
      response.json(obj)
    })
  })
  
  module.exports = serviceRoutes