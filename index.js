const express = require("express")
const express_handlebars = require('express-handlebars')
const Department = require("./database/tables/department")
//item organization
const ItemSection = require("./database/tables/item_section")
const ItemSubsection = require("./database/tables/item_subsection")
const Item = require("./database/tables/item")
//item content
const ItemSolution = require("./database/tables/item_solution")
const ItemObs = require("./database/tables/item_obs")
const ItemIssue = require("./database/tables/item_issues")
const Comment = require("./database/tables/comment")


const app = express()

app.engine('hbs', express_handlebars ({
    defaultLayout: 'main',
    extname: '.hbs'
}))

app.set('view engine', 'hbs')

app.get("/home", async (req, res) => {
    const departments = await Department.findAll() 
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

// rota padrão
app.get("/", async (req, res) => {
    const departments = await Department.findAll()

    res.render("departments",{
        departments: departments,
    })
})

// home dinamica (rota)
app.get("/home/:id", async (req, res) => {
    const departmentId = req.params.id

    try{
        const item_sections = await ItemSection.findAll({
            where: {departmentId: departmentId},
            include: [{
                model: ItemSubsection,
                include: [{
                    model: Item,
                }]
            }] 
        })

        res.render('home', {
            item_sections: item_sections
        })
    }catch(err){
        console.log(err)
        res.render('error')
    }
})


// página do procedimento (rota)
app.get("/procedure/:id", async (req, res) => {
    const procedureId = req.params.id

    try{
        const procedure = await Item.findByPk(procedureId)
        const item_solutions = await ItemSolution.findAll({
            where: {itemId: procedureId}
        })
        const item_obs = await ItemObs.findAll({
            where: {itemId: procedureId}
        })
        const item_issues = await ItemIssue.findAll({
            where: {itemId: procedureId}
        })
        const comments = await Comment.findAll({
            where: {itemId: procedureId}
        })

        res.render("procedure", {
            procedure: procedure,
            item_solutions: item_solutions,
            item_obs: item_obs,
            item_issues: item_issues,
            comments: comments,
        })
    }catch(err){
        console.error(err)
        res.render("error")
    }
})

// pegando links externos da pasta public
app.use(express.static(__dirname + "/public"))

app.listen(3000, () => {
    console.log("server running...")
});