// Dependencies
const eventsRouter = require("express").Router();
const allDBModels = require("../models");
const {
  Band: BandModel,
  MeetGreet: MeetGreetModel,
  Event: EventModel,
  SetTime: SetTimeModel,
  Stage: StageModel,
  StageEvent: StageEventModel,
} = allDBModels;

// Find all events
eventsRouter.get("/", async (req, res) => {
  try {
    const foundEvents = await EventModel.findAll();
    res.status(200).json(foundEvents);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Find a specific event
eventsRouter.get("/:name", async (req, res) => {
  try {
    const foundEvent = await EventModel.findOne({
      where: { name: req.params.name },
      include: [
        {
          model: MeetGreetModel,
          as: "meet_greets",
          include: {
            model: BandModel,
            as: "band",
            attributes: ["name"],
          },
        },
        {
          model: SetTimeModel,
          as: "set_times",
          include: [
            {
              model: BandModel,
              as: "band",
            },
            {
              model: StageModel,
              as: "stage",
            },
          ],
        },
      ],
    });
    res.status(200).json(foundEvent);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create an event
eventsRouter.post("/", async (req, res) => {
  try {
    const newEvent = await EventModel.create(req.body);
    res.status(200).json({
      message: "Successfully inserted a new event",
      data: newEvent,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update an event
eventsRouter.put("/:id", async (req, res) => {
  try {
    const updatedEvents = await EventModel.update(req.body, {
      where: {
        event_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully updated ${updatedEvents} events(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete an event
eventsRouter.delete("/:id", async (req, res) => {
  try {
    const deletedEvents = await EventModel.destroy({
      where: {
        event_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully deleted ${deletedEvents} event(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Export
module.exports = eventsRouter;
