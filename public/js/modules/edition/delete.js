import {get, on_click} from '/lib/main.js'
import BOOLEAN_PERMISSION from '../../../lib/parse_boolean.js'

const IS_USER_ADM = BOOLEAN_PERMISSION('adm')

const MAIN_BUTTON = get('#main_delete_button')
const TRASH_BUTTONS = get('.delete_button_container')

function activate_butons (){
    on_click(MAIN_BUTTON, ()=>{
        MAIN_BUTTON.classList.toggle('active')
        TRASH_BUTTONS.forEach(button => button.classList.toggle('hide'))
    })
}

export default function init_home_delete_button(){
    if(IS_USER_ADM){
        activate_butons()
    }else{
        MAIN_BUTTON.classList.add('hide')
    }
}