// Express
const express = require("express");
const app = express();

require("dotenv").config;
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static("public")); // sets public folder to be served statically(img/css files)
app.set("view engine", "jsx"); // tells Express that our view engine will use .jsx files
app.engine("jsx", require("express-react-views").createEngine()); // sets view engine

// Routes
app.get("/", (req, res) => {
  res.render("index.jsx", { hello: "Hello World" });
});

// Server listener
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
