import {get, on_click} from '/lib/main.js'

const ADD_BUTTON = get('#add_department_button')
const ADD_FORM = get('#add_department_form')
const CLOSE_BUTTON = get('#close_add_department_form')
on_click(ADD_BUTTON, ()=>{
    ADD_FORM.classList.toggle('hide')
})
on_click(CLOSE_BUTTON, ()=>{
    ADD_FORM.classList.add('hide')
})