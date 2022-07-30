import {
    REQUEST_ADD_POST,
    ADD_POST_FAIL,
    ADD_POST_SUCCESS,
    REQUEST_GET_ALL_POSTS,
    GET_ALL_POSTS_SUCCESS,
    GET_ALL_POSTS_FAIL
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

export const getAllPostsReducer = (state={}, action) => {
    switch(action.type){
        case REQUEST_GET_ALL_POSTS:
            return {loadingGetAllPosts: true}
        case GET_ALL_POSTS_SUCCESS:
            return {loadingGetAllPosts: false, posts: action.payload}
        case GET_ALL_POSTS_FAIL:
            return {loadingGetAllPosts: false, message: action.payload}
        default:
            return state
    }
}