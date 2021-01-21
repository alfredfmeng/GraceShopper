import React from 'react'
import {connect} from 'react-redux'
import {updateBookPrice} from '../store/book'

class EditPrice extends React.Component {
  constructor() {
    super()
    this.state = {
      price: 0
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
    this.props.updateBookPrice(this.props.book, {...this.state})
  }

  render() {
    const {price} = this.state
    console.log('this.props', this.props)
    return (
      <form id="edit-price" onSubmit={this.handleSubmit}>
        <input name="price" onChange={this.handleChange} value={price} />
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
    updatePrice: book => dispatch(updateBookPrice(book))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPrice)
