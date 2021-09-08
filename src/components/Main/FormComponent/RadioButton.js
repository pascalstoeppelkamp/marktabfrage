import React, { Component } from 'react';
import {
  Box,
  FormControlLabel,
  Typography,
  Radio,
  RadioGroup,
  InputLabel,
} from '@material-ui/core';
import TextField from './TextField';
import DropDown from './DropDown';
const styles = {
  radioGroup: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
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

    if (value === 'ja') {
      data.value = true;
    } else if (value === 'nein') {
      data.value = false;
    } else {
      data.value = value;
    }
    this.props.setAllData(data);
  };

  radiobtn = (label, values, published, key, data) => {
    let arr = [];
    let coordsField = false;

    label === 'Koordinaten des Projektstandortes'
      ? (coordsField = true)
      : (coordsField = false);

    values.forEach((item) => {
      arr.push(
        <Box
          style={{
            flex: 1,
            backgroundColor: published ? '#FFE4C470' : '#ffff0',
          }}
          key={item}
        >
          <FormControlLabel
            value={item}
            control={
              <Radio
                color="grey"
                value={item}
                onClick={(value) => this._RadioButton(value, data)}
              />
            }
            label={
              <Typography style={{ fontSize: 14, color: 'grey' }}>
                {item}
              </Typography>
            }
            labelPlacement="end"
            style={{ paddingLeft: 10, paddingTop: 1 }}
          />
          {coordsField ? (
            <>
              <DropDown
                label={this.props.label}
                setAllData={this.props.setAllData}
                fromRadioBtn={true}
                data={data}
                key={`${key}DropDown`}
                values={['Bitte Ausfüllen', 'Entry / Quelle', 'Exit / Senke']}
              />
              <Box style={{ padding: 10 }}>
                {' '}
                <TextField
                  placeholder={this.props.label}
                  getAllData={this.props.getAllData}
                  setAllData={this.props.setAllData}
                  fromRadioBtn={true}
                  data={data}
                  key={`${key}TextField`}
                  published={published} /* value={} */
                />
              </Box>
            </>
          ) : null}
        </Box>
      );
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <InputLabel id="label" style={{ padding: 5 }}>
          {this.props.label}
        </InputLabel>
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
      </div>
    );
  };
  render() {
    let { label, values, published, id, data } = this.props;
    let key = id;
    return this.radiobtn(label, values, published, key, data);
  }
}
