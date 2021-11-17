const subsection_burger = document.querySelectorAll('.subsection_burger')
const subsection_content = document.querySelectorAll('.item_subsection_content')

for(let i = 0; i < subsection_burger.length; i++){
    subsection_burger[i].addEventListener('click', () => {
        subsection_content[i].classList.toggle('show_items')
    })
}

// description viewing
const subsection_name = document.querySelectorAll('.subsection_name')
const about_button = document.querySelectorAll('.subsection_about_button')
const about_text = document.querySelectorAll('.subsection_description')

const modal = document.querySelector('#modal')
const modal_close_button = document.querySelector('.modalCloseButton')
const modal_content = document.querySelector('.modalContent')
const modal_title = document.querySelector('.modal_title')

modal_close_button.addEventListener('click', () => {
    modal.classList.remove('show')
})

for(let i = 0; i < about_button.length; i++){
    about_button[i].addEventListener('click', () => {
        modal.classList.toggle('show')
        modal_content.innerHTML = about_text[i].innerHTML
        modal_title.innerHTML = subsection_name[i].innerText
    })
}