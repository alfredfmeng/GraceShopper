import axios from 'axios'

// ACTION TYPE
const SET_BOOKS = 'SET_BOOKS'
const SET_SINGLE_BOOK = 'SET_SINGLE_BOOK'

// ACTION CREATOR
export const setBooks = books => ({
  type: SET_BOOKS,
  books
})

export const setSingleBook = book => {
  return {
    type: SET_SINGLE_BOOK,
    book
  }
}

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

export const fetchSingleBook = id => {
  return async dispatch => {
    try {
      const {data: book} = await axios.get(`/api/books/${id}`)
      dispatch(setSingleBook(book))
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
    case SET_SINGLE_BOOK:
      return action.book
    default:
      return state
  }
}
