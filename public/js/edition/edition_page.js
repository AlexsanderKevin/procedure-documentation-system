const table = document.querySelector('#table')
const operation = document.querySelector('#operation')
const add_user = document.querySelector('#add_user_form')
const add_section = document.querySelector('#add_section_form')
const add_solution = document.querySelector('#add_solution_form')
const add_procedure = document.querySelector('#add_procedure_form')
const add_department = document.querySelector('#add_department_form')
const add_subsection = document.querySelector('#add_subsection_form')
const add_obs = document.querySelector('#add_obs_form')

function show_form(target_value, targert_form, target_operation_value){
    if(table.value == target_value && operation.value == target_operation_value){
        targert_form.classList.add('show')
    }else{
        targert_form.classList.remove('show')
    }
}

function define_operation(){
    show_form('department', add_department, 'add')
    show_form('subsection', add_subsection, 'add')
    show_form('procedure', add_procedure, 'add')
    show_form('solution', add_solution, 'add')
    show_form('section', add_section, 'add')
    show_form('user', add_user, 'add')
    show_form('obs', add_obs, 'add')
    
}

operation.addEventListener('change', ()=>{define_operation()})
table.addEventListener('change', ()=>{define_operation()})

console.log('serto')