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
        itemSubsectionId: 2
      },
      {
        id: 5,
        title: 'Verificação de SN e MTM',
        itemSubsectionId: 2
      },
      {
        id: 6,
        title: 'Ativação do Sistema',
        itemSubsectionId: 2
      },
      {
        id: 7,
        title: 'Atualização de Drivers',
        itemSubsectionId: 3
      },
      {
        id: 8,
        title: 'Atualização de Bios',
        itemSubsectionId: 3
      },
      {
        id: 9,
        title: 'Teste de Microfone',
        itemSubsectionId: 4
      },
      {
        id: 10,
        title: 'Teste de Tela',
        itemSubsectionId: 4
      },
      {
        id: 11,
        title: 'Teste de audio / Vídeo',
        itemSubsectionId: 4
      },
      {
        id: 12,
        title: 'Teste de HDMI',
        itemSubsectionId: 4
      },
      {
        id: 13,
        title: 'Câmera',
        itemSubsectionId: 4
      },
      {
        id: 14,
        title: 'Teste de Conexão Wi-Fi',
        itemSubsectionId: 4
      },
      {
        id: 15,
        title: 'Ativação do PortCode',
        itemSubsectionId: 4
      },
      {
        id: 16,
        title: 'Teste de USB',
        itemSubsectionId: 5
      },
      {
        id: 17,
        title: 'Teste de Teclado',
        itemSubsectionId: 5
      },
      {
        id: 18,
        title: 'Teste de Touchpad',
        itemSubsectionId: 5
      },

      {
        id: 19,
        title: 'Consulta de DPK',
        itemSubsectionId: 6
      },
      {
        id: 20,
        title: 'Gravação das Informaçõe da Placa-Mãe',
        itemSubsectionId: 6
      },
      {
        id: 21,
        title: 'Inserção de DPK',
        itemSubsectionId: 6
      },
      {
        id: 22,
        title: 'Inserção de BaseBoard',
        itemSubsectionId: 6
      },

      {
        id: 23,
        title: 'Criar Usuário',
        itemSubsectionId: 7
      },
      {
        id: 24,
        title: 'Excluir Usuário',
        itemSubsectionId: 7
      },

      {
        id: 25,
        title: 'Quebra de Senha',
        itemSubsectionId: 8
      },
      {
        id: 26,
        title: 'Desativar Administrador',
        itemSubsectionId: 8
      },
      {
        id: 27,
        title: 'Entrar em Outro Domínio',
        itemSubsectionId: 8
      },

      {
        id: 28,
        title: 'Teste LDIAG',
        itemSubsectionId: 9
      },
      {
        id: 29,
        title: 'Desinstalação de Anti-Vírus',
        itemSubsectionId: 9
      },
      {
        id: 30,
        title: 'Teclas de Atalho',
        itemSubsectionId: 9
      },
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('items', null, {});
  }
};
