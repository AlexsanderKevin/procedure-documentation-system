import {get, on_click, open} from '/lib/main.js'
import BOOLEAN_PERMISSION from '../../../lib/parse_boolean.js'

const MAIN_BUTTON = get('#main_edit_button')
const EDITION_BUTTONS = document.querySelectorAll('.edit_section')
const IS_USER_ADM = BOOLEAN_PERMISSION('adm')

function validate_permissions(){
    if(!IS_USER_ADM){
        MAIN_BUTTON.remove()
        EDITION_BUTTONS.forEach(button => button.remove())
    }
}

function update_mode(){
    const required_elements = [
        MAIN_BUTTON, 
        EDITION_BUTTONS,
    ]
    const requirements_met = required_elements.every(element => element)
    
    function activate_mode(){
        on_click(MAIN_BUTTON, ()=>{
            MAIN_BUTTON.classList.toggle('active')
            EDITION_BUTTONS.forEach(button => button.classList.toggle('hide'))
        })
    }

    requirements_met ? activate_mode() : false
}

export default function init_update_mode(){
    validate_permissions()
    update_mode()
}