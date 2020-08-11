  
import React from 'react';
import { components, MovableCardWrapper, widgets  } from 'react-trello';

const { Tag } = components;
const { DeleteButton } = widgets;
 
export default class MyCard extends React.Component {
  clickDelete = () => {
    return;
  }

  onClick = () => {
    return;
  }
  
  render() {
    return (
      <MovableCardWrapper
        onClick={this.props.onClick}
        style={this.props.cardStyle}
        className={this.props.className}
      >
        <header
          style={{
            borderBottom: '1px solid #eee',
            paddingBottom: 6,
            marginBottom: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            color: this.props.cardColor
          }}>
          <div style={{fontSize: 14, fontWeight: 'bold'}}>{this.props.name}</div>
          <div style={{fontSize: 11}}>{this.props.dueOn}</div>
          {this.props.showDeleteButton && <DeleteButton onClick={this.props.clickDelete} />}
        </header>
        <div style={{fontSize: 12, color: '#BD3B36'}}>
          <div style={{color: '#4C4C4C', fontWeight: 'bold'}}>{this.props.subTitle}</div>
          <div style={{padding: '5px 0px'}}>
            <i>{this.props.body}</i>
          </div>
          <div style={{marginTop: 10, textAlign: 'center', color: this.props.cardColor, fontSize: 15, fontWeight: 'bold'}}>{this.props.escalationText}</div>
          {this.props.tags && (
            <div
              style={{
                borderTop: '1px solid #eee',
                paddingTop: 6,
                display: 'flex',
                justifyContent: 'flex-end',
                flexDirection: 'row',
                flexWrap: 'wrap'
              }}>
              {this.props.tags.map(tag => (
                <Tag key={tag.title} {...tag} tagStyle={this.props.tagStyle} />
              ))}
            </div>
          )}
        </div>
      </MovableCardWrapper>
    );
  }
}