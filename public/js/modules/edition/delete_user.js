import {get, on_click} from '/lib/main.js'

const USER_MAIN_BUTTON = document.querySelector('#main_delete_button.user')
const DELETE_USER_BUTTONS = document.querySelectorAll('.user_trash')


function activate_mode(){
    USER_MAIN_BUTTON.classList.toggle('active')
    DELETE_USER_BUTTONS.forEach(button => button.classList.toggle('hide'))
}

export default function init_delete_mode(){
    on_click(USER_MAIN_BUTTON, activate_mode)
}