import {takeLatest, call, put} from 'redux-saga/effects';
import { FETCH_POSTS } from '../constants';
import fetchPostsAPI from '../api/fetchPosts';
import { fetchPostsFail, fetchPostsSuccess } from '../actions';

// worker saga
function* fetchPosts() {
    try{
        const posts = yield call(fetchPostsAPI);
        yield put(fetchPostsSuccess(posts));
    }
    catch(error){
        console.error(error);
        yield put(fetchPostsFail());
    }
}

// watcher saga
function* postsSaga() {
    yield takeLatest(FETCH_POSTS, fetchPosts);
}

export default postsSaga;