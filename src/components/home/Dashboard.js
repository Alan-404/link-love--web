import React from 'react'
import { useEffect, useState } from 'react'
import {getUserTokenAction} from '../../behaviors/actions/user'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {Image, Button} from 'react-bootstrap'
import { apiUrlUser } from '../../common/constants'

import { getAllPostsAction } from '../../behaviors/actions/post'

import AddPost from './posts/AddPost'
import PostDetail from './posts/PostDetail'

const Dashboard = () => {

  const [info, setInfo] = useState({
    addForm: false
  })

  const dispatch = useDispatch()
  const getUserTokenReducer = useSelector(state=> state.getUserTokenReducer)
  const {user} = getUserTokenReducer

  const getAllPostsReducer = useSelector(state => state.getAllPostsReducer)
  const {posts} = getAllPostsReducer

  const navigate = useNavigate()


  const handleAddForm = () => {
    setInfo({
      ...info,
      addForm: !info.addForm
    })
  }

  useEffect(() => {
    if (!localStorage.getItem('linklove')){
      navigate('/login')
      return;
    }

    dispatch(getUserTokenAction())
    dispatch(getAllPostsAction())
  }, [])


  return (
    <div>
      <div>

      </div>
      <div>
        {user && (
          <div className='mb-3'>
            <Image src={`${apiUrlUser}?id=${user._id}&type=avatar`} style={{height: '50px', width: '50px', borderRadius: '50%'}} />
            &#160;&#160;&#160;
            <Button onClick={handleAddForm}>What do you mind, {user.name}</Button>
          </div>
        )}
        {posts && posts.posts.map((post, index) => (
          <div key={post._id} className="mb-3">
            <PostDetail post={post} user={posts.users[index]}/>
          </div>
        ))}
      </div>
      {(info.addForm && user) && <AddPost handleClick={handleAddForm} user = {user} />}
    </div>
  )
}

export default Dashboard