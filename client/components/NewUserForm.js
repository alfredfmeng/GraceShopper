import React from 'react'

const NewUserForm = props => {
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

        <label htmlFor="imageUrl">Enter Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          onChange={props.handleChange}
          value={props.imageUrl}
        />

        <label htmlFor="fuelType">Fuel Type:</label>
        <select
          name="fuelType"
          onChange={props.handleChange}
          value={props.fuelType}
        >
          <option value="">--Please choose a fuel type--</option>
          <option value="gas">Gas</option>
          <option value="diesel">Diesel</option>
          <option value="electric">Electric</option>
        </select>

        <label htmlFor="fuelLevel">Fuel Level (0-100):</label>
        <input
          type="number"
          name="fuelLevel"
          min="0"
          max="100"
          onChange={props.handleChange}
          value={props.fuelLevel}
        />

        <button type="submit">Submit</button>
      </form>
      <hr />
    </div>
  )
}

export default NewUserForm
