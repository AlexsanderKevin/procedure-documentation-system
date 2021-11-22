//arrays
const section_links = document.querySelectorAll('.section_links')
const subsection_links = document.querySelectorAll('.subsection_links')

// show subsection links when click on section links
for(let i = 0; i < section_links.length; i ++){
    section_links[i].addEventListener('click', () => {
        subsection_links[i].classList.toggle('show')
        subsection_links[i].classList.toggle('while_hidden')
    })
}

function nav_to_content(nav_component, content_component, anchor_component, show_nav_class, show_content_class){
    const nav = document.querySelector(nav_component)
    const content = document.querySelectorAll(content_component)
    const anchor = document.querySelectorAll(anchor_component)

    for(let i = 0; i < content.length; i++){
        anchor[i].addEventListener('click', ()=>{
            //hide nav
            nav.classList.toggle(show_nav_class)
            //open content
            content[i].classList.add(show_content_class)
        })
    }
}

// home nav
nav_to_content('.nav_links', '.item_subsection_content', '.subsection_anchor', 'show', 'show_items')
//procedure nav
nav_to_content('.nav_links', '.item_content_text', '.procedure_nav_anchor', 'show', 'show_text')