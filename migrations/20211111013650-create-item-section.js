'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('item_sections', {
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
      departmentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'departments',
          key: 'id'
        }
      },
      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('item_sections');
  }
};
