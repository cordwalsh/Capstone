import React from 'react';
import { Link } from 'react-router-dom';
import alice_standing from './../assets/alice_header.jpg'
import down_arrow from './../assets/down_arrow.png'

function Story() {
  return (
    <div className="story">
      <div className="story_title">
        <h1>Alice in Wonderland</h1>
      </div>
      <div className="alice_header_picture">
        <img src= {alice_standing} />
      </div>
      <div className="down_arrow">
        <p>SCROLL</p>
        <img src= {down_arrow} />
      </div>


    </div>
  );
}

export default Story;
