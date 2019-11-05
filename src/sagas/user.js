import { takeLatest, call, put } from 'redux-saga/effects';
import { SIGNIN } from '../constants';
import { signinSuccess, signinFail } from '../actions';
import signinAPI from '../api/signin';

// worker saga
function* signin(action) {    
    const { username, password } = action;
    try {        
        const user = yield call(signinAPI, username, password);
        yield put(signinSuccess(user));        
    }
    catch (error) {
        console.error(error);
        yield put(signinFail());        
    }
}

// watcher saga
function* userSaga() {    
    yield takeLatest(SIGNIN, signin);    
}

export default userSaga;