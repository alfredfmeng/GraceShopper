import React from 'react'

class UserProfile extends React.Component {
  render() {
    return (
      <div className="profile">
        <div>
          <img src="https://icon-library.net/images/small-user-icon/small-user-icon-13.jpg" />
          <h1>User's Name</h1>
        </div>
        <div>Joined 'Today's Date'</div>
        <div>Username: username goes here</div>
        <div>Email: email goes here</div>
        <div>Address: address goes here</div>
        <div>Order History</div>
      </div>
    )
  }
}

export default UserProfile
