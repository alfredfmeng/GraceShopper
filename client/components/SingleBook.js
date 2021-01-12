import React from 'react'

const SingleBook = props => {
  return (
    <div>
      <img src={props.image} />
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
      <h2>{props.price}</h2>
    </div>
  )
}

export default SingleBook
