import React from 'react'
import {connect} from 'react-redux'
import {Link, Redirect, useHistory} from 'react-router-dom'

class SingleBook extends React.Component {
  // handleClick = (bookId) => {
  //   this.props.history.push(`/books/${bookId}`)
  // }

  render() {
    const {isAdmin} = this.props
    return (
      <div>
        {isAdmin ? (
          <div>
            <img src={this.props.image} />
            <h1>{this.props.title}</h1>
            <h2>{this.props.author}</h2>
            <h2>{this.props.price}</h2>
            <button type="button">Delete</button>
            <button type="button">Edit Price</button>
          </div>
        ) : (
          <div>
            <Link to={`/books/${this.props.id}`}>
              <img src={this.props.image} />
            </Link>
            <h1>{this.props.title}</h1>
            <h2>{this.props.author}</h2>
            <h2>{this.props.price}</h2>
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

export default connect(mapStateToProps, null)(SingleBook)
