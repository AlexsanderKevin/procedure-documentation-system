const table = document.querySelector('#table')
const operation = document.querySelector('#operation')
// forms
const add_user = document.querySelector('#add_user_form')
const add_section = document.querySelector('#add_section_form')
const add_solution = document.querySelector('#add_solution_form')
const add_procedure = document.querySelector('#add_procedure_form')
const add_department = document.querySelector('#add_department_form')
const add_subsection = document.querySelector('#add_subsection_form')
const add_obs = document.querySelector('#add_obs_form')
const add_issue = document.querySelector('#add_issue_form')
// lists
//const department_list = document
// show respective form
function show_form(target_value, targert_form){
    if(table.value == target_value && operation.value == 'add'){
        targert_form.classList.add('show')
    }else{
        targert_form.classList.remove('show')
    }
}
// show respective list
function show_list(){
    
}
//defining th operations
function define_operation(){
    show_form('department', add_department)
    show_form('subsection', add_subsection)
    show_form('procedure', add_procedure)
    show_form('solution', add_solution)
    show_form('section', add_section)
    show_form('user', add_user)
    show_form('obs', add_obs)  
    show_form('issue', add_issue)  
}
operation.addEventListener('change', ()=>{define_operation()})
table.addEventListener('change', ()=>{define_operation()})

console.log('serto')