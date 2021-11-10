const Sequelize = require('sequelize') ;

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.bd'
})

module.exports = sequelize