import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage(props) {

  let logReg;
  if(!props.user) {
    logReg =
      <h4 className="Login-landing">
      <Link to="/login"
      style={{ textDecoration: 'none', color: 'inherit' }}>Log in / </Link><span>
      <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register</Link>
      </span></h4>
  } else {
    logReg = (<div><ul><li className="greetUser">Hi, {props.user.email}</li><li onClick={props.logout} className="logOut">Logout</li></ul></div>)
  }

  //  else {
  //   logReg = {props.currentUser.username}
  // }

  return(
    <div className="LandingPage">
    <div className="header">
      <h1 className="store-logo"><Link to="/" className="store-logo-link">NUDISTGUISE</Link></h1>
    </div>
      <ul className="firstUl">
        <li><Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>NEW ITEMS</Link></li>
        <li>CATEGORIES</li>
        <li>BRANDS</li>
        <li>NUDISTGUISE FW18</li>
        <li>COMING SOON...</li>
        <li>BLOG</li>
      </ul>
      <br/>
      <br/>
      <br/>
      {logReg}
      <br/>
      <br/>
      <br/>
      <ul>
        <li>Help</li>
        <li>Newsletter</li>
        <li>Legal</li>
        <li>About</li>
      </ul>
    </div>

  )
}

export default LandingPage;


