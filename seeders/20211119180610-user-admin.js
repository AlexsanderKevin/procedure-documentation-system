'use strict';
const bcrypt = require("bcrypt")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 2,
        name: 'Kevin Alexsander de Jesus',
        username: 'kjesusadmin',
        password: await bcrypt.hash('utln-3358', 10),
        departmentId: 1,
        cargo: 'Assistente Técnico',
        permission: true
      },
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
