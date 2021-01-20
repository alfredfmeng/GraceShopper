import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleBook} from '../store/book'
import EditPrice from './EditPrice'

class SingleBookView extends React.Component {
  componentDidMount() {
    try {
      this.props.fetchSingleBook(this.props.match.params.id)
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    const {book, isAdmin} = this.props
    return (
      <div>
        {isAdmin ? (
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
                {/* {book.map((bookObj) => {
                  return <EditPrice key={bookObj.id} singleBook={bookObj}/>
                })} */}
                <EditPrice />
              </div>
            </div>
          </div>
        ) : (
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
              <button
                type="button"
                onClick={() => {
                  let cart = []
                  const storage = localStorage.getItem('cart')
                  if (storage) cart = JSON.parse(localStorage.getItem('cart'))
                  if (storage && storage.includes(`"id":${book.id}`)) {
                    console.log('Error - item already in cart!')
                  } else {
                    cart.push({id: book.id, qty: 1})
                    localStorage.setItem('cart', JSON.stringify(cart))
                  }
                }}
              >
                Add to cart
              </button>
            </div>
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
  fetchSingleBook: id => dispatch(fetchSingleBook(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(SingleBookView)
