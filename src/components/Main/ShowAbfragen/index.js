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
  btnContainer: {
    height: 100,
    borderColor: 'lightgreen',
    borderStyle: 'solid',
    margin: 20,
    borderWidth: 0.5,
    borderRadius: 10,
    overflow: 'hidden',
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
    let { Name, Email, CompanyContact } = item;
    return (
      <Button
        style={styles.btnContainer}
        onClick={() => this.pressedContact(item)}
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
          {data.map((item) => this.getItems(item))}
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
