import React from 'react'
import SingleBook from './SingleBook'
import {connect} from 'react-redux'
import {fetchBooks} from '../store/books'

class AllBooks extends React.Component {
  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    return (
      <div>
        {this.props.books.map(book => {
          return (
            <SingleBook
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              description={book.description}
              genre={book.genre}
              image={book.image}
            />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBooks: () => dispatch(fetchBooks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBooks)
