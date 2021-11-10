const ldiag = {
    title: 'LDIAG',
    content: 'Este item é testado pelo <strong>LDIAG</strong>, sendo assim não é necessário realizar mais nenhum procedimento!'
}

const LDIAG = {
    name: 'LDIAG',
    description: '<strong>LDIAG (Lenovo Diagnostics - Diagnóstico Lenovo) - </strong>  é uma ferramenta de diagnóstico utilizada para testar os componentes internos de uma máquina, tais como: Processador, Memória RAM e HD/SSD. Sendo assim, é possivel fornecer ao cliente um feedback a respeito do funcionamento do seu equipamento.'
}

function showModal(modalId){
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
    modal.addEventListener('click', (e) => {
        if (e.target.id == modalId || e.target.className == 'modalCloseButton'){
            modal.classList.remove('show')
        }
    })
}

function showAlertModal(msg){
    const modal = document.getElementById('alertModal');
    const modalTitle = document.getElementById('alertModalTitle')
    const modalContent = document.getElementById('alertModalContent')

    //modalTitle.innerHTML = msg.title
    modalContent.innerHTML = msg.content

    modal.classList.add('show');
    modal.addEventListener('click', (e) => {
        if (e.target.id == 'alertModal' || e.target.className == 'modalCloseButton'){
            modal.classList.remove('show')
        }
    })
}

function showConceptModal(msg){
    const modal = document.getElementById('conceptModal');
    const modalTitle = document.getElementById('conceptModalTitle')
    const modalContent = document.getElementById('conceptModalContent')

    modalTitle.innerHTML = msg.name
    modalContent.innerHTML = msg.description

    modal.classList.add('show');
    modal.addEventListener('click', (e) => {
        if (e.target.id == 'conceptModal' || e.target.className == 'modalCloseButton'){
            modal.classList.remove('show')
        }
    })
}