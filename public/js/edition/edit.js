import {get, on_click, open} from '/lib/main.js'

const MAIN_BUTTON = get('#main_edit_button')
const modal = get('#edition_modal')
const EDITION_BUTTONS = [
    {buttons: get('.edit_section'), form: get("#edit_section_form")}
]

on_click(MAIN_BUTTON, ()=>{
    EDITION_BUTTONS.forEach(item => {
        const {buttons} = item
        buttons.forEach(button => button.classList.toggle('hide'))
    })
})
EDITION_BUTTONS.forEach(item => {
    const {buttons, form} = item
    buttons.forEach(button => on_click(button, ()=>{
        open(modal)
        open(form)
    }))
})