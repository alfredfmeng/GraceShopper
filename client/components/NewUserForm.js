import React from 'react'

const NewUserForm = props => {
  console.log(props)
  return (
    <div>
      <h1>Create A New Account</h1>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="name">Enter Name:</label>
        <input
          type="text"
          name="name"
          onChange={props.handleChange}
          value={props.name}
        />

        <label htmlFor="email">Enter Email:</label>
        <input
          type="text"
          name="email"
          onChange={props.handleChange}
          value={props.email}
        />

        <label htmlFor="password">Enter Password:</label>
        <input
          type="text"
          name="password"
          onChange={props.handleChange}
          value={props.password}
        />

        <button type="submit">Submit</button>
      </form>
      <hr />
    </div>
  )
}

export default NewUserForm
