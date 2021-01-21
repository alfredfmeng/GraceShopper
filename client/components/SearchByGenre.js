import React from 'react'
import SingleBook from './SingleBook'
import {connect} from 'react-redux'
import {fetchBooks} from '../store/books'

class SearchByGenre extends React.Component {
  constructor() {
    super()
    this.state = {
      filter: 'All'
    }
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  componentDidMount() {
    this.props.fetchBooks()
  }

  handleSelectChange(event) {
    this.setState({filter: event.target.value})
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

    return (
      <div>
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
        <div className="allBooks">
          {books.map(book => {
            return (
              <div className="singleBook" key={book.id}>
                <div>
                  <SingleBook
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    description={book.description}
                    genre={book.genre}
                    image={book.image}
                    price={book.price}
                  />
                </div>

                <button className="checkoutButton" type="button">
                  Add To Cart
                </button>
              </div>
            )
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchByGenre)
