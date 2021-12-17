const Sequelize = require('sequelize')

const database = require('../db')
const Item = require('./item')
const User = require('./user')

const Comment = database.define('comments', {
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
    }
})

Item.hasMany(Comment, {constraint: true, foreingnKey: 'itemId'})

Comment.belongsTo(Item, {constraint: true, foreingnKey: 'itemId',onDelete: 'CASCADE'})

User.hasMany(Comment, {constraint: true, foreingnKey: 'userId'})

Comment.belongsTo(User, {constraint: true, foreingnKey: 'userId', onDelete: 'CASCADE'})

module.exports = Comment