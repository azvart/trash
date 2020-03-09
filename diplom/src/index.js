import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import MainInfo from './Redux/stateMain';
import HeaderInfo from './Redux/stateMain';
import App from './App';

ReactDOM.render(<App main={MainInfo} header={HeaderInfo} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
