function open_edition(start_edition, close_edition,edition_buttons){
    const start = document.querySelectorAll(start_edition)
    const close = document.querySelectorAll(close_edition)
    const buttons = document.querySelectorAll(edition_buttons)

    for(let i = 0; i < start.length; i++){
        start[i].addEventListener('click', ()=>{
            
            for(let i = 0; i < buttons.length; i++){
                buttons[i].classList.add('show')
            }
        })

        close[i].addEventListener('click', ()=>{
            for(let i = 0; i < buttons.length; i++){
                buttons[i].classList.remove('show')
            }
        })
    }
}

open_edition('.start_edition', '.discard_button', '.edition_button')