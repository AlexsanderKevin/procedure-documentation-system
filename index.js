const express = require("express")
const express_handlebars = require('express-handlebars')
const sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('./database.db', (err) => {
    if (err){
        console.error(err.message)
    }

    console.log('Conectet to database.')
})

const app = express()

app.engine('hbs', express_handlebars ({
    defaultLayout: 'main',
    extname: '.hbs'
}))

app.set('view engine', 'hbs')

app.get('/home', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log("server running...")
})