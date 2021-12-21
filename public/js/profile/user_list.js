import { get, on_click, close } from "../../lib/main.js"

const cards = get('.user_info_container')
const user_quantity = get('#user_quantity')
user_quantity.innerText = cards.length

const add_button = get('#profile #user_list_container #add_user')
const add_user_form = get('#profile #add_user_form')
const cancel_button = get('#profile #user_list_container .cancel_button')

on_click(add_button, ()=>{
    add_button.classList.toggle('active')
    add_user_form.classList.toggle('show')
})

on_click(cancel_button, ()=>{
    close(add_user_form)
    add_button.classList.toggle('active')
})