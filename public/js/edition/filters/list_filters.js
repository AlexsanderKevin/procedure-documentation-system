import {get} from '../../../lib/main.js'
import {table} from '../edition_page.js'
import { filter_types } from './filter_options.js'

const filter_by = get('#filter_by')
const filter_opt = get('.filter_by option')

function show_option(array){
    for(let i = 0; i < filter_opt.length; i++){
        if(array.includes(filter_opt[i].value)){
            filter_opt[i].classList.add('show')
        }else{
            filter_opt[i].classList.remove('show')
        }
    }
}
table.addEventListener('change', ()=>{
    filter_by.value = 'invalid'
    switch(table.value){
        case 'department':
            show_option('department')
            break
        case 'section':
            show_option(['department', 'section'])
            break
        case 'subsection':
            show_option(['department', 'section', 'subsection'])
            break
        case 'procedure':
            show_option(['department', 'section', 'subsection', 'procedure'])
            break
        case 'solution':
            show_option(['procedure'])
            break
        case 'obs':
            show_option(['procedure'])
            break
        case 'issue':
            show_option(['procedure'])
            break
        case 'user':
            show_option(['department', 'user'])
            break
    }
})
function show(target_value, target_list){
    if(target_value == filter_by.value){
        target_list.classList.add('show')
    }else{
        target_list.classList.remove('show')
    }
}
filter_by.addEventListener('change', ()=>{
    for(let i = 0; i < filter_types.length; i++){
        //destructuring
        const {value, list, input} = filter_types[i]
        input.value = ''
        show(value, list)
    }
})