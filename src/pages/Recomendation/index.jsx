import { Link } from 'react-router-dom';
import './styles.css'
import Midia from '../../components/Midia';

const notebooksFirst = [
  {
    title: 'Lenovo IdeaPad I3',
    url: 'https://amzn.to/3EGtvEr',
    url2: 'https://amzn.to/3Jyf9ov',
    img: 'https://m.media-amazon.com/images/I/61HQNiJlH7L._AC_SX300_SY200_.jpg'
  },
]
const notebooksSecond = [
  {
    title: 'Notebook Lenovo Ideapad I5',
    url: 'https://amzn.to/4aCW15A',
    url2: 'https://mercadolivre.com/sec/2bYh2Uv',
    img: 'https://m.media-amazon.com/images/I/51Ri6f37FRL._AC_SX300_SY200_.jpg'
  },
  {
    title: 'Notebook Acer Aspire 3',
    url: 'https://amzn.to/4hb6JTh',
    url2: 'https://mercadolivre.com/sec/1W67qco',
    img: 'https://m.media-amazon.com/images/I/61SBkDNFarL._AC_SX300_SY200_.jpg'
  },
  {
    title: 'Notebook Acer Aspire 5',
    url: 'https://amzn.to/3JL9N9C',
    url2: 'https://mercadolivre.com/sec/184xEoH',
    img: 'https://m.media-amazon.com/images/I/51gEkEbXrHL._AC_SX300_SY200_.jpg'
  },
]
const notebooksThird = [
  {
    title: 'Dell G15',
    url: 'https://amzn.to/4ixunZV',
    url2: 'https://mercadolivre.com/sec/2vvVgaf',
    img: 'https://m.media-amazon.com/images/I/61NR1TjDpgL._AC_SX300_SY200_.jpg'
  },
  {
    title: 'Acer Nitro 5',
    url: 'https://amzn.to/42Im9Iy',
    url2: 'https://mercadolivre.com/sec/1CKsT33',
    img: 'https://m.media-amazon.com/images/I/51Wv-tEUn6L._AC_SX300_SY200_.jpg'
  },
  {
    title: 'ASUS TUF Gaming',
    url: 'https://amzn.to/4jNNKPu',
    url2: 'https://mercadolivre.com/sec/1gHJUv3',
    img: 'https://m.media-amazon.com/images/I/71zxWLbeYYL._AC_SX300_SY200_.jpg'
  },
  {
    title: 'Dell Inspiron 15',
    url: 'https://amzn.to/3RTTpYx',
    url2: 'https://mercadolivre.com/sec/2mViarm',
    img: 'https://m.media-amazon.com/images/I/51X3rLsuzXL._AC_SX300_SY200_.jpg'
  },
]

const items = [
  {
    title: 'Dell G15',
    url: 'https://amzn.to/4ixunZV',
    url2: 'https://mercadolivre.com/sec/2vvVgaf',
    img: 'https://m.media-amazon.com/images/I/61NR1TjDpgL._AC_SX300_SY200_.jpg'
  },
  {
    title: 'Cadeira ergonômica',
    url: 'https://amzn.to/3Jyf9ov',
    url2: 'https://mercadolivre.com/sec/239SCGG',
    img: 'https://m.media-amazon.com/images/I/41+Bky70eQL._AC_SX300_SY200_.jpg'
  },
  {
    title: 'Monitor 27 - Auxiliar',
    url: 'https://amzn.to/3GoDqPn',
    url2: 'https://mercadolivre.com/sec/1hVsTik',
    img: 'https://m.media-amazon.com/images/I/71IQeEw4pbL._AC_SX300_SY200_.jpg'
  },
  {
    title: 'Monitor 27 - Principal',
    url: 'https://amzn.to/4970rAD',
    url2: 'https://mercadolivre.com/sec/1cfia2K',
    img: 'https://m.media-amazon.com/images/I/61vYqnItouL._AC_SX300_SY200_.jpg',
  },
  {
    title: 'Teclado Redragon - Kumara Pro',
    url: 'https://amzn.to/3ZkIICJ',
    url2: 'https://mercadolivre.com/sec/2jmZXgD',
    img: 'https://m.media-amazon.com/images/I/51aZ6eBk7LL._AC_SX300_SY200_.jpg'
  },
  {
    title: 'Mouse Redragon',
    url: 'https://amzn.to/4b91Oi5',
    url2: 'https://mercadolivre.com/sec/2ZTb8Gw',
    img: 'https://m.media-amazon.com/images/I/611jbF+FbbL._AC_SX300_SY200_.jpg'
  },
  {
    title: 'Monitor de audio Edifier',
    url: 'https://amzn.to/44bM7Vg',
    url2: 'https://mercadolivre.com/sec/1BeirMU',
    img: 'https://m.media-amazon.com/images/I/61vdxVJv1IL._AC_SX300_SY200_.jpg'
  },
  {
    title: 'GoPro',
    url: 'https://amzn.to/4iulujX',
    url2: 'https://mercadolivre.com/sec/1UCkZjE',
    img: 'https://m.media-amazon.com/images/I/615eTO83jLL._AC_SX300_SY200_.jpg'
  },
  {
    title: 'Suporte',
    url: 'https://amzn.to/3UwNWJd',
    url2: 'https://mercadolivre.com/sec/2vnVVhq',
    img: 'https://m.media-amazon.com/images/I/51sFj66XFBL._AC_SX300_SY200_.jpg'
  },
  {
    title: 'Microfone de Lapela - BOYA',
    url: 'https://amzn.to/3ZnoIiV',
    url2: 'https://mercadolivre.com/sec/1MgMEwJ',
    img: 'https://m.media-amazon.com/images/I/71O3-ZwC2gS._AC_SX300_SY200_.jpg'
  },
]

export default function Recomendation() {
  return (
    <div className='recomendation'>
  
      <div className='social-media'>
        <h1>
          Não perca nenhuma <span className='act'>novidade</span>, acompanhe as nossas redes sociais
        </h1>


        <Midia size={100} />

      </div>

      <div className='notebooks'>
          <div className='overlay' >
            <h1>Pensando em comprar um Notebook?</h1>
            <p>
              Tem um tempo que alguns alunos me pediram uma sugestão de computador 
              para começar a programar, a pergunta que eu sempre faço é, 
              &quot;quanto você quer pagar?&quot;. Você precisará ter em mente que o valor irá 
              influenciar bastante na vida útil do notebook, afinal os apps e jogos 
              vão ficando cada vez mais pesados. Bom, fiz uma lista com alguns 
              notes em faixas de preços.
            </p>
            <h2>Entre R$ 1500,00 e R$ 2500,00</h2>
            <div className='things-list'>
              {
                notebooksFirst.map((item, index) => (
                  <div
                    className='thing'
                    key={index}
                  >
                    <h2>{item.title}</h2>
                    <img src={item.img} alt={item.title} />
                    <div className='links'>
                      <a
                        href={item.url}
                        target='_blank'
                        >
                        Amazon
                      </a>
                      <a
                        href={item.url2}
                        target='_blank'
                        >
                        Mercado Livre
                      </a>
                    </div>

                  </div>
                ))
              }
            </div>
            <h2>Entre R$ 2500,00 e R$ 3500,00</h2>
            <div className='things-list'>
              {
                notebooksSecond.map((item, index) => (
                  <div
                    className='thing'
                    key={index}
                  >
                    <h2>{item.title}</h2>
                    <img src={item.img} alt={item.title} />
                    <div className='links'>
                      <a
                        href={item.url}
                        target='_blank'
                        >
                        Amazon
                      </a>
                      <a
                        href={item.url2}
                        target='_blank'
                        >
                        Mercado Livre
                      </a>
                    </div>

                  </div>
                ))
              }
            </div>
            <h2>Entre R$ 3500,00 e R$ 6000,00</h2>
            <div className='things-list'>
              {
                notebooksThird.map((item, index) => (
                  <div
                    className='thing'
                    key={index}
                  >
                    <h2>{item.title}</h2>
                    <img src={item.img} alt={item.title} />
                    <div className='links'>
                      <a
                        href={item.url}
                        target='_blank'
                        >
                        Amazon
                      </a>
                      <a
                        href={item.url2}
                        target='_blank'
                        >
                        Mercado Livre
                      </a>
                    </div>

                  </div>
                ))
              }
            </div>
            <h3>Da uma olhada <Link to='/notebooks' reloadDocument={true}>aqui</Link> antes de comprar um note.</h3>
          </div>
      </div>

      <h1 className='setup'>Caso tenha interesse em conhecer o meu Setup</h1>
      <div className='things-list space-bottom'>
        {
          items.map((item, index) => (
            <div
              className='thing'
              key={index}
            >
              <h2>{item.title}</h2>
              <img src={item.img} alt={item.title} />
              <div className='links'>
                <a
                  href={item.url}
                  target='_blank'
                  >
                  Amazon
                </a>
                <a
                  href={item.url2}
                  target='_blank'
                  >
                  Mercado Livre
                </a>
              </div>

            </div>
          ))
        }
      </div>

    </div>
  );
}
