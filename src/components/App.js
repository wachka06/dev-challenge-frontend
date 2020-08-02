import React, { Component } from "react";
import "../css/App.css";
import data from "../data";
import Carousel from "./Carousel";
import Button from "react-bootstrap/Button";
import AsteriskImage from "../assets/asterisk.svg";

class App extends Component {
  render() {
    return (
      <div className="app">
        {data.map((carouselData, index) => {
          const messageColor = index % 2 === 0 ? "black" : "blue";
          const asteriskPosition = index % 2 === 0 ? "right" : "left";

          return (
            <div className="carousel-wrapper" key={index}>
              <img
                src={AsteriskImage}
                className={`asterisk asterisk-${asteriskPosition}`}
              />
              <Carousel
                className="carousel"
                key={index}
                sectionTitle={carouselData.section_title}
                quotes={carouselData.quotes}
                messageColor={messageColor}
                asteriskPosition={asteriskPosition}
              />
              {index === 0 && (
                <Button className="button" variant="dark">
                  VIEW ALL
                </Button>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
