import React, { Component } from 'react';
import './Counter.css';


    class Counter extends Component {
        constructor(props) {
            super(props);
            this.state ={
                count: 0
            };
        }

        increment = () => {
            this.setState({
                count: this.state.count + 1
            })
        };
        decrement = () => {
            this.setState({
                count: this.state.count - 1
            })
        };
        render() {
          return (
          <div>
        <p className="para" >Current Count: {this.state.count}</p>
        <button className="btn"onClick={this.increment}>Increment</button>
        <button className="btn"onClick={this.decrement}>Decrement</button>
          </div>
          );
          }
        }

export default Counter;