import {get, on_click, open} from '/lib/main.js'
import {this_user} from '/js/profile/this_user.js'

const MAIN_BUTTON = get('#main_edit_button')
const EDITION_BUTTONS = [
    {buttons: get('.edit_section'), form: get("#edit_section_form")}
]
if(this_user.adm){

    on_click(MAIN_BUTTON, ()=>{
        MAIN_BUTTON.classList.toggle('active')
        EDITION_BUTTONS.forEach(item => {
            const {buttons} = item
            buttons.forEach(button => button.classList.toggle('hide'))
        })
    })
}else{
    MAIN_BUTTON.classList.add('hide')
}