import {table, operation} from './edition_page.js'
import {get} from '../../lib/main.js' 

export const add_forms = [
    {
        content: get('#add_department_form'),
        value: 'department'
    },{
        content: get('#add_subsection_form'),
        value: 'subsection'
    },{
        content: get('#add_procedure_form'),
        value: 'procedure',
    },{
        content: get('#add_solution_form'),
        value: 'solution',
    },{
        content: get('#add_section_form'),
        value: 'section',
    },{
        content: get('#add_issue_form'),
        value: 'issue',
    },{
        content: get('#add_user_form'),
        value: 'user',
    },{
        content: get('#add_obs_form'),
        value: 'obs',
    }
]