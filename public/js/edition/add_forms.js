import {table, operation} from './edition_page.js'
import {arr, get} from '../../lib/main.js'

const add_department = get('#add_department_form')
const add_subsection = get('#add_subsection_form')
const add_procedure = get('#add_procedure_form')
const add_solution = get('#add_solution_form')
const add_section = get('#add_section_form')
const add_issue = get('#add_issue_form')
const add_user = get('#add_user_form')
const add_obs = get('#add_obs_form')

export const add_forms = [
    {
        content: add_department,
        value: 'department'
    },{
        content: add_subsection,
        value: 'subsection'
    },{
        content: add_procedure,
        value: 'procedure',
    },{
        content: add_solution,
        value: 'solution',
    },{
        content: add_section,
        value: 'section',
    },{
        content: add_issue,
        value: 'issue',
    },{
        content: add_user,
        value: 'user',
    },{
        content: add_obs,
        value: 'obs',
    },  
]