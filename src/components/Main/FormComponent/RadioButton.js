import React, { Component } from 'react';
import {
  Box,
  FormControlLabel,
  Typography,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import TextField from './TextField';
import DropDown from './DropDown';
const styles = {
  radioGroup: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
  },
};

export default class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      SelectedValue: {},
    };
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClick = () => {
    this.setState({ anchorEl: true });
  };

  handleChange = (item) => {
    const { SelectedValue } = this.state;
    SelectedValue[item.target.value] = !SelectedValue[item.target.value];
    this.setState({ SelectedValue });
  };

  _RadioButton = (value, data) => {
    value = value.target.value;
    if (data.value === 'ja') {
      data.value = true;
    } else if (data.value === 'nein') {
      data.value = false;
    } else {
      data.value = value;
    }

    this.props.setAllData(data);
  };

  radiobtn = (label, values, published, key, data) => {
    let arr = [];
    let coordsField = false;

    label === 'Koordinaten des Projektstandortes (rechts/links)'
      ? (coordsField = true)
      : (coordsField = false);

    values.forEach((item) => {
      arr.push(
        <Box style={{ flex: 1 }} key={item}>
          <FormControlLabel
            value={item}
            control={
              <Radio
                color="primary"
                value={item}
                onClick={(value) => this._RadioButton(value, data)}
              />
            }
            label={<Typography style={{ fontSize: 14 }}>{item}</Typography>}
            labelPlacement="end"
            style={{ paddingLeft: 10, paddingTop: 1 }}
          />
          {coordsField ? (
            <div style={{ width: '100%' }}>
              <DropDown
                setAllData={this.props.setAllData}
                fromRadioBtn={true}
                data={data}
                key={`${key}DropDown`}
                values={['Bitte Ausfüllen', 'Entry / Quelle', 'Exit / Senke']}
              />
              <TextField
                setAllData={this.props.setAllData}
                fromRadioBtn={true}
                data={data}
                key={`${key}TextField`}
                published={published} /* value={} */
              />
            </div>
          ) : null}
        </Box>
      );
    });

    return (
      <Box
        border={1}
        borderColor="grey.500"
        style={{
          width: '100%',
          display: 'flex',
          backgroundColor: published ? '#FFE4C470' : '#FFFFFF',
        }}
      >
        <RadioGroup row aria-label="position" style={styles.radioGroup}>
          {arr}
        </RadioGroup>
      </Box>
    );
  };
  render() {
    let { label, values, published, id, data } = this.props;
    let key = id;
    return this.radiobtn(label, values, published, key, data);
  }
}
