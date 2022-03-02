import {get, on_click} from '/lib/main.js'
import BOOLEAN_PERMISSION from '../../../lib/parse_boolean.js'

export default function init_addition(){
    const USER_HAS_PERMISSION = BOOLEAN_PERMISSION('adm')
    const ADD_BUTTON = get('#add_department_button')
    const ADD_FORM = get('#add_department_form')
    const CLOSE_BUTTON = get('#close_add_department_form')
    
    function initButtons(){
        on_click(ADD_BUTTON, ()=>{
            ADD_FORM.classList.toggle('hide')
            ADD_BUTTON.classList.toggle('active')
        })
        on_click(CLOSE_BUTTON, ()=>{
            ADD_FORM.classList.add('hide')
            ADD_BUTTON.classList.remove('active')
        })
    }

    if(USER_HAS_PERMISSION)
        initButtons()
    else
        ADD_BUTTON.remove()
}