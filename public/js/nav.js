const nav_links = document.querySelector('.nav_links')
const nav_burger = document.querySelector('#nav_burger')
//arrays
const section_links = document.querySelectorAll('.section_links')
const subsection_links = document.querySelectorAll('.subsection_links')

for(let i = 0; i < section_links.length; i ++){
    section_links[i].addEventListener('click', () => {
        subsection_links[i].classList.toggle('show')
        subsection_links[i].classList.toggle('while_hidden')
    })
}

nav_burger.addEventListener('click', (e) => {
    nav_links.classList.toggle('show')

    for(var i = 0; i <subsection_links.length;i++){

        subsection_links[i].classList.remove('show')
        subsection_links[i].classList.add('while_hidden')
    }

})



for(var i = 0; i < subsection_links.length; i++){
    subsection_links[i].addEventListener('click', (e)=>{
        nav_links.classList.toggle('show')


        subsection_links[i].classList.toggle('show')
        subsection_links[i].classList.toggle('while_hidden')
        
    })
}