import { get} from "/lib/main.js"
import BOOLEAN_PERMISSION from "../../../lib/parse_boolean.js"

const IS_USER_ADM = BOOLEAN_PERMISSION('adm')

const update_form_interaction = (buttons, forms, contents, delete_buttons) => {
    const BUTTONS = get(buttons)
    const FORMS = get(forms)
    const CONTENTS = get(contents)
    const DELETE_BUTTONS = get(delete_buttons)

    function show_forms(index){
        FORMS[index].classList.remove('hide')
        CONTENTS[index].classList.add('hide')
        BUTTONS[index].classList.add('hide')
    }
    function hide_forms(index){
        FORMS[index].classList.add('hide')
        BUTTONS[index].classList.remove('hide')
        CONTENTS[index].classList.remove('hide')
    }

    BUTTONS.forEach((BUTTON, index) => {
        BUTTON.addEventListener('click', ()=>{
            show_forms(index)

            DELETE_BUTTONS[index].addEventListener('click', ()=>{
                hide_forms(index)
            })
        })
    })
}
function execute_updates(){
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
}

export default function initUpdates(){
    if(IS_USER_ADM)
        execute_updates()
}