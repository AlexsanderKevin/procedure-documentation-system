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
