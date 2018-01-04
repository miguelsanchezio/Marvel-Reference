import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import characterInfoReducer from './characterInfoReducer';

export default combineReducers({
    characterQuery: characterReducer,
    characterInfo: characterInfoReducer
});