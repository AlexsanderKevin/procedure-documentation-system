const Sequelize = require('sequelize');

const database = require('../db');
const Department = require("./department")
 
const User = database.define('users', {
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
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    departmentId: {
        type: Sequelize.INTEGER,
        references: 'departments',
        referencesKey: 'id'
    },
    cargo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    permission: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

Department.hasMany(User)
 
module.exports = User;