import { Link } from 'react-router-dom';
import './styles.css'
import Midia from '../../components/Midia';

const items = [
  {
    title: 'Notebook',
    url: 'https://amzn.to/4debSYY',
    img: 'https://m.media-amazon.com/images/I/61NR1TjDpgL._AC_SX300_SY300_.jpg'
  },
  {
    title: 'Cadeira ergonômica',
    url: 'https://amzn.to/3Jyf9ov',
    img: 'https://m.media-amazon.com/images/I/41+Bky70eQL._AC_SX300_SY300_.jpg'
  },
  {
    title: 'Monitor 27',
    url: 'https://amzn.to/4970rAD',
    img: 'https://m.media-amazon.com/images/I/61vYqnItouL._AC_SX300_SY300_.jpg',
  },
  {
    title: 'Monitor 24',
    url: 'https://amzn.to/49Pm1bU',
    img: 'https://m.media-amazon.com/images/I/616lu1+PF7L._AC_SX300_SY300_.jpg'
  },
  {
    title: 'Teclado Redragon - Kumara Pro',
    url: 'https://amzn.to/3ZkIICJ',
    img: 'https://m.media-amazon.com/images/I/51aZ6eBk7LL._AC_SX300_SY300_.jpg'
  },
  {
    title: 'Mouse Redragon',
    url: 'https://amzn.to/4b91Oi5',
    img: 'https://m.media-amazon.com/images/I/611jbF+FbbL._AC_SY200_SX300_.jpg'
  },
  {
    title: 'Monitor de audio Edifier',
    url: 'https://amzn.to/44bM7Vg',
    img: 'https://m.media-amazon.com/images/I/61vdxVJv1IL._AC_SX300_SY300_.jpg'
  },
  {
    title: 'GoPro',
    url: 'https://amzn.to/4b5wAII',
    img: 'https://m.media-amazon.com/images/I/51NSTSEiHXL.__AC_SX300_SY300_.jpg'
  },
  {
    title: 'Suporte',
    url: 'https://amzn.to/3UwNWJd',
    img: 'https://m.media-amazon.com/images/I/51sFj66XFBL.__AC_SX300_SY300_.jpg'
  },
  {
    title: 'Microfone de Lapela - BOYA',
    url: 'https://amzn.to/3ZnoIiV',
    img: 'https://m.media-amazon.com/images/I/71O3-ZwC2gS._AC_SX200_SY300_.jpg'
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
            <h3>Da uma olhada <Link to='/notebooks' reloadDocument={true}>aqui</Link> antes de comprar um note.</h3>
          </div>
      </div>

      <h1 className='setup'>Caso tenha interesse em conhecer o meu Setup</h1>
      <div className='things'>
        {
          items.map((item, index) => (
            <a
              className='thing'
              key={index}
              href={item.url}
              target='_blank'
            >
              <div>
                <h2>{item.title}</h2>
                <img src={item.img} alt={item.title} />
              </div>
            </a>
          ))
        }
      </div>

    </div>
  );
}
