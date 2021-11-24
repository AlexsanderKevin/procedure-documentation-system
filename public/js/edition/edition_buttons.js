function open_edition(start_edition, discard_edition, save_edition){
    const start = document.querySelectorAll(start_edition)
    const close = document.querySelectorAll(discard_edition)
    const save = document.querySelectorAll(save_edition)
    const buttons = document.querySelectorAll('.edition_button')

    for(let i = 0; i < start.length; i++){
        start[i].addEventListener('click', ()=>{
            
            for(let i = 0; i < buttons.length; i++){
                buttons[i].classList.toggle('show_button')
            }
        })
        close[i].addEventListener('click', ()=>{
            for(let i = 0; i < buttons.length; i++){
                buttons[i].classList.toggle('show_button')
            }
        })
        save[i].addEventListener('click', ()=>{
            for(let i = 0; i < buttons.length; i++){
                buttons[i].classList.toggle('show_button')
            }
        })
    }
}

open_edition('.start_edition', '.discard_button', '.save_button')