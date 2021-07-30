import React, { Component } from 'react';
import { Button, Box } from '@material-ui/core';
import { ChevronRightOutlined } from '@material-ui/icons';
import ServerUtils from '../../../utils/ServerUtils';
import Server from 'http-proxy';
const styles = {
  container: {
    height: 100,
    borderColor: 'lightgreen',
    borderStyle: 'solid',
    margin: 20,
    borderWidth: 0.5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
  },
};
export default class index extends Component {
  constructor(props) {
    super(props);
    this.ServerUtils = new ServerUtils();
    this.state = {
      data: [],
      pressedData: null,
    };
  }
  componentDidMount() {
    this.showData();
  }

  async showData() {
    const response = await this.ServerUtils.showAbfragen();
    if (response.success) {
      this.setState({ data: response.data });
    }
  }

  pressedContact = (item) => {
    this.setState({ pressedData: item });
  };

  getItems = (item) => {
    return (
      <Button
        style={styles.container}
        onClick={() => this.pressedContact(item)}
      >
        <Box style={styles.box}>
          <p style={{ flex: 1 }}>1{item.CompanyContact}</p>
          <p style={{ flex: 1 }}>2{item.Email}</p>
          <p style={{ flex: 1 }}>3{item.Name}</p>
          <p style={{ flex: 1 }}>4{item.CompanyContact}</p>
          <p style={{ flex: 1 }}>1{item.CompanyContact}</p>
          <p style={{ flex: 1 }}>2{item.Email}</p>
          <p style={{ flex: 1 }}>3{item.Name}</p>
          <p style={{ flex: 1 }}>4{item.CompanyContact}</p>
        </Box>
        <ChevronRightOutlined />
      </Button>
    );
  };
  render() {
    let { data, pressedData } = this.state;
    return (
      <Box style={{ display: 'flex', flexDirection: 'row' }}>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          {data.map((item) => this.getItems(item))}
        </Box>
        {pressedData ? (
          <Box
            style={{ flex: 1, margin: 20, width: '60%', overflow: 'hidden' }}
          >
            {JSON.stringify(pressedData)}
          </Box>
        ) : null}
      </Box>
    );
  }
}
