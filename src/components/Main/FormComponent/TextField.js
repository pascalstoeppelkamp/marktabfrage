import React, { Component } from 'react';
import { TextField, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/Info';

const styles = (theme) => ({
  textfield: {
    width: '100%',
    backgroundColor: '#FFE4C470',
  },
  textfieldp: {
    width: '100%',
    backgroundColor: '#fff',
  },
});

class TextFieldComponent extends Component {
  _changeText = (value, data, fromRadioBtn) => {
    value = value.target.value;
    fromRadioBtn ? (data.textvalue = value) : (data.value = value);
    this.props.setAllData(data);
  };
  render() {
    let { data, fromRadioBtn, getAllData, classes, placeholder } = this.props;
    return (
      <TextField
        label={placeholder}
        value={getAllData[data.id]?.value ? getAllData[data.id]?.value : ''}
        inputProps={{ min: 0, style: { marginLeft: 5 } }}
        className={
          this.props.published ? classes.textfield : classes.textfieldp
        }
        variant="outlined"
        onChange={(text) => this._changeText(text, data, fromRadioBtn)}
      />
    );
  }
}
export default withStyles(styles)(TextFieldComponent);
