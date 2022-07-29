import React from 'react'
import {InputGroup, Form, Button} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginAccountAction } from '../../behaviors/actions/account'
import MySpinner from '../effects/MySpinner'
const Login = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const loginAccountReducer = useSelector(state => state.loginAccountReducer)
    const {successLoginAccount, loadingLoginAccount} = loginAccountReducer

    const [info, setInfo] = useState({
        submit: false
    })

    const [account, setAccount] = useState({
        email: '',
        password: ''
    })

    const getInfo = (event) => {
        setAccount({
            ...account,
            [event.target.name]: event.target.value
        })
    }

    const submitLogin = () => {
        setInfo({
            ...info,
            submit: true
        })
        dispatch(loginAccountAction(account))
    }

    useEffect(() => {
        if (successLoginAccount && info.submit){
            setInfo({
                ...info,
                submit: false
            })
            navigate('/home')
        }
    },[navigate, info, successLoginAccount])

    return (
        <div className='login-page d-flex'>
            <div className='login-bg' style={{width: '50%'}}>
                <h1 className='p-5 text-light'>Welcome Back!</h1>
            </div>
            &#160;&#160;&#160;&#160;
            <div style={{width: '50%', marginTop: '3rem'}}>
                <h1 className='text-center text-info'>Link Love</h1>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                    <Form.Control
                    placeholder="Username"
                    name='email'
                    onChange={getInfo}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                    <Form.Control
                    placeholder="Username"
                    name='password'
                    onChange={getInfo}
                    />
                </InputGroup>
                <Button className='login-btn' onClick={submitLogin} variant="primary">Login</Button>{' '}
            </div>
            {loadingLoginAccount && <MySpinner />}
        </div>
    )
}

export default Login