import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFistRaised } from '@fortawesome/free-solid-svg-icons'

function Nav({ navBarClass, listClass, navBarBrand, pageTitle, elementID, children}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id={elementID}>
      {navBarBrand === true && <a className="navbar-brand mb-0 h1" href="."><FontAwesomeIcon icon={faFistRaised} /> {pageTitle}</a>} 

      <div className={["navbar-collapse", navBarClass].join(" ")}>
        <ul className={["navbar-nav", listClass].join(" ")}>
          {children}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
