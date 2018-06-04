import React, { Component } from 'react';
import TextField0 from 'material-ui/TextField';
import TextField1 from '@material-ui/core/TextField';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }
  render() {
    const { text } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">material-ui textarea selection issue</h1>
        </header>
        <section>
          <h2>material-ui@0.20.1</h2>
          <p className="App-intro">
            <TextField0
              multiLine
              value={text}
              onChange={event => this.setState({text: event.target.value})}
              rows={3}
              rowsMax={5}
            />
          </p>
        </section>
        <section>
          <h2>material-ui@1.1</h2>
          <p className="App-intro">
            <TextField1
              multiline
              value={text}
              onChange={event => this.setState({text: event.target.value})}
              rows={3}
              rowsMax={5}
            />
          </p>
        </section>
      </div>
    );
  }
}

export default App;
