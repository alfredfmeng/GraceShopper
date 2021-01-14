import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleBook} from '../store/books'

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
    console.log(book)
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
