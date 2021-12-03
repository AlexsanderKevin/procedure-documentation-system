import { get, list_check, loop_over } from "../../../lib/main.js";

export const filter_types = [
    {
        value: 'department',
        list: get('#department_filter'),
        input: get('#department_filter_list_input')
    },{
        value: 'section',
        list: get('#section_filter'),
        input: get('#section_filter_list_input')
    },{
        value: 'subsection',
        list: get('#subsection_filter'),
        input: get('#subsection_filter_list_input')
    },{
        value: 'procedure',
        list: get('#procedure_filter'),
        input: get('#procedure_filter_list_input')
    },{
        value: 'user',
        list: get('#user_filter'),
        input: get('#user_filter_list_input')
    }
]