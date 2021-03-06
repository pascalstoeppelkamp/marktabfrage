import React, { Component } from 'react';
import {
  MenuItem,
  Select,
  Box,
  InputLabel,
  FormControl,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import Lock from '@material-ui/icons/Lock';

export default class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SelectedValue: '',
    };
  }

  handleChange = (item, data, fromRadioBtn) => {
    item = item.target.value;
    fromRadioBtn ? (data.dropdownValue = item) : (data.value = item);
    this.props.setAllData(data);
    this.setState({ SelectedValue: item });
  };

  dropdown = (values, published, key, data, fromRadioBtn) => {
    let { SelectedValue } = this.state;
    let arr = [];
    values.forEach((item) => {
      arr.push(
        <MenuItem key={item} value={item} onClick={this.handleClose}>
          {item}
        </MenuItem>
      );
    });
    return (
      <FormControl
        vborder={1}
        borderColor="grey.500"
        style={{
          width: '100%',
          display: 'flex',
          backgroundColor: "published ? '#FFE4C470' : '#FFFFFF',",
        }}
      >
        <InputLabel id="demo-simple-select-helper-label">
          {this.props.placeholder}
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id={'demo-controlled-open-select'}
          style={{ width: '100%' }}
          onChange={(value) => this.handleChange(value, data, fromRadioBtn)}
          value={SelectedValue}
        >
          {arr}
        </Select>
      </FormControl>
    );
  };
  render() {
    let { values, published, id, data, fromRadioBtn } = this.props;
    let key = id;
    return this.dropdown(values, published, key, data, fromRadioBtn);
  }
}
