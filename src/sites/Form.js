import React, { Component } from 'react';
import data from '../data/Data';
import { Box } from '@material-ui/core';
import FormComponent from '../components/Main/FormComponent';

const styles = {
  container: {
    height: '100%',
    width: '100%',
  },
  header: {
    backgroundColor: 'rgb(106, 172, 69)',
    height: 55,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    display: 'flex',
    marginTop: 30,
    marginBottom: 30,
    boxShadow:
      '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
  },
};
export default class Form extends Component {
  _changeText(data) {
    this.props.changeText(data);
  }

  _getTextFields = () => {
    let arr = [];
    for (const [id, value] of Object.entries(data)) {
      if (id === 'IsReported') {
        arr.push(
          <Box key={`${id}Box`} style={styles.header}>
            <h3
              style={{
                fontFamily: 'sans-serif',
                color: 'white',
                margin: 10,
                marginLeft: 20,
              }}
            >
              Informationen zum Projekt
            </h3>
          </Box>
        );
      }
      arr.push(
        <FormComponent
          getAllData={this.props.getAllData}
          setAllData={this.props.setAllData}
          key={id}
          data={value}
        />
      );
    }
    return arr;
  };
  render() {
    return (
      <Box style={styles.container}>
        <Box style={styles.header}>
          <h3
            style={{
              fontFamily: 'sans-serif',
              color: 'white',
              margin: 10,
              marginLeft: 20,
            }}
          >
            Ansprechpartnerin bzw. Ansprechpartner
          </h3>
        </Box>
        {this._getTextFields()}
      </Box>
    );
  }
}
