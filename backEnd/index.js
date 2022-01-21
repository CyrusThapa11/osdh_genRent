const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const db = require("./db");
const userRoutes = require("./routes/userRoutes");
const renterRoutes = require("./routes/renterRoutes");
const productRoutes = require("./routes/productRoutes");

app.use("/api/user", userRoutes);
app.use("/api/renter", renterRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`running at : http://localhost:${PORT}/`);
});

module.exports = { app };
