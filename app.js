const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT;

//Middleware
app.use(bodyParser.json());
// CORS uniquement pour le localhost
app.use(
  cors({
    origin: `${process.env.LOCALHOST}`,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

//Data-base Mongodb Mongoose
const mongoose = require("mongoose");
mongoose.connect(`${process.env.CLUSTERURL}`, { dbName: "vsinput" });

// Routes
const comboRoutes = require("./routes/comboRoutes.js");
app.use("/api/combos", comboRoutes);

app.listen(port, () => {
  console.log(`Le serveur écoute sur http://localhost:${port}`);
});
