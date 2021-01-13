import React from "react";
import axios from "axios";
import SingleBook from "./SingleBook";

export class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      books: []
    };
  }

  async componentDidMount() {
    try {
      let res = { ...this.state };
      for (let i = 0; i < this.state.cart.length; i++) {
        const response = await axios.get(`/api/books/${this.state.cart[i].id}`);
        res.books.push(response.data);
      }
      this.setState(res);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    // refactor to render table as opposed to divs later
    return (
      <div>
        <h1>Your Cart</h1>
        {this.state.books.length === 0 ? (
          <h2>Your cart is empty!</h2>
        ) : (
          this.state.books.map(book => (
            <SingleBook
              key={book.id}
              title={book.title}
              author={book.author}
              description={book.description}
              genre={book.genre}
              image={book.image}
            />
          ))
        )}
      </div>
    );
  }
}
