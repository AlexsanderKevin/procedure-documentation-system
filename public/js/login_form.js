function submit_form(button_component, input_component, uncomplete_class){
    const button = document.querySelector(button_component)
    const inputs = document.querySelectorAll(input_component)

    for(let i = 0; i < inputs.length; i ++){
        inputs.addEventListener('click', ()=>{
            if(inputs[0].value != '' || inputs[1].value != ''){
                button.classList.remove(uncomplete_class)
            }else{
                button.classList.add(uncomplete_class)
            }
        })
    }
}

//submit_form('.login_button', '.login_text_input', 'uncomplete_form_button')