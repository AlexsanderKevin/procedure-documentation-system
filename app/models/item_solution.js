const Sequelize = require('sequelize')

const database = require('../db')
const Item = require('./item')

const ItemSolution = database.define('item_solutions', {
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
    }
})

Item.hasMany(ItemSolution, {constraint: true, foreingnKey: 'itemId'})

ItemSolution.belongsTo(Item, {constraint: true, foreingnKey: 'itemId', onDelete: 'CASCADE'})

module.exports = ItemSolution