const Sequelize = require('sequelize');
const database = require('../db');
const ItemSection = require("./item_section")
const Item = require("./item")
 
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
    approved:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
})

ItemSection.hasMany(ItemSubsection, {constraint: true, foreingnKey: 'itemSectionId'})

ItemSubsection.belongsTo(ItemSection, {constraint: true, foreingnKey: 'itemSectionId', onDelete: 'CASCADE'})

ItemSubsection.hasMany(Item, {constraint: true, foreingnKey: 'itemSubsectionId'})

Item.belongsTo(ItemSubsection, {constraint: true, foreingnKey: 'itemSubsectionId', onDelete: 'CASCADE'})
 
module.exports = ItemSubsection;