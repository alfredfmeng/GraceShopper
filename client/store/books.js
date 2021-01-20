import axios from 'axios'

// ACTION TYPE
const SET_BOOKS = 'SET_BOOKS'
const DELETE_BOOKS = 'DELETE_BOOKS'

// ACTION CREATOR
export const setBooks = books => ({
  type: SET_BOOKS,
  books
})

export const deleteBooks = deletedBook => ({
  type: DELETE_BOOKS,
  deletedBook
})

// THUNK CREATOR
export const fetchBooks = () => {
  return async dispatch => {
    try {
      const {data: books} = await axios.get('/api/books')
      dispatch(setBooks(books))
    } catch (err) {
      console.log(err)
    }
  }
}

export const destroyBooks = (bookId, history) => {
  return async dispatch => {
    try {
      await axios.delete(`/api/books/${bookId}`)
      dispatch(deleteBooks(bookId))
      dispatch(fetchBooks())
    } catch (error) {
      console.log(error)
    }
  }
}

// REDUCER
const initialState = []

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BOOKS:
      return action.books
    case DELETE_BOOKS:
      return state.filter(book => book.id !== action.deletedBook)
    default:
      return state
  }
}
