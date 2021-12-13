import {get} from '/lib/main.js'

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
console.log(REQ_MENU)