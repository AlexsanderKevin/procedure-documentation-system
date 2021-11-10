const Sequelize = require ('sequelize')
const database = require('../db')

const Linha = database.define('linha', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Linha;