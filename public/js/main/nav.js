const SECTION_LINKS = document.querySelectorAll('.section_links_container')
SECTION_LINKS.forEach(link => {

    const SUBSECTION_LINKS_CONTAINER = link.querySelector('.subsection_links_container')

    const show_links = () => {
        SUBSECTION_LINKS_CONTAINER.classList.toggle('show')
        SUBSECTION_LINKS_CONTAINER.classList.toggle('while_hidden')
    }
    link.addEventListener('click', show_links)
})
const nav_to_content = (nav_component, content_component, anchor_component, show_nav_class, show_content_class) => {
    const NAV = document.querySelector(nav_component)
    const CONTENTS = document.querySelectorAll(content_component)
    const ANCHORS = NAV.querySelectorAll(anchor_component)

    ANCHORS.forEach((anchor, index) => anchor.addEventListener('click', ()=>{
        NAV.classList.remove(show_nav_class)
        CONTENTS[index].classList.add(show_content_class)
    }))
}
// home nav
nav_to_content('.nav_links', '.item_subsection_content', '.subsection_anchor', 'show', 'show_items')
//procedure nav
nav_to_content('.nav_links', '.item_content_text', '.procedure_nav_anchor', 'show', 'active')