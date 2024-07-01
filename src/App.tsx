import 'tippy.js/dist/tippy.css';
import 'simplebar-react/dist/simplebar.min.css';
import 'react-circular-progressbar/dist/styles.css';
import 'flatpickr/dist/flatpickr.min.css';
import '@smastrom/react-rating/style.css';
import './styles/app.scss';
import {useLayoutEffect} from 'react';
import Navigation from './components/routes/Navigation';
import {useDispatch, useSelector} from 'react-redux';
import {initTheme} from './redux/themeSlice';
import useMockAdapter from './api/useMockAdapter';
import {RootState} from './store';

function App() {
    const { theme } = useSelector((state: RootState) => state.themeSlice);
    const dispatch = useDispatch();

    useMockAdapter();
    useLayoutEffect(() => {
        const rootElement = document.getElementById('root') as HTMLElement;

        rootElement.classList.add('page-wrapper');
    }, []);

    useLayoutEffect(() => {
        dispatch(initTheme());
    }, [theme, dispatch]);

    return (
        <Navigation />
    );
}

export default App;
