import { FETCH_POSTS_SUCCESS, FETCH_POSTS_FAIL } from "../constants";

const initialState = [];

function posts(previousState = initialState, action) {
    if (action.type === FETCH_POSTS_SUCCESS) {
        return [...action.posts];
    }
    else if (action.type === FETCH_POSTS_FAIL) {
        return [];
    }
    else {
        return previousState;
    }
}

export default posts;