import React, { Component } from 'react';
import Counter from './Components/Counter';
import './App.css';

class App extends Component {
render() {
  return (
  <div className="App">
    <h1>React Counter</h1>
    <Counter/>
  </div>

  );
  }
}

export default App;
