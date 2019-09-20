import React from 'react';
import { Link } from 'react-router-dom';
import alice_standing from './../assets/alice_header.jpg'
import down_arrow from './../assets/down_arrow.png'
import grass_field from './../assets/grass_field.png'

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
      <div className="gradient_box"> </div>
      <div className="grass_field">
        <img src= {grass_field} />
      </div>
      <div className="first_chapter">
      <p>Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversation?'
      </p>
      </div>


    </div>
  );
}

export default Story;
