import {
    REQUEST_ADD_POST,
    ADD_POST_FAIL,
    ADD_POST_SUCCESS
} from '../../common/constants'


export const addPostReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_ADD_POST:
            return {loadingAddPost: true}
        case ADD_POST_SUCCESS:
            return {loadingAddPost: false, successAddPost: true}
        case ADD_POST_FAIL:
            return {loadingAddPost: false, successAddPost: false, message: action.payload}
        default:
            return state
    }
}