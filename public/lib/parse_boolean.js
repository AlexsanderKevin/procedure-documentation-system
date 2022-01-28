import this_user from "../js/modules/this_user.js"

const BOOLEAN_PERMISSION = (permission)=>{
    const PERMISSION = this_user[permission]
    const IS_BOOLEAN = parse_boolean(PERMISSION) 
    
    if(IS_BOOLEAN)
        return PERMISSION
    else
        return turn_into_boolean(PERMISSION)
}

function parse_boolean(target){
    const TARGET_TYPE = Object.prototype.toString.call(target)
    return TARGET_TYPE === '[object Boolean]' ? true : false
}

function turn_into_boolean(target){
    if(target === 'true' || target === 'on' || target === 1)
        return true
    else if (target === 'false' || target === '' || target === 0 || target === 'off')
        return false
    else
        return 'not a boolean'
}

export default BOOLEAN_PERMISSION