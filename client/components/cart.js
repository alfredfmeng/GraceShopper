import React from 'react'
import axios from 'axios'
import SingleBook from './SingleBook'
import {setCart} from '../store/cart'
import {connect, Link} from 'react-redux'

export class Cart extends React.Component {
  constructor() {
    super()
    this.state = {
      cart: [],
      books: []
    }
  }

  async componentDidMount() {
    try {
      this.state.cart = JSON.parse(localStorage.getItem('cart'))
      let res = {...this.state}
      for (let i = 0; i < this.state.cart.length; i++) {
        const response = await axios.get(`/api/books/${this.state.cart[i].id}`)
        res.books.push(response.data)
      }
      this.setState(res)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    // refactor to render table as opposed to divs later
    return (
      <div>
        <div>
          <h1>Your Cart</h1>
          {this.state.books.length === 0 ? (
            <h2>Your cart is empty!</h2>
          ) : (
            this.state.books.map(book => (
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
            ))
          )}
        </div>
        <div>
          <a href="/checkout">
            <button className="checkoutButton" type="button">
              Go To Checkout
            </button>
          </a>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCart: () => dispatch(setCart(books))
})

export default connect(null, mapDispatchToProps)(Cart)
