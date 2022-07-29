import React, { useState, useEffect } from 'react'
import { InputGroup, Form, Button, Image } from 'react-bootstrap'
import { apiUrlUser } from '../../common/constants'
import { registerUserAction } from '../../behaviors/actions/user'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
const Register = () => {

    const dispatch = useDispatch()
    const registerUserReducer = useSelector(state => state.registerUserReducer)
    const {success} = registerUserReducer

    const navigate = useNavigate()

    const [info, setInfo] = useState({
        imageShow: `${apiUrlUser}?type=default`,
        submit: false
    })

    const [user, setUser] = useState({
        name: '',
        email: '',
        gender: '',
        password: '',
        address: '',
        b_date: '',
        phone: '',
        role: false,
        avatar: ''
    })

    const getInfo = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const getImage = (event) => {
        const file = event.target.files[0]

        setUser({
            ...user,
            avatar: file
        })
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = (_event) => {
            setInfo({
                ...info,
                imageShow: reader.result
            })
        }
        
    }

    const submitRegister = () => {
        dispatch(registerUserAction(user))
    }

    

    return (
        <div className='register-form p-4 w-50'>
            <h1 className='text-warning'>Register User</h1>
            <hr />
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                    <Form.Control
                    placeholder="Username"
                    name='name'
                    onChange={getInfo}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                    <Form.Control
                    placeholder="Username"
                    name='email'
                    onChange={getInfo}
                        />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Address</InputGroup.Text>
                    <Form.Control
                    placeholder="Username"
                    name='address'
                    onChange={getInfo}
                    />
                    </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
                    <Form.Control
                    placeholder="Username"
                    name='phone'
                    onChange={getInfo}
                    />
                </InputGroup>
                <div className='d-flex'>
                    <Form.Select name='gender' className='h-25 mb-3' onChange={getInfo} >
                        <option>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other...</option>
                    </Form.Select>
                    &#160;
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Birth Date</InputGroup.Text>
                        <Form.Control
                        type='date'
                        placeholder="Username"
                        name='b_date'
                        onChange={getInfo}
                        />
                    </InputGroup>
                </div>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Passoword</InputGroup.Text>
                    <Form.Control
                    placeholder="Username"
                    name='password'
                    onChange={getInfo}
                    type='password'
                    />
                </InputGroup>
                <div className='mb-3 d-flex flex-column'>
                    <div>
                        <label htmlFor="upload-photo"><i className="fas fa-image h3 text-info"></i></label>
                        <input onChange={getImage} type="file" name="photo" id="upload-photo" accept='*.png*.jpg' />
                    </div>
                    <Image className='form-image' src={info.imageShow}/>
                </div>
                <Button onClick={submitRegister} variant="success">Register</Button>{' '}
            </div>
        </div>
    )
}

export default Register