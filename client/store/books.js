import axios from 'axios'

// ACTION TYPE
const SET_BOOKS = 'SET_BOOKS'

// ACTION CREATOR
export const setBooks = books => ({
  type: SET_BOOKS,
  books
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

// REDUCER
const initialState = []

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BOOKS:
      return action.books
    default:
      return state
  }
}
