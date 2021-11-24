// getting the modal
function form_modal(modal_id){
    const modal = document.querySelector(modal_id)
    const cancel = document.querySelectorAll('.form_close_button')

    for(let i = 0; i < cancel.length; i++){

        cancel[i].addEventListener('click', ()=>{
            modal.classList.remove('show')
        })
    }

    return modal
}
// opening the respective modal
function open_form(target_component, target_modal, modal_title_component, edited_title_component, edited_description_component){
    const form = form_modal(target_modal)
    const target = document.querySelectorAll(target_component)
    const modal_title = document.querySelector(modal_title_component)

    for(let i = 0; i < target.length; i++){
        target[i].addEventListener('click', ()=>{
            form.classList.add('show')

            if(target_component.startsWith('.new')){
                switch(target_component){
                    case '.new_section':
                        modal_title.innerText = 'Nova Seção'
                        break
                    case '.new_subsection':
                        modal_title.innerText = 'Nova Subseção'
                        break
                    case '.new_item':
                        modal_title.innerText = 'Novo Procedimento'
                        break
                }
            }else if(target_component.startsWith('.edit')){
                
                switch(target_component){
                    case '.edit_section':
                        modal_title.innerText = 'Editar Seção'
                        break
                    case '.edit_subsection':
                        modal_title.innerText = 'Editar Subseção'
                        break
                    case '.edit_item':
                        modal_title.innerText = 'Editar Procedimento'
                        break
                }
                
                const edited_title = document.querySelectorAll(edited_title_component)
                const edited_description = document.querySelectorAll(edited_description_component)

                if(target_modal.startsWith('#single')){
                    const title_field = document.querySelector('#single_form_name_field')

                    title_field.value = edited_title[i].innerText
                }else if(target_modal.startsWith('#two')){
                    const title_field = document.querySelector('#two_form_name_field')
                    const description_field = document.querySelector('#two_form_description_field')

                    title_field.value = edited_title[i].innerText
                    description_field.value = edited_description[i].innerText
                }
            }
        })
    }
    
}

//section
open_form('.new_section', '#single_field_form', '#single_field_form_title')
open_form('.edit_section', '#single_field_form', '#single_field_form_title', '.section_name')
//subsection
open_form('.new_subsection', '#two_field_form', '#two_field_form_title')
open_form('.edit_subsection', '#two_field_form', '#two_field_form_title', '.subsection_name', '.subsection_description')
//item
open_form('.new_item', '#two_field_form', '#two_field_form_title')
open_form('.edit_item', '#two_field_form', '#two_field_form_title', '.item_name')