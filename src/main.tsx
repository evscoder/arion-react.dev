import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter} from 'react-router-dom';
import {PATHS} from './api/api';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? PATHS.root : ''}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
