import React, { Component } from 'react';
import { Box, Button, Tab, Tabs, AppBar } from '@material-ui/core';
import ServerUtils from '../../../utils/ServerUtils';
import Test from '../TabHandler';

const styles = {
  email: {
    justifyContent: 'flex-start',
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end',
  },
  logoutBtn: {
    justifyContent: 'flex-end',
    flex: 1,
    display: 'flex',
  },
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgb(106, 172, 69)',
  },
};

export default class index extends Component {
  constructor(props) {
    super(props);
    this.ServerUtils = new ServerUtils();
    this.state = {
      value: 0,
    };
  }

  _Logout = async () => {
    await this.ServerUtils.logout();
  };

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    let { username, userRole } = this.props;
    let { value } = this.state;
    return (
      <>
        <AppBar position="static" style={styles.appBar}>
          <Tabs style={{ flex: 1 }} value={value} onChange={this.handleChange}>
            <Tab label="Informationen" />
            {userRole === 'user' || userRole === 'admin' ? (
              <Tab label="Formular" />
            ) : null}
            {userRole === 'admin' ? <Tab label="Verwaltung" /> : null}
          </Tabs>
          {username ? (
            <Box
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <Box style={styles.email}>
                <p
                  style={{
                    fontFamily: 'sans-serif',
                    fontSize: 15,
                    margin: 10,
                  }}
                >
                  {username}
                </p>
              </Box>
              <Box style={styles.logoutBtn}>
                <Button onClick={this._Logout}>Logout</Button>
              </Box>
            </Box>
          ) : null}
        </AppBar>
        <Test value={value} index={0} />
      </>
    );
  }
}
