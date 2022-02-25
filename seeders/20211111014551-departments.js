'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('departments', [
        {
         name: 'Teste',
         id: 1
        },
        {
          name: 'Análise',
          id: 2
         },
         {
          name: 'Embalagem',
          id: 3
         },
         {
          name: 'Troca',
          id: 4
         },
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('departments', null, {});
  }
};
