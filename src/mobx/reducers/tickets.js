import * as actionTypes from "../actions/actionTypes";

const initialState = {
    tickets: [],
    err: null,
    isLoading: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.GET_TICKETS_INIT:
            return {
                ...state,
                isLoading: true
            };

        case actionTypes.GET_TICKETS_SUCCESS:
            return {
                ...state,
                tickets: action.tickets,
                isLoading: false
            };

        case actionTypes.GET_TICKETS_FAIL:
            return {
                ...state,
                err: action.err,
                isLoading: false
            };

        case actionTypes.ERR_CONFIRM:
            return {
                ...state,
                err: null
            };

        default:
            return state;
    }
};

export default reducer;