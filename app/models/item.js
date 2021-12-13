const Sequelize = require('sequelize');
const database = require('../db');
const ItemSubsection = require("./item_subsection")
 
const Item = database.define('items', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    approved:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
})
 
module.exports = Item;