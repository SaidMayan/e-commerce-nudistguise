import React from 'react';
import { Link } from 'react-router-dom';
import Carousel1 from './Carousel.jsx';
import { Carousel } from '../../node_modules/react-bootstrap';
import './LandingPageCarousel.css';

function LandingPageCarousel(props) {

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
        <li style={{color: 'grey' }}>BRANDS</li>
        <li style={{color: 'grey' }}>NUDISTGUISE FW18</li>
        <li style={{color: 'grey' }}>COMING SOON...</li>
        <li style={{color: 'grey' }}>BLOG</li>
      </ul>
      <br/>
     {logReg}
      <br/>
      <ul>
        <li><Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>Cart</Link></li><br/><br/>
        <li style={{color: 'grey' }}>Help</li>
        <li style={{color: 'grey' }}>Newsletter</li>
        <li style={{color: 'grey' }}>Legal</li>
        <li style={{color: 'grey' }}>About</li>
      </ul>
      <div className="landingPageCarousel"><Carousel1 /></div>
    </div>
  )
}

export default LandingPageCarousel;