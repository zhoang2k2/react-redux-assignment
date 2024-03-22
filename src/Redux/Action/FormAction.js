import { CLOSE_FORM, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, SHOW_FORM } from "../Constant/ActionType"

export const showFormAction = () => {
    return { type: SHOW_FORM }
}

export const closeFormAction = () => {
    return { type: CLOSE_FORM }
}

export const fetchDataRequest = () => {
    return { type: FETCH_DATA_REQUEST }
}

export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}

export const fetchDataFailure = (err) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: err
    }
}