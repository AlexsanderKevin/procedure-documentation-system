import {arr, get} from '../../lib/main.js'
import {add_forms} from './add_forms.js'
import {show_list_frame, edition_lists} from './edit_lists.js'

export const table = get('#table')
export const operation = get('#operation')

export function show(target_value, targert_content, target_operation){
    if(table.value == target_value && operation.value == target_operation){
        targert_content.classList.add('show')
    }else{
        targert_content.classList.remove('show')
    }
}
//defining the operations
function define_operation(array, operation){
    for(let i = 0; i < array.length; i++){
        show(array[i].value, array[i].content, operation)
    }
    show_list_frame()
}
const header = [operation, table]
// it applies it's functions all edition operations
for(let i = 0; i < header.length; i++){
    header[i].addEventListener('change', ()=>{
        define_operation(add_forms, 'add')
        define_operation(edition_lists, 'edit')
    })
}