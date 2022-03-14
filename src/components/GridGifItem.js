import React from 'react'

export const GridGifItem = (props) => {
    console.log(props.img)
    return (
    <div className='card'>
        <img src={props.img.url} alt={props.img.title} />
        <p>{props.img.title}</p>
    </div>
  )
}
