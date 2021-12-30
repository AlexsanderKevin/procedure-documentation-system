'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
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
      username: {
          type: Sequelize.STRING,
          allowNull: false
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false
      },
      departmentId: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'departments',
            key: 'id'
          }
      },
      cargo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      adm: {
          type: Sequelize.BOOLEAN,
          allowNull: true
      },
      editor: {
          type: Sequelize.BOOLEAN,
          allowNull: true
      },
      // Timestamps
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
