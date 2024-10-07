const express = require("express");
const app = express();
const bodyParser = require("body-parser");

require("dotenv").config();
const port = process.env.PORT;

//Middleware
app.use(bodyParser.json());

//Data-base Mongodb Mongoose
const mongoose = require("mongoose");
mongoose.connect(`${process.env.CLUSTERURL}`);

// Routes
const comboRoutes = require("./routes/comboRoutes.js");
app.use("/api/combos", comboRoutes);

app.listen(port, () => {
  console.log(`Le serveur écoute sur http://localhost:${port}`);
});
