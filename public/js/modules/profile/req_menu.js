import {get, on_click} from '/lib/main.js'

const REQ_MENU = [
    {
        button: get('#req_section_radio'),
        content: get('#section_req_list')
    },
    {
        button: get('#req_subsection_radio'),
        content: get('#subsection_req_list')
    },
    {
        button:get('#req_procedure_radio'),
        content:get('#procedure_req_list')
    },
    {
        button:get('#req_solution_radio'),
        content:get('#solution_req_list')
    },
    {
        button:get('#req_obs_radio'),
        content:get('#obs_req_list')
    },
    {
        button:get('#req_issue_radio'),
        content:get('#issue_req_list')
    }
]

function show_selected_list(){
    REQ_MENU.forEach(item => {
        const {button, content} = item
        on_click(button, ()=>{
            REQ_MENU.forEach(item => {const {button, content} = item
                if(button.checked){
                    content.classList.remove('hide')
                }else{
                    content.classList.add('hide')
                }
            })
        })
    })
}

function set_requisition_quantities(){
    const REQ_CONTAINERS = get('.req_container')
    const REQ_QTD = get('#pendant_requisition_qtd')
    REQ_QTD.innerText = REQ_CONTAINERS.length
}

export default function init_requisition_lists(){
    show_selected_list()
    set_requisition_quantities()
}