export function get(component){
    // validates if it will get a single object or an array
    if(component.startsWith('#')){
        return document.querySelector(component)
    }else if(component.startsWith('.')){
        return document.querySelectorAll(component)
    }
}
// just show the values of an array
export function list_check(array){
    for(let i = 0; i < array.length; i++){
        console.log(array[i].value)
    }
}

export function loop_over(array, task){
    for(let i = 0; i < array.length; i++){
        array[i].task()
    }
}