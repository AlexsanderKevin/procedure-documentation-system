import { get, on_click } from "/lib/main.js"

const update_form_interaction = (buttons, forms, contents, delete_buttons) => {
    const BUTTONS = get(buttons)
    const FORMS = get(forms)
    const CONTENTS = get(contents)
    const DELETE_BUTTONS = get(delete_buttons)
    FORMS.forEach(form => form.classList.add('hide'))

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
        `.close_update_${target}_form`
    )
})