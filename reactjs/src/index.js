import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'App';
import Home from 'common/component/Home';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from 'reportWebVitals';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();
