import { all, call } from 'redux-saga/effects';
import user from './user';
import posts from './posts';

function* rootSaga() {
    yield all([call(user), call(posts)]);
}

export default rootSaga;