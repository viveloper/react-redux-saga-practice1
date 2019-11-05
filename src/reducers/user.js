import { SIGNIN_SUCCESS, SIGNIN_FAIL } from "../constants";

const initialState = localStorage.getItem('sagaUser');

function user(previousState = initialState, action) {
    if (action.type === SIGNIN_SUCCESS) {
        localStorage.setItem('sagaUser', JSON.stringify(action.user));
        return { ...action.user };
    }
    else if (action.type === SIGNIN_FAIL) {
        return null;
    }
    else {
        return previousState;
    }
}

export default user;