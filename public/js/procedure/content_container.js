const containers = document.querySelectorAll('.item_content_container')
const activate = (target)=>{
    target.classList.toggle('active')
}

containers.forEach(container => {
    const contents = container.querySelectorAll('.showed_content')

    contents.length==0?container.remove():false

    const single_containers = container.querySelectorAll('.inner_div')
    single_containers.forEach(single => {

        const title = single.querySelector('.content_header')
        title.addEventListener('click', ()=>{activate(single)})
    })

    const burger = container.querySelector('.page_content_burger')
    burger.addEventListener('click', ()=>{activate(container)})
})