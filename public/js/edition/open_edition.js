import {get, on_click, close, open, on_change} from '../../lib/main.js'
import { add_buttons } from './button_arrays.js'

const start_edition_button = get('#edition_mode_button')
const modal = get('#edition_modal')
const cancel_buttons = get('.cancel_button')
const header = get('#edition_header')
const main_add_button = get('#main_add_button')
const add_options = get('#add_options_container')
const add_forms = {
    add_procedure: get('#add_procedure_form'),
    add_section: get('#add_section_form'),
    add_subsection: get('#add_subsection_form'),
}

on_click(main_add_button, ()=>{add_options.classList.toggle('hide')})
on_change(add_options, ()=>{
    open(modal)
    switch(add_options.value){
        case 'procedure': 
            open(add_forms.add_procedure)
            break
        case 'section': 
            open(add_forms.add_section)
            break
        case 'subsection': 
            open(add_forms.add_subsection)
            break
    }

    add_options.classList.add('hide')
    add_options.value = ''
})

function show_forms(){  
    add_buttons.forEach(item => {
        const {buttons, form} = item
        buttons.forEach(button => {on_click(button, ()=>{open(form)})})
    })
}
// this inits the edition mode
on_click(start_edition_button, ()=>{
    header.classList.toggle('hide')
    add_options.classList.add('hide')
    show_forms()
})
// this closes the modal when click in the cancel buttons
cancel_buttons.forEach(button => {
    on_click(button, ()=>{
        close(modal)
        // this close the form with the modal
        add_buttons.forEach(item =>{
            const {button, form} = item
            close(form)
        })
    })
});
