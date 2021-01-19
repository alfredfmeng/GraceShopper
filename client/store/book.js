import axios from 'axios'

// ACTION TYPE
const SET_SINGLE_BOOK = 'SET_SINGLE_BOOK'

// ACTION CREATOR
export const setSingleBook = book => {
  return {
    type: SET_SINGLE_BOOK,
    book
  }
}

// THUNK CREATOR
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
    case SET_SINGLE_BOOK:
      return action.book
    default:
      return state
  }
}
