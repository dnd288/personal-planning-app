  
import React from 'react';
import { components  } from 'react-trello';

const { Tag } = components;

export default class MyTag extends React.Component {
  
  render() {
    return (
        <Tag 
            key={this.props.title} 
            {...this.props} 
            tagStyle={
                // eslint-disable-next-line no-sequences
                this.props.tagStyle,
                {marginLeft: 0, padding: '3px 5px', fontSize: '0.8em'}
            } 
        />
    );
  }
}