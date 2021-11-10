const Sequelize = require('sequelize')
const database = require('../db')
const Item = database.define('item',{
    id: {
        type: Sequelize.INTEGER
    },
})

module.exports = Item;