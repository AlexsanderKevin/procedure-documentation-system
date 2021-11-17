const subsection_burger = document.querySelectorAll('.subsection_burger')
const subsection_content = document.querySelectorAll('.item_subsection_content')

for(let i = 0; i < subsection_burger.length; i++){
    subsection_burger[i].addEventListener('click', () => {
        subsection_content[i].classList.toggle('show_items')
    })
}

