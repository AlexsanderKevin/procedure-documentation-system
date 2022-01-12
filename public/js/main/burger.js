// dynamic burger for dynamic content
function burger(button_component, content_component, show_class, subcontent_component, hidden_class){
    const BUTTONS = document.querySelectorAll(button_component)
    const CONTENTS = document.querySelectorAll(content_component)

    BUTTONS.forEach(button => {
        button.addEventListener('click', ()=>{

            CONTENTS.forEach(item => {
                item.classList.toggle(show_class)

                const SUBCONTENTS = item.querySelectorAll(subcontent_component)
                SUBCONTENTS.forEach(subcontent => {
                    subcontent.classList.remove(show_class)
                    subcontent.classList.add(hidden_class)
                })
            })
        })
    })
}
// main nav burger
burger('#nav_burger', '.nav_links', 'show', '.subsection_links', 'while_hidden')

// dynamic burger to static content
function ds_burger(button_component, content_component, show_class){

    const BUTTONS = document.querySelectorAll(button_component)
    BUTTONS.forEach(button => {
        const PARENT = button.parentElement.parentElement
        const CONTENT = PARENT.querySelector(content_component)

        const show_content = ()=>{
            CONTENT? CONTENT.classList.toggle(show_class):false
        }

        button.addEventListener('click', show_content)
    })
}
// item subsection burger
ds_burger('.subsection_burger', '.item_subsection_content', 'show_items')
// procedure page
ds_burger('.page_content_burger', '.item_content_text', 'active') // procedure sections
ds_burger('.page_content_burger', '.item_content_container', 'active')