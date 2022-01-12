const home_close = (content_component, show_class) => {

    const BUTTON = document.querySelector('#home_button')
    const CONTENTS = document.querySelectorAll(content_component)

    BUTTON.addEventListener('click', ()=>{
        CONTENTS.forEach(content => content.classList.remove(show_class))
    })
}
// home page
home_close('.item_subsection_content', 'show_items') // close subsections
// procedure page
home_close('.item_content_text', 'active') // close the content sections
home_close('.inner_div', 'active') // close the single contents
home_close('.item_content_container', 'active') 