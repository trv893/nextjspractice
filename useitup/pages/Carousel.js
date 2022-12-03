
import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../styles/Images.module.css'

  
export default function CarouselMain() {
        return (

          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
              <img
                        className="d-block w-100"
                        src="/food3b.jpg"
                        alt="Third slide"
                      />
              </div>
              <div className="carousel-item">
              <img
                        className="d-block w-100"
                        src="/food2b.jpg"
                        alt="Second slide"
                      />
              </div>
              <div className="carousel-item">
              <img
                        className="d-block w-100"
                        src="/food1a.webp"
                        alt="First slide"
                      />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>




        );
    
};

