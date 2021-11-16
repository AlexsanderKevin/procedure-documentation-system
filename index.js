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
    //const item_sections = await ItemSection.findAll({include: ItemSubsection})
    const item_sections = await ItemSection.findAll({
        include: [{
            model: ItemSubsection,
            include: [{
                model: Item,
            }]
        }]
    })

    const item_subsections = await ItemSubsection.findAll({include: Item})
    const items = await Item.findAll({include: ItemSubsection})

    res.render("home", { 
        departments: departments,
        item_sections: item_sections,
        item_subsections: item_subsections,
        items: items,
    })
})

/*
app.get("/procedure/:id", async (req, res) => {
    const procedure_id = req.params.id
    try{
        const procedure = await Item.findById(procedure_id)

        res.render('procedure', {procedure: procedure})
    }catch(err){
        console.error(err)
        res.render("home")
    }
})
*/

app.get("/procedure/:id", async (req, res) => {
const procedureId = req.params.id
try{
    const procedure = await Item.findById(procedureId)

    res.render("procedure", {procedure: procedure})
}catch(err){
    console.error(err)
    res.render("home")
}
})

// pegando links externos da pasta public
app.use(express.static(__dirname + "/public"))

app.listen(3000, () => {
    console.log("server running...")
});