import React, { Component } from 'react';
import Ticker from './components/Ticker';
import logo from './logo.svg';
import './App.css';

const data = [
  { name: 'React' },
  { name: 'Recompose' },
  { name: 'Redux' },
  { name: 'Middleware' },
  { name: 'Reducers' },
  { name: 'Sagas' },
  { name: 'Thunks' },
]

class App extends Component {
  render() {
    return (
      <div>
        <Ticker data={data} />
      </div>
    );
  }
}

export default App;
