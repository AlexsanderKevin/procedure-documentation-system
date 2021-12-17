const Sequelize = require('sequelize')

const database = require('../db')
const Item = require('./item')

const ItemIssue = database.define('item_issues', {
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
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    approved:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
})

Item.hasMany(ItemIssue, {constraint: true, foreingnKey: 'itemId'})

ItemIssue.belongsTo(Item, {constraint: true, foreingnKey: 'itemId', onDelete: 'CASCADE'})

module.exports = ItemIssue