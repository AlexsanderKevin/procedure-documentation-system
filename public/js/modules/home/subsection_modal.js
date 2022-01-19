export default function init_about_modal(){

    const MODAL_CONTAINERS = document.querySelectorAll('.description_modal_container')
    const MODAL_FRAMES = document.querySelectorAll('.description_modal_container')
    const ABOUT_BUTTONS = document.querySelectorAll('.subsection_about_button')
    const CLOSE_BUTTONS = document.querySelectorAll('.close_description_modal')
    
    if(MODAL_CONTAINERS && MODAL_FRAMES && ABOUT_BUTTONS){
        ABOUT_BUTTONS.forEach((button, index)=> button.addEventListener('click', ()=>{
            MODAL_CONTAINERS[index].classList.add('show')
            MODAL_FRAMES[index].classList.add('show')
        }))
    }
    
    if(CLOSE_BUTTONS){
        CLOSE_BUTTONS.forEach(button => {
            button.addEventListener('click', ()=>{
                MODAL_CONTAINERS.forEach(modal => modal.classList.remove('show'))
                MODAL_FRAMES.forEach(modal => modal.classList.remove('show'))
            })
        })
    }
}