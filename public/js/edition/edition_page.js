const operation = document.querySelectorAll('.operation')
const table = document.querySelectorAll('.table')
const body = document.querySelector('#body')

for(let i = 0; i < operation.length; i ++){
    operation[i].addEventListener('click', ()=>{
        switch(operation[i].value){
            case 'add':
                for(let i = 0; i < table.length; i++){
                    table[i].addEventListener('click', ()=>{
                        alert(table[i].value)
                        body.innerHTML = '{{>add_department}}'
                    })
                }
                break
            case 'edit':
                break
        }
    })
}