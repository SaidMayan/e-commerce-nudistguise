import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import './Carousel.css';

class Carousel1 extends Component {
    render() {
        return (
          <div className="carousel2">
            <Carousel>
                <Carousel.Item>
                    <img width={500} height={500} alt="500x500" src={require('./Apartamento.jpg')}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={500} height={500} alt="500x500" src={require('./Apartamento.jpg')}/>
                </Carousel.Item>
            </Carousel>
          </div>
        );
    }
}

export default Carousel1;
