import React, { Component } from 'react';
import BasicExample from './RouterExample';

class MyComponent extends Component {
  state = { counter: 0};
  render() {
    return (
      <div>
        <h1>
        {this.props.title}
        </h1>
        <p>
        {this.state.counter}
        </p>
        <BasicExample />
      </div>
    );
  }
}

export default MyComponent;
