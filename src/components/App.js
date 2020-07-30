import React, { Component } from 'react';
import '../css/App.css';
import data from '../data';
import CarouselContainerTop from './CarouselContainerTop';
import CarouselContainerBottom from './CarouselContainerBottom';

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
        <CarouselContainerTop
          content={this.state.data[0]}
        />
        <CarouselContainerBottom
          content={this.state.data[1]}
        />
      </div>
    )
  }
}

export default App;
