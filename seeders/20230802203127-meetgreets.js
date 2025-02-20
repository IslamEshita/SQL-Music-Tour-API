"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "meet_greet",
      [
        {
          event_id: 10,
          band_id: 8,
          meet_start_time: "2024-07-03T12:00:00.000Z",
          meet_end_time: "2024-07-03T14:00:00.000Z",
        },
        {
          event_id: 11,
          band_id: 9,
          meet_start_time: "2024-05-14T13:00:00.000Z",
          meet_end_time: "2024-05-14T15:00:00.000Z",
        },
        {
          event_id: 11,
          band_id: 10,
          meet_start_time: "2024-03-12T13:00:00.000Z",
          meet_end_time: "2024-03-12T16:00:00.000Z",
        },
        {
          event_id: 11,
          band_id: 11,
          meet_start_time: "2024-06-21T12:00:00.000Z",
          meet_end_time: "2024-06-21T17:00:00.000Z",
        },
        {
          event_id: 12,
          band_id: 12,
          meet_start_time: "2024-09-27T11:00:00.000Z",
          meet_end_time: "2024-09-27T14:00:00.000Z",
        },
        {
          event_id: 6,
          band_id: 13,
          meet_start_time: "2024-01-25T11:00:00.000Z",
          meet_end_time: "2024-01-25T14:00:00.000Z",
        },
        {
          event_id: 7,
          band_id: 14,
          meet_start_time: "2024-05-04T18:00:00.000Z",
          meet_end_time: "2024-05-04T21:00:00.000Z",
        },
        {
          event_id: 8,
          band_id: 15,
          meet_start_time: "2024-04-18T16:00:00.000Z",
          meet_end_time: "2024-04-18T19:00:00.000Z",
        },
        {
          event_id: 9,
          band_id: 16,
          meet_start_time: "2024-10-12T10:00:00.000Z",
          meet_end_time: "2024-10-12T16:00:00.000Z",
        },
        {
          event_id: 10,
          band_id: 17,
          meet_start_time: "2024-11-14T12:00:00.000Z",
          meet_end_time: "2024-11-14T15:00:00.000Z",
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("meet_greet", null, {});
  },
};
