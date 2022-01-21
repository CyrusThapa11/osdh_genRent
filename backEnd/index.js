const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const path = require("path");
const db = require("./db");
const userRoutes = require("./routes/userRoutes");
const renterRoutes = require("./routes/renterRoutes");
const productRoutes = require("./routes/productRoutes");
const { urlencoded } = require("express");

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/home", (req, res) => {
  res.render("home");
});

app.use("/api/user", userRoutes);
app.use("/api/renter", renterRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`running at : http://localhost:${PORT}/`);
});

module.exports = { app };
