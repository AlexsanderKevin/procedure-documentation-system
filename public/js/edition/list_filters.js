const button = document.querySelectorAll('.edition ol .open')
const filters = document.querySelectorAll('.edition ol .filters')

for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click', ()=>{
        filters[i].classList.toggle('show')
    })
}