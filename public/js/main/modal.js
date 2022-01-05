// getting the modal
const MODAL = document.querySelector('#modal')
if(MODAL){

    const CLOSE_BUTTON = MODAL.querySelector('.modalCloseButton')
    const MODAL_CONTENT = MODAL.querySelector('.modalContent')
    const MODAL_TITLE = MODAL.querySelector('.modal_title')

    CLOSE_BUTTON.addEventListener('click', () => {
        MODAL.classList.remove('show')
    })
    const static_modal = (target_component, title, content) => {

        const TARGETS = document.querySelectorAll(target_component)
        TARGETS.forEach(target => target.addEventListener('click', ()=>{
            MODAL.classList.toggle('show')
            MODAL_CONTENT.innerText = content
            MODAL_TITLE.innerText = title
        }))
    }
    // empty item
    static_modal('.emptyItemList_title', 'Item vazio!', 'Este item não possui conteúdo algum para ser visualizado no momento.')
}
