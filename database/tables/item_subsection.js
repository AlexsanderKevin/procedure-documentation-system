const Sequelize = require('sequelize');

const database = require('../db');
const ItemSection = require("./item_section")
 
const ItemSubsection = database.define('item_subsections', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    itemSectionId: {
        type: Sequelize.INTEGER,
        references: 'item_sections',
        referencesKey: 'id'
    }
})

ItemSection.hasMany(ItemSubsection)
 
module.exports = ItemSubsection;