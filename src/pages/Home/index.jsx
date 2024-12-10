import capaUdemy from '../../assets/capa-udemy.png';
import personIcon from '../../assets/person-icon.png';
import sandclockIcon from '../../assets/sandclock-icon.png';
import startsIcon from '../../assets/stars-icon.png';
import tagIcon from '../../assets/tag-icon.png';
import character from '../../assets/character.png';

import './styles.css'
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <div className='home'>
  
      <div className='first-section'>
        <h1><span>Faaala Dev</span><img src={tagIcon} alt='Tag' /></h1>
        
        <Link to='/courses'>
          Bora Codar
        </Link>
      </div>

      <div className='container second-section'>

        <div className='text'>
          <div>
            <h1>
              Sua porta de entrada para o mundo da programação!
            </h1>
            <p>
              Aqui no InitCode, 
              acreditamos que a programação é para todos. Seja você um iniciante 
              absoluto ou alguém que já se aventurou no mundo do código, estamos 
              aqui para ajudá-lo(a) a desvendar os mistérios da programação de 
              uma maneira acessível e amigável.
            </p>
          </div>
        </div>
        <img src={character} alt='Foto de Renan Ponick' />
      </div>

      <div className='container third-section'>
        <div className='udemy-detalhes' id='udemy'>
          <img src={capaUdemy} alt='Logo do React'/>
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
              <span className='number'>+134</span>
              <span>Alunos</span>
            </div>

            <div>
              <img src={startsIcon} alt='Logo do React' />
              <span className='number'>4,9</span>
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
              Bora dominar NodeJS
            </a>
        </div>
        </div>
      </div>

      <div className='about'>
        <div className="overlay">
          <div className='card'>
            <div className='card-text'>
              <h1><span>-</span> Comprometimento é tudo!</h1>
              <p>
              Estamos comprometidos em fornecer a você recursos
              valiosos que abordam desde os conceitos mais básicos
              até os temas mais avançados da programação e da lógica de programação.
              Nossos vídeos são cuidadosamente elaborados para orientar você em sua
              jornada de aprendizado, permitindo que você construa uma base sólida
              e confiante no vasto universo da codificação. 
              </p>
            </div>
          </div>
        
          <div className='card middle'>
            <div className='card-text'>
              <h1><span>-</span> Ficou fácil encontrar o que você precisa</h1>
              <p>
                Na InitCode, acreditamos que o conhecimento deve ser acessível a todos.
                É por isso que todos os nossos recursos estão disponíveis 
                24 horas por dia, 7 dias por semana. Não importa onde você esteja ou 
                qual seja o seu nível de experiência, estamos aqui para ajudá-lo a 
                alcançar seus objetivos de aprendizado em programação.
              </p>
            </div>
          </div>

          <div className='card'>
            <div className='card-text'>
              <h1><span>-</span> E ai, bora lá?</h1>
              <p>
                Então, se você está pronto para dar os primeiros passos emocionantes
                no mundo da programação, junte-se a nós no InitCode.
                Vamos começar essa jornada juntos e desbloquear o potencial
                ilimitado que a codificação oferece. Estamos ansiosos para sermos
                parte do seu sucesso!  
              </p>
              <Link to='/courses' reloadDocument={true}>
                Bora Codar
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
