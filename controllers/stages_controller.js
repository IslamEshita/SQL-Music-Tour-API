// Dependencies
const stagesRouter = require("express").Router();
const allDBModels = require("../models");
const { Stage: StageModel } = allDBModels;

// Find all stages
stagesRouter.get("/", async (req, res) => {
  try {
    const foundStages = await StageModel.findAll();
    res.status(200).json(foundStages);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Find a specific event
stagesRouter.get("/:name", async (req, res) => {
  try {
    const foundStages = await StageModel.findOne({
      where: { name: req.params.name },
    });
    res.status(200).json(foundStages);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create a stage
stagesRouter.post("/", async (req, res) => {
  try {
    const newStage = await StageModel.create(req.body);
    res.status(200).json({
      message: "Successfully inserted a new stage",
      data: newStage,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a stage
stagesRouter.put("/:id", async (req, res) => {
  try {
    const updatedStages = await StageModel.update(req.body, {
      where: {
        stage_id_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully updated ${updatedEvents} stage(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete an event
stagesRouter.delete("/:id", async (req, res) => {
  try {
    const deletedStages = await StageModel.destroy({
      where: {
        stage_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully deleted ${deletedStages} stages(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Export
module.exports = stagesRouter;
