import React from 'react';
import { Link } from 'react-router-dom';
import Alice from './Alice';
import Pooh from './Pooh';

function Header() {
  return (
    <div className="header">
      <div className="alice_link">
        <Link to="/Alice">Alice</Link>
      </div>
      <div className="pooh_link">
        <Link to="/Pooh">Pooh</Link>
      </div>


    </div>
  );
}

export default Header;
