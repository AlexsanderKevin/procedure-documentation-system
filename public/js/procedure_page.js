const content_burger = document.querySelectorAll('.page_content_burger')
const text_container = document.querySelectorAll('.item_content_text')

for (let i = 0; i < content_burger.length; i++){
    content_burger[i].addEventListener('click', () => {
        text_container[i].classList.toggle('show_text')
    })
}