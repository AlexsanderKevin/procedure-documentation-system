import { get } from "../../lib/main.js"

export const add_buttons = [
    {
        buttons: get('.add_procedure_button'),
        form: get('#add_procedure_form'),
    },
    {
        buttons: get('.add_section_button'),
        form: get('#add_section_form')
    },
    {
        buttons: get('.add_subsection_button'),
        form: get('#add_subsection_form')
    }
]

export const edit_buttons = [
    {
        buttons: get('.edit_procedure_button'),
        form: get('#add_procedure_form')
    }
]