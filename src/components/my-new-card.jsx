import React from 'react';
import PropTypes from 'prop-types';
import {components, widgets} from 'react-trello';
import styled from 'styled-components';

const { CardForm,
    CardHeader,
    CardRightContent,
    CardTitle,
    CardWrapper,
    Detail
} = components;

const {EditableLabel} = widgets;


const AddButton = styled.button`
  background: #5aac44;
  color: #fff;
  transition: background 0.3s ease;
  min-height: 32px;
  padding: 4px 16px;
  vertical-align: top;
  margin-top: 0;
  margin-right: 8px;
  font-weight: bold;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 0;
  border: none;
`

const CancelButton = styled.button`
  background: #999999;
  color: #fff;
  transition: background 0.3s ease;
  min-height: 32px;
  padding: 4px 16px;
  vertical-align: top;
  margin-top: 0;
  font-weight: bold;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 0;
  border: none;
`


class MyNewCard extends React.Component {
  updateField = (field, value) => {
    this.setState({[field]: value});
  }

  handleAdd = () => {
    this.props.onAdd(this.state);
  }

  render() {
    const {onCancel, t} = this.props
    return (
      <CardForm>
        <CardWrapper>
          <CardHeader>
          </CardHeader>
          <Detail>
            <EditableLabel placeholder={t('placeholder.description')} onChange={val => this.updateField('name', val)} />
          </Detail>
        </CardWrapper>
        <AddButton onClick={this.handleAdd}>{t('button.Add card')}</AddButton>
        <CancelButton onClick={onCancel}>{t('button.Cancel')}</CancelButton>
      </CardForm>
    )
  }
}

MyNewCard.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

MyNewCard.defaultProps = {
}

export default MyNewCard
