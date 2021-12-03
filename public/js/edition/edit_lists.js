import {table, operation} from './edition_page.js'
import {get} from '../../lib/main.js'

export const list_frame = get('#list_frame')

export const edition_lists = [
    {
        content: get('.section'),
        value: 'section'
    },{
        content: get('.department'),
        value: 'department'
    },{
        content: get('.subsection'),
        value: 'subsection'
    },{
        content: get('.procedure'),
        value: 'procedure'
    },{
        content: get('.solution'),
        value: 'solution'
    },{
        content: get('.obs'),
        value: 'obs'
    },{
        content: get('.issue'),
        value: 'issue'
    },{
        content: get('.user'),
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