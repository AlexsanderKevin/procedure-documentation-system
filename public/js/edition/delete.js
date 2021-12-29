import {get, on_click} from '/lib/main.js'
import {this_user} from '/js/profile/this_user.js'

const MAIN_BUTTON = get('#main_delete_button')
const TRASH_BUTTONS = get('.delete_button_container')

if(this_user.adm){

    on_click(MAIN_BUTTON, ()=>{
        MAIN_BUTTON.classList.toggle('active')
        TRASH_BUTTONS.forEach(button => button.classList.toggle('hide'))
    })
}else{
    MAIN_BUTTON.classList.add('hide')
}