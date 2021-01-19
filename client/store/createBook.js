import axios from 'axios'

// ACTION TYPE
const CREATE_BOOK = 'CREATE_BOOK'

// ACTION CREATOR
export const _createBook = book => {
  return {
    type: CREATE_BOOK,
    book
  }
}

// THUNK CREATOR
export const createBook = book => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/books', book)
      dispatch(_createBook(data))
    } catch (error) {
      console.log(error)
    }
  }
}

// REDUCER
const initialState = []

export default function createBookReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_BOOK:
      return action.book
    default:
      return state
  }
}
