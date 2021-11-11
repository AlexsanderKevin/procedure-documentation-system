'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('departments', [
        {
         name: 'Financeiro',
         id: 1
        },
        {
          name: 'Producao',
          id: 2
         },
         {
          name: 'Juridico',
          id: 3
         },
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('departments', null, {});
  }
};
