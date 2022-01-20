const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(PORT, () => {
  console.log(`running at : http://localhost:${PORT}/`);
});
