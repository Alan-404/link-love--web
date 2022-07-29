import {
    apiUrl,
    REQUEST_ADD_POST,
    ADD_POST_FAIL,
    ADD_POST_SUCCESS
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