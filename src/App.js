import React, { Component } from 'react';
import './App.css';
import QueryBox from './QueryBox/QueryBox';

class App extends Component {

  state = {
    querybox: [
      { url: 'Max', depth : 0},
    ]
  }

  switchNameHandler = (newUrl, newDepth) => {
    fetch('http://127.0.0.1:5000/crawler_results', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: newUrl,
        depth: parseInt(newDepth),
      })
    })
    .then(results => {
      return results.json();
    })
    .then(data => {
      console.log(data);
    })

    this.setState({querybox: [
      { url: newUrl, depth : newDepth},
    ]})
  }

  nameChangedHandler = (event) => {
      //console.log('Was clicked!');
      this.setState({persons: [
        { url: event.target.value, depth : event.target.value},
      ]
    })
  }

  render() {

    return (
      <div className="App">
        <h1>Image crawler app</h1>
        <QueryBox
          url={this.state.querybox[0].url}
          depth={this.state.querybox[0].depth}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.urlChangedHandler} />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }
}

export default App;
