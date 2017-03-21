import {combineReducers} from 'redux';
import {reducer1} from './reducer1.js';
import ActiveUserReducer from './reducer2';


const allReducers = combineReducers({
    isFetchingData: false,
    users: reducer1,
    activeUser: ActiveUserReducer

});

export default allReducers;