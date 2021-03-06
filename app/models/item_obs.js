const Sequelize = require('sequelize')

const database = require('../db')
const Item = require('./item')

const ItemObs = database.define('item_obs', {
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

Item.hasMany(ItemObs, {constraint: true, foreingnKey: 'itemId'})

ItemObs.belongsTo(Item, {constraint: true, foreingnKey: 'itemId', onDelete: 'CASCADE'})

module.exports = ItemObs