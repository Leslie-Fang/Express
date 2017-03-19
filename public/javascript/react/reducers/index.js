import {combineReducers} from 'redux';
import {reducer1} from './reducer1.js';
//import ActiveUserReducer from './reducer2.js';


const allReducers = combineReducers({
    users: reducer1

});

export default allReducers;