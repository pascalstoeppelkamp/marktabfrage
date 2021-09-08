import React, { Component } from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
  InputLabel,
} from '@material-ui/core';
export default class CheckBox extends Component {
  _SetCheckBox = (value, data) => {
    value = value.target.value;
    if (value === 'ja') {
      value = true;
    }
    if (value === 'nein') {
      value = false;
    }
    if (data.value[value]) {
      data.value[value] = false;
    } else {
      data.value[value] = true;
    }
    this.props.setAllData(data);
  };

  checkbox = (values, published, key, data) => {
    let arr = [];
    values.forEach((item) => {
      arr.push(
        <FormControlLabel
          key={item}
          color="grey"
          value={item}
          control={
            <Checkbox
              key={`${item}Checkbox`}
              color="grey"
              value={item}
              onClick={(value) => this._SetCheckBox(value, data)}
            />
          }
          label={
            <Typography style={{ fontSize: 14, color: 'grey' }}>
              {item}
            </Typography>
          }
          labelPlacement="end"
          style={{ flex: 1, paddingLeft: 5, paddingTop: 5 }}
        />
      );
    });
    return (
      <Box
        border={1}
        borderColor="grey.500"
        style={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          backgroundColor: published ? '#FFE4C470' : '#FFFFFF',
          justifyContent: 'space-evenly',
        }}
      >
        {arr}
      </Box>
    );
  };

  render() {
    let { values, published, id, data } = this.props;
    let key = id;
    return (
      <Box style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
        <InputLabel id="label" style={{ padding: 5 }}>
          {this.props.label}
        </InputLabel>
        {this.checkbox(values, published, key, data)}
      </Box>
    );
  }
}
