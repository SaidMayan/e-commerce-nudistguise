import React from 'react';
import { Link } from 'react-router-dom';
import Carousel1 from './Carousel.jsx'

function LandingPage(props) {

  let logReg;
  if(!props.user) {
    logReg =
      <h4 className="Login-landing">
      <Link className="login" to="/login"
      style={{ textDecoration: 'none', color: 'inherit', fontSize: 20, fontWeight: 550 }}>Log in / </Link><span>
      <Link className="register" to="/register" style={{ textDecoration: 'none', color: 'inherit', fontSize: 20, fontWeight: 550  }}>Register</Link>
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
      <h1 className="store-logo"><Link to="/" className="store-logo-link"  style={{ textDecoration: 'none', color: 'inherit' }}>NUDISTGUISE</Link></h1>
    </div>
      <ul className="firstUl">
        <li><Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>NEW ITEMS</Link></li>
        <li><Link to="/categories" style={{ textDecoration: 'none', color: 'inherit' }}>CATEGORIES</Link></li>
        <li>BRANDS</li>
        <li>NUDISTGUISE FW18</li>
        <li>COMING SOON...</li>
        <li>BLOG</li>
      </ul>
      <br/>
     {logReg}
      <br/>
      <ul>
        <li><Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>Cart</Link></li><br/><br/>
        <li>Help</li>
        <li>Newsletter</li>
        <li>Legal</li>
        <li>About</li>
      </ul>

    </div>

  )
}

export default LandingPage;


