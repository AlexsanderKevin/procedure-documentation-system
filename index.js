const express = require("express")
const express_handlebars = require('express-handlebars')
const Department = require("./app/models/department")
//item organization
const ItemSection = require("./app/models/item_section")
const ItemSubsection = require("./app/models/item_subsection")
const Item = require("./app/models/item")
//item content
const ItemSolution = require("./app/models/item_solution")
const ItemObs = require("./app/models/item_obs")
const ItemIssue = require("./app/models/item_issues")
const Comment = require("./app/models/comment")
//app
const app = express()
// controller
const AuthController = require('./app/controllers/AuthController')

const hbs = express_handlebars.create({
    defaultLayout: 'main',
    extname: '.hbs'
})

app.engine('hbs', hbs.engine)

app.set('view engine', 'hbs')

// rota padrão
app.get("/", async (req, res) => {
    const departments = await Department.findAll()

    res.render("departments",{
        departments: departments,
    })
})

//login
app.get("/login", async (req, res) => {

    res.render("login",{
        
    })
})

//login post
app.post('/api/signIn', AuthController.signIn)
app.post('/api/signUp', AuthController.signUp)

// home dinamica (rota)
app.get("/home/:id", async (req, res) => {
    const departmentId = req.params.id
    const departments = await Department.findAll()

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
            item_sections: item_sections,
            departments: departments 
        })
    }catch(err){
        console.log(err)
        res.render('error')
    }
})

// página do procedimento (rota)
app.get("/procedure/:id", async (req, res) => {
    const procedureId = req.params.id
    const departments = await Department.findAll()

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
            departments: departments,
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