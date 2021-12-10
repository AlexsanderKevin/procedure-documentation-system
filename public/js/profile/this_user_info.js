import { get } from "../../lib/main.js"

const this_user = {
    name: localStorage.getItem('name'),
    username: localStorage.getItem('username'),
    cargo: localStorage.getItem('cargo'),
    permission: localStorage.getItem('permission'),
    department: localStorage.getItem('department'),
}

const {
    name: user_name, username: user_username, cargo: user_cargo, permission: user_permission, department: user_department} = this_user

const this_user_html = {
    name: get("#this_name"),
    username: get("#this_username"),
    cargo: get("#this_cargo"),
    department: get('#this_department')
}
const {name: this_name,username:this_username, cargo: this_cargo, department: this_department} = this_user_html

this_name.innerText = user_name
this_username.innerText = user_username
this_cargo.innerText = user_cargo
this_department.innerText = user_department