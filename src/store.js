import {configureStore} from '@reduxjs/toolkit'


import { loginAccountReducer } from './behaviors/reducers/account'

import {
    registerUserReducer, 
    getUserTokenReducer,
    getUserByIdReducer
} from './behaviors/reducers/user'

import {
    addPostReducer
} from './behaviors/reducers/post'

const store = configureStore({
    reducer: {
        // account
        loginAccountReducer,

        //user
        registerUserReducer,
        getUserTokenReducer,
        getUserByIdReducer,

        // post
        addPostReducer
    }
})

export default store