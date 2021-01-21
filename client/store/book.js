import axios from 'axios'

// ACTION TYPE
const SET_SINGLE_BOOK = 'SET_SINGLE_BOOK'
const UPDATE_BOOK_PRICE = 'UPDATE_BOOK_PRICE'

// ACTION CREATOR
export const setSingleBook = book => {
  return {
    type: SET_SINGLE_BOOK,
    book
  }
}

export const updateBook = updatedBook => {
  return {
    type: UPDATE_BOOK_PRICE,
    updatedBook
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

export const updateBookPrice = book => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/books/${book.id}`, book)
      dispatch(updateBook(data))
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
    case UPDATE_BOOK_PRICE:
      return action.updatedBook
    default:
      return state
  }
}
