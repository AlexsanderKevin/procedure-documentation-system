'use strict';
const bcrypt = require("bcrypt")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Kevin Alexsander de Jesus',
        username: 'kjesus',
        password: await bcrypt.hash('utln-3358', 10),
        departmentId: 1,
      },
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
