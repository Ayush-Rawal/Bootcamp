import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {createStore,applyMiddleware} from 'redux'

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,createLogger))

const logger = createLogger();

ReactDOM.render( <App/> , document.getElementById('root'));
registerServiceWorker();