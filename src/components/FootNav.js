import React from "react";
import './css/FootNav.css';


function FootNav() {
  return (
    <div className="container" id="footstuff">
      <div className="row">
        <div className="col align-self-center">
          <nav className="navbar fixed-bottom navbar-light bg-light">
            <p className="navbar-brand text-center"><small>&copy; 2020</small></p>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default FootNav;
