import React, { Component } from 'react';
import { Box, Button, Tab, Tabs, AppBar } from '@material-ui/core';
import ServerUtils from '../../../utils/ServerUtils';
import TabHandler from '../TabHandler';
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

  _Login = () => {
    this.props.pressedLogin();
  };

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    let { username, userRole, fnb } = this.props;
    let { value } = this.state;
    return (
      <>
        <AppBar position="static" style={styles.appBar}>
          <Tabs style={{ flex: 1 }} value={value} onChange={this.handleChange}>
            <Tab label="Einleitung" />
            <Tab label="Formular" />
            <Tab label="Anleitung" />
            {userRole === 'user' || userRole === 'admin' ? (
              <Tab label="Verwaltung" />
            ) : null}
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
                    fontSize: 14,
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
          ) : (
            <Box style={styles.logoutBtn}>
              <Button onClick={this._Login}>Login</Button>
            </Box>
          )}
        </AppBar>
        <TabHandler value={value} index={0} fnb={fnb} />
      </>
    );
  }
}
