import {table, operation} from './edition_page.js'
import {arr, get} from '../../lib/main.js'

export const list_frame = get('#list_frame')

const section_list = get('#section_list')

export const edition_lists = [
    {
        content: section_list,
        value: 'section'
    }
]

export function show_list_frame(){
    if(table.value && operation.value == 'edit'){
        list_frame.classList.add('show')
    }else{
        list_frame.classList.remove('show')
    }
}

console.log('serto')