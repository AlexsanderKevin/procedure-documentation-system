'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('item_subsections', {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
      },
      name: {
          type: Sequelize.STRING,
          allowNull: false
      },
      description: {
          type: Sequelize.STRING,
          allowNull: false
      },
      itemSectionId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'item_sections',
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
    await queryInterface.dropTable('item_subsections');
  }
};
