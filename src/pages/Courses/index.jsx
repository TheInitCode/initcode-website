import { Link } from 'react-router-dom';
import './styles.css'

const cursos = [
  {
    title: 'Node.js',
    description: 'Quer iniciar na programação sem pagar NADA? Acesse aqui a minha playlist de Node, onde começaremos do zero, explicando os fundamentos do Node.js: o que é, como instalar e por que é uma escolha popular para o desenvolvimento de servidores e APIs. Você aprenderá a criar seus primeiros scripts em JavaScript no servidor, manipulando variáveis, funções e estruturas de controle de fluxo.',
    video: 'https://www.youtube.com/embed/videoseries?si=zfO9UOs51tMxMneN&list=PLI8zu4XrMjAxe5dGI2tiQ8MQAfdT4fGjM'
  },
  {
    title: 'C++',
    description: 'Começaremos do zero, explicando os conceitos básicos de C++: como declarar variáveis,'
      + 'atribuir valores a elas e realizar operações simples. Você aprenderá a linguagem de programação '
      + 'C++ de forma gradual, com explicações claras e exemplos práticos para ajudar a solidificar seu '
      + 'entendimento.',
    video: 'https://www.youtube.com/embed/videoseries?si=w8IacHiT3RCUqYbh&list=PLI8zu4XrMjAy3MBlM7qyPq6OTOA_iZ7tG'
  },
  {
    title: 'C#',
    description: 'Prepare-se para dominar uma das linguagens mais poderosas e versáteis do mundo da programação. '
      + 'Vamos começar do zero, explorando os fundamentos da linguagem. Aprenderemos como criar variáveis, compreender estruturas ' 
      + 'de condição e repetição. '
      + 'Você aprenderá a definir e chamar funções, passar argumentos e retornar valores, permitindo uma maior flexibilidade e eficiência em seus programas. '
      + 'A partir daí, avançaremos para um dos pilares mais importantes da programação moderna: a orientação a objetos.',
    video: 'https://www.youtube.com/embed/videoseries?si=xPUvbUZ89p4gzoVq&list=PLI8zu4XrMjAwbI0qpgEMKF4PotrvWhkKh'
  },
  {
    title: 'Git, GitHub e GitHub Pages',
    description: 'Começaremos do zero, explicando os conceitos básicos do Git: o que é versionamento, por que é importante e como começar a usá-lo em seus projetos. '
      + 'Você aprenderá a criar e gerenciar repositórios no GitHub, colaborar com outros desenvolvedores, abrir e revisar pull requests e muito mais. '
      + 'Finalmente, fecharemos a playlist com um mergulho emocionante na hospedagem de sites estáticos no GitHub Pages.',
      video: 'https://www.youtube.com/embed/videoseries?si=rEphQscu-RhfeD5x&list=PLI8zu4XrMjAzva6GTrDPiWd_RwXZFzKj6'
  }
]

export default function Courses() {
  return (
    <div className="courses">
      <div className="cards">
        <h1>Cursos Gratúitos pra você</h1>
        {cursos.map((curso, index) => (
          <div key={index} className={`card ${index % 2 !== 0 ? "white" : "black"}`}>
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
      </div>
    </div>
  );
}
