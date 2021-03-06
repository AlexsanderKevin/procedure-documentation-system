'use strict';
const bcrypt = require("bcrypt")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Kevin Alexsander de Jesus',
        username: 'kjesus',
        password: await bcrypt.hash('13348', 10),
        cargo: 'Assistente Técnico',
        adm: true,
        editor:true,
      },
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
