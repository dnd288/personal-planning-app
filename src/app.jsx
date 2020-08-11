import React from 'react';
import TaskBoard from './task-board';

import data from './initial-data';

export default class App extends React.Component {
  render() {
    return (
      <TaskBoard
        data={data}
      />
    );
  }
}
