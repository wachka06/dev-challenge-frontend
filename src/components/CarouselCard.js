import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import backgroundImg from '../img/asterisk.svg';

const text = {
    bgimg: "Background Image",
  }

const CarouselCard = ({ quote }) => {
    return (
        <Carousel.Item>
            {/* <img
            className="d-block w-100"
            src={backgroundImg}
            alt={text.bgimg}
            /> */}
            <Carousel.Caption>
                <h3>{quote.message}</h3>
                <p>{quote.attribution}</p>
            </Carousel.Caption>
        </Carousel.Item>
    )
}

export default CarouselCard;