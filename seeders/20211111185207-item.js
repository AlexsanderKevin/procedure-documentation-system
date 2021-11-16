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
        description: '<p>Estas informações estão localizadas majoritariamente nas <strong>configurações</strong>  do dispositivo tanto no <strong>Windows</strong>  quanto no <strong>Linux</strong> , com a diferença de que no sistema <strong>Windows</strong>  é possivel verificar a capacidade do <strong>HD</strong>  ou <strong>SSD</strong>  através do <strong>Explorador de arquivos</strong> , na aba <strong>Este Computador</strong>.</p>'
      },
      {
        id: 5,
        title: 'Verificação de SN e MTM',
        itemSubsectionId: 2,
        description: '<p>Existem quatro locais onde o <strong>SN, MTM e Modelo</strong>  devem estar de acordo:</p>'
      },
      {
        id: 6,
        title: 'Ativação do Sistema',
        itemSubsectionId: 2,
        description:'<p>Todas as máquinas que saem de fábrica com <strong>Windows</strong> devem ter seu <strong>sistema operacional ativado</strong>, desde que o cliente não tenha feito a instalação de um sistema <strong>diferente</strong>. Sendo assim, é necessário verificarmos, primeiro, se o sistema instalado é realmente o <strong>original</strong>  de fábrica, e em seguida se está <strong>ativado</strong>.</p>'
      },
      {
        id: 7,
        title: 'Atualização de Drivers',
        itemSubsectionId: 3,
        description:'<p>As máquinas devem ser mandadas para o cliente 100% atualizadas, portanto é imprescindível que atualizemos tanto a versão do <strong>Windows</strong> quanto os drivers disponiveis para <strong>Download</strong> nas <strong>Configurações</strong></p>'
      },
      {
        id: 8,
        title: 'Atualização de Bios',
        itemSubsectionId: 3,
        description:'"<p>Assim como o <strong>Windows</strong>, a <strong>BIOS</strong> também tem mais de uma <strong>versão</strong>, portanto é preciso garantir que a máquina será enviada para o cliente com a mais atualizada possível. O que diferencia o <strong>Windows</strong> da <strong>BIOS</strong>, entretanto, é que cada modelo de computador terá uma <strong>BIOS diferente</strong> e com <strong>versões diferentes</strong>.</p><p>Sendo assim, é necessário primeiro <strong>consultar</strong> a <strong>BIOS</strong> e a <strong>versão</strong> correta para a máquina em questão no site de <strong><a href=""https://support.lenovo.com/br/pt"" rel=""external"" target=""blank"">Suporte Lenovo</a> </strong>, para depois fazer a instalação.</p>"'
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
        description:''
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
        description:''
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
        description:''
      },
      {
        id: 18,
        title: 'Teste de Touchpad',
        itemSubsectionId: 5,
        description:''
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
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('items', null, {});
  }
};
