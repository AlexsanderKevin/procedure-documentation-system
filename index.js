const express = require("express")
const express_handlebars = require('express-handlebars')
//database
const Department = require("./app/models/department")
const User = require("./app/models/user")
const ItemSection = require("./app/models/item_section")
const ItemSubsection = require("./app/models/item_subsection")
const Item = require("./app/models/item")
const ItemSolution = require("./app/models/item_solution")
const ItemObs = require("./app/models/item_obs")
const ItemIssue = require("./app/models/item_issues")
const Comment = require("./app/models/comment")
//app
const app = express()
app.use(express.json());
app.use(express.urlencoded());
// controller
const bodyParser = require("body-parser")
const AuthController = require('./app/controllers/AuthController')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require("dotenv").config();
//const hbs_helpers = require('./public/helpers')
const Helpers = require('./public/helpers/index.js')

const hbs = express_handlebars.create({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: Helpers,
})

app.engine('hbs', hbs.engine)

app.set('view engine', 'hbs')

// rota padrão
app.get("/departments", async (req, res) => {
    const departments = await Department.findAll()

    res.render("departments",{
        departments: departments,
    })
})

//login
app.post("/auth", async (req, res) => {
    const username = req.body.username 
    const password = req.body.password

    const user = await User.findOne({ where: { username: username }  })

    if(user){
        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if(isPasswordCorrect){
            const token = jwt.sign(
                { id: user.id, departmentId: user.departmentId },
                process.env.SECRET,
                {
                  expiresIn: "10h",
                }
            );

            console.log(token)

            res.render("login", { token: token, departmentId: user.departmentId })
        }else{
            res.render("login", { error: "Senha incorreta"})
        }
    }else{
        res.render("login", { error: "Usuario nao encontrado"})
    }
})

app.get("/", (req, res) => {
    res.render("login")
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
// register route
app.get("/register", async (req, res) => {
    const departments = await Department.findAll()
    res.render("register", {
        departments: departments,
    })
})
// edit route
app.get("/edit", async (req, res) => {
    const items = await Item.findAll()
    const users = await User.findAll()
    const item_sections = await ItemSection.findAll()
    const item_solutions = await ItemSolution.findAll()
    const item_subsections = await ItemSubsection.findAll()
    const item_issues = await ItemIssue.findAll()
    const item_obs = await ItemObs.findAll()
    /*
    */
   const departments = await Department.findAll({
        include:[
            {
                model: ItemSection,
                include: [{
                    model:ItemSubsection,
                    include: [{
                        model: Item,
                        include: [
                            {model: ItemSolution},
                            {model: ItemObs},
                            {model: ItemIssue}
                        ]
                    }]
                }]
            },{
                model: User
            }
        ]
   })

    res.render("edition", {
        departments: departments,
        users: users,
        items: items,
        item_sections: item_sections,
        item_solutions: item_solutions,
        item_subsections: item_subsections,
        item_issues: item_issues,
        item_obs: item_obs,
        /*
        */
    })
})

// pegando links externos da pasta public
app.use(express.static(__dirname + "/public"))

app.listen(3000, () => {
    console.log("server running...")
});