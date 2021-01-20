import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleBook} from '../store/book'

class SingleBookView extends React.Component {
  componentDidMount() {
    try {
      this.props.fetchSingleBook(this.props.match.params.id)
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    const {book} = this.props
    return (
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
          <form
            onSubmit={() => {
              let cart = []
              const storage = localStorage.getItem('cart')
              if (storage) cart = JSON.parse(localStorage.getItem('cart'))
              if (storage && storage.includes(`"id":${book.id}`)) {
                console.log('Error - item already in cart!')
              } else {
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
      </div>
    )
  }
}
const mapStateToProps = state => ({
  book: state.book
})
const mapDispatchToProps = dispatch => ({
  fetchSingleBook: id => dispatch(fetchSingleBook(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(SingleBookView)
