'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('items', {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
      },
      title: {
          type: Sequelize.STRING,
          allowNull: false
      },
      description: {
          type: Sequelize.STRING,
          allowNull: true
      },
      itemSubsectionId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'item_subsections',
            key: 'id'
          }
      },
      approved:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('items');
  }
};
