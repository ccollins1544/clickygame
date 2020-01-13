import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import Nav from '../Nav'

function Header(){
  return (
    <header className="App-header">
      <div className="container-fluid clearfix">
      <Nav 
        navBarClass="collapse show"
        listClass= "ml-auto"
        navBarBrand={true}
        elementID="main-nav"
      >
        <li className="nav-item"> 
          <a className="nav-link" href="/"><FontAwesomeIcon icon={faMugHot} /> # </a>
        </li>
      </Nav>
      </div>
    </header>
  );
}

export default Header;