import {combineReducers} from 'redux';
import formReducer from './form';

export const rootReducer = combineReducers({
  formdata: formReducer
})
