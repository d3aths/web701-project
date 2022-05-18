const Db = "mongodb://celeste:no@web7-shard-00-00.0wtgx.mongodb.net:27017,web7-shard-00-01.0wtgx.mongodb.net:27017,web7-shard-00-02.0wtgx.mongodb.net:27017/web7?ssl=true&replicaSet=atlas-sld3hd-shard-0&authSource=admin&retryWrites=true&w=majority"
// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
 
// var _db
 
// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       // Verify we got a good "db" object
//       if (db)
//       {
//         _db = db.db("web7");
//         console.log("Successfully connected to MongoDB.")
//       }
//       return callback(err);
//          })
//   },
 
//   getDb: function () {
//     return _db;
//   },
// }

import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(Db, { 
      useUnifiedTopology: true,
      useNewUrlParser: true,
  })
    
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB