const Sequelize = require('sequelize');

const database = require('../db');
const Department = require("./department")
 
const ItemSection = database.define('item_sections', {
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
    approved:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
})

Department.hasMany(ItemSection, {constraint: true, foreingnKey: 'departmentId'})

ItemSection.belongsTo(Department, {constraint: true, foreingnKey: 'departmentId'})
 
module.exports = ItemSection;