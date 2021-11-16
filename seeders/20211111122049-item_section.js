'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('item_sections', [
      {
        id: 1,
        departmentId: 1,
        name: 'Checklist',
      },
      {
        id: 2,
        departmentId: 1,
        name: 'Extra',
      }
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('item-sections', null, {});
  }
};