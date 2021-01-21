import React from 'react'
import axios from 'axios'

export class Checkout extends React.Component {
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

  handleClick = () => {
    localStorage.clear()
    alert('Order has been placed!')
    this.props.history.push('/home')
  }

  render() {
    console.log('STATE', this.state)
    let total = 0

    if (this.state.books.length === 0) {
      return <h2>Your cart is empty!</h2>
    }

    return (
      <>
        <div className="checkout">
          <div>
            <h1>Shipping Address</h1>
            <h4>Address</h4>
            <input placeholder="Street Address or P.O. Box" />
            <input placeholder="Apt, suite, unit, ect" />
            <h4>City</h4>
            <input />
            <h4>State</h4>
            <input />
            <h4>Zip Code</h4>
            <input />
            <div>
              <button type="button">Save Address</button>
            </div>
          </div>

          <div>
            <h1>Checkout</h1>
            {this.state.books.map(book => {
              total += book.price
              return (
                <div key={book.id}>
                  <h3>
                    {book.title} by {book.author}
                  </h3>
                  <h3>${book.price}</h3>
                </div>
              )
            })}
          </div>
        </div>
        <div className="total">
          <h1>Total: ${Math.round((total + total * 0.0625) * 100) / 100}</h1>
          <button type="button" onClick={this.handleClick}>
            Place Order
          </button>
        </div>
      </>
    )
  }
}
