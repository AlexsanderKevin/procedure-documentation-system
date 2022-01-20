import {get} from '/lib/main.js'
import {this_user} from '/js/modules/this_user.js'

const MAIN_BUTTON = get('#main_delete_button')
const TRASH_BUTTONS = get('.delete_button_container')

function activate_buttons(){
    const required_elements = [
        MAIN_BUTTON,
        TRASH_BUTTONS.length,
    ]
    const requirements_met = required_elements.every(element => element)

    function activate(){
        MAIN_BUTTON.classList.toggle('active')
        TRASH_BUTTONS.forEach(button => button.classList.toggle('hide'))
    }

    requirements_met ? activate() : false
}

export default function init_delete_mode(){

    if(this_user.adm === 'true')
        MAIN_BUTTON.addEventListener('click', activate_buttons)
    else
        MAIN_BUTTON.remove()
}