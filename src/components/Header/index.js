import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice, faTrophy } from '@fortawesome/free-solid-svg-icons'
import Nav from '../Nav'

const Header = props => {
  const default_style = {
    borderBottomColor: "#52616B",
    boxShadow: "0px 2px 4px 0px #52616B"
  };

  const winning_style = {
    borderBottomColor: "#28a745", 
    boxShadow: "0px 2px 4px 0px #28a745"
  };

  const losing_style = {
    borderBottomColor: "#E9290F", 
    boxShadow: "0px 2px 4px 0px #E9290F"
  };
  
  return (
    <header className="App-header">
      <div 
        className="container-fluid clearfix"
        style={props.score > 0 ? winning_style : ( props.highScore === props.score ? default_style : losing_style)}
      >
      <Nav 
        navBarClass="collapse show"
        listClass= "ml-auto"
        navBarBrand={true}
        pageTitle={props.pageTitle}
        elementID="main-nav"
      >
        <li className="nav-item">
          <a className="nav-link score" href="."><FontAwesomeIcon icon={faDice} /> Score <span className="badge badge-success">{props.score}</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link top_score" href="."><FontAwesomeIcon icon={faTrophy} /> Top Score <span className="badge badge-secondary">{props.highScore}</span></a>
        </li>
      </Nav>
      </div>
    </header>
  );
}

export default Header;