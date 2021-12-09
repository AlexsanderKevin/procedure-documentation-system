import { get, on_click } from "../../lib/main.js"

const radios = [
    {
       button: get('#radio_user_list'),
       content: get('#user_list_container')
    },{
       button: get('#radio_approve_list'),
    },{
       button: get('#radio_comment_list'),
    }
]

radios.forEach(radio => {
    on_click(radio.button, ()=>{
        radios.forEach(radio => {
            const {button, content} = radio
            
            if(button.checked){
                content.classList.remove('hide')
            }else{
                content.classList.add('hide')
            }
        })
    })
})
