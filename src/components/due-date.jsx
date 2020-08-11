  
import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

const Container = styled.div`
    display: inline-block;
    margin: 0 4px 4px 0;
    max-width: 100%;
    min-height: 20px;
    overflow: hidden;
    position: relative;
    padding: 2px;
    text-decoration: none;
    text-overflow: ellipsis;
    vertical-align: top;
    ${({isOverDue}) => isOverDue && `
        background-color: #ec9488;
        border-radius: 3px;
        color: #fff;`
    }
`;

const Text = styled.span`
    font-size: 12px;
    padding: 0 4px 0 2px;
    vertical-align: middle;
    white-space: nowrap;
`;

export default class DueDate extends React.Component {
    state = {
        isOverDue: new Date(this.props.date) < new Date()
    }
    
  render() {
    return (
        <Container isOverDue={this.state.isOverDue}>
            <FontAwesomeIcon icon={faClock} style={{ 'fontSize': '14px', 'margin': '0 2px' }} /> 
            <Text>{format(new Date(this.props.date), 'MMM dd')}</Text>
        </Container>
    );
  }
}