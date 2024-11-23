import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './styles.css';

export default function Layout() {
    return (
        <main>
            <Header />
            <div className='content'>
                <Outlet />
            </div>
            <Footer />
        </main>
      );    
}