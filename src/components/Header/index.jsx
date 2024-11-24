import logoDark from '../../assets/logo-dark.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './styles.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <Link to="/">
        <img src={logoDark} alt="Logo do React" className="logo" />
      </Link>
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <div className="close">
            <span onClick={toggleMenu} aria-label="Close menu">
                X
            </span>
        </div>
        <ul>
            <Link to="/" onClick={() => setMenuOpen(false)}>
                <li>
                    Início
                </li>
            </Link>
            <Link to="/courses" onClick={() => setMenuOpen(false)}>
                <li>
                    Cursos
                </li>
            </Link>
            <Link to="/recomendation" onClick={() => setMenuOpen(false)}>
                <li>
                    Recomendações
                </li>
            </Link>
        </ul>
      </nav>
    </header>
  );
}
