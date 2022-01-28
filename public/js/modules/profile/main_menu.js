import { get, on_click } from "../../../lib/main.js"
import BOOLEAN_PERMISSION from "../../../lib/parse_boolean.js"


const USER_HAS_PERMISSION = BOOLEAN_PERMISSION('adm') 

console.log('adm: ', BOOLEAN_PERMISSION('adm'))
console.log("editor: ", BOOLEAN_PERMISSION('editor'))

const MENU = get('#main_menu')

function activate_buttons(){
    const radios = [
        {
            button: document.querySelector('#radio_user_list'),
            content: document.querySelector('#user_list_container')
        },{
            button: document.querySelector('#radio_approve_list'),
            content: document.querySelector('#profile #requisition_list_container')
        },
    ]
    radios.forEach(radio => handleCheck(radio))

    function handleCheck(radio_obj){
        const {button, content} = radio_obj

        if(button.checked)
            content.classList.remove('hide')
        else
            content.classList.add('hide')
    }
    
    radios.forEach(radio => {
        on_click(radio.button, ()=>{
            radios.forEach(radio => handleCheck(radio))
        })
    })
}

export default function init_menu(){

    if(USER_HAS_PERMISSION)
        activate_buttons()
    else
        MENU.remove()
}