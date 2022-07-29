import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getUserByIdAction } from '../../behaviors/actions/user'
import { useSearchParams } from "react-router-dom";
import {Image} from 'react-bootstrap'
import { apiUrlUser } from '../../common/constants';

const Profile = () => {
  const dispatch = useDispatch()
  const getUserByIdReducer = useSelector(state => state.getUserByIdReducer)
  const {user} = getUserByIdReducer

  const [searchParams] = useSearchParams()

  useEffect(() => {
    const id = searchParams.get('id')
    dispatch(getUserByIdAction(id))
  }, [dispatch])


  return (
    <div className='p-5'>
      {user && (
        <div>
          <Image className='form-image' style={{borderRadius:'50%'}} src={`${apiUrlUser}?id=${user._id}&type=avatar`}/>
        </div>
      )}
    </div>
  )
}

export default Profile