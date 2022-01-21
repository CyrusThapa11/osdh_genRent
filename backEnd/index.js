const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const mongoose = require('mongoose')
const db = require("./db");

require("./models/product")
require("./models/renter")
require("./models/user")

app.use(express.json())

app.use(require("./routes/userRoutes"));
app.use(require("./routes/renterRoutes"));
app.use(require("./routes/productRoutes"));



app.listen(PORT, () => {
  console.log(`running at : http://localhost:${PORT}/`);
});

