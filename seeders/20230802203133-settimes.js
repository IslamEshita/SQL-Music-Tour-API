"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "set_time",
      [
        {
          event_id: "11",
          stage_id: "6",
          band_id: "8",
          start_time: "18:00:00",
          end_time: "21:00:00",
        },
        {
          event_id: "12",
          stage_id: "7",
          band_id: "9",
          start_time: "18:00:00",
          end_time: "20:00:00",
        },
        {
          event_id: "11",
          stage_id: "8",
          band_id: "12",
          start_time: "19:00:00",
          end_time: "21:00:00",
        },
        {
          event_id: "11",
          stage_id: "9",
          band_id: "14",
          start_time: "19:00:00",
          end_time: "22:00:00",
        },
        {
          event_id: "11",
          stage_id: "10",
          band_id: "15",
          start_time: "20:00:00",
          end_time: "23:00:00",
        },
        {
          event_id: "11",
          stage_id: "11",
          band_id: "9",
          start_time: "20:00:00",
          end_time: "22:00:00",
        },
        {
          event_id: "11",
          stage_id: "12",
          band_id: "9",
          start_time: "16:00:00",
          end_time: "19:00:00",
        },
        {
          event_id: "11",
          stage_id: "13",
          band_id: "10",
          start_time: "17:00:00",
          end_time: "18:00:00",
        },
        {
          event_id: "11",
          stage_id: "14",
          band_id: "9",
          start_time: "18:00:00",
          end_time: "19:00:00",
        },
        {
          event_id: "11",
          stage_id: "15",
          band_id: "10",
          start_time: "18:00:00",
          end_time: "23:00:00",
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("set_time", null, {});
  },
};
