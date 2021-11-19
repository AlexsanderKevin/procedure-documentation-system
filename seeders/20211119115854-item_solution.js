'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('item_solutions', [
      {
        id: 1,
        itemId: 4,
        title: 'Windows',
        content: '<p>No sistema Windows o caminho é: </p>           <p><strong>Configurações -> Sistema -> Sobre</strong>.</p>',
      },
      {
        id: 2,
        itemId: 4,
        title:'LINUX',
        content: '<p>No sistema Linux o caminho é:</p>',
      },
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('item-solutions', null, {});
  }
};
