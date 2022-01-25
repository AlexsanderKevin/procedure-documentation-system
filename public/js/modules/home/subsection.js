export default function deactivate_empty_subsection(){

    const CONTAINERS = document.querySelectorAll('.item_subsection')
    if(CONTAINERS){

        CONTAINERS.forEach(container => {
            const BURGER = container.querySelector('.subsection_burger')
            const ITEM_CONTAINER = container.querySelector('.item_subsection_content')
            const ITEMS = ITEM_CONTAINER.querySelectorAll('.single_item_container')
        
            !ITEMS.length?BURGER.style.opacity='0.2':false
            // !ITEMS.length?ITEM_CONTAINER.remove():false
        })
    }
}