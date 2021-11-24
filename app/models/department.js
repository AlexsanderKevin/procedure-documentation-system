const Sequelize = require ('sequelize')
const database = require('../db')

const Department = database.define('departments', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Department;