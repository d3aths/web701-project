const express = require("express");

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /user.
const userRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/connection");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// A lot of these commands are admin-only functions
// refactoring will have to take place in M2 using schemas rather than modelling users on the forms
// booleans must be in place such as isAdmin, isProvider to mark accounts for having access to functions
// easier to use for authentication and page access

// This section will help you get a list of all the users.
userRoutes.route("/userlist").get(function (req, res) {
  let db_connect = dbo.getDb("web7");
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single user by id
userRoutes.route("/user/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("users")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new user.
userRoutes.route("/user/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    email: req.body.email,
    name: req.body.name,
    type: req.body.type,
    password: req.body.password,
  };
  db_connect.collection("users").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a user by id.
userRoutes.route("/user/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
        email: req.body.email,
        name: req.body.name,
        type: req.body.type,
    },
  };
  db_connect
    .collection("users")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a user
userRoutes.route("/rmvuser/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("users").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

//logging in with authentication -jwt and bcrypt needs to be installed and set up later for this
//not operational right now
userRoutes.route("/login").post(function (req, res) {
  const { email, password } = req.body
  const user = db_connect
    .collection("users")
    .findOne({ email })

      if (user && (user.matchPassword(password))) {
          res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          type: user.type,
          token: generateToken(user._id),
          })
      } else {
          res.status(401)
          throw new Error('Invalid email or password')
      }
})

module.exports = userRoutes;