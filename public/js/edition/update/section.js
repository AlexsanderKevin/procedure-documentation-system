import { get, on_click } from "/lib/main.js"

const update_form_interaction = (buttons, forms, names, delete_buttons) => {
    const BUTTONS = get(buttons)
    const FORMS = get(forms)
    const NAMES = get(names)
    const DELETE_BUTTONS = get(delete_buttons)
    FORMS.forEach(form => form.classList.add('hide'))

    for(let i = 0; i<BUTTONS.length; i++){

        BUTTONS[i].addEventListener('click', ()=>{
            FORMS[i].classList.remove('hide')
            NAMES[i].classList.add('hide')
            BUTTONS[i].classList.add('hide')
            
            on_click(DELETE_BUTTONS[i], ()=>{
                FORMS[i].classList.add('hide')
                BUTTONS[i].classList.remove('hide')
                NAMES[i].classList.remove('hide')
            })
        })
    }
}

update_form_interaction(
    '.update_section_name',
    '.update_section_name_form',
    '.section_name_text',
    '.close_update_section_form'
)