'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('item_issues', [
      {
        id: 1,
        itemId: 4,
        title: 'Possivel problema 1',
        content: 'este é um conteudo de textes bla bla bla aopsdja adjp agjipem apemipejaipegj aiejapke9kap´k opjk 4ipgj irgirp',
      },
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('item-issues', null, {});
  }
};
