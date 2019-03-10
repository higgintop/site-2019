import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>other content</div>
      </div>
    );
  }
}

export default App;
