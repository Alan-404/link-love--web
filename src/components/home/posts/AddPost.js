import React from 'react'
import { apiUrlUser } from '../../../common/constants'
import { Image, Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { addPostAction } from '../../../behaviors/actions/post'
import {useDispatch} from 'react-redux'

const AddPost = ({user, handleClick}) => {

  const dispatch = useDispatch()

  const [info, setInfo] = useState({
    arrImagesShow: [],
    typeMedia: []
  })

  const [post, setPost] = useState({
    content: '',
    mode: 'public',
    media: []
  })

  const getInfo = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value
    })
  }

  const getImage = (event) => {
    const file = event.target.files[0]
    var temp = post.media
    var type = info.typeMedia
    temp.push(file)

    setPost({
      ...post,
      media: temp
    })

    const reader = new FileReader()
    reader.readAsDataURL(file)
    temp = info.arrImagesShow
    reader.onload = (__event) => {
      temp.push(reader.result)
      type.push(file.type.split('/')[0])
      setInfo({
        ...info,
        arrImagesShow: temp,
        typeMedia: type
      })
    }
  }
  
  const savePost = () => {
    console.log(post)
    dispatch(addPostAction(post))
  }

  return (
    <div>
      {user && (
        <div>
          <div onClick={handleClick} className='dark-overlay'>

          </div>
          <div className='add-post-form'>
              <div className='d-flex justify-content-between'>
                <h3 className='text-light text-center'>Create Post</h3>
                <i onClick={handleClick} className="fa fa-window-close text-danger" style={{fontSize: '30px', cursor:'pointer'}}></i>
              </div>
              <hr />
              <div className='d-flex mb-3'>
                <Image style={{width: '35px', height: '35px', borderRadius: '50%'}} src={`${apiUrlUser}?id=${user._id}&type=avatar`}/>
                &#160;&#160;&#160;&#160;
                <h5 className='text-light'>{user.name}</h5>
              </div>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control onChange={getInfo} name='content' style={{color: "#000000"}} as="textarea" rows={4} placeholder={`What do you mind, ${user.name}`} />
                </Form.Group>
              </Form>
              <div className='mb-3'>
                <div>
                  <label htmlFor="upload-photo"><i className="fas fa-image h3 text-light"></i></label>
                  <input onChange={getImage} type="file" name="photo" id="upload-photo" accept='*.png*.jpg' />
                </div>
                <div className='d-flex flex-row flex-wrap'>
                  {(info.arrImagesShow) && info.arrImagesShow.map((item, index) => (
                    <div key={index}>
                      {info.typeMedia[index] === 'video' && <iframe src={item} style={{height: '150px', width: '150px'}}>Video Upload</iframe>}
                      {info.typeMedia[index] === 'image' && <Image src={item} style={{height: '150px', width: '150px'}}/>}
                      &#160;&#160;&#160;&#160;
                    </div>
                  ))}
                </div>
              </div>
              <Button onClick={savePost} className='bg-success'>Save Post</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddPost