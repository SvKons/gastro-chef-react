import ReactDOM from 'react-dom/client';
import 'reset-css';
import './styles/index.scss';
import MainPage from './pages/MainPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <>
        <MainPage />
    </>
);
