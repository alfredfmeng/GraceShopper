import React from 'react'
import SearchByTitle from './SearchByTitle'
import {connect} from 'react-redux'
import {newUser} from '../store/newUser'

class AllBooks extends React.Component {
  render() {
    return (
      <div>
        <SearchByTitle />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: user => dispatch(newUser(user, history))
  }
}

export default connect(null, mapDispatchToProps)(AllBooks)
