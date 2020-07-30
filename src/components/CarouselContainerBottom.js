import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselCard from './CarouselCard';

class CarouselContainerBottom extends Component {
    renderContent = () => {
        if (this.props.content) {
            return this.props.content.quotes.map(quote => (
                <CarouselCard 
                    key={this.props.content.quotes.indexOf(quote)}
                    quote={quote}
                />
            ))
        }
    }

    render () {
        return (
            <Carousel>
                <h4>
                    {this.props.content ? 
                    this.props.content.section_title : 
                    null}
                </h4>
                {this.renderContent()}
            </Carousel>
        )
    }
}

export default CarouselContainerBottom;