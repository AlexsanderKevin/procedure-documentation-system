//menu
const nav_links = document.querySelector('.nav_links')
const nav_burger = document.querySelector('#nav_burger')

//arrays
const section_links = document.querySelectorAll('.section_links')
const subsection_links = document.querySelectorAll('.subsection_links')
const subsection_anchor = document.querySelectorAll('.subsection_anchor')
const subsection_content = document.querySelectorAll('.item_subsection_content')

// show nav menu when click the burger
nav_burger.addEventListener('click', (e) => {
    nav_links.classList.toggle('show')
    
    for(let i = 0; i <subsection_links.length;i++){
        
        subsection_links[i].classList.remove('show')
        subsection_links[i].classList.add('while_hidden')
    }
    
})

// show subsection links when click on section links
for(let i = 0; i < section_links.length; i ++){
    section_links[i].addEventListener('click', () => {
        subsection_links[i].classList.toggle('show')
        subsection_links[i].classList.toggle('while_hidden')
    })
}

// hide nav when click in the subsection links
for(let i = 0; i < subsection_content.length; i++){
    subsection_anchor[i].addEventListener('click', ()=>{
        
        // hide nav menu
        nav_links.classList.toggle('show')
        
        // open subsection when click on a subsection anchor
        subsection_content[i].classList.add('show_items')
    })
}


//home button (close all subsections)
const home_button = document.querySelector('.home_button')

home_button.addEventListener('click', ()=>{
    for(let i = 0; i < subsection_content.length; i++){
        subsection_content[i].classList.remove('show_items')
    }
})

// show settings container
const settings_button = document.querySelector('.settings_button')
const settings_containter = document.querySelector('.settings_links_container')
const settings_anchor = document.querySelectorAll('.settings_anchor')

settings_button.addEventListener('click', ()=>{
    settings_containter.classList.toggle('show')
})

for(let i = 0; i < settings_anchor.length; i++){
    settings_anchor[i].addEventListener('click', ()=>{
        settings_containter.classList.toggle('show')
    })
}