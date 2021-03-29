const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv/config");

app.use(cors());
app.options("*", cors());

const api = process.env.API_URL;
const productsRouter = require("./routers/products");

//midleware
app.use(bodyParser.json());
app.use(morgan("tiny"));

//Router
app.use(`${api}/products`, productsRouter);

const Product = require("./models/product");

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "eshop-database",
  })
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Sever is running now");
  console.log(api);
});
