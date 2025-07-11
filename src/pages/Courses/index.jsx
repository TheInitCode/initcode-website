import { Link, useLocation } from 'react-router-dom';
import './styles.css'
import { useEffect } from 'react';

const cursos = [
  {
    id: "node",
    title: 'Node.js',
    description: 'Quer iniciar na programação sem pagar NADA? Acesse aqui a minha playlist de Node, onde começaremos do zero, explicando os fundamentos do Node.js: o que é, como instalar e por que é uma escolha popular para o desenvolvimento de servidores e APIs. Você aprenderá a criar seus primeiros scripts em JavaScript no servidor, manipulando variáveis, funções e estruturas de controle de fluxo.',
    video: 'https://www.youtube.com/embed/videoseries?si=zfO9UOs51tMxMneN&list=PLI8zu4XrMjAxe5dGI2tiQ8MQAfdT4fGjM'
  },
  {
    id: 'c++',
    title: 'C++',
    description: 'Começaremos do zero, explicando os conceitos básicos de C++: como declarar variáveis,'
      + 'atribuir valores a elas e realizar operações simples. Você aprenderá a linguagem de programação '
      + 'C++ de forma gradual, com explicações claras e exemplos práticos para ajudar a solidificar seu '
      + 'entendimento.',
    video: 'https://www.youtube.com/embed/videoseries?si=w8IacHiT3RCUqYbh&list=PLI8zu4XrMjAy3MBlM7qyPq6OTOA_iZ7tG'
  },
  {
    id: 'c#',
    title: 'C#',
    description: 'Prepare-se para dominar uma das linguagens mais poderosas e versáteis do mundo da programação. '
      + 'Vamos começar do zero, explorando os fundamentos da linguagem. Aprenderemos como criar variáveis, compreender estruturas '
      + 'de condição e repetição. '
      + 'Você aprenderá a definir e chamar funções, passar argumentos e retornar valores, permitindo uma maior flexibilidade e eficiência em seus programas. '
      + 'A partir daí, avançaremos para um dos pilares mais importantes da programação moderna: a orientação a objetos.',
    video: 'https://www.youtube.com/embed/videoseries?si=xPUvbUZ89p4gzoVq&list=PLI8zu4XrMjAwbI0qpgEMKF4PotrvWhkKh'
  },
  {
    id: 'git',
    title: 'Git, GitHub e GitHub Pages',
    description: 'Começaremos do zero, explicando os conceitos básicos do Git: o que é versionamento, por que é importante e como começar a usá-lo em seus projetos. '
      + 'Você aprenderá a criar e gerenciar repositórios no GitHub, colaborar com outros desenvolvedores, abrir e revisar pull requests e muito mais. '
      + 'Finalmente, fecharemos a playlist com um mergulho emocionante na hospedagem de sites estáticos no GitHub Pages.',
    video: 'https://www.youtube.com/embed/videoseries?si=rEphQscu-RhfeD5x&list=PLI8zu4XrMjAzva6GTrDPiWd_RwXZFzKj6'
  }
]

export default function Courses() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.replace('#', ''));
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300); // aguarda renderização
      }
    }
  }, [location]);

  return (
    <div className="courses">
      <div className="cards">
        <h1>Cursos Gratúitos pra você</h1>
        <Link to="/language-recomendation" className="link">
          Não sabe qual linguagem escolher? Clica aqui que eu te ajudo!
        </Link>
        {cursos.map((curso, index) => (
          <div id={curso.id} key={index} className={`card ${index % 2 !== 0 ? "white" : "black"}`}>
            <h2>{curso.title}</h2>
            <p>{curso.description}</p>
            <iframe
              className='iframe'
              src={curso.video}
              title={curso.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
            {
              curso.title === 'Node.js'
              && <Link to="/#udemy">
                Quer certificado?
              </Link>}
          </div>
        ))}
        <div>
          <Link to="/language-recomendation" className="link">
            Não sabe qual linguagem escolher? Clica aqui que eu te ajudo!
          </Link>
        </div>
      </div>
    </div>
  );
}
