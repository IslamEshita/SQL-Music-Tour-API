"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "band",
      [
        {
          name: "Oriole Fugitives",
          genre: "Indie",
          available_start_time: "2023-08-05T12:00:00",
          end_time: "2023-12-31T18:00:00",
        },
        {
          name: "The Codfish Optimist",
          genre: "Alternative",
          available_start_time: "2023-08-05T14:00:00",
          end_time: "2023-08-05T19:00:00",
        },
        {
          name: "Exploiter Impedance",
          genre: "Pop",
          available_start_time: "2023-08-05T16:00:00",
          end_time: "2023-08-05T21:00:00",
        },
        {
          name: "The Underdone",
          genre: "Rock",
          available_start_time: "2023-08-05T18:00:00",
          end_time: "2023-08-05T23:00:00",
        },
        {
          name: "Ague Tertiary",
          genre: "Indie",
          available_start_time: "2023-08-05T19:00:00",
          end_time: "2023-08-05T23:00:00",
        },
        {
          name: "The Bystander Mistakes",
          genre: "Alternative",
          available_start_time: "2023-08-05T17:00:00",
          end_time: "2023-08-05T22:00:00",
        },
        {
          name: "Collide Applicant",
          genre: "Oldies",
          available_start_time: "2023-08-05T21:00:00",
          end_time: "2023-08-05T23:00:00",
        },
        {
          name: "Apricot Symptoms",
          genre: "Metal",
          available_start_time: "2023-08-05T15:00:00",
          end_time: "2023-08-05T20:00:00",
        },
        {
          name: "Olden Fearless",
          genre: "Metal",
          available_start_time: "2023-08-05T14:00:00",
          end_time: "2023-08-05T19:00:00",
        },
        {
          name: "Rhymes Of",
          genre: "Folk",
          available_start_time: "2023-08-05T13:00:00",
          end_time: "2023-08-05T19:00:00",
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("band", null, {});
  },
};
