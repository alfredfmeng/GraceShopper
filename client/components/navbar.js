import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1>Website Name</h1>
    <nav>
      {isLoggedIn ? (
        <div className="nav">
          {/* The navbar will show these links after you log in */}
          <Link className="navButton" to="/home">
            Home
          </Link>
          <Link className="navButton" to="/cart">
            Cart
          </Link>
          <a className="navButton" href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div className="nav">
          {/* The navbar will show these links before you log in */}
          <Link className="navButton" to="/login">
            Login
          </Link>
          <Link className="navButton" to="/signup">
            Sign Up
          </Link>
          <Link className="navButton" to="/cart">
            Cart
          </Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
