import {
    apiUrl,
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

import axios from 'axios'


export const registerUserAction = (user) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_REGISTER_USER
        })

        const config = {
            headers:{
                'content-type': 'multipart/form-data'
            }
        }

        const {data} = await axios.post(`${apiUrl}/user/user_api`, user, config)

        console.log(data)

        if (data.success){
            dispatch({
                type: REGISTER_USER_SUCCESS
            })
        }
        else{
            dispatch({
                type: REGISTER_USER_FAIL,
                payload: data.message
            })
        }
    }
    catch(error){
        console.log(error)
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error
        })
    }
}


export const getUserTokenAction = () => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_GET_USER_TOKEN
        })

        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('linklove')}`
            }
        }

        const {data} = await axios.get(`${apiUrl}/user/auth`, config)

        if (data.user){
            dispatch({
                type: GET_USER_TOKEN_SUCCESS,
                payload: data.user
            })
        }
        else{
            dispatch({
                type: GET_USER_TOKEN_FAIL,
                payload: data.message
            })
        }
    }
    catch(error){
        console.log(error)
        dispatch({
            type: GET_USER_TOKEN_FAIL,
            payload: error
        })
    }
}

export const getUserByIdAction = () => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_GET_USER_BY_ID
        })

        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('linklove')}`
            }
        }

        const {data} = await axios.get(`${apiUrl}/user/auth`, config)
        console.log(data)
        if (data.user){
            dispatch({
                type: GET_USER_BY_ID_SUCCESS,
                payload: data.user
            })
        }
        else{
            dispatch({
                type: GET_USER_BY_ID_FAIL,
                payload: data.message
            })
        }
    }
    catch(error){
        console.log(error)
        dispatch({
            type: GET_USER_BY_ID_FAIL,
            payload: error
        })
    }
}