import React from 'react'
import SingleBook from './SingleBook'
import {connect} from 'react-redux'
import {fetchBooks} from '../store/books'
import SearchByGenre from './SearchByGenre'

class SearchByTitle extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.renderBook = this.renderBook.bind(this)
  }

  componentDidMount() {
    this.props.fetchBooks()
  }

  handleOnChange(event) {
    this.setState({search: event.target.value})
  }

  renderBook = book => {
    const {search} = this.state
    // var title = book.title.toLowerCase()

    if (
      search !== '' &&
      book.title.toLowerCase().indexOf(search.toLowerCase()) === -1
    ) {
      return null
    }

    return (
      <div className="col-md-3" style={{marginTop: '20px'}}>
        <SingleBook
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
          genre={book.genre}
          image={book.image}
        />
      </div>
    )
  }

  render() {
    const {search} = this.state
    const filteredBooks = this.props.books.filter(book => {
      // this.setState({filter: ''})
      return book.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })

    return (
      <div>
        {this.state.search === '' ? (
          <div>
            <div className="col">
              <span>Search Book</span>
              <input label="Search Book" onChange={this.handleOnChange} />
            </div>
            <SearchByGenre />
          </div>
        ) : (
          <div>
            <div className="col">
              <span>Search Book</span>
              <input label="Search Book" onChange={this.handleOnChange} />
            </div>
            <div className="row">
              {filteredBooks.map(book => {
                return this.renderBook(book)
              })}
            </div>
          </div>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchByTitle)
