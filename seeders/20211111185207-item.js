'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('items', [
      {
        id: 1,
        title: 'Teste de HD',
        itemSubsectionId: 1
      },
      {
        id: 2,
        title: 'Teste de Memória',
        itemSubsectionId: 1
      },
      {
        id: 3,
        title: 'Teste de Processador',
        itemSubsectionId: 1
      },
      {
        id: 4,
        title: 'Verificação de Especificações do Produto',
        itemSubsectionId: 2
      },
      {
        id: 5,
        title: 'Verificação de SN e MTM',
        itemSubsectionId: 2
      },
      {
        id: 6,
        title: 'Ativação do Sistema',
        itemSubsectionId: 2
      },
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('items', null, {});
  }
};
