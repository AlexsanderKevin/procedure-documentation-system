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
      },
      {
        id: 3,
        departmentId: 2,
        name: 'Seção de Análise 1',
      },
      {
        id: 4,
        departmentId: 2,
        name: 'Seção de Análise 2',
      },
      {
        id: 5,
        departmentId: 3,
        name: 'Seção de Embalagem 1',
      },
      {
        id: 6,
        departmentId: 3,
        name: 'Seção de Embalagem 2',
      }
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('item-sections', null, {});
  }
};