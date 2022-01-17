const USER_COMPONENTS = document.querySelectorAll('.user_info_container')
const SELECTS = document.querySelectorAll('[data-filter="select"]')

const hide = target => target.classList.add('hide')
const show = target => target.classList.remove('hide')

const show_required = (parameter, value, element) => {
    if(parameter.value === value)
    show(element)
}

const filter_by = (select, selector) =>{
    USER_COMPONENTS.forEach(component => {
        
        if(select.value){
            const TARGET_VALUE = component.querySelector(selector).innerText    
            hide(component)
            show_required(select, TARGET_VALUE, component)
            
        }else{
            show(component)
        }
    })
}

const DEPARTMENT_SELECT = document.querySelector('#department_filter')
DEPARTMENT_SELECT.addEventListener('change', ()=>{
    filter_by(DEPARTMENT_SELECT, '[data-info="department"]')
})
const CARGO_SELECT = document.querySelector('#cargo_filter')
CARGO_SELECT.addEventListener('change', ()=>{
    filter_by(CARGO_SELECT, '[data-info="cargo"]')
})