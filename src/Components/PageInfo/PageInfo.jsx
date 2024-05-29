import React from 'react'
import '../PageInfo/PageInfo.css'

const PageInfo = (props) => {
  return (
    <div className='page-info' style={{background:`url(${props.image})`, backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',}}>
        <h2 className='page-name'>{props.name}</h2>
    </div>
  )
}

export default PageInfo