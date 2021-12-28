const MODAL_CONTAINERS = document.querySelectorAll('.description_modal_container')
const MODAL_FRAMES = document.querySelectorAll('.description_modal_container')
const ABOUT_BUTTONS = document.querySelectorAll('.subsection_about_button')
const CLOSE_BUTTONS = document.querySelectorAll('.close_description_modal')

for(let i = 0; i < ABOUT_BUTTONS.length; i++){

    ABOUT_BUTTONS[i].addEventListener('click', ()=>{
        MODAL_CONTAINERS[i].classList.add('show')
        MODAL_FRAMES[i].classList.add('show')
    })
}
CLOSE_BUTTONS.forEach(button => {

    button.addEventListener('click', ()=>{
        MODAL_CONTAINERS.forEach(modal => modal.classList.remove('show'))
        MODAL_FRAMES.forEach(modal => modal.classList.remove('show'))
    })
})