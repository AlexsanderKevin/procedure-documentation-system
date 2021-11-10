const Sequelize = require ('sequelize')
const database = require('../db');
const Linha = require('./linha');

const Section = database.define('item_section', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Section;