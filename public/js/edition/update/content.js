import { get, on_click } from "/lib/main.js"
import {this_user} from '/js/profile/this_user.js'

const update_form_interaction = (buttons, forms, contents, delete_buttons) => {
    const BUTTONS = get(buttons)
    const FORMS = get(forms)
    const CONTENTS = get(contents)
    const DELETE_BUTTONS = get(delete_buttons)
    FORMS.forEach(form => form.classList.add('hide'))

    if(this_user.adm){

        for(let i = 0; i<BUTTONS.length; i++){
    
            BUTTONS[i].addEventListener('click', ()=>{
                FORMS[i].classList.remove('hide')
                CONTENTS[i].classList.add('hide')
                BUTTONS[i].classList.add('hide')
                
                DELETE_BUTTONS[i].addEventListener('click', ()=>{
                    FORMS[i].classList.add('hide')
                    BUTTONS[i].classList.remove('hide')
                    CONTENTS[i].classList.remove('hide')
                })
            })
        }
    }
}
const updatable_targets = [
    'section', 
    'subsection', 
    'procedure', 
    'solution', 
    'obs', 
    'issue'
]
updatable_targets.forEach(target => {
    // titles / names
    update_form_interaction(
        `.update_${target}_title`,
        `.update_${target}_title_form`,
        `.${target}_title_text`,
        `.close_update_${target}_form`
    )
    // content / description
    update_form_interaction(
        `.update_${target}_description`,
        `.update_${target}_description_form`,
        `.${target}_description_text`,
        `.close_update_description_${target}_form`
    )
})
update_form_interaction(
    '.update_user_button',
    '.update_user_form',
    '.user_info_subcontainer',
    '.close_update_user_form'
)