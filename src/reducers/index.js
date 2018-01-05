import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import characterInfoReducer from './characterInfoReducer';
import eventsInfoReducer from './eventsInfoReducer';

export default combineReducers({
    characterQuery: characterReducer,
    characterInfo: characterInfoReducer,
    eventsInfo: eventsInfoReducer
});