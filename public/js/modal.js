// getting the modal
const modal = document.querySelector('#modal')
const modal_close_button = document.querySelector('.modalCloseButton')
const modal_content = document.querySelector('.modalContent')
const modal_title = document.querySelector('.modal_title')

modal_close_button.addEventListener('click', () => {
    modal.classList.remove('show')
})

function dynamic_modal(target_component, title_component, content_component){
    // arrays
    const target = document.querySelectorAll(target_component)
    const title = document.querySelectorAll(title_component)
    const content = document.querySelectorAll(content_component)
    
    for(let i = 0; i < target.length; i++){
        target[i].addEventListener('click', ()=>{
            modal.classList.toggle('show')
            modal_title.innerText = title[i].innerText
            modal_content.innerText = content[i].innerText
        })
    }
    
}

// subsection description modal
dynamic_modal('.subsection_about_button', '.subsection_name', '.subsection_description')

function static_modal(target_component, title, content){
    const target = document.querySelectorAll(target_component)

    for(i = 0; i < target.length; i++){
        target[i].addEventListener('click', ()=>{
            modal.classList.toggle('show')
            modal_title.innerText = title
            modal_content.innerText = content
        })
    }
}

// empty item
static_modal('.emptyItemList', 'Item vazio!', 'Este item não possui conteúdo algum para ser visualizado no momento.')
