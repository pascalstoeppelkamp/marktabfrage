import React, { Component } from 'react';
import { Button, Box } from '@material-ui/core';
import { ChevronRightOutlined } from '@material-ui/icons';
import ServerUtils from '../../../utils/ServerUtils';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
  },
  btnBox: {
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
  },
  chevron: {
    flex: 0.1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

export default class index extends Component {
  constructor(props) {
    super(props);
    this.ServerUtils = new ServerUtils();
    this.state = {
      data: [],
      pressedData: null,
      btnContainerBG: [],
    };
  }
  componentDidMount() {
    let { fnb } = this.props;
    this.showData(fnb);
  }

  showData = async (fnb) => {
    let body = {
      FNB: fnb,
    };
    const response = await this.ServerUtils.showAbfragen(body);
    if (response.success) {
      this.setState({ data: response.data });
    }
  };

  pressedContact = (item, index) => {
    this.changeColor(index);
    this.setState({ pressedData: item });
  };

  changeColor = (index) => {
    let btnContainerBG = {};
    let clicked = 'lightgrey';
    let unPressed = 'white';
    btnContainerBG[index] === clicked
      ? (btnContainerBG[index] = unPressed)
      : (btnContainerBG[index] = clicked);
    this.setState({ btnContainerBG });
  };

  getItems = (item, index) => {
    let { btnContainerBG } = this.state;
    let { Name, Email, CompanyContact } = item;
    return (
      <Button
        style={{
          height: 100,
          borderColor: 'lightgreen',
          borderStyle: 'solid',
          backgroundColor: btnContainerBG[index],
          margin: 20,
          borderWidth: 0.5,
          borderRadius: 10,
          overflow: 'hidden',
        }}
        onClick={() => this.pressedContact(item, index)}
      >
        <Box style={styles.btnBox}>
          <p style={{ flex: 1 }}>{'Name: ' + Name}</p>
          <p style={{ flex: 1 }}>{'Email: ' + Email}</p>
          <p style={{ flex: 1 }}>{'Ansprechpartner: ' + CompanyContact}</p>
        </Box>
        <Box style={styles.chevron}>
          <ChevronRightOutlined />
        </Box>
      </Button>
    );
  };

  pressedData = (data) => {
    let arr = [];
    for (const [key, value] of Object.entries(data)) {
      if (typeof value === 'object') {
        for (const [tkey, val] of Object.entries(value)) {
          arr.push({
            name: tkey,
            value: JSON.stringify(val),
          });
        }
      }

      if (typeof value !== 'object' && key !== '_id' && key !== '__v') {
        arr.push({
          name: key,
          value: value,
        });
      }
    }
    return arr;
  };

  render() {
    let { data, pressedData } = this.state;
    return (
      <Box style={styles.container}>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            height: '100vh',
          }}
        >
          {data.map((item, index) => this.getItems(item, index))}
        </Box>

        <Box style={{ flex: 1, margin: 20, width: '60%', overflow: 'hidden' }}>
          {pressedData
            ? this.pressedData(pressedData).map((item) => (
                <p>
                  {item.name} : {item.value}
                </p>
              ))
            : null}
        </Box>
      </Box>
    );
  }
}
