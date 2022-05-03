import React from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        Wordle
      </Link>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link to="/help">
       Help
      </Link>
    </div>
  )
}

export default Navbar;