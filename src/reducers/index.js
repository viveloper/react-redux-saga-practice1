import { combineReducers } from 'redux';
import user from './user';
import posts from './posts';
import loading from './loading';

const rootReducer = combineReducers({
    user,
    posts,
    isLoading: loading
});

export default rootReducer;