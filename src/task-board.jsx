import React from 'react';
import Board from 'react-trello';
import MyCard from './components/my-card';

export default class TaskBoard extends React.Component {
  render() {
    return (
      <Board
        data={this.props.data}
        components={{Card: MyCard}}
      />
    );
  }
}
