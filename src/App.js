import React, { Component } from 'react';
import './App.css';
import data from './data';
import CarouselContainer from './CarouselContainer';

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount = () => {
    this.setState({ data })
  }

  render () {
    // console.log(this.state.data)
    return (
      <div className="App">
        {/* <img className="Background-img" src={backgroundImg} alt={text.bgimg} /> */}
        <CarouselContainer
          content={this.state.data[0]}
        />
        {/* <CarouselContainer
          content={this.state.data[1]}
        /> */}
      </div>
    )
  }
}

export default App;
