import React from 'react'

class UserProfile extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="profile">
        <img
          className="profileimage"
          src="https://icon-library.net/images/small-user-icon/small-user-icon-13.jpg"
        />
        <h1>Juan</h1>
        <ul>
          <li>Joined: Janurary 21st 2020</li>
          <li>Email: juan@email.com</li>
        </ul>
        <div>Order History</div>
      </div>
    )
  }
}

export default UserProfile
