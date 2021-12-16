'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('item_subsections', [
      {
        id: 1,
        name: 'LDIAG',
        description: "Todos os tópicos desta seção são testes realizados pelo LDIAG, portanto não requerem nenhum procedimento específico. O procedimento para execução do teste LDIAG está contido na seção de itens Extras.",
        itemSectionId: 1,
        approved: true
      },
      {
        id: 2,
        name: 'Verificações',
        description:'Esta seção consiste apenas em averiguar informações estáticasem relação ao equipamento.',
        itemSectionId: 1,
        approved: true
      },
      {
        id: 3,
        name: 'Atualizações',
        description:'As máquinas devem retornar ao cliente 100% atualizadas. Os tópicos a seguir garantem que o equipamento apresente o melhor desempenho e as mais atuais funcionalidades no dia a dia do usuário.',
        itemSectionId: 1,
        approved: true
      },
      {
        id: 4,
        name: 'Áudio, Vídeo e sistema',
        description:'O sistema operacional também é responsável pelo pleno funcionamento dos componentes. Esta seção contém os pontos mais afetados pelo funcionamento (ou a falta deste) do sistema.',
        itemSectionId: 1,
        approved: true
      },
      {
        id: 5,
        name: 'Hardware',
        description:'Embora o sistema operacional represente uma parte extremamente relevante no funcionamento dos itens a seguir, é muito comum que defeitos encontrados durante esta seção de testes estejam atrelados diretamente ao hardware.',
        itemSectionId: 1,
        approved: true
      },
      {
        id: 6,
        name: 'Reparo/Troca de Placa-Mãe',
        description:'Em alguns casos é necessário que sejam realizados reparos ou até mesmo a troca da Placa-Mãe (também conhecida como Main-Board ou Mother-Board). Nestes casos é possível que algumas informações sejam apagadas da BIOS ou estejam incorretas. Esta seção compila as instruções para, principalmente, regravar tais informações.',
        itemSectionId: 2,
        approved: true
      },
      {
        id: 7,
        name: 'Usuário de Teste',
        description:'Em maquinas com o sistema Windows, em casos de reinstalação do Sistema Operacional ou substituição do HD/SSD é preciso que os testes sejam realizados em um Usuário de Testes que deve ser Excluído ao final do processo.',
        itemSectionId: 2,
        approved: true
      },
      {
        id: 8,
        name: 'Usuário do Cliente Bloqueado',
        description:'É comum que os usuários configurem uma senha em seus dispositivos. Alguns destes clientes optam por remover sua senha ou mandar um bilhete com a senha para auxiliar na assistencia técnica. Entretanto, quando isso não acontece é preciso seguir os procedimentos contidos nesta seção para que a realização dos testes seja possível.',
        itemSectionId: 2,
        approved: true
      },
      {
        id: 9,
        name: 'Outros',
        description:'Os procedimentos a seguir são singulares. Talvez isso aconteça por serem muito específicos ou por resolverem um problema do inicio ao fim. Sendo assim, o fato de não estarem contidos em  outras seções não  os tornam menos relevantes.',
        itemSectionId: 2,
        approved: true
      },
      {
        id: 10,
        name: 'subseção de análise 1',
        description:'descrição da subseção 1 de análise',
        itemSectionId: 3,
        approved: true
      },
      {
        id: 11,
        name: 'subseção de análise 2',
        description:'descrição da subseção 2 de análise',
        itemSectionId: 3,
        approved: true
      },
      {
        id: 12,
        name: 'subseção de análise 3',
        description:'descrição da subseção 3 de análise',
        itemSectionId: 4,
        approved: true
      },
      {
        id: 13,
        name: 'subseção de embalagem 1',
        description:'descrição da subseção 2 de análise',
        itemSectionId: 5,
        approved: true
      },
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('item-subsections', null, {});
  }
};
