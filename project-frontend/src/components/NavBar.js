import React from 'react'
import { connect } from 'react-redux'
import { logOut } from '../actions'

const NavLink = (props) => {
  const onLogOutClick = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    props.logOut()
  }
  console.log(props)
  return (
    <nav>
      <div className="nav-wrapper">
        {props.loggedIn ? <a className="brand-logo right">{localStorage.getItem('username')}</a> : null}
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a>Sass</a></li>
          <li><a>Components</a></li>
          <li>{props.loggedIn ? <a onClick={onLogOutClick}>Log Out</a> : <a>Log In</a>}</li>
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, {logOut})(NavLink)