import { get, on_click } from "../../../lib/main.js"
import BOOLEAN_PERMISSION from "../../../lib/parse_boolean.js"

export default function init_menu(){

    const USER_HAS_PERMISSION = BOOLEAN_PERMISSION('adm') 
    const MENU = get('#main_menu')
    const BG_IMG = document.querySelector('#bg_img')
    
    console.log('adm: ', BOOLEAN_PERMISSION('adm'))
    console.log("editor: ", BOOLEAN_PERMISSION('editor'))
    
    
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
    
    if(USER_HAS_PERMISSION){
        activate_buttons()
        BG_IMG.classList.add('hide')
    }
    else
        MENU.remove()
}