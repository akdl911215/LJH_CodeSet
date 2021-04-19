import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'App';
import Home from 'common/component/Home';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from 'reportWebVitals';
import store from 'app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();
