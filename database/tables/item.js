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
        allowNull: false
    },
    solutions: {
        type: Sequelize.STRING,
        allowNull: false
    },
    obs: {
        type: Sequelize.STRING,
        allowNull: false
    },
    itemSubsectionId: {
        type: Sequelize.INTEGER,
        references: 'item_subsections',
        referencesKey: 'id'
    }
})

ItemSubsection.hasMany(Item)
 
module.exports = Item;