const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();

const userRoutes = require("./routes/userRoutes");
const renterRoutes = require("./routes/renterRoutes");

app.use("/api/user");
app.use("/api/renter");

app.use(PORT, () => {
  console.log(`running at : http://localhost:${PORT}/`);
});

module.exports = { app };
