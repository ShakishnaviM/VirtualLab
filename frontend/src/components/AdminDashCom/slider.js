import './Slider.css'
import Carousel from 'react-bootstrap/Carousel';

import img1 from '../../assets/01.png'
import img2 from '../../assets/02.jpeg'
import img3 from '../../assets/03.jpg'

function ImageSlider() {
  return (
    <div className="image-slidecontainer">
      <center>
      <div className="slider-inner-container">
        <Carousel>
          <Carousel.Item>
            <img
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Chemistry Practical List</h3>
              <p>27 Practicals and 821 Students Completed</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={img2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Physics Practical List</h3>
              <p>23 Practicals and 641 Students Completed</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={img3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Biology Practical List</h3>
              <p>13 Practicals and 487 Students Completed</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      </center>
    </div>
  );
}

export default ImageSlider;
