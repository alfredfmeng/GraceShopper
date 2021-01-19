import React from 'react'
import {connect} from 'react-redux'
import {createBook} from '../store/createBook'

class Admin extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      author: '',
      description: '',
      genre: '',
      price: 0
      // image: '',
    }
  }

  handleChange = event => {
    this.setState({...this.state, [event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createBook({...this.state})
    this.setState({
      title: '',
      author: '',
      description: '',
      genre: '',
      price: 0
      // image: '',
    })
  }

  render() {
    const {title, author, description, genre, price, image} = this.state
    const {handleSubmit, handleChange} = this

    return (
      <div>
        <div>
          <h2>Create a Book</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input name="title" onChange={handleChange} value={title} />
          <label>Author:</label>
          <input name="author" onChange={handleChange} value={author} />
          <label>Description:</label>
          <input
            name="description"
            onChange={handleChange}
            value={description}
          />
          <label>Genre:</label>
          <input name="genre" onChange={handleChange} value={genre} />
          <label>Price:</label>
          <input name="price" onChange={handleChange} value={price} />
          {/* <label>Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            value={image}
          />
          {console.log(this.state)} */}
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    createBook: book => dispatch(createBook(book))
  }
}

export default connect(null, mapDispatch)(Admin)
