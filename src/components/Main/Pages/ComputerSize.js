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
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgb(106, 172, 69)',
  },
};

export default class computerSize extends Component {
  render() {
    let { username, userRole, fnb, value, phoneSize } = this.props;
    return (
      <AppBar position="static" style={styles.appBar}>
        <Tabs
          variant="scrollable"
          style={{
            width: '100%',
            display: 'flex',
            overflow: 'hidden',
          }}
          value={value}
          onChange={this.props.handleChange}
        >
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
              <Button onClick={() => this.props.logout()}>Logout</Button>
            </Box>
          </Box>
        ) : (
          <Box style={styles.logoutBtn}>
            <Button onClick={() => this.props.login()}>Login</Button>
          </Box>
        )}
      </AppBar>
    );
  }
}
