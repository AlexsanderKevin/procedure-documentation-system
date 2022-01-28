import { get } from "../../../lib/main.js"
import this_user from "../this_user.js"

const {
    name: user_name,
    username: user_username, 
    cargo: user_cargo, 
    department: user_department, 
    adm: adm_permission, 
    editor: editor_permission 
} = this_user

const this_user_html = {
    name: get("#this_name"),
    username: get("#this_username"),
    cargo: get("#this_cargo"),
    department: get('#this_department')
}

export default function set_this_user_info(){
    if(this_user_html){

        const {name: this_name,username:this_username, cargo: this_cargo, department: this_department} = this_user_html
    
        this_name.innerText = user_name
        this_username.innerText = user_username
        this_cargo.innerText = user_cargo
        // this_department.innerText = user_department
    }
}