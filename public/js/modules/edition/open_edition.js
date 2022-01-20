import {get, on_click, close, open, on_change} from '../../../lib/main.js'
import {this_user} from '/js/modules/this_user.js'

const bg_img = get('#edit_bg_img')
const start_edition_button = get('#edition_mode_button')

const modal = get('#edition_modal')
const cancel_buttons = get('.cancel_button')
const header = get('#edition_header')
const add_options = get('#add_options_container')
const add_forms = {
    add_department: get('#add_department_form'),
    add_procedure: get('#add_procedure_form'),
    add_section: get('#add_section_form'),
    add_subsection: get('#add_subsection_form'),
    add_solution: get('#add_solution_form'),
    add_issue: get('#add_issue_form'),
    add_obs: get('#add_obs_form'),
}
const UPDATE_BUTTONS = get('.edit_mode')
const DELETE_BUTTONS = get('.delete_button_container')
const MAIN_UPDATE_BUTTON = get('#main_edit_button')

function open_respective_modal(){
    const required_elements = [
        add_options,
        add_forms,
        modal,
    ]
    const requirements_met = required_elements.every(element => element)

    function selecting_modal(){
        on_change(add_options, ()=>{
            open(modal)
            switch(add_options.value){
                case 'department': open(add_forms.add_department)
                    break
                case 'procedure': open(add_forms.add_procedure)
                    break
                case 'section': open(add_forms.add_section)
                    break
                case 'subsection': open(add_forms.add_subsection)
                    break
                case 'solution': open(add_forms.add_solution)
                    break
                case 'issue': open(add_forms.add_issue)
                    break
                case 'obs': open(add_forms.add_obs)
                    break
            }
            add_options.value = ''
        })
    }
    requirements_met ? selecting_modal() : false
}

function init_edition_mode(){
    const required_elements = [
        start_edition_button,
        bg_img,
        header,
        UPDATE_BUTTONS,
        DELETE_BUTTONS,
        MAIN_UPDATE_BUTTON,
    ]
    const requirements_met = required_elements.every(element => element)

    function click_to_start(){
        on_click(start_edition_button, ()=>{
            bg_img.classList.toggle('hide')
            header.classList.toggle('hide')
            UPDATE_BUTTONS.forEach(button => button.classList.add('hide'))
            DELETE_BUTTONS.forEach(button => button.classList.add('hide'))
            MAIN_UPDATE_BUTTON.classList.remove('active')
        })
    }
    requirements_met ? click_to_start() : false
}
function close_add_modal(){
    const required_elements = [
        cancel_buttons,
        modal, 
        add_forms,
    ]
    const requirements_met = required_elements.every(element => element)

    function close_all_modals(){
        cancel_buttons.forEach(button => {
            on_click(button, ()=>{
                close(modal)
                // this close the form with the modal
                close(add_forms.add_procedure)
                close(add_forms.add_section)
                close(add_forms.add_subsection)
                close(add_forms.add_solution)
                close(add_forms.add_obs)
                close(add_forms.add_issue)
            })
        });
    }
    requirements_met ? close_all_modals() : false
}

export default function start_edition(){
    if(this_user.editor === 'true'){
        init_edition_mode()
        close_add_modal()
        open_respective_modal()
        
    }else{
        start_edition_button ? start_edition_button.remove() : false
    }
}
