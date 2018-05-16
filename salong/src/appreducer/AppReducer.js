import {
    LOG_IN, LOG_OUT
} from "../constants/Constants";

const initialState = {
    loggedIn: false,
    email: ""
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                loggedIn: true,
                email: action.data.user
            };
        case LOG_OUT:
            return {
                ...state,
                loggedIn: false,
                email: ""
            };
        default:
            return state;
    }
};

export default AppReducer;