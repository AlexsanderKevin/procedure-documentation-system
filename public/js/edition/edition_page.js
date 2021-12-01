import {arr, get} from '../../lib/main.js'

const table = get('#table')
const operation = get('#operation')
// forms
const add_user = get('#add_user_form')
const add_section = get('#add_section_form')
const add_solution = get('#add_solution_form')
const add_procedure = get('#add_procedure_form')
const add_department = get('#add_department_form')
const add_subsection = get('#add_subsection_form')
const add_obs = get('#add_obs_form')
const add_issue = get('#add_issue_form')
// lists
const department_list = get('#department_list')
// show respective content
function show_content(target_value, targert_content, target_operation){
    if(table.value == target_value && operation.value == target_operation){
        targert_content.classList.add('show')
    }else{
        targert_content.classList.remove('show')
    }
}
// show respective list
function show_list(){
    if(table.value == 'department' && operation.value == 'edit'){
        department_list.classList.add('show')
    }
}
//defining th operations
function define_operation(){
// showing forms
    show_content('department', add_department, 'add')
    show_content('subsection', add_subsection, 'add')
    show_content('procedure', add_procedure, 'add')
    show_content('solution', add_solution, 'add')
    show_content('section', add_section, 'add')
    show_content('user', add_user, 'add')
    show_content('obs', add_obs, 'add')  
    show_content('issue', add_issue, 'add') 
// showing lists
    show_content('department', department_list, 'edit') 
}
operation.addEventListener('change', ()=>{define_operation()})
table.addEventListener('change', ()=>{define_operation()})

console.log('serto')