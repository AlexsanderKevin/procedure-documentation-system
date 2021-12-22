import {get, on_click} from '/lib/main.js'
const MAIN_BUTTON = get('#main_delete_button')
const TRASH_BUTTONS = get('.delete_button_container')
const DEPARTMENT_MAIN_BUTTON = get('#main_delete_button.department')
const DELETE_DEPARTMENT_BUTTONS = get('.department_trash')

on_click(MAIN_BUTTON, ()=>{
    console.log('a')
    MAIN_BUTTON.classList.toggle('active')
    TRASH_BUTTONS.forEach(button => button.classList.toggle('hide'))
})
on_click(DEPARTMENT_MAIN_BUTTON, ()=>{
    DEPARTMENT_MAIN_BUTTON.classList.toggle('active')
    DELETE_DEPARTMENT_BUTTONS.forEach(button => button.classList.toggle('hide'))
})