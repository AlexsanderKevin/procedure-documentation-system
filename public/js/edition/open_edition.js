import {get} from '../../lib/main.js'

const start_edition_button = get('#edition_mode_button')

start_edition_button.addEventListener('click', ()=>{
    const edition_buttons = get('.edition_mode')
    for(let i = 0; i < edition_buttons.length; i++){
        edition_buttons[i].classList.toggle('show')
    }
})