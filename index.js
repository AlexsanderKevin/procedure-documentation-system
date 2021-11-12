const express = require("express")
const express_handlebars = require('express-handlebars')
const Department = require("./database/tables/department")
const ItemSection = require("./database/tables/item_section")
const ItemSubsection = require("./database/tables/item_subsection")
const Item = require("./database/tables/item")

const app = express()

app.engine('hbs', express_handlebars ({
    defaultLayout: 'main',
    extname: '.hbs'
}))

app.set('view engine', 'hbs')

//app.get("/", async (req, res) => {
//    const departments = await Department.findAll()

//    res.render("home", { departments: departments.map((department) => {
//        return department.dataValues
//    }) })
//})

app.get("/", async (req, res) => {
    const departments = await Department.findAll() 
    const item_sections = await ItemSection.findAll({include: ItemSubsection})
    const item_subsections = await ItemSubsection.findAll({include: Item})
    const items = await Item.findAll({include: ItemSubsection})

    res.render("home", { 
        departments: departments,
        item_sections: item_sections,
        item_subsections: item_subsections,
        items: items,
    })
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