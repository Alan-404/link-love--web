import React from 'react'
import { Spinner } from 'react-bootstrap'

const MySpinner = () => {
  return (
    <div className='myspinner'>
        <Spinner animation="grow" variant="warning" />
    </div>
  )
}

export default MySpinner