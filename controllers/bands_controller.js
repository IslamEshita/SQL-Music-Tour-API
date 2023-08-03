// DEPENDENCIES
const bandsRouter = require("express").Router();
const allDBModels = require("../models");
const { Band: BandModel } = allDBModels;

// FIND ALL BANDS
bandsRouter.get("/", async (req, res) => {
  try {
    const foundBands = await BandModel.findAll();
    res.status(200).json(foundBands);
  } catch (error) {
    res.status(500).json(error);
  }
});

// FIND A SPECIFIC BAND
bandsRouter.get("/:id", async (req, res) => {
  try {
    const foundBand = await BandModel.findOne({
      where: { band_id: req.params.id },
    });
    res.status(200).json(foundBand);
  } catch (error) {
    res.status(500).json(error);
  }
});

// EXPORT
module.exports = bandsRouter;
