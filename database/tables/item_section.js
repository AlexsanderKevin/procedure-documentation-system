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
    department_id: {
        type: Sequelize.INTEGER,
        references: 'department',
        referencesKey: 'id'
    }
})

Department.hasMany(ItemSection)
 
module.exports = ItemSection;