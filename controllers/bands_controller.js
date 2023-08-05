// Dependencies
const bandsRouter = require("express").Router();
const allDBModels = require("../models");
const {
  Band: BandModel,
  MeetGreet: MeetGreetModel,
  Event: EventModel,
  SetTime: SetTimeModel,
} = allDBModels;
const { Op } = require("sequelize");

// Find all bands
bandsRouter.get("/", async (req, res) => {
  try {
    const foundBands = await BandModel.findAll({
      order: [["available_start_time", "ASC"]],
      where: {
        name: { [Op.like]: `%${req.query.name ? req.query.name : ""}%` },
      },
    });
    res.status(200).json(foundBands);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Find a specific band by name
bandsRouter.get("/:name", async (req, res) => {
  try {
    const foundBand = await BandModel.findOne({
      where: { name: req.params.name },
      include: [
        {
          model: MeetGreetModel,
          as: "meet_greets",
          include: {
            model: EventModel,
            as: "event",
            where: {
              name: {
                [Op.like]: `%${req.query.event ? req.query.event : ""}%`,
              },
            },
          },
        },
        {
          model: SetTimeModel,
          as: "set_times",
          include: {
            model: EventModel,
            as: "event",
            where: {
              name: {
                [Op.like]: `%${req.query.event ? req.query.event : ""}%`,
              },
            },
          },
        },
      ],
    });
    res.status(200).json(foundBand);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create a band
bandsRouter.post("/", async (req, res) => {
  try {
    const newBand = await BandModel.create(req.body);
    res.status(200).json({
      message: "Successfully inserted a new band",
      data: newBand,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a band
bandsRouter.put("/:id", async (req, res) => {
  try {
    const updatedBands = await BandModel.update(req.body, {
      where: {
        band_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully updated ${updatedBands} band(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a band
bandsRouter.delete("/:id", async (req, res) => {
  try {
    const deletedBands = await BandModel.destroy({
      where: {
        band_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully deleted ${deletedBands} band(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// EXPORT
module.exports = bandsRouter;
