import capaUdemy from '../../assets/capa-udemy.png';
import personIcon from '../../assets/person-icon.png';
import sandclockIcon from '../../assets/sandclock-icon.png';
import startsIcon from '../../assets/stars-icon.png';
import tagIcon from '../../assets/tag-icon.png';
import character from '../../assets/character.png';

import './styles.css'

export default function Home() {
  return (
    <div className='home'>
  
      <div className='first-section'>
        <h1><span>Fala Dev</span><img src={tagIcon} alt='Tag' /></h1>
        
        <a
            href='https://www.udemy.com/course/do-zero-a-api-nodejs/?referralCode=031655834C6F63128255'
            target='_blank'
          >
            Bora dominar NodeJS
          </a>
      </div>

      <div className='container second-section'>

        <div className='text'>
          <p>
            O JavaScript é uma das linguagens de programação mais populares e
            essenciais do mercado. Com ele, você pode transformar ideias em projetos
            reais, criando desde sites dinâmicos até aplicativos inovadores.
          </p>
          <p>
            Dominar o JavaScript é um passo importante para qualquer aspirante a
            programador, pois ele não apenas amplia suas habilidades,
            mas também aumenta suas oportunidades de carreira.
          </p>
        </div>
        <img src={character} alt='Foto de Renan Ponick' />
      </div>

      <div className='container third-section'>
  
        <div className='udemy-detalhes'>
          <img src={capaUdemy} alt='Logo do React' />
          <div className='udemy-detalhes-texto'>
            <h2>Rest API em JavaScript(NodeJS) + Hospedagem</h2>
            <ul>
              <li>Crie e hospede APIs de forma fácil e intuitíva;</li>
              <li>Domine o NodeJS e o Express;</li>
              <li>Aprenda a hospedar suas APIs na web.</li>
              <li>Certificado de Conclusão</li>
              <li>Utilize JavaScript, Express, Sequelize, Bcrypt, JWT, MySQL, Postgres, testes com JEST, Docker;</li>
            </ul>
          </div>
        </div>
  
        <div className='udemy-destaques'>
          <h1>Curso com Certificado!</h1>
          <h1>Do Zero à API</h1>
          <div className='udemy-topicos'>
            <div>
              <img src={personIcon} alt='Logo do React' />
              <span className='number'>+70</span>
              <span>Alunos</span>
            </div>

            <div>
              <img src={startsIcon} alt='Logo do React' />
              <span className='number'>5,0</span>
              <span>Estrelas</span>
            </div>

            <div>
              <img src={sandclockIcon} alt='Logo do React' />
              <span className='number'>17h</span>
              <span>Conteúdo</span>
            </div>
          </div>
         <div className='udemy-link'>
          <a
              href='https://www.udemy.com/course/do-zero-a-api-nodejs/?referralCode=031655834C6F63128255'
              target='_blank'
            >
              Conhecer
            </a>
         </div>
        </div>
  
      </div>
    </div>
  );
}
