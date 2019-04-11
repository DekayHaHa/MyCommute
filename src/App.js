import React, { Component } from 'react';
import './App.css';

class App extends Component {
  fetchData = () => {
    this.props.signinUser()
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.fetchData}>get faux data</button>
      </div>
    );
  }
}

export default App;
