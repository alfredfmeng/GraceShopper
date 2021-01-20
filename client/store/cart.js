import axios from 'axios'

/**
 * ACTION TYPES
 */
const ADD_BOOK = 'ADD_BOOK'
const SET_CART = 'SET_CART'
const MODIFY_CART = 'MODIFY_CART'
const RETRIEVE_BOOK = 'RETRIEVE_BOOK'
/**
 * INITIAL STATE
 */
const initialState = []
/**
 * ACTION CREATORS
 */
export const retrieveItem = book => {
  return {
    type: RETRIEVE_BOOK,
    book
  }
}

export const addBook = book => {
  return {
    type: ADD_BOOK,
    book
  }
}

export const setCart = books => {
  return {
    type: SET_CART,
    books
  }
}

/**
 * THUNK CREATORS
 */
export const retrieve = bookId => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/books/${bookId}`)
      dispatch(retrieveItem(response.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const AddSingleBook = (id, qty) => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/books/${id}`)
      data.qty = qty
      dispatch(addBook(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getStorage = () => {
  return JSON.parse(localStorage.getItem('cart'))
}
/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return action.books
    //case MODIFY_CART:
    case RETRIEVE_BOOK:
      return [...state, action.book]
    case ADD_BOOK:
      //console.log(action)
      return [...state, action.book]
    default:
      return state
  }
}
