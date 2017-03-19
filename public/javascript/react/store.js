import {createStore, applyMiddleware} from 'redux';
import allReducers from '../babel/reducers/index.js';

export const store = createStore(allReducers);

//ReactDOM.render(<h1>Hey Guy!</h1>, document.getElementById('root'));