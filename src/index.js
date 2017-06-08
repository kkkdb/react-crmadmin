import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './style/index.css';
import './style/reset.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
