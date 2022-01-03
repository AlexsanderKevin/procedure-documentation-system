const containers = document.querySelectorAll('.item_content_container')

containers.forEach(container => {
    const contents = container.querySelectorAll('.showed_content')

    contents.length==0?container.remove():false
})