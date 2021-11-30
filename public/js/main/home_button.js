function home_close(content_component, show_class){
    const button = document.querySelector('.home_button')
    const content = document.querySelectorAll(content_component)

    button.addEventListener('click', (e)=>{
        for(let i = 0; i < content.length; i++){
            content[i].classList.remove(show_class)
        }
    })
    
}

// home page
home_close('.item_subsection_content', 'show_items') // close subsections

// procedure page
home_close('.item_content_text', 'show_text') // close the content sections
home_close('.content_text', 'show_text') // close the single contents