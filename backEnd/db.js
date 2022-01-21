// const { MongoClient } = require("mongodb");

// const uri =
//   "mongodb+srv://user:user@cluster0.iknif.mongodb.net/osdhack?retryWrites=true&w=majority";

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// console.log("connected");
// client.connect((err) => {
//   // const collection = client.db("test").collection("devices");
//   // perform actions on the collection object

//   client.close();
// });

const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

// console.log('uri --', process.env.MONGO_URL);
const uri = `mongodb+srv://user:user@cluster0.iknif.mongodb.net/osdhack?retryWrites=true&w=majority`;

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("db connected to local !!");
  })
  .catch((err) => {
    console.log("Error -- !");
  });
