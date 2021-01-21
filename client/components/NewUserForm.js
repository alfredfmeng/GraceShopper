import React from 'react'

const defaultState = {
  name: '',
  email: '',
  password: ''
}

class NewUserForm extends React.Component {
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
    this.props.history.push('/')
    if (this.state.name === '') {
      alert('Must enter name')
    } else if (this.state.password === '') {
      alert('Must enter password')
    } else {
      try {
        this.props.createUser({...this.state})
      } catch (err) {
        console.log(err)
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Create A New Account</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Enter Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <label htmlFor="email">Enter Email:</label>
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />

          <label htmlFor="password">Enter Password:</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />

          <button className="logSubButton" type="submit">
            Submit
          </button>
        </form>
        <hr />
        <a href="/auth/google">Sign Up with Google</a>
      </div>
    )
  }
}

export default NewUserForm
