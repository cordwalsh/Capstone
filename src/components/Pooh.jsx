import React from 'react';
import { Link } from 'react-router-dom';
import down_arrow from './../assets/down_arrow.png';
import pooh_header from './../assets/pooh_header.jpg';

function Pooh() {
  return (
    <div className="story_pooh">
      <div className="story_title">
        <h1>Winnie the Pooh</h1>
      </div>
      <div className="pooh_header_picture">
        <img src= {pooh_header} />
      </div>
      <div className="down_arrow">
        <p>SCROLL</p>
        <img src= {down_arrow} />
      </div>

    </div>
  )
}

export default Pooh;
