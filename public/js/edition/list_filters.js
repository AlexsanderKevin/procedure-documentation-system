import {get, arr} from '../../lib/main.js'
import {table} from './edition_page.js'

const filter_by = arr('.filter_by')
const filter_opt = arr('.filter_by option')

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
    }
})