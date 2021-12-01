import {get, arr} from '../../lib/main.js'

const button = arr('.edition ol .open')
const filters = arr('.edition ol .filters')

for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click', ()=>{
        filters[i].classList.toggle('show')
    })
}