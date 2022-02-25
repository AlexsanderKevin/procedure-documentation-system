'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('item_obs', [
      {
        id: 1,
        itemId: 4,
        title: 'Onde Marcar?',
        content: 'Na checklist estas informações estão localizadas na área intitualda de Especificações Técnicas do Produto.',
      },
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('item-obs', null, {});
  }
};
