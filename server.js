// DEPENDENCIES
const express = require("express");
const { Sequelize } = require("sequelize");
const app = express();

// CONFIGURATION / MIDDLEWARE
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROOT
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Tour API",
  });
});

// Band Route
const bandsController = require("./controllers/bands_controller");
app.use("/bands", bandsController);

// Event Route
const eventsController = require("./controllers/events_controller");
app.use("/events", eventsController);

// Stage Route
const stagesController = require("./controllers/stages_controller");
app.use("/stages", stagesController);

// Listen
app.listen(process.env.PORT, () => {
  console.log(`Music Tour Server 🎸 Rockin' on port: ${process.env.PORT}`);
});
