const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {

    // login
    signIn(req, res){

    },
    // register
    signUp(req, res){

        //criptograph password
        let password = bcrypt.hashSync(req.body.password, 10)
        // create user
        User.create({
            name: req.body.name,
            username: req.body.username,
            password: password,
            departmentId: req.body.departmentId
        }).then(user => {
            
            let token = jwt.sign({user:user}, '')

        })
    }
}