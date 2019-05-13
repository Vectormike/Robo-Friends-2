import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'tachyons';
import { searchRobots } from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import * as serviceWorker from './serviceWorker';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));


ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider> ,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
