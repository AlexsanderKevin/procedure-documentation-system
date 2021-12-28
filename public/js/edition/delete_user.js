import {get, on_click} from '/lib/main.js'

const USER_MAIN_BUTTON = get('#main_delete_button.user')
const DELETE_USER_BUTTONS = get('.user_trash')
on_click(USER_MAIN_BUTTON, ()=>{
    USER_MAIN_BUTTON.classList.toggle('active')
    DELETE_USER_BUTTONS.forEach(button => button.classList.toggle('hide'))
})