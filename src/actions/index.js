import { SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAIL, FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAIL } from "../constants";

export function signin(username, password) {
    return {
        type: SIGNIN,
        username,
        password
    }
}
export function signinSuccess(user) {
    return {
        type: SIGNIN_SUCCESS,
        user
    }
}
export function signinFail() {
    return {
        type: SIGNIN_FAIL        
    }
}
export function fetchPosts() {
    return {
        type: FETCH_POSTS
    }
}
export function fetchPostsSuccess(posts) {
    return {
        type: FETCH_POSTS_SUCCESS,
        posts
    }
}
export function fetchPostsFail() {
    return {
        type: FETCH_POSTS_FAIL
    }
}