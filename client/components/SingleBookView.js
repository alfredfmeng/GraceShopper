import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleBook} from '../store/books'

class SingleBookView extends React.Component {
  componentDidMount() {
    this.props.fetchSingleBook(this.props.match.params.id)
  }
  render() {
    //const {book} = this.props
    console.log(this.props)
    return <h1>Hello</h1>
    // return (
    //   <div>
    //     <h1>{book.title}</h1>
    //     <div>
    //       <img src={book.imagine} alt={`Image of ${book.title}`} />
    //     </div>
    //   </div>
    // )
  }
}
const mapStateToProps = state => ({
  book: state.book
})
const mapDispatchToProps = dispatch => ({
  fetchSingleBook: id => dispatch(fetchSingleBook(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(SingleBookView)
