import {table, operation} from './edition_page.js'
import {get} from '../../lib/main.js'

export const list_frame = get('#list_frame')

export const edition_lists = [
    {
        content: get('#section_list'),
        value: 'section'
    },{
        content: get('#department_list'),
        value: 'department'
    },{
        content: get('#subsection_list'),
        value: 'subsection'
    },{
        content: get('#procedure_list'),
        value: 'procedure'
    },{
        content: get('#solution_list'),
        value: 'solution'
    },{
        content: get('#obs_list'),
        value: 'obs'
    },{
        content: get('#issue_list'),
        value: 'issue'
    },{
        content: get('#user_list'),
        value: 'user'
    }
]

export function show_list_frame(){
    if(table.value && operation.value == 'edit'){
        list_frame.classList.add('show')
    }else{
        list_frame.classList.remove('show')
    }
}