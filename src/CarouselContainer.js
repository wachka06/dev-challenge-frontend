import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import backgroundImg from './asterisk.svg';

const text = {
    bgimg: "Background Image",
  }

class CarouselContainer extends Component {
    renderContent = () => {
        return this.props.content.quotes.map(quote => (
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={backgroundImg}
                alt={text.bgimg}
                />
                <Carousel.Caption>
                    <h3>{quote.message}</h3>
                    <p>{quote.attribution}</p>
                </Carousel.Caption>
          </Carousel.Item>
        ))
    }

    render () {
        console.log(this.props.content.section_title, 'content')
        return (
            <Carousel>
                {/* <h4>{this.props.content.section_title}</h4> */}
                {/* {this.renderContent()} */}
            </Carousel>
        )
    }
}

export default CarouselContainer;