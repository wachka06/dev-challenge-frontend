import React, { Component } from "react";
import BootstrapCarousel from "react-bootstrap/Carousel";

class Carousel extends Component {
  render() {
    const { key, sectionTitle, quotes, messageColor = "black" } = this.props;

    return (
      <>
        <h6 className="section-title">{sectionTitle}</h6>
        <BootstrapCarousel
          nextIcon={<span className="arrow">&#8594;</span>}
          prevIcon={<span className="arrow">&#8592;</span>}
        >
          {quotes.map((quote, index) => {
            return (
              <BootstrapCarousel.Item key={index}>
                <div className="quote-container">
                  <p className="quote-message" style={{ color: messageColor }}>
                    {quote.message}
                  </p>
                  <div className="caption-container">
                    <div className="line" />
                    <p className="quote-attribution">{quote.attribution}</p>
                  </div>
                </div>
              </BootstrapCarousel.Item>
            );
          })}
        </BootstrapCarousel>
      </>
    );
  }
}

export default Carousel;
