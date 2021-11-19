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
        description: '<p>Estas informações estão localizadas majoritariamente nas <strong>configurações</strong>  do dispositivo tanto no <strong>Windows</strong>  quanto no <strong>Linux</strong> , com a diferença de que no sistema <strong>Windows</strong>  é possivel verificar a capacidade do <strong>HD</strong>  ou <strong>SSD</strong>  através do <strong>Explorador de arquivos</strong> , na aba <strong>Este Computador</strong>.</p>',
        solutions:'<li >        <h3>Windows</h3>        <div>            <p>No sistema Windows o caminho é: </p>             <p><strong>Configurações -> Sistema -> Sobre</strong>.</p>        </div>    <hr>    <li>        <h3>Linux</h3>        <div>            <p>No sistema Linux o caminho é:</p>            </p>        </div>    </li>',
        obs:''
      },
      {
        id: 5,
        title: 'Verificação de SN e MTM',
        itemSubsectionId: 2,
        description: '<p>Existem quatro locais onde o <strong>SN, MTM e Modelo</strong>  devem estar de acordo:</p>',
        solutions:'<li >        <h3>Caixa</h3>        <div>            <p>A caixa da maquina deve, obrigatoriamente, conter um adesivo chamado de <strong>SO</strong>  (Service Order - Ordem de Serviço), onde é possivel consultar estes itens tanto de maneira escrita quanto em código de barras (caso seja necessário escaneá-los).</p>        </div>    </li>    <hr>    <li>        <h3>BIOS</h3>        <div>            <p>É possível acessar a <strong>BIOS</strong>  da máquina tanto pelo botão <strong>RECOVERY</strong> quanto pressionando a tecla <strong>F2</strong> durante a inicialização.</p>            <p>As informações necessárias estarão na aba <strong>information</strong> da <strong>BIOS</strong>.</p>        </div>    </li>     <hr>    <li>        <h3>Etiqueta no Gabinete D</h3>        <div>            <p>Todas as máquinas saem da fábrica com etiquetas contendo várias informações, inclusive as que precisamos aqui. O posicionamento de uma dessas etiquetas, entretanto, depende da máquina que está sendo testada: se for um <strong>notebook</strong>, o adesivo se encontra no <Strong>Gabinete D</Strong>; para os <strong>AIO</strong> (All In One) estará na traseira do equipamento; já no <strong>Desktop</strong> está debaixo do gabinete.</p>        </div>    </li>    <hr>    <li>        <h3>Etiqueta no Palmrest</h3>        <div>            <p>Existe uma segunda <strong>etiqueta</strong> colada no <strong>palmrest</strong> (descanso de mão), localizado no <strong>gabinete C</strong> contendo parte das informações encontradas nos dois tópicos anteriores.</p>        </div>    </li>',
        obs:''
      },
      {
        id: 6,
        title: 'Ativação do Sistema',
        itemSubsectionId: 2,
        description:'<p>Todas as máquinas que saem de fábrica com <strong>Windows</strong> devem ter seu <strong>sistema operacional ativado</strong>, desde que o cliente não tenha feito a instalação de um sistema <strong>diferente</strong>. Sendo assim, é necessário verificarmos, primeiro, se o sistema instalado é realmente o <strong>original</strong>  de fábrica, e em seguida se está <strong>ativado</strong>.</p>',
        solutions:'<p>O caminho para verificar a ativação do <strong>Windows</strong> é:</p>        <p> <strong>Configurações -> Atualização e Segurança -> Ativação</strong></p>',
        obs:''
      },
      {
        id: 7,
        title: 'Atualização de Drivers',
        itemSubsectionId: 3,
        description:'<p>As máquinas devem ser mandadas para o cliente 100% atualizadas, portanto é imprescindível que atualizemos tanto a versão do <strong>Windows</strong> quanto os drivers disponiveis para <strong>Download</strong> nas <strong>Configurações</strong></p>',
        solutions:' <li >        <h3>Consultando a Versão do Windows</h3>        <div>            <p>Para consular a <strong>versão</strong>  do <strong>windows</strong>  que está instalado máquina abra a barra de comandos com o atalho <strong>Win + R</strong> (Tecla Windows junto com a tecla ""R""), digite <strong>winver</strong> e clique em <strong>OK</strong>.</p>            <p>A versão correta do <strong>Windows</strong> deve ser <strong>21H1</strong> ou <strong>21H2</strong>. Caso a versão instalada não seja a correta, você deverá fazer a instalação da versão correta.</p>       </div>    </li>    <hr>    <li>        <h3>Instalando a Versão Atual</h3>        <div>            <ol>                <li>                    <p>Encaixe na porta <strong>USB</strong> o pendrive  de <strong>update</strong> que contém o <strong>setup</strong> da atualização para a versão <strong>21H1</strong>.</p>                </li>                <li>                    <p>Copie a pasta <strong>21H1</strong> para a área de trabalho da máquina do cliente.</p>                </li>                <li>                    <p>Remova o pendrive.</p>                </li>                <li>                    <p>Execute o arquivo <strong>setup</strong> de dentro da cópia da pasta <strong>21H1</strong>.</p>                </li>                <li>                    <p><strong>Fique atento</strong> enquanto segue com a instalação, pois possivelmente aparecerá uma tela com algumas opções em relação ao que será feito dos arquivos da máquina, onde haverá as opções: <strong>Manter arquivos</strong>, <strong>Excluir arquivos</strong>, entre outros. Nesse caso, opte <strong>sempre</strong> por <strong>Manter arquivos</strong>.</p>                </li>                <li>                    <p>O processo de instalação pode demorar algumas <strong>horas</strong>, durante as quais o computador será reiniciado várias vezes, então certifique-se de que a máquina esteja <strong>conectada ao carregador</strong> durante todo o processo. <strong>Desligamentos acidentais</strong>  durante o processo de <strong>instalação</strong> podem <strong>corromper</strong> o sistema operaconal.</p>                </li>            </ol>         </div>    </li>    <hr>    <li>        <h3>Windows Update</h3>        <p>Mesmo após a instalação da versão correta do sistema, é provavel que ainda existam alguns <strong>drivers</strong>  a serem atualizados, principalmente se a instalação foi realizada com a máquina <strong>desconectada</strong>  da intenet.</p>        <p>Para <strong>baixar e instalar</strong> os <strong>divers</strong> restantes siga o caminho:</p>       <p><strong>Configurações -> Atualização e Segurança -> Windows Update</strong>.</p>       <p>Clique no botão <strong>Verificar Atualizações</strong> e faça o <strong>download</strong> de todos os arquivos, inclusive os <strong>opcionais</strong>, caso haja algum.</p>   </li>',
        obs:''
      },
      {
        id: 8,
        title: 'Atualização de Bios',
        itemSubsectionId: 3,
        description:'<p>Assim como o <strong>Windows</strong>, a <strong>BIOS</strong> também tem mais de uma <strong>versão</strong>, portanto é preciso garantir que a máquina será enviada para o cliente com a mais atualizada possível. O que diferencia o <strong>Windows</strong> da <strong>BIOS</strong>, entretanto, é que cada modelo de computador terá uma <strong>BIOS diferente</strong> e com <strong>versões diferentes</strong>.</p><p>Sendo assim, é necessário primeiro <strong>consultar</strong> a <strong>BIOS</strong> e a <strong>versão</strong> correta para a máquina em questão no site de <strong><a href=""https://support.lenovo.com/br/pt"" rel=""external"" target=""blank"">Suporte Lenovo</a> </strong>, para depois fazer a instalação.</p>',
        solutions:'<li >        <h3 id=""consulta"">Consultando a Versão correta</h3>        <div>            <ol>                <li>                    <p>Acesse o site <strong><a href=""https://support.lenovo.com/br/pt"" rel=""external"" target=""blank"">Suporte Lenovo</a> </strong>.</p>                </li>                <li>                    <p>Na seção <strong>PC</strong> clique em <strong>Visualizar Suporte PC</strong></p>                </li>                <li>                    <p>Digite o <strong>SN</strong> (Serial Number - Numero de Série) da máquina no campo <strong>Buscar Suporte PC</strong> e confirme.</p>                </li>                <li>                    <p>Na lista localizada à esquerda da página, selecione a opção <strong>Drivers e Software</strong>.</p>                </li>                <li>                    <p>Acesse a aba <strong>Atualização Manual</strong>.</p>                </li>                <li>                    <p>Selecione a opção <strong>BIOS</strong>.</p>                </li>                <li>                    <p>Selecione <strong>BIOS Update for Windows 10 [...]</strong></p>                </li>                <li>                    <p>A partir de então será possível consultar a <strong>versão correta</strong> e fazer o <strong>download</strong> da <strong>atualização da BIOS</strong>.</p>            </ol>        </div>    </li>    <hr>   <li>       <h3>Instalando a Atualização</h3>        <div>            <p>A principio, existem duas maneiras de <strong>instalar a atualização da BIOS</strong>.</p>        </div>     <ul>         <li>          <h4><strong><a href=""https://support.lenovo.com/br/pt"" rel=""external"" target=""blank"">Suporte Lenovo</a> </strong></h4>             <p>Certifique-se de que o <strong>carregador</strong>  da máquina esteja <strong>conectado</strong>, pois desligamentos <strong>incorretos</strong> durante o processod e <strong>instalação</strong> pode acabar corrmopendo a <strong>BIOS</strong>.</p>            <p>Faça o <strong>download</strong> do arquivo <strong>BIOS update</strong> encontrado ao fim do procedimento <strong><a href=""#consulta"">Consultando a Versão correta</a> </strong>.</p>    </li>    <li>    <h4>Lenovo Vantage</h4>          <p>As máquinas saem de fábrica com o <strong> Lenovo Vantage</strong> instalado. É possível atualizar alguns <strong>drivers</strong>  através deste <strong>software</strong>, inclusive a <strong>BIOS</strong> seguindo os passos:</p><ol> <li>    <p>Abra o <strong>Lenovo Vantage</strong></p>        </li>      <li><p>Se for o primeiro acesso ao <strong>software</strong>  nessa máquina, o <strong>Lenovo Vantage</strong> fará algumas perguntas sobre o uso do computador, onde a resposta padrão deve ser a de que a máquina é usada para <strong>trabalho</strong>.</p>            <p>Caso não seja o primeiro acesso neste computador, ignore este passo.</p>                    </li>              <li>        <p>Selecione o botão <strong>Verificar se há Atualizações do Sistema</strong>.</p>     </li>             <li>                       <p>Por padrão será iniciado o <strong>download</strong> dos <strong>drivers</strong> disponíveis, junto da <strong>Atualização de BIOS</strong></p> </li>    </ol>   </li>    </ul>   </li>',
        obs:''
      },
      {
        id: 9,
        title: 'Teste de Microfone',
        itemSubsectionId: 4,
        description:'',
        solutions: '<li >        <h3>Windows</h3>        <div>            <p>O <strong>Windows</strong> possui um <strong>software</strong> de gravação de audio chamado <strong>Gravador de Voz</strong> que pode ser usado para o teste:</p>            <ol>                <li>                    <p>Seleicone a <strong>barra de pesquisa</strong> do <strong>windows</strong> (normalmente localizada na esquerda da barra de tarefas)</p>                </li>                <li>                    <p>Pesquise por <strong>Gravador de Voz</strong></p>                </li>                <li>                   <p>Conceda <strong>permissão</strong> para que o aplicativo faça uso do microfone do dispositivo.</p>                </li>                <li>                    <p>Grave uma frase qualquer para testar o funcionamento do dispositivo.</p>                </li>                <li>                    <p>Durante a gravação confira se a tecla de <strong>atalho do microfone</strong>  funciona, <strong>bloqueando</strong>  a entrada de audio.</p>                </li>                <li>                    <p>Você pode aproveitar para testar o fone de ouvido enquanto escuta a gravação. Garanta que o <strong>áudio</strong> esteja limpo, sem <strong>ruídos</strong> ou <strong>interferência</strong>.</p>                </li>            </ol>        </div>    </li>'      
      },
      {
        id: 10,
        title: 'Teste de Tela',
        itemSubsectionId: 4,
        description:'<p>Existem vários problemas que podem envolver a tela, portanto é <strong>necessário</strong> prestar atenção durante todo o teste em relação ao surgimento de alguma anormalidade.</p>                    <p>Os problemas <strong>mais comuns</strong> são:</p>                    <ul class=""subUl"">                        <li>        <p><strong>Ponto Luminoso:</strong> são manchas (normalmente pequenas) onde os <strong>pixels</strong> parecem emitir <strong>maior luminosidade</strong> do que no restante da tela.</p>                        </li>    <hr>                        <li>                            <p><strong>Pixel Morto:</strong> são <strong>pontos ou manchas</strong>  na tela (normalmente pequenas) que indicam que um ou mais <strong>pixels</strong> pararam de funiconar.</p>                        </li>                   <hr>    <li>                            <p><strong>Artefato:</strong> são quaisquer <strong>pontos ou manchas</strong> de <strong>origem não identificada</strong> que indiquem mau funcionamento da tela.</p>                        </li>                        <hr>                        <li>                            <p><strong>Listras:</strong> é possível que apareçam <strong>listras</strong>  (normalmente verticais) <strong>pretas </strong> ou de <strong>outras cores</strong> em qualquer parte da tela.</p>                        </li>                        <hr>                        <li>                            <p><strong>Distorções:</strong> a imagem da tela pode ficar <strong>dimencionada</strong> de maneira errada.</p>    </li>                    </ul>'
      },
      {
        id: 11,
        title: 'Teste de audio / Vídeo',
        itemSubsectionId: 4,
        description:'',
        solutions: '<p>Acesse um <strong>vídeo</strong> ou <strong>música</strong> da <strong>internet</strong> ou do <strong>penndrive de testes</strong> e preste bastante atenção à <strong>reprodução</strong> do vídeo e à <strong>qualidade</strong> do áudio.</p>'
      },
      {
        id: 12,
        title: 'Teste de HDMI',
        itemSubsectionId: 4,
        description:'',
        solutions:'<p><strong>Durante</strong> a reprodução de um <strong>vídeo ou música</strong>, utilize os <strong>monitores</strong> presos à <strong>algumas bancadas</strong> que possuem conexões <strong>HDMI e VGA</strong>.</p>        <p>No caso do <strong>HDMI</strong> certifique-se de que tanto o <strong>vídeo</strong> quanto o <strong>áudio</strong> estejam <strong>reproduzindo no monitor</strong>.</p>        <p>Já o <strong>VGA</strong> é uma conexão <strong>mais antiga</strong>, que suporta <strong>apenas vídeo</strong>.</p>'
      },
      {
        id: 13,
        title: 'Câmera',
        itemSubsectionId: 4,
        description:'',
        solutions: '<ul class=""subUl"">        <li >            <h3>Windows</h3>            <div>                <p>O <strong>Windows</strong> possui um <strong>software</strong> de gravação de vídeos e fotos chamado <strong>Câmera</strong> que pode ser usado para o teste:</p>                <ol>                    <li>                        <p>Seleicone a <strong>barra de pesquisa</strong> do <strong>windows</strong> (normalmente localizada na esquerda da barra de tarefas)</p>                    </li>                    <li>                        <p>Pesquise por <strong>Câmera</strong></p>                    </li>                    <li>                        <p>Conceda <strong>permissão</strong> para que o aplicativo faça uso da câmera do dispositivo.</p>                    </li>                    <li>                        <p>Certifique-se de que não hajam <strong>manchas</strong> na <strong>imagem</strong> da câmera. </p>                    </li>                    <li>                        <p>Teste se a tecla de <strong>atalho</strong> da câmera está <strong>bloqueando</strong> corretamente a imagem.</p>                    </li>                    <li>                        <p><strong>Caso Haja</strong> uma <strong>trava física</strong> na câmera do equipamento, certifique-se de que a imagem é devidamente <strong> tapada</strong> ao fechar-se a trava.</p>                    </li>                </ol>            </div>        </li>        <hr>        <li>            <h3>LINUX</h3>            <div>                <p>O sistema <strong>LINUX</strong> não possui uma aplicação que utilize a câmera, sendo assim os testes devem ser realizados <strong>online</strong>:</p>                <ol>                    <li>                        <p>Acesse o site <a href=""https://webcamtoy.com/pt/"" rel=""external"" target=""blank"">Webcam Toy</a></p>                    </li>                    <li>/strong> no centro da tela.</p>                    </li>                    <li>                        <p>Selecione o botão <strong>Use minha câmera</strong> no centro da tela.</p>                    </li>                   <li>                        <p><strong>Permita o acesso</strong> à câmera do dispositivo.</p>                    </li>                    <li>                        <p>Certifique-se de que não hajam <strong>manchas</strong> na <strong>imagem</strong> da câmera. </p>                    </li>                    <li>                        <p><strong>Caso Haja</strong> uma <strong>trava física</strong> na câmera do equipamento, certifique-se de que a imagem é devidamente <strong> tapada</strong> ao fechar-se a trava.</p>                    </li>                </ol>            </div>  </li> </ul>',
        obs:''
      },
      {
        id: 14,
        title: 'Teste de Conexão Wi-Fi',
        itemSubsectionId: 4,
        description:'',
        solutions:' <ul class=""subUl"">        <li >            <h3>Windows</h3>            <div>                <ol>                    <li>                        <p>Selecione o ícone de <strong>rede</strong> no lado direito da <strong>barra de tarefas.</strong></p>                    </li>                    <li>                        <p>Certifique-se de que o <strong>Wi-Fi</strong> esteja <strong>ativado.</strong></p>                    </li>                    <li>                        <p>Selecione a rede <strong>Lenovo-RW</strong> com a senha: <strong>Lenovo2020</strong></p>                    </li>                    <li>                        <p>Para <strong>testar</strong> a conexão navegue pela <strong>internet</strong>, acesse vídeos, etc.</p>                    </li>                    <li>                        <p>Certifique-se de que a conexão não <strong>caia</strong> durante a utilização.</p>                    </li>                </ol>            </div>        </li></ul>',
        obs:''
      },
      {
        id: 15,
        title: 'Ativação do PortCode',
        itemSubsectionId: 4,
        description:'<p>A função do <strong>PortCode</strong> é fornecer funcionalidades específicas de <strong>teclado</strong> para um determinado <strong>país</strong>, baseando-se nas <strong>normas</strong> locais, tais como a <strong>ABNT</strong> no <strong>Brasil</strong>.</p>        <p>No caso do <strong>PortCode</strong> no <strong>Brasil</strong> a função é ativar as teclas: <strong>?</strong>, <strong>/</strong>, <strong>°</strong></p>        <p>É importante que seja instalado a versão <strong>IIL</strong> do <strong>PortCode</strong>, pois é a versão que tem apresentado melhor <strong>compatibilidade</strong> com os dispositivos.</p>',
        solutions:'<ol>        <li>            <p>Para chegar ao <strong>arquivo executável</strong> de ativação do <strong>PortCode</strong> siga o caminho:</p>            <p><strong>Pendrive de Testes -> Drivers -> PortCode+ (IIL)</strong></p>        </li>        <li>            <p>Execute o arquivo <strong>Activate.bat</strong></p>        </li>        <li>            <p>O programa pedirá algumas <strong>permissões</strong> que devem ser <strong>concedidas</strong> para que o procedimento funcione.</p>        </li>        <li>            <p><strong>reinicie</strong> a máquina e teste as teclas: <strong>? / °</strong></p>        </li>    </ol>',
        obs:''
      },
      {
        id: 16,
        title: 'Teste de USB',
        itemSubsectionId: 5,
        description:'',
        solutions:'<p>Conecte o <strong>pendrive de testes</strong> em cada uma das portas <strong>USB</strong> e certifique-se de que o sistema <strong>reconhece</strong> o <strong>drive</strong> em todas elas.</p>        <p>Caso a máquina testada possua uma conexão <strong>USB-C</strong> (também conhecida como USB Type C -  USB Tipo C), temos disponível um adaptador <strong>OTG</strong> (On The Go) que conecta <strong>USB-A</strong> (mais conhecido como USB) em <strong>USB-C</strong>.</p>',
        obs:''
      },
      {
        id: 17,
        title: 'Teste de Teclado',
        itemSubsectionId: 5,
        description:'<p>Existem, a princípio, <strong>duas</strong> maneiras de testar o funcionamento do <strong>teclado</strong>, uma <strong>online</strong> (usando a internet) e uma <strong>offline</strong> (sem conexão com a internet).</p>        ',
        solutions:'<ul class=""subUl"">        <li >            <h3>Online</h3>            <ol>                <li>                    <p>Abra o <strong>navegador</strong> na máquina testada.</p>                </li>                <li>                    <p>Acesse o site <a href=""https://keytest.ru/en/"" rel=""external"" target=""blank"">Keytest</a>.</p>                </li>                <li>                    <p>Pressione as teclas, uma por uma. O site marca em <strong>branco</strong> as teclas que apresentam <strong>funcionamento normal</strong> e <strong>vermelho</strong> as teclas que estão <strong>pressionadas</strong>.</p>                </li>                <li>                    <p>É possível utilizar o site para realizar também o <a href=""id-018-teste-de-touchpad.html"" rel=""next"" target=""self"">Teste de TouchPad</a>.</p>                </li>            </ol>        </li>        <hr>        <li>            <h3>Offline</h3>            <ol>                <li>                    <p>No <strong>pendrive de testes</strong> acessa a pasta <strong>testes</strong> e execute a aplicação <strong>Teclado.exe</strong>.</p>                </li>                <li>                    <p>Pressione as teclas, uma por uma. O aplicativo marca em <strong>verde</strong> as teclas que apresentam <strong>funcionamento normal</strong>, <strong>amarelo</strong> as teclas de <strong>funcionamento duvidoso</strong>, e <strong>vermelho</strong> as teclas que estão <strong>pressionadas</strong>.</p>                </li>                <li>                    <p>É possível utilizar a aplicação para realizar também o <a href=""id-018-teste-de-touchpad.html"" rel=""next"" target=""self"">Teste de TouchPad</a>.</p>                </li>            </ol>        </li> </ul>',
        obs:''
      },
      {
        id: 18,
        title: 'Teste de Touchpad',
        itemSubsectionId: 5,
        description:'<p><strong>Ambas</strong> as ferramentas utilizadas na solução do <a href="id-017-teste-de-teclado.html" rel="next" target="self">Teste de Teclado</a> podem ser utilizados também durante o <strong>teste de touchpad</strong>.</p>        ',
        solutions:' <ol>        <li>            <p>Deslize o dedo por <strong>toda a superficie</strong> do <strong>touchpad</strong> e certifique-se de que o <strong>ponteiro</strong> esteja se movendo <strong>conforme</strong> o seu movimento.</p>        </li>        <li>            <p>Pressione os botões <strong>direito e esquerdo</strong> do touchpad e certifique-se de que estejam funcionando corretamente.</p>        </li>    </ol>',
        obs:''
      },

      {
        id: 19,
        title: 'Consulta de DPK',
        itemSubsectionId: 6,
        description:'',
        solutions:'',
        obs:''
      },
      {
        id: 20,
        title: 'Gravação das Informaçõe da Placa-Mãe',
        itemSubsectionId: 6,
        description:'',
        solutions:'',
        obs:''
      },
      {
        id: 21,
        title: 'Inserção de DPK',
        itemSubsectionId: 6,
        description:'',
        solutions:'',
        obs:''
      },
      {
        id: 22,
        title: 'Inserção de BaseBoard',
        itemSubsectionId: 6,
        description:'',
        solutions:'',
        obs:''
      },

      {
        id: 23,
        title: 'Criar Usuário',
        itemSubsectionId: 7,
        description:'',
        solutions:'',
        obs:''
      },
      {
        id: 24,
        title: 'Excluir Usuário',
        itemSubsectionId: 7,
        description:'',
        solutions:'',
        obs:''
      },

      {
        id: 25,
        title: 'Quebra de Senha',
        itemSubsectionId: 8,
        description:'',
        solutions:'',
        obs:''
      },
      {
        id: 26,
        title: 'Desativar Administrador',
        itemSubsectionId: 8,
        description:'',
        solutions:'',
        obs:''
      },
      {
        id: 27,
        title: 'Entrar em Outro Domínio',
        itemSubsectionId: 8,
        description:'',
        solutions:'',
        obs:''
      },

      {
        id: 28,
        title: 'Teste LDIAG',
        itemSubsectionId: 9,
        description:'',
        solutions:'',
        obs:''
      },
      {
        id: 29,
        title: 'Desinstalação de Anti-Vírus',
        itemSubsectionId: 9,
        description:'',
        solutions:'',
        obs:''
      },
      {
        id: 30,
        title: 'Teclas de Atalho',
        itemSubsectionId: 9,
        description:'',
        solutions:'',
        obs:''
      },
      {
        id: 31,
        title: 'item 1 da subseção 1 de análise',
        itemSubsectionId: 10,
        description:'',
        solutions:'',
        obs:''
      },
      {
        id: 32,
        title: 'item 2 da subseção 1 de análise',
        itemSubsectionId: 10,
        description:'',
        solutions:'',
        obs:''
      },
      {
        id: 33,
        title: 'item 1 da subseção 2 de análise',
        itemSubsectionId: 11,
        description:'',
        solutions:'',
        obs:''
      },
      {
        id: 34,
        title: 'item 1 da subseção 1 de embalagem',
        itemSubsectionId: 13,
        description:'',
        solutions:'',
        obs:''
      },
    ], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('items', null, {});
  }
};
