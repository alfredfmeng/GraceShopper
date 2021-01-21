import React from 'react'
import {connect} from 'react-redux'
import {Link, Redirect, useHistory} from 'react-router-dom'
import {destroyBooks, fetchBooks} from '../store/books'

class SingleBook extends React.Component {
  // handleClick = (bookId) => {
  //   this.props.history.push(`/books/${bookId}`)
  // }

  handleRemoveBook = async bookId => {
    await this.props.deleteBook(bookId)
    this.props.fetchBook()
  }

  render() {
    const {isAdmin} = this.props
    return (
      <div>
        {isAdmin ? (
          <div>
            <Link to={`/books/${this.props.id}`}>
              <img className="bookImage" src={this.props.image} />
            </Link>
            <h1>{this.props.title}</h1>
            <h2>{this.props.author}</h2>
            <h2>${this.props.price}</h2>

            <button
              className="adminDeleteButtons"
              type="button"
              onClick={() => {
                this.handleRemoveBook(this.props.id)
              }}
            >
              Delete
            </button>
          </div>
        ) : (
          <div>
            <Link to={`/books/${this.props.id}`}>
              <img className="bookImage" src={this.props.image} />
            </Link>
            <h1>{this.props.title}</h1>
            <h2>{this.props.author}</h2>
            <h2>${this.props.price}</h2>
            <button type="button">Add To Cart</button>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    isAdmin: state.user.admin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteBook: key => {
      dispatch(destroyBooks(key))
    },
    fetchBook: () => dispatch(fetchBooks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBook)
