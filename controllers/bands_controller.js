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

// CREATE A BAND
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

// UPDATE A BAND
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

// DELETE A BAND
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
