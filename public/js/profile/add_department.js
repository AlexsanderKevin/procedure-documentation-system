import {get, on_click} from '/lib/main.js'
import { this_user } from './this_user.js'

const ADD_BUTTON = get('#add_department_button')
const ADD_FORM = get('#add_department_form')
const CLOSE_BUTTON = get('#close_add_department_form')

this_user.adm?true:ADD_BUTTON.classList.add('hide')

on_click(ADD_BUTTON, ()=>{
    ADD_FORM.classList.toggle('hide')
    ADD_BUTTON.classList.toggle('active')
})
on_click(CLOSE_BUTTON, ()=>{
    ADD_FORM.classList.add('hide')
    ADD_BUTTON.classList.remove('active')
})