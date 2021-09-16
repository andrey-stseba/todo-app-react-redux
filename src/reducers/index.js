import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({ task: todoReducer });

export default rootReducer;
