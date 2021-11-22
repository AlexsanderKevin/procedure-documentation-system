// dynamic burger for dynamic content
function burger(button_component, content_component, show_class, subcontent_component, hidden_class){
    const button = document.querySelectorAll(button_component)
    const content = document.querySelectorAll(content_component)
    const subcontent = document.querySelectorAll(subcontent_component)

    for(let i = 0; i < button.length; i++){
        button[i].addEventListener('click', ()=>{

            // toggle the show class in the content component
            for(let i = 0; i < content.length; i++){
                content[i].classList.toggle(show_class)
            }

            // add the hidden class when click
            for(let i = 0; i < subcontent.length; i++){
                subcontent[i].classList.remove(show_class)
                subcontent[i].classList.add(hidden_class)
            }
        })
    }
}

// main nav burger
burger('#nav_burger', '.nav_links', 'show', '.subsection_links', 'while_hidden')

// section menu 
burger('.settings_button', '.settings_links_container', 'show')

// dynamic burger to static content
function ds_burger(button_component, content_component, show_class){
    const button = document.querySelectorAll(button_component)
    const content = document.querySelectorAll(content_component)

    for(let i = 0; i < button.length; i++){
        button[i].addEventListener('click', ()=>{
            content[i].classList.toggle(show_class)
        })
    }
}

// item subsection burger
ds_burger('.subsection_burger', '.item_subsection_content', 'show_items')

// procedure page
ds_burger('.page_content_burger', '.item_content_text', 'show_text') // procedure sections
ds_burger('.single_content_burger', '.content_text', 'show_text') // single content
