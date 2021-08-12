import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
export default class TextFieldComponent extends Component {
  _changeText = (value, data, fromRadioBtn) => {
    value = value.target.value;
    fromRadioBtn ? (data.textvalue = value) : (data.value = value);
    this.props.setAllData(data);
  };
  render() {
    let { data, fromRadioBtn, getAllData } = this.props;
    return (
      <TextField
        value={getAllData[data.id]?.value ? getAllData[data.id]?.value : ''}
        inputProps={{ min: 0, style: { marginLeft: 5 } }}
        style={{
          width: '100%',
          backgroundColor: this.props.published ? '#FFE4C470' : '#f0f0f0',
        }}
        onChange={(text) => this._changeText(text, data, fromRadioBtn)}
      />
    );
  }
}
