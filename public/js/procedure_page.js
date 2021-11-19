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

for (let i = 0; i < content_text.length; i++){
    single_burger[i].addEventListener('click', ()=>{
        content_text[i].classList.toggle('show_text')
    })
}

// home anchor close all
const home_anchor = document.querySelector('.home_button')

home_anchor.addEventListener('click', ()=>{
    for(let i = 0; i < text_container.length; i++){
        text_container[i].classList.remove('show_text')
    }
})

// nav open content
const procedure_anchor = document.querySelectorAll('.procedure_nav_anchor')
const procedure_nav = document.querySelector('.procedure_nav')

for (let i = 0; i < procedure_anchor.length; i++){
    procedure_anchor[i].addEventListener('click', ()=>{
        procedure_nav.classList.remove('show')
    })
}