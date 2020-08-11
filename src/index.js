import React from 'react';
import ReactDOM from 'react-dom';
import Board from 'react-trello';
import MyCard from './d-card';

import "./styles.css";

import data from './initial-data';


export class App extends React.Component {
  render() {
    return (
      <Board
        data={data}
        components={{Card: MyCard}}
      />
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);