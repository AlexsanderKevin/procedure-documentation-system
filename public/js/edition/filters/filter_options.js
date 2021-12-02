import { get } from "../../../lib/main.js";

export const filter_types = [
    {
        value: 'department',
        list: get('#department_filter')
    },{
        value: 'section',
        list: get('#section_filter')
    },{
        value: 'subsection',
        list: get('#subsection_filter')
    },{
        value: 'procedure',
        list: get('#procedure_filter')
    },{
        value: 'user',
        list: get('#user_filter')
    }
]