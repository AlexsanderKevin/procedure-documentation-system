'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('item_subsections', [
      {
        id: 1,
        name: 'LDIAG',
        description: "<p>Todos os tópicos desta seção são testes realizados pelo <strong class='concept' onclick='showConceptModal(LDIAG)'>LDIAG</strong>, portanto não requerem nenhum procedimento específico.</p><p>O procedimento para execução do teste <strong class='concept' onclick='showConceptModal(LDIAG)'>LDIAG</strong> está contido na seção de itens <strong><a href = '#Extras'>Extras</a></strong>.</p>",
        itemSectionId: 1,
      },
      {
        id: 2,
        name: 'Verificações',
        description:'<p>Esta seção consiste apenas em <strong>averiguar</strong> informações <strong>estáticas</strong> em relação ao equipamento.</p>',
        itemSectionId: 1,
      },
      {
        id: 3,
        name: 'Atualizações',
        description:'<p>As máquinas <strong>devem</strong> retornar ao cliente <strong>100% atualizadas</strong>. Os tópicos a seguir <strong>garantem</strong> que o equipamento apresente o <strong>melhor desempenho</strong>  e as <strong>mais atuais funcionalidades</strong> no dia a dia do usuário.</p>',
        itemSectionId: 1,
      },
      {
        id: 4,
        name: 'Áudio, Vídeo e sistema',
        description:'<p>O <strong>sistema operacional</strong> também é responsável pelo pleno funcionamento dos <strong>componentes</strong>. Esta seção contém os pontos <strong>mais afetados</strong> pelo funcionamento (ou a falta deste) do sistema.</p>',
        itemSectionId: 1,
      },
      {
        id: 5,
        name: 'Hardware',
        description:'<p>Embora o <strong>sistema operacional</strong> represente uma parte extremamente relevante no funcionamento dos itens a seguir, é <strong>muito comum</strong> que <strong>defeitos</strong> encontrados durante esta seção de testes estejam atrelados <strong>diretamente</strong> ao <strong>hardware</strong>.</p>',
        itemSectionId: 1,
      },
      {
        id: 6,
        name: 'Reparo/Troca de Placa-Mãe',
        description:'<p>Em alguns casos é <strong>necessário</strong> que sejam realizados <strong>reparos</strong> ou até mesmo a <strong>troca</strong> da <strong>Placa-Mãe</strong> (também conhecida como Main-Board ou Mother-Board). Nestes casos é possível que algumas <strong>informações</strong> sejam <strong>apagadas da BIOS</strong> ou estejam <strong>incorretas</strong>.</p><p>Esta seção compila as instruções para, principalmente, <strong>regravar</strong> tais informações.</p>',
        itemSectionId: 2,
      },
      {
        id: 7,
        name: 'Usuário de Teste',
        description:'<p>Em maquinas com o sistema <strong>Windows</strong>, em casos de <strong>reinstalação do Sistema Operacional</strong> ou <strong>substituição do HD/SSD</strong> é preciso que os testes sejam realizados em um <strong>Usuário de Testes</strong> que deve ser <strong>Excluído</strong> ao final do processo.</p>',
        itemSectionId: 2,
      },
      {
        id: 8,
        name: 'Usuário do Cliente Bloqueado',
        description:'<p>É comum que os usuários configurem uma <strong>senha</strong> em seus dispositivos. Alguns destes clientes optam por <strong>remover</strong> sua senha ou mandar um <strong>bilhete</strong> com a senha para auxiliar na assistencia técnica. Entretanto, quando isso <strong>não acontece</strong> é preciso seguir os procedimentos contidos nesta seção para que a realização dos testes seja <strong>possível</strong> .</p>',
        itemSectionId: 2,
      },
      {
        id: 9,
        name: 'Outros',
        description:'<p>Os procedimentos a seguir são <strong>singulares</strong>. Talvez isso aconteça por serem muito <strong>específicos</strong> ou por resolverem um problema do inicio ao fim. Sendo assim, o fato de não estarem contidos em  outras seções <strong>não</strong>  os tornam menos relevantes.</p>',
        itemSectionId: 2,
      },
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('item-subsections', null, {});
  }
};
