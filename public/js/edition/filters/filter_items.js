import { list_check, get } from "../../../lib/main.js"
import { filter_types } from "./filter_options.js"

const items = {
        title:get('.li_box_title'),
        container: get('.li_box')
}
export const filter_button = get('#filter_button')
const{title, container} = items
function filtering(value){
    for(let i =  0; i < container.length; i++){

        if(value == title[i].innerText){
            container[i].classList.add('show')
            
        }else{
            container[i].classList.remove('show')
        }
    }
}

for(let i = 0; i < filter_types.length; i++){
    const { value, list, input} =filter_types[i]
    input.addEventListener('change', ()=>{
    //filter_button.addEventListener('click',()=>{
        filtering(input.value)
    })
    filter_button.addEventListener('click',()=>{
        input.value = ''
        for(let i = 0; i < container.length; i++){
            container[i].classList.add('show')
        }
    })
}

console.log('serto')