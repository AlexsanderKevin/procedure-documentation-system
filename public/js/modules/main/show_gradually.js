export default function show_gradually(selector){

    const CARDS = document.querySelectorAll(selector)

    for(let i = 0; i < CARDS.length; i++){
        setTimeout(() => {
            CARDS[i].classList.remove('hide')
        }, 100*i)
    }
}