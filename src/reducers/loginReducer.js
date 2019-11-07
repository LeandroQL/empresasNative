import { loginActions } from '../actions/login'
const initialState = {
    userLogin: null,
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginActions.USER_LOGIN:
            return { ...state, userLogin: action.payload };
            break;
        default:
            return state;
    }
};
