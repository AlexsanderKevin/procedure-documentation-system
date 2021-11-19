'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('comments', [
      {
        id: 1,
        itemId: 4,
        userId: 1,
        title: 'Comentário 1',
        content: 'Este é um comentário de testes, etc etc etc etc etc etc etc etc etcg eetc ectect ec srgnorigpgsr',
      },
      {
        id: 2,
        itemId: 4,
        userId: 1,
        title: 'Comentário 2',
        content: 'Este é um segundo comentário de testes, etc etc etc etc etc etc etc etc etcg eetc ectect ec srgnorigpgsr',
      },
      
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments', null, {});
  }
};
