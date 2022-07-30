import {
    apiUrl,
    REQUEST_ADD_POST,
    ADD_POST_FAIL,
    ADD_POST_SUCCESS,
    REQUEST_GET_ALL_POSTS,
    GET_ALL_POSTS_SUCCESS,
    GET_ALL_POSTS_FAIL
} from '../../common/constants'

import axios from 'axios'


export const addPostAction = (post) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_ADD_POST
        })

        const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Authorization": `Bearer ${localStorage.getItem('linklove')}`
            }
        }

        const {data} = await axios.post(`${apiUrl}/post/post_api`, post, config)
        console.log(data)
        if (data.success){
            dispatch({
                type: ADD_POST_SUCCESS
            })
        }
        else{
            dispatch({
                type: ADD_POST_FAIL,
                payload: data.message
            })
        }
    }
    catch(error){
        console.log(error)
        dispatch({
            type: ADD_POST_FAIL,
            payload: error
        })
    }
}

export const getAllPostsAction = (post) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_GET_ALL_POSTS
        })

        /* const config = {
            headers: {
                'Content-type': 'multipart/form-data',
                "Authorization": `Bearer ${localStorage.getItem('linklove')}`
            }
        } */

        const {data} = await axios.get(`${apiUrl}/post/post_api`)
        console.log(data)
        if (data.posts){
            dispatch({
                type: GET_ALL_POSTS_SUCCESS,
                payload: data
            })
        }
        else{
            dispatch({
                type: GET_ALL_POSTS_FAIL,
                payload: data.message
            })
        }
    }
    catch(error){
        console.log(error)
        dispatch({
            type: GET_ALL_POSTS_FAIL,
            payload: error
        })
    }
}