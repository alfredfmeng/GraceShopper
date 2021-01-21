import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {AiFillHome} from 'react-icons/ai'
import {BiLogIn, BiLogOut, BiCartAlt} from 'react-icons/bi'
const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <Link to="/" style={{color: '#000000'}}>
      <h1>Fullstack's Bookstacks</h1>
    </Link>
    <nav>
      {isLoggedIn ? (
        <div className="nav">
          {/* The navbar will show these links after you log in */}
          <Link className="navButton" to="/home">
            <AiFillHome />
            Home
          </Link>
          <Link className="navButton" to="/cart">
            <BiCartAlt />
            Cart
          </Link>
          <a className="userprofile" href="/userprofile">
            User Profile
          </a>
          <a className="navButton" href="#" onClick={handleClick}>
            <BiLogOut />
            Logout
          </a>
        </div>
      ) : (
        <div className="nav">
          {/* The navbar will show these links before you log in */}
          <Link className="navButton" to="/login">
            <BiLogIn />
            Login
          </Link>
          <Link className="navButton" to="/signup">
            Sign Up
          </Link>
          <Link className="navButton" to="/cart">
            <BiCartAlt />
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
