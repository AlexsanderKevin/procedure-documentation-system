const content_burger = document.querySelectorAll('.page_content_burger')
const text_container = document.querySelectorAll('.item_content_text')

for (let i = 0; i < content_burger.length; i++){
    content_burger[i].addEventListener('click', () => {
        text_container[i].classList.toggle('show_text')
    })
}

// single containers
const content_text = document.querySelectorAll('.content_text')
const single_burger = document.querySelectorAll('.single_content_burger')

for (let i = 0; i < content_burger.length; i++){
    single_burger[i].addEventListener('click', ()=>{
        content_text[i].classList.toggle('show_text')
    })
}