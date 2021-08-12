import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import TextField from './TextField';
import RadioButton from './RadioButton';
import DropDown from './DropDown';
import CheckBox from './CheckBox';
import DatePicker from './DatePicker';
const styles = {
  container: {
    display: 'flex',
    width: '100%',
    heigth: '100%',
    marginTop: 30,
  },
  label: {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
    fontFamily: 'sans-serif',
    paddingLeft: 10,
    paddingRight: 10,
  },
  textfield: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
};

export default class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      SelectedValue: '',
      checked: [],
    };
  }

  _changeText(data) {
    this.props.changeText(data);
  }

  _returnData = (data) => {
    const { published, values, label, type, id } = data;
    switch (type) {
      case 'Textfield':
        return (
          <TextField
            setAllData={this.props.setAllData}
            id={id}
            published={published}
            data={data}
            getAllData={this.props.getAllData}
          />
        );
      case 'Radiobutton':
        return (
          <RadioButton
            setAllData={this.props.setAllData}
            id={id}
            values={values}
            published={published}
            data={data}
            getAllData={this.props.getAllData}
            label={label}
          />
        );
      case 'Select':
        return (
          <DropDown
            setAllData={this.props.setAllData}
            id={id}
            values={values}
            data={data}
            published={published}
            getAllData={this.props.getAllData}
          />
        );
      case 'Checkbox':
        return (
          <CheckBox
            setAllData={this.props.setAllData}
            id={id}
            values={values}
            data={data}
            published={published}
            getAllData={this.props.getAllData}
          />
        );
      case 'Datepicker':
        return (
          <DatePicker
            setAllData={this.props.setAllData}
            id={id}
            values={values}
            data={data}
            published={published}
            getAllData={this.props.getAllData}
          />
        );
      default:
        return (
          <TextField
            setAllData={this.props.setAllData}
            data={data}
            id={id}
            published={published}
            getAllData={this.props.getAllData}
          />
        );
    }
  };

  render() {
    const data = this.props.data;
    const { label } = this.props.data;
    return (
      <Box style={styles.container}>
        <Box style={styles.label}>{label}</Box>
        <Box style={styles.textfield}>{this._returnData(data)}</Box>
      </Box>
    );
  }
}
