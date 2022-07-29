import {
    REQUEST_LOGIN_ACCOUNT,
    LOGIN_ACCOUNT_SUCCESS,
    LOGIN_ACCOUNT_FAIL
} from '../../common/constants'


export const loginAccountReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_LOGIN_ACCOUNT:
            return {loadingLoginAccount: true}
        case LOGIN_ACCOUNT_SUCCESS:
            return {loadingLoginAccount: false, successLoginAccount: true}
        case LOGIN_ACCOUNT_FAIL:
            return {loadingLoginAccount: false, successLoginAccount: false}
        default:
            return state
    }
}