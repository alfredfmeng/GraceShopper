import axios from 'axios'

const NEW_USER = 'NEW_USER'

const _newUser = user => ({
  type: NEW_USER,
  user
})

export const newUser = (user, history) => {
  return async dispatch => {
    try {
      const {data: createdUser} = await axios.post('/api/users', user)
      dispatch(_newUser(createdUser))
      history.go('/')
    } catch (err) {
      console.log(err)
    }
  }
}

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_USER:
      return action.user
    default:
      return state
  }
}
