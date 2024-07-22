const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 3001;

const UserRoute = require("./route/UserRoute");
const OrderRoute = require("./route/OrderRoute");
const ItemRoute = require("./route/ItemRoute");
const MsgRoute = require("./route/MessageRoute");

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/abcshopping")
  .then(() => {
    app.listen(port, () => {
      console.log(`ABC shopping Service up and running on port number ${port}`);
    });
  })
  .catch((error) => {
    print("error on database");
  });

app.use("/api/v1/user", UserRoute);
app.use("/api/v1/order", OrderRoute);
app.use("/api/v1/message", MsgRoute);
app.use("/api/v1/item", ItemRoute);
/**/
