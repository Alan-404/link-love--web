import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserTokenAction } from '../../behaviors/actions/user'
import { apiUrlUser } from '../../common/constants'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Image, Button} from 'react-bootstrap'
import HeaderOptions from '../../components/effects/HeaderOptions'

const Header = () => {

  const dispatch = useDispatch()
  const getUserTokenReducer = useSelector(state => state.getUserTokenReducer)
  const {user} = getUserTokenReducer

  const navigate = useNavigate()

  const [info, setInfo] = useState({
    headerOptions: false
  })


  const handleHeaderOptions = () => {
    setInfo({
      ...info,
      headerOptions: !info.headerOptions
    })
  }

  const goProfilePage = (id) => {
    navigate({
      pathname: '/profile',
      search: `?id=${id}`
    })
  }

  const goDashboard = () => {
    navigate('/dashboard')
  }

  useEffect(() => {
    dispatch(getUserTokenAction())
  }, [dispatch])

  return (
    <div className='p-2 bg-info'>
        <div className='d-flex justify-content-between'>
          <h2 onClick={goDashboard} className='mt-1' style={{color: 'yellow', cursor:'pointer'}}>Link Love</h2>
          {user && (
            <div className='d-flex'>
              <div onClick={() => goProfilePage(user._id)} className='d-flex header-btn-profile'>
                <Image src={`${apiUrlUser}?id=${user._id}&type=avatar`} className='image-header'/>
                &#160;&#160;
                <h3 className='mt-2 text-light'>{user.name}</h3>
              </div>
              &#160;&#160;&#160;&#160;
              <div className='mt-2'>
                <Button onClick={handleHeaderOptions} className='header-btn' style={{borderRadius: '50%', flex: '50'}}><i className="fa-solid fa-arrow-down"></i></Button>
              </div>
            </div>
          )}
        </div>
        {(info.headerOptions && user) && <HeaderOptions handleClick={handleHeaderOptions} goProfilePage={() => goProfilePage(user._id)} name={user.name} avatarUser={`${apiUrlUser}?id=${user._id}&type=avatar`} />}
    </div>
  )
}

export default Header