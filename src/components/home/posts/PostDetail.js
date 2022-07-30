import React from 'react'
import {Image} from 'react-bootstrap'
import { apiUrlUser } from '../../../common/constants'
import { useState } from 'react'

const PostDetail = ({post, user}) => {

  const [info, setInfo] = useState({
    index: 0
  })

  const convertNumToArr = (num) => {
    var arr = []
    for (var i = 0; i<num; i++){
      arr.push(i)
    }
    console.log(arr)
    return arr
  }


  return (
    <div className='post-form'>
      <div className='d-flex mb-3 pt-2 px-3'>
        <Image src={`${apiUrlUser}?id=${post.user_id}&type=avatar`} style={{height: '30px', width: '5%', borderRadius:'50%'}}/>
        &#160;&#160;&#160;&#160;
        <div>
          <h6>{user}</h6>
        </div>
      </div>
      <hr />
      <div>
        <pre className='content-form px-3'>{post.content}</pre>
        <Image src={`http://localhost:8000/post/media?id=${post._id}&index=${info.index}`} style={{height: '450px', width: '100%'}}/>
        {/* {convertNumToArr(post.num_media).map((item) => (
          <Image src={`http://localhost:8000/post/media?id=${post._id}&index=${item}`} style={{height: '20px', width: '20px'}}/>
        ))} */}
      </div>
      <hr />
    </div>
  )
}

export default PostDetail