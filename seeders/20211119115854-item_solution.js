'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('item_solutions', [
      {
        id: 1,
        itemId: 4,
        title: 'Windows',
        content: 'No sistema Windows o caminho é: Configurações -> Sistema -> Sobre',
      },
      {
        id: 2,
        itemId: 4,
        title:'LINUX',
        content: 'No sistema Linux o caminho é: [...]',
      },
      {
        id: 3,
        itemId: 5,
        title:'Caixa',
        content: 'A caixa da maquina deve, obrigatoriamente, conter um adesivo chamado de SO (Service Order - Ordem de Serviço), onde é possivel consultar estes itens tanto de maneira escrita quanto em código de barras (caso seja necessário escaneá-los).',
      },
      {
        id: 4,
        itemId: 5,
        title:'BIOS',
        content: 'É possível acessar a BIOS da máquina tanto pelo botão RECOVERY quanto pressionando a tecla F2 durante a inicialização. As informações necessárias estarão na aba information da BIOS.',
      },
      {
        id: 5,
        itemId: 5,
        title:'Etiqueta no Gabinete D',
        content: 'Todas as máquinas saem da fábrica com etiquetas contendo várias informações, inclusive as que precisamos aqui. O posicionamento de uma dessas etiquetas, entretanto, depende da máquina que está sendo testada: se for um notebook, o adesivo se encontra no Gabinete D; para os AIO (All In One) estará na traseira do equipamento; já no Desktop está debaixo do gabinete.',
      },
      {
        id: 6,
        itemId: 5,
        title:'Etiqueta no Palmrest',
        content: 'Existe uma segunda etiqueta colada no palmrest (descanso de mão), localizado no gabinete C contendo parte das informações encontradas nos dois tópicos anteriores.',
      },
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('item-solutions', null, {});
  }
};
