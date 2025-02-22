'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      "component",
      {
        id: {
          type: Sequelize.STRING,
          primaryKey: true,
          allowNull: false,
          unique: true,
        },
        tag: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        system: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        machine: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        tag2: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        machineImagePath: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("component");
  }
};
