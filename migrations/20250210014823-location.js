'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      "location",
      {
        id: {
          type: Sequelize.STRING,
          primaryKey: true,
          allowNull: false,
          unique: true,
        },
        numeric_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          unique: true,
        },
        parent_id: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        numeric_parent_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        code: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        create_at: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        last_update: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        last_user: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("location");
  }
};
