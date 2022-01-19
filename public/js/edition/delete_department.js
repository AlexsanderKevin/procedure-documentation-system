import {get, on_click} from '/lib/main.js'
import {this_user} from '/js/modules/this_user.js'

const DEPARTMENT_MAIN_BUTTON = get('#main_delete_button.department')
const DELETE_DEPARTMENT_BUTTONS = get('.department_trash')

if(this_user.adm){

    on_click(DEPARTMENT_MAIN_BUTTON, ()=>{
        DEPARTMENT_MAIN_BUTTON.classList.toggle('active')
        DELETE_DEPARTMENT_BUTTONS.forEach(button => button.classList.toggle('hide'))
    })
}else{
    DEPARTMENT_MAIN_BUTTON.classList.add('hide')
}