
import Carousel from 'react-bootstrap/Carousel';
import styles from '../styles/Images.module.css';

function CarouselHeroHome() {
  return (
    <Carousel fade>
      <Carousel.Item>
      <img
                        className="d-block w-100"
                        src="/food3b.jpg"
                        alt="Third slide"
                      />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
                        className="d-block w-100"
                        src="/food2b.jpg"
                        alt="Second slide"
                      />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
                        className="d-block w-100"
                        src="/food1a.webp"
                        alt="First slide"
                      />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHeroHome;