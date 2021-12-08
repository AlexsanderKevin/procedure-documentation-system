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
// loop over an array and attribute a function to the entire lsit
export function loop_over(array, task){
    for(let i = 0; i < array.length; i++){
        task(array[i])
    }
}
// this atributes a task to a clicked component
export function on_click(target, task){
    target.addEventListener('click', task)
}
export function on_change(target, task){
    target.addEventListener('change', task)
}
// this removes the show class from a component
export function close(target){
    target.classList.remove('show')
}
// this add the show class from a component
export function open(target){
    target.classList.add('show')
}
export function hide(target){
    target.classList.add('hide')
}