import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import { reducer as formReducer } from 'redux-form';
import streamReducer from './stream_reducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
})