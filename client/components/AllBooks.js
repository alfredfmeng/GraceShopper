import React from 'react'
import SearchByTitle from './SearchByTitle'
import NewUserForm from './NewUserForm'
import {connect} from 'react-redux'
import {newUser} from '../store/newUser'

const defaultState = {
  name: '',
  email: '',
  password: ''
}

class AllBooks extends React.Component {
  constructor() {
    super()
    this.state = defaultState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    history.push('/')
    try {
      this.props.createUser({...this.state})
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        <NewUserForm
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
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
