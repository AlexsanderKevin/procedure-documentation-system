import {get, on_click} from '/lib/main.js'
const MAIN_BUTTON = get('#main_delete_button')
const TRASH_BUTTONS = get('.delete_button_container')

on_click(MAIN_BUTTON, ()=>{
    MAIN_BUTTON.classList.toggle('active')
    TRASH_BUTTONS.forEach(button => button.classList.toggle('hide'))
})