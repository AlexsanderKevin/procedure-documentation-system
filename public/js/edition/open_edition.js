import {get} from '../../lib/main.js'
import { add_buttons } from './button_arrays.js'

const start_edition_button = get('#edition_mode_button')
const modal = get('#edition_modal')
const edition_buttons = get('.edition_mode')

function show_forms(){
    for(let i = 0; i < add_buttons.length; i++){   
        const{buttons, form} = add_buttons[i]

        for(let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener('click', ()=>{
                form.classList.add('show')
            })
        }
    }
}

start_edition_button.addEventListener('click', ()=>{
    for(let i = 0; i < edition_buttons.length; i++){
        edition_buttons[i].classList.toggle('show')
    }
    button_task(edition_buttons)
    show_forms()
})

function button_task(button_array){
    for(let i = 0; i < button_array.length; i++){
        button_array[i].addEventListener('click', ()=>{
            modal.classList.add('show')
        })
    }
}