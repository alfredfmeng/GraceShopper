import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleBook} from '../store/book'
import EditPrice from './EditPrice'
import {AddSingleBook} from '../store/cart'
import {destroyBooks, fetchBooks} from '../store/books'

class SingleBookView extends React.Component {
  componentDidMount() {
    try {
      this.props.fetchSingleBook(this.props.match.params.id)
    } catch (err) {
      console.log(err)
    }
  }

  handleRemoveBook = async bookId => {
    await this.props.deleteBook(bookId)
    this.props.fetchBook()
  }

  render() {
    const {book, isAdmin} = this.props
    console.log('this is book', book)
    return (
      <div>
        {isAdmin ? (
          <div>
            <div className="singleBookView">
              <div className="bookImage">
                <img src={book.image} alt={`Image of ${book.title}`} />
              </div>
              <div className="bookInformation">
                <h1>{book.title}</h1>
                <h2>by {book.author}</h2>
                <div>
                  <h3>{book.description}</h3>
                </div>
                <div>{book.price}</div>
                <div>
                  <EditPrice id={book.id} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="singleBookView">
              <div className="bookImage">
                <img src={book.image} alt={`Image of ${book.title}`} />
              </div>
              <div className="bookInformation">
                <h1>{book.title}</h1>
                <h2>by {book.author}</h2>
                <div>
                  <h3>{book.description}</h3>
                </div>
                <div>${book.price}</div>
              </div>
            </div>
            <div>${book.price}</div>
            <form
              onSubmit={e => {
                e.preventDefault()
                let cart = []
                const storage = localStorage.getItem('cart')
                if (storage) cart = JSON.parse(localStorage.getItem('cart'))
                if (storage && storage.includes(`"id":${book.id}`)) {
                  console.log('Error - item already in cart!')
                } else {
                  this.props.AddSingleBook(
                    book.id,
                    document.getElementById('quantity').value
                  )
                  console.log(this.props)
                  cart.push({
                    id: book.id,
                    qty: document.getElementById('quantity').value
                  })
                  localStorage.setItem('cart', JSON.stringify(cart))
                }
              }}
            >
              <label>
                Quantity:
                <input type="number" id="quantity" min="1" defaultValue="1" />
              </label>
              <input type="submit" value="Add to cart" />
            </form>
          </div>
        )}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  book: state.book,
  isAdmin: state.user.admin
})
const mapDispatchToProps = dispatch => ({
  fetchSingleBook: id => dispatch(fetchSingleBook(id)),
  AddSingleBook: (id, qty) => dispatch(AddSingleBook(id, qty)),
  deleteBook: key => dispatch(destroyBooks(key)),
  fetchBook: () => dispatch(fetchBooks())
})
export default connect(mapStateToProps, mapDispatchToProps)(SingleBookView)
