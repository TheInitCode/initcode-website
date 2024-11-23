import logoDark from '../../assets/logo-dark.svg';
// import logoLight from '../../assets/logo-light.svg';
import { Link } from 'react-router-dom';
import './styles.css'

export default function Header(){
    return (
        <header>
            <Link to="/">
                <img src={logoDark} alt='Logo do React' />
            </Link>
            <nav>
                <ul>
                    <Link to="/">
                        <li>Início</li>
                    </Link>
                    <Link to="/courses">
                        <li>Cursos</li>
                    </Link>
                    <Link to="/recomendation">
                        <li>Recomendações</li>
                    </Link>
                    <Link to="/about">
                        <li>Sobre</li>
                    </Link>
                </ul>
            </nav>
            <p></p>
        </header>
    )
}