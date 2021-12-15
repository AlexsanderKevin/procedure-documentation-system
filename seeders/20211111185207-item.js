'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('items', [
      {
        id: 1,
        title: 'Teste de HD',
        itemSubsectionId: 1
      },
      {
        id: 2,
        title: 'Teste de Memória',
        itemSubsectionId: 1
      },
      {
        id: 3,
        title: 'Teste de Processador',
        itemSubsectionId: 1
      },
      {
        id: 4,
        title: 'Verificação de Especificações do Produto',
        itemSubsectionId: 2,
        description: 'Estas informações estão localizadas majoritariamente nas configurações  do dispositivo tanto no Windows  quanto no Linux, com a diferença de que no sistema Windows  é possivel verificar a capacidade do HD ou SSD  através do Explorador de arquivos, na aba Este Computador.'
      },
      {
        id: 5,
        title: 'Verificação de SN e MTM',
        itemSubsectionId: 2,
        description: 'Existem quatro locais onde o SN, MTM e Modelo  devem estar de acordo:'
      },
      {
        id: 6,
        title: 'Ativação do Sistema',
        itemSubsectionId: 2,
        description:'Todas as máquinas que saem de fábrica com Windows devem ter seu sistema operacional ativado, desde que o cliente não tenha feito a instalação de um sistema diferente. Sendo assim, é necessário verificarmos, primeiro, se o sistema instalado é realmente o original  de fábrica, e em seguida se está ativado.'
      },
      {
        id: 7,
        title: 'Atualização de Drivers',
        itemSubsectionId: 3,
        description:'As máquinas devem ser mandadas para o cliente 100% atualizadas, portanto é imprescindível que atualizemos tanto a versão do Windows quanto os drivers disponiveis para Download nas Configurações',
      },
      {
        id: 8,
        title: 'Atualização de Bios',
        itemSubsectionId: 3,
        description:'Assim como o Windows, a BIOS também tem mais de uma versão, portanto é preciso garantir que a máquina será enviada para o cliente com a mais atualizada possível. O que diferencia o Windows da BIOS, entretanto, é que cada modelo de computador terá uma BIOS diferente e com versões diferentes. Sendo assim, é necessário primeiro consultar a BIOS e a versão correta para a máquina em questão no site de Suporte Lenovo, para depois fazer a instalação.',
      },
      {
        id: 9,
        title: 'Teste de Microfone',
        itemSubsectionId: 4,
        description:''     
      },
      {
        id: 10,
        title: 'Teste de Tela',
        itemSubsectionId: 4,
        description:'Existem vários problemas que podem envolver a tela, portanto é necessário prestar atenção durante todo o teste em relação ao surgimento de alguma anormalidade.                    Os problemas mais comuns são: Ponto Luminoso: são manchas (normalmente pequenas) onde os pixels parecem emitir maior luminosidade do que no restante da tela. Pixel Morto: são pontos ou manchas  na tela (normalmente pequenas) que indicam que um ou mais pixels pararam de funiconar. Artefato: são quaisquer pontos ou manchas de origem não identificada que indiquem mau funcionamento da tela. Listras: é possível que apareçam listras  (normalmente verticais) pretas  ou de outras cores em qualquer parte da tela. Distorções: a imagem da tela pode ficar dimencionada de maneira errada.'
      },
      {
        id: 11,
        title: 'Teste de audio / Vídeo',
        itemSubsectionId: 4,
        description:''
      },
      {
        id: 12,
        title: 'Teste de HDMI',
        itemSubsectionId: 4,
        description:''
      },
      {
        id: 13,
        title: 'Câmera',
        itemSubsectionId: 4,
        description:''
      },
      {
        id: 14,
        title: 'Teste de Conexão Wi-Fi',
        itemSubsectionId: 4,
        description:''
      },
      {
        id: 15,
        title: 'Ativação do PortCode',
        itemSubsectionId: 4,
        description:'A função do PortCode é fornecer funcionalidades específicas de teclado para um determinado país, baseando-se nas normas locais, tais como a ABNT no Brasil. No caso do PortCode no Brasil a função é ativar as teclas: ?, />, ° É importante que seja instalado a versão IIL do PortCode, pois é a versão que tem apresentado melhor compatibilidade com os dispositivos.'
      },
      {
        id: 16,
        title: 'Teste de USB',
        itemSubsectionId: 5,
        description:''
      },
      {
        id: 17,
        title: 'Teste de Teclado',
        itemSubsectionId: 5,
        description:'Existem, a princípio, duas maneiras de testar o funcionamento do teclado, uma online (usando a internet) e uma offline (sem conexão com a internet).'
      },
      {
        id: 18,
        title: 'Teste de Touchpad',
        itemSubsectionId: 5,
        description:'Ambas as ferramentas utilizadas na solução do Teste de Teclado podem ser utilizados também durante o teste de touchpad.'
      },
      {
        id: 19,
        title: 'Consulta de DPK',
        itemSubsectionId: 6,
        description:''
      },
      {
        id: 20,
        title: 'Gravação das Informaçõe da Placa-Mãe',
        itemSubsectionId: 6,
        description:''
      },
      {
        id: 21,
        title: 'Inserção de DPK',
        itemSubsectionId: 6,
        description:''
      },
      {
        id: 22,
        title: 'Inserção de BaseBoard',
        itemSubsectionId: 6,
        description:''
      },

      {
        id: 23,
        title: 'Criar Usuário',
        itemSubsectionId: 7,
        description:''
      },
      {
        id: 24,
        title: 'Excluir Usuário',
        itemSubsectionId: 7,
        description:''
      },

      {
        id: 25,
        title: 'Quebra de Senha',
        itemSubsectionId: 8,
        description:''
      },
      {
        id: 26,
        title: 'Desativar Administrador',
        itemSubsectionId: 8,
        description:''
      },
      {
        id: 27,
        title: 'Entrar em Outro Domínio',
        itemSubsectionId: 8,
        description:''
      },

      {
        id: 28,
        title: 'Teste LDIAG',
        itemSubsectionId: 9,
        description:''
      },
      {
        id: 29,
        title: 'Desinstalação de Anti-Vírus',
        itemSubsectionId: 9,
        description:''
      },
      {
        id: 30,
        title: 'Teclas de Atalho',
        itemSubsectionId: 9,
        description:''
      },
      {
        id: 31,
        title: 'item 1 da subseção 1 de análise',
        itemSubsectionId: 10,
        description:''
      },
      {
        id: 32,
        title: 'item 2 da subseção 1 de análise',
        itemSubsectionId: 10,
        description:''
      },
      {
        id: 33,
        title: 'item 1 da subseção 2 de análise',
        itemSubsectionId: 11,
        description:''
      },
      {
        id: 34,
        title: 'item 1 da subseção 1 de embalagem',
        itemSubsectionId: 13,
        description:''
      },
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('items', null, {});
  }
};
