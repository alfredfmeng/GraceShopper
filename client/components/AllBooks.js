import React from 'react'
import SingleBook from './SingleBook'
import axios from 'axios'

class AllBooks extends React.Component {
  constructor() {
    super()
    this.state = {
      books: []
    }
  }

  async componentDidMount() {
    // Placeholder code until backend is set up
    // try {
    //   const {data: books} = await axios.get('/api/books')
    //   this.setState({books})
    // } catch (err) {
    //   console.log(err)
    // }
  }

  render() {
    return (
      <div>
        {/* {this.state.books.map((book) => {
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
        })} */}
      </div>
    )
  }
}

export default AllBooks
