import { CLOSE_FORM, SHOW_FORM } from "../Constant/ActionType";

const initialState = {
    show: false
};

const FormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_FORM:
            return { ...state, show: true }
        case CLOSE_FORM:
            return { ...state, show: false };
        default:
            return state
    }
}

export default FormReducer;