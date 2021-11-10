const express = require("express")
const express_handlebars = require('express-handlebars')

const app = express()

app.engine('hbs', express_handlebars ({
    defaultLayout: 'main',
    extname: '.hbs'
}))

app.set('view engine', 'hbs')

app.get("/", (req, res) => {
    res.render("home")
})

app.listen(3000, () => {
    console.log("server running...")
});

(async ()=>{

    const database = require('./database/db')
    //tabelas
    const Section = require('./database/tables/section')
    const Linha = require('./database/tables/linha')

    //sincronizar
    await database.sync()

    //criar row


    const sections = await Section.findAll();
    const linhas = await Linha.findAll();
})()