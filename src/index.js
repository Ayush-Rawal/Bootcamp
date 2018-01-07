import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware,compose } from 'redux'
import {rootRed} from './reducers/index'
import DevTools from './containers/DevTools'

// To be removed after reducer is working
import { combineReducers } from 'redux'
import { weather } from './reducers/weather.red'

const preState = {
    "currPage": null,
    "totalPages": null,
    "weather": {
        "fullweather": {},
        "weather": {
            "city": null,
            "temp": null,
            "status": 'sun'
        },
        "format": 'celsius',
        "lastUpdated": null,
        "isFetching": true,
        "ISCHANGINGCITY": false,
        "inpVal": "",
        "APIKEY": "2f93cf2121be130f065ac078017c2a52"
    },
    "calculator": {
        "input": null,
        "result": null
    },
    "converse": {
        "currConv": null,
        "conversations": [],
        "messages": [{
            "text": null,
            "sender": null,
            "date": null
        }]
    }
}

const logger = createLogger();

export const store = createStore(rootRed, preState, compose(applyMiddleware(thunkMiddleware, logger)),DevTools.instrument());

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

render(
    <Provider store = { store }>
    <App store = {store}/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();