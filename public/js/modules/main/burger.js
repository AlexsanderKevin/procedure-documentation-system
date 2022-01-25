// dynamic burger for dynamic content
function burger(button_component, content_component, show_class, subcontent_component, hidden_class){
    const BUTTONS = document.querySelectorAll(button_component)
    const CONTENTS = document.querySelectorAll(content_component)

    if(BUTTONS && CONTENTS){

        function hide_subcontents (content) {
            const SUBCONTENTS = content.querySelectorAll(subcontent_component)

            SUBCONTENTS.forEach(subcontent => {
                subcontent.classList.remove(show_class)
                subcontent.classList.add(hidden_class)
            })
        }
    
        function show_content(){
            CONTENTS.forEach(item => {
                item.classList.toggle(show_class)
                hide_subcontents(item)
            })
        }

        BUTTONS.forEach(button => 
            button.addEventListener('click', show_content)
        )
    }
}

// dynamic burger to static content
function ds_burger(button_component, content_component, show_class){
    
    const BUTTONS = document.querySelectorAll(button_component)

    BUTTONS.forEach(button => {
        const PARENT = button.parentElement.parentElement
        const CONTENT = PARENT.querySelector(content_component)

        function show_content() {
            CONTENT? CONTENT.classList.toggle(show_class):false
        }
        
        if(CONTENT){
            if(CONTENT.children.length)
                button.addEventListener('click', show_content)
        }
    })
}



export default function burgers(){
    // main nav burger
    burger('#nav_burger', '.nav_links', 'show', '.subsection_links', 'while_hidden')
    // procedure page
    ds_burger('.page_content_burger', '.item_content_text', 'active') // procedure sections
    ds_burger('.page_content_burger', '.item_content_container', 'active')
    // subsection
    ds_burger('.subsection_burger', '.item_subsection_content', 'show_items')
}