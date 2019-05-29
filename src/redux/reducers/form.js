import * as actionTypes from "../actions/actionTypes";

const initialState = {
    email: '',
    password: '',
    isVaild: true
}

const reducer = (state = initialState, action) => {
    console.log('form form reducer')
    switch (action.type) {

        case actionTypes.FORM_CHANGE:
            return {
                ...state,

            };

        default:
            return state;
    }
};

export default reducer;