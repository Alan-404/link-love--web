import React from 'react'
import { ListGroup, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const HeaderOptions = ({handleClick, avatarUser, name, goProfilePage}) => {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('linklove')
        navigate('/login')
    }
    return (
        <div>
            <div onClick={handleClick} className='dark-overlay'>

            </div>
            <div className='options-form bg-light' style={{borderRadius:'10px'}}>
            <ListGroup>
                <ListGroup.Item action onClick={() => {goProfilePage(); handleClick();}} className='d-flex'>
                    <Image src={avatarUser} style={{height: '30px', width: '30px', borderRadius: '50%'}}/>
                    &#160;&#160;&#160;&#160;
                    <h4>{name}</h4>
                </ListGroup.Item>
                <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item className='text-danger' action onClick={logout}>Log Out</ListGroup.Item>
            </ListGroup>
            </div>
        </div>
  )
}

export default HeaderOptions