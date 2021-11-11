const express = require("express")
const express_handlebars = require('express-handlebars')
const Department = require("./database/tables/department")

const app = express()

app.engine('hbs', express_handlebars ({
    defaultLayout: 'main',
    extname: '.hbs'
}))

app.set('view engine', 'hbs')

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/departments", async (req, res) => {
    const departments = await Department.findAll() 

    res.render("departments", { departments: departments.map((department) => {
        return department.dataValues
    }) })
})

app.listen(3000, () => {
    console.log("server running...")
});