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
const { redirect } = require("express/lib/response")
const { STRING } = require("sequelize")

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
// rota profile
app.get("/profile", async (req, res) => {
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
    
    res.render("profile",{
        departments: departments,
    })
})
//login
app.post("/auth", async (req, res) => {
    const username = req.body.username 
    const password = req.body.password

    const user = await User.findOne({ 
        where: { username: username },
        include: [{
            model: Comment,
        }]  
    })

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

            res.render("login", { 
                token: token, 
                departmentId: user.departmentId,
                user_name: user.name,
                user_department: user.departmentId,
                user_username: user.username,
                user_cargo: user.cargo,
                user_adm: user.adm,
                user_editor: user.editor,
            })
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
    
    try{
        const departments = await Department.findAll({
            where: {id: departmentId},
            include: [{
                model: ItemSection,
                include: [{
                    model: ItemSubsection,
                    include: [{
                        model: Item,
                        include:[
                            {model: ItemSolution},
                            {model: ItemIssue},
                            {model: ItemObs}
                        ]
                    }]
                }] 
            }]
        })

        res.render('home', {
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

    try{
        const departments = await Department.findAll({
            include: [{
                model: ItemSection,
                include: [{
                    model: ItemSubsection,
                    include: [{
                        model: Item,
                        where: {id: procedureId},
                        include:[
                            {model: ItemSolution},
                            {model: ItemIssue},
                            {model: ItemObs},
                            {model: Comment}
                        ]
                    }]
                }] 
            }]
        })

       res.render("procedure", {
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
    })
})
// pegando links externos da pasta public
app.use(express.static(__dirname + "/public"))

app.listen(3000, () => {
    console.log("server running...")
});
// input a new section
app.post("/create_section", async (req, res)=>{
    const NEW_SECTION = {
        name: req.body.section_title,
        departmentId: req.body.section_department
    }
    const REDIRECT_DEPARTMENT = req.body.department_id
    const CREATED_SECTION = await ItemSection.create(NEW_SECTION)
    res.redirect(`home/${REDIRECT_DEPARTMENT}`)
})
// input a new subsection
app.post('/create_subsection', async (req, res)=>{
    const NEW_SUBSECTION = {
        name: req.body.subsection_title,
        itemSectionId: req.body.subsection_section,
        description: req.body.subsection_description
    }
    const REDIRECT_DEPARTMENT = req.body.department_id
    const CREATED_SUBSECTION = await ItemSubsection.create(NEW_SUBSECTION)
    res.redirect(`home/${REDIRECT_DEPARTMENT}`)
})
// input a new procedure 
app.post('/create_procedure', async(req, res)=>{
    const NEW_PROCEDURE = {
        title: req.body.procedure_title,
        itemSubsectionId: req.body.procedure_subsection,
        description: req.body.procedure_description_input
    }
    const REDIRECT_DEPARTMENT = req.body.department_id
    const CREATED_PROCEDURE = await Item.create(NEW_PROCEDURE)
    res.redirect(`home/${REDIRECT_DEPARTMENT}`)
})
// input a new procedure solution
app.post('/create_solution', async(req, res)=>{
    const   NEW_SOLUTION = {
        title: req.body.solution_title,
        itemId: req.body.solution_procedure,
        content: req.body.solution_description
    }
    const CREATED_SOLUTION = await ItemSolution.create(NEW_SOLUTION)
    res.redirect(`procedure/${NEW_SOLUTION.itemId}`)
})
// input a new procedure issue
app.post('/create_issue', async(req, res)=>{
    const NEW_ISSUE = {
        title: req.body.issue_title,
        itemId: req.body.issue_procedure,
        content: req.body.issue_description
    }
    const CREATED_ISSUE = await ItemIssue.create(NEW_ISSUE)
    res.redirect(`procedure/${NEW_ISSUE.itemId}`)
})
// input a new procedure obs
app.post('/create_obs', async(req, res)=>{
    const NEW_OBS = {
        title: req.body.obs_title,
        itemId: req.body.obs_procedure,
        content:req.body.obs_description
    }
    const CREATED_OBS = await ItemObs.create(NEW_OBS)
    res.redirect(`procedure/${NEW_OBS.itemId}`)
})
// register user
app.post('/create_user', async(req, res)=>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.user_password, 10)
        const NEW_USER = {
            name: req.body.user_name,
            username: req.body.user_username,
            password: hashedPassword,
            departmentId: req.body.user_department,
            cargo: req.body.user_cargo,
            adm: req.body.adm_permission,
            editor: req.body.editor_permission
        }
        const CREATED_USER = await User.create(NEW_USER)
        res.redirect('profile')
    }catch(error){
        res.redirect('profile')
    }
})
// add new department
app.post('/create_department', async(req, res)=>{
    const NEW_DEPARTMENT = {name: req.body.department_name}
    const CREATED_DEPARTMENT = await Department.create(NEW_DEPARTMENT)
    res.redirect('profile')
})
// deleting main content with trash buttons
const destroy_row = (target, Model, redirect_route)=>{
    app.get(`/destroy_${target}/:id/:redirect`, async(req, res)=>{
        const ROW_ID = req.params.id
        const REDIRECT = req.params.redirect
        try{
            const DELETED_ROW = await Model.destroy({where:{id: ROW_ID}})
            res.redirect(redirect_route+REDIRECT)
        }catch{
            res.render('error')
        }
    })
}
destroy_row('section', ItemSection, '/home/')
destroy_row('subsection', ItemSubsection, '/home/')
destroy_row('procedure', Item, '/home/')
destroy_row('solution', ItemSolution, '/procedure/')
destroy_row('issue', ItemIssue, '/procedure/')
destroy_row('obs', ItemObs, '/procedure/')
// deleting a department
app.get('/destroy_department/:id', async(req, res)=>{
    const DEPARTMENT_ID = req.params.id
    try{
        const DELETED_DEPARTMENT = await Department.destroy({where: {id: DEPARTMENT_ID}})
        res.redirect('/profile')
    }catch{
        res.render('error')
    }
})
// deleting an user
app.get('/destroy_user/:id', async(req, res)=>{
    const USER_ID = req.params.id
    try{
        const DELETED_USER = await User.destroy({where: {id:USER_ID}})
        res.redirect('/profile')
    }catch{
        res.render('error')
    }
})
// reproving an addition requisitions
const reprove_requsition = (target, Model)=>{
    app.get(`/reprove_${target}/:id`, async(req, res)=>{
        const REQUISITON_ID = req.params.id
        try{
            const DELETED_REQUISITION = await Model.destroy({where: {id: REQUISITON_ID}})
            res.redirect('/profile')
        }catch{
            res.render('error')
        }
    })
}
// function to reprove content requisition
const approve_requisition = (target, Model)=>{
    app.get(`/approve_${target}/:id`, async(req, res)=>{
        const REQUISITON_ID = req.params.id
        try{
            const APPROVED_REQUISITION = await Model.update(
                {approved: true},
                {where: {id: REQUISITON_ID}}
            )
            res.redirect('/profile')
        }catch{
            res.render('error')
        }
    })
}
const TARGETS_AND_MODELS = [
    {target: 'section', Model: ItemSection},
    {target: 'subsection', Model: ItemSubsection},
    {target: 'procedure', Model: Item},
    {target: 'solution', Model: ItemSolution},
    {target: 'obs', Model: ItemObs},
    {target: 'issue', Model: ItemIssue},
]
TARGETS_AND_MODELS.forEach(item => {
    const {target, Model} = item
    approve_requisition(target, Model)
    reprove_requsition(target, Model)
})
const update_name = async(Model, new_name, target_id) => {
    const UPDATED_NAME = await Model.update(
        {name: new_name},
        {where: {id: target_id}}
    )
}
const update_title = async(Model, new_title, target_id) => {
    const UPDATED_TITLE = await Model.update(
        {title: new_title},
        {where: {id: target_id}}
    )
}
const update_table = (target_table,target_collumn, Model, redirect_page)=>{
    app.post(`/update_${target_table}_${target_collumn}/:id/:redirect`, async(req, res)=>{

        const NEW_CONTENT = req.body.new_content
        const TARGET_ITEM = req.params.id

        try{
            switch(target_collumn){
                case 'name': 
                    update_name(Model, NEW_CONTENT, TARGET_ITEM)
                    break

                case 'title':
                    update_title(Model, NEW_CONTENT, TARGET_ITEM)
                    break
            }
            res.redirect(`/${redirect_page}/${req.params.redirect}`)

        }catch{
            res.render('error')
        }
    })
}

update_table('section', 'name', ItemSection, 'home')
update_table('subsection', 'name', ItemSubsection, 'home')
update_table('procedure', 'title', Item, 'home')
update_table('solution', 'title', ItemSolution, 'procedure')
update_table('obs', 'title', ItemObs, 'procedure')
update_table('issue', 'title', ItemIssue, 'procedure')