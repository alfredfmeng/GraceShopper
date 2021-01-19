import React from 'react'

class UserProfile extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="profile">
        <div>
          <img src="https://icon-library.net/images/small-user-icon/small-user-icon-13.jpg" />
          <h1>User's Name</h1>
        </div>
        <ul>
          <li>Joined 'Today's Date'</li>
          <li>Username: username goes here</li>
          <li>Email: email goes here</li>
          <li>Address: address goes here</li>
        </ul>
        <div>Order History</div>
      </div>
    )
  }
}

export default UserProfile
