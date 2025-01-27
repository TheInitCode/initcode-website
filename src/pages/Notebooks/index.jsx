import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';

export default function Notebooks() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log('scrolling',  document.querySelector('footer').offsetHeight)
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="notebooks-info">
      <div className="container notebooks-sugestions">
        <h1>Notebooks</h1>
        <p>
          Essa lista foi feita por um especialista em hardware, não pela minha pessoa. Ele trabalhou um tempo na manutenção de computadores, então você pode confiar.
        </p>
        <h2>Entre R$ 1500,00 e R$ 2500,00</h2>
        <ul>
          <li>
            <a href="https://amzn.to/4b2wNN5" target="_blank" rel="noopener noreferrer">
              Notebook Lenovo IdeaPad
            </a>
          </li>
        </ul>

        <h2>Entre R$ 2500,00 e R$ 3500,00</h2>
        <ul>
          <li>
            <a href="https://amzn.to/4aCW15A" target="_blank" rel="noopener noreferrer">
              Notebook Lenovo Ideapad
            </a>
          </li>
          <li>
            <a href="https://amzn.to/4hb6JTh" target="_blank" rel="noopener noreferrer">
              Notebook Acer Aspire 3
            </a>
          </li>
          <li>
            <a href="https://amzn.to/3JL9N9C" target="_blank" rel="noopener noreferrer">
              Notebook Acer Aspire 5
            </a>
          </li>
        </ul>
      
        <h2>Entre R$ 3500,00 e R$ 5000,00</h2>
        <ul>
          <li>
            <a href="https://amzn.to/3WDOUDZ" target="_blank" rel="noopener noreferrer">
              Notebook Dell Inspiron I15-I1300-M30S
            </a>
          </li>
        </ul>

        <h2>Acima de R$ 5000,00</h2>
        <ul>
          <li>
            <a href="https://amzn.to/3Ebp5F3" target="_blank" rel="noopener noreferrer">
              Notebook Gamer Dell G15-i1300-A20P (o meu 😊)
            </a>
          </li>
          <li>
            <a href="https://amzn.to/4aGfNNy" target="_blank" rel="noopener noreferrer">
              Notebook Gamer Acer Nitro 5
            </a>
          </li>
        </ul>
      </div>
  
      <div className='container notebooks-details'>
        <h1>Qual deles escolher?</h1>
        <p>
          Avalie com calma a Capacidade de Armazenamento, o Processador, 
          a Memória RAM e a Capacidade de Upgrade do Notebook, assim você 
          encontrará seu computador ideal. Para te ajudar, vou detalhar os tópicos a seguir:
        </p>
        <div>
          <h2><span className='emphasis'>- </span>Capacidade de Armazenamento</h2>
          <p>
            Ao escolher o armazenamento para seu notebook, é importante selecionar uma opção que se alinhe às suas necessidades específicas:
          </p>
          <p>
            <span className='emphasis'>Discos Rígidos Tradicionais (HDDs):</span> Os HDDs são uma escolha econômica para quem precisa de muito espaço de armazenamento. Eles são ideais para armazenar uma grande quantidade de dados, como coleções de fotos, vídeos e documentos, devido ao seu custo relativamente baixo por gigabyte.
          </p>
          <p>
            <span className='emphasis'>Unidades de Estado Sólido (SSDs):</span> Os SSDs oferecem velocidades de acesso e escrita significativamente mais rápidas, o que pode acelerar tudo, desde o boot do sistema até o carregamento de aplicativos e a transferência de dados. Apesar de serem mais caros que os HDDs, os benefícios de desempenho são substanciais, especialmente para programas que exigem muitos recursos ou para usuários que valorizam uma resposta rápida do sistema.
          </p>
          <p>
            <span className='emphasis'>Sistemas Híbridos (HDD + SSD):</span> Para um equilíbrio entre capacidade e velocidade, muitos notebooks oferecem uma configuração híbrida. Geralmente, isso inclui um SSD menor para o sistema operacional e programas, proporcionando rápida inicialização e carregamento, enquanto um HDD maior é usado para armazenamento de dados volumosos. Esta combinação oferece uma solução eficaz de custo-benefício.
          </p>
          <p>
            <span className='emphasis'>Capacidade de Upgrade e M.2 SSDs:</span> Verifique as opções de upgrade de armazenamento do notebook, que é crucial para expandir sua capacidade no futuro. Além disso, muitos modelos novos oferecem slots M.2 para SSDs, que são ainda menores e mais rápidos do que os SSDs tradicionais, permitindo expansões rápidas e eficientes sem sacrificar espaço ou desempenho.
          </p>
        </div>
  
        <div>
          <h2><span className='emphasis'>- </span>Processador</h2>
          <p>
            <span className='emphasis'>O coração do seu notebook</span>, o processador determina quão eficiente e rápido o seu computador pode executar programas e processar dados. Verifique o modelo e o ano do processador para garantir que você está adquirindo uma tecnologia recente. A frequência do processador, medida em gigahertz (GHz), indica quão rápido ele pode executar instruções. Um maior número de núcleos permite que o processador gerencie mais tarefas simultaneamente, melhorando o desempenho em multitarefas. Além disso, considere o cache do processador, uma memória menor e mais rápida que armazena cópias das informações mais acessadas pelo processador, aumentando a eficiência.
          </p>
        </div>
        <div>
          <h2><span className='emphasis'>- </span>Memória RAM</h2>
          <p>
            <span className='emphasis'>A RAM é crucial para o desempenho do notebook</span>, pois é onde o computador armazena os dados em uso ativo, permitindo acesso rápido pelo processador. Verifique a capacidade total de RAM, que pode variar de 4GB a 32GB ou mais em máquinas mais avançadas, para suportar a execução suave de múltiplos aplicativos e programas pesados. A frequência da RAM, também medida em MHz, é outro fator importante, pois determina a velocidade com que os dados são transferidos para e da memória. Maior frequência significa desempenho mais rápido. Além disso, verifique se o notebook permite upgrades de RAM, o que pode ser um ponto crucial para estender a vida útil e a funcionalidade da máquina.
          </p>
        </div>
        <div>
          <h2>Capacidade de Upgrade de Componentes em Notebooks</h2>
          <p>
            Investigue as possibilidades de upgrade para memória RAM e armazenamento nos notebooks antes de realizar uma compra. Muitos modelos permitem aumentar a RAM ou substituir o armazenamento interno (HDD ou SSD) para melhorar o desempenho e aumentar o espaço disponível. Contudo, alguns modelos podem ter componentes soldados, limitando a capacidade de upgrades. Verificar estas características pode determinar a flexibilidade e a utilidade futura do notebook.
          </p>
        </div>

        <h1>Os demais itens são menos relevantes</h1>

        <div>
          <h2>Resolução para Notebooks</h2>
          <p>
            Ao escolher a tela de um notebook, tanto para trabalho quanto para jogos,
            é crucial considerar vários aspectos que influenciam diretamente 
            a sua experiência. Aqui estão os fatores chave:
          </p>
          <h3>Tamanho da Tela</h3>
          <p>
            Para Trabalho: Telas maiores, geralmente de 15 a 17 polegadas, são preferidas para tarefas profissionais, especialmente se você trabalha com muitas janelas abertas ou precisa de espaço de tela para design gráfico, edição de vídeo, ou programação. Uma tela maior facilita a visualização de detalhes finos e reduz a necessidade de rolar frequentemente.
          </p>
          <p>
            Para Jogos: Enquanto telas maiores também são vantajosas para jogos, proporcionando uma imersão maior, a portabilidade pode ser um fator se você planeja levar o notebook para LAN parties ou eventos. Neste caso, uma tela de 15 polegadas pode ser um bom meio-termo.
          </p>
          <h3>Resolução da Tela</h3>
          <p>
            Alta Resolução: Resoluções mais altas, como 1920x1080 (Full HD) ou superior, são recomendadas tanto para trabalho quanto para jogos. Para profissionais que trabalham com gráficos ou vídeo, uma resolução mais alta permite uma visualização mais detalhada de imagens. Para jogadores, uma resolução mais alta oferece gráficos mais nítidos e detalhados, melhorando a experiência visual.
          </p>
          <p>
            4K ou Ultra HD: Ideal para designers gráficos ou videomakers que precisam de uma precisão extrema nos detalhes. No entanto, para jogadores, embora ofereça a melhor fidelidade visual, requer hardware mais potente para jogar confortavelmente com configurações altas.
          </p>
          <h4>Tipo de Painel</h4>
          <p>
            IPS (In-Plane Switching): Oferece os melhores ângulos de visão e reprodução de cores, ideal para profissionais que precisam de precisão de cor e para jogadores que buscam qualidade visual superior.
          </p>
          <p>
            TN (Twisted Nematic): Geralmente tem tempos de resposta mais rápidos e é mais econômico, adequado para jogadores que priorizam a velocidade de resposta em jogos competitivos.
          </p>
          <h3>Taxa de Atualização</h3>
          <p>
            60Hz a 120Hz ou Mais: Uma taxa de atualização mais alta (medida em Hz) significa que a imagem na tela é atualizada com mais frequência por segundo, o que é crítico para jogadores que jogam títulos de movimento rápido, como jogos de tiro em primeira pessoa. Telas com 120Hz ou mais reduzem o rastreamento de movimento e proporcionam uma experiência mais fluida.
          </p>
          <p>
            Para Trabalho Profissional: Uma taxa de atualização padrão de 60Hz geralmente é suficiente, a menos que você esteja trabalhando com vídeo e precise de uma sincronização de quadro precisa.
          </p>
        </div>
      </div>

      {showScroll && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            display: showScroll ? 'flex' : 'none',
            bottom: 220,
            right: 220,
            backgroundColor: '#FF4D00',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
            fontSize: '18px',
            padding: '10px 20px',
            borderRadius: '5px',
          }}
        >
          Voltar ao Topo 👆
        </button>
      )}
    </div>
  );
}
