import {
    LOG_IN, LOG_OUT, SELECTED_BOOKING
} from "../constants/Constants";

const initialState = {
    loggedIn: false,
    email: "",
    selectedCheckboxes: new Set()
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                loggedIn: true,
                email: action.data.email
            };
        case LOG_OUT:
            return {
                ...state,
                loggedIn: false,
                email: ""
            };
        case SELECTED_BOOKING:
            return {
                ...state,
                selectedCheckboxes: action.data.selectedCheckboxes
            };
        default:
            return state;
    }
};

export default AppReducer;