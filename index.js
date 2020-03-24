import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      date: '24 March 2020'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
        Chirag Bohra  Start editing to see some magic happen :)
        </p>
        <h6>{this.state.date}
        </h6>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
