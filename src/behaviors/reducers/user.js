import {
    REQUEST_REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    REQUEST_GET_USER_TOKEN,
    GET_USER_TOKEN_SUCCESS,
    GET_USER_TOKEN_FAIL,
    REQUEST_GET_USER_BY_ID,
    GET_USER_BY_ID_SUCCESS,
    GET_USER_BY_ID_FAIL
} from '../../common/constants'


export const registerUserReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_REGISTER_USER:
            return {loadingRegisterUser: true}
        case REGISTER_USER_SUCCESS:
            return {loadingRegisterUser: false, success: true}
        case REGISTER_USER_FAIL:
            return {loadingRegisterUser: false, success: false, message: action.payload}
        default:
            return state
    }
}

export const getUserTokenReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_GET_USER_TOKEN:
            return {loadingGetUserToken: true}
        case GET_USER_TOKEN_SUCCESS:
            return {loadingGetUserToken: false, user: action.payload}
        case GET_USER_TOKEN_FAIL:
            return {loadingGetUserToken: false, message: action.payload}
        default:
            return state
    }
}

export const getUserByIdReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_GET_USER_BY_ID:
            return {loadingGetUserById: true}
        case GET_USER_BY_ID_SUCCESS:
            return {loadingGetUserById: false, user: action.payload}
        case GET_USER_BY_ID_FAIL:
            return {loadingGetUserById: false, message: action.payload}
        default:
            return state
    }
}