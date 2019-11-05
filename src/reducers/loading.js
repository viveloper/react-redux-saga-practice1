import { SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAIL, FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAIL } from "../constants";

const initialState = false;

function loading(previousState = initialState, action) {
    if(action.type === SIGNIN || action.type===FETCH_POSTS) {
        return true;
    }
    else if(action.type === SIGNIN_SUCCESS || action.type === FETCH_POSTS_SUCCESS) {
        return false;
    }
    else if(action.type === SIGNIN_FAIL || action.type === FETCH_POSTS_FAIL) {
        return false;
    }
    else {
        return previousState;
    }
}

export default loading;