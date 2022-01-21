const { MongoClient } = require("mongodb");
const mongoose = require('mongoose')
const {MONGOURI}= require('./config/keys')
// const uri =
//   "mongodb+srv://user:user@cluster0.db90k.mongodb.net/osdhack?retryWrites=true&w=majority";

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

mongoose.connect(MONGOURI)


mongoose.connection.on('connected',()=>{
    console.log("Connected to mongo")
})

mongoose.connection.on('error',(err)=>{
    console.log("err in connection to mongo",err)

})