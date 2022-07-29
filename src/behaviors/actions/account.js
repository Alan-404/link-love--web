import {
    apiUrl,
    REQUEST_LOGIN_ACCOUNT,
    LOGIN_ACCOUNT_SUCCESS,
    LOGIN_ACCOUNT_FAIL
} from '../../common/constants'

import axios from 'axios'


export const loginAccountAction = (account) => async(dispatch) => {
    try{
        dispatch({
            type: REQUEST_LOGIN_ACCOUNT
        })

        const {data} = await axios.post(`${apiUrl}/account/auth`, account)
        

        if (data.success){
            localStorage.setItem('linklove', data.access_token)
            dispatch({
                type: LOGIN_ACCOUNT_SUCCESS
            })
        }
        else{
            dispatch({
                type: LOGIN_ACCOUNT_FAIL
            })
        }
    }
    catch(error){
        console.log(error)
        dispatch({
            type: LOGIN_ACCOUNT_FAIL
        })
    }
}