import React from 'react';
import './Gallery.css';
import gallery1 from './galleryImg/gallery1.JPG';
import gallery2 from './galleryImg/gallery2.JPG';
import gallery3 from './galleryImg/gallery3.JPG';
import gallery4 from './galleryImg/gallery4.JPG';
import gallery5 from './galleryImg/gallery5.JPG';
import gallery6 from './galleryImg/gallery6.JPG';
import gallery7 from './galleryImg/gallery7.JPG';
import gallery8 from './galleryImg/gallery8.jpg';
import gallery9 from './galleryImg/gallery9.jpg';
import lobby1 from './galleryImg/lobby1.JPG';
import lobby2 from './galleryImg/lobby2.JPG';
import shows1 from './galleryImg/shows1.JPG';

const Gallery = () => {
    return (
        <div class="image-gallery">
        <div class="image-box">
        <img src={gallery1} alt="img.jpg" />
          <div class="overlay">
            <div class="details">
              <h3 class="title">
                <a href="#">Om Executive</a>
              </h3>
              <span class="category">
                <a href="#">Front Side</a>
              </span>
            </div>
          </div>
        </div>
        <div class="image-box">
          <img src={gallery2} alt="img.jpg" />
          <div class="overlay">
            <div class="details">
              <h3 class="title">
                <a href="#">Lawns</a>
              </h3>
              <span class="category">
                <a href="#">Lawn Party</a>
              </span>
            </div>
          </div>
        </div>
        <div class="image-box">
          <img src={gallery3} alt="img.jpg" />
          <div class="overlay">
            <div class="details">
              <h3 class="title">
                <a href="#">Lawns</a>
              </h3>
              <span class="category">
                <a href="#">Lawn Management</a>
              </span>
            </div>
          </div>
        </div>
        <div class="image-box">
          <img src={gallery4} alt="img.jpg" />
          <div class="overlay">
            <div class="details">
              <h3 class="title">
                <a href="#">Restaurant</a>
              </h3>
              <span class="category">
                <a href="#">Dining</a>
              </span>
            </div>
          </div>
        </div>
        <div class="image-box">
          <img src={gallery5} alt="img.jpg" />
          <div class="overlay">
            <div class="details">
              <h3 class="title">
                <a href="#">Entry At Hotel</a>
              </h3>
              <span class="category">
                <a href="#">Front Entry</a>
              </span>
            </div>
          </div>
        </div>
        <div class="image-box">
          <img src={gallery6} alt="img.jpg" />
          <div class="overlay">
            <div class="details">
              <h3 class="title">
                <a href="#">Reception</a>
              </h3>
              <span class="category">
                <a href="#">Reception Desk</a>
              </span>
            </div>
          </div>
        </div>
        <div class="image-box">
          <img src={gallery7} alt="img.jpg" />
          <div class="overlay">
            <div class="details">
              <h3 class="title">
                <a href="#">Professional Meetings</a>
              </h3>
              <span class="category">
                <a href="#">Conference Hall</a>
              </span>
            </div>
          </div>
        </div>
        <div class="image-box">
          <img src={gallery8} alt="img.jpg" />
          <div class="overlay">
            <div class="details">
              <h3 class="title">
                <a href="#">Functional Events</a>
              </h3>
              <span class="category">
                <a href="#">Multipurpose Hall</a>
              </span>
            </div>
          </div>
        </div>
        <div class="image-box">
          <img src={gallery9} alt="img.jpg" />
          <div class="overlay">
            <div class="details">
              <h3 class="title">
                <a href="#">Functional Events</a>
              </h3>
              <span class="category">
                <a href="#">Multipurpose Hall</a>
              </span>
            </div>
          </div>
        </div>
        <div class="image-box">
          <img src={lobby1} alt="img.jpg" />
          <div class="overlay">
            <div class="details">
              <h3 class="title">
                <a href="#">Hotel Lobby</a>
              </h3>
              <span class="category">
                <a href="#">Lobby</a>
              </span>
            </div>
          </div>
        </div>
        <div class="image-box">
          <img src={lobby2} alt="img.jpg" />
          <div class="overlay">
            <div class="details">
              <h3 class="title">
                <a href="#">Top View Lobby</a>
              </h3>
              <span class="category">
                <a href="#">Lobby</a>
              </span>
            </div>
          </div>
        </div>
        <div class="image-box">
          <img src={shows1} alt="img.jpg" />
          <div class="overlay">
            <div class="details">
              <h3 class="title">
                <a href="#">Diffrent Events</a>
              </h3>
              <span class="category">
                <a href="#">Lawn Events</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Gallery;
