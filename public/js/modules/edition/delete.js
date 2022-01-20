import {get, on_click} from '/lib/main.js'
import {this_user} from '/js/modules/this_user.js'

const MAIN_BUTTON = get('#main_delete_button')
const TRASH_BUTTONS = get('.delete_button_container')

function activate_butons (){
    on_click(MAIN_BUTTON, ()=>{
        MAIN_BUTTON.classList.toggle('active')
        TRASH_BUTTONS.forEach(button => button.classList.toggle('hide'))
    })
}

export default function init_home_delete_button(){
    if(this_user.adm){
        activate_butons()
    }else{
        MAIN_BUTTON.classList.add('hide')
    }
}