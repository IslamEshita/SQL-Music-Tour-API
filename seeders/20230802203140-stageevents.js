"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "stage_events",
      [
        {
          stage_id: 6,
          event_id: 6,
        },
        {
          stage_id: 7,
          event_id: 7,
        },
        {
          stage_id: 8,
          event_id: 8,
        },
        {
          stage_id: 9,
          event_id: 9,
        },
        {
          stage_id: 10,
          event_id: 10,
        },
        {
          stage_id: 11,
          event_id: 11,
        },
        {
          stage_id: 12,
          event_id: 12,
        },
        {
          stage_id: 13,
          event_id: 13,
        },
        {
          stage_id: 14,
          event_id: 14,
        },
        {
          stage_id: 15,
          event_id: 15,
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("stage_events", null, {});
  },
};
