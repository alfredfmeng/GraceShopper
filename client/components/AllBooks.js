import React from 'react'
import SingleBook from './SingleBook'
import {connect} from 'react-redux'
import {fetchBooks} from '../store/books'

class AllBooks extends React.Component {
  constructor() {
    super()
    this.state = {
      filter: 'All',
      search: ''
    }
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.renderBook = this.renderBook.bind(this)
  }
  componentDidMount() {
    this.props.fetchBooks()
  }

  handleSelectChange(event) {
    this.setState({filter: event.target.value})
  }

  handleOnChange(event) {
    this.setState({search: event.target.value})
  }

  renderBook = book => {
    const {search} = this.state
    var title = book.title.toLowerCase()

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
    const {filter} = this.state

    // eslint-disable-next-line complexity
    // refactor to case-switch
    // eslint-disable-next-line complexity
    const books = this.props.books.filter(book => {
      if (filter === 'All') return book
      if (filter === 'Epic Fantasy') return book.genre === 'Epic Fantasy'
      if (filter === 'Horror') return book.genre === 'Horror'
      if (filter === 'Science Fiction') return book.genre === 'Science Fiction'
      if (filter === 'Historical Fiction')
        return book.genre === 'Historical Fiction'
      if (filter === 'Comic Books') return book.genre === 'Comic Books'
      if (filter === 'Biographies') return book.genre === 'Biographies'
      if (filter === 'Slice of Life') return book.genre === 'Slice of Life'
    })

    const {search} = this.state
    const filteredBooks = this.props.books.filter(book => {
      // this.setState({filter: ''})
      return book.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })

    return (
      <div>
        <div className="col">
          <span>Search Book</span>
          <input
            label="Search Book"
            icon="search"
            onChange={this.handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="genreFilter">Filter by genre: </label>
          <select
            onChange={this.handleSelectChange}
            value={filter}
            name="genreFilter"
          >
            <option>All</option>
            <option>Epic Fantasy</option>
            <option>Horror</option>
            <option>Science Fiction</option>
            <option>Slice of Life</option>
            <option>Historical Fiction</option>
            <option>Comic Books</option>
            <option>Biographies</option>
          </select>
        </div>
        {/* <div>
          {books.map((book) => {
            return (
              <SingleBook
                key={book.id}
                title={book.title}
                author={book.author}
                description={book.description}
                genre={book.genre}
                image={book.image}
              />
            )
          })}
        </div> */}
        <div className="row">
          {filteredBooks.map(book => {
            return this.renderBook(book)
          })}
        </div>
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
