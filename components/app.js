import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { n: 0 }
  }

  handleClick() {
    this.setState({ n: this.state.n + 1 });
  }

  render() {
    return(
      <div>
        <h1>Clicked {this.state.n} times.</h1>
        <button onClick={this.handleClick.bind(this)}>Click me!</button>
      </div>
    );
  }
}
