import {get, on_click} from '/lib/main.js'

export default function init_addition(){
    const ADD_BUTTON = get('#add_department_button')
    const ADD_FORM = get('#add_department_form')
    const CLOSE_BUTTON = get('#close_add_department_form')
    
    if(ADD_BUTTON && ADD_FORM && CLOSE_BUTTON){
    
        on_click(ADD_BUTTON, ()=>{
            ADD_FORM.classList.toggle('hide')
            ADD_BUTTON.classList.toggle('active')
        })
        on_click(CLOSE_BUTTON, ()=>{
            ADD_FORM.classList.add('hide')
            ADD_BUTTON.classList.remove('active')
        })
    }
}