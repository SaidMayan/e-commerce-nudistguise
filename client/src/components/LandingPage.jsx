import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage(props) {

  return(
    <div className="LandingPage">
    <div className="header">
      <h1 className="store-logo">NUDISTGUISE</h1>
    </div>
      <ul className="firstUl">
        <li><Link to="/products/all" style={{ textDecoration: 'none', color: 'inherit' }}>NEW ITEMS</Link></li>
        <li>CATEGORIES</li>
        <li>BRANDS</li>
        <li>NUDISTGUISE FW18</li>
        <li>COMING SOON...</li>
        <li>BLOG</li>
      </ul>
      <br/>
      <br/>
      <br/>
      <h4 className="Login-landing">Log in</h4>
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


