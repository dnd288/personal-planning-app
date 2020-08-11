  
import React from 'react';
import { MovableCardWrapper  } from 'react-trello';
import styled from 'styled-components';
import DueDate from './due-date';
import MyTag from './my-tag';

const Container = styled.div``;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 230px;
`;
const CardName = styled.span`
  white-space: break-spaces;
`;
const BadgeList = styled.div`
  display: flex;
  margin-top: 5px;
`;

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
        <Container>
        {this.props.tags && (
            <TagList>
              {this.props.tags.map(tag => (
                <MyTag key={tag.title} {...tag} tagStyle={this.props.tagStyle} />
              ))}
            </TagList>
          )}
          <CardName>{this.props.name}</CardName>
          {this.props.dueOn && (
            <BadgeList>
              <DueDate date={this.props.dueOn}/>
            </BadgeList>)}
        </Container>
      </MovableCardWrapper>
    );
  }
}