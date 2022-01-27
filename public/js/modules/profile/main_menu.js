import { get, on_click } from "../../../lib/main.js"
import { this_user } from "../this_user.js"

const USER_HAS_PERMISSION = this_user.adm

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
    
    function on_click_buttons(){

        radios.forEach(radio => {
            on_click(radio.button, ()=>{
                const bg_img = get('#bg_img')
                bg_img.classList.add('hide')
                radios.forEach(radio => {const {button, content} = radio

                    if(button.checked){
                        content.classList.remove('hide')
                    }else{
                        content.classList.add('hide')
                    }
                })
            })
        })
    }
    on_click_buttons()
}

export default function init_menu(){

    if(USER_HAS_PERMISSION)
        activate_buttons()
    else
        MENU.remove()
}