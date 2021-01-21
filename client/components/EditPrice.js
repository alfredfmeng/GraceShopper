import React from 'react'
import {connect} from 'react-redux'
import {updateBookPrice} from '../store/book'

class EditPrice extends React.Component {
  constructor() {
    super()
    this.state = {
      price: ''
    }
  }

  componentDidMount() {
    this.setState({
      price: this.props.book
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const book = this.props.book
    book.price = this.state.price
    this.props.updateBookPrice(book)
  }

  render() {
    const {price} = this.state
    console.log('this.props', this.props)
    return (
      <form id="edit-price" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter Amount"
          name="price"
          onChange={this.handleChange}
          value={price}
        />
        <button type="submit">Change Price</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    book: state.book
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateBookPrice: book => dispatch(updateBookPrice(book))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPrice)
