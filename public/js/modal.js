// getting the modal
const modal = document.querySelector('#modal')
const modal_close_button = document.querySelector('.modalCloseButton')
const modal_content = document.querySelector('.modalContent')
const modal_title = document.querySelector('.modal_title')

modal_close_button.addEventListener('click', () => {
    modal.classList.remove('show')
})

// subsection description modal
const subsection_name = document.querySelectorAll('.subsection_name')
const about_button = document.querySelectorAll('.subsection_about_button')
const about_text = document.querySelectorAll('.subsection_description')

for(let i = 0; i < about_button.length; i++){
    about_button[i].addEventListener('click', () => {
        modal.classList.toggle('show')
        modal_title.innerHTML = subsection_name[i].innerText
        modal_content.innerHTML = about_text[i].innerHTML
    })
}

// empty item modal
const empty_item = document.querySelectorAll('.emptyItemList')

for(let i = 0; i < empty_item.length; i++){
    empty_item[i].addEventListener('click', () => {
        modal.classList.toggle('show')
        modal_title.innerText = 'Item vazio!'
        modal_content.innerText = 'Este item não possui conteúdo algum para ser visualizado no momento.'
    })
}