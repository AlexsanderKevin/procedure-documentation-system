import {get, on_click} from '/lib/main.js'
import BOOLEAN_PERMISSION from '../../../lib/parse_boolean.js'

const IS_USER_ADM = BOOLEAN_PERMISSION('adm')

const DEPARTMENT_MAIN_BUTTON = get('#main_delete_button.department')
const DELETE_DEPARTMENT_BUTTONS = get('.department_trash')

function activate_mode(){
    DEPARTMENT_MAIN_BUTTON.classList.toggle('active')
    DELETE_DEPARTMENT_BUTTONS.forEach(button => button.classList.toggle('hide'))
}

export default function init_delete_department_mode(){

    if(IS_USER_ADM){
        on_click(DEPARTMENT_MAIN_BUTTON, activate_mode)
    
    }else{
        DEPARTMENT_MAIN_BUTTON.classList.add('hide')
    }
}