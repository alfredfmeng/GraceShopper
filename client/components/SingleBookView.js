import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleBook} from '../store/books'

class SingleBookView extends React.Component {
  componentDidMount() {
    try {
      this.props.fetchSingleBook(this.props.match.params.id)
      // console.log(this.props.fetchSingleBook(this.props.match.params.id))
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    console.log('CONSOLELOG 1', this.props.book)
    // return <h1>hello world</h1>
    const {book} = this.props
    console.log('THIS.PROPS', this.props)
    console.log('THIS.PROPS.STATE', this.props.state)
    return (
      <div>
        <h1>{book.title}</h1>
        <div>
          <img src={book.image} alt={`Image of ${book.title}`} />
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  book: state.books
})
const mapDispatchToProps = dispatch => ({
  fetchSingleBook: id => dispatch(fetchSingleBook(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(SingleBookView)
